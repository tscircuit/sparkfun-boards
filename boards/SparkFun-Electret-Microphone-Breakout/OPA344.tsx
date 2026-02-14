import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["OUT"],
  pin2: ["V_NEG"],
  pin3: ["IN_POS"],
  pin4: ["IN_NEG"],
  pin5: ["V_POS"],
} as const

export const OPA344NA_250 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C131974"],
      }}
      manufacturerPartNumber="OPA344NA_250"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.300098999999932mm"
            pcbY="-0.9499600000000328mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.300098999999932mm"
            pcbY="0.9499599999999191mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.300098999999932mm"
            pcbY="0.9499599999999191mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.300098999999932mm"
            pcbY="-1.1368683772161603e-13mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="1.300098999999932mm"
            pcbY="-0.9499600000000328mm"
            width="1.0999978mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.8999728000000005, y: -1.404111999999941 },
              { x: 0.8999728000000005, y: -1.5500604000000067 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8999728000000005, y: -0.45412660000010874 },
              { x: 0.8999728000000005, y: -0.4958079999998972 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8999728000000005, y: 0.4958079999998972 },
              { x: 0.8999728000000005, y: 0.45415200000002187 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8999728000000005, y: 1.5499587999998994 },
              { x: 0.8999728000000005, y: 1.404111999999941 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9000489999999672, y: -1.404111999999941 },
              { x: -0.9000489999999672, y: -1.5500604000000067 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9000489999999672, y: 0.4958079999998972 },
              { x: -0.9000489999999672, y: -0.4958334000000377 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9000489999999672, y: 1.5499587999998994 },
              { x: -0.9000489999999672, y: 1.4040866000000278 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9000489999999672, y: 1.5499587999998994 },
              { x: 0.8999728000000005, y: 1.5499587999998994 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9000489999999672, y: -1.5500604000000067 },
              { x: 0.8999728000000005, y: -1.5500604000000067 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=460193f9bf2d42e58cf3c2f675b07dc6&pn=C131974",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: {
          x: 0,
          y: -1.1368683772161603e-13,
          z: -0.4499594000000229,
        },
      }}
      {...props}
    />
  )
}
