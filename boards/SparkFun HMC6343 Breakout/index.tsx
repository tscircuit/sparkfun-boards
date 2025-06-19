import { HMC6343 } from "./HMC6343"
import { sel } from "@tscircuit/core"

export default () => (
  <board>
    <HMC6343
      name="U1"
      connections={{
        VDD1: sel.net.V3_3,
        VDD2: sel.net.V3_3,
        VDD3: sel.net.V3_3,
        GND1: sel.net.GND,
        GND2: sel.net.GND,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
        CS_CTRL: sel.net.CS,
        CS: "net.CS_CTRL",
      }}
    />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      pcbX={7}
      pcbY={2}
      pcbRotation="90deg"
      schX={2}
      schY={1.5}
      schRotation="90deg"
      connections={{
        pin1: sel.net.SCL,
        pin2: ".SJ1 > .pin3",
      }}
    />

    <resistor
      name="R2"
      resistance="10k"
      footprint="0402"
      pcbX={9.5}
      pcbY={2}
      pcbRotation="90deg"
      schX={3}
      schY={1.5}
      schRotation="90deg"
      connections={{
        pin1: sel.net.SDA,
        pin2: ".SJ1 > .pin1",
      }}
    />

    <solderjumper
      name="SJ1"
      footprint="solderjumper3"
      pcbX={7.5}
      pcbY={7}
      schX={2.5}
      schY={3}
      pinCount={3}
      schRotation="180deg"
    />

    <trace from=".SJ1 > .pin2" to="net.V3_3" />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbY={8}
      schX={-4.5}
      schRotation="-90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      pcbY={10.5}
      schX={-3.5}
      schRotation="90deg"
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.V3_3,
      }}
    />

    <jumper
      name="JP1"
      footprint="pinrow4"
      pcbX={-12}
      pcbY={0}
      schX={-6.5}
      pcbRotation="-90deg"
    />

    <trace from=".JP1 > .pin4" to="net.SCL" />
    <trace from=".JP1 > .pin3" to="net.SDA" />
    <trace from=".JP1 > .pin2" to="net.V3_3" />
    <trace from=".JP1 > .pin1" to="net.GND" />
  </board>
)
