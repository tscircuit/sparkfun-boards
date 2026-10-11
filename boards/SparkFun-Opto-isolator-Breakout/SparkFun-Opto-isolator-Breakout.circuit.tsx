import { sel } from "tscircuit"
import { ILD213T } from "./ILD213T"

// Pad dimensions and placements follow SparkFun's original Eagle board:
// https://github.com/sparkfun/Opto_Isolator_Breakout/tree/fcf3b555d61089760e7e3c924f89e31108b939b3/Hardware
// The 3.2 x 1.4 mm courtyard matches Eagle's 0603 tKeepout outline.
const resistorFootprint = "res_p1.7_pw1.1_ph1.0_cyw3.2_cyh1.4"

// The reference SOT23-3 has asymmetric pad rows. Map its physical pads
// 1=B, 2=E, 3=C to the transistor symbol's semantic ports.
const transistorFootprint = (
  <footprint>
    {/* Reference body/pad envelope plus 0.15 mm assembly clearance. */}
    <courtyardrect width={3.1448} height={3.3} pcbY={0.05} />
    <smtpad
      portHints={["pin2", "base"]}
      pcbX={-0.95}
      pcbY={-1}
      shape="rect"
      width={0.8}
      height={0.9}
    />
    <smtpad
      portHints={["pin3", "emitter"]}
      pcbX={0.95}
      pcbY={-1}
      shape="rect"
      width={0.8}
      height={0.9}
    />
    <smtpad
      portHints={["pin1", "collector"]}
      pcbX={0}
      pcbY={1.1}
      shape="rect"
      width={0.8}
      height={0.9}
    />
    <silkscreenpath
      route={[
        { x: -0.8, y: 0.7 },
        { x: -1.4, y: 0.7 },
        { x: -1.4, y: -0.1 },
      ]}
      strokeWidth={0.2032}
    />
    <silkscreenpath
      route={[
        { x: 0.8, y: 0.7 },
        { x: 1.4, y: 0.7 },
        { x: 1.4, y: -0.1 },
      ]}
      strokeWidth={0.2032}
    />
  </footprint>
)

const transistorCadModel = {
  glbUrl: "https://modelcdn.tscircuit.com/jscad_models/sot23.glb",
  rotationOffset: { x: 0, y: 0, z: 90 },
  // The asymmetric pad bounds have their center 0.05 mm above the body.
  positionOffset: { x: 0, y: -0.05, z: 0 },
}

export default () => (
  <board
    width="15.24mm"
    height="12.70mm"
    title="SparkFun Opto-isolator Breakout"
  >
    <ILD213T
      name="U1"
      connections={{
        pin2: sel.net().GND,
        pin4: sel.net().GND,
        pin5: sel.net().HV_GND,
        pin7: sel.net().HV_GND,
      }}
      pcbRotation={-90}
      pcbX={0}
      pcbY={-2.921}
    />

    <resistor
      resistance={220}
      name="R1"
      footprint={resistorFootprint}
      schX={-3}
      schY={0.5}
      pcbX={-4.318}
      pcbY={0.381}
      pcbRotation={-90}
      connections={{ pin1: sel.J2.pin2, pin2: sel.U1.pin1 }}
    />
    <resistor
      resistance={220}
      name="R2"
      footprint={resistorFootprint}
      schX={-3}
      schY={-0.5}
      pcbX={-4.318}
      pcbY={-2.921}
      pcbRotation={-90}
      connections={{ pin1: sel.J2.pin3, pin2: sel.U1.pin3 }}
    />

    <resistor
      resistance={"10K"}
      name="R3"
      footprint={resistorFootprint}
      schX={3}
      schY={4}
      schRotation={90}
      pcbX={4.3434}
      pcbY={0.3302}
      pcbRotation={-90}
      connections={{ pin2: sel.net().HV }}
    />
    <resistor
      resistance={"10K"}
      name="R4"
      footprint={resistorFootprint}
      schX={4}
      schY={4}
      schRotation={90}
      pcbX={4.318}
      pcbY={-3.175}
      pcbRotation={90}
      connections={{ pin2: sel.net().HV }}
    />
    <resistor
      resistance={"10K"}
      name="R5"
      footprint={resistorFootprint}
      schX={5}
      schY={4}
      schRotation={90}
      pcbX={-0.762}
      pcbY={3.81}
      pcbRotation={-90}
      connections={{ pin2: sel.net().HV }}
    />
    <resistor
      resistance={"10K"}
      name="R6"
      footprint={resistorFootprint}
      schX={6}
      schY={4}
      schRotation={90}
      pcbX={4.191}
      pcbY={3.81}
      pcbRotation={-90}
      connections={{ pin2: sel.net().HV }}
    />
    <transistor
      name="Q1"
      footprint={transistorFootprint}
      cadModel={transistorCadModel}
      schX={4}
      schY={-1}
      pcbX={-3.302}
      pcbY={3.81}
      pcbRotation={0}
      type="npn"
      connections={{
        collector: sel.net().OUT_2,
        emitter: sel.net().HV_GND,
        base: sel.net().F,
      }}
      schRotation={-90}
    />
    <transistor
      name="Q2"
      footprint={transistorFootprint}
      cadModel={transistorCadModel}
      schX={6}
      schY={1}
      pcbX={1.905}
      pcbY={3.81}
      pcbRotation={0}
      type="npn"
      connections={{
        collector: sel.net().OUT_1,
        emitter: sel.net().HV_GND,
        base: sel.net().H,
      }}
      schRotation={-90}
    />

    <jumper
      name="J2"
      doNotPlace
      layer="bottom"
      footprint={
        "pinrow4_doublesidedpinlabel_id1.016_od1.8796_p2.54_pinlabeltextalignleft_pinlabelorthogonal"
      }
      pcbX={-6.35}
      schX={-6}
      pcbRotation={90}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      connections={{
        pin4: sel.net().GND,
      }}
      manufacturerPartNumber="M04PHT"
    />

    <jumper
      name="JP1"
      doNotPlace
      layer="bottom"
      footprint={
        "pinrow4_doublesidedpinlabel_id1.016_od1.8796_p2.54_pinlabeltextalignleft_pinlabelorthogonal"
      }
      pcbX={6.35}
      schX={10}
      pcbRotation={-90}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      connections={{
        pin1: sel.net().HV_GND,
        pin2: sel.net().OUT_2,
        pin3: sel.net().HV,
        pin4: sel.net().OUT_1,
      }}
      manufacturerPartNumber="M04PHT"
    />

    <netlabel net="HV_GND" schX={2} connectsTo={[sel.U1.pin7, sel.U1.pin5]} />

    <netlabel net="F" connectsTo={[sel.U1.pin6, sel.R4.pin1]} />
    <netlabel net="H" connectsTo={[sel.U1.pin8, sel.R3.pin1]} />

    <netlabel net="OUT_1" connectsTo={[sel.R6.pin1, sel.JP1.pin4]} />
    <netlabel net="OUT_2" connectsTo={[sel.R5.pin1, sel.JP1.pin2]} />
  </board>
)
