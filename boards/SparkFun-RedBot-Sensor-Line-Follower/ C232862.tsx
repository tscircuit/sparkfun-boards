import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
} as const

export const QRE1113GR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C232862"],
      }}
      manufacturerPartNumber="QRE1113GR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.99999600000001mm"
            pcbY="0.9000490000000809mm"
            width="1.6599916mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.9999959999998964mm"
            pcbY="0.9000490000000809mm"
            width="1.6599916mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.9999959999998964mm"
            pcbY="-0.9000490000000809mm"
            width="1.6599916mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.99999600000001mm"
            pcbY="-0.9000490000000809mm"
            width="1.6599916mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.3463016000000607, y: -0.3046984000000066 },
              { x: -1.3463016000000607, y: 0.30487619999996696 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.346123799999873, y: 0.27950159999988955 },
              { x: 1.346123799999873, y: -0.2941065999999637 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.346225400000094, y: 1.447926999999936 },
              { x: -1.346225400000094, y: 1.7019269999999551 },
              { x: 1.346123799999873, y: 1.7019269999999551 },
              { x: 1.346123799999873, y: 1.4987270000000308 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.346123799999873, y: -1.5311120000000074 },
              { x: 1.346123799999873, y: -1.7016984000000548 },
              { x: -0.8636508000000731, y: -1.7016984000000548 },
              { x: -1.1176508000000922, y: -1.7016984000000548 },
              { x: -1.346225400000094, y: -1.4730729999999994 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=bea63151d7814fd59377ff1bdb0cacb7&pn=C232862",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -0.5000482000001056 },
      }}
      {...props}
    />
  )
}
