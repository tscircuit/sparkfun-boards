import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
} as const

export const X6511FRS_03_C85D30 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C5142236"],
      }}
      manufacturerPartNumber="X6511FRS-03-C85D30"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin3"]}
            pcbX="2.54mm"
            pcbY="0mm"
            width="0.999998mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0mm"
            width="0.999998mm"
            height="1.999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.54mm"
            pcbY="0mm"
            width="0.999998mm"
            height="1.999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.5411937999999736, y: -2.2999700000000303 },
              { x: 2.5411937999999736, y: -1.2699746000000687 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.0011938000000100146, y: -2.2999700000000303 },
              { x: 0.0011938000000100146, y: -1.2699746000000687 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.539187200000015, y: -2.2999700000000303 },
              { x: -2.539187200000015, y: -1.2699746000000687 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.009999600000015, y: -2.2999700000000303 },
              { x: 4.009999600000015, y: -10.856950600000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.009999600000128, y: -10.856950600000005 },
              { x: 4.009999600000015, y: -10.856950600000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.009999600000128, y: -2.2999700000000303 },
              { x: -4.009999600000128, y: -10.856950600000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.009999600000128, y: -2.2999700000000303 },
              { x: 4.009999600000015, y: -2.2999700000000303 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="2.004824mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <fabricationnotepath
            route={[
              { x: -3.937000000000012, y: -2.2999700000000303 },
              { x: -3.937000000000012, y: -10.681969999999978 },
              { x: 3.937000000000012, y: -10.681969999999978 },
              { x: 3.937000000000012, y: -2.2999700000000303 },
              { x: 4.0639999999999645, y: -2.426969999999983 },
              { x: 4.191000000000031, y: -2.2999700000000303 },
              { x: 4.191000000000031, y: -10.808970000000045 },
              { x: 4.153802561210682, y: -10.898772561210762 },
              { x: 4.0639999999999645, y: -10.935969999999998 },
              { x: -4.0639999999999645, y: -10.935969999999998 },
              { x: -4.153802561210682, y: -10.898772561210762 },
              { x: -4.191000000000031, y: -10.808970000000045 },
              { x: -4.191000000000031, y: -2.2999700000000303 },
              { x: -4.0639999999999645, y: -2.426969999999983 },
              { x: -3.937000000000012, y: -2.2999700000000303 },
            ]}
            strokeWidth="0.254mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.259974199999988, y: 1.249998000000005 },
              { x: 4.259999600000015, y: 1.249998000000005 },
              { x: 4.259999600000015, y: -11.00695080000014 },
              { x: -4.259974199999988, y: -11.00695080000014 },
              { x: -4.259974199999988, y: 1.249998000000005 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5142236.obj?uuid=c44f47884e984ffd99d4df712dfa4b96",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C5142236.step?uuid=c44f47884e984ffd99d4df712dfa4b96",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00048729999992991324,
          y: 6.506962299999941,
          z: -2.4,
        },
      }}
      {...props}
    />
  )
}
