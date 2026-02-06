import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCCA"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["NC1"],
  pin7: ["GND"],
  pin8: ["OE"],
  pin9: ["NC2"],
  pin10: ["B4"],
  pin11: ["B3"],
  pin12: ["B2"],
  pin13: ["B1"],
  pin14: ["VCCB"],
} as const

export const TXB0104D = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1549752"],
      }}
      manufacturerPartNumber="TXB0104D"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.810000000000059mm"
            pcbY="-2.76910799999996mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.5400000000000773mm"
            pcbY="-2.76910799999996mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.2700000000000955mm"
            pcbY="-2.76910799999996mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="-2.76910799999996mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.2699999999999818mm"
            pcbY="-2.76910799999996mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.5399999999999636mm"
            pcbY="-2.76910799999996mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.8099999999999454mm"
            pcbY="-2.76910799999996mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-3.810000000000059mm"
            pcbY="2.769108000000074mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.5400000000000773mm"
            pcbY="2.769108000000074mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.2700000000000955mm"
            pcbY="2.769108000000074mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="2.769108000000074mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.2699999999999818mm"
            pcbY="2.769108000000074mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.5399999999999636mm"
            pcbY="2.769108000000074mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.8099999999999454mm"
            pcbY="2.769108000000074mm"
            width="0.5739892mm"
            height="2.0379944mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -4.401210399999968, y: -1.5213837999999669 },
              { x: -4.401210399999968, y: 1.5214346000000205 },
              { x: 4.401210400000082, y: 1.5214346000000205 },
              { x: 4.401210400000082, y: -1.5213837999999669 },
              { x: -4.401210399999968, y: -1.5213837999999669 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=265efcdb862f47cf9eef6843d570fde7&pn=C1549752",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0.000025400000140507473, z: 0 },
      }}
      {...props}
    />
  )
}
