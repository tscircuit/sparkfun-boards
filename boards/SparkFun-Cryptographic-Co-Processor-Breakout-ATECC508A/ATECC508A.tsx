import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["NC4"],
  pin2: ["NC3"],
  pin3: ["NC2"],
  pin4: ["GND"],
  pin5: ["SDA"],
  pin6: ["SCL"],
  pin7: ["NC1"],
  pin8: ["VCC"],
  pin9: ["EXP"],
} as const

export const ATECC508A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      connections={{
        pin1: [sel.U1.pin2, sel.U1.pin3, sel.U1.pin7],
        pin6: sel.net().SCL,
        pin5: sel.net().SDA,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin8", "pin9", "pin4"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin5", "pin1"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C145574"],
      }}
      manufacturerPartNumber="ATECC508A_MAHDA_T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.0002540000000408327mm"
            pcbY="0mm"
            width="1.2999973999999999mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.7500112000000172mm"
            pcbY="1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.2500122000000147mm"
            pcbY="1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.2500121999997873mm"
            pcbY="1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.7500111999999035mm"
            pcbY="1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.7500111999999035mm"
            pcbY="-1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.2500121999997873mm"
            pcbY="-1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.2500122000000147mm"
            pcbY="-1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.7500112000000172mm"
            pcbY="-1.524000000000001mm"
            width="0.29999939999999997mm"
            height="0.7500112mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.1432539999998426, y: 1.524000000000001 },
              { x: 1.143000000000029, y: 1.524000000000001 },
              { x: 1.143000000000029, y: -1.524000000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.14325400000007, y: -1.524000000000001 },
              { x: -1.143000000000029, y: -1.524000000000001 },
              { x: -1.143000000000029, y: 1.524000000000001 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=99b5f9497c9d41f48fca30a133fff67f&pn=C145574",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
