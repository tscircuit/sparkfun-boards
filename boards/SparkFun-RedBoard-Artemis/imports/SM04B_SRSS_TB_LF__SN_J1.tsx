import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VCC"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const

export const SM04B_SRSS_TB_LF__SN_J1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={0.7}
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "VCC", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C160404"],
      }}
      manufacturerPartNumber="SM04B_SRSS_TB_LF_SN"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.5mm"
            pcbY="2mm"
            width="0.6mm"
            height="1.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.5mm"
            pcbY="2mm"
            width="0.6mm"
            height="1.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.5mm"
            pcbY="2mm"
            width="0.6mm"
            height="1.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.5mm"
            pcbY="2mm"
            width="0.6mm"
            height="1.55mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.8mm"
            pcbY="-1.875mm"
            width="1.2mm"
            height="1.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="2.8mm"
            pcbY="-1.875mm"
            width="1.2mm"
            height="1.8mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.02, y: -2.4 },
              { x: 1.88, y: -2.4 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.94, y: 1.86 },
              { x: -3.02, y: 1.86 },
              { x: -3.02, y: -0.74 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.04, y: 1.86 },
              { x: 2.96, y: 1.86 },
              { x: 2.96, y: -0.74 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=96ff162c26934a308e7bbf01d083d593&pn=C160404",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: -1.5, y: -0.5, z: 0 },
      }}
      {...props}
    />
  )
}
