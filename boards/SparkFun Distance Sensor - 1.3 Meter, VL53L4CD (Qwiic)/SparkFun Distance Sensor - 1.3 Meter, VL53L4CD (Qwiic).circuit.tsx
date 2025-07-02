import { VL53L4EDV0DH_1 } from "./VL53L4EDV0DH_1"
import { sel } from "@tscircuit/core"
import { JST04_1MM_RA } from "./jumperFootprint"

const DistanceSensor = () => (
  <board width={25.4} height={25.4}>
    <VL53L4EDV0DH_1
      name="U1"
      schPinArrangement={{
        leftSide: {
          pins: ["pin11", "pin3"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["pin5", "pin9", "pin10", "pin7", "pin8"],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        pin3: {
          marginTop: 0.6,
        },
      }}
      connections={{
        N_SHUT: sel.R2.pin1,
        N_INT: sel.R1.pin1,
        SDA: sel.R4.pin1,
        SCL: sel.R5.pin1,
      }}
    />
    <netlabel
      schX={-1.3}
      schY={0.7}
      net="V3_3"
      connection="U1.pin11"
      anchorSide="bottom"
    />
    <netlabel
      schX={-1.3}
      schY={-0.7}
      anchorSide="top"
      net="GND"
      connection="U1.pin3"
    />
    <netlabel
      schX={5.5}
      schY={0.4}
      net="N_SHUT"
      anchorSide="left"
      connection="U1.pin5"
    />
    <netlabel
      schX={5.5}
      schY={0.2}
      net="SDA"
      anchorSide="left"
      connection="U1.pin9"
    />
    <netlabel
      schX={5.5}
      schY={0}
      net="SCL"
      anchorSide="left"
      connection="U1.pin10"
    />
    <netlabel
      schX={5.5}
      schY={-0.2}
      net="N_INT"
      anchorSide="left"
      connection="U1.pin7"
    />
    <netlabel
      schX={1}
      schY={2.4}
      net="V3_3"
      connection="R2.pin2"
      anchorSide="bottom"
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R2"
      pcbX={-2.032}
      pcbY={-3.81}
      schX="1"
      schY="1.6"
      schRotation={90}
    />
    <netlabel
      schX={2}
      schY={3.7}
      net="V3_3"
      connection="INT.pin2"
      anchorSide="bottom"
    />
    <solderjumper
      name="INT"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      schX={2}
      schY={3}
      schRotation={90}
      connections={{
        pin1: "R1.pin2",
      }}
      pcbX="-4.699"
      pcbY="0"
      pcbRotation="-90"
      layer="bottom"
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R1"
      pcbX="-4.699"
      pcbY="0"
      pcbRotation="90"
      schX={2}
      schY={1.6}
      schRotation={90}
    />
    <solderjumper
      name="I2C"
      pinCount={3}
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      footprint="solderjumper3_bridged123_p1.0414_pw0.6604_ph1.27"
      layer="bottom"
      schY={2.809}
      schX={4}
      schRotation={180}
      pcbY="5.08"
    />
    <resistor
      resistance="2.2k"
      name="R4"
      footprint="0603"
      schY={1.6}
      schX={3}
      schRotation={90}
      pcbX="-1.27"
      pcbY="5.207"
      pcbRotation="90"
      connections={{
        pin2: "I2C.pin3",
      }}
    />
    <resistor
      resistance="2.2k"
      name="R5"
      footprint="0603"
      schY={1.6}
      schX={5}
      schRotation={90}
      pcbX="1.27"
      pcbY="5.207"
      pcbRotation="90"
      connections={{
        pin2: "I2C.pin1",
      }}
    />
    <netlabel
      schX={4}
      schY={3.3}
      net="V3_3"
      connection="I2C.pin2"
      anchorSide="bottom"
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0603"
      schRotation={90}
      schX={-2.5}
      schY={0}
      pcbX="5.08"
      pcbRotation="-90"
    />
    <netlabel
      schX={-2.5}
      schY={0.7}
      net="V3_3"
      connection="C4.pin2"
      anchorSide="bottom"
    />
    <netlabel
      schX={-2.5}
      schY={-0.7}
      net="GND"
      connection="C4.pin1"
      anchorSide="top"
    />
    <capacitor
      name="C1"
      capacitance={"4.7uF"}
      footprint={"0603"}
      schRotation={90}
      schX={-3.7}
      schY={0}
      pcbX="2.159"
      pcbY="-3.81"
      pcbRotation="0"
    />
    <netlabel
      schX={-3.7}
      schY={0.7}
      net="V3_3"
      connection="C1.pin2"
      anchorSide="bottom"
    />
    <netlabel
      schX={-3.7}
      schY={-0.7}
      net="GND"
      connection="C1.pin1"
      anchorSide="top"
    />

    <netlabel
      schX={0.4}
      schY={-5.2}
      net="V3_3"
      anchorSide="bottom"
      connection={sel.R3.pin2}
    />
    <resistor
      resistance="1k"
      footprint="0603"
      name="R3"
      schX={0.4}
      schY={-6}
      pcbX="-9.652"
      pcbY="-5.588"
      pcbRotation="90"
      schRotation={90}
      connections={{
        pin1: sel.D1.pin1,
      }}
    />
    <led
      name="D1"
      footprint="0603"
      schRotation={270}
      schX={0.395}
      schY={-7.4}
      color="red"
      schDisplayValue="RED"
      pcbX="-11.43"
      pcbY="-5.715"
      pcbRotation="90"
    />
    <solderjumper
      name="PWR"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      schY={-8.8}
      schX={0.4}
      schRotation={90}
      layer="bottom"
      connections={{
        pin2: sel.D1.pin2,
      }}
      pcbX="-10.668"
      pcbY="-5.715"
    />
    <netlabel
      schX={0.4}
      schY={-9.405}
      net="GND"
      anchorSide="top"
      connection="PWR.pin1"
    />

    <pinheader
      name="J7"
      pinCount={6}
      footprint="pinrow6_p2.54_id1.016_od1.88_nosquareplating_female"
      gender="female"
      pitch="2.54mm"
      schX={-3.5}
      schY={-5}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      pcbY="-11.43"
      schFacingDirection="left"
    />
    <netlabel
      schX={-4.5}
      schY={-4.5}
      net="N_SHUT"
      anchorSide="right"
      connection="J7.pin6"
    />
    <netlabel
      schX={-4.5}
      schY={-4.7}
      net="N_INT"
      anchorSide="right"
      connection="J7.pin5"
    />
    <netlabel
      schX={-4.5}
      schY={-4.9}
      net="SCL"
      anchorSide="right"
      connection="J7.pin4"
    />
    <netlabel
      schX={-4.5}
      schY={-5.1}
      net="SDA"
      anchorSide="right"
      connection="J7.pin3"
    />
    <netlabel
      schX={-4.3}
      schY={-4}
      net="V3_3"
      anchorSide="bottom"
      connection="J7.pin2"
    />
    <netlabel
      schX={-4.3}
      schY={-5.8}
      net="GND"
      anchorSide="top"
      connection="J7.pin1"
    />

    <jumper
      name="J2"
      manufacturerPartNumber="QWIIC_RIGHT_ANGLE"
      footprint={JST04_1MM_RA}
      schX={-7}
      schY={-5}
      pinLabels={{ 1: "GND", 2: "VCC", 3: "SDA", 4: "SCL" }}
      schDirection="left"
      pcbX="-7.62"
      pcbRotation="-90"
      schPortArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      schWidth="1"
    />
    <netlabel
      schX={-8.5}
      schY={-4.699}
      net="SCL"
      anchorSide="right"
      connection="J2.pin4"
    />
    <netlabel
      schX={-8.5}
      schY={-4.9}
      net="SDA"
      anchorSide="right"
      connection="J2.pin3"
    />
    <netlabel
      schX={-8.3}
      schY={-4.4}
      net="V3_3"
      anchorSide="bottom"
      connection="J2.pin2"
    />
    <netlabel
      schX={-8.3}
      schY={-5.6}
      net="GND"
      anchorSide="top"
      connection="J2.pin1"
    />

    <jumper
      name="J4"
      footprint={JST04_1MM_RA}
      manufacturerPartNumber="QWIIC_RIGHT_ANGLE"
      schX={-7}
      schY={-7.9}
      pinLabels={{ 1: "GND", 2: "VCC", 3: "SDA", 4: "SCL" }}
      schDirection="left"
      pcbX="7.62"
      pcbRotation="90"
      schPortArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      schWidth="1"
    />
    <netlabel
      schX={-8.5}
      schY={-7.599}
      net="SCL"
      anchorSide="right"
      connection="J4.pin4"
    />
    <netlabel
      schX={-8.5}
      schY={-7.8}
      net="SDA"
      anchorSide="right"
      connection="J4.pin3"
    />
    <netlabel
      schX={-8.3}
      schY={-7.3}
      net="V3_3"
      anchorSide="bottom"
      connection="J4.pin2"
    />
    <netlabel
      schX={-8.3}
      schY={-8.5}
      net="GND"
      anchorSide="top"
      connection="J4.pin1"
    />
    <schematictext
      text="Connectors"
      schX={-6}
      schY={-2.5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Distance Sensor: VL53L4CX"
      schX={0.8}
      schY={5.8}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="VCC Range: 2.3V-3.5V"
      schX={0.8}
      schY={5.4}
      color="grey"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="Clear INT jumper to remove pullup"
      schX={2.6}
      schY={5}
      color="grey"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="resistors."
      schX={1.4}
      schY={4.8}
      color="grey"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="7-bit unshifted I2C address: 0*29"
      schX={0.4}
      schY={-2}
      color="grey"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="Clear Jumper to remove"
      schX={5.8}
      schY={3.5}
      color="grey"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="I2C from Pull-ups from bus"
      schX={5.95}
      schY={3.2}
      color="grey"
      anchor="center"
      fontSize={0.2}
    />
    <hole diameter="3.302mm" name="JP3" pcbX={-10.16} pcbY={10.16} />
    <hole diameter="3.302mm" name="JP4" pcbX={10.16} pcbY={10.16} />
    <hole diameter="3.302mm" name="JP7" pcbX={-10.16} pcbY={-10.16} />
    <hole diameter="3.302mm" name="JP8" pcbX={10.16} pcbY={-10.16} />
  </board>
)

export default DistanceSensor
