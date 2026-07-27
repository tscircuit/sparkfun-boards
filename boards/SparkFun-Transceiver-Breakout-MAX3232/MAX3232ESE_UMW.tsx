import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["C1_P"],
  pin2: ["V_P"],
  pin3: ["C1_N"],
  pin4: ["C2_P"],
  pin5: ["C2_N"],
  pin6: ["V_N"],
  pin7: ["T2OUT"],
  pin8: ["R2IN"],
  pin9: ["R2OUT"],
  pin10: ["T2IN"],
  pin11: ["T1IN"],
  pin12: ["R1OUT"],
  pin13: ["R1IN"],
  pin14: ["T1OUT"],
  pin15: ["GND"],
  pin16: ["VCC"],
} as const

export const MAX3232ESE_UMW = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinSpacing={0.28}
      schWidth={2}
      schPinStyle={{
        pin1: { marginBottom: 0.1 },
        pin3: { marginBottom: 0.1 },
        pin4: { marginBottom: 0.1 },
        pin5: { marginBottom: 0.3 },
        pin14: { marginTop: 1.1 },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 3, 4, 5, 11, 10, 12, 9],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [2, 6, 14, 7, 13, 8],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [15],
        },
        topSide: {
          direction: "left-to-right",
          pins: [16],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2904738"],
      }}
      manufacturerPartNumber="MAX3232ESE_UMW"
      footprint="dfn16_w7.5762mm_pw0.574mm_pl2.038mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4032c2dd225248d78b434b8d8cc76e9d&pn=C2904738",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0.75 },
      }}
      {...props}
    />
  )
}
