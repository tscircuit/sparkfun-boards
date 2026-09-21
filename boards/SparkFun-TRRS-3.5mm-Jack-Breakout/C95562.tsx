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
          <hole pcbX="0mm" pcbY="-2.1500211mm" diameter="1.1999976mm" />
          <hole pcbX="0mm" pcbY="4.8499649mm" diameter="1.1999976mm" />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.999994mm"
            pcbY="-4.7499651mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="2.999994mm"
            pcbY="-3.6498911mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="2.999994mm"
            pcbY="0.3501009mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="2.999994mm"
            pcbY="3.3500949mm"
            width="2.999994mm"
            height="1.3999972mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.4999696000000995, y: 6.564337900000055 },
              { x: 2.4999696000000995, y: 8.670074100000079 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.499994999999899, y: 8.670074100000079 },
              { x: -2.499994999999899, y: 6.564337900000055 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: 6.564337900000055 },
              { x: -3.119983599999955, y: 6.564337900000055 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.119983599999955, y: 8.670074100000079 },
              { x: -3.119983599999955, y: -3.889895700000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: -4.581055100000071 },
              { x: 3.129991200000063, y: -5.679884499999957 },
              { x: -1.210005199999955, y: -5.679884499999957 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: -0.5810631000000512 },
              { x: 3.129991200000063, y: -2.7187778999999637 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.129991200000063, y: 2.4189563000001044 },
              { x: 3.129991200000063, y: 1.2812140999999428 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.119983599999955, y: 8.670074100000079 },
              { x: 3.129991200000063, y: 8.670074100000079 },
              { x: 3.129991200000063, y: 4.281233499999985 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.007874mm"
            pcbY="9.6660609mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.753673999999933, y: 8.916060899999934 },
              { x: 4.737926000000016, y: 8.916060899999934 },
              { x: 4.737926000000016, y: -6.01113910000015 },
              { x: -4.753673999999933, y: -6.01113910000015 },
              { x: -4.753673999999933, y: 8.916060899999934 },
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
