import { HMC6343 } from "./HMC6343"
import { sel } from "@tscircuit/core"
// https://tscircuit.com/MustafaMulla29/HMC6343_Breakout#files

const HMC6343Breakout = () => (
  <board width="20.32mm" height="20.32mm">
    <HMC6343
      name="U1"
      schWidth="1.4mm"
      pcbY={1.27}
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
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD1", "VDD2", "VDD3", "GND1", "GND2"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["CS_CTRL", "CS", "SDA", "SCL"],
        },
      }}
      schPinStyle={{
        VDD3: {
          marginBottom: 0.2,
        },
        SCL: {
          marginTop: -0.2,
        },
        SDA: {
          marginBottom: 0.2,
        },
      }}
    />
    <hole diameter="3.2mm" pcbX={-7.62} pcbY={-7.62} />
    <hole diameter="3.2mm" pcbX={7.62} pcbY={7.62} />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0603"
      pcbX={-2.54}
      pcbY={8.89}
      pcbRotation="180deg"
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
      footprint="0603"
      pcbX={-2.54}
      pcbY={7.62}
      pcbRotation="180deg"
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
      footprint={
        <footprint name="sj3_paste123">
          <smtpad
            portHints={["1"]}
            pcbX="-0.813mm"
            pcbY="0.000mm"
            width="0.635mm"
            height="1.270mm"
            shape="rect"
          />
          <smtpad
            portHints={["2"]}
            pcbX="0.000mm"
            pcbY="0.000mm"
            width="0.635mm"
            height="1.270mm"
            shape="rect"
          />
          <smtpad
            portHints={["3"]}
            pcbX="0.813mm"
            pcbY="0.000mm"
            width="0.635mm"
            height="1.270mm"
            shape="rect"
          />
        </footprint>
      }
      pcbX={-6.35}
      pcbY={7.62}
      schX={2.5}
      schY={3}
      pinCount={3}
      pcbRotation="90deg"
      schRotation="180deg"
    />

    <trace from=".SJ1 > .pin2" to="net.V3_3" />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0603"
      pcbX={-6.985}
      pcbY={1.27}
      schX={-4.5}
      pcbRotation={270}
      schRotation="-90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0603"
      pcbX={-8.89}
      pcbY={1.27}
      schX={-3.5}
      schRotation="90deg"
      pcbRotation={270}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.V3_3,
      }}
    />

    <jumper
      name="JP1"
      footprint="pinrow4__p2.54_id1.016_od1.8796"
      pcbX={0}
      pcbY={-8.89}
      schX={-6.5}
    />

    <trace from={sel.JP1.pin4} to={sel.net.SCL} />
    <trace from={sel.JP1.pin3} to={sel.net.SDA} />
    <trace from={sel.JP1.pin2} to={sel.net.V3_3} />
    <trace from={sel.JP1.pin1} to={sel.net.GND} />
  </board>
)

export default HMC6343Breakout
