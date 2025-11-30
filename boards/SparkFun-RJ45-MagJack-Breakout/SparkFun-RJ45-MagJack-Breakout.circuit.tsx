import { sel } from "@tscircuit/core"
import { R_RJ45R08P_C000 } from "./R_RJ45R08P_C000"

export default () => (
  <board width="33.02mm" height="22.86mm">
    <R_RJ45R08P_C000
      name="J1"
      pcbX={0}
      pcbY={4.8}
      pcbRotation={180}
      connections={{
        pin1: sel.net().P1,
        pin2: sel.net().P2,
        pin3: sel.net().P3,
        pin4: sel.net().P4,
        pin5: sel.net().P5,
        pin6: sel.net().P6,
        pin7: sel.net().P7,
        pin8: sel.net().P8,
        pin9: sel.net().Y_pos,
        pin10: sel.net().Y_neg,
        pin11: sel.net().G_pos,
        pin12: sel.net().G_neg,
        pin13: sel.net().SH,
        pin14: sel.net().SH,
      }}
    />
    <jumper
      name="JP1"
      pcbX={0}
      pcbY={-8.8}
      pcbRotation={180}
      pinLabels={{
        pin1: ["SH"],
        pin2: ["G_neg"],
        pin3: ["G_pos"],
        pin4: ["Y_neg"],
        pin5: ["Y_pos"],
        pin6: ["P8"],
        pin7: ["P7"],
        pin8: ["P6"],
        pin9: ["P5"],
        pin10: ["P4"],
        pin11: ["P3"],
        pin12: ["P2"],
        pin13: ["P1"],
      }}
      connections={{
        pin1: sel.net().SH,
        pin2: sel.net().G_neg,
        pin3: sel.net().G_pos,
        pin4: sel.net().Y_neg,
        pin5: sel.net().Y_pos,
        pin6: sel.net().P8,
        pin7: sel.net().P7,
        pin8: sel.net().P6,
        pin9: sel.net().P5,
        pin10: sel.net().P4,
        pin11: sel.net().P3,
        pin12: sel.net().P2,
        pin13: sel.net().P1,
      }}
      schX={-5}
      footprint="pinrow13_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_id1.016_od1.88_p2.54"
    />
    <hole diameter={3.302} pcbX={-14.35} pcbY={9.25} />
    <hole diameter={3.302} pcbX={14.35} pcbY={9.25} />
  </board>
)
