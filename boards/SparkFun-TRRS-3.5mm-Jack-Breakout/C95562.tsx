import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["Sleeve"],
  pin2: ["Ring_2"],
  pin3: ["Ring_1"],
  pin4: ["Tip"],
} as const

export const PJ_320D_4A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C95562"],
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      manufacturerPartNumber="PJ_320D_4A"
      footprint={
        <footprint>
          <hole
            pcbX="1.1368683772161603e-13mm"
            pcbY="-1.8750216999999338mm"
            diameter="1.1999975999999999mm"
          />
          <hole
            pcbX="1.1368683772161603e-13mm"
            pcbY="5.124964299999988mm"
            diameter="1.1999975999999999mm"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.999994000000015mm"
            pcbY="-4.474965699999984mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="2.999994000000015mm"
            pcbY="-3.374891699999921mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="2.999994000000015mm"
            pcbY="0.6251002999999855mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="2.999994000000015mm"
            pcbY="3.6250943000001143mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.4999696000000995, y: 6.839337300000125 },
              { x: 2.4999696000000995, y: 8.945073500000149 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.499994999999899, y: 8.945073500000149 },
              { x: -2.499994999999899, y: 6.839337300000125 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: 6.839337300000125 },
              { x: -3.119983599999955, y: 6.839337300000125 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.119983599999955, y: 8.945073500000149 },
              { x: -3.119983599999955, y: -3.614896299999941 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: -4.306055700000002 },
              { x: 3.129991200000063, y: -5.404885099999888 },
              { x: -1.210005199999955, y: -5.404885099999888 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: -0.3060636999999815 },
              { x: 3.129991200000063, y: -2.443778499999894 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: 2.693955700000174 },
              { x: 3.129991200000063, y: 1.5562135000000126 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.119983599999955, y: 8.945073500000149 },
              { x: 3.129991200000063, y: 8.945073500000149 },
              { x: 3.129991200000063, y: 4.5562329000000545 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=6ee5211049a342f8a533e98e368db464&pn=C95562",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: {
          x: -3.8,
          y: 0,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
