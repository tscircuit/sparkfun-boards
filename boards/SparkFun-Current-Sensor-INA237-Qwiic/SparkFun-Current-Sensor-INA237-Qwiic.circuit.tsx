import { RedLedSymbol } from "./imports/RedLedSymbol"
import { Fragment } from "react"
import { SM04B_SRSS_TB_LF__SN_ } from "./imports/SM04B_SRSS_TB_LF__SN_"
import { A_1751251 } from "../SparkFun-Current-Sensor-INA228-Qwiic/imports/A_1751251"
import { sel } from "tscircuit"
import { INA237AIDGSR } from "./imports/INA237AIDGSR"

export default function SparkFunCurrentSensorINA237() {
  return (
    <board
      width={25.4}
      height={25.4}
      // Match the supplied KiCad project's 3 mil copper-to-edge rule.
      minBoardEdgeClearance={0.0762}
    >
      <schematicsection name="power_inputs" displayName="Power Inputs" />
      <schematicsection name="sensor" displayName="INA237 Current Sensor" />
      <schematicsection name="power_led" displayName="Power LED" />
      <schematicsection name="i2c_pullups" displayName="I²C Pull-ups" />
      <schematicsection name="address" displayName="I²C Address Jumpers" />
      <schematicsection name="connectors" displayName="Connectors" />

      <hole name="H1" diameter={3.1} pcbX={-10.16} pcbY={-10.16} />
      <hole name="H2" diameter={3.1} pcbX={10.16} pcbY={-10.16} />
      <hole name="H3" diameter={3.1} pcbX={-10.16} pcbY={10.16} />
      <hole name="H4" diameter={3.1} pcbX={10.16} pcbY={10.16} />

      <fiducial
        name="FID1"
        pcbX={12.065}
        pcbY={-12.065}
        padDiameter={0.5}
        soldermaskPullback={0.25}
        layer="bottom"
      />
      <fiducial
        name="FID2"
        pcbX={-12.065}
        pcbY={12.065}
        padDiameter={0.5}
        soldermaskPullback={0.25}
        layer="bottom"
      />
      <fiducial
        name="FID3"
        pcbX={-12.065}
        pcbY={12.065}
        padDiameter={0.5}
        soldermaskPullback={0.25}
      />
      <fiducial
        name="FID4"
        pcbX={12.065}
        pcbY={-12.065}
        padDiameter={0.5}
        soldermaskPullback={0.25}
      />

      <silkscreentext
        text="Current"
        layer="top"
        pcbX={8.5}
        pcbY={-6}
        fontSize={0.9}
        anchorAlignment="center"
      />
      <silkscreentext
        text="Sensor"
        layer="top"
        pcbX={8.5}
        pcbY={-7}
        fontSize={0.9}
        anchorAlignment="center"
      />
      <silkscreentext
        text="INA237"
        layer="top"
        pcbX={8.5}
        pcbY={-8}
        fontSize={0.9}
        anchorAlignment="center"
      />

      {["GND", "3V3", "SDA", "SCL", "ALERT"].map((label, index) => (
        <Fragment key={label}>
          <silkscreentext
            text={label}
            pcbX={-5.08 + index * 2.54}
            pcbY={-9.7}
            fontSize={0.55}
          />
        </Fragment>
      ))}
      {["IN+", "VBUS", "IN-"].map((label, index) => (
        <Fragment key={label}>
          <silkscreentext
            text={label}
            pcbX={3.5 - index * 3.5}
            pcbY={4.5}
            fontSize={0.7}
          />
        </Fragment>
      ))}
      <schematictable
        schX={12.5}
        schY={-1.5}
        borderWidth={0.03}
        fontSize={0.24}
        cellPadding={0.1}
      >
        <schematicrow height={0.55}>
          <schematiccell text="A1" />
          <schematiccell text="A0" />
          <schematiccell text="ADDR" />
        </schematicrow>
        <schematicrow height={0.55}>
          <schematiccell text="CLOSED" />
          <schematiccell text="CLOSED" />
          <schematiccell text="0x40" />
        </schematicrow>
        <schematicrow height={0.55}>
          <schematiccell text="CLOSED" />
          <schematiccell text="OPEN" />
          <schematiccell text="0x41" />
        </schematicrow>
        <schematicrow height={0.55}>
          <schematiccell text="OPEN" />
          <schematiccell text="CLOSED" />
          <schematiccell text="0x44" />
        </schematicrow>
        <schematicrow height={0.55}>
          <schematiccell text="OPEN" />
          <schematiccell text="OPEN" />
          <schematiccell text="0x45" />
        </schematicrow>
      </schematictable>

      <solderjumper
        name="JP1"
        footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
        pcbX={-6.8707}
        pcbY={-5.715}
        pcbRotation={180.0}
        layer="bottom"
        schSectionName="power_led"
        schX={-8}
        schY={2}
        schRotation={90}
        bridgedPins={[["1", "2"]]}
        pinCount={2}
        connections={{ pin1: sel.net().LED_JP, pin2: sel.net.VCC }}
      />
      <solderjumper
        name="JP2"
        footprint="solderjumper3_bridged123_p1.0414_pw0.6604_ph1.27"
        pcbX={0.0}
        pcbY={-6.1214}
        pcbRotation={270.0}
        layer="bottom"
        schSectionName="i2c_pullups"
        schX={-1}
        schY={2}
        schRotation={180}
        bridgedPins={[["1", "2", "3"]]}
        pinCount={3}
        connections={{
          pin1: sel.net().I2C_SDA_PU,
          pin2: sel.net.VCC,
          pin3: sel.net().I2C_SCL_PU,
        }}
      />
      <solderjumper
        name="JP7"
        footprint="solderjumper2_p0.8128_pw0.635_ph1.27"
        pcbX={1.3716}
        pcbY={11.6586}
        pcbRotation={180.0}
        layer="bottom"
        schSectionName="power_inputs"
        schX={-6}
        schY={7}
        schRotation={0}
        pinCount={2}
        connections={{ pin1: sel.net().VBUS, pin2: sel.net().IN_POS }}
      />

      <INA237AIDGSR
        name="U2"
        pcbX={0.0}
        pcbY={-2.2225}
        pcbRotation={0}
        layer="top"
        schSectionName="sensor"
        schX={5}
        schY={5}
        connections={{
          pin1: sel.net().A1,
          pin2: sel.net().A0,
          pin3: sel.net().ALERT,
          pin4: sel.net().SDA,
          pin5: sel.net().SCL,
          pin6: sel.net.VCC,
          pin7: sel.net.GND,
          pin8: sel.net().VBUS,
          pin9: sel.net().IN_NEG,
          pin10: sel.net().IN_POS,
        }}
      />

      <SM04B_SRSS_TB_LF__SN_
        name="J1"
        schWidth={1.3}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        pcbX={-9.84}
        pcbY={0.0}
        pcbRotation={-90.0}
        layer="top"
        schSectionName="connectors"
        schX={-7}
        schY={-6}
        pinLabels={{
          pin1: "GND",
          pin2: "VDD",
          pin3: "SDA",
          pin4: "SCL",
        }}
        connections={{
          GND: sel.net.GND,
          VDD: sel.net.VCC,
          SDA: sel.net().SDA,
          SCL: sel.net().SCL,
        }}
      />
      <SM04B_SRSS_TB_LF__SN_
        name="J2"
        schWidth={1.3}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        pcbX={9.84}
        pcbY={0.0}
        pcbRotation={90.0}
        layer="top"
        schSectionName="connectors"
        schX={-3}
        schY={-6}
        pinLabels={{
          pin1: "GND",
          pin2: "VDD",
          pin3: "SDA",
          pin4: "SCL",
        }}
        connections={{
          GND: sel.net.GND,
          VDD: sel.net.VCC,
          SDA: sel.net().SDA,
          SCL: sel.net().SCL,
        }}
      />

      <capacitor
        name="C4"
        footprint="0603"
        pcbX={4.445}
        pcbY={-2.2225}
        pcbRotation={90.0}
        layer="top"
        schSectionName="sensor"
        capacitance="0.1uF"
        schOrientation="vertical"
        schX={8}
        schY={5}
        connections={{ pin1: sel.net.VCC, pin2: sel.net.GND }}
      />

      <resistor
        name="R6"
        footprint="0603"
        pcbX={3.81}
        pcbY={-4.745}
        pcbRotation={0}
        layer="top"
        schSectionName="sensor"
        schX={7}
        schY={3.5}
        schRotation={90}
        resistance="2.2k"
        connections={{ pin1: sel.net().ALERT, pin2: sel.net.VCC }}
      />
      <resistor
        name="R4"
        footprint="0603"
        pcbX={0.0}
        pcbY={-4.7625}
        pcbRotation={0}
        layer="top"
        schSectionName="i2c_pullups"
        schX={-2}
        schY={0}
        schRotation={90}
        resistance="2.2k"
        connections={{ pin1: sel.net().SCL, pin2: sel.net().I2C_SCL_PU }}
      />
      <resistor
        name="R5"
        footprint="0603"
        pcbX={0.0}
        pcbY={-6.35}
        pcbRotation={0}
        layer="top"
        schSectionName="i2c_pullups"
        resistance="2.2k"
        schX={0}
        schY={0}
        schRotation={90}
        connections={{ pin1: sel.net().SDA, pin2: sel.net().I2C_SDA_PU }}
      />

      <resistor
        name="R7"
        footprint="0603"
        pcbX={-5.08}
        pcbY={-0.635}
        pcbRotation={180.0}
        layer="top"
        schSectionName="address"
        schX={5}
        schY={0}
        schRotation={90}
        resistance="100k"
        connections={{ pin1: sel.net().A1, pin2: sel.net.VCC }}
      />
      <resistor
        name="R1"
        footprint="0603"
        pcbX={-5.08}
        pcbY={-2.2225}
        pcbRotation={180.0}
        layer="top"
        schSectionName="address"
        schX={7}
        schY={0}
        schRotation={90}
        resistance="100k"
        connections={{ pin1: sel.net().A0, pin2: sel.net.VCC }}
      />
      <solderjumper
        name="JP6"
        footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
        pcbX={-2.6543}
        pcbY={-0.2925}
        pcbRotation={0.0}
        layer="bottom"
        schSectionName="address"
        schX={5}
        schY={-2}
        schRotation={90}
        bridgedPins={[["1", "2"]]}
        pinCount={2}
        connections={{ pin1: sel.net.GND, pin2: sel.net().A1 }}
      />
      <solderjumper
        name="JP5"
        footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
        pcbX={-2.6543}
        pcbY={-2.565}
        pcbRotation={0.0}
        layer="bottom"
        schSectionName="address"
        schX={7}
        schY={-2}
        schRotation={90}
        bridgedPins={[["1", "2"]]}
        pinCount={2}
        connections={{ pin1: sel.net.GND, pin2: sel.net().A0 }}
      />

      <resistor
        name="R2"
        footprint="2512"
        pcbX={0.0}
        pcbY={2.2225}
        pcbRotation={180.0}
        layer="top"
        schSectionName="power_inputs"
        schX={-8}
        schY={5}
        schRotation={90}
        resistance="15mΩ"
        connections={{ pin1: sel.net().SHUNT, pin2: sel.net().IN_NEG }}
      />
      <resistor
        name="R8"
        footprint="0603"
        pcbX={-8}
        pcbY={4.4}
        pcbRotation={0}
        layer="top"
        schSectionName="power_inputs"
        schX={-6.46}
        schY={5}
        schRotation={90}
        resistance="10k"
        connections={{ pin1: sel.net().IN_NEG, pin2: sel.net().IN_POS }}
      />
      <solderjumper
        name="JP3"
        footprint="solderjumper2_bridged12_p1.0414_pw0.6604_ph1.27"
        pcbX={1.3843}
        pcbY={2.2225}
        pcbRotation={0.0}
        layer="bottom"
        schSectionName="power_inputs"
        schX={-4.64}
        schY={5}
        schRotation={0}
        bridgedPins={[["1", "2"]]}
        pinCount={2}
        connections={{ pin1: sel.net().SHUNT, pin2: sel.net().IN_POS }}
      />

      <resistor
        name="R3"
        footprint="0603"
        pcbX={-9.8425}
        pcbY={-6.35}
        pcbRotation={0}
        layer="top"
        schSectionName="power_led"
        resistance="4.7k"
        schX={-8}
        schY={0}
        schRotation={90}
        connections={{ pin1: sel.net().LED_D1, pin2: sel.net().LED_JP }}
      />
      <chip
        name="D1"
        symbol={<RedLedSymbol />}
        pinLabels={{ pin1: "K", pin2: "A" }}
        schPinArrangement={{ topSide: ["pin2"], bottomSide: ["pin1"] }}
        footprint="0603"
        pcbX={-9.8425}
        pcbY={-4.7625}
        pcbRotation={0}
        layer="top"
        schSectionName="power_led"
        schX={-8}
        schY={-2}
        schRotation={0}
        connections={{ pin1: sel.net.GND, pin2: sel.net().LED_D1 }}
      />
      <jumper
        name="J3"
        footprint="pinrow5_p2.54_id1.016_od1.8796_nosquareplating_nopinlabels"
        pcbX={0}
        pcbY={-11.43}
        pcbRotation={0}
        layer="top"
        schSectionName="connectors"
        schWidth={1.55}
        schX={1}
        schY={-6}
        schPinArrangement={{
          rightSide: {
            direction: "top-to-bottom",
            pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
          },
        }}
        pinLabels={{
          pin1: "GND",
          pin2: "VCC",
          pin3: "SDA",
          pin4: "SCL",
          pin5: "ALERT",
        }}
        connections={{
          pin1: sel.net.GND,
          pin2: sel.net.VCC,
          pin3: sel.net().SDA,
          pin4: sel.net().SCL,
          pin5: sel.net().ALERT,
        }}
      />
      <A_1751251
        name="J5"
        pcbX={0}
        pcbY={8.89}
        pcbRotation={180.0}
        layer="top"
        schSectionName="power_inputs"
        schX={-1.9}
        schY={5}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin1", "pin2", "pin3"],
          },
        }}
        connections={{
          pin1: sel.net().IN_POS,
          pin2: sel.net().VBUS,
          pin3: sel.net().IN_NEG,
        }}
      />
    </board>
  )
}
