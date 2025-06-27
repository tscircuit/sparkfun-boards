import { STHS34PF80 } from "./STHS34PF80"
import { jstsh4_ra_1mm } from "./jumperFootprint"
import { sel } from "@tscircuit/core"

const MotionSensor = () => (
  <board width="25.4mm" height="25.4mm">
    <STHS34PF80
      name="U2"
      schX={-2}
      schY={1.5}
      connections={{
        pin4: sel.net.SDA,
        pin1: sel.net.SCL,
        INT: sel.net.INT,
        N_CS: sel.net.N_CS,
      }}
      pcbRotation={270}
    />
    <netlabel
      schX={-3.5}
      schY={1}
      anchorSide="top"
      net="GND"
      connection="U2.pin7"
    />
    <netlabel
      schX={-3.5}
      schY={2}
      net="V3_3"
      connection="U2.pin6"
      anchorSide="bottom"
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0603"
      schRotation={90}
      schX={-4.5}
      schY={1.3}
      pcbX="-5.08"
      pcbY="3.81"
      connections={{
        pin1: "net.GND",
        pin2: "net.V3_3",
      }}
    />
    <capacitor
      name="C1"
      capacitance={"0.1uF"}
      footprint={"0603"}
      schRotation={90}
      schX={-5.5}
      schY={1.3}
      pcbX="5.08"
      pcbRotation="90"
      connections={{
        pin1: "net.GND",
        pin2: "net.V3_3",
      }}
    />
    <net name="GND" />
    <net name="V3_3" />
    <solderjumper
      name="JP1"
      pinCount={3}
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      footprint="solderjumper3_bridged123_p1.041_pw0.660_ph1.270"
      layer="bottom"
      schY={2}
      schX={2.5}
      schRotation={180}
      pcbY="-3.81"
    />
    <resistor
      resistance="2.2k"
      name="R1"
      footprint="0603"
      schY={1}
      schX={1.8}
      schRotation={90}
      pcbX="2.54"
      pcbY="-5.08"
      pcbRotation="180"
      connections={{
        pin2: "JP1.pin3",
      }}
    />
    <resistor
      resistance="2.2k"
      name="R2"
      footprint="0603"
      schY={1}
      schX={3.2}
      schRotation={90}
      pcbX="-2.54"
      pcbY="-5.08"
      connections={{
        pin2: "JP1.pin1",
      }}
    />
    <netlabel
      schX={2.1}
      schY={0.45}
      net="SDA"
      connection="R1.pin1"
      anchorSide="left"
    />
    <netlabel
      schX={3.5}
      schY={0.45}
      net="SCL"
      connection="R2.pin1"
      anchorSide="left"
    />
    <netlabel
      schX={2.5}
      schY={2.5}
      net="V3_3"
      connection="JP1.pin2"
      anchorSide="bottom"
    />
    <resistor
      resistance="1k"
      footprint="0603"
      name="R3"
      schX={6.5}
      schY={1.8}
      schRotation={90}
      pcbX="-5.08"
      pcbRotation="270"
      connections={{
        pin1: "D1.pin1",
      }}
    />
    <led
      name="D1"
      footprint="0603"
      schRotation={270}
      schY={0.5}
      schX={6.5}
      color="red"
      schDisplayValue="Red"
      pcbX="-10.16"
      pcbY="5.715"
      pcbRotation="180"
    />
    <netlabel
      schX={6.5}
      schY={2.5}
      net="V3_3"
      connection="R3.pin2"
      anchorSide="bottom"
    />
    <solderjumper
      name="JP3"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      bridgedPins={[["1", "2"]]}
      schX={6.5}
      schY={-0.7}
      schRotation={90}
      pcbX="-10.16"
      pcbY="3.81"
      layer="bottom"
      connections={{
        pin2: "D1.pin2",
      }}
    />
    <netlabel
      schX={6.5}
      schY={-1.3}
      net="GND"
      anchorSide="top"
      connection="JP3.pin1"
    />

    <netlabel
      schX={9.5}
      schY={2.5}
      net="V3_3"
      connection="JP2.pin2"
      anchorSide="bottom"
    />
    <solderjumper
      name="JP2"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      bridgedPins={[["1", "2"]]}
      schX={9.5}
      schY={1.8}
      schRotation={90}
      connections={{
        pin1: "R4.pin2",
      }}
      pcbX="10.16"
      pcbY="3.81"
      layer="bottom"
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R4"
      pcbX="5.08"
      pcbY="3.81"
      schX={9.5}
      schY={0.5}
      schRotation={90}
    />
    <netlabel
      schX={10}
      schY={-0.45}
      net="INT"
      anchorSide="left"
      connection="R4.pin1"
    />

    <netlabel
      schX={9.5}
      schY={-4}
      net="V3_3"
      connection="JP4.pin2"
      anchorSide="bottom"
    />
    <solderjumper
      name="JP4"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      bridgedPins={[["1", "2"]]}
      schX={9.5}
      schY={-4.8}
      schRotation={90}
      connections={{
        pin1: "R5.pin2",
      }}
      pcbX={-10.16}
      pcbY={0}
      pcbRotation={0}
      layer="bottom"
    />
    <resistor
      resistance="10k"
      footprint="0603"
      name="R5"
      pcbY="3.81"
      pcbRotation="180"
      schX={9.5}
      schY={-6.1}
      schRotation={90}
    />
    <netlabel
      schX={10}
      schY={-7}
      net="N_CS"
      anchorSide="left"
      connection="R5.pin1"
    />

    <jumper
      name="J2"
      footprint={jstsh4_ra_1mm}
      schX={3.5}
      schY={-5}
      pinLabels={{ 1: "GND", 2: "VCC", 3: "SDA", 4: "SCL" }}
      pcbX="-7.62"
      pcbRotation="270"
    />
    <netlabel
      schX={5}
      schY={-4.699}
      net="SCL"
      anchorSide="left"
      connection="J2.pin4"
    />
    <netlabel
      schX={5}
      schY={-4.9}
      net="SDA"
      anchorSide="left"
      connection="J2.pin3"
    />
    <netlabel
      schX={4.8}
      schY={-4.4}
      net="V3_3"
      anchorSide="bottom"
      connection="J2.pin2"
    />
    <netlabel
      schX={4.8}
      schY={-5.6}
      net="GND"
      anchorSide="top"
      connection="J2.pin1"
    />

    <jumper
      name="J1"
      footprint={jstsh4_ra_1mm}
      schX={0}
      schY={-5}
      pinLabels={{ 1: "GND", 2: "VCC", 3: "SDA", 4: "SCL" }}
      pcbX="7.62"
      pcbRotation="90"
    />
    <netlabel
      schX={1.5}
      schY={-4.699}
      net="SCL"
      anchorSide="left"
      connection="J1.pin4"
    />
    <netlabel
      schX={1.5}
      schY={-4.9}
      net="SDA"
      anchorSide="left"
      connection="J1.pin3"
    />
    <netlabel
      schX={1.3}
      schY={-4.4}
      net="V3_3"
      anchorSide="bottom"
      connection="J1.pin2"
    />
    <netlabel
      schX={1.3}
      schY={-5.6}
      net="GND"
      anchorSide="top"
      connection="J1.pin1"
    />
    <pinheader
      name="J3"
      pinCount={6}
      footprint="pinrow6__p2.54_id1.016_od1.88_nosquareplating"
      gender="female"
      pitch="2.54mm"
      schX={-3.5}
      schY={-5}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      pcbY="-11.43"
    />
    <netlabel
      schX={-2.5}
      schY={-4.5}
      net="INT"
      anchorSide="left"
      connection="J3.pin6"
    />
    <netlabel
      schX={-2.5}
      schY={-4.7}
      net="N_CS"
      anchorSide="left"
      connection="J3.pin5"
    />
    <netlabel
      schX={-2.5}
      schY={-4.9}
      net="SCL"
      anchorSide="left"
      connection="J3.pin4"
    />
    <netlabel
      schX={-2.5}
      schY={-5.1}
      net="SDA"
      anchorSide="left"
      connection="J3.pin3"
    />
    <netlabel
      schX={-2.7}
      schY={-4.4}
      net="V3_3"
      anchorSide="bottom"
      connection="J3.pin2"
    />
    <netlabel
      schX={-2.7}
      schY={-5.6}
      net="GND"
      anchorSide="top"
      connection="J3.pin1"
    />

    <hole diameter="3.302mm" name="H1" pcbX={-10.16} pcbY={10.16} />
    <hole diameter="3.302mm" name="H2" pcbX={10.16} pcbY={10.16} />
    <hole diameter="3.302mm" name="H3" pcbX={-10.16} pcbY={-10.16} />
    <hole diameter="3.302mm" name="H4" pcbX={10.16} pcbY={-10.16} />

    <schematictext
      text="Infrared Presence Sensor - STHS34PF80"
      schX={-2.5}
      schY={4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="IÂ²C Pullup"
      schX={2.5}
      schY={4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Power LED"
      schX={6.5}
      schY={4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="INT Pullup"
      schX={9.5}
      schY={4}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="0.1'' Header"
      schX={-2.8}
      schY={-3}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Qwiic Connectors"
      schX={2.4}
      schY={-3}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="N_CS Pullup"
      schX={9.5}
      schY={-2.6}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
  </board>
)

export default MotionSensor
