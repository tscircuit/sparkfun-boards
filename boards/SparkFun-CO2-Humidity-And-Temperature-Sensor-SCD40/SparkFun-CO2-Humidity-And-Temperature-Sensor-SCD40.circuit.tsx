import { SCD40_D_R1 } from "./ SCD40_D_R1"
import { sel } from "tscircuit"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"

export default () => (
  <board width="25.4mm" height="25.4mm">
    <silkscreentext text="SCD40" pcbX={10} pcbY={7.3} layer="top" />
    <silkscreentext text="SCD41" pcbX={10} pcbY={5.3} layer="top" />
    <silkscreentext text="qwiic" pcbX={-10} pcbY={-5.3} layer="top" />

    <silkscreentext
      text="PWR"
      pcbX={-8}
      pcbRotation={90}
      pcbY={5.3}
      layer="top"
    />

    <silkscreentext text="qwiic CO2 Sensor" pcbX={0} pcbY={11} layer="top" />
    <silkscreentext text="Qwiic CO2 Sensor" pcbX={0} pcbY={0} layer="bottom" />

    <schematictext
      schX={-8}
      schY={4.2}
      text="Power LED"
      color="red"
      fontSize={0.25}
    />
    <schematictext
      schX={0}
      schY={4.2}
      text="SCD4X CO2 Sensor"
      color="red"
      fontSize={0.25}
    />
    <schematictext
      schX={8}
      schY={4.2}
      text="SCD4X CO2 Sensor"
      color="red"
      fontSize={0.25}
    />

    <schematictext
      schX={-8}
      schY={-2.8}
      text="Part Number"
      color="red"
      fontSize={0.25}
    />

    <chip
      name="U6"
      pcbX={7.087}
      pcbY={7.112}
      schX={-8}
      manufacturerPartNumber="SCD40_D_R1"
      schY={-3.6}
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
      name="U7"
      pcbX={7.087}
      pcbY={5.3}
      schX={-8}
      manufacturerPartNumber="SCD41_D_R1"
      schY={-4.8}
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
    <SM04B_SRSS_TB_LF__SN
      name="JP4"
      pcbX="9.7"
      pcbRotation={90}
      schX={8}
      schY={2}
      connections={{
        pin4: sel.net.SCL,
        pin3: sel.net.SDA,
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
    />
    <SM04B_SRSS_TB_LF__SN
      name="JP5"
      pcbX="-9.7"
      pcbRotation={-90}
      schX={8}
      schY={0}
      connections={{
        pin4: sel.net.SCL,
        pin3: sel.net.SDA,
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
    />
    <group>
      <SCD40_D_R1 name="U1" schX={0} schY={0} />

      <capacitor
        name="C1"
        capacitance="0.1uF"
        footprint="0603"
        pcbX={-2.032}
        pcbY={6.35}
        schX={-2.5}
        schY={0}
        schRotation={-90}
        connections={{ pin2: [sel.net.GND], pin1: [sel.net.V3_3] }}
      />
      <capacitor
        name="C2"
        capacitance="4.7uF"
        footprint="0603"
        schX={-4}
        schY={0}
        pcbX={2.032}
        pcbY={6.35}
        connections={{ pin2: sel.net.GND, pin1: sel.net.V3_3 }}
        schRotation={-90}
        pcbRotation={180}
      />
      <resistor
        name="R1"
        pcbX={9.652}
        pcbY={-4.572}
        schX={2.8}
        schY={1}
        resistance="2.2k"
        footprint="0603"
        schRotation={90}
        connections={{ pin1: sel.net.SCL, pin2: sel.JP1.pin3 }}
      />
      <resistor
        name="R2"
        pcbX={9.652}
        pcbY={-6.35}
        schX={4.2}
        schY={1}
        resistance="2.2k"
        footprint="0603"
        schRotation={90}
        connections={{ pin1: sel.net.SDA, pin2: sel.JP1.pin1 }}
      />
      <silkscreentext
        text="PLED"
        pcbX={-9.5}
        pcbY={2}
        pcbRotation={-90}
        layer="bottom"
      />
      <led
        pcbX={-9.906}
        pcbY={4.572}
        schX={-8}
        schY={-0.8}
        name="D1"
        color="RED"
        footprint="0603"
        schRotation={-90}
        connections={{ pin2: sel.net.GND }}
      />
      <solderjumper
        pcbX={9.906}
        pcbY={-6.502}
        name="JP1"
        schY={2}
        schX={3.5}
        footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1"
        layer="bottom"
        bridgedPins={[["1", "2", "3"]]}
        connections={{ pin2: sel.net.V3_3 }}
        pcbRotation={-90}
        schRotation={180}
      />
      <silkscreentext
        text="I2C"
        pcbRotation={-90}
        pcbX={8}
        pcbY={-5.5}
        layer="bottom"
      />
    </group>
    <group>
      <resistor
        name="R3"
        pcbX={-9.906}
        pcbY={6.35}
        schX={-8}
        schY={0.8}
        resistance="4.7k"
        footprint="0603"
        schRotation={90}
        connections={{ pin1: sel.D1.pin1, pin2: sel.JP2.pin1 }}
      />
      <solderjumper
        name="JP2"
        schX={-8}
        schY={2}
        pcbRotation={180}
        pcbX={-10.033}
        pcbY={5.207}
        footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
        layer="bottom"
        bridgedPins={[["1", "2"]]}
        schRotation={90}
        connections={{ pin2: sel.net.V3_3 }}
      />
    </group>
    <jumper
      schWidth={0.7}
      cadModel={null}
      schX={8}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["GND", "VDD", "SDA", "SCL"],
        },
      }}
      schY={-2}
      schDirection="left"
      pinLabels={{ pin1: ["GND"], pin2: ["VDD"], pin3: ["SDA"], pin4: ["SCL"] }}
      pcbX={0}
      pcbY={-11.5}
      name="JP3"
      footprint="pinrow4_id1.016_od1.88_nosquareplating_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel_pinlabelverticallyinverted"
      connections={{
        pin3: sel.net.SDA,
        pin4: sel.net.SCL,
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
    />
    <hole diameter={3.302} pcbX={-10.16} pcbY={-10.16} />
    <hole diameter={3.302} pcbX={10.16} pcbY={-10.16} />
    <hole diameter={3.302} pcbX={-10.16} pcbY={10.16} />
    <hole diameter={3.302} pcbX={10.16} pcbY={10.16} />
  </board>
)
