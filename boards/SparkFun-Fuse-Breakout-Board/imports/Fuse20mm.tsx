import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
} as const

// SparkFun's FUSE_5MM package uses two clips with four round through-hole pads.
// Dimensions come from Hardware/SparkFun Fuse Breakout Board.brd in
// https://github.com/sparkfun/SparkFun-Fuse-Breakout-Board.
export const Fuse20mm = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    cadModel={null}
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          pcbY={-11.1125}
          holeDiameter="1.778mm"
          outerDiameter="2.667mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin2"]}
          pcbY={-6.0325}
          holeDiameter="1.778mm"
          outerDiameter="2.667mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin3"]}
          pcbY={6.0325}
          holeDiameter="1.778mm"
          outerDiameter="2.667mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin4"]}
          pcbY={11.1125}
          holeDiameter="1.778mm"
          outerDiameter="2.667mm"
          shape="circle"
        />
        <silkscreenrect
          pcbY={-8.5725}
          width="6.35mm"
          height="5.715mm"
          strokeWidth="0.2032mm"
        />
        <courtyardrect pcbY={-8.5725} width="6.85mm" height="8.247mm" />
        <silkscreenrect
          pcbY={8.5725}
          width="6.35mm"
          height="5.715mm"
          strokeWidth="0.2032mm"
        />
        <courtyardrect pcbY={8.5725} width="6.85mm" height="8.247mm" />
      </footprint>
    }
    {...props}
  />
)
