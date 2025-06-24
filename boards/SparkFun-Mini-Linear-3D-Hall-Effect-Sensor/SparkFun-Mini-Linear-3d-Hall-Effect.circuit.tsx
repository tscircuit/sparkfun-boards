import { sel } from "@tscircuit/core"
import { TMAG5273 } from "./TMAG5273"

const jumperPinLabels = {
  pin1: "GND",
  pin2: "VCC",
  pin3: "SDA",
  pin4: "SCL",
}

export const TMAG5273HallEffect = () => (
  <board>
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
      footprint="0402"
      name="R7"
      pcbX={7.239}
      pcbY={10.16}
      schX={-0.8}
      schY={-1}
      schRotation={90}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.Q1.gate,
      }}
    />

    <mosfet
      name="Q1"
      footprint="sot23"
      channelType="p"
      mosfetMode="enhancement"
      pcbRotation={180}
      pcbX={7.62}
      pcbY={7.62}
    />
    <trace from={sel.Q1.drain} to={sel.net.V3_3} />
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
      pcbX={12.522}
      pcbY={7.925}
      schX={4}
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
        TEST: sel.U1.GND,
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
      connection="U1.pin2"
      anchorSide="top"
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={12.7}
      pcbY={6.477}
      schX={7}
      schRotation="-90deg"
      connections={{
        pin1: sel.net().V3_3_SW,
        pin2: sel.net.GND,
      }}
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
      footprint="solderjumper3_briged123"
      bridgedPins={[["1", "2", "3"]]}
      pcbX={14.605}
      pcbY={1.81}
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
      footprint="0402"
      name="R2"
      pcbX={13.97}
      pcbY={10.5}
      schX={9}
      schY={-1}
      schRotation={90}
      connections={{
        pin1: sel.net.SDA,
      }}
    />

    <resistor
      resistance="2.2k"
      footprint="0402"
      name="R5"
      pcbX={13.97}
      pcbY={8.382}
      schX={11}
      schY={-1}
      schRotation={90}
      connections={{
        pin1: sel.net.SCL,
      }}
    />

    <schematictext
      text="0.1 Header"
      schX={-2}
      schY={-4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <jumper
      name="J3"
      footprint="pinrow6"
      pcbX={12.5}
      pcbY={-1.27}
      schX={-2}
      schY={-6}
      pcbRotation="0deg"
      connections={{
        pin3: sel.net.SDA,
        pin4: sel.net.SCL,
        pin5: sel.net().DISABLE,
        pin6: sel.net.INT,
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
      schX={-0.4}
      schY={-4.6}
      connection="J3.pin2"
      anchorSide="bottom"
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
      footprint="pinrow4"
      pcbX={2.699}
      pcbY={8.89}
      schX={3}
      schY={-6}
      pcbRotation="-90deg"
      pinLabels={jumperPinLabels}
      connections={{
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />
    <hole diameter="3.302mm" pcbX={2.54} pcbY={0.54} />
    <hole diameter="3.302mm"  pcbX={22.86} pcbY={0.54} />

    <netlabel
      net="GND"
      schX={5}
      schY={-6.5}
      connection="J1.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={5}
      schY={-5}
      connection="J1.pin2"
      anchorSide="bottom"
    />

    <jumper
      name="J2"
      footprint="pinrow4"
      pcbX={22.701}
      pcbY={8.89}
      schX={7}
      schY={-6}
      pcbRotation="-90deg"
      pinLabels={jumperPinLabels}
      connections={{
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />

    <netlabel
      net="GND"
      schX={9}
      schY={-6.5}
      connection="J2.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={9}
      schY={-5}
      connection="J2.pin2"
      anchorSide="bottom"
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
      footprint="0402"
      name="R3"
      pcbRotation={90}
      pcbX={19.796}
      pcbY={8.89}
      schX={12}
      schY={-6}
      schRotation={90}
      connections={{
        pin1: sel.D1.anode,
        pin2: sel.net().V3_3_SW,
      }}
    />
    <led
      name="D1"
      footprint="0603"
      color="red"
      pcbRotation={90}
      pcbX={17.399}
      pcbY={8.89}
      schX={12}
      schY={-7.5}
      schRotation={-90}
    />
    <solderjumper
      name="LED"
      footprint="solderjumper2_briged12"
      bridgedPins={[["1", "2"]]}
      pcbX={15.621}
      pcbY={5.223}
      schX={12}
      schY={-8.8}
      pinCount={2}
      schRotation={-90}
      connections={{
        pin1: sel.D1.cathode,
        pin2: sel.net.GND,
      }}
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
      footprint="solderjumper2_briged12"
      bridgedPins={[["1", "2"]]}
      pcbX={6.35}
      pcbY={1.556}
      schX={14.7}
      schY={-6}
      pinCount={2}
      schRotation={-90}
      connections={{
        pin1: sel.net().V3_3_SW,
        pin2: sel.R4.pin2,
      }}
    />
    <resistor
      resistance="10k"
      footprint="0402"
      name="R4"
      pcbX={11.2}
      pcbY={2.572}
      schX={14.7}
      schY={-7.5}
      schRotation={90}
    />
    <netlabel
      net="INT"
      schX={14.7}
      schY={-9}
      connection="R4.pin1"
      anchorSide="left"
    />
  </board>
)

export default TMAG5273HallEffect
