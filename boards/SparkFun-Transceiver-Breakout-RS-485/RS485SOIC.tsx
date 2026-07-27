import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["RO"],
  pin2: ["RE"],
  pin3: ["DE"],
  pin4: ["DI"],
  pin5: ["GND"],
  pin6: ["A"],
  pin7: ["B"],
  pin8: ["VCC"],
} as const

export const RS485SOIC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C19738"],
      }}
      manufacturerPartNumber="RS485SOIC"
      footprint="soic_w7.4422mm_pw0.6096mm_pl2.2098mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=dc694c23844346e9981bdbac7bb76421&pn=C19738",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
