import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A0"],
  pin2: ["A1"],
  pin3: ["pin3"],
  pin4: ["SD0"],
  pin5: ["SC0"],
  pin6: ["SD1"],
  pin7: ["SC1"],
  pin8: ["SD2"],
  pin9: ["SC2"],
  pin10: ["SD3"],
  pin11: ["SC3"],
  pin12: ["VSS"],
  pin13: ["SD4"],
  pin14: ["SC4"],
  pin15: ["SD5"],
  pin16: ["SC5"],
  pin17: ["SD6"],
  pin18: ["SC6"],
  pin19: ["SD7"],
  pin20: ["SC7"],
  pin21: ["A2"],
  pin22: ["SCL"],
  pin23: ["SDA"],
  pin24: ["VDD"],
} as const

export const PCA9548APW_118 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C21198"],
      }}
      manufacturerPartNumber="PCA9548APW_118"
      footprint="dfn24_p0.65mm_w7.6952mm_pw0.4mm_pl1.65mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C21198.obj?uuid=4564b07290534b8ea1373eede2664361",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C21198.step?uuid=4564b07290534b8ea1373eede2664361",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  )
}
