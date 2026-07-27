import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["GND"],
  pin3: ["ALERT"],
  pin4: ["ADD0"],
  pin5: ["VCC"],
  pin6: ["SDA"],
} as const

export const TMP102AIDRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        pin5: { bottomMargin: 0.8 },
        pin1: { bottomMargin: 0.4 },
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SDA", "SCL", "ALERT", "ADD0"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C99269"],
      }}
      manufacturerPartNumber="TMP102AIDRLR"
      footprint="sot563_p0.4999mm_pw0.3mm_pl0.6mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ec2270bac0544bf5afe06b24e8356512&pn=C99269",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
