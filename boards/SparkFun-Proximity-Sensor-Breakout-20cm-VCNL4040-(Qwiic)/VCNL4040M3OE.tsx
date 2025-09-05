import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["CATHODE_SEN"],
  pin3: ["VDD"],
  pin4: ["ANODE"],
  pin5: ["CATHODE_LED"],
  pin6: ["INT"],
  pin7: ["SDA"],
  pin8: ["SCL"],
} as const

export const VCNL4040M3OE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        pin2: { marginTop: "0.15" },
        pin3: { marginBottom: "1.6" },
        pin4: { marginBottom: "0.3" },
        pin8: { marginBottom: "0.2" },
        pin6: { marginBottom: "0.2" },
      }}
      schWidth={2.5}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin7", "pin8", "pin6", "pin5", "pin2"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C142526"],
      }}
      manufacturerPartNumber="VCNL4040M3OE"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.6123919999998861mm"
            pcbY="-1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.5374640000001136mm"
            pcbY="-1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.5374639999999999mm"
            pcbY="-1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.6123919999998861mm"
            pcbY="-1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.6123919999998861mm"
            pcbY="1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.5374639999999999mm"
            pcbY="1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.5374640000001136mm"
            pcbY="1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.6123919999998861mm"
            pcbY="1.0380979999999909mm"
            width="0.6020054mm"
            height="1.1260073999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.0761960000000954, y: -1.0761979999999767 },
              { x: -2.0761960000000954, y: 1.0761980000000904 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.0761959999999817, y: -1.0761979999999767 },
              { x: 2.0761959999999817, y: 1.0761980000000904 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=263d838dce3c462a9139718e05588e07&pn=C142526",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
