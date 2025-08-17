import { sel } from "tscircuit"

export default () => (
  <board width="20.32mm" height="20.82mm">
    <chip
      name="U1"
      footprint={"ssop16_pw0.35_pl2.2_w8.6_p0.635"}
      pcbX={0.508}
      pcbY={-5.33}
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
        pin16: sel.JP2.pin1,
        pin15: sel.JP2.pin2,
        pin14: sel.JP2.pin3,
        pin13: sel.JP2.pin4,
        pin12: sel.JP2.pin5,
        pin11: sel.JP2.pin6,
        pin10: sel.JP2.pin7,
        pin9: sel.JP2.pin8,
      }}
    />
    <jumper
      name="JP1"
      footprint={"pinrow8_nopinlabels_id1.016_od1.88_p2.54"}
      schY={4}
      schX={-1.5}
      pcbY={-9.14}
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
          ],
        },
      }}
    />
    <jumper
      name="JP2"
      footprint={"pinrow8_nopinlabels_id1.016_od1.88_p2.54_nosquareplating"}
      schY={4}
      schX={1.5}
      pcbY={-1.52}
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
    />

    <chip
      name="U2"
      footprint={"ssop16_pw0.35_pl2.2_w8.6_p0.635"}
      pcbX={0.508}
      pcbY={5.33}
      schY={0}
      connections={{
        pin1: sel.JP3.pin1,
        pin2: sel.JP3.pin2,
        pin3: sel.JP3.pin3,
        pin4: sel.JP3.pin4,
        pin5: sel.JP3.pin5,
        pin6: sel.JP3.pin6,
        pin7: sel.JP3.pin7,
        pin8: sel.JP3.pin8,
        pin16: sel.JP4.pin1,
        pin15: sel.JP4.pin2,
        pin14: sel.JP4.pin3,
        pin13: sel.JP4.pin4,
        pin12: sel.JP4.pin5,
        pin11: sel.JP4.pin6,
        pin10: sel.JP4.pin7,
        pin9: sel.JP4.pin8,
      }}
    />
    <jumper
      name="JP3"
      footprint={"pinrow8_nopinlabels_id1.016_od1.88_p2.54"}
      schY={0}
      schX={-1.5}
      pcbY={1.52}
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
          ],
        },
      }}
    />
    <jumper
      name="JP4"
      footprint={"pinrow8_nopinlabels_id1.016_od1.88_p2.54_nosquareplating"}
      schY={0}
      schX={1.5}
      pcbY={9.14}
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
    />
    <silkscreentext
      text="SSOP16"
      pcbX={6}
      pcbY={5.5}
      pcbRotation={270}
      layer={"bottom"}
    />
    <silkscreentext
      text="to"
      pcbX={7}
      pcbY={5.5}
      pcbRotation={270}
      layer={"bottom"}
    />
    <silkscreentext
      text="DIP16"
      pcbX={8}
      pcbY={5.5}
      pcbRotation={270}
      layer={"bottom"}
    />
    <silkscreentext
      text="SSOP16"
      pcbX={6}
      pcbY={-5.5}
      pcbRotation={270}
      layer={"bottom"}
    />
    <silkscreentext
      text="to"
      pcbX={7}
      pcbY={-5.5}
      pcbRotation={270}
      layer={"bottom"}
    />
    <silkscreentext
      text="DIP16"
      pcbX={8}
      pcbY={-5.5}
      pcbRotation={270}
      layer={"bottom"}
    />
    <silkscreentext text="SSOP16" pcbX={6} pcbY={5.5} pcbRotation={270} />
    <silkscreentext text="to" pcbX={7} pcbY={5.5} pcbRotation={270} />
    <silkscreentext text="DIP16" pcbX={8} pcbY={5.5} pcbRotation={270} />
    <silkscreentext text="SSOP16" pcbX={6} pcbY={-5.5} pcbRotation={270} />
    <silkscreentext text="to" pcbX={7} pcbY={-5.5} pcbRotation={270} />
    <silkscreentext text="DIP16" pcbX={8} pcbY={-5.5} pcbRotation={270} />

    <silkscreentext text="1" pcbX="-9" pcbY={-7.5} />
    <silkscreentext text="1" pcbX="-9" pcbY={-7.5} layer={"bottom"} />
    <silkscreentext text="1" pcbX="-9" pcbY={3} />
    <silkscreentext text="1" pcbX="-9" pcbY={3} layer={"bottom"} />

    <silkscreentext text="9" pcbX="9" pcbY={-3} />
    <silkscreentext text="9" pcbX="9" pcbY={-3} layer={"bottom"} />

    <silkscreentext text="9" pcbX="9" pcbY={7.5} />
    <silkscreentext text="9" pcbX="9" pcbY={7.5} layer={"bottom"} />
  </board>
)
