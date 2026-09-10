import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A0"],
  pin3: ["ALERT"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["VS"],
  pin7: ["GND"],
  pin8: ["VBUS"],
  pin9: ["IN_NEG"],
  pin10: ["IN_POS"],
} as const

const pinAttributes = {
  pin7: { requiresGround: true },
} as const

export const INA237AIDGSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C2864837"],
      }}
      manufacturerPartNumber="INA237AIDGSR"
      footprint="tssop10_w3.15mm_p0.5mm_pl1.4mm_pw0.3mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864837.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2864837.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  )
}
