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
  pin9: ["pin9"],
  pin10: ["IN_POS"],
} as const

export const INA228AIDGST = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2862904"],
      }}
      manufacturerPartNumber="INA228AIDGST"
      footprint="dfn10_p0.5mm_w6mm_pw0.3mm_pl1.3mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862904.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862904.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  )
}
