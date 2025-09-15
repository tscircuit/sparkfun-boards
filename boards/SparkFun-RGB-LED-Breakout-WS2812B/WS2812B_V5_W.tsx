import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["DOUT"],
  pin3: ["VSS"],
  pin4: ["DIN"],
} as const

export const WS2812B_V5_W = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={1.4}
      schPinStyle={{
        pin2: { marginTop: 0.3 },
        pin3: { marginTop: 0.3 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2874885"],
      }}
      manufacturerPartNumber="WS2812B_V5_W"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin3"]}
            pcbX="2.4999949999999984mm"
            pcbY="-1.5999460000000028mm"
            width="1.7999964mm"
            height="0.9999979999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="2.4999949999999984mm"
            pcbY="1.5999459999999885mm"
            width="1.7999964mm"
            height="0.9999979999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.499994999999984mm"
            pcbY="1.5999459999999885mm"
            width="1.7999964mm"
            height="0.9999979999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.499994999999984mm"
            pcbY="-1.5999460000000028mm"
            width="1.7999964mm"
            height="0.9999979999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.499944200000016, y: -2.2724110000000053 },
              { x: 2.499944200000016, y: -2.4999442000000016 },
              { x: -2.500045799999995, y: -2.4999442000000016 },
              { x: -2.500045799999995, y: -2.313686000000004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.499944200000016, y: 2.500045799999995 },
              { x: 2.5067260000000147, y: 2.274214399999991 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4888189999999923, y: 2.2784307999999953 },
              { x: -2.500045799999995, y: 2.500045799999995 },
              { x: 2.499944200000016, y: 2.500045799999995 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.499944200000016, y: 0.7696707999999859 },
              { x: 2.499944200000016, y: -0.7695692000000065 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.500045799999995, y: -0.7695692000000065 },
              { x: -2.500045799999995, y: 0.7696707999999859 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4999462000000108, y: -1.7999456000000151 },
              { x: 1.4999462000000108, y: -2.4999442000000016 },
              { x: 0.7999476000000101, y: -2.4999442000000016 },
              { x: 1.499895400000014, y: -1.7998440000000073 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=df86fdf032664dc8a1d2316c54569add&pn=C2874885",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
