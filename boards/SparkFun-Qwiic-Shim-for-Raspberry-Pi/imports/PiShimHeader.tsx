import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC"],
  pin2: ["5V_A"],
  pin3: ["SDA"],
  pin4: ["5V_B"],
  pin5: ["SCL"],
  pin6: ["GND"],
} as const

export const PiShimHeader = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    schWidth={1.1}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["NC", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["5V_A", "5V_B", "GND"],
      },
    }}
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbX="-2.54mm"
          pcbY="-1.0922mm"
          outerDiameter="1.524mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin2"]}
          pcbX="-2.5273mm"
          pcbY="1.0846mm"
          outerWidth="2.286mm"
          outerHeight="1.27mm"
          holeWidth="2.032mm"
          holeHeight="1.016mm"
          shape="pill"
        />
        <platedhole
          portHints={["pin3"]}
          pcbX="0mm"
          pcbY="-1.0922mm"
          outerDiameter="1.651mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin4"]}
          pcbX="0.0127mm"
          pcbY="1.0846mm"
          outerWidth="2.286mm"
          outerHeight="1.27mm"
          holeWidth="2.032mm"
          holeHeight="1.016mm"
          shape="pill"
        />
        <platedhole
          portHints={["pin5"]}
          pcbX="2.54mm"
          pcbY="-1.0922mm"
          outerDiameter="1.651mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin6"]}
          pcbX="2.5527mm"
          pcbY="1.0846mm"
          outerWidth="2.286mm"
          outerHeight="1.27mm"
          holeWidth="2.032mm"
          holeHeight="1.016mm"
          shape="pill"
        />
        <silkscreenpath
          route={[
            { x: -3.175, y: -2.875 },
            { x: -1.905, y: -2.875 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
)
