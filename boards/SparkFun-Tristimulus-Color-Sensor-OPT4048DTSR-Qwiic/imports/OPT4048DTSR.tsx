import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["ADDR"],
  pin3: ["NC2"],
  pin4: ["GND"],
  pin5: ["SCL"],
  pin6: ["NC1"],
  pin7: ["INT"],
  pin8: ["SDA"],
} as const

export const OPT4048DTSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C6174012"],
      }}
      manufacturerPartNumber="OPT4048DTSR"
      footprint="soic_p0.5mm_w2.26mm_pw0.28mm_pl0.68mm_pin1location(leftside,bottom)"
      {...props}
    />
  )
}
