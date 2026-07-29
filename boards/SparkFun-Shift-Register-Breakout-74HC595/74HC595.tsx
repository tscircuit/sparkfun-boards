import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["QB"],
  pin2: ["QC"],
  pin3: ["QD"],
  pin4: ["QE"],
  pin5: ["QF"],
  pin6: ["QG"],
  pin7: ["QH"],
  pin8: ["GND"],
  pin9: ["QHS"],
  pin10: ["SCL"],
  pin11: ["SCK"],
  pin12: ["RCK"],
  pin13: ["G"],
  pin14: ["SER"],
  pin15: ["QA"],
  pin16: ["VCC"],
} as const

export const A_74HC595D_118 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C5947"],
      }}
      manufacturerPartNumber="A_74HC595D_118"
      footprint="dfn16_w7.4421mm_pw0.602mm_pl1.971mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=9adfdf34b7774b23880141fd3e8b4dbb&pn=C5947",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
