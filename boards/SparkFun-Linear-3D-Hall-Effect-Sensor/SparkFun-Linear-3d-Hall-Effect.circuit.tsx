import { sel } from "@tscircuit/core"
import { TMAG5273 } from "./TMAG5273"
import { jstsh4_vert_1mm } from "./jumper-footprint"
import { mosfetFootprint } from "./mosfet-footprint"

const jumperPinLabels = {
  pin1: "GND",
  pin2: "VCC",
  pin3: "SDA",
  pin4: "SCL",
}

export default () => (
  <board width="25.4mm" height="25.4mm">
    <schematictext
      text="Power-On Reset"
      schX={-1}
      schY={2.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="20V/4.2A/52mΩ/1.4W"
      schX={0.6}
      schY={0.7}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="Q1"
      schX={-0.25}
      schY={0.4}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R7"
      schX={-2}
      schY={-1}
      schRotation={90}
      connections={{
        pin2: sel.Q1.gate,
      }}
    />
    <netlabel
      net="GND"
      schX={-2}
      schY={-1.8}
      connection="R7.pin1"
      anchorSide="top"
    />

    <mosfet
      name="Q1"
      footprint={mosfetFootprint}
      channelType="p"
      mosfetMode="enhancement"
      pcbRotation={180}
      pcbX={-4.445}
      pcbY={2.54}
      schX={-1}
    />
    <netlabel
      net="V3_3"
      schX={-0.696}
      schY={1}
      connection="Q1.pin1"
      anchorSide="bottom"
    />
    <netlabel
      net="V3_3_SW"
      schX={0}
      schY={-0.5}
      connection="Q1.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="DISABLE"
      schX={-2.5}
      schY={-0.1}
      connection="Q1.pin3"
      anchorSide="right"
    />

    <schematictext
      text="Hall-Effect Sensor - TMAG5273"
      schX={4.5}
      schY={2.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Input voltage ange:"
      schX={4.5}
      schY={2}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="1.7V - 3.6V"
      schX={4.5}
      schY={1.7}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="7 - bit unshifted I2C Address: 0x22"
      schX={4.5}
      schY={1.4}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <TMAG5273
      name="U1"
      pcbX={0}
      pcbY={0}
      schX={4}
      pcbRotation={180}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["GND", "TEST", "VCC"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "N_INT"],
        },
      }}
      connections={{
        GND: sel.net.GND,
        SCL: sel.net.SCL,
        SDA: sel.net.SDA,
        N_INT: sel.net.N_INT,
      }}
    />
    <netlabel
      net="V3_3_SW"
      schX={2.5}
      schY={0.4}
      connection="U1.pin4"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={2.5}
      schY={-0.6}
      connectsTo={["U1.pin2", "U1.pin3"]}
      anchorSide="top"
    />
    <netlabel
      net="N_INT"
      schX={5.3}
      schY={-0.2}
      connection="U1.pin5"
      anchorSide="left"
    />
    <netlabel net="SDA" schX={5.3} connection="U1.pin6" anchorSide="left" />
    <netlabel
      net="SCL"
      schX={5.3}
      schY={0.2}
      connection="U1.pin1"
      anchorSide="left"
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      schX={7}
      schRotation="-90deg"
    />

    <netlabel
      net="V3_3_SW"
      schX={7}
      schY={1}
      connection="C1.pin1"
      anchorSide="bottom"
    />

    <netlabel
      net="GND"
      schX={7}
      schY={-1}
      connection="C1.pin2"
      anchorSide="top"
    />

    <schematictext
      text="I2C Pullup"
      schX={10}
      schY={2.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Cut traces to disable I2C pullups"
      schX={10}
      schY={2}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <solderjumper
      name="I2C"
      layer="bottom"
      footprint="solderjumper3_bridged123_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      pcbX={0}
      pcbY={-2.54}
      schX={10}
      pinCount={3}
      schRotation="180deg"
      connections={{
        pin1: sel.R5.pin2,
        pin2: sel.net().V3_3_SW,
        pin3: sel.R2.pin2,
      }}
    />

    <resistor
      resistance="2.2k"
      footprint="0603"
      name="R2"
      schX={9}
      schY={-1}
      schRotation={90}
      connections={{
        pin1: sel.net.SDA,
      }}
    />

    <netlabel
      net="SDA"
      schX={9.4}
      schY={-2}
      connection="R2.pin1"
      anchorSide="left"
    />

    <resistor
      resistance="2.2k"
      footprint="0603"
      name="R5"
      schX={11}
      schY={-1}
      pcbRotation={180}
      schRotation={90}
      connections={{
        pin1: sel.net.SCL,
      }}
    />
    <netlabel
      net="SCL"
      schX={11.4}
      schY={-2}
      connection="R5.pin1"
      anchorSide="left"
    />

    <schematictext
      text='0.1" Header'
      schX={-1.2}
      schY={-3.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <pinheader
      name="J3"
      pinCount={6}
      footprint="pinrow6_p2.54_id1.016_od1.88_nosquareplating"
      gender="female"
      pitch="2.54mm"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      pcbX={0}
      pcbY={-11.43}
      schX={-2}
      schY={-6}
      pcbRotation="0deg"
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.V3_3,
        pin3: sel.net.SDA,
        pin4: sel.net.SCL,
        pin5: sel.net().DISABLE,
        pin6: sel.net.N_INT,
      }}
    />
    <netlabel
      net="GND"
      schX={-1}
      schY={-6.6}
      connection="J3.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={-1}
      schY={-5}
      connection="J3.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={-0.6}
      schY={-6.1}
      connection="J3.pin3"
      anchorSide="left"
    />
    <netlabel
      net="SCL"
      schX={-0.6}
      schY={-5.9}
      connection="J3.pin4"
      anchorSide="left"
    />
    <netlabel
      net="DISABLE"
      schX={-0.6}
      schY={-5.7}
      connection="J3.pin5"
      anchorSide="left"
    />
    <netlabel
      net="N_INT"
      schX={-0.6}
      schY={-5.5}
      connection="J3.pin6"
      anchorSide="left"
    />
    <schematictext
      text="Qwiic Connectors"
      schX={6}
      schY={-3.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Vertical Qwiic Connector"
      schX={4}
      schY={-6.7}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="Vertical Qwiic Connector"
      schX={7.5}
      schY={-6.7}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <jumper
      name="J1"
      footprint={jstsh4_vert_1mm}
      schWidth={0.6}
      pcbX={-8.001}
      pcbY={0}
      schX={3.5}
      schY={-6}
      pcbRotation={90}
      pinLabels={jumperPinLabels}
      connections={{
        GND: sel.net.GND,
        VCC: sel.net.V3_3,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />

    <hole diameter={3.302} pcbX={10.16} pcbY={-10.16} />
    <hole diameter={3.302} pcbX={-10.16} pcbY={-10.16} />
    <hole diameter={3.302} pcbX={-10.16} pcbY={10.16} />
    <hole diameter={3.302} pcbX={10.16} pcbY={10.16} />

    <netlabel
      net="GND"
      schX={4.5}
      schY={-6.5}
      connection="J1.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={4.5}
      schY={-5}
      connection="J1.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={4.9}
      schY={-5.9}
      connection="J1.pin3"
      anchorSide="left"
    />
    <netlabel
      net="SCL"
      schX={4.9}
      schY={-5.7}
      connection="J1.pin4"
      anchorSide="left"
    />

    <jumper
      name="J2"
      footprint={jstsh4_vert_1mm}
      schWidth={0.6}
      pcbX={8.001}
      pcbY={0}
      schX={7}
      schY={-6}
      pcbRotation={270}
      pinLabels={jumperPinLabels}
      connections={{
        GND: sel.net.GND,
        VCC: sel.net.V3_3,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />
    <netlabel
      net="GND"
      schX={8}
      schY={-6.5}
      connection="J2.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={8}
      schY={-5}
      connection="J2.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={8.4}
      schY={-5.9}
      connection="J2.pin3"
      anchorSide="left"
    />
    <netlabel
      net="SCL"
      schX={8.4}
      schY={-5.7}
      connection="J2.pin4"
      anchorSide="left"
    />

    <schematictext
      text="Power LED"
      schX={12}
      schY={-3.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Cut trace to disable LED"
      schX={12}
      schY={-3.9}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <resistor
      resistance="4.7k"
      footprint="0603"
      name="R3"
      pcbRotation={270}
      schX={12}
      schY={-6}
      schRotation={90}
      connections={{
        pin1: sel.D1.anode,
      }}
    />
    <netlabel
      net="V3_3_SW"
      schX={12}
      schY={-5}
      connection="R3.pin2"
      anchorSide="bottom"
    />
    <led
      name="D1"
      footprint="0603"
      color="red"
      pcbRotation={180}
      pcbX={-10.16}
      pcbY={6.35}
      schX={11.996}
      schY={-8}
      schRotation={-90}
      connections={{
        anode: sel.R3.pin1,
      }}
    />
    <solderjumper
      name="LED"
      layer="bottom"
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      pcbX={-10.16}
      pcbY={5.08}
      schX={12}
      schY={-9.5}
      pinCount={2}
      schRotation={-90}
      connections={{
        pin1: sel.D1.cathode,
        pin2: sel.net.GND,
      }}
    />
    <netlabel
      net="GND"
      schX={12}
      schY={-10.5}
      connection="LED.pin2"
      anchorSide="top"
    />
    <schematictext
      text="INT Pullup"
      schX={15}
      schY={-3.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Cut trace to remove pullup"
      schX={15}
      schY={-3.9}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <solderjumper
      name="INT_JP"
      layer="bottom"
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      pcbX={5.08}
      pcbY={5.08}
      schX={14.7}
      schY={-6}
      pinCount={2}
      schRotation={-90}
      connections={{
        pin1: sel.net().V3_3_SW,
        pin2: sel.R4.pin2,
      }}
    />
    <netlabel
      net="V3_3_SW"
      schX={14.7}
      schY={-5}
      connection="INT_JP.pin1"
      anchorSide="bottom"
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R4"
      schX={14.7}
      schY={-8}
      schRotation={90}
      connections={{
        pin1: sel.net.N_INT,
      }}
    />
    <netlabel
      net="INT"
      schX={15}
      schY={-9.5}
      connection="R4.pin1"
      anchorSide="left"
    />
  </board>
)
