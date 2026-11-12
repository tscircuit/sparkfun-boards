import type { ChipProps } from "@tscircuit/props"

/**
 * Si7021-A20 - I2C Humidity and Temperature Sensor
 * DFN-6 package (3mm x 3mm)
 * Used on SparkFun Humidity and Temperature Sensor Breakout (SEN-13763)
 */
const pinLabels = {
  pin1: ["SDA"],
  pin2: ["GND"],
  pin3: ["GND2"],
  pin4: ["NC"],
  pin5: ["VDD"],
  pin6: ["SCL"],
} as const

export const Si7021 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...props}
      pinLabels={pinLabels}
      manufacturerPartNumber="SI7021-A20-IMR1"
      supplierPartNumbers={{
        jlcpcb: ["C94258"],
      }}
      footprint="dfn6_w3mm_h3mm_pl0.65mm_pw0.4mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin5", "pin4"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
    />
  )
}
