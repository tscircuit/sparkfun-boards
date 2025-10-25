import { sel } from "tscircuit"

export default () => (
  <board width="17.78mm" height="35.56mm">
    <chip
      name="U1"
      footprint="soic28_pillpads_w11.30mm_pw0.762_pl1.524"
      schWidth={0.9}
      schY={4}
      connections={{
        pin1: sel.JP1.pin1,
        pin2: sel.JP1.pin2,
        pin3: sel.JP1.pin3,
        pin4: sel.JP1.pin4,
        pin5: sel.JP1.pin5,
        pin6: sel.JP1.pin6,
        pin7: sel.JP1.pin7,
        pin8: sel.JP1.pin8,
        pin16: sel.JP2.pin2,
        pin15: sel.JP2.pin1,
        pin14: sel.JP1.pin14,
        pin13: sel.JP1.pin13,
        pin12: sel.JP1.pin12,
        pin11: sel.JP1.pin11,
        pin10: sel.JP1.pin10,
        pin9: sel.JP1.pin9,
        pin17: sel.JP2.pin3,
        pin18: sel.JP2.pin4,
        pin19: sel.JP2.pin5,
        pin20: sel.JP2.pin6,
        pin21: sel.JP2.pin7,
        pin22: sel.JP2.pin8,
        pin23: sel.JP2.pin9,
        pin24: sel.JP2.pin10,
        pin25: sel.JP2.pin11,
        pin26: sel.JP2.pin12,
        pin27: sel.JP2.pin13,
        pin28: sel.JP2.pin14,
      }}
    />
    <jumper
      name="JP1"
      footprint={"pinrow14_nosquareplating_nopinlabels_id1.016_od1.626_p2.54"}
      pcbRotation={-90}
      cadModel={null}
      schY={4}
      schX={-2}
      pcbX={-7.5}
      schPinArrangement={{
        rightSide: {
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
          ],
        },
      }}
    />
    <jumper
      name="JP2"
      footprint={"pinrow14_nopinlabels_id1.016_od1.626_p2.54_nosquareplating"}
      schY={4}
      schX={2}
      pcbX={7.5}
      pcbRotation={90}
      cadModel={null}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
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
          ],
        },
      }}
    />

    <silkscreentext
      text="28-SOIC"
      pcbX={0}
      pcbY={12.5}
      fontSize={1.5}
      pcbRotation={0}
    />
  </board>
)
