import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["T_NEG"],
  pin3: ["T_POS"],
  pin4: ["VCC"],
  pin5: ["SCK"],
  pin6: ["CS"],
  pin7: ["SO"],
  pin8: ["DNC"],
} as const

export const MAX31855KASA_T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C52028"],
      }}
      manufacturerPartNumber="MAX31855KASA_T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.9050000000000864mm"
            pcbY="-2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.6349999999999909mm"
            pcbY="-2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.6349999999999909mm"
            pcbY="-2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.9049999999999727mm"
            pcbY="-2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.9050000000000864mm"
            pcbY="2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.6349999999999909mm"
            pcbY="2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.6349999999999909mm"
            pcbY="2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.9049999999999727mm"
            pcbY="2.699004000000059mm"
            width="0.5739892mm"
            height="1.8880073999999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: -1.9999959999998964 },
              { x: -2.4999950000001263, y: -0.6349999999999909 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: 1.99999600000001 },
              { x: -2.4999950000001263, y: 0.6349999999999909 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.499994999999899, y: 1.99999600000001 },
              { x: 2.499994999999899, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.4214327999998204, y: -1.9999959999998964 },
              { x: 2.499994999999899, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1514327999999523, y: -1.9999959999998964 },
              { x: 1.3885672000000113, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.11856720000002952, y: -1.9999959999998964 },
              { x: 0.11856720000002952, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.388567200000125, y: -1.9999959999998964 },
              { x: -1.151432800000066, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: -1.9999959999998964 },
              { x: -2.421432800000048, y: -1.9999959999998964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.4214327999998204, y: 1.99999600000001 },
              { x: 2.499994999999899, y: 1.99999600000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1514327999999523, y: 1.99999600000001 },
              { x: 1.3885672000000113, y: 1.99999600000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.11856720000002952, y: 1.99999600000001 },
              { x: 0.11856720000002952, y: 1.99999600000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.388567200000125, y: 1.99999600000001 },
              { x: -1.151432800000066, y: 1.99999600000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: 1.99999600000001 },
              { x: -2.421432800000048, y: 1.99999600000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: -0.6349999999999909 },
              { x: -2.499360000000138, y: 0.6349999999999909 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=3936dbd423424b148317d27cdee29b93&pn=C52028",
        rotationOffset: { x: 90, y: 90, z: 270 },
        positionOffset: { x: -914.3700026, y: 685.8127, z: 4.443007700000112 },
      }}
      {...props}
    />
  )
}
