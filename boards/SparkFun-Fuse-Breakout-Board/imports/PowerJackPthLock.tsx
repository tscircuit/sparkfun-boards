import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  PWR: ["PWR"],
  GND: ["GND"],
  GNDBREAK: ["GNDBREAK"],
} as const

export const PowerJackPthLock = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C16214"] }}
    manufacturerPartNumber="POWER_JACK_PTH_LOCK"
    footprint={
      <footprint>
        <platedhole
          portHints={["PWR"]}
          pcbX="0mm"
          pcbY="13.8778mm"
          shape="circle"
          holeDiameter="3.2mm"
          outerDiameter="4.1148mm"
        />
        <platedhole
          portHints={["GND"]}
          pcbX="0.0254mm"
          pcbY="6.557mm"
          shape="circle"
          holeDiameter="2.9972mm"
          outerDiameter="4.1148mm"
        />
        <platedhole
          portHints={["GNDBREAK"]}
          pcbX="3.7616mm"
          pcbY="10.7mm"
          shape="circle"
          holeDiameter="2.9972mm"
          outerDiameter="4.1148mm"
        />
        <silkscreenpath
          route={[
            { x: -4.3476, y: 3.254 },
            { x: 4.3476, y: 3.254 },
            { x: 4.3476, y: 14.2588 },
            { x: -4.3476, y: 14.2588 },
            { x: -4.3476, y: 3.254 },
          ]}
        />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
