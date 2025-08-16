import { sel } from "tscircuit"

export default () => (
  <board width="20.83mm" height="20.83mm">
    <chip
      name="U1"
      cadModel={null}
      footprint="soic8_pw0.61_pl3.353_w9.5"
      pcbX="-5.335mm"
      pcbY="5.333mm"
      pcbRotation={270}
      schY={2}
      schX={-2}
      connections={{
        pin1: sel.JP1.pin1,
        pin2: sel.JP1.pin2,
        pin3: sel.JP1.pin3,
        pin4: sel.JP1.pin4,
        pin5: sel.JP2.pin4,
        pin6: sel.JP2.pin3,
        pin7: sel.JP2.pin2,
        pin8: sel.JP2.pin1,
      }}
    />
    <jumper
      name="JP1"
      cadModel={null}
      footprint="pinrow4_id1.016_od1.88_nopinlabels"
      schY={2}
      schX={-3.5}
      pcbX="-9.145mm"
      pcbY="5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />
    <jumper
      name="JP2"
      cadModel={null}
      footprint="pinrow4_nosquareplating_id1.016_od1.88_nopinlabels"
      schY={2}
      schX={-0.5}
      pcbX="-1.525mm"
      pcbY="5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />

    <chip
      name="U3"
      cadModel={null}
      footprint="soic8_pw0.61_pl3.353_w9.5"
      pcbX="-5.335mm"
      pcbY="-5.333mm"
      pcbRotation={270}
      schY={-2}
      schX={-2}
      connections={{
        pin1: sel.JP5.pin1,
        pin2: sel.JP5.pin2,
        pin3: sel.JP5.pin3,
        pin4: sel.JP5.pin4,
        pin5: sel.JP6.pin4,
        pin6: sel.JP6.pin3,
        pin7: sel.JP6.pin2,
        pin8: sel.JP6.pin1,
      }}
    />
    <jumper
      name="JP5"
      cadModel={null}
      footprint="pinrow4_id1.016_od1.88_nopinlabels"
      schY={-2}
      schX={-3.5}
      pcbX="-9.145mm"
      pcbY="-5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />
    <jumper
      name="JP6"
      cadModel={null}
      footprint="pinrow4_nosquareplating_id1.016_od1.88_nopinlabels"
      schY={-2}
      schX={-0.5}
      pcbX="-1.525mm"
      pcbY="-5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />

    <chip
      name="U2"
      cadModel={null}
      footprint="soic8_pw0.61_pl3.353_w9.5"
      pcbX="5.335mm"
      pcbY="5.333mm"
      pcbRotation={270}
      schY={2}
      schX={3}
      connections={{
        pin1: sel.JP3.pin1,
        pin2: sel.JP3.pin2,
        pin3: sel.JP3.pin3,
        pin4: sel.JP3.pin4,
        pin5: sel.JP4.pin4,
        pin6: sel.JP4.pin3,
        pin7: sel.JP4.pin2,
        pin8: sel.JP4.pin1,
      }}
    />
    <jumper
      name="JP3"
      cadModel={null}
      footprint="pinrow4_id1.016_od1.88_nopinlabels"
      schY={2}
      schX={1.5}
      pcbX="1.525mm"
      pcbY="5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />
    <jumper
      name="JP4"
      cadModel={null}
      footprint="pinrow4_nosquareplating_id1.016_od1.88_nopinlabels"
      schY={2}
      schX={4.5}
      pcbX="9.145mm"
      pcbY="5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />

    <chip
      name="U4"
      cadModel={null}
      footprint="soic8_pw0.61_pl3.353_w9.5"
      pcbX="5.335mm"
      pcbY="-5.333mm"
      pcbRotation={270}
      schY={-2}
      schX={3}
      connections={{
        pin1: sel.JP7.pin1,
        pin2: sel.JP7.pin2,
        pin3: sel.JP7.pin3,
        pin4: sel.JP7.pin4,
        pin5: sel.JP8.pin4,
        pin6: sel.JP8.pin3,
        pin7: sel.JP8.pin2,
        pin8: sel.JP8.pin1,
      }}
    />
    <jumper
      name="JP7"
      cadModel={null}
      footprint="pinrow4_id1.016_od1.88_nopinlabels"
      schY={-2}
      schX={1.5}
      pcbX="1.525mm"
      pcbY="-5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />
    <jumper
      name="JP8"
      cadModel={null}
      footprint="pinrow4_nosquareplating_id1.016_od1.88_nopinlabels"
      schY={-2}
      schX={4.5}
      pcbX="9.145mm"
      pcbY="-5.333mm"
      pcbRotation={270}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
    />

    <schematictext
      text="Four SOIC8 to DIP adapters on one snappable board."
      anchor="center"
      fontSize={0.2}
      schY={4}
      schX={0.5}
      color="brown"
    />
    <silkscreentext text="SOIC8" pcbX={-5.5} pcbY={5} layer={"bottom"} />
    <silkscreentext text="to" pcbX={-5.5} pcbY={4} layer={"bottom"} />
    <silkscreentext text="DIP8" pcbX={-5.5} pcbY={3} layer={"bottom"} />
    <silkscreentext text="SOIC8" pcbX={-5.5} pcbY={-6} layer={"bottom"} />
    <silkscreentext text="to" pcbX={-5.5} pcbY={-7} layer={"bottom"} />
    <silkscreentext text="DIP8" pcbX={-5.5} pcbY={-8} layer={"bottom"} />

    <silkscreentext text="SOIC8" pcbX={5.5} pcbY={5} layer={"bottom"} />
    <silkscreentext text="to" pcbX={5.5} pcbY={4} layer={"bottom"} />
    <silkscreentext text="DIP8" pcbX={5.5} pcbY={3} layer={"bottom"} />
    <silkscreentext text="SOIC8" pcbX={5.5} pcbY={-6} layer={"bottom"} />
    <silkscreentext text="to" pcbX={5.5} pcbY={-7} layer={"bottom"} />
    <silkscreentext text="DIP8" pcbX={5.5} pcbY={-8} layer={"bottom"} />
  </board>
)
