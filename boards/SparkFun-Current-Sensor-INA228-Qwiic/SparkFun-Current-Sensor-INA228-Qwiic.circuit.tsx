import { SM04B_SRSS_TB_LF__SN_ } from "./imports/SM04B_SRSS_TB_LF__SN_"
import { sel } from "tscircuit"
import { INA228AIDGST } from "./imports/INA228AIDGST"
import { A_1751251 } from "./imports/A_1751251"

export default () => {
  return (
    <board width={25.4} height={25.4}>
      <schematicsection name="power_inputs" displayName="Power Inputs" />
      <schematicsection name="sensor" displayName="INA228 Current Sensor" />
      <schematicsection name="power_led" displayName="Power LED" />
      <schematicsection name="i2c_pullups" displayName="I²C Pull-ups" />
      <schematicsection name="address" displayName="I²C Address Jumpers" />
      <schematicsection name="connectors" displayName="Connectors" />

      <hole name="H1" diameter={3.1} pcbX={-10.16} pcbY={-10.16} />
      <hole name="H2" diameter={3.1} pcbX={10.16} pcbY={-10.16} />
      <hole name="H3" diameter={3.1} pcbX={-10.16} pcbY={10.16} />
      <hole name="H4" diameter={3.1} pcbX={10.16} pcbY={10.16} />

      <silkscreentext
        text="Current"
        layer="top"
        pcbX={-8.5}
        pcbY={-6}
        fontSize={0.9}
        anchorAlignment="center"
      />
      <silkscreentext
        text="Sensor"
        layer="top"
        pcbX={-8.5}
        pcbY={-7}
        fontSize={0.9}
        anchorAlignment="center"
      />
      <silkscreentext
        text="INA2XX"
        layer="top"
        pcbX={-8.5}
        pcbY={-8}
        fontSize={0.9}
        anchorAlignment="center"
      />

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
        layer="bottom"
        schSectionName="power_led"
        schX={-8}
        schY={2}
        schRotation={90}
        pinCount={2}
        footprint="solderjumper2_p0.82_pw0.635_pl1.27"
        pcbX="8mm"
        pcbY="-2.5mm"
        connections={{ pin1: sel.net().LED_JP, pin2: sel.net.VCC }}
      />
      <solderjumper
        name="JP2"
        layer="bottom"
        schSectionName="i2c_pullups"
        schX={-1}
        schY={2}
        schRotation={180}
        pinCount={3}
        footprint="solderjumper3_bridged123_pw0.66_pl1.27_p1"
        pcbX="3.5mm"
        pcbY="2mm"
        connections={{
          pin1: sel.net().I2C_SDA_PU,
          pin2: sel.net.VCC,
          pin3: sel.net().I2C_SCL_PU,
        }}
      />
      <solderjumper
        name="JP7"
        layer="bottom"
        schSectionName="power_inputs"
        schX={-6}
        schY={7}
        schRotation={0}
        pinCount={2}
        footprint="solderjumper2_p0.82_pw0.635_pl1.27"
        pcbX="7mm"
        pcbY="7.5mm"
        connections={{ pin1: sel.net().VBUS, pin2: sel.net().IN_POS }}
      />

      <INA228AIDGST
        name="U1"
        layer="top"
        schSectionName="sensor"
        schX={5}
        schY={5}
        pcbX="0mm"
        pcbY="0mm"
        pcbRotation={-90}
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
        layer="top"
        schSectionName="connectors"
        schX={-7}
        schY={-6}
        pcbX="-10mm"
        pcbRotation={-90}
        connections={{
          GND: sel.net.GND,
          VDD: sel.net.VCC,
          SDA: sel.net().SDA,
          SCL: sel.net().SCL,
        }}
      />
      <SM04B_SRSS_TB_LF__SN_
        name="J2"
        layer="top"
        schSectionName="connectors"
        schX={-3}
        schY={-6}
        pcbX="10mm"
        pcbRotation={90}
        connections={{
          GND: sel.net.GND,
          VDD: sel.net.VCC,
          SDA: sel.net().SDA,
          SCL: sel.net().SCL,
        }}
      />

      <capacitor
        name="C4"
        layer="top"
        schSectionName="sensor"
        capacitance="0.1uF"
        footprint="0603"
        schOrientation="vertical"
        schX={8}
        schY={5}
        pcbX="-4.5mm"
        pcbY="3mm"
        pcbRotation={0}
        connections={{ pin1: sel.net.VCC, pin2: sel.net.GND }}
      />

      <resistor
        name="R6"
        layer="top"
        schSectionName="sensor"
        schX={7}
        schY={3.5}
        schRotation={90}
        resistance="2.2k"
        footprint="0603"
        pcbX="0mm"
        pcbY="3mm"
        pcbRotation={0}
        connections={{ pin1: sel.net().ALERT, pin2: sel.net.VCC }}
      />
      <resistor
        name="R4"
        layer="top"
        schSectionName="i2c_pullups"
        schX={-2}
        schY={0}
        schRotation={90}
        resistance="2.2k"
        footprint="0603"
        pcbX="5.31mm"
        pcbY="-5mm"
        pcbRotation={90}
        connections={{ pin1: sel.net().SCL, pin2: sel.net().I2C_SCL_PU }}
      />
      <resistor
        name="R5"
        layer="top"
        schSectionName="i2c_pullups"
        resistance="2.2k"
        footprint="0603"
        schX={0}
        schY={0}
        schRotation={90}
        pcbX="2.8mm"
        pcbY="-7.5mm"
        pcbRotation={90}
        connections={{ pin1: sel.net().SDA, pin2: sel.net().I2C_SDA_PU }}
      />

      <resistor
        name="R7"
        layer="top"
        schSectionName="address"
        schX={5}
        schY={0}
        schRotation={90}
        resistance="100k"
        footprint="0603"
        pcbX="-5.52mm"
        pcbY="-6.2mm"
        pcbRotation={90}
        connections={{ pin1: sel.net().A1, pin2: sel.net.VCC }}
      />
      <resistor
        name="R1"
        layer="top"
        schSectionName="address"
        schX={7}
        schY={0}
        schRotation={90}
        resistance="100k"
        footprint="0603"
        pcbX="-1.5mm"
        pcbY="-7.5mm"
        pcbRotation={90}
        connections={{ pin1: sel.net().A0, pin2: sel.net.VCC }}
      />
      <solderjumper
        name="JP6"
        layer="bottom"
        schSectionName="address"
        schX={5}
        schY={-2}
        schRotation={90}
        pinCount={2}
        footprint="solderjumper2_p0.82_pw0.635_pl1.27"
        pcbX="-5mm"
        pcbY="-8mm"
        connections={{ pin1: sel.net.GND, pin2: sel.net().A1 }}
      />
      <solderjumper
        name="JP5"
        layer="bottom"
        schSectionName="address"
        schX={7}
        schY={-2}
        schRotation={90}
        pinCount={2}
        footprint="solderjumper2_p0.82_pw0.635_pl1.27"
        pcbX="-1.5mm"
        pcbY="-8mm"
        connections={{ pin1: sel.net.GND, pin2: sel.net().A0 }}
      />

      <resistor
        name="R2"
        layer="top"
        schSectionName="power_inputs"
        schX={-8}
        schY={5}
        schRotation={90}
        resistance="15mΩ"
        footprint="2512"
        pcbX="-0.2mm"
        pcbY="-4mm"
        connections={{ pin1: sel.net().SHUNT, pin2: sel.net().IN_NEG }}
      />
      <resistor
        name="R8"
        layer="top"
        schSectionName="power_inputs"
        schX={-6}
        schY={5}
        schRotation={90}
        resistance="10k"
        footprint="0603"
        pcbX="-8mm"
        pcbY="7mm"
        pcbRotation={0}
        connections={{ pin1: sel.net().IN_NEG, pin2: sel.net().IN_POS }}
      />
      <solderjumper
        name="JP3"
        layer="bottom"
        schSectionName="power_inputs"
        schX={-4.74}
        schY={5}
        schRotation={0}
        pinCount={2}
        footprint="solderjumper2_p0.82_pw0.635_pl1.27"
        pcbX="-7mm"
        pcbY="5mm"
        connections={{ pin1: sel.net().SHUNT, pin2: sel.net().IN_POS }}
      />

      <resistor
        name="R3"
        layer="top"
        schSectionName="power_led"
        resistance="4.7k"
        footprint="0603"
        pcbX="8.3mm"
        pcbY="-5mm"
        pcbRotation={0}
        schX={-8}
        schY={0}
        schRotation={90}
        connections={{ pin1: sel.net().LED_D1, pin2: sel.net().LED_JP }}
      />
      <led
        name="D1"
        layer="top"
        schSectionName="power_led"
        color="red"
        footprint="led0603"
        pcbX="8mm"
        pcbY="-7.5mm"
        pcbRotation={0}
        schX={-8}
        schY={-2}
        schRotation={90}
        connections={{ pin1: sel.net.GND, pin2: sel.net().LED_D1 }}
      />
      <jumper
        name="J3"
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
        pcbX="0mm"
        pcbY="-10.8mm"
        footprint="pinrow5_nosquareplating"
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
        layer="top"
        schSectionName="power_inputs"
        schX={-2.26}
        schY={5}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin1", "pin2", "pin3"],
          },
        }}
        pcbX="0mm"
        pcbY="8.5mm"
        pcbRotation={180}
        connections={{
          pin1: sel.net().IN_POS,
          pin2: sel.net().VBUS,
          pin3: sel.net().IN_NEG,
        }}
      />
    </board>
  )
}
