import { sel } from "tscircuit"
export default () => (
  <board width="15.24mm" height="10.16mm">
    <chip
      name="U1"
      footprint="ssop8_w8.89_p0.635_pw0.35_pl2.2"
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
      name="JP2"
      footprint="pinrow4_nopinlabels"
      schX={-1.9}
      pcbX={-6.08}
      pcbRotation={90}
      cadModel={null}
      manufacturerPartNumber="M04PTH"
    />
    <jumper
      name="JP1"
      footprint="pinrow4_nopinlabels"
      schX={1.9}
      pcbX={6.08}
      schDirection="left"
      pcbRotation={90}
      manufacturerPartNumber="M04PTH"
      cadModel={null}
    />
    <silkscreentext text="1" pcbX={-4.8} pcbY={4} />
    <silkscreentext text="8" pcbX={4.8} pcbY={4} />
    <silkscreentext text="SSOP8" pcbY={4.5} />
    <silkscreentext text="Adapter" pcbY={3.5} />
  </board>
)
