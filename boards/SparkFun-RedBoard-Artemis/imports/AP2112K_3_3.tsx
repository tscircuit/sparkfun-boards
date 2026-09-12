import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["OUT"],
} as const

export const AP2112K_3_3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C51118"],
      }}
      manufacturerPartNumber="AP2112K-3.3TRG1"
      footprint="sot23_5"
      {...props}
    />
  )
}
