import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
} as const

export const BM06B_SRSS_TB_LF__SN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={0.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C160392"],
      }}
      manufacturerPartNumber="BM06B_SRSS_TB_LF__SN"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.4998679999998785mm"
            pcbY="1.324749699999984mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.8000940000000583mm"
            pcbY="-1.200264299999958mm"
            width="1.1999975999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.8000939999999446mm"
            pcbY="-1.200264299999958mm"
            width="1.1999975999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.5003779999998414mm"
            pcbY="1.325257699999952mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.5003799999998364mm"
            pcbY="1.325257699999952mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.49961800000005496mm"
            pcbY="1.325257699999952mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.4996160000002874mm"
            pcbY="1.325257699999952mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="2.4996140000001787mm"
            pcbY="1.325257699999952mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.540000000000191, y: 0.18947130000003654 },
              { x: 2.921000000000163, y: -0.19152869999993527 },
              { x: 2.2860000000002856, y: -0.19152869999993527 },
              { x: 2.1590000000001055, y: -0.19152869999993527 },
              { x: 2.2860000000002856, y: -0.06452869999998256 },
              { x: 2.540000000000191, y: 0.18947130000003654 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.0479999999997744, y: 1.0087737000001198 },
              { x: -4.063999999999851, y: 1.0087737000001198 },
              { x: -4.063999999999851, y: -0.007226299999956609 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.064000000000192, y: -0.007226299999956609 },
              { x: 4.064000000000192, y: 1.0087737000001198 },
              { x: 3.048000000000229, y: 1.0087737000001198 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.921000000000163, y: -2.039226299999882 },
              { x: -2.9209999999998217, y: -2.039226299999882 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ca572370021c4906bc80dd4f4dd240e1&pn=C160392",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 2.5, y: -0.2, z: 0 },
      }}
      {...props}
    />
  )
}
