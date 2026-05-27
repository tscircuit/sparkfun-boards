import type { ChipProps } from "@tscircuit/props"

/**
 * OPT4048DTSR - High-Speed High-Precision Tristimulus XYZ Color Sensor
 * WSON-6 package (1.5mm x 1mm)
 * I2C interface, address configurable via ADDR pin
 */
const pinLabels = {
  pin1: ["SCL"],
  pin2: ["SDA"],
  pin3: ["ADDR"],
  pin4: ["GND"],
  pin5: ["INT"],
  pin6: ["VDD"],
} as const

export const OPT4048 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...props}
      pinLabels={pinLabels}
      manufacturerPartNumber="OPT4048DTSR"
      supplierPartNumbers={{ jlcpcb: ["C2981883"] }}
      footprint="wson6_w1.5mm_h1mm_p0.5mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin5", "pin3"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin4"],
        },
      }}
    />
  )
}
