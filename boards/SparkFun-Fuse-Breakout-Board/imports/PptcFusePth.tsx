import type { ChipProps } from "@tscircuit/props"

const pinLabels = { pin1: ["pin1"], pin2: ["pin2"] } as const

export const PptcFusePth = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C70076"] }}
    manufacturerPartNumber="72V/0.25A_PTH"
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbX="-2.54mm"
          pcbY="0mm"
          shape="circle"
          holeDiameter="0.8mm"
          outerDiameter="1.8796mm"
        />
        <platedhole
          portHints={["pin2"]}
          pcbX="2.54mm"
          pcbY="0mm"
          shape="circle"
          holeDiameter="0.8mm"
          outerDiameter="1.8796mm"
        />
        <silkscreenpath
          route={[
            { x: -3.81, y: 1.524 },
            { x: 3.81, y: 1.524 },
            { x: 3.81, y: -1.524 },
            { x: -3.81, y: -1.524 },
            { x: -3.81, y: 1.524 },
          ]}
        />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
