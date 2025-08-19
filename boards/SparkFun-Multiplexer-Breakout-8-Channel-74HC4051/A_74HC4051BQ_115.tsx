import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["Y4"],
  pin2: ["Y6"],
  pin3: ["Z"],
  pin4: ["Y7"],
  pin5: ["Y5"],
  pin6: ["pin6"],
  pin7: ["VEE"],
  pin8: ["GND"],
  pin9: ["S2"],
  pin10: ["S1"],
  pin11: ["S0"],
  pin12: ["Y3"],
  pin13: ["Y0"],
  pin14: ["Y1"],
  pin15: ["Y2"],
  pin16: ["VCC"],
  pin17: ["EPAD"],
} as const

export const A_74HC4051BQ_115 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C128429"],
      }}
      manufacturerPartNumber="A_74HC4051BQ_115"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.249934000000053mm"
            pcbY="-1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.7500619999999572mm"
            pcbY="-1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.2499359999999342mm"
            pcbY="-1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.24993599999982052mm"
            pcbY="-1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.7500619999999572mm"
            pcbY="-1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.2499339999999393mm"
            pcbY="-1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.6576039999998784mm"
            pcbY="-0.2499359999999342mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.6576039999998784mm"
            pcbY="0.2499360000000479mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.2499339999999393mm"
            pcbY="1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.7500619999999572mm"
            pcbY="1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.24993599999982052mm"
            pcbY="1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.2499359999999342mm"
            pcbY="1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.7500619999999572mm"
            pcbY="1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.249934000000053mm"
            pcbY="1.1574779999999691mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.6576039999998784mm"
            pcbY="0.2499360000000479mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.6576039999998784mm"
            pcbY="-0.2499359999999342mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.9999959999999999mm"
            height="0.9999979999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.8262092000001076, y: 0.580491600000073 },
              { x: -1.8262092000001076, y: 1.326210200000105 },
              { x: -1.580489600000078, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.8262091999999939, y: 0.580491600000073 },
              { x: 1.8262091999999939, y: 1.326210200000105 },
              { x: 1.5804895999999644, y: 1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8262092000001076, y: -0.5804915999999594 },
              { x: -1.8262092000001076, y: -1.326210200000105 },
              { x: -1.580489600000078, y: -1.326210200000105 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.8262091999999939, y: -0.5804915999999594 },
              { x: 1.8262091999999939, y: -1.326210200000105 },
              { x: 1.5804895999999644, y: -1.326210200000105 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d7ad6cf1f0f24adebab4c383e7fe5bbe&pn=C128429",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
