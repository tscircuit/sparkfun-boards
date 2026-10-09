import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["TXO"],
  pin3: ["RXI"],
  pin4: ["V3"],
  pin5: ["UD_P"],
  pin6: ["UD_N"],
  pin7: ["XI"],
  pin8: ["XO"],
  pin9: ["CTS"],
  pin10: ["DSR"],
  pin11: ["RI"],
  pin12: ["DCD"],
  pin13: ["DTR"],
  pin14: ["RTS"],
  pin15: ["R232"],
  pin16: ["VCC"],
} as const

export const CH340C = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C558800"],
      }}
      manufacturerPartNumber="CH340C"
      footprint="soic16"
      {...props}
    />
  )
}
