import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: "CS",
  pin2: "DO",
  pin3: "WP",
  pin4: "GND",
  pin5: "DI",
  pin6: "CLK",
  pin7: "HOLD",
  pin8: "VCC",
} as const

export const W25Q128JV = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="W25Q128JV"
    {...props}
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["pin1", "pin2", "pin3", "pin4"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["pin8", "pin7", "pin6", "pin5"],
      },
    }}
  />
)
