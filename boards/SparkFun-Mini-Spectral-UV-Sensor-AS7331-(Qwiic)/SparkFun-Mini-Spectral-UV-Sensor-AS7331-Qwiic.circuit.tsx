import { AS7331_AQFM_OLGA16_LF_T_R } from "./AS7331"
import { A1001WV_S_04P } from "./C371588"
import { sel } from "tscircuit"

export default () => {
  return (
    <board width="25.40mm" height="12.70mm" routingDisabled>
      <AS7331_AQFM_OLGA16_LF_T_R
        name="U1"
        schX={-0.45}
        schY={1.0}
        pcbX={0}
        pcbY={1.9}
        layer="top"
        pcbRotation={-90}
        connections={{
          pin1: "net.AGND",
          pin2: "net.AGND",
          pin3: sel.net().VDDA,
          pin4: sel.R7.pin1,
          pin5: "net.AGND",
          pin6: "net.AGND",
          pin7: "A1.pin2",
          pin8: "net.SYNC",
          pin9: "net.READY_INT",
          pin10: sel.net().VDDA,
          pin11: "net.DGND",
          pin12: sel.net.SDA,
          pin13: sel.net.SCL,
          pin14: "A0.pin2",
          pin15: "net.AGND",
          pin16: "net.AGND",
        }}
      />

      <A1001WV_S_04P
        name="J1"
        schX={-4.95}
        schY={-4.9}
        pcbX={10.55}
        pcbY={2.9}
        layer="bottom"
        pcbRotation={90}
        connections={{
          pin1: "net.DGND",
          pin2: sel.net.V3_3,
          pin3: sel.net.SDA,
          pin4: sel.net.SCL,
        }}
      />

      <A1001WV_S_04P
        name="J2"
        schX={-3.0}
        schY={-4.9}
        pcbX={-10.55}
        pcbY={2.9}
        layer="bottom"
        pcbRotation={-90}
        connections={{
          pin1: "net.DGND",
          pin2: sel.net.V3_3,
          pin3: sel.net.SDA,
          pin4: sel.net.SCL,
        }}
      />

      <jumper
        name="J3"
        // pinLabels={headerPinLabels}
        schX={-1.0}
        schY={-4.75}
        schWidth={0.7}
        schDirection="left"
        schPinArrangement={{
          leftSide: {
            direction: "bottom-to-top",
            pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
          },
        }}
        footprint="pinrow6_p2.54_id1.016_od1.8796_nosquareplating_doublesidedpinlabel"
        cadModel={null}
        pcbX={0}
        pcbY={-5.05}
        layer="bottom"
        pcbRotation={180}
        connections={{
          pin1: "net.DGND",
          pin2: "net.SYNC",
          pin3: "net.READY_INT",
          pin4: sel.net.SDA,
          pin5: sel.net.SCL,
          pin6: sel.net.V3_3,
        }}
      />

      <resistor
        name="R1"
        resistance="2.2k"
        footprint="0402"
        schX={1.95}
        schY={2.95}
        schRotation={90}
        layer="bottom"
        pcbRotation={90}
        connections={{ pin1: sel.net.SCL, pin2: "I2C.pin3" }}
      />
      <resistor
        name="R2"
        resistance="2.2k"
        footprint="0402"
        schX={2.95}
        schY={2.95}
        schRotation={90}
        layer="bottom"
        pcbRotation={90}
        connections={{ pin1: sel.net.SDA, pin2: "I2C.pin1" }}
      />
      <solderjumper
        name="I2C"
        bridgedPins={[["1"], ["2"], ["3"]]}
        footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1"
        layer="bottom"
        schX={2.45}
        schY={4.0}
        schRotation={180}
        pcbRotation={180}
        connections={{ pin2: sel.net.V3_3 }}
      />

      <resistor
        name="R3"
        resistance="100k"
        footprint="0402"
        schX={4.25}
        schY={2.4}
        schRotation={-90}
        layer="bottom"
        pcbRotation={90}
        connections={{ pin1: sel.net().VDDA, pin2: "A0.pin1" }}
      />
      <resistor
        name="R4"
        resistance="100k"
        footprint="0402"
        schX={5.2}
        schY={2.4}
        schRotation={-90}
        layer="bottom"
        pcbRotation={90}
        connections={{ pin1: sel.net().VDDA, pin2: "A1.pin1" }}
      />
      <solderjumper
        name="A0"
        bridgedPins={[["2"], ["3"]]}
        footprint="solderjumper3_bridged23_pw0.66_pl1.270_p1"
        layer="bottom"
        schX={4.15}
        schY={1.0}
        schRotation={-90}
        pcbRotation={-90}
        connections={{ pin3: "net.AGND" }}
      />
      <solderjumper
        name="A1"
        bridgedPins={[["2"], ["3"]]}
        footprint="solderjumper3_bridged23_pw0.66_pl1.270_p1"
        layer="bottom"
        schX={5.1}
        schY={-1}
        schRotation={-90}
        pcbRotation={-90}
        connections={{ pin3: "net.AGND" }}
      />

      <resistor
        name="R6"
        resistance="10"
        footprint="0402"
        schX={-3.65}
        schY={2.0}
        pcbX={-4.45}
        pcbY={2.1}
        layer="bottom"
        pcbRotation={180}
        connections={{ pin1: sel.net.V3_3, pin2: sel.net().VDDA }}
      />
      <capacitor
        name="C1"
        capacitance="1.0uF"
        footprint="0402"
        layer="top"
        schX={-4.2}
        schY={1.05}
        schRotation={-90}
        pcbX={-4.45}
        pcbY={0.55}
        pcbRotation={90}
        connections={{ pin1: sel.net().VDDA, pin2: "net.DGND" }}
      />
      <capacitor
        name="C2"
        capacitance="0.1uF"
        footprint="0402"
        layer="top"
        schX={-3.05}
        schY={1.05}
        schRotation={-90}
        pcbX={-2.9}
        pcbY={0.55}
        pcbRotation={90}
        connections={{ pin1: sel.net().VDDA, pin2: "net.AGND" }}
      />
      <resistor
        name="R7"
        resistance="33k"
        footprint="0402"
        schX={-2.15}
        schY={0.2}
        schRotation={-90}
        layer="bottom"
        pcbRotation={90}
        connections={{ pin2: "net.AGND" }}
      />

      <solderjumper
        name="PWR"
        bridgedPins={[["1", "2"]]}
        footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
        layer="bottom"
        schX={10.5}
        schY={2.25}
        schRotation={90}
        pcbRotation={-90}
        connections={{ pin2: sel.net.V3_3 }}
      />
      <resistor
        name="R5"
        resistance="2.2k"
        footprint="0402"
        schX={10.5}
        schY={0.95}
        schRotation={90}
        layer="bottom"
        pcbRotation={90}
        connections={{ pin1: "D1.pin1", pin2: "PWR.pin1" }}
      />
      <led
        name="D1"
        color="red"
        footprint="0603"
        schX={10.5}
        schY={-0.4}
        schRotation={-90}
        pcbX={6.2}
        pcbY={3}
        layer="bottom"
        pcbRotation={90}
        connections={{ pin2: "net.DGND" }}
      />

      <schematicrect
        schX={0.25}
        schY={1.1}
        width={10.9}
        height={7.4}
        color="gray"
        strokeWidth={0.02}
        isDashed
      />
      <schematicrect
        schX={10.5}
        schY={1.1}
        width={3.2}
        height={7.4}
        color="gray"
        strokeWidth={0.02}
        isDashed
      />
      <schematicrect
        schX={-3.0}
        schY={-4.75}
        width={7.8}
        height={3.4}
        color="gray"
        strokeWidth={0.02}
        isDashed
      />

      <schematictext
        text="UV A/B/C Sensor"
        schX={0.2}
        schY={5.2}
        fontSize={0.5}
      />
      <schematictext
        text="Voltage Range:"
        schX={-1.25}
        schY={3.2}
        color="gray"
        fontSize={0.2}
      />
      <schematictext
        text="2.7-3.6V"
        schX={-1.25}
        schY={2.95}
        color="gray"
        fontSize={0.2}
      />
      <schematictext
        text="Cut I2C jumper"
        schX={2.7}
        schY={4.95}
        color="gray"
        fontSize={0.2}
      />
      <schematictext
        text="to remove pull-ups"
        schX={2.7}
        schY={4.7}
        color="gray"
        fontSize={0.2}
      />
      <schematictext
        text="from the I2C lines"
        schX={2.7}
        schY={4.45}
        color="gray"
        fontSize={0.2}
      />
      <schematictext
        text="Cut and solder A0/A1"
        schX={6.7}
        schY={1.15}
        color="gray"
        fontSize={0.18}
      />
      <schematictext
        text="pins to change I2C"
        schX={6.7}
        schY={0.9}
        color="gray"
        fontSize={0.18}
      />
      <schematictext
        text="address based on the"
        schX={6.7}
        schY={0.65}
        color="gray"
        fontSize={0.18}
      />
      <schematictext
        text="below table."
        schX={6.7}
        schY={0.4}
        color="gray"
        fontSize={0.18}
      />
      <schematictable
        schX={7.55}
        schY={-3.4}
        fontSize={0.18}
        borderWidth={0.02}
        cellPadding={0.08}
      >
        <schematicrow height={0.32}>
          <schematiccell text="A1" width={0.9} />
          <schematiccell text="A0" width={0.9} />
          <schematiccell text="7-bit Address" width={1.8} />
        </schematicrow>
        <schematicrow height={0.32}>
          <schematiccell text="GND" width={0.9} />
          <schematiccell text="GND" width={0.9} />
          <schematiccell text="0x74" width={1.8} />
        </schematicrow>
        <schematicrow height={0.32}>
          <schematiccell text="GND" width={0.9} />
          <schematiccell text="VDD" width={0.9} />
          <schematiccell text="0x75" width={1.8} />
        </schematicrow>
        <schematicrow height={0.32}>
          <schematiccell text="VDD" width={0.9} />
          <schematiccell text="GND" width={0.9} />
          <schematiccell text="0x76" width={1.8} />
        </schematicrow>
        <schematicrow height={0.32}>
          <schematiccell text="VDD" width={0.9} />
          <schematiccell text="VDD" width={0.9} />
          <schematiccell text="0x77" width={1.8} />
        </schematicrow>
      </schematictable>
      <schematictext
        text="Connectors"
        schX={-3.0}
        schY={-3.45}
        fontSize={0.35}
      />
      <schematictext
        text="Qwiic Vert"
        schX={-4.95}
        schY={-5.95}
        color="gray"
        fontSize={0.18}
      />
      <schematictext
        text="Qwiic Vert"
        schX={-3.0}
        schY={-5.95}
        color="gray"
        fontSize={0.18}
      />
      <schematictext text="Power LED" schX={10.5} schY={5.2} fontSize={0.5} />
      <schematictext
        text="Cut PWR trace to"
        schX={10.95}
        schY={-1.8}
        color="gray"
        fontSize={0.2}
      />
      <schematictext
        text="disable power LED."
        schX={10.95}
        schY={-2.05}
        color="gray"
        fontSize={0.2}
      />

      <silkscreentext text="UV Sensor" fontSize={1.1} pcbX={0} pcbY={5.35} />
      <silkscreentext text="AS7331" fontSize={0.9} pcbX={0} pcbY={4.15} />
      <silkscreentext
        text="I2C"
        fontSize={0.7}
        layer="bottom"
        pcbX={3.25}
        pcbY={4.2}
      />
      <silkscreentext
        text="PWR"
        fontSize={0.7}
        layer="bottom"
        pcbX={10.8}
        pcbY={-0.35}
        pcbRotation={-90}
      />

      <hole name="H1" diameter={3.3048} pcbX={-10} pcbY={-3.81} />
      <hole name="H2" diameter={3.3048} pcbX={10} pcbY={-3.81} />
    </board>
  )
}
