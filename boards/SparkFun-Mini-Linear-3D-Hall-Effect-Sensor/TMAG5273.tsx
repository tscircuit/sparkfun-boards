import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["GND"],
  pin3: ["TEST"],
  pin4: ["VCC"],
  pin5: ["N_INT"],
  pin6: ["SDA"],
} as const

export const TMAG5273 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C3716049"],
      }}
      manufacturerPartNumber="TMAG5273"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin3"]}
            pcbX="1.3500099999999975mm"
            pcbY="0.9499599999999191mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.3500099999999975mm"
            pcbY="-1.1368683772161603e-13mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="1.3500099999999975mm"
            pcbY="-0.9499600000000328mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.3500099999999975mm"
            pcbY="-0.9499600000000328mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.3500099999999975mm"
            pcbY="-1.1368683772161603e-13mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.3500099999999975mm"
            pcbY="0.9499599999999191mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.899998200000141, y: 1.5499080000000731 },
              { x: 0.9000236000000541, y: 1.5499080000000731 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.899998200000141, y: -1.5501111999999466 },
              { x: 0.9000236000000541, y: -1.5501111999999466 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=229b69761e2c45dba6a83d8866dec72d&pn=C3716049",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
