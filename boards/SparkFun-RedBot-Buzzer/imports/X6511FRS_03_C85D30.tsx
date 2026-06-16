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
      manufacturerPartNumber="X6511FRS_03_C85D30"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin3"]}
            pcbX="2.5399999999999636mm"
            pcbY="0.6549898000000667mm"
            width="0.9999979999999999mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0.6549898000000667mm"
            width="0.9999979999999999mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.5399999999999636mm"
            pcbY="0.6549898000000667mm"
            width="0.9999979999999999mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.5411937999999736, y: -1.6449801999999636 },
              { x: 2.5411937999999736, y: -0.614984800000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.0011938000000100146, y: -1.6449801999999636 },
              { x: 0.0011938000000100146, y: -0.614984800000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.539187200000015, y: -1.6449801999999636 },
              { x: -2.539187200000015, y: -0.614984800000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.009999600000015, y: -1.6449801999999636 },
              { x: 4.009999600000015, y: -10.201960799999938 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.009999600000128, y: -10.201960799999938 },
              { x: 4.009999600000015, y: -10.201960799999938 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.009999600000128, y: -1.6449801999999636 },
              { x: -4.009999600000128, y: -10.201960799999938 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.009999600000128, y: -1.6449801999999636 },
              { x: 4.009999600000015, y: -1.6449801999999636 },
            ]}
          />
          <courtyardoutline
            outline={[
              { x: -4.441000000000031, y: 1.9098138000000517 },
              { x: 4.441000000000031, y: 1.9098138000000517 },
              { x: 4.441000000000031, y: -10.528186199999936 },
              { x: -4.441000000000031, y: -10.528186199999936 },
              { x: -4.441000000000031, y: 1.9098138000000517 },
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
          x: 0.000500000000000167,
          y: 6.507000399999959,
          z: -2.4,
        },
      }}
      {...props}
    />
  )
}
