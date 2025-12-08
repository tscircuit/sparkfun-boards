import { VCNL4040M3OE } from "./VCNL4040M3OE"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { sel } from "tscircuit"

const JPPinlabel = {
  pin4: ["SCL"],
  pin3: ["SDA"],
  pin2: ["VDD"],
  pin1: ["GND"],
}

export default () => {
  return (
    <board width="19.05mm" height="7.62mm" routingDisabled>
      <VCNL4040M3OE
        name="U1"
        connections={{
          pin3: sel.net().VDD,
          pin4: sel.net().VDD,
          pin8: sel.net().SCL,
          pin7: sel.net().SDA,
          pin6: sel.R1.pin1,
          pin5: sel.U1.pin2,
        }}
        pcbX={0}
        pcbRotation={180}
        schX={0}
        schY={4.2}
      />
      <capacitor
        name="C1"
        capacitance="2.2uF"
        schRotation={-90}
        schX={-3.8}
        schY={4.7}
        footprint="0402"
      />
      <capacitor
        name="C2"
        schRotation={-90}
        schX={-5.3}
        schY={4.7}
        capacitance="0.1uF"
        footprint="0402"
      />
      <resistor
        name="R1"
        resistance="10k"
        schRotation={90}
        schX={3.2}
        schY={4.6}
        footprint="0402"
        pcbRotation={90}
        connections={{ pin2: sel.JP9.pin2 }}
      />
      <resistor
        name="R2"
        resistance="1k"
        connections={{ pin1: sel.D1.pin1 }}
        schRotation={90}
        schX={6.6}
        footprint="0402"
        schY={5.2}
      />
      <solderjumper
        name="JP1"
        schRotation={90}
        schY={6.8}
        schX={6.6}
        footprint="solderjumper2_bridged12_p1.0414_pw0.635_ph1.27"
        layer={"bottom"}
        pcbX={0.54}
        pcbY={2.5}
        bridgedPins={[["1", "2"]]}
        connections={{
          pin2: sel.net().VDD,
          pin1: sel.R2.pin2,
        }}
      />
      <solderjumper
        connections={{ pin2: sel.net().V3_3, pin1: sel.R1.pin2 }}
        name="JP2"
        schX={3.2}
        schY={6}
        schRotation={90}
        footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
        layer={"bottom"}
        pcbX={0.54}
        pcbY={-2.5}
        bridgedPins={[["1", "2"]]}
      />
      <led
        connections={{ pin2: sel.net().GND }}
        name="D1"
        footprint="0402"
        pcbX={-8.2}
        pcbY={-2.8}
        schRotation={-90}
        schX={6.6}
        schY={4}
      />
      <SM04B_SRSS_TB_LF__SN
        name="J2"
        pcbRotation={90}
        pcbX={6.5}
        schWidth={0.7}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        connections={{
          pin1: sel.net().GND,
          pin2: sel.net().VDD,
          pin3: sel.net().SDA,
          pin4: sel.net().SCL,
        }}
        schY={-3.8}
        schX={-4.2}
      />
      <jumper
        name="J1"
        pinLabels={{
          pin1: ["N_INT"],
        }}
        manufacturerPartNumber="CONN_01PTH_NO_SILK_YES_STOP"
        schPinArrangement={{
          leftSide: { direction: "top-to-bottom", pins: ["pin1"] },
        }}
        connections={{ pin1: sel.net().N_INT }}
        schY={-3.8}
        schX={1.5}
        footprint="pinrow1_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal"
        pcbY={-2.8}
        pcbX={-6.2}
      />
      <hole diameter={3.302} pcbX={-7.5} pcbY={0} />

      <netlabel
        net="VDD"
        schX={-3.8}
        schY={5.5}
        anchorSide="bottom"
        connectsTo={sel.C1.pin1}
      />
      <netlabel
        net="GND"
        schX={-3.8}
        schY={4}
        anchorSide="top"
        connectsTo={sel.C1.pin2}
      />
      <netlabel
        net="VDD"
        schX={-5.3}
        schY={5.5}
        anchorSide="bottom"
        connectsTo={sel.C2.pin1}
      />
      <netlabel
        net="GND"
        schX={-5.3}
        schY={4}
        anchorSide="top"
        connectsTo={sel.C2.pin2}
      />

      <netlabel
        net="VDD"
        schX={-2}
        schY={5}
        anchorSide="bottom"
        connectsTo={sel.U1.pin3}
      />

      <netlabel
        net="GND"
        schX={-2}
        schY={3.5}
        anchorSide="top"
        connectsTo={sel.U1.pin1}
      />

      <netlabel
        net="GND"
        schX={-5.3}
        schY={-4.5}
        anchorSide="top"
        connectsTo={sel.J2.pin1}
      />

      <schematictext
        color="gray"
        fontSize={0.3}
        text="Led"
        schY={8}
        schX={6.5}
      />
      <schematictext
        color="gray"
        fontSize={0.3}
        text="Proximity Sensor"
        schY={8}
        schX={0}
      />
      <schematictext
        text="Connections"
        color="gray"
        fontSize={0.3}
        schY={-2.5}
        schX={-3}
      />
    </board>
  )
}
