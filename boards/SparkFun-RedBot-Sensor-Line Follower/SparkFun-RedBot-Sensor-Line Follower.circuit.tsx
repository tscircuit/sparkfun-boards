import { sel } from "@tscircuit/core"
import { JP1_FOOTPRINT, U1_FOOTPRINT, R_FOOTPRINT } from "./footprints"

export default () => (
  <board width="7.62mm" height="24.13mm">
    <pinheader
      gender="female"
      footprint={JP1_FOOTPRINT}
      pinCount={3}
      name="JP1"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2, 3],
        },
      }}
      connections={{
        pin3: sel.R2.pin1,
      }}
      pcbY={-0.97}
      pcbRotation={180}
      layer="bottom"
    />
    <silkscreentext
      text="GND"
      fontSize={1}
      pcbY={-3}
      pcbX={2.4}
      pcbRotation={90}
    />
    <silkscreentext
      text="VCC"
      fontSize={1}
      pcbY={-3}
      pcbX={-0.1}
      pcbRotation={90}
    />
    <silkscreentext
      text="OUT"
      fontSize={1}
      pcbY={-3}
      pcbX={-2.6}
      pcbRotation={90}
    />
    <silkscreentext
      text="OUT"
      fontSize={1}
      pcbY={-3}
      pcbX={2.4}
      pcbRotation={90}
      layer="bottom"
    />
    <silkscreentext
      text="VCC"
      fontSize={1}
      pcbY={-3}
      pcbX={-0.1}
      pcbRotation={90}
      layer="bottom"
    />
    <silkscreentext
      text="GND"
      fontSize={1}
      pcbY={-3}
      pcbX={-2.6}
      pcbRotation={90}
      layer="bottom"
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={["JP1.pin1", "U1.pin4", "U1.pin2"]}
      schX={1}
      schY={-1.5}
    />
    <netlabel
      net="V5"
      anchorSide="bottom"
      connectsTo={["JP1.pin2", "R2.pin2", "R1.pin2"]}
      schX={1}
      schY={1.7}
    />
    <resistor
      name="R2"
      resistance="10k"
      schRotation={90}
      schX={2.3}
      schY={1}
      footprint={R_FOOTPRINT}
      pcbX={-1.27}
      pcbY={5.715}
      pcbRotation={270}
    />
    <resistor
      name="R1"
      resistance="10k"
      schRotation={90}
      schX={3.3}
      schY={1}
      footprint={R_FOOTPRINT}
      pcbX={1.27}
      pcbY={5.715}
      pcbRotation={270}
    />

    <chip
      name="U1"
      manufacturerPartNumber="QRE1113"
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: [3, 1],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [4, 2],
        },
      }}
      pcbRotation={180}
      schPinStyle={{
        pin1: {
          leftMargin: 0.4,
        },
        pin2: {
          leftMargin: 0.4,
        },
      }}
      connections={{
        pin1: sel.R1.pin1,
        pin3: sel.R2.pin1,
      }}
      footprint={U1_FOOTPRINT}
      schX={2.6}
      schY={-0.74}
      pcbY={9.525}
    />
    <hole diameter="3.302mm" pcbY={0.635} />
    <silkscreentext text="QRE1113" fontSize={1} pcbY={-8} />
    <silkscreentext text="Analog" fontSize={1} pcbY={-9} />
    <silkscreentext text="line" fontSize={1} pcbY={-10} />
    <silkscreentext text="sensor" fontSize={1} pcbY={-11} />
  </board>
)
