import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VOUT"],
  pin2: ["VSS"],
  pin3: ["VDD"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["A0"],
} as const

export const MCP4725A1T_E_CH = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C61423"],
      }}
      manufacturerPartNumber="MCP4725A1T_E_CH"
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
            pcbX="0.3500099999999975mm"
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
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=229b69761e2c45dba6a83d8866dec72d&pn=C61423",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
