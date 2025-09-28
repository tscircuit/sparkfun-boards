import { sel } from "@tscircuit/core"

type JumpersGridConnections =
  | Record<string, any>
  | ((ctx: {
      row: number
      column: number
      index: number
      name: string
    }) => Record<string, any>)

type JumpersGridOptions = {
  startX: number
  startY: number
  columns: number
  rows: number
  horizontalPitch: number
  verticalPitch: number
  rowDirection?: "up" | "down"
  namePrefix?: string
  footprint?: string
  cadModel?: any
  schPinArrangement?: any
  pcbRotation?: number
  connections?: JumpersGridConnections
  // Schematic placement options
  schStartX?: number
  schStartY?: number
  schStepX?: number
  schStepY?: number
  schRowPattern?: number[]
}

function createJumpersGrid(options: JumpersGridOptions) {
  const {
    startX,
    startY,
    columns,
    rows,
    horizontalPitch,
    verticalPitch,
    rowDirection = "up",
    namePrefix = "JP",
    footprint = "pinrow5_p2.54_id1.016_od1.626_nosquareplating_nopinlabels",
    cadModel = null,
    schPinArrangement = {
      rightSide: {
        direction: "bottom-to-top",
        pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
      },
    },
    pcbRotation = 0,
    connections,
    schStartX = 0,
    schStartY = 0,
    schStepX = 1.5,
    schStepY = -2,
    schRowPattern = [10, 7, 10, 7],
  } = options

  const jumpers: any[] = []
  const dy = rowDirection === "up" ? verticalPitch : -verticalPitch
  const pattern =
    Array.isArray(schRowPattern) && schRowPattern.length > 0
      ? schRowPattern
      : [10, 7, 10, 7]

  let index = 1
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const name = `${namePrefix}${index}`
      const pcbX = startX + c * horizontalPitch
      const pcbY = startY + r * dy * -1
      // Compute schematic coordinates with row pattern [10,7,10,7,...]
      const zeroBasedIndex = index - 1
      let remaining = zeroBasedIndex
      let schematicRow = 0
      while (true) {
        const patternIndex = schematicRow % pattern.length
        const rowCapacity = pattern[patternIndex] ?? 1
        if (remaining < rowCapacity) break
        remaining -= rowCapacity
        schematicRow += 1
      }
      const schematicColumnInRow = remaining
      const schX = schStartX + schematicColumnInRow * schStepX
      const schY = schStartY + schematicRow * schStepY
      const resolvedConnections =
        typeof connections === "function"
          ? connections({ row: r, column: c, index, name })
          : connections
      jumpers.push(
        <jumper
          name={name}
          cadModel={cadModel}
          footprint={footprint}
          schPinArrangement={schPinArrangement}
          schX={schX}
          schY={schY}
          pcbX={pcbX}
          pcbY={pcbY}
          pcbRotation={pcbRotation}
          connections={resolvedConnections}
        />,
      )
      index += 1
    }
  }

  return jumpers
}

export default () => (
  <board width="45.72mm" height="33.02mm">
    <silkscreentext text="1" pcbX={-6} pcbY={11.7} fontSize={1.5} />
    <silkscreentext text="20" pcbX={5.5} pcbY={11.7} fontSize={1.5} />
    <silkscreentext text="SOIC-20" pcbY={-11.5} fontSize={1.5} />

    {createJumpersGrid({
      startX: -20.32,
      startY: -8.89,
      columns: 17,
      rows: 2,
      horizontalPitch: 2.54,
      verticalPitch: 17.77,
      rowDirection: "down",
      namePrefix: "JP",
      footprint: "pinrow5_p2.54_id1.016_od1.88_nosquareplating_nopinlabels",
      cadModel: null,
      schPinArrangement: {
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
        },
      },
      pcbRotation: 90,
      connections: ({ name }) => ({
        pin1: sel<"pin2">(name).pin2,
        pin2: sel<"pin3">(name).pin3,
        pin3: sel<"pin4">(name).pin4,
        pin4: sel<"pin5">(name).pin5,
      }),
    })}
    <platedhole
      outerDiameter={4.572}
      holeDiameter={3.048}
      shape="circle"
      pcbX={-18.5}
    />
    <platedhole
      outerDiameter={4.572}
      holeDiameter={3.048}
      shape="circle"
      pcbX={18.5}
    />
  </board>
)
