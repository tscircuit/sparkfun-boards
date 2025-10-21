import { sel } from "tscircuit"
import { MPL3115A2R1 } from "./MPL3115A2R1"
import manualEdits from "./manual-edits.json"

const jumperPinLabels = {
  pin1: ["INT2"],
  pin2: ["INT1"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["VCC"],
  pin6: ["GND"],
}
export default () => (
  <board width="15.24mm" height="17.78mm" manualEdits={manualEdits}>
    {/* X= 7.62 , Y= 8.89 */}
    <group>
      <capacitor
        name="C1"
        pcbX={1.27}
        footprint="cap0402"
        capacitance="0.1uF"
        pcbRotation={-90}
        schRotation={-90}
      />
      <capacitor
        name="C2"
        connections={{ pin2: sel.C1.pin2 }}
        pcbX={5.08}
        pcbY={1.27}
        pcbRotation={-90}
        polarized
        footprint="cap1206"
        capacitance="10uF"
        schRotation={-90}
      />
      <capacitor
        name="C4"
        pcbX={2.54}
        footprint="cap0402"
        capacitance="1uF"
        pcbRotation={-90}
        schRotation={-90}
      />
      <schematictext
        text="VCC = 3.6V Max"
        fontSize={0.2}
        color="gray"
        schY={-2}
      />
      <schematictext
        text="Slave Address: 0x60"
        fontSize={0.2}
        color="gray"
        schY={-2.3}
      />
      <schematictext
        text="Read Address: 0xC1"
        fontSize={0.2}
        color="gray"
        schY={-2.6}
      />
      <schematictext
        text="Write Address: 0xC0"
        fontSize={0.2}
        color="gray"
        schY={-2.9}
      />
      <silkscreentext text="MPL3115A2" fontSize={1.5} layer="bottom" pcbY={1} />
      <silkscreentext
        text="Altitude"
        fontSize={1.5}
        layer="bottom"
        pcbY={-0.5}
      />
      <silkscreentext text="Sensor" fontSize={1.5} layer="bottom" pcbY={-2} />

      <netlabel
        net="VCC"
        anchorSide="bottom"
        connectsTo={[sel.C1.pin1, sel.C2.pin1, sel.C4.pin1]}
        schY={4}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        connectsTo={[sel.C1.pin2, sel.C4.pin2]}
        schY={2.1}
      />
    </group>
    {/* X= 7.62 , Y= 8.89 */}
    <group>
      <MPL3115A2R1
        name="U1"
        pcbRotation={90}
        pcbY={5.08}
        connections={{
          INT1: sel.net().INT1,
          INT2: sel.net().INT2,
          SCL: sel.net().SCL,
          SDA: sel.net().SDA,
        }}
      />
      <resistor
        name="R1"
        pcbX={-1.27}
        resistance="1k"
        footprint="0402"
        pcbRotation={90}
        schRotation={-90}
        connections={{ pin2: sel.net().SCL }}
      />
      <resistor
        name="R2"
        pcbX={-2.54}
        resistance="1k"
        footprint="0402"
        pcbRotation={90}
        schRotation={-90}
        connections={{ pin2: sel.net().SDA }}
      />
      <capacitor
        name="C3"
        footprint="cap0402"
        capacitance="0.1uF"
        pcbRotation={-90}
        schRotation={-90}
        connections={{ pin1: sel.U1.pin2 }}
      />
      <netlabel
        net="VCC"
        anchorSide="bottom"
        connectsTo={[sel.R1.pin1, sel.R2.pin1]}
        schY={2}
        schX={2.5}
      />
      <netlabel
        net="VCC"
        anchorSide="bottom"
        connectsTo={[sel.U1.VDD, sel.U1.pin4]}
        schY={0.6}
        schX={-1.5}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        connectsTo={[sel.U1.GND]}
        schY={-0.5}
        schX={-1.9}
      />
      <netlabel net="GND" anchorSide="top" connectsTo={[sel.C3.pin2]} />
    </group>
    <group>
      <jumper
        name="JP4"
        schWidth={0.6}
        pcbY={-7.62}
        footprint="pinrow6_id1.016_od1.88_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating"
        schDirection="left"
        pinLabels={jumperPinLabels}
        cadModel={null}
        manufacturerPartNumber="M06SIP"
      />
      <netlabel
        net="INT2"
        anchorSide="right"
        schX={-6.3}
        schY={1.5}
        connectsTo={sel.JP4.pin1}
      />
      <netlabel
        net="INT1"
        anchorSide="right"
        schX={-6.3}
        schY={1.3}
        connectsTo={sel.JP4.pin2}
      />
      <netlabel
        net="SDA"
        anchorSide="right"
        schX={-6.3}
        schY={1.1}
        connectsTo={sel.JP4.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="right"
        schX={-6.3}
        schY={0.9}
        connectsTo={sel.JP4.SCL}
      />
      <netlabel
        net="VCC"
        anchorSide="bottom"
        connectsTo={[sel.JP4.VCC]}
        schY={1.9}
        schX={-6}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        connectsTo={[sel.JP4.GND]}
        schY={0.2}
        schX={-6}
      />
    </group>
    <hole diameter={3.302} pcbY={6.35} pcbX={5.08} />
    <hole diameter={3.302} pcbY={6.35} pcbX={-5.08} />
  </board>
)
