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
      manufacturerPartNumber="MAX31855KASA_T"
      footprint="dfn_w7.286mm_pw0.574mm_pl1.888mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=3936dbd423424b148317d27cdee29b93&pn=C52028",
        rotationOffset: { x: 90, y: 90, z: 270 },
        positionOffset: { x: -914.3700026, y: 685.8127, z: 4.443007700000112 },
      }}
      {...props}
    />
  )
}
