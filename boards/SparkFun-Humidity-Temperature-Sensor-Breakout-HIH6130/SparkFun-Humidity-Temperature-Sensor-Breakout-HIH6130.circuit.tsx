import { sel } from "tscircuit"

export default () => (
  <board width="17.78mm" height="15.24mm" pcbGap={0.5}>
    <chip
      name="U1"
      schX={0}
      footprint="soic8_pw0.610_pl2.210_w7.42"
      schPinSpacing={0.3}
      pinLabels={{
        pin8: ["VDD"],
        pin1: ["VCORE"],
        pin2: ["GND"],
        pin7: ["NC"],
        pin3: ["SCL"],
        pin4: ["SDA"],
        pin6: ["AL_L"],
        pin5: ["AL_H"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "VCORE", "GND", "NC"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "AL_L", "AL_H"],
        },
      }}
      connections={{
        pin1: "C1.pin1",
        pin2: "net.GND",
        pin3: "net.SCL",
        pin4: "net.SDA",
        pin5: "net.AL_L",
        pin6: "net.AL_H",
        pin7: "net.NC",
        pin8: "net.VCC",
      }}
    />
    <capacitor
      name="C1"
      schX={-3}
      schRotation={-90}
      footprint="cap0402"
      capacitance={"0.1uF"}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      schX={-4}
      schRotation={-90}
      footprint="cap0402"
      capacitance={"0.22uF"}
      connections={{ pin1: "net.VCC", pin2: "net.GND" }}
    />
    <resistor
      name="R1"
      schX={2}
      schY={1.7}
      schRotation={-90}
      footprint="0402"
      resistance={"2.2k"}
      connections={{ pin2: "net.SCL", pin1: "net.VCC" }}
    />
    <resistor
      name="R2"
      schX={2.9}
      schY={1.7}
      schRotation={-90}
      footprint="0402"
      resistance={"2.2k"}
      connections={{ pin2: "net.SDA", pin1: "net.VCC" }}
    />

    <jumper
      cadModel={null}
      name="JP1"
      schX={5}
      schY={1.1}
      pcbY={-6.4}
      schDirection="left"
      footprint={"pinrow6_id1.016_od1.88_nosquareplating"}
      connections={{
        pin1: "net.SDA",
        pin2: "net.SCL",
        pin3: "net.AL_L",
        pin4: "net.AL_H",
        pin5: "net.VCC",
        pin6: "net.GND",
      }}
    />

    <hole diameter={3.048} pcbX={-6.35} pcbY={5.08} />
    <hole diameter={3.048} pcbX={6.35} pcbY={5.08} />

    <silkscreentext
      text="HIH-6130"
      pcbX={0}
      pcbY={6.3}
      fontSize={1.5}
      pcbRotation={0}
    />
  </board>
)
