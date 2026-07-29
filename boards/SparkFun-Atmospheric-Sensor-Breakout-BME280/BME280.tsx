import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["GND2"],
  pin3: ["VDDIO"],
  pin4: ["SDO_ADR"],
  pin5: ["SCK_SCL"],
  pin6: ["SDI_SDA"],
  pin7: ["N_CS"],
  pin8: ["GND1"],
} as const

export const BME280 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C92489"],
      }}
      manufacturerPartNumber="BME280"
      footprint="dfn_p0.65mm_w2.55mm_pw0.35mm_pl0.5mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=82338a5eb37046a6b9543317a5f58bbb&pn=C92489",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
