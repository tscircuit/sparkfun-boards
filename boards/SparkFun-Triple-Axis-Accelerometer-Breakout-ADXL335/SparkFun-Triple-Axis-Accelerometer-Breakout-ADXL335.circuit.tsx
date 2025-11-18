import { ADXL335BCPZ_RL7 } from "./ADXL335"

export default () => (
  <board width="17.78mm" height="15.24mm" routingDisabled>
    <ADXL335BCPZ_RL7
      name="U1"
      schY={0}
      pcbRotation={180}
      pcbX={0.762}
      connections={{
        pin2: "net.ST",
        pin3: "net.GND",
        pin5: "net.GND",
        pin6: "net.GND",
        pin7: "net.GND",
      }}
    />
    <capacitor
      capacitance={"0.1uF"}
      name="C1"
      connections={{ pin1: "U1.pin8", pin2: "net.GND" }}
      schX={2}
      schY={-1.5}
      schRotation={-90}
      pcbX={0.762}
      pcbY={4.826}
      pcbRotation={180}
      footprint={"cap0603"}
    />
    <capacitor
      capacitance={"0.1uF"}
      connections={{ pin1: "net.VCC", pin2: "net.GND" }}
      schRotation={-90}
      name="C2"
      schX={-4}
      schY={-0.5}
      pcbX={1.65}
      pcbY={-4.953}
      footprint={"cap0603"}
    />
    <capacitor
      capacitance={"0.1uF"}
      name="C3"
      connections={{ pin1: "U1.pin10", pin2: "net.GND" }}
      schX={3}
      schY={0.45}
      pcbX={-3.683}
      pcbY={2.032}
      pcbRotation={90}
      footprint={"cap0603"}
    />
    <capacitor
      capacitance={"0.1uF"}
      name="C4"
      connections={{ pin1: "U1.pin12", pin2: "net.GND" }}
      schRotation={90}
      schX={1.5}
      schY={1.4}
      pcbX={-3.683}
      pcbY={-2.032}
      pcbRotation={90}
      footprint={"cap0603"}
    />
    <hole diameter={3.048} pcbY={5.08} pcbX={6.35} />
    <hole diameter={3.048} pcbY={-5.08} pcbX={6.35} />
    <silkscreentext text="ADXL335" pcbX={4.2} pcbY={5} pcbRotation={-90} />
    <silkscreentext
      text="Tri-Axis"
      pcbX={3}
      pcbY={0}
      pcbRotation={-90}
      layer={"bottom"}
    />
    <silkscreentext
      text="Accelerometer"
      pcbX={1}
      pcbY={0}
      pcbRotation={-90}
      layer={"bottom"}
    />

    <jumper
      cadModel={null}
      schWidth={0.6}
      schDirection="left"
      name="JP1"
      pinLabels={{
        pin1: ["ST"],
        pin2: ["Z"],
        pin3: ["Y"],
        pin4: ["X"],
        pin5: ["GND"],
        pin6: ["VCC"],
      }}
      schX={1}
      schY={-3}
      footprint={"pinrow6_id1.016mm_od1.88mm_p2.54mm_nosquareplating"}
      connections={{
        pin1: "net.ST",
        pin2: "net.ZOUT",
        pin3: "net.YOUT",
        pin4: "net.XOUT",
        pin5: "net.GND",
        pin6: "net.VCC",
      }}
      pcbRotation={-90}
      pcbY={0}
      pcbX={-7.62}
    />

    <netlabel
      net="VCC"
      connectsTo={["U1.pin14", "U1.pin15"]}
      schX={-1.4}
      schY={1}
      anchorSide="bottom"
    />
  </board>
)
