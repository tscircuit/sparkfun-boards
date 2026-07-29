import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["ST"],
  pin3: ["GND1"],
  pin4: ["pin4"],
  pin5: ["GND2"],
  pin6: ["GND3"],
  pin7: ["GND4"],
  pin8: ["ZOUT"],
  pin9: ["pin9"],
  pin10: ["YOUT"],
  pin11: ["pin11"],
  pin12: ["XOUT"],
  pin13: ["pin13"],
  pin14: ["VS1"],
  pin15: ["VS2"],
  pin16: ["pin16"],
  pin17: ["EP"],
} as const

export const ADXL335BCPZ_RL7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={1.6}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin15", "pin14", "pin3", "pin5", "pin6", "pin7"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin12", "pin10", "pin8", "pin2"],
        },
      }}
      schPinStyle={{
        pin14: { marginBottom: 0.3 },
        pin8: { marginBottom: 0.7 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C34439"],
      }}
      manufacturerPartNumber="ADXL335BCPZ_RL7"
      footprint="qfn16_thermalpad1.755mmx1.755mm_p0.65mm_h5.1638mm_pw0.364mm_pl1.007mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=68903396014e48fb91a97afa470c7888&pn=C34439",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
