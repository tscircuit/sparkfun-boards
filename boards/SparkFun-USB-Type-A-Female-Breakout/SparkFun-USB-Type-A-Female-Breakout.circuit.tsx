import { sel } from "tscircuit"
import { USB_SMT_04F_S1_B1_R11 } from "./USB_SMT_04F_S1_B1_R11"

const JP1PinLabels = {
  pin1: ["VCC"],
  pin2: ["D_N"],
  pin3: ["D_P"],
  pin4: ["GND"],
}
export default () => (
  <board width="20.32mm" height="25.40mm">
    <USB_SMT_04F_S1_B1_R11
      name="U1"
      pcbX={1.672}
      pcbRotation={-90}
      connections={{
        pin3: sel.net().D_P,
        pin1: sel.net().VCC,
        pin2: sel.net().D_N,
      }}
    />
    <resistor
      connections={{ pin2: [sel.U1.pin5, sel.U1.pin6] }}
      schY={-2.3}
      schX={0.1}
      pcbRotation={180}
      pcbX={2.54}
      pcbY={-8.89}
      name="R1"
      resistance="0"
      footprint="0603"
      schRotation={90}
    />
    <jumper
      cadModel={null}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().D_N,
        pin3: sel.net().D_P,
      }}
      schX={5}
      pinLabels={JP1PinLabels}
      name="JP1"
      footprint="pinrow4_id1.016mm_od1.88mm_p2.62mm_pinlabeltextalignleft_pinlabelverticallyinverted_pinlabelorthogonal_nosquareplating_doublesidedpinlabel"
      schDirection="left"
      pcbRotation={-90}
      pcbX={8.89}
    />
    <hole diameter={3.302} pcbX={7.62} pcbY={10.16} />
    <hole diameter={3.302} pcbX={-7.62} pcbY={10.16} />
    <hole diameter={3.302} pcbX={-7.62} pcbY={-10.16} />
    <hole diameter={3.302} pcbX={7.62} pcbY={-10.16} />
    <netlabel
      net="GND"
      anchorSide="top"
      schY={-3.2}
      schX={0.1}
      connectsTo={sel.R1.pin1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schY={-0.7}
      schX={1.3}
      connectsTo={sel.U1.pin4}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schY={-0.7}
      schX={3.5}
      connectsTo={sel.JP1.pin4}
    />
    <silkscreentext
      text="USB Type A Female"
      fontSize={1.5}
      pcbRotation={-90}
      pcbX={-8}
      layer="bottom"
    />
    <silkscreentext
      text="Breakout"
      fontSize={1.5}
      pcbRotation={-90}
      pcbX={-6}
      layer="bottom"
    />
    <silkscreentext
      text="SparkFun.com"
      fontSize={3}
      pcbRotation={-90}
      layer="bottom"
    />
  </board>
)
