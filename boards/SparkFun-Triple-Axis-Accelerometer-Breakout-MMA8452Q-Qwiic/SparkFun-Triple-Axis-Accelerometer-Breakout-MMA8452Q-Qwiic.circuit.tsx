import { MMA8452QR1 } from "./MMA8452Q"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { SM04B_SRSS_TB_LF__SN2 } from "./SM04B_SRSS_TB_LF__SN2"

import { sel } from "tscircuit"

const JPPinlabel = {
  pin4: ["SCL"],
  pin3: ["SDA"],
  pin2: ["V3_3"],
  pin1: ["GND"],
}

export default () => {
  return (
    <board width="25.40mm" height="25.40mm" routingDisabled>
      <MMA8452QR1 name="U1" />
      <capacitor
        name="C5"
        capacitance="4.7uF"
        schRotation={-90}
        schX={-4}
        footprint="cap0603"
        pcbX={3.3}
        pcbRotation={-90}
        connections={{ pin2: sel.net().GND, pin1: sel.net().V3_3 }}
      />
      <capacitor
        name="C4"
        capacitance="4.7uF"
        schRotation={-90}
        schX={-5}
        footprint="cap0603"
        pcbX={4.5}
        pcbRotation={-90}
        connections={{ pin2: sel.net().GND, pin1: sel.net().V3_3 }}
      />
      <resistor
        name="R2"
        schRotation={90}
        schX={5}
        schY={0.2}
        resistance="10k"
        footprint="cap0603"
        pcbY={-3}
        pcbRotation={180}
        connections={{ pin1: "U1.pin7", pin2: "net.V3_3" }}
      />
      <capacitor
        name="C1"
        connections={{ pin1: "U1.pin2", pin2: "net.GND" }}
        capacitance="0.1uF"
        schRotation={-90}
        schX={-3}
        schY={-0.5}
        footprint="res0603"
        pcbX={-3.3}
        pcbRotation={-90}
      />
      <resistor
        name="R4"
        resistance="4.7k"
        schY={1.3}
        schX={2}
        schRotation={90}
        footprint="0603"
        pcbX={3.3}
        pcbY={3.81}
        pcbRotation={90}
        connections={{ pin1: sel.net().SCL }}
      />
      <resistor
        name="R5"
        resistance="4.7k"
        footprint="0603"
        schY={1.3}
        schX={3.5}
        schRotation={90}
        pcbRotation={90}
        pcbX={-3.3}
        pcbY={3.81}
        connections={{ pin1: "net.SDA" }}
      />
      <solderjumper
        name="JP1"
        schRotation={180}
        schY={2.5}
        schX={2.75}
        footprint="solderjumper3_bridged123_p1.0414_pw0.635_ph1.27"
        pcbX={-1.016}
        pcbY={3.81}
        bridgedPins={[["1", "2", "3"]]}
        connections={{
          pin2: sel.net().V3_3,
          pin3: sel.R4.pin2,
          pin1: sel.R5.pin2,
        }}
      />
      <solderjumper
        connections={{ pin1: "R2.pin1", pin2: "net.GND" }}
        name="JP9"
        schX={5}
        schY={-1.5}
        schRotation={-90}
        footprint="solderjumper2_p0.9_pw0.6604_ph1.27"
        layer={"bottom"}
        pcbX={0.45}
        pcbY={-6.35}
      />
      <jumper
        name="JP3"
        cadModel={null}
        schWidth={0.7}
        pinLabels={JPPinlabel}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        schY={-6}
        schDirection="left"
        footprint="pinrow4_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal"
        pcbY={-11.43}
        pcbX={-1.25}
      />
      <jumper
        name="JP4"
        cadModel={null}
        schWidth={0.7}
        pinLabels={{
          pin1: ["INT1"],
          pin2: ["INT2"],
        }}
        manufacturerPartNumber="CONN_01PTH_NO_SILK_YES_STOP"
        schPinArrangement={{
          leftSide: { direction: "top-to-bottom", pins: ["pin1", "pin2"] },
        }}
        connections={{ pin1: sel.net().INT1, pin2: sel.net().INT2 }}
        schY={-7.7}
        pcbRotation={180}
        footprint="pinrow2_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal"
        pcbY={-11.43}
        pcbX={6.37}
      />
      <SM04B_SRSS_TB_LF__SN
        name="JP2"
        pcbRotation={90}
        pcbX={9.5}
        schWidth={0.7}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        schY={-8}
        schX={-3}
      />
      <SM04B_SRSS_TB_LF__SN2
        name="JP5"
        pcbRotation={-90}
        pcbX={-9.5}
        schWidth={0.7}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        schY={-6}
        schX={-3}
      />
      <hole diameter={3.302} pcbX={-10.16} pcbY={10.16} />
      <hole diameter={3.302} pcbX={10.16} pcbY={10.16} />
      <silkscreentext
        text="Qwicc Accelerometer"
        layer="top"
        fontSize={1}
        pcbY={11.5}
      />
      <silkscreentext
        text="Qwicc Accelerometer"
        layer="bottom"
        fontSize={1}
        pcbY={11.5}
      />
      <silkscreentext
        text="OPEN-0x1D"
        layer="bottom"
        fontSize={1}
        pcbY={-6}
        pcbX={5}
      />
      <silkscreentext
        text="CLOSE-0x1C"
        layer="bottom"
        fontSize={1}
        pcbY={-7}
        pcbX={5}
      />
      <silkscreentext
        text="I2C PU"
        layer="top"
        fontSize={1.4}
        pcbY={6}
        pcbX={0}
      />
      <netlabel
        net="SDA"
        anchorSide="left"
        schX={4}
        schY={0.43}
        connectsTo={sel.U1.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="left"
        schX={4}
        schY={0.6}
        connectsTo={[sel.U1.SCL]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-1.2}
        schY={1}
        connectsTo={["U1.VDD", "U1.VDDIO"]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-1.5}
        schY={-1.3}
        connectsTo={[sel.U1.pin5]}
      />

      <netlabel
        net="SDA"
        anchorSide="right"
        schX={-1}
        schY={-5.9}
        connectsTo={sel.JP3.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="right"
        schX={-1}
        schY={-5.7}
        connectsTo={[sel.JP3.SCL]}
      />
      <netlabel
        net="SDA"
        anchorSide="right"
        schX={-4}
        schY={-7.9}
        connectsTo={sel.JP2.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="right"
        schX={-4}
        schY={-7.7}
        connectsTo={[sel.JP2.SCL]}
      />
      <netlabel
        net="SDA"
        anchorSide="right"
        schX={-4}
        schY={-5.9}
        connectsTo={sel.JP5.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="right"
        schX={-4}
        schY={-5.7}
        connectsTo={[sel.JP5.SCL]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-3.9}
        schY={-5.4}
        connectsTo={[sel.JP5.VDD]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-3.9}
        schY={-6.6}
        connectsTo={[sel.JP5.GND]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-3.9}
        schY={-7.4}
        connectsTo={[sel.JP2.VDD]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-3.9}
        schY={-8.6}
        connectsTo={[sel.JP2.GND]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-0.9}
        schY={-5.4}
        connectsTo={[sel.JP3.V3_3]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-0.9}
        schY={-6.6}
        connectsTo={[sel.JP3.GND]}
      />
      <schematictext
        text="7-Bit I2C Address Jumper"
        color="gray"
        fontSize={0.2}
        schY={-1}
        schX={7}
      />
      <schematictext
        text="Open (default) = 0x1D"
        color="gray"
        fontSize={0.2}
        schY={-1.2}
        schX={7}
      />
      <schematictext
        text="Closed = 0x1C"
        color="gray"
        fontSize={0.2}
        schY={-1.4}
        schX={7}
      />
      <schematictext
        text="JUMPER-SMT_3_2-NC_PASTE_SILK"
        color="gray"
        schRotation={-90}
        fontSize={0.2}
        schY={0.3}
        schX={2.6}
      />
    </board>
  )
}
