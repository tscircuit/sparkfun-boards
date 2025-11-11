import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SDA"],
  pin2: ["VDD"],
  pin3: ["GND"],
  pin4: ["SCL"],
} as const

export const MLX90640ESF = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C488251"],
      }}
      manufacturerPartNumber="MLX90640ESF_BAB_000_TU"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin2"]}
            pcbX="-1.1000739999999496mm"
            pcbY="-2.700019999999995mm"
            outerDiameter="1.7999964mm"
            holeDiameter="1.1999975999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.1000739999999496mm"
            pcbY="-2.700019999999995mm"
            outerDiameter="1.7999964mm"
            holeDiameter="1.1999975999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="1.1000739999999496mm"
            pcbY="2.700019999999995mm"
            outerDiameter="1.7999964mm"
            holeDiameter="1.1999975999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="-1.1000739999999496mm"
            pcbY="2.700019999999995mm"
            outerDiameter="1.7999964mm"
            holeDiameter="1.1999975999999999mm"
            shape="circle"
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a7fbf34a12ad4e7b8098685fc14d6700&pn=C488251",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: {
          x: -0.000025400000026820635,
          y: 0.4000499999999647,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
