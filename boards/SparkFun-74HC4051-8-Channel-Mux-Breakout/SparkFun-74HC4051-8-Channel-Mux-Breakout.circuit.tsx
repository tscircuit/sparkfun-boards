import manualEdits from "./manual-edits.json"
import { A_74HC4051BQ_115 } from "./A_74HC4051BQ_115"
import { sel } from "tscircuit"

const JP1PinLabels = {
  pin1: "Y7",
  pin2: "Y6",
  pin3: "Y5",
  pin4: "Y4",
  pin5: "Y3",
  pin6: "Y2",
  pin7: "Y1",
  pin8: "Y0",
  pin9: "GND",
  pin10: "VCC",
  pin11: "VEE",
}

const JP2PinLabels = {
  pin1: "N_E",
  pin2: "S2",
  pin3: "S1",
  pin4: "S0",
  pin5: "Z",
  pin6: "GND",
  pin7: "VCC",
  pin8: "VEE",
}

export default () => (
  <board width="12.70mm" height="27.94mm" manualEdits={manualEdits}>
    {/* X = 6.35 Y = 13.97 */}
    <A_74HC4051BQ_115 name="U1" pcbRotation={-90} />
    <capacitor
      name="C1"
      footprint="0603"
      capacitance="0.1uF"
      pcbY={3.81}
      pcbRotation={180}
      schRotation={-90}
      connections={{ pin1: sel.net().VCC, pin2: sel.net().GND }}
    />
    <resistor
      name="R1"
      schRotation={-90}
      footprint="0603"
      resistance="10k"
      pcbY={-6.35}
      connections={{ pin1: sel.JP2.pin1 }}
    />
    <jumper
      pinLabels={JP1PinLabels}
      cadModel={null}
      name="JP1"
      manufacturerPartNumber="M11PTH"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin11",
            "pin10",
            "pin9",
            "pin8",
            "pin7",
            "pin6",
            "pin5",
            "pin4",
            "pin3",
            "pin2",
            "pin1",
          ],
        },
      }}
      schDirection="left"
      footprint="pinrow11_id1.016mm_od1.88mm_p2.5mm_nosquareplating_doublesidedpinlabel"
      pcbRotation={90}
      pcbX={5.08}
    />
    <jumper
      pinLabels={JP2PinLabels}
      cadModel={null}
      name="JP2"
      manufacturerPartNumber="M08"
      footprint="pinrow8_id1.016mm_od1.88mm_p2.5mm_pinlabeltextalignleft_pinlabelorthogonal_nosquareplating_doublesidedpinlabel"
      pcbRotation={90}
      pcbX={-5.08}
    />
    <solderjumper
      cadModel={null}
      name="JP3"
      schRotation={90}
      footprint="solderjumper2_pw0.635mm_ph1.27mmd_p0.8mm"
      pcbY={7.219}
      pcbRotation={90}
    />
    <hole diameter={3.302} pcbY={11.43} />
    <hole diameter={3.302} pcbY={-11.43} />

    <schematictext
      text="R1 keeps enable"
      color="gray"
      fontSize={0.2}
      schX={-2.2}
      schY={-1.1}
    />
    <schematictext
      text="active (low). Pull"
      color="gray"
      fontSize={0.2}
      schX={-2.2}
      schY={-1.3}
    />
    <schematictext
      text="El directly to VCC"
      color="gray"
      fontSize={0.2}
      schX={-2.2}
      schY={-1.5}
    />
    <schematictext
      text="to disable the mux."
      color="gray"
      fontSize={0.2}
      schX={-2.2}
      schY={-1.7}
    />

    <schematictext
      text="JP1 shorts VEE to GND, if"
      color="gray"
      fontSize={0.2}
      schX={2}
      schY={-3.5}
    />
    <schematictext
      text="a bi-polar supply is not used."
      color="gray"
      fontSize={0.2}
      schX={2}
      schY={-3.7}
    />
    <schematictext
      text="(Defaults closed.)"
      color="gray"
      fontSize={0.2}
      schX={2}
      schY={-3.9}
    />

    <silkscreentext text="74HC4051" fontSize={0.8} pcbY={6.2} />
    <silkscreentext text="8-Mux" fontSize={0.8} pcbY={5.4} />
    <silkscreentext
      text="Sparkfun"
      fontSize={2}
      pcbY={-5.2}
      pcbX={2.2}
      layer="bottom"
      pcbRotation={90}
    />
    <silkscreentext
      text="74HC4051 8-Channel"
      fontSize={1.5}
      pcbY={0.4}
      pcbX={0.8}
      layer="bottom"
      pcbRotation={90}
    />
    <silkscreentext
      text="Mux/Demux"
      fontSize={1.5}
      pcbY={-3.2}
      pcbX={-0.8}
      layer="bottom"
      pcbRotation={90}
    />

    <schematictable schY={-1} schX={9} borderWidth={0.02}>
      <schematicrow height={0.6}>
        <schematiccell text="" width={1} />
        <schematiccell text="Min" width={1} />
        <schematiccell text="Typ" width={1} />
        <schematiccell text="Max" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="VCC-GND" width={2} />
        <schematiccell text="2.0" width={1} />
        <schematiccell text="5.0" width={1} />
        <schematiccell text="10.0" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="VCC-VEE" width={2} />
        <schematiccell text="2.0" width={1} />
        <schematiccell text="5.0" width={1} />
        <schematiccell text="10.0" width={1} />
      </schematicrow>
    </schematictable>

    <schematictable schY={-5} schX={10} borderWidth={0.02}>
      <schematicrow height={0.6}>
        <schematiccell text="VCC" width={1} />
        <schematiccell text="VEE" width={1} />
        <schematiccell text="GND" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="5V" width={1} />
        <schematiccell text="0V" width={1} />
        <schematiccell text="0V" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="10V" width={1} />
        <schematiccell text="0V" width={1} />
        <schematiccell text="0V" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="+5V" width={1} />
        <schematiccell text="-5V" width={1} />
        <schematiccell text="0V" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="+2V" width={1} />
        <schematiccell text="-8V" width={1} />
        <schematiccell text="0V" width={1} />
      </schematicrow>
    </schematictable>

    <netlabel
      net="VCC"
      anchorSide="bottom"
      connectsTo={sel.U1.pin16}
      schX={-1.5}
      schY={1.1}
    />
    <netlabel
      net="VEE"
      anchorSide="right"
      connectsTo={sel.U1.pin7}
      schX={-1.3}
      schY={0.7}
    />
    <netlabel
      net="S0"
      anchorSide="right"
      connectsTo={sel.U1.pin11}
      schX={-1.3}
      schY={0.3}
    />
    <netlabel
      net="S1"
      anchorSide="right"
      connectsTo={sel.U1.pin10}
      schX={-1.3}
      schY={0.1}
    />
    <netlabel
      net="S2"
      anchorSide="right"
      connectsTo={sel.U1.pin9}
      schX={-1.3}
      schY={-0.1}
    />
    <netlabel
      net="N_E"
      anchorSide="right"
      connectsTo={sel.U1.pin6}
      schX={-1.3}
      schY={-0.5}
    />

    {/* THIT IS THE U1 PIN8 CAUSING THE ROUTING ISSUE UNDER HERE */}

    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={sel.U1.pin8}
      schX={-1.3}
      schY={-1.5}
    />

    <netlabel
      net="VCC"
      anchorSide="bottom"
      connectsTo={sel.JP2.pin7}
      schX={-3.8}
      schY={1.1}
    />
    <netlabel
      net="VEE"
      anchorSide="left"
      connectsTo={sel.JP2.pin8}
      schX={-3.2}
      schY={0.7}
    />
    <netlabel
      net="Z"
      anchorSide="left"
      connectsTo={sel.JP2.pin5}
      schX={-3.2}
      schY={0.1}
    />
    <netlabel
      net="S0"
      anchorSide="left"
      connectsTo={sel.JP2.pin4}
      schX={-3.2}
      schY={-0.1}
    />
    <netlabel
      net="S1"
      anchorSide="left"
      connectsTo={sel.JP2.pin3}
      schX={-3.2}
      schY={-0.3}
    />
    <netlabel
      net="S2"
      anchorSide="left"
      connectsTo={sel.JP2.pin2}
      schX={-3.2}
      schY={-0.5}
    />
    <netlabel
      net="N_E"
      anchorSide="left"
      connectsTo={sel.JP2.pin1}
      schX={-3.2}
      schY={-0.7}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={[sel.R1.pin2, sel.JP2.pin6]}
      schX={-3.8}
      schY={-2.5}
    />

    <netlabel
      net="VEE"
      anchorSide="right"
      connectsTo={sel.JP3.pin2}
      schX={0}
      schY={-3}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP3.pin1}
      schX={0.3}
      schY={-4.5}
    />

    <netlabel
      net="Y0"
      anchorSide="left"
      connectsTo={sel.U1.pin13}
      schX={1.3}
      schY={0.9}
    />
    <netlabel
      net="Y1"
      anchorSide="left"
      connectsTo={sel.U1.pin14}
      schX={1.3}
      schY={0.7}
    />
    <netlabel
      net="Y2"
      anchorSide="left"
      connectsTo={sel.U1.pin15}
      schX={1.3}
      schY={0.5}
    />
    <netlabel
      net="Y3"
      anchorSide="left"
      connectsTo={sel.U1.pin12}
      schX={1.3}
      schY={0.3}
    />
    <netlabel
      net="Y4"
      anchorSide="left"
      connectsTo={sel.U1.pin1}
      schX={1.3}
      schY={0.1}
    />
    <netlabel
      net="Y5"
      anchorSide="left"
      connectsTo={sel.U1.pin5}
      schX={1.3}
      schY={-0.1}
    />
    <netlabel
      net="Y6"
      anchorSide="left"
      connectsTo={sel.U1.pin2}
      schX={1.3}
      schY={-0.3}
    />
    <netlabel
      net="Y7"
      anchorSide="left"
      connectsTo={sel.U1.pin4}
      schX={1.3}
      schY={-0.5}
    />
    <netlabel
      net="Z"
      anchorSide="left"
      connectsTo={sel.U1.pin3}
      schX={1.3}
      schY={-0.9}
    />

    <netlabel
      net="VCC"
      anchorSide="bottom"
      connectsTo={sel.JP1.pin10}
      schX={3.5}
      schY={1.5}
    />
    <netlabel
      net="VEE"
      anchorSide="right"
      connectsTo={sel.JP1.pin11}
      schX={3.2}
      schY={1.2}
    />
    <netlabel
      net="Y0"
      anchorSide="right"
      connectsTo={sel.JP1.pin8}
      schX={3.2}
      schY={0.6}
    />
    <netlabel
      net="Y1"
      anchorSide="right"
      connectsTo={sel.JP1.pin7}
      schX={3.2}
      schY={0.4}
    />
    <netlabel
      net="Y2"
      anchorSide="right"
      connectsTo={sel.JP1.pin6}
      schX={3.2}
      schY={0.2}
    />
    <netlabel
      net="Y3"
      anchorSide="right"
      connectsTo={sel.JP1.pin5}
      schX={3.2}
      schY={0}
    />
    <netlabel
      net="Y4"
      anchorSide="right"
      connectsTo={sel.JP1.pin4}
      schX={3.2}
      schY={-0.2}
    />
    <netlabel
      net="Y5"
      anchorSide="right"
      connectsTo={sel.JP1.pin3}
      schX={3.2}
      schY={-0.4}
    />
    <netlabel
      net="Y6"
      anchorSide="right"
      connectsTo={sel.JP1.pin2}
      schX={3.2}
      schY={-0.6}
    />
    <netlabel
      net="Y7"
      anchorSide="right"
      connectsTo={sel.JP1.pin1}
      schX={3.2}
      schY={-0.8}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP1.pin9}
      schX={3.5}
      schY={-1.5}
    />
  </board>
)
