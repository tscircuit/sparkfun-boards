import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SDA"],
  pin2: ["GND"],
  pin3: ["DNC1"],
  pin4: ["DNC2"],
  pin5: ["VDD"],
  pin6: ["SCL"],
  pin7: ["EP"],
} as const

export const SI7021_A20_IM1R = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SDA", "SCL"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2836034"],
      }}
      manufacturerPartNumber="SI7021_A20_IM1R"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.9999979999999908mm"
            pcbY="-1.4505939999999953mm"
            width="0.45001179999999996mm"
            height="0.7010399999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="-1.4505939999999953mm"
            width="0.45001179999999996mm"
            height="0.7010399999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.999998000000005mm"
            pcbY="-1.4505939999999953mm"
            width="0.45001179999999996mm"
            height="0.7010399999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.999998000000005mm"
            pcbY="1.4505939999999953mm"
            width="0.45001179999999996mm"
            height="0.7010399999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="1.4505939999999953mm"
            width="0.45001179999999996mm"
            height="0.7010399999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.9999979999999908mm"
            pcbY="1.4505939999999953mm"
            width="0.45001179999999996mm"
            height="0.7010399999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="0mm"
            width="2.4000459999999997mm"
            height="1.499997mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.5445760000000064, y: -1.5255240000000043 },
              { x: -0.45618399999999326, y: -1.5255240000000043 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4569440000000071, y: -1.5255240000000043 },
              { x: 1.5034259999999904, y: -1.5255240000000043 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.45618399999999326, y: -1.5255240000000043 },
              { x: 0.5445760000000064, y: -1.5255240000000043 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4998699999999872, y: -1.5255240000000043 },
              { x: -1.456943999999993, y: -1.5255240000000043 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4569440000000071, y: 1.4744699999999966 },
              { x: 1.5034259999999904, y: 1.4744699999999966 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.45618399999999326, y: 1.4744699999999966 },
              { x: 0.5445760000000064, y: 1.4744699999999966 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5445760000000064, y: 1.4744699999999966 },
              { x: -0.45618399999999326, y: 1.4744699999999966 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4998699999999872, y: 1.4744699999999966 },
              { x: -1.456943999999993, y: 1.4744699999999966 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5034259999999904, y: -1.5265400000000113 },
              { x: 1.5034259999999904, y: 1.4734540000000038 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4968219999999803, y: -1.5265400000000113 },
              { x: -1.4968219999999803, y: 1.4734540000000038 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a4ed67ea8194404082ca5ebbf5084a95&pn=C2836034",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
