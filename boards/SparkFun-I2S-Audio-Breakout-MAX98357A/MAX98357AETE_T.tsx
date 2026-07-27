import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["DIN"],
  pin2: ["GAIN"],
  pin3: ["GND"],
  pin4: ["N_SD_MODE"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["VDD"],
  pin8: ["VDD2"],
  pin9: ["OUTP"],
  pin10: ["OUTN"],
  pin11: ["GND2"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["LRCLK"],
  pin15: ["GND3"],
  pin16: ["BCLK"],
  pin17: ["EP"],
} as const

export const MAX98357AETE_T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={2}
      connections={{ pin8: sel.U1.pin7, pin3: [sel.U1.pin11, sel.U1.pin15] }}
      schPinStyle={{
        pin1: { marginTop: 0.2 },
        pin14: { marginBottom: 0.2 },
        pin2: { marginBottom: 0.2 },
        pin9: { marginBottom: 0.6 },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "DIN", "BCLK", "LRCLK", "N_SD_MODE", "GAIN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["OUTP", "OUTN"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C910544"],
      }}
      manufacturerPartNumber="MAX98357AETE_T"
      footprint="qfn16_thermalpad1.5mmx1.5mm_p0.4999mm_h3.8mm_pl0.6mm_pin1location(bottomside,left)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=edc2f28e721b49ee8c25b04b981b88c3&pn=C910544",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
