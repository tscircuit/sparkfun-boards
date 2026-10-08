import type { ChipProps } from "@tscircuit/props"

const pinLabels = { pin1: ["pin1"], pin2: ["pin2"] } as const

export const PptcFusePth = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C192570"] }}
    manufacturerPartNumber="FRX025-60F"
    footprint="radial_p5.1mm_id1mm"
    cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C192570.obj?uuid=0397246f2ec54f3aaf0abd2b4b6fef1d",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C192570.step?uuid=0397246f2ec54f3aaf0abd2b4b6fef1d",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -3.1496890000000013 },
      }}
    {...props}
  />
)
