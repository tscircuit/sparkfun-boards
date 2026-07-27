import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["DOUT"],
  pin3: ["VSS"],
  pin4: ["DIN"],
} as const

export const WS2812B_V5_W = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={1.4}
      schPinStyle={{
        pin2: { marginTop: 0.3 },
        pin3: { marginTop: 0.3 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2874885"],
      }}
      manufacturerPartNumber="WS2812B_V5_W"
      footprint="dfn4_p3.1999mm_w6.8mm_pw1mm_pl1.8mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=df86fdf032664dc8a1d2316c54569add&pn=C2874885",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
