import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["RO"],
  pin2: ["/RE"],
  pin3: ["DE"],
  pin4: ["DI"],
  pin5: ["GND"],
  pin6: ["A"],
  pin7: ["B"],
  pin8: ["VCC"],
} as const

export const RS485SOIC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C19738"],
      }}
      manufacturerPartNumber="RS485SOIC"
      footprint={
        <footprint name="SO08">
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="2.6162mm"
            width="0.6096mm"
            height="2.2098mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.362, y: -1.803 },
              { x: -2.362, y: 1.803 },
            ]}
            strokeWidth="0.1524mm"
          />
          <silkscreenpath
            route={[
              { x: 2.362, y: -1.803 },
              { x: 2.362, y: 1.803 },
            ]}
            strokeWidth="0.1524mm"
          />
          <silkscreenpath
            route={[
              { x: -1.8034, y: -0.9906 },
              { x: -1.8034, y: -0.9906 },
            ]}
            strokeWidth="0.2032mm"
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=dc694c23844346e9981bdbac7bb76421&pn=C19738",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
