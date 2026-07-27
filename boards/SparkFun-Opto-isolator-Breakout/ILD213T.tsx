import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["C11"],
  pin3: ["A2"],
  pin4: ["C21"],
  pin5: ["E1"],
  pin6: ["C12"],
  pin7: ["E2"],
  pin8: ["C22"],
} as const

export const ILD213T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C435834"],
      }}
      manufacturerPartNumber="ILD213T"
      footprint="dfn_w6.6798mm_pw0.91mm_pl1.2mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=61eacee788cc4ebfb3195079c1eb215f&pn=C435834",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
