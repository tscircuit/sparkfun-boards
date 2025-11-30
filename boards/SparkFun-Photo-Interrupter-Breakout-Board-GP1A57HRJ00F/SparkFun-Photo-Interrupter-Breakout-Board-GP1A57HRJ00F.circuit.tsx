import { sel } from "@tscircuit/core"
import { GP1A57HRJ00F } from "./GP1A57HRJ00F"

export default () => (
  <board width="20.32mm" height="15.24mm">
    <GP1A57HRJ00F
      name="U1"
      pcbX={0}
      pcbY={-3.81}
      schX={3}
      schY={0}
      connections={{
        pin1: sel.net().V3_3,
        pin2: sel.R1.pin1,
        pin3: sel.net().V3_3,
        pin4: sel.net().SIG,
        pin5: sel.net().GND,
      }}
    />

    <resistor
      name="R1"
      resistance="10k"
      pcbX={0}
      pcbY={1.27}
      footprint={"0603"}
      schX={1}
      schY={2}
      schRotation={90}
      connections={{ pin2: sel.net().GND }}
    />
    <jumper
      name="J1"
      footprint={
        "pinrow3_nosquareplating_doublesidedpinlabel_id1.016_od1.88_p2.54"
      }
      pcbX={0}
      pcbY={5.08}
      pinLabels={{
        pin1: "SIG",
        pin2: "GND",
        pin3: "VCC",
      }}
      connections={{
        pin1: sel.net().SIG,
        pin2: sel.net().GND,
        pin3: sel.net().V3_3,
      }}
      pcbRotation={180}
      schX={-3}
      schY={0}
    />
  </board>
)
