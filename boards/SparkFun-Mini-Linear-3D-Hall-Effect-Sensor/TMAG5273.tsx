import type { ChipProps } from "@tscircuit/props"

export const pinLabels = {
  pin1: "SCL",
  pin2: "GND",
  pin3: "TEST",
  pin4: "VCC",
  pin5: "N_INT",
  pin6: "SDA",
} as const

export const TMAG5273 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      footprint="sot6"
      pinLabels={pinLabels}
      {...props}
      manufacturerPartNumber="TMAG5273"
    />
  )
}
