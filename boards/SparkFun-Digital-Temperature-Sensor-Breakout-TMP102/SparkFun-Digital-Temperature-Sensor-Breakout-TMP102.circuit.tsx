import manualEdits from "./manual-edits.json"
import { TMP102AIDRLR } from "./TMP102AIDRLR"
import { sel } from "tscircuit"

const jumperPinLabels = {
  pin1: ["GND"],
  pin2: ["VCC"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["ALERT"],
  pin6: ["ADD0"],
}

export default () => (
  <board width="15.24mm" height="15.24mm" manualEdits={manualEdits}>
    {/* X/Y 7.62 */}
    <TMP102AIDRLR
      name="U1"
      pcbY={1.27}
      connections={{ pin6: sel.R2.pin1, pin1: sel.R3.pin1, pin2: sel.C1.pin2 }}
    />
    <schematictext
      text="VCC: 1.4V to 3.6V"
      fontSize={0.25}
      color="gray"
      schX={-1.4}
      schY={3.5}
    />
    <schematictext
      text="JUMPER-PAD-3NC_BY_TRACE"
      schRotation={-90}
      fontSize={0.15}
      color="gray"
      schX={2.7}
      schY={0.8}
    />
    <schematictext
      text="I2C"
      fontSize={0.15}
      color="gray"
      schX={4}
      schY={2.5}
    />
    <schematictext
      text="pull-up"
      fontSize={0.15}
      color="gray"
      schX={4}
      schY={2.3}
    />
    <schematictext
      text="Default address : GND - 0x48"
      fontSize={0.15}
      color="gray"
      schX={6}
      schY={-1.5}
    />
    <schematictext
      text="The address can be changed using an external"
      fontSize={0.15}
      color="gray"
      schX={6.5}
      schY={-2}
    />
    <schematictext
      text="jumper between ADD0 and the following pins:"
      fontSize={0.15}
      color="gray"
      schX={6.5}
      schY={-2.2}
    />
    <schematictext
      text="VCC - 0x49"
      fontSize={0.15}
      color="gray"
      schX={5.4}
      schY={-2.4}
    />
    <schematictext
      text="SDA - 0x4A"
      fontSize={0.15}
      color="gray"
      schX={5.4}
      schY={-2.6}
    />
    <schematictext
      text="SCL - 0x4B"
      fontSize={0.15}
      color="gray"
      schX={5.4}
      schY={-2.8}
    />
    <schematictext
      text="ADD0"
      fontSize={0.15}
      color="gray"
      schX={3.8}
      schY={-2.8}
    />
    <schematictext
      text="pull-down"
      fontSize={0.15}
      color="gray"
      schX={3.8}
      schY={-3}
    />
    <silkscreentext text="TMP102" fontSize={3} pcbY={4} />

    <hole diameter={3.048} pcbX={-5.08} pcbY={5.08} />
    <hole diameter={3.048} pcbX={5.08} pcbY={5.08} />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="cap0603"
      pcbRotation={-90}
      pcbX={-5.08}
      pcbY={-2.54}
      schRotation={-90}
    />
    <resistor
      name="R1"
      resistance="10k"
      footprint="cap0603"
      pcbRotation={90}
      pcbX={2.54}
      pcbY={-2.54}
      schRotation={90}
      connections={{ pin2: sel.net().VCC, pin1: sel.U1.pin3 }}
    />
    <resistor
      name="R2"
      resistance="4.7k"
      footprint="cap0603"
      pcbRotation={90}
      pcbX={-2.54}
      pcbY={-2.54}
      schRotation={90}
    />
    <resistor
      name="R3"
      resistance="4.7k"
      footprint="cap0603"
      pcbRotation={90}
      pcbX={0}
      pcbY={-2.54}
      schRotation={90}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="cap0603"
      pcbRotation={-90}
      pcbX={5.08}
      pcbY={-2.54}
      connections={{ pin2: sel.U1.pin4, pin1: sel.JP3.pin1 }}
      schRotation={90}
    />
    <jumper
      name="JP1"
      connections={{
        pin1: sel.net().GND,
        pin2: sel.net().VCC,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
        pin5: sel.net().ALERT,
        pin6: sel.net().ADD0,
      }}
      schWidth={0.7}
      schDirection="left"
      pinLabels={jumperPinLabels}
      footprint="pinrow6_id1.016_od1.88_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_doublesidedpinlabel"
      manufacturerPartNumber="M06SIP"
      pcbY={-6.35}
    />
    <solderjumper
      name="JP2"
      pcbX={-4.267}
      footprint="solderjumper3_bridged123_ph1.27_pw0.635_p0.9"
      bridgedPins={[["1", "2", "3"]]}
      pinCount={3}
      layer="bottom"
      schRotation={180}
      connections={{
        pin1: sel.R3.pin2,
        pin2: sel.net().VCC,
        pin3: sel.R2.pin2,
      }}
    />
    <solderjumper
      name="JP3"
      pcbX={0.508}
      pcbY={4.318}
      footprint="solderjumper2_bridged12_ph1.27_pw0.635_p0.9"
      bridgedPins={[["1", "2"]]}
      pinCount={2}
      layer="bottom"
      schRotation={-90}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-2}
      schY={1}
      connectsTo={[sel.C1.pin1, sel.U1.pin5]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-2}
      schY={-1.2}
      connectsTo={[sel.C1.pin2]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={2.6}
      schY={-3.4}
      connectsTo={[sel.JP3.pin2]}
    />
    <netlabel
      net="ADD0"
      anchorSide="left"
      schX={3.5}
      schY={-0.5}
      connectsTo={[sel.U1.pin4]}
    />
    <netlabel
      net="ALERT"
      anchorSide="left"
      schX={3.5}
      schY={-0.3}
      connectsTo={[sel.U1.pin3]}
    />
    <netlabel
      net="SCL"
      anchorSide="left"
      schX={3.5}
      schY={0.3}
      connectsTo={[sel.U1.pin1]}
    />
    <netlabel
      net="SDA"
      anchorSide="left"
      schX={3.5}
      schY={0.5}
      connectsTo={[sel.U1.pin6]}
    />
  </board>
)
