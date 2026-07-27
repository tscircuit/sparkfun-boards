import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import { dirname, relative, resolve } from "node:path"
import {
  circuitJsonToFootprint,
  circuitJsonToFootprinter,
  footprinterStringToFootprint,
  summarizeCopperComparison,
} from "circuit-json-to-footprinter"
import ts from "typescript"

const DEFAULT_BOARDS_DIRECTORY = "boards"
const DEFAULT_REPORT_PATH = "reports/jlcpcb-footprint-conversion-report.json"
const MATCH_THRESHOLD = 0.99
const VERIFICATION_GRID_SIZE = 320

type ConversionStatus =
  | "already-string"
  | "below-threshold"
  | "converted"
  | "error"
  | "matched"
  | "unsupported"

interface Options {
  boardsDirectory: string
  reportPath: string
  write: boolean
}

interface ReportEntry {
  bestFootprinterString?: string
  component: string
  copperIoU?: number
  file: string
  holeIoU?: number
  jlcpcbPartNumbers: string[]
  line: number
  padCount?: number
  reason?: string
  status: ConversionStatus
}

interface Report {
  generatedAt: string
  options: {
    boardsDirectory: string
    threshold: number
    write: boolean
  }
  parts: ReportEntry[]
  summary: Record<ConversionStatus, number>
}

interface Replacement {
  end: number
  start: number
  value: string
}

interface InlineFootprintTarget {
  component: string
  footprintAttribute: ts.JsxAttribute
  jlcpcbPartNumbers: string[]
  line: number
  pads: CircuitElement[]
}

interface MatchResult {
  bestFootprinterString: string | undefined
  copperIoU: number
  holeIoU: number
}

type CircuitElement = Record<string, unknown>
type FootprinterCircuitJson = Parameters<typeof circuitJsonToFootprinter>[0]

const discoveryCache = new Map<string, MatchResult>()

const usage = `Usage: bun run convert:jlcpcb-footprints [options]

Scans JLCPCB-backed components with inline <footprint> JSX. A component is
rewritten only when both its copper and plated-hole intersection-over-union are
at least 99%.

Options:
  --write                 Apply qualifying replacements. The default is dry-run.
  --boards-dir <path>     Directory to scan (default: ${DEFAULT_BOARDS_DIRECTORY}).
  --report <path>         JSON report path (default: ${DEFAULT_REPORT_PATH}).
  --help                  Show this help text.
`

const parseOptions = (args: string[]): Options => {
  let boardsDirectory = DEFAULT_BOARDS_DIRECTORY
  let reportPath = DEFAULT_REPORT_PATH
  let write = false

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (argument === "--write") {
      write = true
      continue
    }
    if (argument === "--boards-dir" || argument === "--report") {
      const value = args[index + 1]
      if (!value || value.startsWith("--")) {
        throw new Error(`${argument} requires a path`)
      }
      if (argument === "--boards-dir") boardsDirectory = value
      else reportPath = value
      index += 1
      continue
    }
    if (argument === "--help") {
      console.log(usage)
      process.exit(0)
    }
    throw new Error(`Unknown argument: ${argument}`)
  }

  return { boardsDirectory, reportPath, write }
}

const getTagName = (
  openingElement: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
) => openingElement.tagName.getText()

const getAttribute = (
  openingElement: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  name: string,
) => {
  const attribute = openingElement.attributes.properties.find(
    (property): property is ts.JsxAttribute =>
      ts.isJsxAttribute(property) && property.name.getText() === name,
  )
  return attribute
}

const getExpression = (attribute: ts.JsxAttribute | undefined) => {
  if (!attribute || !attribute.initializer) return undefined
  if (ts.isStringLiteral(attribute.initializer)) return undefined
  return ts.isJsxExpression(attribute.initializer)
    ? (attribute.initializer.expression ?? undefined)
    : undefined
}

const getAttributeText = (attribute: ts.JsxAttribute | undefined) => {
  if (!attribute?.initializer) return undefined
  if (ts.isStringLiteral(attribute.initializer))
    return attribute.initializer.text
  const expression = getExpression(attribute)
  return expression?.getText()
}

const getAttributeString = (
  openingElement: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  name: string,
) => getAttributeText(getAttribute(openingElement, name))

