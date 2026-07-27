import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
} as const

export const SIMHolder = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin5", "pin6", "pin7", "pin8"],
        },
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C183630"],
      }}
      manufacturerPartNumber="SIM_007_P8"
      footprint="dfn_p2.54mm_w26.9mm_pw1.2mm_pl1.5mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=14bd29c6ae3146e2bc67df7fef051a04&pn=C183630",
        rotationOffset: { x: 180, y: 0, z: 0 },
        positionOffset: {
          x: -1.7999964000000546,
          y: 1.1368683772161603e-13,
          z: 1.8,
        },
      }}
      {...props}
    />
  )
}
