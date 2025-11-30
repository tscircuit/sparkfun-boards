import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["Anode"],
  pin2: ["Cathode"],
  pin3: ["VCC"],
  pin4: ["VO"],
  pin5: ["GND"],
} as const

export const GP1A57HRJ00F = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C919627"],
      }}
      manufacturerPartNumber="GP1A57HRJ00F"
      footprint={
        <footprint>
          <hole
            pcbX="0.37500565000004826mm"
            pcbY="-0.06499864999989313mm"
            diameter="1.5000223999999998mm"
          />
          <hole
            pcbX="-8.574938350000025mm"
            pcbY="1.9349973500000033mm"
            diameter="0.700024mm"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="-7.224928349999914mm"
            pcbY="1.2050013500000887mm"
            outerDiameter="1.2999973999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-7.224928349999914mm"
            pcbY="-1.3349986499999886mm"
            outerDiameter="1.2999973999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="7.97493965000001mm"
            pcbY="-1.3349986499999886mm"
            outerDiameter="1.2999973999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="6.475069649999909mm"
            pcbY="-0.06499865000000682mm"
            outerDiameter="1.2999973999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="7.97493965000001mm"
            pcbY="1.2050013500000887mm"
            outerDiameter="1.2999973999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -8.895943549999856, y: 2.474950550000017 },
              { x: -8.895943549999856, y: -2.6050494499999104 },
              { x: 9.646056449999946, y: -2.6050494499999104 },
              { x: 9.646056449999946, y: 2.474950550000017 },
              { x: -8.895943549999856, y: 2.474950550000017 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=7059268a7b254006a868f8b8b0764eae&pn=C919627",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: {
          x: 0.5,
          y: 0.2,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
