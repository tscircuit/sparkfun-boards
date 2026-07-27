import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["GNDC"],
  pin3: ["GPIO0"],
  pin4: ["N_INT"],
  pin5: ["SCL"],
  pin6: ["SDA"],
  pin7: ["VDD"],
  pin8: ["GND"],
  pin9: ["EN"],
  pin10: ["GPIO1"],
  pin11: ["GNDV"],
  pin12: ["VDDV"],
} as const

export const TMF8821_1AM = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      connections={{
        pin1: sel.U1.pin7,
        pin12: sel.U1.pin1,
        pin2: sel.U1.pin11,
        pin11: sel.U1.pin8,
        pin3: sel.net().GPIO0,
        pin10: sel.net().GPIO1,
        pin5: sel.net().SCL,
        pin6: sel.net().SDA,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "EN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["N_INT", "GPIO0", "GPIO1", "SCL", "SDA"],
        },
      }}
      schPinStyle={{
        pin1: {
          bottomMargin: 0.18,
        },
        pin9: {
          bottomMargin: 0.18,
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C17253284"],
      }}
      manufacturerPartNumber="TMF8821_1AM"
      footprint="dfn12_p0.8199mm_w1.86mm_pw0.35mm_pl0.5mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=61f7a9790a5d40ba85a5e4d2b3f458d8&pn=C17253284",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
