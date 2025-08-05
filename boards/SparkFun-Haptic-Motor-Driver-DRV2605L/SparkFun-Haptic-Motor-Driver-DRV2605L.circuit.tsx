import manualEdits from "./manual-edits.json"
import { sel } from "tscircuit"
import { DRV2605LDGST } from "./DRV2605LDGST"

const JP1PinLabels = {
  pin1: ["EN"],
  pin2: ["IN"],
  pin3: ["SCL"],
  pin4: ["SDA"],
  pin5: ["VCC"],
  pin6: ["GND"],
}
const JP2PinLabels = {
  pin1: ["O_N"],
  pin2: ["O_P"],
}

export default () => (
  <board width="20.32mm" height="20.32mm" manualEdits={manualEdits}>
    <DRV2605LDGST
      schWidth={1.8}
      name="U1"
      pcbX={0.476}
      pcbY={1.587}
      pcbRotation={-90}
      connections={{
        pin3: [sel.JP1.pin4, sel.R2.pin1],
        pin2: [sel.JP1.pin3, sel.R1.pin1],
        pin4: sel.JP1.pin2,
        pin5: sel.JP1.pin1,
        pin7: sel.JP2.pin1,
        pin9: sel.JP2.pin2,
      }}
    />
    <schematictext
      text="Clear jumper to remove"
      fontSize={0.18}
      schY={3.3}
      schX={-1.6}
      color="gray"
    />
    <schematictext
      text="pull-ups from I2C bus"
      fontSize={0.18}
      schY={3}
      schX={-1.6}
      color="gray"
    />
    <schematictext
      text="JUMPER-PAD-3-NC_BY_PASTE"
      fontSize={0.18}
      schY={2.5}
      schX={-1.6}
      color="gray"
    />
    <schematictext
      text="VCC:2-5.2V"
      fontSize={0.18}
      schY={1}
      schX={2.3}
      color="gray"
    />

    <schematictext
      text="7-Bit I2C Address: 0x5A"
      fontSize={0.18}
      schY={-1.5}
      color="gray"
    />

    <silkscreentext text="DRV2605L" fontSize={2} pcbY={8} />
    <silkscreentext text="DRV2605L" fontSize={2} pcbY={8} layer="bottom" />
    <silkscreentext
      text="Sparkfun"
      fontSize={2.5}
      pcbX={1}
      pcbY={2}
      layer="bottom"
    />
    <silkscreentext text="I2C ADDR" fontSize={1.5} pcbY={-2} layer="bottom" />
    <silkscreentext text="0x5A" fontSize={1.5} pcbY={-3.5} layer="bottom" />

    <silkscreentext
      text="Haptic Driver"
      fontSize={1.2}
      pcbY={6.5}
      layer="bottom"
    />
    <silkscreentext
      text="Haptic Driver"
      fontSize={1.3}
      pcbX={3.5}
      pcbY={-8.5}
    />
    <jumper
      schWidth={0.65}
      pinLabels={JP1PinLabels}
      pcbX={-8.89}
      pcbY={-2.7}
      pcbRotation={90}
      name="JP1"
      cadModel={null}
      footprint="pinrow6_id1.016_od1.88_pinlabeltextalignleft_pinlabelorthogonal_nosquareplating_doublesidedpinlabel"
      manufacturerPartNumber="M06SILK_FEMALE_PTH"
    />
    <jumper
      schWidth={0.65}
      pinLabels={JP2PinLabels}
      schDirection="left"
      pcbX={8.89}
      pcbY={-1.27}
      pcbRotation={-90}
      name="JP2"
      cadModel={null}
      footprint="pinrow2_id1.016_od1.88_pinlabeltextalignleft_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_doublesidedpinlabel"
      manufacturerPartNumber="M02PTH"
    />
    <resistor
      name="R1"
      footprint="0603"
      pcbX={3.651}
      pcbY={-3.493}
      resistance="2.2k"
      pcbRotation={-90}
      schRotation={90}
      connections={{ pin2: sel.JP3.pin1 }}
    />
    <resistor
      name="R2"
      footprint="0603"
      pcbX={-2.222}
      pcbY={-3.493}
      resistance="2.2k"
      pcbRotation={-90}
      schRotation={90}
      connections={{ pin2: sel.JP3.pin3 }}
    />
    <capacitor
      name="C1"
      footprint="0402"
      capacitance="1uF"
      pcbX={2.381}
      pcbY={4.445}
      schRotation={-90}
    />
    <capacitor
      name="C3"
      footprint="0402"
      capacitance="1uF"
      schX={-2}
      schY={-1.6}
      pcbX={-2.222}
      pcbY={4.445}
      schRotation={-90}
      connections={{ pin1: sel.U1.pin1 }}
    />
    <solderjumper
      name="JP3"
      schRotation={180}
      pcbY={-3.334}
      pcbX={-0.019}
      pinCount={3}
      footprint="solderjumper3_p0.813_pw0.635_ph1.27"
      cadModel={null}
    />
    <hole diameter={3.302} pcbX={-7.62} pcbY={7.62} />
    <hole diameter={3.302} pcbX={7.62} pcbY={7.62} />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-6}
      schY={-1}
      connectsTo={sel.JP1.pin6}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-5.5}
      schY={1.2}
      connectsTo={sel.JP1.pin5}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-3.5}
      schY={2.8}
      connectsTo={sel.JP3.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-2}
      schY={-2.5}
      connectsTo={sel.C3.pin2}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={1.4}
      schY={0.8}
      connectsTo={[sel.U1.pin6, sel.U1.pin10]}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={5.4}
      schY={1}
      connectsTo={[sel.C1.pin1]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={5.4}
      schY={-1}
      connectsTo={sel.C1.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={2}
      schY={-1.8}
      connectsTo={sel.U1.pin8}
    />
  </board>
)
