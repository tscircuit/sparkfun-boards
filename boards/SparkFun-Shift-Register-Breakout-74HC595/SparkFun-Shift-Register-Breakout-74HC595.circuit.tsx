import { sel } from "@tscircuit/core"
import { A_74HC595D_118 } from "./74HC595"

export default () => {
  return (
    <board width="22.86mm" height="30.48mm">
      <A_74HC595D_118
        name="U1"
        pcbX={1.27}
        pcbY={0}
        pcbRotation={-90}
        schX={2}
        schY={0}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin14", "pin11", "pin10", "pin12", "pin13", "pin8"],
          },
          rightSide: {
            direction: "top-to-bottom",
            pins: [
              "pin16",
              "pin15",
              "pin1",
              "pin2",
              "pin3",
              "pin4",
              "pin5",
              "pin6",
              "pin7",
              "pin9",
            ],
          },
        }}
        connections={{
          pin1: sel.net().QB,
          pin2: sel.net().QC,
          pin3: sel.net().QD,
          pin4: sel.net().QE,
          pin5: sel.net().QF,
          pin6: sel.net().QG,
          pin7: sel.net().QH,
          pin8: sel.net().GND,
          pin9: sel.net().SERIAL_OUT,
          pin10: sel.net().NOT_RESET,
          pin11: sel.net().CLOCK,
          pin12: sel.net().LATCH_CLOCK,
          pin13: sel.net().NOT_OUTPUT_ENABLE,
          pin14: sel.net().SERIAL_IN,
          pin15: sel.net().QA,
          pin16: sel.net().VCC,
        }}
      />

      <jumper
        name="JP1"
        pcbX={-10}
        pcbY={0}
        pcbRotation={-90}
        footprint="pinrow8_nopinlabels_id1.016_od1.626_p2.54"
        schX={5}
        schY={0}
        schRotation={90}
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
            ],
          },
        }}
        pinLabels={{
          pin1: "QA",
          pin2: "QB",
          pin3: "QC",
          pin4: "QD",
          pin5: "QE",
          pin6: "QF",
          pin7: "QG",
          pin8: "QH",
        }}
        connections={{
          pin1: sel.net().QA,
          pin2: sel.net().QB,
          pin3: sel.net().QC,
          pin4: sel.net().QD,
          pin5: sel.net().QE,
          pin6: sel.net().QF,
          pin7: sel.net().QG,
          pin8: sel.net().QH,
        }}
      />

      <jumper
        name="JP2"
        pcbX={2.5}
        pcbY={14}
        footprint="pinrow7_nosquareplating_nopinlabels_id1.016_od1.626_p2.54"
        schX={-5}
        schY={2.5}
        schRotation={90}
        pinLabels={{
          pin1: "VCC",
          pin2: "GND",
          pin3: "NOT_RESET",
          pin4: "NOT_OUTPUT_ENABLE",
          pin5: "CLOCK",
          pin6: "LATCH_CLOCK",
          pin7: "SERIAL_IN",
        }}
        connections={{
          pin1: sel.net().VCC,
          pin2: sel.net().GND,
          pin3: sel.net().NOT_RESET,
          pin4: sel.net().NOT_OUTPUT_ENABLE,
          pin5: sel.net().CLOCK,
          pin6: sel.net().LATCH_CLOCK,
          pin7: sel.net().SERIAL_IN,
        }}
      />

      <jumper
        name="JP3"
        pcbX={2.5}
        pcbY={-14}
        footprint="pinrow7_nosquareplating_nopinlabels_id1.016_od1.626_p2.54"
        schX={-5}
        schY={-2.5}
        schRotation={90}
        pinLabels={{
          pin1: "VCC",
          pin2: "GND",
          pin3: "NOT_RESET",
          pin4: "NOT_OUTPUT_ENABLE",
          pin5: "CLOCK",
          pin6: "LATCH_CLOCK",
          pin7: "SERIAL_OUT",
        }}
        connections={{
          pin1: sel.net().VCC,
          pin2: sel.net().GND,
          pin3: sel.net().NOT_RESET,
          pin4: sel.net().NOT_OUTPUT_ENABLE,
          pin5: sel.net().CLOCK,
          pin6: sel.net().LATCH_CLOCK,
          pin7: sel.net().SERIAL_OUT,
        }}
      />
    </board>
  )
}
