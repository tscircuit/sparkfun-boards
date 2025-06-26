import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["T1OUT"],
  pin2: ["T2OUT"],
  pin3: ["R1IN"],
  pin4: ["R2IN"],
  pin5: ["VCC"],
  pin6: ["GND"],
  pin7: ["T1IN"],
  pin8: ["T2IN"],
  pin9: ["R1OUT"],
  pin10: ["R2OUT"],
} as const
export const JP = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinSpacing={0.28}
      schPinArrangement={{
        leftSide: {
          pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          direction: "top-to-bottom",
        },
      }}
      pcbY={-6.15}
      footprint="pinrow10_female_nosquareplating_pinlabelorthogonal"
      cadModel={null}
      {...props}
    />
  )
}
