import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AVDDVCSEL"],
  pin2: ["AVSSVCSEL"],
  pin3: ["GND"],
  pin4: ["GND2"],
  pin5: ["N_SHUT"],
  pin6: ["GND3"],
  pin7: ["N_INT"],
  pin8: ["NC"],
  pin9: ["SDA"],
  pin10: ["SCL"],
  pin11: ["VCC"],
  pin12: ["GND4"],
} as const

export const VL53L4EDV0DH_1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C17302907"],
      }}
      manufacturerPartNumber="VL53L4CD"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.5999460000000454mm"
            pcbY="0.8001000000000431mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.8001000000000431mm"
            pcbY="0.8001000000000431mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="0.8001000000000431mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.8000999999999294mm"
            pcbY="0.8001000000000431mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.5999459999999317mm"
            pcbY="0.8001000000000431mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.5999459999999317mm"
            pcbY="0mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.5999459999999317mm"
            pcbY="-0.8000999999999294mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.8000999999999294mm"
            pcbY="-0.8000999999999294mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="-0.8000999999999294mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.8001000000000431mm"
            pcbY="-0.8000999999999294mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.5999460000000454mm"
            pcbY="-0.8000999999999294mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.5999460000000454mm"
            pcbY="0mm"
            width="0.49999899999999997mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ee61ee07a43e4ecba02b972250051888&pn=C17302907",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
