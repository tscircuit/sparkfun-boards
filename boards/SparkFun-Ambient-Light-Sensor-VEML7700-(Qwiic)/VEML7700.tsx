import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["VDD"],
  pin3: ["GND"],
  pin4: ["SDA"],
} as const

export const VEML7700 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C504893"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "GND"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["SCL", "SDA"],
        },
      }}
      manufacturerPartNumber="VEML7700_TR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.9049999999999727mm"
            pcbY="0mm"
            width="0.7999983999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            pcbX="-0.6349999999998772mm"
            portHints={["pin2"]}
            pcbY="0mm"
            width="0.7999983999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.6350000000001046mm"
            pcbY="0mm"
            width="0.7999983999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.9050000000000864mm"
            pcbY="0mm"
            width="0.7999983999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.399993199999926, y: 1.8499835999998595 },
              { x: -3.389985599999818, y: 1.8499835999998595 },
              { x: -2.8599891999999727, y: 1.3199872000001278 },
              { x: 2.869996799999967, y: 1.3199872000001278 },
              { x: 3.3999932000001536, y: 1.8499835999998595 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5361646000000064, y: -0.4999990000000025 },
              { x: -3.399993199999926, y: -0.4999990000000025 },
              { x: -3.399993199999926, y: 1.8499835999998595 },
              { x: 3.3999932000001536, y: 1.8499835999998595 },
              { x: 3.3999932000001536, y: -0.4999990000000025 },
              { x: 2.5361138000000665, y: -0.4999990000000025 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.266164599999911, y: -0.4999990000000025 },
              { x: -1.2738861999999926, y: -0.4999990000000025 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.0038354000000708766, y: -0.4999990000000025 },
              { x: -0.003886199999897144, y: -0.4999990000000025 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.2738354000000527, y: -0.4999990000000025 },
              { x: 1.2661138000000847, y: -0.4999990000000025 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=9ed0f271771b49f39e6267a2e00848fb&pn=C504893",
        rotationOffset: { x: 90, y: 180, z: 0 },
        positionOffset: { x: 0, y: 0.3, z: 0.9 },
      }}
      {...props}
    />
  )
}
