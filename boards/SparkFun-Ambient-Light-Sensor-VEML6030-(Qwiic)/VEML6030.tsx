import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["SDA"],
  pin3: ["INT"],
  pin4: ["ADD"],
  pin5: ["SCL"],
  pin6: ["VDD"],
} as const

export const VEML6030 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C132182"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin6"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin5", "pin4", "pin3"],
        },
      }}
      manufacturerPartNumber="VEML6030"
      footprint="dfn6_p0.6495mm_w2.4001mm_pw0.45mm_pl0.65mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4524f635bbc740058d5f3b214807d25b&pn=C132182",
        rotationOffset: { x: 180, y: 0, z: 0 },
        positionOffset: {
          x: -0.0001015999999935957,
          y: 0.0001015999999935957,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
