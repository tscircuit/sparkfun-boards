import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AUDD"],
  pin2: ["IOUDD"],
  pin3: ["RSUD6"],
  pin4: ["GND"],
  pin5: ["I2C_RST"],
  pin6: ["N_LP"],
  pin7: ["INT"],
  pin8: ["SCL"],
  pin9: ["SDA"],
} as const

export const VL53L5CX = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip pinLabels={pinLabels} manufacturerPartNumber="VL53L5CX" {...props} />
  )
}
