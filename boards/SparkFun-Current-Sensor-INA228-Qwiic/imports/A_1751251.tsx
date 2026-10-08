import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
} as const

export const A_1751251 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C91152"],
      }}
      manufacturerPartNumber="1751251"
      footprint="pinrow3_nosquareplating_p3.5mm_od2.2mm_id1.4mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91152.obj?uuid=0b4d57e4edc5417eb4c2c3fd5c88e90f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91152.step?uuid=0b4d57e4edc5417eb4c2c3fd5c88e90f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 3.5,
          y: 0.000012700000070253736,
          z: -4.250007,
        },
      }}
      {...props}
    />
  )
}
