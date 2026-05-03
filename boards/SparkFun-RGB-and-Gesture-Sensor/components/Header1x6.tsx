import type { PinHeaderProps } from "@tscircuit/props"

export const Header1x6 = (props: Omit<PinHeaderProps, "pinCount">) => (
  <pinheader
    pinCount={6}
    pinLabels={["VL", "GND", "VCC", "SDA", "SCL", "INT"]}
    footprint="pinrow6_p2.54_id1.016_od1.8796_nosquareplating_doublesidedpinlabel"
    schPinArrangement={{
      rightSide: {
        pins: ["INT", "SCL", "SDA", "VCC", "GND", "VL"],
        direction: "top-to-bottom",
      },
    }}
    {...props}
  />
)
