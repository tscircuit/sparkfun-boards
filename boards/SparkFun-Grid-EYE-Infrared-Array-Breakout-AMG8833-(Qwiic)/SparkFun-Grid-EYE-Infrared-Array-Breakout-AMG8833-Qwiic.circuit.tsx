import { AMG8833 } from "./AMG8833"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { sel } from "tscircuit"

const JPPinlabel = {
  pin4: ["SCL"],
  pin3: ["SDA"],
  pin2: ["VDD"],
  pin1: ["GND"],
}

export default () => {
  return (
    <board width="25.40mm" height="25.40mm" routingDisabled>
      <AMG8833
        name="U1"
        connections={{
          pin2: sel.R5.pin1,
          pin3: sel.R4.pin1,
          pin6: "net.GND",
          // pin5: sel.U1.pin2,
          pin13: "U1.pin9",
          pin12: "C2.pin1",
        }}
      />
      <capacitor
        name="C1"
        capacitance="1.0uF"
        schRotation={-90}
        schX={-3}
        schY={-0.9}
        footprint="cap0603"
        pcbX={2.4}
        pcbY={6}
        connections={{ pin2: sel.R1.pin1, pin1: sel.U1.pin10 }}
      />
      <capacitor
        name="C2"
        capacitance="2.2uF"
        schRotation={-90}
        schX={-4.1}
        schY={-0.6}
        footprint="cap0603"
        pcbX={-2.4}
        pcbY={6}
        pcbRotation={180}
        connections={{ pin2: sel.net().GND }}
      />
      <capacitor
        name="C3"
        capacitance="10uF"
        schRotation={-90}
        schX={-7}
        footprint="cap0603"
        pcbX={-6.3}
        pcbY={6}
        connections={{ pin2: sel.net().GND, pin1: sel.net().V3_3 }}
      />
      <capacitor
        name="C4"
        schRotation={90}
        schX={-6}
        capacitance="0.1uF"
        footprint="cap0603"
        pcbY={-6}
        pcbX={-5}
        pcbRotation={180}
        connections={{ pin1: sel.net().GND, pin2: sel.net().V3_3 }}
      />
      <resistor
        name="R1"
        resistance="10k"
        schRotation={-90}
        schX={-3}
        schY={-2.4}
        footprint="res0603"
        pcbX={6.3}
        pcbY={6}
        pcbRotation={180}
        connections={{ pin2: sel.net().GND }}
      />
      <resistor
        name="R2"
        resistance="10k"
        connections={{ pin2: sel.net().VDD }}
        schRotation={90}
        schX={8}
        footprint="0603"
        schY={0.4}
        pcbY={-6}
        pcbX={5}
      />
      <resistor
        name="R4"
        resistance="4.7k"
        schY={1.3}
        schX={4}
        schRotation={90}
        footprint="0603"
        pcbX={3.7}
        pcbY={8.4}
        pcbRotation={180}
      />
      <resistor
        name="R5"
        resistance="4.7k"
        footprint="0603"
        schY={1.3}
        schX={5.5}
        schRotation={90}
        pcbX={-3.7}
        pcbY={8.4}
      />
      <solderjumper
        name="JP1"
        schRotation={180}
        schY={2.5}
        schX={4.75}
        footprint="solderjumper3_bridged123_p1.0414_pw0.635_ph1.27"
        pcbX={-1.03}
        pcbY={8.4}
        bridgedPins={[["1", "2", "3"]]}
        connections={{
          pin2: sel.net().V3_3,
          pin3: sel.R4.pin2,
          pin1: sel.R5.pin2,
        }}
      />
      <solderjumper
        connections={{ pin1: [sel.R2.pin1, sel.U1.pin5], pin2: "net.GND" }}
        name="JP9"
        schX={8}
        schY={-1}
        schRotation={-90}
        footprint="solderjumper2_p1.0414_pw0.6604_ph1.27"
        layer={"bottom"}
        pcbX={9.34}
        pcbY={-6.9}
      />
      <jumper
        name="JP3"
        schWidth={0.7}
        pinLabels={JPPinlabel}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3", "pin2", "pin1"],
          },
        }}
        schY={-9}
        schX={-6}
        schDirection="left"
        footprint="pinrow4_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal"
        pcbY={-11.43}
        pcbX={-1.25}
      />
      <jumper
        name="JP4"
        pinLabels={{
          pin1: ["INT"],
        }}
        manufacturerPartNumber="CONN_01PTH_NO_SILK_YES_STOP"
        schPinArrangement={{
          leftSide: { direction: "top-to-bottom", pins: ["pin1"] },
        }}
        connections={{ pin1: sel.net().INT }}
        schWidth={0.6}
        schY={-9}
        schX={-3}
        footprint="pinrow1_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal"
        pcbY={-11.43}
        pcbX={5.08}
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
        schY={-6}
        schX={-3}
      />
      <SM04B_SRSS_TB_LF__SN
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
        schX={-6}
      />
      <hole diameter={3.302} pcbX={-10.16} pcbY={10.16} />
      <hole diameter={3.302} pcbX={10.16} pcbY={10.16} />
      <silkscreentext text="sparkfun" layer="top" fontSize={2} pcbY={10} />
      <silkscreentext text="sparkfun" layer="bottom" fontSize={2} pcbY={10} />
      <silkscreentext
        text="Qwicc Distance"
        layer="top"
        fontSize={1}
        pcbY={8.5}
      />
      <silkscreentext text="VCNL 4040" layer="top" fontSize={1} pcbY={7.5} />
      <silkscreentext
        text="PWR"
        layer="top"
        fontSize={1.4}
        pcbY={-4.5}
        pcbX={-9.5}
      />
      <silkscreentext text="I2C" layer="bottom" fontSize={1.4} pcbY={7} />
      <silkscreentext
        text="INT"
        layer="bottom"
        fontSize={1.4}
        pcbY={-4.3}
        pcbX={-8.8}
      />
      <silkscreentext
        text="Qwicc Distance"
        layer="bottom"
        fontSize={1}
        pcbY={0}
      />
      <silkscreentext text="VCNL 4040" layer="bottom" fontSize={1} pcbY={-1} />
      <silkscreentext text="ADDR 0x60" layer="bottom" fontSize={1} pcbY={-8} />
      <netlabel
        net="SDA"
        anchorSide="left"
        schX={6}
        schY={0.1}
        connectsTo={sel.U1.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="left"
        schX={6}
        schY={0.3}
        connectsTo={[sel.U1.SCL]}
      />
      <netlabel
        net="INT"
        anchorSide="left"
        schX={1.5}
        schY={-0.3}
        connectsTo={[sel.U1.INT]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-1.2}
        schY={0.8}
        connectsTo={[sel.U1.VDD]}
      />
      {/* <netlabel
        net="VDD"
        anchorSide="bottom"
        schX={2}
        schY={1.3}
        connectsTo={[sel.U1.pin4]}
      /> */}
      {/* <netlabel
        net="GND"
        anchorSide="top"
        schX={-2}
        schY={-1.3}
        connectsTo={[sel.U1.pin1]}
      /> */}

      <netlabel
        net="SDA"
        anchorSide="right"
        schX={-7}
        schY={-8.9}
        connectsTo={sel.JP3.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="right"
        schX={-7}
        schY={-8.7}
        connectsTo={[sel.JP3.SCL]}
      />
      <netlabel
        net="SDA"
        anchorSide="right"
        schX={-4}
        schY={-5.9}
        connectsTo={sel.JP2.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="right"
        schX={-4}
        schY={-5.7}
        connectsTo={[sel.JP2.SCL]}
      />
      <netlabel
        net="SDA"
        anchorSide="right"
        schX={-7}
        schY={-5.9}
        connectsTo={sel.JP5.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="right"
        schX={-7}
        schY={-5.7}
        connectsTo={[sel.JP5.SCL]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-6.9}
        schY={-5.4}
        connectsTo={[sel.JP5.VDD]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-6.9}
        schY={-6.6}
        connectsTo={[sel.JP5.GND]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-3.9}
        schY={-5.4}
        connectsTo={[sel.JP2.VDD]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-3.9}
        schY={-6.6}
        connectsTo={[sel.JP2.GND]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-6.9}
        schY={-8.4}
        connectsTo={[sel.JP3.VDD]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-6.9}
        schY={-9.6}
        connectsTo={[sel.JP3.GND]}
      />
      <schematictext
        text="GRIDEye"
        color="gray"
        fontSize={0.2}
        schY={3}
        schX={0}
      />
      <schematictext
        text="VCC Range 3.0V-3.6V"
        color="gray"
        fontSize={0.2}
        schY={2.7}
        schX={0}
      />
      <schematictext
        text="7-Bit I2C Address Jumper"
        color="gray"
        fontSize={0.2}
        schY={-0.8}
        schX={9.5}
      />
      <schematictext
        text="Open (Default) = 0x69"
        color="gray"
        fontSize={0.2}
        schY={-1.1}
        schX={9.5}
      />
      <schematictext
        text="Closed = 0x68"
        color="gray"
        fontSize={0.2}
        schY={-1.4}
        schX={9.5}
      />
      <schematictext
        text="JUMPER-SMT_3_2-NC_TRACE_SILK"
        color="gray"
        schRotation={-90}
        fontSize={0.2}
        schY={1}
        schX={4.8}
      />
      <schematictext
        text="Qwiic/I2CConnections"
        color="gray"
        fontSize={0.2}
        schY={-4}
        schX={-5}
      />
    </board>
  )
}
