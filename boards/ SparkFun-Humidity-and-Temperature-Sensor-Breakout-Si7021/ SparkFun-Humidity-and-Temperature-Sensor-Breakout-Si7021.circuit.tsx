import manualEdits from "./manual-edits.json"
import { SI7021_A20_IM1R } from "./SI7021_A20_IM1R"
import { sel } from "tscircuit"

const jumperPinLabels = {
  pin1: ["GND"],
  pin2: ["V3_3"],
  pin3: ["SDA"],
  pin4: ["SCL"],
}
export default () => (
  <board width="15.24mm" height="15.24mm" manualEdits={manualEdits}>
    <SI7021_A20_IM1R
      name="U1"
      pcbRotation={180}
      pcbX={2.5}
      connections={{ pin1: sel.R1.pin1, pin6: sel.R2.pin1 }}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="cap0603"
      schRotation={-90}
      pcbRotation={90}
    />
    <jumper
      schWidth={0.6}
      pinLabels={jumperPinLabels}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      name="JP1"
      manufacturerPartNumber="M04PTH"
      footprint="pinrow4_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_doublesidedpinlabel"
      schDirection="left"
      pcbRotation={-90}
      pcbX={-6.5}
      cadModel={null}
    />
    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0603"
      schRotation={90}
      pcbRotation={-90}
      pcbX={-2.5}
      pcbY={3.8}
    />
    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0603"
      schRotation={90}
      pcbRotation={90}
      pcbX={-2.5}
      pcbY={-3.8}
    />
    <hole diameter={3.5} pcbX={5} pcbY={5} />
    <hole diameter={3.5} pcbX={5} pcbY={-5} />
    <solderjumper
      name="JP2"
      footprint="solderjumper3_p0.8_pw0.65_ph1.28"
      schRotation={180}
      pcbRotation={90}
      pcbX={-2.5}
      pcbY={-0.8}
      cadModel={null}
      connections={{ pin3: sel.R1.pin2, pin1: sel.R2.pin2 }}
    />
    <schematictext
      text="7-bit I2C Address is 0x40"
      color="gray"
      fontSize={0.25}
      schY={-4}
      schX={-0.7}
    />
    <schematictext
      text="I2C write is 0x80"
      color="gray"
      fontSize={0.25}
      schY={-4.4}
      schX={-1.15}
    />
    <schematictext
      text="I2C read is 0x81"
      color="gray"
      fontSize={0.25}
      schY={-4.8}
      schX={-1.15}
    />
    <schematictext
      text="Clear both sides of JP2"
      color="gray"
      fontSize={0.25}
      schY={2}
      schX={4.6}
    />
    <schematictext
      text="to disable I2C pullup resistors"
      color="gray"
      fontSize={0.25}
      schY={1.7}
      schX={5}
    />
    <schematictext
      text="Input Voltage Range (VDD): 1.9V to 3.6V"
      color="gray"
      fontSize={0.25}
      schY={2}
      schX={-7}
    />
    <schematictext
      text="I2C Input Voltage Max: VDD"
      color="gray"
      fontSize={0.25}
      schY={1.7}
      schX={-7}
    />

    <silkscreentext
      text="Sparkfun"
      layer="bottom"
      fontSize={2.5}
      pcbRotation={90}
    />
    <silkscreentext text="Si7021" fontSize={2} pcbY={6.8} />
    <silkscreentext text="Humidity &" fontSize={1} pcbY={-5.9} pcbX={-4.5} />
    <silkscreentext text="TEMP Sensor" fontSize={1} pcbY={-6.9} pcbX={-4.3} />
    <netlabel
      net="V3_3"
      schX={2.3}
      schY={2.3}
      anchorSide="bottom"
      connectsTo={sel.JP2.pin2}
    />
    <netlabel
      net="V3_3"
      schX={-2.3}
      schY={0.4}
      anchorSide="bottom"
      connectsTo={[sel.C2.pin1, sel.U1.pin5]}
    />
    <netlabel
      net="V3_3"
      schX={-7.7}
      schY={0.4}
      anchorSide="bottom"
      connectsTo={[sel.C2.pin1, sel.JP1.pin2]}
    />
    <netlabel
      net="SDA"
      schX={3.6}
      schY={0.1}
      anchorSide="left"
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      net="SCL"
      schX={3.6}
      schY={-0.1}
      anchorSide="left"
      connectsTo={sel.U1.pin6}
    />
    <netlabel
      net="SDA"
      schX={-6.7}
      schY={0}
      anchorSide="right"
      connectsTo={sel.JP1.pin3}
    />
    <netlabel
      net="SCL"
      schX={-6.7}
      schY={0.2}
      anchorSide="right"
      connectsTo={sel.JP1.pin4}
    />
    <netlabel
      net="GND"
      schX={-2.3}
      schY={-1.6}
      anchorSide="top"
      connectsTo={sel.C2.pin2}
    />
    <netlabel
      net="GND"
      schX={-1.3}
      schY={-1.2}
      anchorSide="top"
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      net="GND"
      schX={-7}
      schY={-0.7}
      anchorSide="top"
      connectsTo={sel.JP1.pin1}
    />
  </board>
)
