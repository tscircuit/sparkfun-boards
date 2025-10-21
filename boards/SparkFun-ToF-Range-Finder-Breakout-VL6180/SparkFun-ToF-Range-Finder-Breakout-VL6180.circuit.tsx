import { sel } from "tscircuit"
import { VL6180V1NR_1 } from "./VL6180V1NR_1"
import manualEdits from "./manual-edits.json"

const jumperPinLabels = {
  pin1: ["GND"],
  pin2: ["V2_8"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["GPIO0"],
  pin6: ["GPIO1"],
}
export default () => (
  <board width="17.78mm" height="15.24mm" manualEdits={manualEdits}>
    {/* X=8.89 Y=7.62 */}
    <silkscreentext text="VL6180 Time Of Flight" pcbY={7} />
    <silkscreentext text="Range Finder" pcbY={6} />
    <silkscreentext pcbRotation={90} text="PU EN" pcbY={-2} pcbX={8} />
    <silkscreentext
      text="VL6180 TOF"
      pcbRotation={180}
      layer="bottom"
      pcbY={-3}
    />
    <silkscreentext
      text="Range Finder"
      pcbRotation={180}
      layer="bottom"
      pcbY={-2}
    />
    <silkscreentext
      text="sparkfun"
      pcbRotation={180}
      fontSize={3}
      layer="bottom"
      pcbY={6}
    />
    <schematictext
      text="Default Address: 0x29"
      color="gray"
      schY={-2}
      schX={2.2}
      fontSize={0.2}
    />
    <schematictext
      text="NOTE: this part is 1.8v - 2.8v tolerant"
      color="gray"
      schY={-2.6}
      schX={2.87}
      fontSize={0.2}
    />

    <resistor
      resistance="47k"
      footprint="0603"
      name="R1"
      schRotation={90}
      pcbX={-3.81}
      pcbY={-2.286}
      pcbRotation={90}
      connections={{ pin1: sel.U1.pin4 }}
    />
    <resistor
      resistance="2.2k"
      footprint="0603"
      name="R2"
      schRotation={90}
      pcbX={2.794}
      pcbY={-3.302}
      connections={{ pin1: sel.U1.pin5 }}
    />
    <resistor
      resistance="2.2k"
      footprint="0603"
      name="R3"
      schRotation={90}
      pcbX={2.794}
      pcbY={-1.778}
      connections={{ pin1: sel.U1.pin6 }}
    />
    <resistor
      resistance="47k"
      footprint="0603"
      name="R4"
      schRotation={90}
      pcbX={-6.35}
      pcbY={-2.286}
      pcbRotation={90}
      connections={{ pin1: sel.U1.pin1 }}
    />
    <VL6180V1NR_1 name="U1" pcbY={0.762} />
    <solderjumper
      name="JP2"
      footprint="solderjumper3_p0.8_pw0.65_ph1.27"
      pinCount={3}
      schRotation={180}
      pcbX={5.461}
      pcbY={-2.9}
      pcbRotation={90}
      cadModel={null}
      connections={{
        pin1: sel.R2.pin2,
        pin2: sel.net().V2_8,
        pin3: sel.R3.pin2,
      }}
    />
    <hole diameter={3.302} pcbX={-6.35} pcbY={2.54} />
    <hole diameter={3.302} pcbX={6.35} pcbY={2.54} />
    <jumper
      schWidth={0.7}
      name="JP1"
      pinLabels={jumperPinLabels}
      footprint="pinrow6_od1.88_id1.016_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal_doublesidedpinlabel"
      pcbRotation={180}
      pcbY={-6.35}
      cadModel={null}
      connections={{
        pin6: sel.net().GPIO1,
        pin5: sel.net().GPIO0,
        pin4: sel.net().SCL,
        pin3: sel.net().SDA,
      }}
    />
    {/* X=8.89 Y=7.62 */}
    <netlabel
      net="V2_8"
      schX={-6}
      schY={2}
      anchorSide="bottom"
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      net="V2_8"
      schY={2.5}
      schX={-3.4}
      anchorSide="bottom"
      connectsTo={sel.JP2.pin2}
    />
    <netlabel
      net="V2_8"
      schY={2.5}
      schX={-1.1}
      anchorSide="bottom"
      connectsTo={sel.R1.pin2}
    />
    <netlabel
      net="V2_8"
      schY={2.5}
      schX={0.3}
      anchorSide="bottom"
      connectsTo={sel.R4.pin2}
    />
    <netlabel
      net="V2_8"
      schY={2.5}
      schX={3.9}
      anchorSide="bottom"
      connectsTo={[sel.U1.pin10, sel.U1.pin8]}
    />
    <netlabel
      net="V2_8"
      schY={2.5}
      schX={4.6}
      anchorSide="bottom"
      connectsTo={sel.C2.pin2}
    />
    <netlabel
      net="V2_8"
      schY={2.5}
      schX={5.6}
      anchorSide="bottom"
      connectsTo={sel.C1.pin2}
    />
    <netlabel
      net="GND"
      schY={-1.5}
      schX={5.6}
      anchorSide="top"
      connectsTo={sel.C1.pin1}
    />
    <netlabel
      net="GND"
      schY={-1.5}
      schX={4.6}
      anchorSide="top"
      connectsTo={sel.C2.pin1}
    />
    <netlabel
      net="GND"
      schY={-1}
      schX={-6.5}
      anchorSide="top"
      connectsTo={sel.JP1.pin1}
    />
    <netlabel
      net="GND"
      schY={-1.5}
      schX={4}
      anchorSide="top"
      connectsTo={[sel.U1.pin9, sel.U1.pin12]}
    />
    <netlabel
      net="GPIO1"
      schY={0.73}
      schX={0.1}
      anchorSide="right"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      net="GPIO0"
      schY={0.3}
      schX={-1.2}
      anchorSide="right"
      connectsTo={sel.U1.pin4}
    />
    <netlabel
      net="SCL"
      schY={-0.5}
      schX={-4.5}
      anchorSide="right"
      connectsTo={sel.U1.pin5}
    />
    <netlabel
      net="SDA"
      schY={-0.7}
      schX={-4.5}
      anchorSide="right"
      connectsTo={sel.U1.pin6}
    />

    <capacitor
      capacitance="4.7uF"
      footprint="0603"
      name="C1"
      pcbX={1.778}
      pcbY={3.429}
      schRotation={90}
    />
    <capacitor
      capacitance="4.7uF"
      footprint="0603"
      name="C2"
      pcbX={-1.778}
      pcbY={3.429}
      schRotation={90}
      pcbRotation={180}
    />
  </board>
)
