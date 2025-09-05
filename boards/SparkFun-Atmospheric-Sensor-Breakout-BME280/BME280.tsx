import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["GND2"],
  pin3: ["VDDIO"],
  pin4: ["SDO_ADR"],
  pin5: ["SCK_SCL"],
  pin6: ["SDI_SDA"],
  pin7: ["N_CS"],
  pin8: ["GND1"],
} as const

export const BME280 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C92489"],
      }}
      manufacturerPartNumber="BME280"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="1.025mm"
            pcbY="0.975mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.025mm"
            pcbY="0.325mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.025mm"
            pcbY="-0.325mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.025mm"
            pcbY="-0.975mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.025mm"
            pcbY="-0.975mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.025mm"
            pcbY="-0.325mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.025mm"
            pcbY="0.325mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.025mm"
            pcbY="0.975mm"
            width="0.5mm"
            height="0.35mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.42875, y: 1.42875 },
              { x: 1.42875, y: 1.42875 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.42875, y: 1.42875 },
              { x: 1.42875, y: -1.42875 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.42875, y: -1.42875 },
              { x: -1.42875, y: -1.42875 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.42875, y: -1.42875 },
              { x: -1.42875, y: 1.42875 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=82338a5eb37046a6b9543317a5f58bbb&pn=C92489",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
