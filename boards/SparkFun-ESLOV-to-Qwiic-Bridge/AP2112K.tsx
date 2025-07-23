import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["VOUT"],
} as const

export const AP2112K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C23380830"],
      }}
      manufacturerPartNumber="AP2112K_3_3TRG1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="1.1000740000000633mm"
            pcbY="-0.00012700000002041634mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.1000740000000633mm"
            pcbY="0.9498330000000124mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="1.1000740000000633mm"
            pcbY="-0.9498330000000124mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.1000740000000633mm"
            pcbY="0.9500870000000532mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.1000740000000633mm"
            pcbY="-0.9500870000000532mm"
            width="0.9999979999999999mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.6984238000000005, y: -1.523974599999974 },
              { x: 0.6985507999999072, y: -1.5240254000000277 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.42237660000012056, y: 1.3969745999999077 },
              { x: 0.42240199999992, y: 1.3969745999999077 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.88894920000007, y: -0.38097460000005867 },
              { x: -0.88894920000007, y: 0.38097460000005867 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=8c971aea3af54c53b74baeb1f489d393&pn=C23380830",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
