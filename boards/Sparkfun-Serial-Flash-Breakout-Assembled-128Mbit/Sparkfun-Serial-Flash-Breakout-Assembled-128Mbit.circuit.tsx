import manualEdits from "./manual-edits.json"

import { sel } from "tscircuit"
import { W25Q128JVPIQ } from "./W25Q128JVPIQ"

const jumperPinLabels = {
  pin1: ["V3_3"],
  pin2: ["N_CS"],
  pin3: ["CLK"],
  pin4: ["DI"],
  pin5: ["DO"],
  pin6: ["N_WP"],
  pin7: ["N_HOLD"],
  pin8: ["GND"],
}
export default () => (
  <board width="20.7mm" height="12.70mm" manualEdits={manualEdits}>
    {/* X: 10.16 6.35 */}
    <W25Q128JVPIQ
      name="U4"
      pcbRotation={-90}
      connections={{
        pin1: sel.net.N_CS,
        pin6: sel.net().CLK,
        pin5: sel.net().DI,
        pin2: sel.net().DO,
        pin3: sel.net().N_WP,
        pin7: sel.net().N_HOLD,
      }}
    />
    <capacitor
      capacitance="1000pF"
      footprint="0603"
      name="C29"
      pcbRotation={-90}
      schRotation={-90}
      pcbX={6.35}
      connections={{ pin1: sel.net.V3_3, pin2: sel.net.GND }}
    />
    <jumper
      pinLabels={jumperPinLabels}
      schDirection={"left"}
      schWidth={0.6}
      pcbX={-0.3}
      name="JP1"
      footprint="pinrow8_od1.88_id1.016_nosquareplating_pinlabeltextaligncenter_pinlabelorthogonal_backsidelabel"
      pcbRotation={180}
      cadModel={null}
      pcbY={-5.08}
      connections={{
        pin2: sel.net.N_CS,
        pin3: sel.net().CLK,
        pin4: sel.net().DI,
        pin5: sel.net().DO,
        pin6: sel.net().N_WP,
        pin7: sel.net().N_HOLD,
      }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={-1.5}
      schY={1}
      connectsTo={sel.U4.V3_3}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-1.5}
      schY={-1}
      connectsTo={sel.U4.GND}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      schX={3.5}
      schY={1}
      connectsTo={sel.JP1.V3_3}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={3.5}
      schY={-1}
      connectsTo={sel.JP1.GND}
    />
  </board>
)
