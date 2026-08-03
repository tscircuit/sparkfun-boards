import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
} as const

export const X6511FRS_03_C85D30 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C5142236"],
      }}
      manufacturerPartNumber="X6511FRS_03_C85D30"
      footprint="solderjumper3_pw1mm_ph2mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5142236.obj?uuid=c44f47884e984ffd99d4df712dfa4b96",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5142236.step?uuid=c44f47884e984ffd99d4df712dfa4b96",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.000500000000000167,
          y: 6.507000399999959,
          z: -2.4,
        },
      }}
      {...props}
    />
  )
}
