import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC1"],
  pin2: ["NC2"],
  pin3: ["VDD"],
  pin4: ["NC3"],
  pin5: ["NC4"],
  pin6: ["NC5"],
  pin7: ["NC6"],
  pin8: ["NC7"],
  pin9: ["NC8"],
  pin10: ["NC8"],
  pin11: ["NC9"],
  pin12: ["NC10"],
  pin13: ["NC11"],
  pin14: ["NC12"],
  pin15: ["pin15"],
  pin16: ["NC13"],
  pin17: ["NC14"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin22: ["CS"],
  pin23: ["NC15"],
  pin24: ["NC16"],
  pin25: ["NC17"],
  pin26: ["NC18"],
  pin27: ["NC19"],
  pin28: ["NC20"],
  pin29: ["GND"],
  pin30: ["NC21"],
  pin31: ["NC22"],
  pin32: ["SCL"],
  pin33: ["NC23"],
  pin34: ["CS_CTRL"],
  pin35: ["DRDY"],
  pin36: ["SDA"],
} as const

export const HMC6343 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1519273"],
      }}
      manufacturerPartNumber="HMC6343"
      footprint="qfn36_p0.8mm_h9.88mm_pw0.45mm_pl0.94mm"
      {...props}
    />
  )
}
