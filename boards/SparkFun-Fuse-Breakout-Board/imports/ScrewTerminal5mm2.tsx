import type { ChipProps } from "@tscircuit/props"

const pinLabels = { pin1: ["pin1", "+"], pin2: ["pin2", "-"] } as const

export const ScrewTerminal5mm2 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C8465"] }}
    manufacturerPartNumber="WJ500V-5.08-2P"
    footprint="pinrow2_nosquareplating_p5.08mm_od2mm_id1.3mm"
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C8465.obj?uuid=d60ef5d423934d3393dc75fa0a07b6bd",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C8465.step?uuid=d60ef5d423934d3393dc75fa0a07b6bd",
      pcbRotationOffset: 0,
      modelOriginPosition: {
        x: -2.5399878999999967,
        y: 0,
        z: -0.000006999999999646178,
      },
    }}
    {...props}
  />
)
