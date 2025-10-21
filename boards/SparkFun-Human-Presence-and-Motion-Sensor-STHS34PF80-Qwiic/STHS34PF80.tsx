import type { ChipProps } from "@tscircuit/props"

export const pinLabels = {
  pin1: "SCL",
  pin2: "RES",
  pin3: "N_CS",
  pin4: "SDA",
  pin5: "NC",
  pin6: "VDD",
  pin7: "GND",
  pin8: "GND",
  pin9: "VDD",
  pin10: "INT",
}

export const STHS34PF80 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="STHS34PF80"
    {...props}
    supplierPartNumbers={{
      jlcpcb: ["C5378301"],
    }}
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VDD", "N_CS", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL", "INT"],
      },
    }}
    schPinStyle={{
      GND: { marginTop: "0.15" },
      INT: { marginTop: "0.15" },
    }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-0.9999979999999908mm"
          pcbY="-1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin10"]}
          pcbX="-0.9999979999999908mm"
          pcbY="1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-0.4998719999999821mm"
          pcbY="-1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin9"]}
          pcbX="-0.4998719999999821mm"
          pcbY="1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="2.842170943040401e-14mm"
          pcbY="-1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin8"]}
          pcbX="2.842170943040401e-14mm"
          pcbY="1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="0.5001260000000087mm"
          pcbY="-1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="0.5001260000000087mm"
          pcbY="1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.999998000000005mm"
          pcbY="-1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.999998000000005mm"
          pcbY="1.5173959999999909mm"
          width="0.25001219999999996mm"
          height="0.5849874mm"
          shape="rect"
        />
      </footprint>
    }
    cadModel={{
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d41c5d7dfba44f8ab4654f0fdfdfb8ea&pn=C5378301",
      rotationOffset: { x: 0, y: 0, z: 0 },
      positionOffset: { x: 0, y: 0, z: 0 },
    }}
  />
)
