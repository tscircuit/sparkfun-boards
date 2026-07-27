import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
} as const

export const MST22D18G2_125 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <switch
      type="spdt"
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2906280"],
      }}
      connections={{
        pin1: "net.VCCIO",
        pin2: "net.V3_3",
        pin3: "net.VCC",
      }}
      manufacturerPartNumber="MST22D18G2_125"
      footprint="dfn6_p2.4999mm_w7.7mm_pw1.1999mm_pl2mm_pin1location(rightside,top)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a98562e0d24740e1809e54f73242e180&pn=C2906280",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
