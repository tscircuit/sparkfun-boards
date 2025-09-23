import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VREG"],
  pin2: ["VDD"],
  pin3: ["VSS"],
  pin4: ["NC1"],
  pin5: ["NC2"],
  pin6: ["SDA"],
  pin7: ["SCL"],
  pin8: ["TP1"],
  pin9: ["TP2"],
  pin10: ["VCM"],
} as const

export const FS3000_1015 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={2}
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin6", "pin7", "pin8", "pin9", "pin10"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C3662658"],
      }}
      manufacturerPartNumber="FS3000_1015"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.2500569999999698mm"
            pcbY="2.5399999999999636mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.2500569999999698mm"
            pcbY="1.2699999999999818mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.099943000000053mm"
            pcbY="0mm"
            width="2.0999958mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.2500569999999698mm"
            pcbY="-1.2699999999999818mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.2500569999999698mm"
            pcbY="-2.5399999999999636mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="3.250056999999856mm"
            pcbY="-2.5399999999999636mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.250056999999856mm"
            pcbY="-1.2699999999999818mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.250056999999856mm"
            pcbY="0mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="3.250056999999856mm"
            pcbY="1.2699999999999818mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="3.250056999999856mm"
            pcbY="2.5399999999999636mm"
            width="1.7999964mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.00012700000013410317mm"
            pcbY="3.2250380000000405mm"
            width="1.9999959999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.00012700000013410317mm"
            pcbY="-3.2250380000000405mm"
            width="1.9999959999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.2311888000000408, y: -3.9999665999999934 },
              { x: -4.500041800000076, y: -3.9999665999999934 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.2310871999999335, y: 4.000017399999933 },
              { x: 4.499940200000083, y: 4.000017399999933 },
              { x: 4.499940200000083, y: -3.9999665999999934 },
              { x: 1.2310871999999335, y: -3.9999665999999934 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.500041800000076, y: -3.9999665999999934 },
              { x: -4.500041800000076, y: 4.000017399999933 },
              { x: -1.2311888000000408, y: 4.000017399999933 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4bc563325fb3498794e51402b6f7f101&pn=C3662658",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
