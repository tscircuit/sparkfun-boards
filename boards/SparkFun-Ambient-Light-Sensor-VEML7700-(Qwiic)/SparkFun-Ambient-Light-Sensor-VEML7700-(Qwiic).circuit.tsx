import { sel } from "tscircuit"
import { VEML7700 } from "./VEML7700"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { SM04B_SRSS_TB_LF__SN2 } from "./SM04B_SRSS_TB_LF__SN2"

const jumperPinLabels = {
  pin1: ["GND"],
  pin2: ["3V3"],
  pin3: ["SDA"],
  pin4: ["SCL"],
}
export default () => (
  <board width="25.4mm" height="25.4mm">
    <VEML7700 name="U1" schY={1.5} />
    <SM04B_SRSS_TB_LF__SN
      name="JP1"
      pcbX="9.7"
      pcbRotation={90}
      schX={8}
      schY={4}
    />
    <SM04B_SRSS_TB_LF__SN2
      name="JP2"
      pcbX="-9.7"
      pcbRotation={-90}
      schX={8}
      schY={1.5}
    />
    <capacitor
      name="C1"
      pcbX={-1.57}
      pcbRotation={-90}
      schRotation={-90}
      pcbY={-3.08}
      schX={-3.3}
      schY={0.9}
      capacitance="2.2uF"
      footprint="cap0402"
      connections={{ pin1: sel.U1.pin2, pin2: sel.net().GND }}
    />
    <capacitor
      name="C2"
      pcbY={-3.08}
      pcbRotation={-90}
      capacitance="0.1uF"
      footprint="cap0402"
      schRotation={-90}
      schX={-2.5}
      schY={0.9}
      connections={{ pin1: sel.U1.pin2, pin2: sel.net().GND }}
    />
    <resistor
      name="R1"
      pcbX={-2.54}
      pcbY={-3.08}
      pcbRotation={-90}
      resistance="4.7"
      footprint="0402"
      schX={-5}
      schY={2.4}
      schRotation={90}
      connections={{ pin1: sel.U1.pin2, pin2: sel.net().V3_3 }}
    />
    <resistor
      name="R2"
      pcbX={2.54}
      pcbY={-3.08}
      pcbRotation={-90}
      resistance="2.2k"
      footprint="0402"
      schX={8.75}
      schY={-6}
      schRotation={90}
      connections={{ pin2: sel.JP4.pin1 }}
    />
    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0402"
      pcbX={-9.843}
      pcbY={-4.762}
      connections={{ pin1: sel.D1.pin1, pin2: sel.JP3.pin1 }}
      schRotation={90}
      schY={-7.1}
      schX={-1.8}
    />
    <resistor
      name="R6"
      pcbX={1.27}
      pcbY={-3.08}
      pcbRotation={90}
      resistance="2.2k"
      footprint="0402"
      schX={7.25}
      schY={-6}
      schRotation={-90}
      connections={{ pin1: sel.JP4.pin3 }}
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={-9.843}
      pcbY={-6.6}
      schRotation={-90}
      schY={-8.3}
      schX={-1.8}
      connections={{ pin2: sel.net().GND }}
    />
    <solderjumper
      name="JP3"
      connections={{ pin2: sel.net().V3_3 }}
      schRotation={90}
      schY={-6}
      schX={-1.8}
      bridgedPins={[["1", "2"]]}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      pcbRotation={-90}
      pcbX={-9.843}
      pcbY={-6.2}
      layer="bottom"
    />
    <solderjumper
      name="JP4"
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
      name="JP5"
      schWidth={0.7}
      schX={8}
      schY={-1}
      schDirection="left"
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["GND", "3V3", "SDA", "SCL"],
        },
      }}
      pinLabels={jumperPinLabels}
      footprint="pinrow4_id1.016_od1.88_nosquareplating_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel_pinlabelverticallyinverted"
      pcbY={-11.43}
    />
    <hole diameter={3.1} pcbX={10.16} pcbY={-10.16} />
    <hole diameter={3.1} pcbX={-10.16} pcbY={-10.16} />
    <hole diameter={3.1} pcbX={-10.16} pcbY={10.16} />
    <hole diameter={3.1} pcbX={10.16} pcbY={10.16} />
    <netlabel
      net="SDA"
      connection="R6.pin2"
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
      text="Ambient Light Sensor-VEML7700"
      fontSize={0.5}
      schX={-1.8}
      schY={5.5}
    />
    <schematictext
      text="7-bit Unshifted Address: 0x10"
      fontSize={0.2}
      schX={-1.8}
      schY={5.1}
    />

    <silkscreentext text="Sparkfun" fontSize={2} pcbX={0} pcbY={9} />
    <silkscreentext text="Ambient Light Sensor" fontSize={1.2} pcbY={7} />
    <silkscreentext text="VEML7700" fontSize={1.2} pcbY={5} />
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
    <silkscreentext text="VEML7700" fontSize={1.2} pcbY={5} layer="bottom" />
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
      connection="JP1.pin3"
      anchorSide="right"
      schX={6.8}
      schY={4.1}
    />
    <netlabel
      net="SCL"
      connection="JP1.pin4"
      anchorSide="right"
      schX={6.8}
      schY={4.3}
    />
    <netlabel
      net="SDA"
      connection="JP2.pin3"
      anchorSide="right"
      schX={6.8}
      schY={1.6}
    />
    <netlabel
      net="SCL"
      connection="JP2.pin4"
      anchorSide="right"
      schX={6.8}
      schY={1.8}
    />
    <netlabel
      net="SDA"
      connection="JP5.pin3"
      anchorSide="right"
      schX={6.8}
      schY={-0.9}
    />
    <netlabel
      net="SCL"
      connection="JP5.pin4"
      anchorSide="right"
      schX={6.8}
      schY={-0.7}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={7}
      schY={-0.6}
      connectsTo={sel.JP5.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={7}
      schY={-1.4}
      connectsTo={sel.JP5.pin1}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={7}
      schY={4.4}
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={7}
      schY={3.6}
      connectsTo={sel.JP1.pin1}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={7}
      schY={1.9}
      connectsTo={sel.JP2.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={7}
      schY={1.1}
      connectsTo={sel.JP2.pin1}
    />

    <netlabel
      net="SDA"
      connection="U1.pin4"
      anchorSide="left"
      schX={1.2}
      schY={1.6}
    />
    <netlabel
      net="SCL"
      connection="U1.pin1"
      anchorSide="left"
      schX={1.2}
      schY={1.4}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-1.1}
      schY={1.1}
      connectsTo={sel.U1.pin3}
    />
  </board>
)
