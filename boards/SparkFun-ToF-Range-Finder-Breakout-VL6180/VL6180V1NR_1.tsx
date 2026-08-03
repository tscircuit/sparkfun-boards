import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GPIO1"],
  pin2: ["NC1"],
  pin3: ["NC2"],
  pin4: ["GPIO0"],
  pin5: ["SCL"],
  pin6: ["SDA"],
  pin7: ["NC3"],
  pin8: ["AVDD_VCSEL"],
  pin9: ["AVSS_VCSEL"],
  pin10: ["AVDD"],
  pin11: ["NC4"],
  pin12: ["GND"],
} as const

export const VL6180V1NR_1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={2}
      schPinStyle={{
        pin1: { marginBottom: 0.2 },
        pin4: { marginBottom: 0.6 },
        pin8: { marginBottom: 0.8 },
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [10, 8, 9, 12],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 4, 5, 6],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2655167"],
      }}
      manufacturerPartNumber="VL6180V1NR_1"
      footprint="dfn12_p0.7501mm_w2.8mm_pw0.55mm_pl0.8mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5aeca3d04b2f4ed88dcf6b959e02f9ea&pn=C2655167",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
