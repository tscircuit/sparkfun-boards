import type { ChipProps } from "@tscircuit/props"

const pinLabels = { pin1: ["pin1"], pin2: ["pin2"] } as const

export const PptcFusePth = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C192570"] }}
    manufacturerPartNumber="FRX025-60F"
    footprint="hc49_p5.08mm_od1.8796mm"
    cadModel={null}
    {...props}
  />
)
