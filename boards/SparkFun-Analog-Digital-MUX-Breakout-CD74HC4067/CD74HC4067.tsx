import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: "COM",
  pin2: "CHAN7",
  pin3: "CHAN6",
  pin4: "CHAN5",
  pin5: "CHAN4",
  pin6: "CHAN3",
  pin7: "CHAN2",
  pin8: "CHAN1",
  pin9: "CHAN0",
  pin10: "S0",
  pin11: "S1",
  pin12: "GND",
  pin13: "S3",
  pin14: "S2",
  pin15: "N_EN",
  pin16: "CHAN15",
  pin17: "CHAN14",
  pin18: "CHAN13",
  pin19: "CHAN12",
  pin20: "CHAN11",
  pin21: "CHAN10",
  pin22: "CHAN9",
  pin23: "CHAN8",
  pin24: "VCC",
} as const

export const CD74HC4067 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={2}
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "CHAN0",
            "CHAN1",
            "CHAN2",
            "CHAN3",
            "CHAN4",
            "CHAN5",
            "CHAN6",
            "CHAN7",
            "CHAN8",
            "CHAN9",
            "CHAN10",
            "CHAN11",
            "CHAN12",
            "CHAN13",
            "CHAN14",
            "CHAN15",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "N_EN", "S0", "S1", "S2", "S3", "COM", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C98457"],
      }}
      manufacturerPartNumber="CD74HC4067SM96"
      footprint="dfn24_p0.65mm_w8.4482mm_pw0.308mm_pl1.324mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=44cbf0bf34924619a9a3f811509fb70e&pn=C98457",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
