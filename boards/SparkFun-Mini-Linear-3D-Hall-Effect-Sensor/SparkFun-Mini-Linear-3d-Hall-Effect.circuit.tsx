import { sel } from "@tscircuit/core"
import { TMAG5273 } from "./TMAG5273"
import { jstsh4_vert_1mm } from "./jumper-footprint"

const jumperPinLabels = {
  pin1: "GND",
  pin2: "VCC",
  pin3: "SDA",
  pin4: "SCL",
}

export default () => (
  <board width="25.4mm" height="12.7mm" autorouter="auto-cloud">
    <schematictext
      text="Power-On Reset"
      schX={-1}
      schY={2}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R7"
      pcbX={-5.461}
      pcbY={3.81}
      schX={-0.8}
      schY={-1}
      schRotation={90}
      connections={{
        pin2: sel.Q1.gate,
      }}
    />
    <netlabel
      net="GND"
      schX={-0.8}
      schY={-1.8}
      connection="R7.pin1"
      anchorSide="top"
    />

    <mosfet
      name="Q1"
      footprint={
        <footprint name="q1_footprint">
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.95mm"
            pcbY="-1mm"
            width="0.8mm"
            height="0.9mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.95mm"
            pcbY="-1mm"
            width="0.8mm"
            height="0.9mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="1.1mm"
            width="0.8mm"
            height="0.9mm"
            shape="rect"
          />
        </footprint>
      }
      channelType="p"
      mosfetMode="enhancement"
      pcbRotation={270}
      pcbX={-5.08}
      pcbY={1.27}
    />
    <netlabel
      net="V3_3"
      schX={0.305}
      schY={1}
      connection="Q1.pin1"
      anchorSide="bottom"
    />
    <netlabel
      net="V3_3_SW"
      schX={0.9}
      schY={-0.5}
      connection="Q1.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="DISABLE"
      schX={-1.3}
      schY={-0.1}
      connection="Q1.pin3"
      anchorSide="right"
    />

    <schematictext
      text="Hall-Effect Sensor - TMAG5273"
      schX={4.5}
      schY={2}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <TMAG5273
      name="U1"
      layer="bottom"
      pcbX={-0.178}
      pcbY={1.5725}
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
      capacitance="100nF"
      footprint="0603"
      pcbX={0}
      pcbY={0.127}
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
      schY={2}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <solderjumper
      name="I2C"
      footprint="solderjumper3_bridged123_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      pcbX={1.905}
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
      pcbX={1.27}
      pcbY={3.937}
      schX={9}
      schY={-1}
      schRotation={90}
      connections={{
        pin1: sel.net.SDA,
        pin2: ".I2C > .pin3",
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
      pcbX={1.27}
      pcbY={2.032}
      schX={11}
      schY={-1}
      pcbRotation={180}
      schRotation={90}
      connections={{
        pin1: sel.net.SCL,
        pin2: ".I2C > .pin2",
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
      text="0.1 Header"
      schX={-2}
      schY={-4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <pinheader
      name="J3"
      pinCount={6}
      footprint="pinrow6__p2.54_id1.016_od1.88_nosquareplating"
      gender="female"
      pitch="2.54mm"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      pcbX={0}
      pcbY={-5.08}
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
      schX={5}
      schY={-4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <jumper
      name="J1"
      footprint={jstsh4_vert_1mm}
      pcbX={-8.001}
      pcbY={2.54}
      schX={3}
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
    <hole diameter="3.302mm" pcbX={10.16} pcbY={-3.81} />
    <hole diameter="3.302mm" pcbX={-10.16} pcbY={-3.81} />

    <netlabel
      net="GND"
      schX={4.8}
      schY={-6.5}
      connection="J1.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={4.8}
      schY={-5}
      connection="J1.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={5.2}
      schY={-5.9}
      connection="J1.pin3"
      anchorSide="left"
    />
    <netlabel
      net="SCL"
      schX={5.2}
      schY={-5.7}
      connection="J1.pin4"
      anchorSide="left"
    />

    <jumper
      name="J2"
      footprint={jstsh4_vert_1mm}
      pcbX={8.001}
      pcbY={2.54}
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
      schX={8.8}
      schY={-6.5}
      connection="J2.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={8.8}
      schY={-5}
      connection="J2.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={9.2}
      schY={-5.9}
      connection="J2.pin3"
      anchorSide="left"
    />
    <netlabel
      net="SCL"
      schX={9.2}
      schY={-5.7}
      connection="J2.pin4"
      anchorSide="left"
    />

    <schematictext
      text="Power LED"
      schX={12}
      schY={-4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <resistor
      resistance="4.7k"
      footprint="0603"
      name="R3"
      pcbRotation={270}
      pcbX={6.096}
      pcbY={2.54}
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
      pcbRotation={270}
      pcbX={4.699}
      pcbY={2.54}
      schX={12}
      schY={-8}
      schRotation={-90}
      connections={{
        anode: sel.R3.pin1,
        cathode: ".LED > .pin1",
      }}
    />
    <solderjumper
      name="LED"
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      pcbX={2.921}
      pcbY={-0.127}
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
      schY={-4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <solderjumper
      name="INT_JP"
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      pcbX={-6.35}
      pcbY={-2.794}
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
      pcbX={-1.651}
      pcbY={-1.778}
      schX={14.7}
      schY={-8}
      schRotation={90}
      connections={{
        pin1: sel.net.N_INT,
        pin2: ".INT_JP > ,pin2",
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
