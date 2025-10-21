import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IP_POS1"],
  pin2: ["IP_POS2"],
  pin3: ["IP_NEG1"],
  pin4: ["IP_NEG2"],
  pin5: ["GND"],
  pin6: ["BW_SEL"],
  pin7: ["VIOUT"],
  pin8: ["VCC"],
} as const

export const ACS723 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C459325"],
      }}
      manufacturerPartNumber="ACS723LLCTR_40AB_T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.9050000000000864mm"
            pcbY="-2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.6349999999999909mm"
            pcbY="-2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.6349999999999909mm"
            pcbY="-2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.9049999999999727mm"
            pcbY="-2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.9050000000000864mm"
            pcbY="2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.6349999999999909mm"
            pcbY="2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.6349999999999909mm"
            pcbY="2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.9049999999999727mm"
            pcbY="2.7724100000000362mm"
            width="0.5880099999999999mm"
            height="2.0450048mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.5262078000000656, y: -1.5214091999999937 },
              { x: -2.5262078000000656, y: 1.5214092000001074 },
              { x: 2.526207799999952, y: 1.5214092000001074 },
              { x: 2.526207799999952, y: -1.5214091999999937 },
              { x: -2.5262078000000656, y: -1.5214091999999937 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=dc694c23844346e9981bdbac7bb76421&pn=C459325",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
