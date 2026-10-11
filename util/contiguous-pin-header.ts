import { fp } from "@tscircuit/footprinter"
import type { FootprintSoupElements } from "@tscircuit/props"

/** Header sections sharing one strip do not need assembly gaps at their seams. */
export function contiguousPinHeader(
  definition: string,
): FootprintSoupElements[] {
  const count = Number(definition.match(/^pinrow(\d+)/)?.[1])
  if (!count) throw new Error("Expected a pin-row footprint")
  return fp
    .string(definition)
    .circuitJson()
    .map((element) =>
      element.type === "pcb_courtyard_rect"
        ? { ...element, width: (count - 1) * 2.54 + 2.5 }
        : element,
    ) as FootprintSoupElements[]
}
