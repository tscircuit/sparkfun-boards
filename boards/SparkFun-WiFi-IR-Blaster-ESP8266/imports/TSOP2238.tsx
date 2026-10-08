import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["GND"],
  pin3: ["VS"],
} as const

export const TSOP2238 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C3000813"],
      }}
      manufacturerPartNumber="TSOP2238"
      footprint="pinrow3_od1.8mm_id1.2mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3000813.obj?uuid=b100c2376fd0415484c5612d70432280",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3000813.step?uuid=b100c2376fd0415484c5612d70432280",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.2082150999999559, z: -4.975007 },
      }}
      {...props}
    />
  )
}
