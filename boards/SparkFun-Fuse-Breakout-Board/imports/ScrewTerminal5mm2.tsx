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
          pcbX="0mm"
          pcbY="0mm"
          shape="circle"
          holeDiameter="1.3mm"
          outerDiameter="2.032mm"
        />
        <platedhole
          portHints={["pin2"]}
          pcbX="5mm"
          pcbY="0mm"
          shape="circle"
          holeDiameter="1.3mm"
          outerDiameter="2.032mm"
        />
        <silkscreenpath
          route={[
            { x: -3.1, y: 4.2 },
            { x: 8.1, y: 4.2 },
            { x: 8.1, y: -3.3 },
            { x: -3.1, y: -3.3 },
            { x: -3.1, y: 4.2 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -3.1, y: -2.3 },
            { x: 8.1, y: -2.3 },
          ]}
        />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
