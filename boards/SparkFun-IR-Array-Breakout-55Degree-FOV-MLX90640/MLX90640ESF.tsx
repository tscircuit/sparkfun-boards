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
        jlcpcb: ["C17380659"],
      }}
      manufacturerPartNumber="MLX90640ESF_BAA_000_TU"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-2.9199839999999995mm"
            pcbY="-0.00012700000002041634mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="-2.065020000000004mm"
            pcbY="2.0648930000000973mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="2.9199839999999995mm"
            pcbY="-0.12712699999997312mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="2.064766000000077mm"
            pcbY="-2.0648929999999837mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -4.952999999999861, y: 1.015873000000056 },
              { x: -5.587999999999965, y: 1.2698729999999614 },
              { x: -5.080000000000041, y: 2.6668730000000096 },
              { x: -4.444999999999936, y: 2.4128729999999905 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c3f716bb660742748361c9217a1ca19b&pn=C17380659",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 11.4 },
      }}
      {...props}
    />
  )
}
