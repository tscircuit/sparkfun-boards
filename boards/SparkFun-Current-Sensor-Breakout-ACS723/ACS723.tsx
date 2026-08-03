import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IP_POS1"],
  pin2: ["IP_POS2"],
  pin3: ["IP_NEG1"],
  pin4: ["IP_NEG2"],
  pin5: ["GND"],
  pin6: ["BW_SEL"],
  pin7: ["VIOUT"],
  pin8: ["VCC"],
} as const

export const ACS723 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C459325"],
      }}
      manufacturerPartNumber="ACS723LLCTR_40AB_T"
      footprint="dfn_w7.5898mm_pw0.588mm_pl2.045mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=dc694c23844346e9981bdbac7bb76421&pn=C459325",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
