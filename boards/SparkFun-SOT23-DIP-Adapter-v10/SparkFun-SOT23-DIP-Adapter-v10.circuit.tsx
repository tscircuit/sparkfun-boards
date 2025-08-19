import { sel } from "tscircuit"
export default () => (
  <board width="10.16mm" height="7.62mm">
    <chip
      name="U1"
      schWidth={1.3}
      cadModel={null}
      schHeight={1}
      footprint="sot23_6_pw0.55mm_pl1.2mm_w1.4_p1"
      connections={{
        pin1: sel.JP2.pin3,
        pin2: sel.JP2.pin2,
        pin3: sel.JP2.pin1,
        pin4: sel.JP1.pin3,
        pin5: sel.JP1.pin2,
        pin6: sel.JP1.pin1,
      }}
    />
    <jumper
      name="JP1"
      cadModel={null}
      schX={2}
      schDirection="left"
      footprint="pinrow3_id1.016mm_od1.626mm_nosquareplating_nopinlabels"
      pcbX={3.81}
      pcbRotation={-90}
    />
    <jumper
      name="JP2"
      schX={-2}
      cadModel={null}
      footprint="pinrow3_id1.016mm_od1.626mm_nosquareplating_nopinlabels"
      pcbX={-3.81}
      pcbRotation={90}
    />
  </board>
)
