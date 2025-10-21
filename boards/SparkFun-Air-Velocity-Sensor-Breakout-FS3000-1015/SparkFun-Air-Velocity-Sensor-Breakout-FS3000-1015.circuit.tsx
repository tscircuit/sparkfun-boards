import { sel } from "tscircuit"
import { FS3000_1015 } from "./ FS3000_1015"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"

export default () => {
  return (
    <board width={25.4} height={25.4}>
      <FS3000_1015
        name="U1"
        pcbY={8.128}
        connections={{
          pin1: [sel.JP3.pin2, sel.C2.pin1],
          pin7: sel.net.SCL,
          pin6: sel.net.SDA,
        }}
      />
      <capacitor
        name="C1"
        schRotation={-90}
        schX={-6}
        schY={-0.5}
        capacitance="0.1uF"
        footprint="cap0402"
        pcbRotation={-90}
        pcbX={-5.232}
        pcbY={8.89}
        connections={{ pin1: sel.JP3.pin1, pin2: sel.net().GND }}
      />
      <netlabel
        net="V3_3"
        schX={-6.3}
        anchorSide="bottom"
        schY={0.5}
        connectsTo={sel.C1.pin1}
      />
      <capacitor
        name="C2"
        capacitance="0.1uF"
        footprint="cap0402"
        pcbRotation={90}
        schRotation={-90}
        schX={-3}
        schY={-0.5}
        pcbX={-5.232}
        pcbY={11.176}
        connections={{ pin2: sel.net().GND }}
      />
      <netlabel net="ADC_REF" schX={-3.3} schY={0.5} connectsTo={sel.U1.pin1} />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-1.8}
        schY={-1.05}
        connectsTo={sel.U1.pin3}
      />
      <capacitor
        name="C3"
        schX={2.3}
        connections={{ pin1: sel.U1.pin9, pin2: sel.U1.pin8 }}
        schY={-0.5}
        schRotation={-90}
        capacitance="0.1uF"
        footprint="cap0402"
        pcbRotation={-90}
        pcbX={5.232}
        pcbY={8.89}
      />
      <capacitor
        name="C4"
        schX={3}
        connections={{ pin1: sel.U1.pin10, pin2: sel.net().GND }}
        schRotation={-90}
        capacitance="1uF"
        footprint="cap0402"
        pcbRotation={90}
        pcbX={5.232}
        pcbY={11.176}
      />
      <resistor
        name="R3"
        connections={{ pin1: sel.net().SDA }}
        schRotation={90}
        resistance="2.2k"
        footprint="0402"
        schY={1}
        schX={8.7}
        pcbX={8.89}
        pcbY={-5.08}
      />
      <resistor
        name="R4"
        connections={{ pin1: sel.net().SCL }}
        schRotation={90}
        resistance="2.2k"
        footprint="0402"
        schY={1}
        schX={7.3}
        pcbX={8.89}
        pcbY={-6.35}
      />
      <resistor
        name="R5"
        connections={{ pin2: sel.D2.pin1 }}
        schX={5.5}
        schY={-9.5}
        schRotation={-90}
        resistance="1k"
        footprint="0402"
        pcbX={-7.671}
        pcbY={-6.147}
        pcbRotation={90}
      />
      <led
        name="D2"
        connections={{ pin2: sel.net().GND }}
        schX={5.5}
        schY={-11}
        schRotation={-90}
        color="RED"
        footprint="0603"
        pcbRotation={180}
        pcbX={-10.16}
        pcbY={-6.045}
      />
      <solderjumper
        schRotation={180}
        connections={{
          pin3: sel.R4.pin2,
          pin1: sel.R3.pin2,
          pin2: sel.net().V3_3,
        }}
        bridgedPins={[["1"], ["2"], ["3"]]}
        schX={8}
        schY={2}
        pcbX={11.201}
        pcbY={-7.264}
        name="JP1"
        footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1"
        pcbRotation={-90}
        layer="bottom"
      />
      <solderjumper
        connections={{ pin1: sel.R5.pin1, pin2: sel.net().V3_3 }}
        pcbX={-11.57}
        bridgedPins={[["1"], ["2"]]}
        schRotation={90}
        pcbY={-4.699}
        schX={5.5}
        schY={-8}
        name="JP2"
        footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
        pcbRotation={180}
        layer="bottom"
      />
      <solderjumper
        bridgedPins={[["1"], ["2"]]}
        connections={{ pin1: [sel.U1.pin2] }}
        schX={-3.1}
        schY={1.5}
        pcbX={-6.871}
        pcbY={11.3}
        name="JP3"
        footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
        pcbRotation={180}
        layer="bottom"
      />

      <schematictext
        text="I2C Pullup jumper."
        color="gray"
        anchor="left"
        schX={9}
        schY={3}
        fontSize={0.15}
      />
      <schematictext
        text="Cut traces to remove"
        color="gray"
        anchor="left"
        schX={9}
        schY={2.8}
        fontSize={0.15}
      />
      <schematictext
        text="pullup resisitors from circuit."
        color="gray"
        anchor="left"
        schX={9}
        schY={2.6}
        fontSize={0.15}
      />
      <schematictext
        text="JUMPER-SMT_3_2-N TRACE_SILIK"
        color="gray"
        schRotation={-90}
        anchor="left"
        schX={8}
        schY={-0.9}
        fontSize={0.15}
      />

      <schematictext
        text="Qwiic/12C Connectors"
        color="red"
        anchor="left"
        schX={-7}
        schY={-5}
        fontSize={0.3}
      />

      <schematictext
        text="Power LED"
        color="red"
        anchor="left"
        schX={4}
        schY={-5}
        fontSize={0.3}
      />

      <schematictext
        text="Cut the trace"
        color="gray"
        anchor="left"
        schX={5}
        schY={-7.5}
        fontSize={0.15}
      />
      <schematictext
        text="to disable LED"
        color="gray"
        anchor="left"
        schX={5}
        schY={-7.7}
        fontSize={0.15}
      />

      <schematictext
        text="FS3000 Air Velocity Sensor Module"
        color="red"
        anchor="left"
        schX={-7}
        schY={5}
        fontSize={0.3}
      />
      <schematictext
        text="12C Pullups"
        color="red"
        anchor="left"
        schX={6}
        schY={5}
        fontSize={0.3}
      />

      <schematictext
        text="VCC RANGE: 3.3V (QWIIC)"
        color="gray"
        anchor="left"
        schX={-7}
        schY={4.7}
        fontSize={0.15}
      />
      <schematictext
        text="Cut ADC-REF jumper to apply your"
        color="gray"
        anchor="left"
        schX={1}
        schY={3}
        fontSize={0.15}
      />
      <schematictext
        text="own custom ADC reference input"
        color="gray"
        anchor="left"
        schX={1}
        schY={2.8}
        fontSize={0.15}
      />
      <schematictext
        text="voltage on ADC-REF Header pin."
        color="gray"
        anchor="left"
        schX={1}
        schY={2.6}
        fontSize={0.15}
      />

      <schematictext
        text="JUMPER-SMT_2_NIC_TRACE_SILK"
        color="gray"
        anchor="left"
        schX={-3.1}
        schY={1}
        fontSize={0.15}
      />

      <schematictext
        text="VDD range: 3.3-5.5V"
        color="gray"
        anchor="left"
        schX={-1}
        schY={-1}
        fontSize={0.15}
      />
      <schematictext
        text="7-Bit 12C Address: 0x28"
        color="gray"
        anchor="left"
        schX={-1.5}
        schY={-2}
        fontSize={0.15}
      />

      <silkscreentext text="<--AIRFLOW--" pcbRotation={90} pcbX={7} pcbY={8} />
      <silkscreentext
        text="<--AIRFLOW--"
        pcbRotation={90}
        pcbX={0}
        layer="bottom"
        pcbY={8}
      />

      <silkscreentext
        text="ADC-REF"
        pcbRotation={90}
        pcbX={-6.5}
        layer="bottom"
        pcbY={6}
      />

      <silkscreentext text="1005" pcbX={10.5} pcbY={6} />
      <silkscreentext text="1015" pcbX={10.5} pcbY={5} />

      <silkscreentext text="Air Velocity" pcbY={-2} />
      <silkscreentext text="Sensor" pcbY={-3.5} />
      <silkscreentext text="FS3000" pcbY={-5} />
      <silkscreentext text="PWR" pcbX={-10} pcbY={-4.2} />
      <silkscreentext text="qwiic" pcbX={-10} pcbY={4.2} />

      <silkscreentext
        text="Air"
        pcbY={6}
        pcbX={6}
        layer="bottom"
        fontSize={1.5}
      />
      <silkscreentext
        text="Velocity"
        pcbY={4.5}
        pcbX={6}
        layer="bottom"
        fontSize={1.5}
      />
      <silkscreentext
        text="Sensor"
        pcbY={3}
        pcbX={6}
        layer="bottom"
        fontSize={1.5}
      />
      <silkscreentext
        text="FS3000"
        pcbY={1.5}
        pcbX={6}
        layer="bottom"
        fontSize={1.5}
      />
      <silkscreentext
        text="I2C ADD: 0x28"
        pcbY={0}
        pcbX={6}
        layer="bottom"
        fontSize={1.5}
      />

      <silkscreentext
        text="LED"
        pcbX={-11}
        pcbY={-2}
        pcbRotation={90}
        layer="bottom"
      />
      <silkscreentext
        text="I2C"
        pcbX={9}
        pcbY={-6.3}
        pcbRotation={90}
        layer="bottom"
      />

      <silkscreentext text="qwiic" pcbX={-10} pcbY={4.2} layer="bottom" />

      <SM04B_SRSS_TB_LF__SN
        schX={-1}
        schY={-8}
        name="JP6"
        pcbX={9.5}
        pcbRotation={90}
      />
      <netlabel
        net="V3_3"
        schX={-5}
        schY={-7.5}
        connectsTo={sel.JP7.pin2}
        anchorSide="bottom"
      />
      <netlabel
        net="SCL"
        schX={-5.2}
        schY={-7.7}
        connectsTo={sel.JP7.pin4}
        anchorSide="right"
      />
      <netlabel
        net="SDA"
        schX={-5.2}
        schY={-7.9}
        connectsTo={sel.JP7.pin3}
        anchorSide="right"
      />

      <netlabel
        net="GND"
        schX={-5}
        schY={-8.5}
        connectsTo={sel.JP7.pin1}
        anchorSide="top"
      />

      <netlabel
        net="V3_3"
        schX={-2}
        schY={-7.5}
        connectsTo={sel.JP6.pin2}
        anchorSide="bottom"
      />
      <netlabel
        net="SCL"
        schX={-2.2}
        schY={-7.7}
        connectsTo={sel.JP6.pin4}
        anchorSide="right"
      />
      <netlabel
        net="SDA"
        schX={-2.2}
        schY={-7.9}
        connectsTo={sel.JP6.pin3}
        anchorSide="right"
      />

      <netlabel
        net="GND"
        schX={-2}
        schY={-8.5}
        connectsTo={sel.JP6.pin1}
        anchorSide="top"
      />
      <SM04B_SRSS_TB_LF__SN
        name="JP7"
        schX={-4}
        schY={-8}
        pcbX={-9.5}
        pcbRotation={-90}
      />

      <hole diameter={3.302} pcbX={10.16} pcbY={-10.16} />
      <hole diameter={3.302} pcbX={-10.16} pcbY={-10.16} />
      <hole diameter={3.302} pcbX={-10.16} pcbY={10.16} />
      <hole diameter={3.302} pcbX={10.16} pcbY={10.16} />

      <jumper
        name="JP4"
        schWidth={0.7}
        connections={{ pin1: sel.net().VCM, pin2: sel.net().ADC_REF }}
        schDirection="left"
        schX={-4}
        schY={-13}
        pinLabels={{
          pin1: ["VCM"],
          pin2: ["ADCR"],
        }}
        cadModel={null}
        footprint="pinrow2_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_id1.016_od1.88_p2.54"
        pcbX={5.08}
        pcbY={-11.43}
      />
      <jumper
        name="JP5"
        schWidth={0.7}
        schX={-4}
        schY={-11}
        schDirection="left"
        pinLabels={{
          pin1: ["GND"],
          pin2: ["V3_3"],
          pin3: ["SDA"],
          pin4: ["SCL"],
        }}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        cadModel={null}
        footprint="pinrow4_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_id1.016_od1.88_p2.54"
        pcbX={-2.54}
        pcbY={-11.43}
      />
      <netlabel
        net="V3_3"
        schX={-5}
        schY={-10.5}
        connectsTo={sel.JP5.pin2}
        anchorSide="bottom"
      />
      <netlabel
        net="SCL"
        schX={-5.2}
        schY={-10.7}
        connectsTo={sel.JP5.pin4}
        anchorSide="right"
      />
      <netlabel
        net="SDA"
        schX={-5.2}
        schY={-10.9}
        connectsTo={sel.JP5.pin3}
        anchorSide="right"
      />

      <netlabel
        net="GND"
        schX={-5}
        schY={-11.5}
        connectsTo={sel.JP5.pin1}
        anchorSide="top"
      />
    </board>
  )
}
