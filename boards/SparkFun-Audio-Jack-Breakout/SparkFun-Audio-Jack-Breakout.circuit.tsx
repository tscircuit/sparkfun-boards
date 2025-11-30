import { sel } from "@tscircuit/core"
import { PJ_307C } from "./PJ_307C"

export default () => (
  <board width="21.59mm" height="15.24mm">
    <PJ_307C
      name="U1"
      pcbX={-6}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().GND,
        pin2: sel.net().RING,
        pin3: sel.net().RING_SHUNT,
        pin4: sel.net().TIP_SHUNT,
        pin5: sel.net().TIP,
      }}
    />
    <jumper
      name="JP1"
      pcbX={8.255}
      pcbY={0}
      pcbRotation={-90}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["RING"],
        pin3: ["RING_SHUNT"],
        pin4: ["TIP_SHUNT"],
        pin5: ["TIP"],
      }}
      connections={{
        pin1: sel.net().GND,
        pin2: sel.net().RING,
        pin3: sel.net().RING_SHUNT,
        pin4: sel.net().TIP_SHUNT,
        pin5: sel.net().TIP,
      }}
      schX={-5}
      footprint="pinrow5_doublesidedpinlabel_pinlabeltextalignleft_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_id1.016_od1.88_p2.54"
    />
  </board>
)
