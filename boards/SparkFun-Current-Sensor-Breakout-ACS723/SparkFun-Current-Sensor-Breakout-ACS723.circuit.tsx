import { sel } from "tscircuit"
import { ACS723 } from "./ACS723"

export default () => {
  return (
    <board width={24.13} height={15.24}>
      <jumper
        cadModel={null}
        pcbX={10}
        pcbRotation={-90}
        pinLabels={{ pin1: ["VCC"], pin2: ["VOUT"], pin3: ["GND"] }}
        name="JP1"
        schDirection="left"
        footprint="pinrow3_id1.016_od1.88_nosquareplating_doublesidedpinlabel"
        schY={0.1}
        schX={3.8}
        connections={{
          pin1: sel.U1.pin8,
          pin2: sel.U1.pin7,
          pin3: sel.U1.pin5,
        }}
      />
      <jumper
        cadModel={null}
        pcbX={-8.255}
        pcbY={3.81}
        name="JP2"
        schWidth={0.8}
        connections={{ pin1: sel.U1.pin1 }}
        schX={-3.8}
        schY={1.3}
        footprint="pinrow1_id3.81_od6.198_nosquareplating_pinlabeltextalignleft"
      />
      <jumper
        cadModel={null}
        pcbX={-4.9}
        pcbRotation={90}
        schWidth={0.8}
        name="JP3"
        connections={{
          pin2: [sel.U1.pin1, sel.U1.pin2],
          pin1: [sel.U1.pin3, sel.U1.pin4],
        }}
        schX={-3.8}
        footprint="pinrow2_id1.016_od1.88_nosquareplating"
      />
      <jumper
        cadModel={null}
        pcbX={-8.255}
        pcbY={-3.81}
        name="JP4"
        schWidth={0.8}
        schX={-3.8}
        schY={-1.3}
        connections={{ pin1: sel.U1.pin3 }}
        footprint="pinrow1_id3.81_od6.198_nosquareplating_pinlabeltextalignleft"
      />
      <solderjumper
        name="JP5"
        pcbX={3.8}
        schX={8}
        schRotation={90}
        pinLabels={{ pin1: ["GND"], pin2: ["BW_SEL"] }}
        layer={"bottom"}
        footprint="solderjumper2_pw0.635_ph1.27_p0.8"
        connections={{ pin2: sel.R1.pin1, pin1: sel.net().GND }}
      />
      <group>
        <ACS723
          schWidth={1.6}
          name="U1"
          pcbRotation={-90}
          connections={{ pin6: sel.net().BW_SEL }}
        />
        <resistor
          name="R1"
          resistance="4.7k"
          schX={8}
          schRotation={90}
          schY={1.5}
          pcbY={4.953}
          pcbX={2.794}
          footprint="0603"
          connections={{ pin2: sel.net().VCC }}
        />
        <capacitor
          name="C1"
          capacitance="0.1uF"
          pcbY={3.429}
          pcbX={2.794}
          schY={-1.3}
          schX={3}
          pcbRotation={180}
          schRotation={-90}
          footprint="cap0603"
          connections={{
            pin1: [sel.U1.pin8, sel.R1.pin2],
            pin2: sel.net().GND,
          }}
        />
        <capacitor
          name="C2"
          capacitance="0.1uF"
          pcbRotation={180}
          pcbY={-3.429}
          pcbX={2.794}
          schY={-1.3}
          schX={2.3}
          schRotation={-90}
          footprint="cap0603"
          connections={{ pin1: sel.U1.pin7, pin2: sel.net().GND }}
        />
      </group>
      <netlabel
        net="GND"
        anchorSide="top"
        schY={-2.05}
        schX={1.7}
        connectsTo={sel.U1.pin5}
      />
      <netlabel
        net="BW_SEL"
        anchorSide="right"
        schY={0.7}
        schX={7.8}
        connectsTo={sel.JP5.pin2}
      />
      <schematictext
        text="Bandwidth Select"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={5}
        schY={5}
      />
      <schematictext
        text="JP1 (Sets bandwidth):"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={5}
        schY={-2}
      />
      <schematictext
        text="OPEN = 20kHz Low Noise (default)"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={5}
        schY={-2.3}
      />
      <schematictext
        text="CLOSED = 80Hx"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={5}
        schY={-2.6}
      />
      <schematictext
        text="JUMPER-SMT_2_NO_SILK"
        schRotation={-90}
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={8.5}
        schY={-0.5}
      />

      <schematictext
        text="ACS723LLCTR-05AB-T2"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={-6.5}
        schY={5}
      />
      <schematictext
        text="NOTES:"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={-6}
        schY={-2.6}
      />
      <schematictext
        text="VCC: 4.5V-5.5V"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={-6}
        schY={-2.9}
      />
      <schematictext
        text="Current Range: +/-5A"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={-6}
        schY={-3.2}
      />
      <schematictext
        text="Zero Current Output Voltage = VCC x 0.5"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={-6}
        schY={-3.5}
      />
      <schematictext
        text="Sensitivity (-5A(min) < Current Sensed <5A(max))= 400mV/A"
        anchor="left"
        fontSize={0.21}
        color="gray"
        schX={-6}
        schY={-3.8}
      />
    </board>
  )
}
