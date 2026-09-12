import type { ChipProps } from "@tscircuit/props"

const pinLabels = { pin1: ["pin1"], pin2: ["pin2"] } as const

export const PptcFusePth = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C192570"] }}
    manufacturerPartNumber="FRX025-60F"
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbX={-2.54}
          pcbY={0}
          shape="circle"
          holeDiameter={0.8}
          outerDiameter={1.8796}
        />
        <platedhole
          portHints={["pin2"]}
          pcbX={2.54}
          pcbY={0}
          shape="circle"
          holeDiameter={0.8}
          outerDiameter={1.8796}
        />
        <courtyardoutline
          outline={[
            { x: -3.95, y: -1.8 },
            { x: 3.95, y: -1.8 },
            { x: 3.95, y: 1.8 },
            { x: -3.95, y: 1.8 },
          ]}
        />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
