import { sel } from "@tscircuit/core"
import { VL53L5CX } from "./VL53L5CX"
import { VL53L5CX_footprint, JST04_RA_1mm, footprint_0603 } from "./footprints"
// https://tscircuit.com/MustafaMulla29/sparkfun-VL535CX

const pinHeaderPinLabels = {
  pin1: "GND",
  pin2: "VCC",
  pin3: "SDA",
  pin4: "SCL",
}

export default () => (
  <board width="25.4mm" height="25.4mm" autorouter="auto-cloud">
    <schematictext
      text="VL53L5CX ToF Sensor Array"
      schX={7}
      schY={3}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <solderjumper
      name="JP8"
      footprint="solderjumper3_bridged123_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      layer="bottom"
      pcbX={-1.04}
      pcbY={-3.81}
      pinCount={3}
      pcbRotation={180}
      connections={{
        pin1: sel.net().VDDA,
        pin2: sel.net.V3_3,
        pin3: sel.net().VDDIO,
      }}
      schRotation="180deg"
    />
    <silkscreentext
      text="PSU"
      layer="bottom"
      pcbY={-5.95}
      anchorAlignment="center"
    />

    <schematictext
      text="PSU"
      schY={-0.6}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="Cut PSU jumper to"
      schY={-1}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="isolate power supplies"
      schY={-1.3}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <netlabel net="V3_3" schY={0.7} connection="JP8.pin2" anchorSide="bottom" />
    <netlabel
      net="VDDIO"
      schX={-0.7}
      schY={0.3}
      connection="JP8.pin3"
      anchorSide="bottom"
    />
    <netlabel
      net="VDDA"
      schX={0.7}
      schY={0.3}
      connection="JP8.pin1"
      anchorSide="bottom"
    />

    <solderjumper
      name="JP7"
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      layer="bottom"
      pinCount={2}
      pcbX={-9.65}
      pcbY={-4.826}
      schX={2.5}
      schRotation={90}
      connections={{
        pin2: sel.net.V3_3,
        pin1: sel.R3.pin2,
      }}
    />
    <netlabel
      net="V3_3"
      schX={2.5}
      schY={1}
      connection="JP7.pin2"
      anchorSide="bottom"
    />
    <silkscreentext text="LED" layer="bottom" pcbX={-10.2} pcbY={-6.3} />

    <schematictext
      text="PWR_LED"
      schY={0}
      schX={2.8}
      schRotation={-90}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <resistor
      resistance="1k"
      footprint={footprint_0603}
      name="R3"
      pcbX={-10.16}
      pcbY={-4.445}
      schX={2.5}
      schY={-1.8}
      schRotation={90}
      connections={{
        pin2: sel.JP7.pin1,
        pin1: sel.D1.pin1,
      }}
    />
    <led
      name="D1"
      footprint={footprint_0603}
      color="RED"
      pcbX={-10.16}
      pcbY={-6.096}
      schX={2.495}
      schY={-3.4}
      schRotation={-90}
      connections={{
        anode: sel.R3.pin1,
        cathode: sel.net.GND,
      }}
    />
    <silkscreentext text="PWR" layer="top" pcbX={-10.16} pcbY={-7} />

    <netlabel
      net="GND"
      schX={2.5}
      schY={-4.3}
      connection="D1.pin2"
      anchorSide="top"
    />
    <capacitor
      name="C1"
      capacitance="4.7uF"
      footprint={footprint_0603}
      pcbX={3.81}
      pcbY={-3.81}
      schX={4}
      schY={-3.3}
      schRotation="-90deg"
      connections={{
        pin1: sel.net().VDDA,
        pin2: sel.net.GND,
      }}
    />
    <netlabel
      net="GND"
      schX={4}
      schY={-4.3}
      connection="C1.pin2"
      anchorSide="top"
    />
    <netlabel
      net="VDDA"
      schX={4}
      schY={-2.2}
      connection="C1.pin1"
      anchorSide="bottom"
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint={footprint_0603}
      pcbX={0}
      pcbY={-3.81}
      schX={5}
      schY={-3.3}
      schRotation="-90deg"
      connections={{
        pin1: sel.net().VDDIO,
        pin2: sel.net.GND,
      }}
    />
    <netlabel
      net="GND"
      schX={5}
      schY={-4.3}
      connection="C4.pin2"
      anchorSide="top"
    />
    <netlabel
      net="VDDIO"
      schX={5}
      schY={-2.2}
      connection="C4.pin1"
      anchorSide="bottom"
    />
    <VL53L5CX
      name="U1"
      schX={10}
      schY={-4}
      schWidth={1.4}
      footprint={VL53L5CX_footprint}
      schPinStyle={{
        RSUD6: {
          bottomMargin: 0.2,
        },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["AUDD", "IOUDD", "RSUD6", "GND"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["I2C_RST", "N_LP", "INT", "SCL", "SDA"],
        },
      }}
      connections={{
        AUDD: sel.net().VDDA,
        IOUDD: sel.net().VDDIO,
        RSUD6: sel.R7.pin1,
        GND: sel.net.GND,
        I2C_RST: sel.net().RST,
        N_LP: sel.net().N_LP,
        INT: sel.net.INT,
        SCL: sel.net.SCL,
        SDA: sel.net.SDA,
      }}
    />
    <netlabel
      net="VDDA"
      schX={8.5}
      schY={-3.3}
      connection="U1.pin1"
      anchorSide="bottom"
    />
    <netlabel
      net="VDDIO"
      schX={7.9}
      schY={-3.3}
      connection="U1.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={8.5}
      schY={-4.7}
      connection="U1.pin4"
      anchorSide="top"
    />
    <resistor
      resistance="47k"
      footprint={footprint_0603}
      name="R7"
      pcbX={0}
      pcbY={3.81}
      pcbRotation={180}
      schX={6.8}
      schY={-2.8}
      schRotation={90}
      connections={{
        pin1: sel.U1.pin3,
        pin2: sel.net().VDDIO,
      }}
    />
    <netlabel
      net="VDDIO"
      schX={6.8}
      schY={-1.8}
      connection="R7.pin2"
      anchorSide="bottom"
    />
    <schematictext
      text="VCC: 2.5V-3.6V"
      schX={9}
      schY={-5.8}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="7-bit unshifted I2C address: 0x29"
      schX={8.5}
      schY={-6.1}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <netlabel
      net="RST"
      schX={12}
      schY={-4.4}
      connection="U1.pin5"
      anchorSide="left"
    />
    <netlabel
      net="N_LP"
      schX={12}
      schY={-4.2}
      connection="U1.pin6"
      anchorSide="left"
    />
    <netlabel
      net="INT"
      schX={12.7}
      schY={-4}
      connection="U1.pin7"
      anchorSide="left"
    />
    <netlabel
      net="SCL"
      schX={16.5}
      schY={-3.8}
      connection="U1.pin8"
      anchorSide="left"
    />
    <netlabel
      net="SDA"
      schX={16.5}
      schY={-3.6}
      connection="U1.pin9"
      anchorSide="left"
    />
    <resistor
      resistance="47k"
      footprint={footprint_0603}
      name="R6"
      pcbX={5.08}
      pcbRotation={90}
      schX={11.4}
      schY={-5.8}
      schRotation={90}
      connections={{
        pin2: sel.U1.pin5,
        pin1: sel.net.GND,
      }}
    />
    <netlabel
      net="GND"
      schX={11.4}
      schY={-6.9}
      connection="R6.pin1"
      anchorSide="top"
    />
    <resistor
      resistance="47k"
      footprint={footprint_0603}
      name="R2"
      pcbX={-3.81}
      pcbY={-3.81}
      schX={11.4}
      schY={-2.3}
      schRotation={90}
      connections={{
        pin1: sel.U1.pin6,
        pin2: sel.net().VDDIO,
      }}
    />
    <netlabel
      net="VDDIO"
      schX={11.4}
      schY={-1.2}
      connection="R2.pin2"
      anchorSide="bottom"
    />

    <solderjumper
      name="JP9"
      footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[["1", "2"]]}
      layer="bottom"
      pcbX={-9.65}
      pcbY={5.08}
      pinCount={2}
      schX={12.5}
      schY={-0.4}
      schRotation={90}
      connections={{
        pin2: sel.net().VDDIO,
        pin1: sel.R1.pin2,
      }}
    />
    <silkscreentext text="INT" layer="bottom" pcbX={-10.3} pcbY={7.5} />

    <netlabel
      net="VDDIO"
      schX={12.5}
      schY={0.9}
      connection="JP9.pin2"
      anchorSide="bottom"
    />
    <schematictext
      text="INT"
      schX={12.8}
      schY={-0.4}
      color="gray"
      anchor="center"
      schRotation={-90}
      fontSize={0.2}
    />
    <resistor
      resistance="47k"
      footprint={footprint_0603}
      name="R1"
      schX={12.5}
      pcbX={-5.08}
      pcbRotation={90}
      schY={-2.1}
      schRotation={90}
      connections={{
        pin2: sel.JP9.pin1,
        pin1: sel.U1.pin7,
      }}
    />
    <solderjumper
      name="I2C"
      footprint="solderjumper3_bridged123_p1.0414_pw0.6604_ph1.27"
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      layer="bottom"
      pcbX={9.84}
      pcbY={5.08}
      schX={14.625}
      schY={-0.7}
      pinCount={3}
      schRotation="180deg"
      connections={{
        pin1: sel.R5.pin2,
        pin2: sel.net().VDDIO,
        pin3: sel.R4.pin2,
      }}
    />
    <netlabel
      net="VDDIO"
      schX={14.625}
      schY={0.3}
      connection="I2C.pin2"
      anchorSide="bottom"
    />
    <resistor
      resistance="2.2k"
      footprint={footprint_0603}
      name="R4"
      pcbX={3.81}
      pcbY={3.81}
      schX={13.7}
      schY={-1.7}
      schRotation={90}
      connections={{
        pin1: sel.U1.pin9,
      }}
    />

    <resistor
      resistance="2.2k"
      footprint={footprint_0603}
      name="R5"
      pcbX={-3.81}
      pcbY={3.81}
      schX={15.5}
      schY={-1.7}
      pcbRotation={180}
      schRotation={90}
      connections={{
        pin1: sel.U1.pin8,
      }}
    />
    <schematictext
      text="Cut INT jumper to remove"
      schX={14}
      schY={1.7}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="pull-up from INT"
      schX={14}
      schY={1.5}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />

    <schematictext
      text="Cut I2C jumper to"
      schX={16}
      schY={0.5}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="remove pull-ups from bus"
      schX={16}
      schY={0.3}
      color="gray"
      anchor="center"
      fontSize={0.2}
    />

    <schematictext
      text="Connections"
      schX={1}
      schY={-10.3}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <pinheader
      name="J2"
      pinCount={4}
      footprint={JST04_RA_1mm}
      pcbRotation={270}
      gender="female"
      schFacingDirection="left"
      pinLabels={["GND", "VCC", "SDA", "SCL"]}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      schWidth={0.8}
      pitch="1mm"
      pcbX={-7.62}
      pcbY={0}
      schX={0.6}
      schY={-13}
      connections={{
        GND: sel.net.GND,
        VCC: sel.net.V3_3,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />
    <netlabel
      net="GND"
      schX={-0.6}
      schY={-14}
      connection="J2.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={-0.6}
      schY={-12}
      connection="J2.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={-1.2}
      schY={-12.9}
      connection="J2.pin3"
      anchorSide="right"
    />
    <netlabel
      net="SCL"
      schX={-1.2}
      schY={-12.7}
      connection="J2.pin4"
      anchorSide="right"
    />

    <pinheader
      name="J3"
      pinCount={4}
      footprint="pinrow4_p2.54_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal"
      gender="female"
      schFacingDirection="left"
      pinLabels={["GND", "VCC", "SDA", "SCL"]}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      pcbX={-2.568}
      pcbY={-11.43}
      schWidth={0.8}
      pitch="2.54mm"
      schX={4.3}
      schY={-13}
      connections={{
        GND: sel.net.GND,
        VCC: sel.net.V3_3,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />
    <netlabel
      net="GND"
      schX={3.1}
      schY={-14}
      connection="J3.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={3.1}
      schY={-12}
      connection="J3.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={2.5}
      schY={-12.9}
      connection="J3.pin3"
      anchorSide="right"
    />
    <netlabel
      net="SCL"
      schX={2.5}
      schY={-12.7}
      connection="J3.pin4"
      anchorSide="right"
    />

    <pinheader
      name="J4"
      pinCount={4}
      footprint={JST04_RA_1mm}
      pcbX={7.62}
      pcbY={0}
      pcbRotation={90}
      gender="female"
      schFacingDirection="left"
      pinLabels={["GND", "VCC", "SDA", "SCL"]}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      schWidth={0.8}
      pitch="1mm"
      schX={0.6}
      schY={-18}
      connections={{
        GND: sel.net.GND,
        VCC: sel.net.V3_3,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />
    <silkscreentext text="qwiic" layer="top" pcbX={10.3} pcbY={-4} />

    <netlabel
      net="GND"
      schX={-0.6}
      schY={-18.5}
      connection="J4.pin1"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={-0.6}
      schY={-17.5}
      connection="J4.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="SDA"
      schX={-1.2}
      schY={-17.9}
      connection="J4.pin3"
      anchorSide="right"
    />
    <netlabel
      net="SCL"
      schX={-1.2}
      schY={-17.7}
      connection="J4.pin4"
      anchorSide="right"
    />
    <pinheader
      name="J5"
      pinCount={1}
      footprint="pinrow1_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal"
      gender="female"
      schFacingDirection="left"
      schWidth={0.5}
      pcbX={3.81}
      pcbY={-11.43}
      schX={4.3}
      schY={-17}
      connections={{
        pin1: sel.net.INT,
      }}
    />
    <netlabel
      net="INT"
      schX={3.3}
      schY={-17}
      connection="J5.pin1"
      anchorSide="right"
    />

    <pinheader
      name="J1"
      pinCount={1}
      footprint="pinrow1_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignleft_pinlabelorthogonal"
      gender="female"
      schFacingDirection="left"
      schWidth={0.5}
      pcbX={2.54}
      pcbY={11.43}
      pitch="2.54mm"
      schX={4.3}
      schY={-18}
      connections={{
        pin1: sel.net().N_LP,
      }}
    />
    <netlabel
      net="N_LP"
      schX={3.3}
      schY={-18}
      connection="J1.pin1"
      anchorSide="right"
    />

    <pinheader
      name="J6"
      pinCount={1}
      footprint="pinrow1_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal"
      gender="female"
      schFacingDirection="left"
      schWidth={0.5}
      pitch="2.54mm"
      schX={4.3}
      schY={-19}
      pcbX={6.35}
      pcbY={-11.43}
      connections={{
        pin1: sel.net().RST,
      }}
    />
    <netlabel
      net="RST"
      schX={3.3}
      schY={-19}
      connection="J6.pin1"
      anchorSide="right"
    />

    <pinheader
      name="J7"
      pinCount={1}
      footprint="pinrow1_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignleft_pinlabelorthogonal"
      gender="female"
      schFacingDirection="left"
      schWidth={0.5}
      pitch="2.54mm"
      pcbX={0}
      pcbY={11.43}
      schX={6.3}
      schY={-17}
      connections={{
        pin1: sel.net().VDDIO,
      }}
    />
    <netlabel
      net="VDDIO"
      schX={5.4}
      schY={-16.7}
      connection="J7.pin1"
      anchorSide="bottom"
    />

    <pinheader
      name="J8"
      pinCount={1}
      footprint="pinrow1_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignleft_pinlabelorthogonal"
      gender="female"
      schFacingDirection="left"
      schWidth={0.5}
      pitch="2.54mm"
      pcbX={-2.54}
      pcbY={11.43}
      schX={6.3}
      schY={-18.4}
      connections={{
        pin1: sel.net().VDDA,
      }}
    />
    <netlabel
      net="VDDA"
      schX={5.4}
      schY={-18.1}
      connection="J8.pin1"
      anchorSide="bottom"
    />
    <hole diameter="3.302mm" pcbX={-10.16} pcbY={10.16} />
    <hole diameter="3.302mm" pcbX={10.16} pcbY={-10.16} />
    <hole diameter="3.302mm" pcbX={-10.16} pcbY={-10.16} />
    <hole diameter="3.302mm" pcbX={10.16} pcbY={10.16} />
  </board>
)
