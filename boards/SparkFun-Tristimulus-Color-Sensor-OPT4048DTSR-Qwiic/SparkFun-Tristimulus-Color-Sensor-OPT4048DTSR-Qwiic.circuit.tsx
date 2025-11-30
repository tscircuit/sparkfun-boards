import { sel } from "tscircuit"
import { SM04B_SRSS_TB_LF__SN } from "../SparkFun-Air-Velocity-Sensor-Breakout-FS3000-1005/SM04B_SRSS_TB_LF__SN"
import { OPT4048DTSR } from "./OPT4048DTSR"
import { SM04B_SRSS_TB_LF__SN2 } from "./SM04B_SRSS_TB_LF__SN2"

const jumperPinLabels = {
  pin1: ["GND"],
  pin2: ["3V3"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["INT"],
}

export default () => {
  return (
    <board width={25.4} height={25.4}>
      {/* Color Sensor */}
      <schematictext
        text="Color Sensor - OPT4048DTSR"
        color="red"
        anchor="left"
        schX={-10}
        schY={10}
        fontSize={0.3}
      />

      <schematictext
        text="VDD RANGE: 1.71V - 3.6V"
        color="gray"
        anchor="left"
        schX={-10}
        schY={9.7}
        fontSize={0.15}
      />

      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-10}
        schY={9}
        connectsTo={sel.C1.pin1}
      />

      <capacitor
        name="C1"
        capacitance="0.1uF"
        footprint="0402"
        schRotation={-90}
        schX={-10}
        schY={8}
        pcbX={-2.54}
        pcbY={0}
        pcbRotation={-90}
      />

      <netlabel
        net="GND"
        anchorSide="top"
        schX={-10}
        schY={7}
        connectsTo={sel.C1.pin2}
      />

      <OPT4048DTSR
        name="U1"
        pcbX={0}
        pcbY={0}
        pcbRotation={-90}
        schX={-7}
        schY={8}
        connections={{
          pin2: sel.net().ADDR,
          pin5: sel.net().SCL,
          pin7: sel.net().INT,
          pin8: sel.net().SDA,
        }}
      />

      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-9.2}
        schY={9}
        connectsTo={sel.U1.pin1}
      />

      <netlabel
        net="GND"
        anchorSide="top"
        schX={-9.2}
        schY={7}
        connectsTo={sel.U1.pin4}
      />

      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-5}
        schY={9}
        connectsTo={sel.R3.pin2}
      />

      <resistor
        resistance="10k"
        footprint="0603"
        name="R3"
        schX={-5}
        schY={8}
        schRotation={90}
        connections={{ pin1: sel.net().INT }}
        pcbX={-2.54}
        pcbY={-3.81}
        pcbRotation={90}
      />

      <netlabel
        net="INT"
        anchorSide="top"
        schX={-5}
        schY={7}
        connectsTo={sel.R3.pin1}
      />

      {/* Jumpers */}

      <schematictext
        text="Jumpers"
        color="red"
        anchor="left"
        schX={7}
        schY={10}
        fontSize={0.3}
      />

      <schematictext
        text="I2C Pullup jumper."
        color="gray"
        anchor="left"
        schX={5}
        schY={8}
        fontSize={0.15}
      />
      <schematictext
        text="Cut traces to remove"
        color="gray"
        anchor="left"
        schX={5}
        schY={7.8}
        fontSize={0.15}
      />
      <schematictext
        text="pullup resisitors from circuit."
        color="gray"
        anchor="left"
        schX={5}
        schY={7.6}
        fontSize={0.15}
      />

      <schematictext
        text="Cut the trace"
        color="gray"
        anchor="left"
        schX={10.2}
        schY={5}
        fontSize={0.15}
      />
      <schematictext
        text="to disable LED"
        color="gray"
        anchor="left"
        schX={10.2}
        schY={4.8}
        fontSize={0.15}
      />

      <netlabel
        net="V3_3"
        schX={10}
        schY={8.8}
        connectsTo={sel.R4.pin2}
        anchorSide="bottom"
      />

      <resistor
        resistance="2.2k"
        footprint="0603"
        name="R4"
        schX={10}
        schY={7.8}
        schRotation={90}
        pcbX={10.109}
        pcbY={5.232}
        pcbRotation={90}
        connections={{ pin1: sel.D1.pin1, pin2: sel.net().V3_3 }}
      />

      <led
        name="D1"
        color="red"
        footprint="0603"
        pcbX={11.709}
        pcbY={5.232}
        pcbRotation={90}
        schX={10}
        schY={6.3}
        schRotation={-90}
        connections={{ pin2: sel.LED1.pin2 }}
      />
      <solderjumper
        name="LED1"
        pinCount={2}
        footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
        bridgedPins={[["1", "2"]]}
        schX={10}
        schY={5}
        schRotation={90}
        pcbX={10.498}
        pcbY={5.842}
        pcbRotation={180}
        layer="bottom"
        connections={{ pin1: sel.net().GND }}
      />

      <netlabel
        net="GND"
        schX={10}
        schY={4}
        connectsTo={sel.LED1.pin1}
        anchorSide="top"
      />

      <solderjumper
        schRotation={180}
        connections={{
          pin3: sel.R2.pin2,
          pin1: sel.R1.pin2,
          pin2: sel.net().V3_3,
        }}
        bridgedPins={[["1"], ["2"], ["3"]]}
        schX={4}
        schY={6}
        pcbX={4.81}
        pcbY={-1.27}
        name="I2C_PU"
        footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1"
        layer="bottom"
      />

      <resistor
        resistance="2.2k"
        footprint="0603"
        name="R1"
        schX={5}
        schY={4.5}
        schRotation={90}
        pcbX={5.3009}
        pcbY={0}
        pcbRotation={-90}
      />
      <resistor
        resistance="2.2k"
        footprint="0603"
        name="R2"
        schX={3}
        schY={4.5}
        schRotation={90}
        pcbX={3.81}
        pcbY={0}
        pcbRotation={-90}
      />
      <netlabel
        net="SDA"
        schX={3}
        schY={3.5}
        connection={sel.R2.pin1}
        anchorSide="top"
      />
      <netlabel
        net="SCL"
        schX={5}
        schY={3.5}
        connection={sel.R1.pin1}
        anchorSide="top"
      />

      {/* Address Selection Jumpers */}
      <schematictext
        text="Address Selection Jumpers"
        color="red"
        anchor="left"
        schX={6}
        schY={1}
        fontSize={0.3}
      />
      <schematictext
        text="Close Jumper"
        color="gray"
        anchor="left"
        schX={6}
        schY={0}
        fontSize={0.15}
      />
      <schematictext
        text="to select Address"
        color="gray"
        anchor="left"
        schX={6}
        schY={-0.2}
        fontSize={0.15}
      />

      <netlabel
        net="V3_3"
        schX={5}
        schY={0}
        anchorSide="bottom"
        connectsTo={sel.R5.pin2}
      />

      <resistor
        resistance="10k"
        footprint="0603"
        name="R5"
        schX={5}
        schY={-1}
        schRotation={90}
        pcbX={-4.064}
        pcbY={-3.81}
        pcbRotation={90}
      />

      <solderjumper
        name="OX45"
        pinCount={2}
        connections={{
          pin1: sel.net().ADDR,
          pin2: sel.R5.pin1,
        }}
        footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
        bridgedPins={[["1", "2"]]}
        schX={4}
        schY={-2}
        pcbX={-3.81}
        pcbY={-1.27}
        pcbRotation={0}
        layer="bottom"
      />
      <solderjumper
        name="OX46"
        pinCount={2}
        connections={{
          pin1: sel.net().ADDR,
          pin2: sel.net().SDA,
        }}
        footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
        bridgedPins={[["1", "2"]]}
        schX={4}
        schY={-3}
        pcbX={-3.81}
        pcbY={0.965}
        pcbRotation={0}
        layer="bottom"
      />
      <solderjumper
        name="OX44"
        pinCount={2}
        connections={{
          pin1: sel.net().ADDR,
          pin2: sel.net().GND,
        }}
        footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
        bridgedPins={[["1", "2"]]}
        schX={4}
        schY={-4}
        pcbX={-3.81}
        pcbY={-3.556}
        pcbRotation={0}
        layer="bottom"
      />

      {/* Connectors */}
      <schematictext
        text="Connectors"
        color="red"
        anchor="left"
        schX={-4}
        schY={-3}
        fontSize={0.3}
      />
      <jumper
        name="JP3"
        schWidth={0.7}
        schX={-5}
        schY={-6}
        schDirection="left"
        schPinArrangement={{
          leftSide: {
            direction: "bottom-to-top",
            pins: ["GND", "3V3", "SDA", "SCL", "INT"],
          },
        }}
        connections={{
          pin5: sel.net().INT,
          pin4: sel.net().SCL,
          pin3: sel.net().SDA,
          pin2: sel.net().V3_3,
          pin1: sel.net().GND,
        }}
        pinLabels={jumperPinLabels}
        footprint="pinrow5_id1.016_od1.88_nosquareplating_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel_pinlabelverticallyinverted"
        pcbY={-11.43}
      />

      <SM04B_SRSS_TB_LF__SN2
        name="JP2"
        schX={-1}
        schY={-5}
        pcbX={-9.8}
        pcbRotation={-90}
        connections={{
          pin4: sel.net().SCL,
          pin3: sel.net().SDA,
          pin2: sel.net().V3_3,
          pin1: sel.net().GND,
        }}
      />

      <SM04B_SRSS_TB_LF__SN
        schX={-1}
        schY={-7}
        name="JP1"
        pcbX={9.8}
        pcbRotation={90}
        connections={{
          pin4: sel.net().SCL,
          pin3: sel.net().SDA,
          pin2: sel.net().V3_3,
          pin1: sel.net().GND,
        }}
      />

      <netlabel
        net="V3_3"
        schX={-2.15}
        schY={-4}
        connectsTo={[sel.JP1.pin2, sel.JP2.pin2]}
        anchorSide="bottom"
      />

      <hole diameter={3.302} pcbX={10.16} pcbY={-10.16} />
      <hole diameter={3.302} pcbX={-10.16} pcbY={-10.16} />
      <hole diameter={3.302} pcbX={-10.16} pcbY={10.16} />
      <hole diameter={3.302} pcbX={10.16} pcbY={10.16} />
    </board>
  )
}
