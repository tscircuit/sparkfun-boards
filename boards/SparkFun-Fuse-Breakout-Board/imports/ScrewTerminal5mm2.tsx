import type { ChipProps } from "@tscircuit/props"

const pinLabels = { pin1: ["pin1", "+"], pin2: ["pin2", "-"] } as const

export const ScrewTerminal5mm2 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C8465"] }}
    manufacturerPartNumber="SCREWTERMINAL-5MM-2"
    footprint="radial_od2.032mm_id1.3mm"
    cadModel={null}
    {...props}
  />
)
