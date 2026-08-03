import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC1"],
  pin2: ["NC2"],
  pin3: ["VDD1"],
  pin4: ["NC3"],
  pin5: ["NC4"],
  pin6: ["NC5"],
  pin7: ["NC6"],
  pin8: ["NC7"],
  pin9: ["NC8"],
  pin10: ["NC9"],
  pin11: ["VDD3"],
  pin12: ["NC10"],
  pin13: ["NC11"],
  pin14: ["NC12"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["NC13"],
  pin18: ["NC14"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["VDD2"],
  pin22: ["CS"],
  pin23: ["NC15"],
  pin24: ["NC16"],
  pin25: ["GND2"],
  pin26: ["NC17"],
  pin27: ["NC18"],
  pin28: ["NC19"],
  pin29: ["GND1"],
  pin30: ["NC20"],
  pin31: ["NC21"],
  pin32: ["SCL"],
  pin33: ["NC22"],
  pin34: ["NC23"],
  pin35: ["CS_CTRL"],
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
      footprint="qfn36_p0.7998mm_h9.8838mm_pw0.448mm_pl0.937mm"
      {...props}
    />
  )
}
