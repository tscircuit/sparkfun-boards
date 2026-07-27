import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
} as const

export const CA45_D_10V_100uF_K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C503925"],
      }}
      manufacturerPartNumber="CA45_D_10V_100uF_K"
      footprint="res_p6mm_pw2.7991mm_ph3.0099mm_pin1location(rightside,top)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C503925.obj?uuid=54b4a7b9b595470ba3bec66fde072b82",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C503925.step?uuid=54b4a7b9b595470ba3bec66fde072b82",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -1.616759 },
      }}
      {...props}
    />
  )
}
