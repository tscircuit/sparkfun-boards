import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VREG"],
  pin2: ["VIN"],
  pin3: ["GND"],
  pin4: ["NC1"],
  pin5: ["NC2"],
  pin6: ["SDA"],
  pin7: ["SCL"],
  pin8: ["TP1"],
  pin9: ["TP2"],
  pin10: ["VCM"],
  pin11: ["pin11"],
  pin12: ["pin12"],
} as const

export const FS3000_1005 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C3662643"],
      }}
      manufacturerPartNumber="FS3000_1005"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.250057mm"
            pcbY="2.54mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.250057mm"
            pcbY="1.27mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.099943mm"
            pcbY="0mm"
            width="2.0999958mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.250057mm"
            pcbY="-1.27mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.250057mm"
            pcbY="-2.54mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="3.250057mm"
            pcbY="-2.54mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.250057mm"
            pcbY="-1.27mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.250057mm"
            pcbY="0mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="3.250057mm"
            pcbY="1.27mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="3.250057mm"
            pcbY="2.54mm"
            width="1.7999964mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.000127mm"
            pcbY="3.225038mm"
            width="1.999996mm"
            height="1.5500096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.000127mm"
            pcbY="-3.225038mm"
            width="1.999996mm"
            height="1.5500096mm"
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
          <silkscreentext
            text="{NAME}"
            pcbX="0.001143mm"
            pcbY="5.0386mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.770056999999952, y: 4.288599999999974 },
              { x: 4.772343000000092, y: 4.288599999999974 },
              { x: 4.772343000000092, y: -4.237799999999993 },
              { x: -4.770056999999952, y: -4.237799999999993 },
              { x: -4.770056999999952, y: 4.288599999999974 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3662643.obj?uuid=4bc563325fb3498794e51402b6f7f101",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3662643.step?uuid=4bc563325fb3498794e51402b6f7f101",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0005507999999401214,
          y: -0.000025399999913133797,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
