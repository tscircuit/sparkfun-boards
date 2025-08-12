import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["NC"],
  pin3: ["GND"],
  pin4: ["SDA"],
  pin5: ["N_INT"],
  pin6: ["SCL"],
} as const

export const ISL29125IROZ_T7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        pin1: { bottomMargin: 0.2 },
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin6", "pin5"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin3"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2654928"],
      }}
      manufacturerPartNumber="ISL29125IROZ_T7"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.4999990000001162mm"
            pcbY="-0.7175499999999602mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.00012700000002041634mm"
            pcbY="-0.7175499999999602mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.4999990000000025mm"
            pcbY="-0.7175499999999602mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.4999990000000025mm"
            pcbY="0.7175500000000739mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.00012700000002041634mm"
            pcbY="0.7175500000000739mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.4999990000001162mm"
            pcbY="0.7175500000000739mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.8763254000000416, y: -0.8761983999999075 },
              { x: -0.8763254000000416, y: 0.8761984000000211 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8760714000000007, y: -0.8761983999999075 },
              { x: 0.8760714000000007, y: 0.8761984000000211 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c3573a408ad54846819a6670160fd2d9&pn=C2654928",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
