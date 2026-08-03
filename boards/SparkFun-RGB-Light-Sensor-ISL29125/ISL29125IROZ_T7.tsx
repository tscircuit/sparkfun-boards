import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["NC"],
  pin3: ["GND"],
  pin4: ["SDA"],
  pin5: ["N_INT"],
  pin6: ["SCL"],
} as const

export const ISL29125IROZ_T7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        pin1: { bottomMargin: 0.2 },
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin6", "pin5"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin3"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2654928"],
      }}
      manufacturerPartNumber="ISL29125IROZ_T7"
      footprint="dfn6_p0.4999mm_w2.0201mm_pw0.28mm_pl0.585mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c3573a408ad54846819a6670160fd2d9&pn=C2654928",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
