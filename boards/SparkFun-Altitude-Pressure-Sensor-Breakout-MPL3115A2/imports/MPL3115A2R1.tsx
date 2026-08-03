import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["CAP"],
  pin3: ["GND"],
  pin4: ["VDDIO"],
  pin5: ["INT2"],
  pin6: ["INT1"],
  pin7: ["SDA"],
  pin8: ["SCL"],
} as const

export const MPL3115A2R1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C54429"],
      }}
      manufacturerPartNumber="MPL3115A2R1"
      footprint="dfn_p1.2499mm_w4.0999mm_pl1.5mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54429.obj?uuid=672fc546baaf493a9f668044721589aa",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C54429.step?uuid=672fc546baaf493a9f668044721589aa",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.00007619999999519678, z: 0 },
      }}
      {...props}
    />
  )
}
