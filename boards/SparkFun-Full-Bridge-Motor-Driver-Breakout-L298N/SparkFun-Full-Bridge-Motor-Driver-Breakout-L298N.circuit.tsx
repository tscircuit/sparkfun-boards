import { sel } from "tscircuit"
import { L298N } from "./C434589"

export default () => (
  <board
    width="40.64mm"
    height="24.13mm"
    title="SparkFun Full Bridge Motor Driver Breakout - L298N"
  >
    <L298N
      name="U1"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin9", "pin6", "pin11", "pin1", "pin15", "pin8"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin5",
            "pin10",
            "pin7",
            "pin12",
            "pin2",
            "pin3",
            "pin13",
            "pin14",
          ],
        },
      }}
      schPinStyle={{
        ENB: {
          marginBottom: 0.2,
        },
      }}
      manufacturerPartNumber="L298N"
      schX={-2.5}
      schY={-0.4}
    />
    <jumper
      name="JP1"
      footprint={"pinrow15_nosquareplating_id1.016_od1.880_p2.54"}
      schY={0}
      schX={3}
      pcbX={0}
      pcbY={-10}
      pcbRotation={180}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin1",
            "pin2",
            "pin3",
            "pin4",
            "pin5",
            "pin6",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
            "pin11",
            "pin12",
            "pin13",
            "pin14",
            "pin15",
          ],
        },
      }}
      connections={{
        pin1: sel.U1.pin14,
        pin2: sel.U1.pin12,
        pin3: sel.U1.pin10,
        pin4: sel.U1.pin15,
        pin5: sel.U1.pin13,
        pin6: sel.U1.pin11,
        pin7: sel.U1.pin9,
        pin8: sel.U1.pin7,
        pin9: sel.U1.pin5,
        pin10: sel.U1.pin3,
        pin11: sel.U1.pin1,
        pin12: sel.U1.pin8,
        pin13: sel.U1.pin6,
        pin14: sel.U1.pin4,
        pin15: sel.U1.pin2,
      }}
      manufacturerPartNumber="M15"
    />
    <hole diameter={3.1} pcbX={12.7} pcbY={9} />
    <hole diameter={3.1} pcbX={-12.7} pcbY={9} />
    <hole diameter={3.1} pcbX={17.7} pcbY={7} />
    <hole diameter={3.1} pcbX={-17.7} pcbY={7} />
  </board>
)
