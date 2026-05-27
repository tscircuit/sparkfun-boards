import type { ChipProps } from "@tscircuit/props"

/**
 * W25Q128JVSIQ - 128Mbit SPI Flash
 * SOIC-8 package
 */
const pinLabels = {
  pin1: ["CS"],
  pin2: ["MISO"],
  pin3: ["WP"],
  pin4: ["GND"],
  pin5: ["MOSI"],
  pin6: ["SCK"],
  pin7: ["HOLD"],
  pin8: ["VCC"],
} as const

export const W25Q128 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...props}
      pinLabels={pinLabels}
      manufacturerPartNumber="W25Q128JVSIQ"
      supplierPartNumbers={{ jlcpcb: ["C97521"] }}
      footprint="soic8_w3.9mm_p1.27mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin5", "pin6", "pin7", "pin8"],
        },
      }}
    />
  )
}