const parseLength = (value: string | undefined) => {
  if (!value) return undefined
  const normalized = value.trim().replace(/^\{/, "").replace(/\}$/, "")
  const match = normalized.match(
    /^([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)\s*(mm|mil|in)?$/i,
  )
  if (!match) return undefined

  const number = Number(match[1])
  if (!Number.isFinite(number)) return undefined
  const unit = match[2]?.toLowerCase()
  if (unit === "mil") return number * 0.0254
  if (unit === "in") return number * 25.4
  return number
}

const getNumberAttribute = (
  openingElement: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  names: string[],
) => {
  for (const name of names) {
    const value = parseLength(getAttributeString(openingElement, name))
    if (value !== undefined) return value
  }
  return undefined
}

const getPortHints = (
  openingElement: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
) => {
  const text = getAttributeString(openingElement, "portHints")
  if (!text) return []
  return [...text.matchAll(/["']([^"']+)["']/g)].map((match) => match[1])
}

const getSupplierPartNumbers = (
  openingElement: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
) => {
  const expression = getExpression(
    getAttribute(openingElement, "supplierPartNumbers"),
  )
  if (!expression || !ts.isObjectLiteralExpression(expression)) return []

  const jlcpcbProperty = expression.properties.find((property) => {
    if (!ts.isPropertyAssignment(property)) return false
    return property.name.getText() === "jlcpcb"
  })
  if (!jlcpcbProperty || !ts.isPropertyAssignment(jlcpcbProperty)) return []
  if (!ts.isArrayLiteralExpression(jlcpcbProperty.initializer)) return []

  return jlcpcbProperty.initializer.elements.flatMap((element) =>
    ts.isStringLiteral(element) || ts.isNoSubstitutionTemplateLiteral(element)
      ? [element.text]
      : [],
  )
}

const getFootprintElement = (
  footprintAttribute: ts.JsxAttribute | undefined,
) => {
  const expression = getExpression(footprintAttribute)
  if (!expression || !ts.isJsxElement(expression)) return undefined
  return getTagName(expression.openingElement) === "footprint"
    ? expression
    : undefined
}

const getPadElement = (
  openingElement: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  index: number,
) => {
  const tagName = getTagName(openingElement)
  const x = getNumberAttribute(openingElement, ["pcbX", "x"])
  const y = getNumberAttribute(openingElement, ["pcbY", "y"])
  if (x === undefined || y === undefined) return undefined

  const portHints = getPortHints(openingElement)
  const rotation = getNumberAttribute(openingElement, [
    "pcbRotation",
    "ccwRotation",
    "rotation",
  ])
  const shape = getAttributeString(openingElement, "shape")

  if (tagName === "smtpad") {
    const radius = getNumberAttribute(openingElement, ["radius"])
    const width =
      getNumberAttribute(openingElement, ["width"]) ??
      (radius === undefined ? undefined : radius * 2)
    const height = getNumberAttribute(openingElement, ["height"]) ?? width
    if (width === undefined || height === undefined) return undefined

    return {
      ccw_rotation: rotation,
      height,
      pcb_smtpad_id: `source_smtpad_${index + 1}`,
      port_hints: portHints,
      radius,
      shape,
      type: "pcb_smtpad",
      width,
      x,
      y,
    } satisfies CircuitElement
  }

  if (tagName !== "platedhole") return undefined

  const outerDiameter = getNumberAttribute(openingElement, [
    "outerDiameter",
    "outer_diameter",
  ])
  const outerWidth =
    getNumberAttribute(openingElement, [
      "outerWidth",
      "outer_width",
      "width",
    ]) ?? outerDiameter
  const outerHeight =
    getNumberAttribute(openingElement, [
      "outerHeight",
      "outer_height",
      "height",
    ]) ?? outerWidth
  if (outerWidth === undefined || outerHeight === undefined) return undefined

  return {
    ccw_rotation: rotation,
    hole_diameter: getNumberAttribute(openingElement, [
      "holeDiameter",
      "hole_diameter",
    ]),
    hole_height: getNumberAttribute(openingElement, [
      "holeHeight",
      "hole_height",
    ]),
    hole_width: getNumberAttribute(openingElement, ["holeWidth", "hole_width"]),
    outer_diameter: outerDiameter,
    outer_height: outerHeight,
    outer_width: outerWidth,
    pcb_plated_hole_id: `source_platedhole_${index + 1}`,
    port_hints: portHints,
    shape,
    type: "pcb_plated_hole",
    x,
    y,
  } satisfies CircuitElement
}

const getFootprintPads = (footprint: ts.JsxElement) => {
  const pads: CircuitElement[] = []
  let ignoredPadCount = 0

  const visit = (node: ts.Node) => {
    if (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) {
      const tagName = getTagName(node)
      if (tagName === "smtpad" || tagName === "platedhole") {
        const pad = getPadElement(node, pads.length + ignoredPadCount)
        if (pad) pads.push(pad)
        else ignoredPadCount += 1
      }
    }
    ts.forEachChild(node, visit)
  }

  for (const child of footprint.children) visit(child)
  return { ignoredPadCount, pads }
}

const getInlineFootprintTargets = (sourceFile: ts.SourceFile) => {
  const targets: InlineFootprintTarget[] = []

  const visit = (node: ts.Node) => {
    if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node)) {
      const openingElement = ts.isJsxElement(node) ? node.openingElement : node
      const jlcpcbPartNumbers = getSupplierPartNumbers(openingElement)
      const footprintAttribute = getAttribute(openingElement, "footprint")
      const footprint = getFootprintElement(footprintAttribute)

      if (jlcpcbPartNumbers.length > 0 && footprint && footprintAttribute) {
        const { ignoredPadCount, pads } = getFootprintPads(footprint)
        const manufacturerPartNumber = getAttributeString(
          openingElement,
          "manufacturerPartNumber",
        )
        targets.push({
          component:
            manufacturerPartNumber ?? jlcpcbPartNumbers.join(", ") ?? "unknown",
          footprintAttribute,
          jlcpcbPartNumbers,
          line:
            sourceFile.getLineAndCharacterOfPosition(
              openingElement.getStart(sourceFile),
            ).line + 1,
          pads,
        })
        if (ignoredPadCount > 0) {
          // The padded target remains intentionally conservative: a target with
          // incomplete geometry is reported as unsupported below.
          pads.splice(0, pads.length)
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return targets
}

const getExistingStringEntries = (sourceFile: ts.SourceFile, file: string) => {
  const entries: ReportEntry[] = []

  const visit = (node: ts.Node) => {
    if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node)) {
      const openingElement = ts.isJsxElement(node) ? node.openingElement : node
      const jlcpcbPartNumbers = getSupplierPartNumbers(openingElement)
      const footprintAttribute = getAttribute(openingElement, "footprint")
      const footprintText = getAttributeText(footprintAttribute)
      const isStringFootprint =
        !!footprintAttribute &&
        (!!(
          footprintAttribute.initializer &&
          ts.isStringLiteral(footprintAttribute.initializer)
        ) ||
          /^\s*["'][^"']+["']\s*$/.test(footprintText ?? ""))

      if (jlcpcbPartNumbers.length > 0 && isStringFootprint) {
        entries.push({
          component:
            getAttributeString(openingElement, "manufacturerPartNumber") ??
            jlcpcbPartNumbers.join(", "),
          file,
          jlcpcbPartNumbers,
          line:
            sourceFile.getLineAndCharacterOfPosition(
              openingElement.getStart(sourceFile),
            ).line + 1,
          reason: "already uses a footprint string",
          status: "already-string",
        })
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return entries
}

const findTsxFiles = async (directory: string): Promise<string[]> => {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = resolve(directory, entry.name)
      if (entry.isDirectory()) return findTsxFiles(path)
      return entry.isFile() && (path.endsWith(".tsx") || path.endsWith(".ts"))
        ? [path]
        : []
    }),
  )
  return files.flat().sort()
}

const round = (value: number) => Number(value.toFixed(6))

const findBestMatch = (
  pads: CircuitElement[],
  sourceHints: string[],
): MatchResult => {
  const cacheKey = JSON.stringify({ pads, sourceHints })
  const cached = discoveryCache.get(cacheKey)
  if (cached) return cached

  const input = pads as unknown as FootprinterCircuitJson
  const sourceFootprint = circuitJsonToFootprint(input, { sourceHints })
  const result = circuitJsonToFootprinter(input, {
    maxCandidates: 1,
    sourceHints,
  })
  const bestFootprinterString = result.best?.footprinterString
  if (!bestFootprinterString) {
    const noMatch = { bestFootprinterString, copperIoU: 0, holeIoU: 0 }
    discoveryCache.set(cacheKey, noMatch)
    return noMatch
  }

  // Discovery uses its fast comparison to rank candidates. Confirm the winner
  // at a denser grid before replacing source code.
  const comparison = summarizeCopperComparison(
    sourceFootprint,
    footprinterStringToFootprint(bestFootprinterString),
    VERIFICATION_GRID_SIZE,
  )
  const match = {
    bestFootprinterString,
    copperIoU: round(comparison.copperIntersectionOverUnion),
    holeIoU: round(comparison.holeIntersectionOverUnion),
  }
  discoveryCache.set(cacheKey, match)
  return match
}

const createReport = (options: Options, parts: ReportEntry[]): Report => {
  const summary: Record<ConversionStatus, number> = {
    "already-string": 0,
    "below-threshold": 0,
    converted: 0,
    error: 0,
    matched: 0,
    unsupported: 0,
  }
  for (const part of parts) summary[part.status] += 1

  return {
    generatedAt: new Date().toISOString(),
    options: {
      boardsDirectory: options.boardsDirectory,
      threshold: MATCH_THRESHOLD,
      write: options.write,
    },
    parts,
    summary,
  }
}

const main = async () => {
  const options = parseOptions(process.argv.slice(2))
  const workingDirectory = process.cwd()
  const boardsDirectory = resolve(workingDirectory, options.boardsDirectory)
  const reportPath = resolve(workingDirectory, options.reportPath)
  const files = await findTsxFiles(boardsDirectory)
  const reportEntries: ReportEntry[] = []

  for (const file of files) {
    const source = await readFile(file, "utf8")
    const sourceFile = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    )
    const displayFile = relative(workingDirectory, file)
    const replacements: Replacement[] = []

    reportEntries.push(...getExistingStringEntries(sourceFile, displayFile))

    for (const target of getInlineFootprintTargets(sourceFile)) {
      if (target.pads.length === 0) {
        reportEntries.push({
          component: target.component,
          file: displayFile,
          jlcpcbPartNumbers: target.jlcpcbPartNumbers,
          line: target.line,
          reason:
            "inline footprint contains unsupported or incomplete pad geometry",
          status: "unsupported",
        })
        continue
      }

      try {
        const match = findBestMatch(target.pads, [
          ...target.jlcpcbPartNumbers,
          target.component,
        ])
        const isMatch =
          match.copperIoU >= MATCH_THRESHOLD && match.holeIoU >= MATCH_THRESHOLD
        const entry: ReportEntry = {
          bestFootprinterString: match.bestFootprinterString,
          component: target.component,
          copperIoU: match.copperIoU,
          file: displayFile,
          holeIoU: match.holeIoU,
          jlcpcbPartNumbers: target.jlcpcbPartNumbers,
          line: target.line,
          padCount: target.pads.length,
          status: isMatch
            ? options.write
              ? "converted"
              : "matched"
            : "below-threshold",
        }
        reportEntries.push(entry)

        if (options.write && isMatch && match.bestFootprinterString) {
          replacements.push({
            end: target.footprintAttribute.getEnd(),
            start: target.footprintAttribute.getStart(sourceFile),
            value: `footprint=${JSON.stringify(match.bestFootprinterString)}`,
          })
        }
      } catch (error) {
        reportEntries.push({
          component: target.component,
          file: displayFile,
          jlcpcbPartNumbers: target.jlcpcbPartNumbers,
          line: target.line,
          padCount: target.pads.length,
          reason: error instanceof Error ? error.message : String(error),
          status: "error",
        })
      }
    }

    if (options.write && replacements.length > 0) {
      const updatedSource = replacements
        .sort((left, right) => right.start - left.start)
        .reduce(
          (text, replacement) =>
            `${text.slice(0, replacement.start)}${replacement.value}${text.slice(replacement.end)}`,
          source,
        )
      await writeFile(file, updatedSource)
    }
  }

  const report = createReport(options, reportEntries)
  await mkdir(dirname(reportPath), { recursive: true })
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`)

  console.table(
    report.parts
      .filter(
        (part) =>
          part.status === "below-threshold" ||
          part.status === "converted" ||
          part.status === "matched" ||
          part.status === "error",
      )
      .map((part) => ({
        component: part.component,
        copperIoU: part.copperIoU,
        file: part.file,
        footprinter: part.bestFootprinterString,
        holeIoU: part.holeIoU,
        status: part.status,
      })),
  )
  console.log(`Wrote report: ${relative(workingDirectory, reportPath)}`)
  console.log("Summary:", report.summary)
}

try {
  await main()
} catch (error) {
  console.error(error instanceof Error ? error.stack : error)
  process.exitCode = 1
}
