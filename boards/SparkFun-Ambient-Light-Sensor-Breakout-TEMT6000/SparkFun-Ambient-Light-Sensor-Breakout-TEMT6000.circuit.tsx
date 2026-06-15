import { sel } from "tscircuit"
import { TEMT6000X01 } from "./imports/TEMT6000X01"

export default () => (
  <board width="10.16mm" height="10.16mm">
    <TEMT6000X01
      name="U1"
      pcbX={2.4}
      pcbY={-1}
      pcbRotation={-90}
      schX={-4}
      connections={{
        pin3: sel.net().VCC,
      }}
      schPinArrangement={{
        bottomSide: {
          direction: "top-to-bottom",
          pins: ["pin1"],
        },
        topSide: {
          direction: "top-to-bottom",
          pins: ["pin3"],
        },
      }}
    />
    <jumper
      name="JP4"
      footprint="pinrow3"
      pcbX={-3.51}
      pcbRotation={90}
      pinLabels={{
        pin1: "VCC",
        pin2: "GND",
        pin3: "S",
      }}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().GND,
        pin3: sel.R1.pin2,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      schX={2}
    />
    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      connections={{
        pin1: sel.net().GND,
        pin2: sel.U1.pin1,
      }}
      schX={-4}
      schY={-2}
      schRotation={90}
    />
    <silkscreentext text="TEMT6000" pcbX={2.4} pcbY={-4} fontSize={1} />
    <fiducial
      name="FD1"
      padDiameter="1mm"
      soldermaskPullback="1mm"
      pcbX={-2}
      pcbY={-4}
    />
    <fiducial
      name="FD2"
      padDiameter="1mm"
      soldermaskPullback="1mm"
      pcbX={4}
      pcbY={4}
    />
  </board>
)
