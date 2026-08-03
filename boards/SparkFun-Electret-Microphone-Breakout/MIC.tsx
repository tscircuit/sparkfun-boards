import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
} as const

export const GMI9745P_30db = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C233955"],
      }}
      manufacturerPartNumber="GMI9745P_30db"
      footprint="axial_od1.6764mm_id0.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d58f406863284e7ab4a14d28d76d2085&pn=C233955",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: {
          x: 2,
          y: 0,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
