import { sel } from "tscircuit"
import { ILD213T } from "./ILD213T"

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
      pcbY={-3}
    />

    <resistor
      resistance={220}
      name="R1"
      footprint={"0603"}
      schX={-3}
      schY={0.5}
      pcbX={-4.5}
      pcbY={0.5}
      pcbRotation={-90}
      connections={{ pin1: sel.J2.pin2, pin2: sel.U1.pin1 }}
    />
    <resistor
      resistance={220}
      name="R2"
      footprint={"0603"}
      schX={-3}
      schY={-0.5}
      pcbX={-4.5}
      pcbY={-2.5}
      pcbRotation={-90}
      connections={{ pin1: sel.J2.pin3, pin2: sel.U1.pin3 }}
    />

    <resistor
      resistance={"10K"}
      name="R3"
      footprint={"0603"}
      schX={3}
      schY={4}
      schRotation={90}
      pcbX={4.5}
      pcbY={0.5}
      pcbRotation={-90}
      connections={{ pin2: sel.net().HV }}
    />
    <resistor
      resistance={"10K"}
      name="R4"
      footprint={"0603"}
      schX={4}
      schY={4}
      schRotation={90}
      pcbX={4.5}
      pcbY={-2.5}
      pcbRotation={-90}
      connections={{ pin2: sel.net().HV }}
    />
    <resistor
      resistance={"10K"}
      name="R5"
      footprint={"0603"}
      schX={5}
      schY={4}
      schRotation={90}
      pcbX={-1}
      pcbY={2.81}
      pcbRotation={90}
      connections={{ pin2: sel.net().HV }}
    />
    <resistor
      resistance={"10K"}
      name="R6"
      footprint={"0603"}
      schX={6}
      schY={4}
      schRotation={90}
      pcbX={4.5}
      pcbY={4.5}
      pcbRotation={90}
      connections={{ pin2: sel.net().HV }}
    />
    <transistor
      name="Q1"
      footprint={"sot23"}
      schX={4}
      schY={-1}
      pcbX={-4}
      pcbY={4}
      pcbRotation={90}
      type="npn"
      connections={{
        pin1: sel.net().OUT_2,
        pin2: sel.net().HV_GND,
        pin3: sel.net().F,
      }}
      symbol={"diode"}
      schRotation={-90}
    />
    <transistor
      name="Q2"
      footprint="sot23"
      schX={6}
      schY={1}
      pcbX={2}
      pcbY={4}
      pcbRotation={90}
      type="npn"
      connections={{
        pin1: sel.net().OUT_1,
        pin2: sel.net().HV_GND,
        pin3: sel.net().H,
      }}
      schRotation={-90}
    />

    <jumper
      name="J2"
      footprint={
        "pinrow4_doublesidedpinlabel_id1.016_od1.88_p2.54_pinlabeltextalignleft_pinlabelorthogonal"
      }
      pcbX={-6.35}
      schX={-6}
      pcbRotation={-90}
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
      footprint={
        "pinrow4_doublesidedpinlabel_id1.016_od1.88_p2.54_pinlabeltextalignleft_pinlabelorthogonal"
      }
      pcbX={6.35}
      schX={10}
      pcbRotation={90}
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
