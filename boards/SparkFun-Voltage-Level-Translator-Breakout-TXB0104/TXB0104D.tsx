import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCCA"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["NC1"],
  pin7: ["GND"],
  pin8: ["OE"],
  pin9: ["NC2"],
  pin10: ["B4"],
  pin11: ["B3"],
  pin12: ["B2"],
  pin13: ["B1"],
  pin14: ["VCCB"],
} as const

export const TXB0104D = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1549752"],
      }}
      manufacturerPartNumber="TXB0104D"
      footprint="dfn14_w7.5762mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=265efcdb862f47cf9eef6843d570fde7&pn=C1549752",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0.000025400000140507473, z: 0 },
      }}
      {...props}
    />
  )
}
