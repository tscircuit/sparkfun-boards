import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
} as const

export const Fuse20mm = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C70076"] }}
    manufacturerPartNumber="FUSEX20MM"
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbX="0mm"
          pcbY="-11.1125mm"
          shape="circle"
          holeDiameter="1.778mm"
          outerDiameter="3.2mm"
        />
        <platedhole
          portHints={["pin2"]}
          pcbX="0mm"
          pcbY="-6.0325mm"
          shape="circle"
          holeDiameter="1.778mm"
          outerDiameter="3.2mm"
        />
        <platedhole
          portHints={["pin3"]}
          pcbX="0mm"
          pcbY="6.0325mm"
          shape="circle"
          holeDiameter="1.778mm"
          outerDiameter="3.2mm"
        />
        <platedhole
          portHints={["pin4"]}
          pcbX="0mm"
          pcbY="11.1125mm"
          shape="circle"
          holeDiameter="1.778mm"
          outerDiameter="3.2mm"
        />
        <silkscreenpath
          route={[
            { x: -3.175, y: 11.43 },
            { x: 3.175, y: 11.43 },
            { x: 3.175, y: 5.715 },
            { x: -3.175, y: 5.715 },
            { x: -3.175, y: 11.43 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -3.175, y: -11.43 },
            { x: 3.175, y: -11.43 },
            { x: 3.175, y: -5.715 },
            { x: -3.175, y: -5.715 },
            { x: -3.175, y: -11.43 },
          ]}
        />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
