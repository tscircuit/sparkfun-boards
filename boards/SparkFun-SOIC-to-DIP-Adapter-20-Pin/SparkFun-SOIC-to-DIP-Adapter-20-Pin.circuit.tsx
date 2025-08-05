import { sel } from "@tscircuit/core"

export default () => (
  <board width="17.78mm" height="25.4mm">
    <silkscreentext text="1" pcbX={-6} pcbY={11.7} fontSize={1.5} />
    <silkscreentext text="20" pcbX={5.5} pcbY={11.7} fontSize={1.5} />
    <silkscreentext text="SOIC-20" pcbY={-11.5} fontSize={1.5} />

    <jumper
      name="JP1"
      cadModel={null}
      footprint="pinrow10_p2.54_id1.016_od1.626_nosquareplating_nopinlabels"
      schX={-2}
      schPortArrangement={{
        rightSide: {
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
          ],
        },
      }}
      pcbX={-7.62}
      pcbRotation={90}
      pinLabels={{
        pin1: "IN1",
        pin2: "IN2",
        pin3: "IN3",
        pin4: "IN4",
        pin5: "IN5",
        pin6: "IN6",
        pin7: "IN7",
        pin8: "IN8",
        pin9: "IN9",
        pin10: "IN10",
      }}
    />

    <chip
      name="U1"
      cadModel={null}
      footprint="soic20_pw0.6_pl3.9_w11.9_p1.25"
      connections={{
        pin1: sel<"IN10">("JP1").IN10,
        pin2: sel<"IN9">("JP1").IN9,
        pin3: sel<"IN8">("JP1").IN8,
        pin4: sel<"IN7">("JP1").IN7,
        pin5: sel<"IN6">("JP1").IN6,
        pin6: sel<"IN5">("JP1").IN5,
        pin7: sel<"IN4">("JP1").IN4,
        pin8: sel<"IN3">("JP1").IN3,
        pin9: sel<"IN2">("JP1").IN2,
        pin10: sel<"IN1">("JP1").IN1,

        pin11: sel<"IN20">("JP2").IN20,
        pin12: sel<"IN19">("JP2").IN19,
        pin13: sel<"IN18">("JP2").IN18,
        pin14: sel<"IN17">("JP2").IN17,
        pin15: sel<"IN16">("JP2").IN16,
        pin16: sel<"IN15">("JP2").IN15,
        pin17: sel<"IN14">("JP2").IN14,
        pin18: sel<"IN13">("JP2").IN13,
        pin19: sel<"IN12">("JP2").IN12,
        pin20: sel<"IN11">("JP2").IN11,
      }}
    />

    <jumper
      name="JP2"
      cadModel={null}
      footprint="pinrow10_p2.54_id1.016_od1.626_nosquareplating_nopinlabels"
      schX={2}
      schPortArrangement={{
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
          ],
        },
      }}
      pcbX={7.62}
      pcbRotation={270}
      pinLabels={{
        pin1: "IN11",
        pin2: "IN12",
        pin3: "IN13",
        pin4: "IN14",
        pin5: "IN15",
        pin6: "IN16",
        pin7: "IN17",
        pin8: "IN18",
        pin9: "IN19",
        pin10: "IN20",
      }}
    />
  </board>
)
