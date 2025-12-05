import { sel } from "tscircuit"
import { VEML6030 } from "./VEML6030"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { SM04B_SRSS_TB_LF__SN2 } from "./SM04B_SRSS_TB_LF__SN2"
const jumperPinLabels = {
  pin1: ["GND"],
  pin2: ["3V3"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["N_INT"],
}
export default () => (
  <board width="25.4mm" height="25.4mm">
    <VEML6030 name="U1" schY={1.5} pcbRotation={-90} />
    <SM04B_SRSS_TB_LF__SN
      name="J1"
      pcbX="9.7"
      pcbRotation={90}
      schX={8}
      schY={4}
    />
    <SM04B_SRSS_TB_LF__SN2
      name="J2"
      pcbX="-9.7"
      pcbRotation={-90}
      schX={8}
      schY={1.5}
    />
    <capacitor
      name="C1"
      schRotation={-90}
      schX={-2.5}
      schY={1.5}
      capacitance="0.1uF"
      footprint="cap0402"
      connections={{ pin1: sel.U1.pin6, pin2: sel.net().GND }}
    />
    <resistor
      name="R5"
      schRotation={90}
      schX={2.5}
      schY={2.5}
      resistance="10k"
      footprint="0402"
      connections={{ pin1: sel.net().N_INT, pin2: sel.U1.pin6 }}
    />
    <resistor
      name="R2"
      pcbRotation={-90}
      resistance="4.7k"
      footprint="0402"
      schX={8.75}
      schY={-6}
      schRotation={90}
      connections={{ pin2: sel.JP3.pin1 }}
    />
    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0402"
      connections={{ pin1: sel.net().ADDR, pin2: sel.net().V3_3 }}
      schRotation={90}
      schY={-6}
      schX={-7}
    />
    <resistor
      name="R1"
      pcbRotation={90}
      resistance="4.7k"
      footprint="0402"
      schX={7.25}
      schY={-6}
      schRotation={-90}
      connections={{ pin1: sel.JP3.pin3 }}
    />

    <resistor
      name="R4"
      resistance="1k"
      footprint="0603"
      pcbX={-10.109}
      pcbY={4.318}
      schY={-7.1}
      schX={-1.8}
      schRotation={90}
      connections={{ pin1: sel.D1.pin1, pin2: sel.JP1.pin1 }}
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={-10.236}
      pcbY={5.613}
      schRotation={-90}
      schY={-8.3}
      schX={-1.8}
    />
    <solderjumper
      name="JP1"
      connections={{ pin2: sel.net().V3_3 }}
      schRotation={90}
      schY={-6}
      schX={-1.8}
      bridgedPins={[["1", "2"]]}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      // pcbRotation={90}
      pcbX={-10.16}
      pcbY={3.81}
      layer="bottom"
    />
    <solderjumper
      name="JP2"
      connections={{ pin1: sel.net().ADDR }}
      // schRotation={90}
      schY={-8}
      schX={-5.8}
      bridgedPins={[["1", "2"]]}
      footprint="solderjumper2_12_p1.041_pw0.660_ph1.270"
      // pcbRotation={90}
      pcbX={-5.588}
      pcbY={-4.699}
      layer="bottom"
    />
    <solderjumper
      name="JP3"
      bridgedPins={[["1", "2", "3"]]}
      footprint="solderjumper3_bridged123_p1.041_pw0.660_ph1.270"
      schX={8}
      schY={-5}
      schRotation={180}
      pcbX={2.946}
      pcbY={-5.4}
      layer="bottom"
      connections={{ pin2: sel.net().V3_3 }}
    />
    <jumper
      name="J3"
      schWidth={0.7}
      schX={8}
      schY={-1}
      schDirection="left"
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["GND", "3V3", "SDA", "SCL", "N_INT"],
        },
      }}
      pinLabels={jumperPinLabels}
      footprint="pinrow5_id1.016_od1.88_nosquareplating_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel_pinlabelverticallyinverted"
      pcbY={-11.43}
    />
    <hole diameter={3.1} pcbX={10.16} pcbY={-10.16} />
    <hole diameter={3.1} pcbX={-10.16} pcbY={-10.16} />
    <hole diameter={3.1} pcbX={-10.16} pcbY={10.16} />
    <hole diameter={3.1} pcbX={10.16} pcbY={10.16} />
    <netlabel
      net="SDA"
      connection="R1.pin2"
      anchorSide="right"
      schX={6.8}
      schY={-6.9}
    />
    <netlabel
      net="SCL"
      connection="R2.pin1"
      anchorSide="left"
      schX={9.2}
      schY={-6.9}
    />

    <schematictext text="I2C Pull-Ups" fontSize={0.5} schX={8} schY={-3.5} />
    <schematictext
      text="Cut jumper to remove pull-up resistors."
      fontSize={0.2}
      schX={8}
      schY={-3.9}
    />
    <schematictext text="Power LED" fontSize={0.5} schX={-1.8} schY={-3.5} />
    <schematictext
      text="Cut jumper to turn off power LED."
      fontSize={0.2}
      schX={-1.8}
      schY={-3.9}
    />
    <schematictext text="Connectors" fontSize={0.5} schX={8} schY={5.5} />
    <schematictext
      text="Ambient Light Sensor-VEML6030"
      fontSize={0.5}
      schX={-1.8}
      schY={5.5}
    />
    <schematictext
      text="VC Range: 2.5V to 3.6V"
      fontSize={0.2}
      schX={-1.8}
      schY={5.1}
    />

    <schematictext text="Address" fontSize={0.5} schX={-6.8} schY={-3.5} />
    <schematictext
      text="7 bit IC2 Address"
      fontSize={0.2}
      schX={-6.8}
      schY={-3.9}
    />
    <schematictext
      text="Dafault Address: 0x48 (HIGH)"
      fontSize={0.2}
      schX={-6.8}
      schY={-4.1}
    />
    <schematictext
      text="Alternate: 0x10 (Close Jumper)"
      fontSize={0.2}
      schX={-6.8}
      schY={-4.3}
    />

    <silkscreentext text="Sparkfun" fontSize={2} pcbX={0} pcbY={9} />
    <silkscreentext text="Ambient Light Sensor" fontSize={1.2} pcbY={7} />
    <silkscreentext text="VEML6030" fontSize={1.2} pcbY={5} />
    <silkscreentext
      text="Sparkfun"
      fontSize={2}
      pcbX={0}
      pcbY={9}
      layer="bottom"
    />
    <silkscreentext
      text="Ambient Light Sensor"
      fontSize={1.2}
      pcbY={7}
      layer="bottom"
    />
    <silkscreentext text="VEML6030" fontSize={1.2} pcbY={5} layer="bottom" />
    <silkscreentext
      text="PC Address: 0x10"
      fontSize={0.8}
      pcbY={3}
      layer="bottom"
    />

    <silkscreentext text="qwiic" fontSize={1.2} pcbY={5} pcbX={-10} />
    <silkscreentext text="qwiic" fontSize={1.2} pcbY={5} pcbX={-10} />
    <silkscreentext text="PWR" fontSize={1.2} pcbY={-7.9} pcbX={-10} />
    <silkscreentext
      text="LED"
      layer="bottom"
      fontSize={1.2}
      pcbY={-3}
      pcbRotation={-90}
      pcbX={-10}
    />
    <silkscreentext
      text="I2C"
      layer="bottom"
      fontSize={1.2}
      pcbY={-5}
      pcbX={-1.5}
    />

    <netlabel
      net="SDA"
      connection="J1.pin3"
      anchorSide="right"
      schX={6.8}
      schY={4.1}
    />
    <netlabel
      net="SCL"
      connection="J1.pin4"
      anchorSide="right"
      schX={6.8}
      schY={4.3}
    />
    <netlabel
      net="SDA"
      connection="J2.pin3"
      anchorSide="right"
      schX={6.8}
      schY={1.6}
    />
    <netlabel
      net="SCL"
      connection="J2.pin4"
      anchorSide="right"
      schX={6.8}
      schY={1.8}
    />
    <netlabel
      net="SDA"
      connection="J3.pin3"
      anchorSide="right"
      schX={6.8}
      schY={-1}
    />
    <netlabel
      net="SCL"
      connection="J3.pin4"
      anchorSide="right"
      schX={6.8}
      schY={-0.8}
    />
    <netlabel
      net="N_INT"
      connection="J3.pin5"
      anchorSide="right"
      schX={6.8}
      schY={-0.6}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={7}
      schY={-0.6}
      connectsTo={sel.J3.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={7}
      schY={-1.45}
      connectsTo={sel.J3.pin1}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={7}
      schY={4.4}
      connectsTo={sel.J1.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={7}
      schY={3.6}
      connectsTo={sel.J1.pin1}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={7}
      schY={1.9}
      connectsTo={sel.J2.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={7}
      schY={1.1}
      connectsTo={sel.J2.pin1}
    />

    <netlabel
      net="SDA"
      connection="U1.pin2"
      anchorSide="left"
      schX={1.2}
      schY={1.8}
    />
    <netlabel
      net="SCL"
      connection="U1.pin5"
      anchorSide="left"
      schX={1.2}
      schY={1.6}
    />
    <netlabel
      net="ADDR"
      connection="U1.pin4"
      anchorSide="left"
      schX={1.2}
      schY={1.4}
    />
    <netlabel
      net="ADDR"
      connection="JP2.pin1"
      anchorSide="right"
      schY={-8}
      schX={-8}
    />
    <netlabel
      net="N_INT"
      connection="U1.pin3"
      anchorSide="left"
      schX={3.2}
      schY={1.2}
    />
    <netlabel
      net="GND"
      connection="U1.pin1"
      anchorSide="top"
      schX={-1.75}
      schY={0}
    />
    <netlabel
      net="GND"
      connection="D1.pin2"
      anchorSide="top"
      schX={-1.8}
      schY={-10}
    />
    <netlabel
      net="GND"
      connection="JP2.pin2"
      anchorSide="top"
      schX={-4.75}
      schY={-10}
    />
    <netlabel
      net="VCC"
      connection="U1.pin6"
      anchorSide="bottom"
      schX={-1.75}
      schY={3}
    />
    <copperpour connectsTo="net.GND" layer="top" />
    <copperpour connectsTo="net.GND" layer="bottom" />
  </board>
)
