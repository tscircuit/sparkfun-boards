import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["CATHODE_SEN"],
  pin3: ["VDD"],
  pin4: ["ANODE"],
  pin5: ["CATHODE_LED"],
  pin6: ["INT"],
  pin7: ["SDA"],
  pin8: ["SCL"],
} as const

export const VCNL4040M3OE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        pin2: { marginTop: "0.15" },
        pin3: { marginBottom: "1.6" },
        pin4: { marginBottom: "0.3" },
        pin8: { marginBottom: "0.2" },
        pin6: { marginBottom: "0.2" },
      }}
      schWidth={2.5}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin7", "pin8", "pin6", "pin5", "pin2"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C142526"],
      }}
      manufacturerPartNumber="VCNL4040M3OE"
      footprint="dfn_p1.0749mm_w3.2022mm_pw0.602mm_pl1.126mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=263d838dce3c462a9139718e05588e07&pn=C142526",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
