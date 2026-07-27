import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
} as const

export const MLT_9025 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C194481"],
      }}
      manufacturerPartNumber="MLT_9025"
      footprint="res_p8.3mm_pw4mm_ph1.75mm_pin1location(rightside,top)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C194481.obj?uuid=42b796922be747a686c3765d2ef6723c",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C194481.step?uuid=42b796922be747a686c3765d2ef6723c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.8, z: -0.01 },
      }}
      {...props}
    />
  )
}
