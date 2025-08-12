import manualEdits from "./manual-edits.json"
import { ISL29125IROZ_T7 } from "./ISL29125IROZ_T7"
import { sel } from "tscircuit"

const jumperPinLabels = {
  pin5: ["N_INT"],
  pin4: ["SCL"],
  pin3: ["SDA"],
  pin2: ["V3_3"],
  pin1: ["GND"],
}
export default () => (
  // X 8.89 Y 8.255
  <board width="17.78mm" height="16.51mm" manualEdits={manualEdits}>
    <ISL29125IROZ_T7
      name="U1"
      pcbY={0.665}
      pcbRotation={-90}
      connections={{
        pin1: [sel.C1.pin2, sel.C2.pin2, sel.R1.pin1],
        pin4: sel.R2.pin1,
        pin6: sel.R3.pin1,
        pin5: sel.R4.pin1,
      }}
    />
    <capacitor
      name="C1"
      pcbX={-5.08}
      capacitance="0.1uF"
      footprint="cap0603"
      schRotation={90}
    />
    <capacitor
      name="C2"
      pcbX={-5.08}
      pcbY={1.935}
      capacitance="1uF"
      footprint="cap0603"
      schRotation={90}
    />
    <resistor
      name="R1"
      pcbX={-5.08}
      pcbY={-1.875}
      resistance="100"
      footprint="0603"
      schRotation={90}
    />
    <resistor
      name="R2"
      resistance="10k"
      pcbX={5.08}
      pcbY={-1.875}
      footprint="0603"
      schRotation={90}
    />
    <resistor
      name="R3"
      resistance="10k"
      pcbX={5.08}
      footprint="0603"
      schRotation={90}
    />
    <resistor
      name="R4"
      resistance="10k"
      pcbX={5.08}
      pcbY={1.935}
      footprint="0603"
      schRotation={90}
    />
    <jumper
      schWidth={0.6}
      pinLabels={jumperPinLabels}
      name="JP1"
      manufacturerPartNumber="M05PTH"
      footprint="pinrow5_id1.016_od1.88_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_doublesidedpinlabel"
      pcbY={-6.955}
    />
    <solderjumper
      name="JP2"
      pcbX={8.255}
      pcbY={-1.875}
      footprint="solderjumper3_bridged123_ph1.27_pw0.635_p0.9"
      bridgedPins={[["1", "2", "3"]]}
      pinCount={3}
      layer="bottom"
      schRotation={180}
      connections={{ pin1: sel.R3.pin2, pin3: sel.R2.pin2 }}
    />
    <schematictext
      text="I2C Address:"
      anchor="left"
      fontSize={0.2}
      schX={0}
      schY={-1.5}
      color="gray"
    />
    <schematictext
      text="7bit: 0x44"
      anchor="left"
      fontSize={0.2}
      schX={0}
      schY={-1.7}
      color="gray"
    />
    <schematictext
      text="Read: 0x89"
      anchor="left"
      fontSize={0.2}
      schX={0}
      schY={-1.9}
      color="gray"
    />
    <schematictext
      text="Write: 0x88"
      anchor="left"
      fontSize={0.2}
      schX={0}
      schY={-2.1}
      color="gray"
    />
    <schematictext
      text="SOLDERJUMPER_2WAYS"
      anchor="left"
      fontSize={0.15}
      schX={1.7}
      schRotation={-90}
      schY={0.2}
      color="gray"
    />
    <silkscreentext text="ISL29125" pcbX={-8} pcbRotation={90} />
    <silkscreentext text="ISL29125" pcbY={1} fontSize={1.2} layer="bottom" />
    <silkscreentext text="RGB" fontSize={1.2} layer="bottom" />
    <silkscreentext text="Sensor" pcbY={-1} fontSize={1.2} layer="bottom" />

    <hole diameter={3.302} pcbX={-6.35} pcbY={5.745} />
    <hole diameter={3.302} pcbX={6.35} pcbY={5.745} />
    <netlabel
      schX={-1.4}
      schY={-0.7}
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin3}
    />
    <netlabel
      schX={-3.5}
      schY={-1.5}
      net="GND"
      anchorSide="top"
      connectsTo={[sel.C1.pin1, sel.C2.pin1]}
    />
    <netlabel
      schX={-5.5}
      schY={-0.7}
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP1.pin1}
    />
    <netlabel
      schX={-5.5}
      schY={1}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      schX={-1.6}
      schY={1.9}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.R1.pin2}
    />
    <netlabel
      schX={1.4}
      schY={3}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP2.pin2}
    />
    <netlabel
      schX={3.1}
      schY={2.1}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.R4.pin2}
    />
    <netlabel
      schX={-5.3}
      schY={0.5}
      net="N_INT"
      anchorSide="left"
      connectsTo={sel.JP1.pin5}
    />
    <netlabel
      schX={-5.3}
      schY={0.3}
      net="SCL"
      anchorSide="left"
      connectsTo={sel.JP1.pin4}
    />
    <netlabel
      schX={-5.3}
      schY={0.1}
      net="SDA"
      anchorSide="left"
      connectsTo={sel.JP1.pin3}
    />
    <netlabel
      schX={3.5}
      schY={0.2}
      net="SDA"
      anchorSide="left"
      connectsTo={[sel.U1.pin4]}
    />
    <netlabel
      schX={3.5}
      schY={0}
      net="SCL"
      anchorSide="left"
      connectsTo={[sel.U1.pin6]}
    />
    <netlabel
      schX={3.5}
      schY={-0.2}
      net="N_INT"
      anchorSide="left"
      connectsTo={[sel.U1.pin5]}
    />
  </board>
)
