import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["V_NEG"],
  pin3: ["IN_POS"],
  pin4: ["IN_NEG"],
  pin5: ["V_POS"],
} as const

export const OPA344NA_250 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C131974"],
      }}
      manufacturerPartNumber="OPA344NA_250"
      footprint="dfn6_missing(5)_p0.95mm_w3.7002mm_pl1.1mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=460193f9bf2d42e58cf3c2f675b07dc6&pn=C131974",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: {
          x: 0,
          y: -1.1368683772161603e-13,
          z: -0.4499594000000229,
        },
      }}
      {...props}
    />
  )
}
