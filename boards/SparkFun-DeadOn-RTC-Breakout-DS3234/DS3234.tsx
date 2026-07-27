import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["32kHz"],
  pin4: ["VCC"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["GND"],
  pin16: ["VBAT"],
  pin17: ["DIN"],
  pin18: ["SCLK2"],
  pin19: ["DOUT"],
  pin20: ["SCLK1"],
} as const

export const DS3234S_T_R = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={1.8}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin4",
            "pin18",
            "pin20",
            "pin19",
            "pin17",
            "pin1",
            "pin5",
            "pin6",
            "pin3",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin16",
            "pin2",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
            "pin11",
            "pin12",
            "pin13",
            "pin14",
            "pin15",
          ],
        },
      }}
      schPinStyle={{
        pin4: { marginBottom: 0.3 },
        pin1: { marginBottom: 0.3 },
        pin5: { marginBottom: 0.3 },
        pin16: { marginBottom: 0.3 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2651511"],
      }}
      manufacturerPartNumber="DS3234S_T_R"
      footprint="dfn20_w11.82mm_pw0.595mm_pl2.36mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d767b157409641d0a32b7431c9b1a541&pn=C2651511",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
