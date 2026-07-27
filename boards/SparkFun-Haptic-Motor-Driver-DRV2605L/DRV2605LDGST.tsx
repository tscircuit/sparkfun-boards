import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["REG"],
  pin2: ["SCL"],
  pin3: ["SDA"],
  pin4: ["IN_TRIG"],
  pin5: ["EN"],
  pin6: ["VDD_NC"],
  pin7: ["OUT_N"],
  pin8: ["GND"],
  pin9: ["OUT_P"],
  pin10: ["VDD"],
} as const

export const DRV2605LDGST = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["REG", "SDA", "SCL", "IN_TRIG", "EN"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VDD_NC", "OUT_N", "GND", "OUT_P", "VDD"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C425927"],
      }}
      manufacturerPartNumber="DRV2605LDGST"
      footprint="dfn10_p0.4999mm_w6mm_pw0.3mm_pl1.3mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=854098f5cce54b6caab82164a7d3deef&pn=C425927",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
