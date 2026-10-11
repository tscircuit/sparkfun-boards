import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["PWR"],
  pin2: ["GND"],
  pin3: ["GNDBREAK"],
} as const

// Original POWER_JACK_PTH_LOCK package in SparkFun's Fuse Breakout Board.brd.
// https://github.com/sparkfun/SparkFun-Fuse-Breakout-Board/tree/master/Hardware
export const PowerJackPthLock = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    cadModel={null}
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbX={0}
          pcbY={13.8778}
          holeDiameter="3.2mm"
          outerDiameter="4.1148mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin2"]}
          pcbX={0.0254}
          pcbY={6.557}
          holeDiameter="2.9972mm"
          outerDiameter="4.1148mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin3"]}
          pcbX={3.7616}
          pcbY={10.7}
          holeDiameter="2.9972mm"
          outerDiameter="4.1148mm"
          shape="circle"
        />
        <silkscreenpath
          route={[
            { x: 4.3476, y: 14.2588 },
            { x: 2.4, y: 14.2588 },
          ]}
          strokeWidth="0.2032mm"
        />
        <silkscreenpath
          route={[
            { x: 4.3476, y: 3.254 },
            { x: 4.3476, y: 8.3 },
          ]}
          strokeWidth="0.2032mm"
        />
        <silkscreenpath
          route={[
            { x: 4.3476, y: 14.2588 },
            { x: 4.3476, y: 13 },
          ]}
          strokeWidth="0.2032mm"
        />
        <silkscreenpath
          route={[
            { x: -4.3476, y: 3.254 },
            { x: -4.3476, y: 14.2588 },
          ]}
          strokeWidth="0.2032mm"
        />
        <silkscreenpath
          route={[
            { x: -4.3476, y: 14.2588 },
            { x: -2.4, y: 14.2588 },
          ]}
          strokeWidth="0.2032mm"
        />
        <silkscreenpath
          route={[
            { x: -4.3476, y: 3.254 },
            { x: 4.3476, y: 3.254 },
          ]}
          strokeWidth="0.2032mm"
        />
        <courtyardrect
          pcbX={0.7357}
          pcbY={8.0176}
          width="10.6666mm"
          height="16.3352mm"
        />
      </footprint>
    }
    {...props}
  />
)
