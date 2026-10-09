import type { ChipProps } from "@tscircuit/props"

// Diodes Inc. AP3602AKTR - 100mA regulated charge-pump voltage doubler,
// SOT23-6. Generates a local 5V rail from the 3.3V input rail.
const pinLabels = {
  pin1: ["VOUT"],
  pin2: ["GND"],
  pin3: ["SHDN"],
  pin4: ["CN"],
  pin5: ["VIN"],
  pin6: ["CP"],
} as const

export const AP3602AKTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="AP3602AKTR-G1"
      footprint="sot23_6"
      cadModel={null}
      {...props}
    />
  )
}
