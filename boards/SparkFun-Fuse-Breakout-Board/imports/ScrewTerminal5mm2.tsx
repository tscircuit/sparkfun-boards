import type { ChipProps } from "@tscircuit/props"

const pinLabels = { pin1: ["pin1", "+"], pin2: ["pin2", "-"] } as const

export const ScrewTerminal5mm2 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C8465"] }}
    manufacturerPartNumber="SCREWTERMINAL-5MM-2"
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbX={-2.5}
          pcbY={0}
          shape="circle"
          holeDiameter={1.3}
          outerDiameter={2.032}
        />
        <platedhole
          portHints={["pin2"]}
          pcbX={2.5}
          pcbY={0}
          shape="circle"
          holeDiameter={1.3}
          outerDiameter={2.032}
        />
        <courtyardoutline
          outline={[
            { x: -5.25, y: -4.25 },
            { x: 5.25, y: -4.25 },
            { x: 5.25, y: 4.25 },
            { x: -5.25, y: 4.25 },
          ]}
        />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
