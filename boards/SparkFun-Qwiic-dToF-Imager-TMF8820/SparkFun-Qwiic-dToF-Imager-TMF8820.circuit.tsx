import { sel } from "tscircuit"
import { TMF8820_1AM } from "./TMF8820_1AM"
import { SM04B_SRSS_TB_LF__SN } from "../SparkFun-Qwiic-Adapter/SM04B_SRSS_TB_LF__SN"

export default () => (
  <board width="25.4mm" height="25.4mm">
    <TMF8820_1AM name="U1" schX={0} schY={0} pcbRotation={-90} />
    <netlabel
      net="N_INT"
      schX={1.5}
      schY={0.4}
      connection="R1.pin1"
      anchorSide="left"
    />
    <resistor
      name="R1"
      connections={{ pin1: sel.U1.pin4, pin2: sel.net.V3_3 }}
      resistance="10k"
      schX={1.3}
      schY={1.3}
      schRotation={90}
      pcbX={-4.445}
      pcbY={-5.08}
      pcbRotation={90}
      footprint="0402"
    />
    <resistor
      name="R2"
      resistance="10k"
      pcbX={4.445}
      pcbY={-5.08}
      schX={-2.5}
      schY={1}
      footprint="0402"
      schRotation={90}
      pcbRotation={90}
      connections={{ pin2: sel.net.V3_3, pin1: sel.U1.pin9 }}
    />
    <resistor
      name="R3"
      connections={{ pin2: sel.JP1.pin3, pin1: sel.net.SDA }}
      schRotation={90}
      pcbRotation={90}
      schX={7.3}
      schY={1}
      resistance="2.2k"
      pcbX={-1.397}
      pcbY={-5.08}
      footprint="0402"
    />
    <resistor
      name="R5"
      connections={{ pin2: sel.JP1.pin1, pin1: sel.net.SCL }}
      schX={8.7}
      schY={1}
      resistance="2.2k"
      schRotation={90}
      pcbX={1.219}
      pcbY={-5.08}
      pcbRotation={90}
      footprint="0402"
    />
    <resistor
      name="R6"
      connections={{ pin1: sel.D2.pin1 }}
      schX={5}
      schY={1.5}
      schRotation={90}
      resistance="1k"
      pcbX={-9.779}
      pcbY={5.436}
      pcbRotation={-90}
      footprint="0603"
    />

    <capacitor
      name="C1"
      connections={{ pin2: sel.net.V3_3, pin1: sel.net.GND }}
      capacitance="0.1uF"
      schX={-8}
      schRotation={90}
      pcbRotation={-90}
      pcbX={2.032}
      pcbY={1.778}
      footprint="0402"
    />
    <capacitor
      name="C2"
      connections={{ pin2: sel.net.V3_3, pin1: sel.net.GND }}
      capacitance="0.1uF"
      schX={-6.5}
      schRotation={90}
      pcbX={-2.032}
      pcbY={1.778}
      pcbRotation={-90}
      footprint="0402"
    />
    <capacitor
      name="C3"
      connections={{ pin2: sel.net.V3_3, pin1: sel.net.GND }}
      capacitance="0.1uF"
      schX={-5}
      schRotation={90}
      pcbRotation={90}
      pcbX={2.032}
      pcbY={-1.524}
      footprint="0402"
    />
    <led
      name="D2"
      connections={{ pin2: sel.net.GND }}
      schX={5}
      schY={0}
      schRotation={-90}
      pcbRotation={-90}
      color="RED"
      pcbX={-11.278}
      pcbY={5.436}
      footprint="0603"
    />
    <netlabel
      net="EN"
      schX={-2.8}
      schY={0}
      connection="R2.pin1"
      anchorSide="right"
    />
    <netlabel
      net="V3_3"
      schX={-1.3}
      schY={0.7}
      connection="U1.pin1"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={-1.3}
      schY={-0.7}
      connection="U1.pin8"
      anchorSide="top"
    />

    <solderjumper
      name="JP1"
      schX={8}
      schY={2}
      pcbX={1.041}
      pcbY={-5.08}
      connections={{ pin2: sel.net.V3_3 }}
      footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1.041"
      bridgedPins={[["1", "2", "3"]]}
      layer={"bottom"}
      schRotation={180}
    />
    <jumper
      name="JP2"
      schWidth={0.7}
      schDirection="right"
      pcbRotation={180}
      schX={-0.5}
      schY={-7}
      connections={{
        pin4: sel.net.N_INT,
        pin3: sel.net().GPIO0,
        pin2: sel.net().GPIO1,
        pin1: sel.net().EN,
      }}
      pinLabels={{
        pin4: ["N_INT"],
        pin3: ["GP0"],
        pin2: ["GP1"],
        pin1: ["EN"],
      }}
      cadModel={null}
      footprint="pinrow4_doublesidedpinlabel_pinlabeltextalignleft_pinlabelorthogonal_nosquareplating_id1.016_od1.88_p2.54"
      pcbX={7.62}
      pcbY={-11.08}
    />
    <SM04B_SRSS_TB_LF__SN
      name="JP4"
      pcbRotation={90}
      schY={-5}
      schX={-0.5}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      pcbX={9.5}
      pcbY={0}
    />
    <netlabel
      net="V3_3"
      schY={-4.5}
      schX={-2.5}
      connection="JP5.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schY={-5.5}
      schX={-2.5}
      connection="JP5.pin1"
      anchorSide="top"
    />
    <netlabel
      net="SCL"
      schY={-4.7}
      schX={-2}
      connection="JP5.pin4"
      anchorSide="left"
    />
    <netlabel
      net="SDA"
      schY={-4.9}
      schX={-2}
      connection="JP5.pin3"
      anchorSide="left"
    />
    <netlabel
      net="V3_3"
      schY={-4.5}
      schX={0.5}
      connection="JP4.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schY={-5.5}
      schX={0.5}
      connection="JP4.pin1"
      anchorSide="top"
    />
    <netlabel
      net="SCL"
      schY={-4.7}
      schX={1}
      connection="JP4.pin4"
      anchorSide="left"
    />
    <netlabel
      net="SDA"
      schY={-4.9}
      schX={1}
      connection="JP4.pin3"
      anchorSide="left"
    />
    <SM04B_SRSS_TB_LF__SN
      name="JP5"
      schY={-5}
      schX={-3.5}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      pcbRotation={-90}
      pcbX={-9.5}
      pcbY={0}
    />
    <netlabel
      net="V3_3"
      schY={-4.5}
      schX={4}
      connection="JP6.pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schY={-5.5}
      schX={4}
      connection="JP6.pin1"
      anchorSide="top"
    />
    <netlabel
      net="SCL"
      schY={-4.7}
      schX={4.5}
      connection="JP6.pin4"
      anchorSide="left"
    />
    <netlabel
      net="SDA"
      schY={-4.9}
      schX={4.5}
      connection="JP6.pin3"
      anchorSide="left"
    />
    <jumper
      name="JP6"
      schWidth={0.7}
      schDirection="right"
      schX={3}
      schY={-5}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["V3_3"],
        pin3: ["SDA"],
        pin4: ["SCL"],
      }}
      cadModel={null}
      footprint="pinrow4_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_nosquareplating_id1.016_od1.88_p2.54"
      pcbX={-2.54}
      pcbY={-11.08}
    />
    <solderjumper
      name="JP7"
      pcbRotation={0}
      pcbX={-9.639}
      pcbY={3.81}
      schX={5}
      schY={2.9}
      footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1.041"
      bridgedPins={[["1", "2"]]}
      layer={"bottom"}
      connections={{ pin1: sel.R6.pin2, pin2: sel.net.V3_3 }}
      schRotation={90}
    />
    <silkscreentext text="dToF" pcbX={7.7} pcbY={5} layer="bottom" />
    <silkscreentext text="TMF8820" pcbX={7.7} pcbY={3.5} layer="bottom" />
    <silkscreentext text="TMF8821" pcbX={7.7} pcbY={1.4} layer="bottom" />
    <silkscreentext text="I2C" pcbY={-3} layer="bottom" />
    <silkscreentext text="LED" pcbX={-8} pcbY={4} layer="bottom" />
    <silkscreentext
      text="qwiic"
      pcbX={-10.3}
      pcbY={-1.4}
      fontSize={1.3}
      layer="top"
    />

    <hole diameter={3.048} pcbX={10.16} pcbY={10.16} />
    <hole diameter={3.048} pcbX={-10.16} pcbY={10.16} />
    <hole diameter={3.048} pcbX={-10.16} pcbY={-10.16} />

    <schematictext
      text="Distance: Time Of Flight Sensor: TMF8820"
      color="red"
      fontSize={0.25}
      schX={0}
      schY={4}
    />
    <schematictext
      text="Qwiic Connectors and Header"
      color="red"
      fontSize={0.25}
      schX={0}
      schY={-3}
    />

    <schematictext
      text="Jumpers"
      color="red"
      fontSize={0.25}
      schX={6.5}
      schY={4}
    />
    <schematictext
      text="Product Identifier"
      color="red"
      fontSize={0.2}
      schX={3}
      schY={-0.3}
    />

    <schematictext
      text="Cut trace to remove"
      color="gray"
      fontSize={0.15}
      schX={6}
      schY={3}
    />
    <schematictext
      text="remove LED"
      color="gray"
      fontSize={0.15}
      schX={6}
      schY={2.8}
    />

    <schematictext
      text="Cut trace to"
      color="gray"
      fontSize={0.15}
      schX={9}
      schY={2.5}
    />
    <schematictext
      text="pullup resisitors."
      color="gray"
      fontSize={0.15}
      schX={9}
      schY={2.3}
    />

    <schematictext
      text="VCC Range: 2.7 - 3.3V"
      color="gray"
      anchor="left"
      fontSize={0.15}
      schX={-1}
      schY={3.3}
    />
    <schematictext
      text="I/O Voltage Range: 1.62V - 3.3V"
      color="gray"
      anchor="left"
      fontSize={0.15}
      schX={-1}
      schY={3.1}
    />
    <schematictext
      text="Default Address: 0x41"
      color="gray"
      anchor="left"
      fontSize={0.15}
      schX={-1}
      schY={2.5}
    />

    <chip
      name="TMF8820"
      pcbX={-4.47}
      pcbY={6.477}
      schX={3.3}
      schY={-2}
      manufacturerPartNumber="TMF8820"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.676mm"
            height="1.27mm"
            shape="rect"
          />
        </footprint>
      }
    />
    <chip
      name="TMF8821"
      pcbX={-4.47}
      pcbY={4.318}
      schX={3.3}
      schY={-1}
      manufacturerPartNumber="TMF8821"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.676mm"
            height="1.27mm"
            shape="rect"
          />
        </footprint>
      }
    />
  </board>
)
