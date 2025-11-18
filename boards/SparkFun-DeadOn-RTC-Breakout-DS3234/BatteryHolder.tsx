import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["GND"],
} as const

export const BatteryHolder = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schHeight={1}
      schWidth={0.5}
      schPinArrangement={{
        topSide: {
          direction: "top-to-bottom",
          pins: ["pin1"],
        },
        bottomSide: {
          direction: "bottom-to-top",
          pins: ["pin2"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C238102"],
      }}
      manufacturerPartNumber="battery_holder"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="7.874mm"
            pcbY="0mm"
            width="3.18mm"
            height="3.18mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0mm"
            width="3.962mm"
            height="3.962mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-7.874mm"
            pcbY="0mm"
            width="3.18mm"
            height="3.18mm"
            shape="rect"
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d767b157409641d0a32b7431c9b1a541&pn=C2651511",
        rotationOffset: { x: 180, y: 0, z: 0 },
        positionOffset: { x: -888.873, y: 842.01, z: 1.8 },
      }}
      {...props}
    />
  )
}
