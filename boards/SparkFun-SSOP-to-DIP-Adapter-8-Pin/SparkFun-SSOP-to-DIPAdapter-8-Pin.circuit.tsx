import { sel } from "tscircuit"
export default () => (
  <board width="15.24mm" height="10.16mm">
    <chip
      name="U1"
      footprint="ssop8_w6.2_p0.635_pw0.35_pl2.2"
      pcbX={0}
      pcbY={0}
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin5", "pin6", "pin7", "pin8"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      connections={{
        pin1: sel.JP2.pin4,
        pin2: sel.JP2.pin3,
        pin3: sel.JP2.pin2,
        pin4: sel.JP2.pin1,
        pin8: sel.JP1.pin4,
        pin7: sel.JP1.pin3,
        pin6: sel.JP1.pin2,
        pin5: sel.JP1.pin1,
      }}
    />
    <jumper
      doNotPlace
      name="JP2"
      footprint="pinrow4_p2.54_id1.016_od1.8796_nopinlabels"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3", pin4: "4" }}
      schX={-1.9}
      pcbX={-6.35}
      pcbY={0}
      pcbRotation={90}
      cadModel={null}
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      manufacturerPartNumber="M04PTH"
    />
    <jumper
      doNotPlace
      name="JP1"
      footprint="pinrow4_p2.54_id1.016_od1.8796_nopinlabels"
      pinLabels={{ pin1: "1", pin2: "2", pin3: "3", pin4: "4" }}
      schX={1.9}
      pcbX={6.35}
      pcbY={0}
      schDirection="left"
      pcbRotation={90}
      manufacturerPartNumber="M04PTH"
      cadModel={null}
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
    />
    <silkscreentext text="1" pcbX={-4.8} pcbY={4} />
    <silkscreentext text="8" pcbX={4.8} pcbY={4} />
    <silkscreentext text="SSOP8" pcbY={4.5} layer="bottom" />
    <silkscreentext text="Adapter" pcbY={3.5} layer="bottom" />
  </board>
)
