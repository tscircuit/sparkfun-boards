import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["T_NEG"],
  pin3: ["T_POS"],
  pin4: ["VCC"],
  pin5: ["SCK"],
  pin6: ["CS"],
  pin7: ["SO"],
  pin8: ["DNC"],
} as const

export const MAX31855KASA_T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C52028"],
      }}
      manufacturerPartNumber="MAX31855KASA+T"
      footprint="soic8_pillpads_w7.29mm_pw0.57mm_pl1.89mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52028.obj?uuid=3936dbd423424b148317d27cdee29b93",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C52028.step?uuid=3936dbd423424b148317d27cdee29b93",
        pcbRotationOffset: 270,
        modelOriginPosition: {
          x: -0.000012700000070253736,
          y: -0.000012700000070253736,
          z: -0.049425,
        },
      }}
      {...props}
    />
  )
}
