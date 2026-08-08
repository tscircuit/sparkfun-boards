import { JST04_1MM_RA } from "./JST04_1MM_RA"
import { STTS22H } from "./STTS22H"

const singlePinHeaderFootprint =
  "pinrow1_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted"

export default function SparkFunMicroTemperatureSensorSTTS22HQwiic() {
  return (
    <board
      width="19.05mm"
      height="7.62mm"
      layers={2}
      thickness="1.6mm"
      solderMaskColor="red"
      silkscreenColor="white"
      title="SparkFun Micro Temperature Sensor - STTS22H (Qwiic)"
      routingDisabled
    >
      {/* Temperature sensor and local support circuitry */}
      <STTS22H
        name="U2"
        schX={-5.5}
        schY={4.4}
        pcbX={-0.635}
        pcbY={0}
        pcbRotation={270}
        connections={{
          pin1: "net.SCL",
          pin2: "net.INT",
          pin3: "net.V3_3",
          pin4: "net.ADDR",
          pin5: "net.GND",
          pin6: "net.SDA",
          pin7: "net.GND",
        }}
      />

      <capacitor
        name="C1"
        capacitance="0.1uF"
        footprint="0402"
        schX={-8.7}
        schY={4.2}
        schRotation={-90}
        pcbX={-2.667}
        pcbY={1.27}
        pcbRotation={90}
        connections={{
          pin1: "net.V3_3",
          pin2: "net.GND",
        }}
      />

      <resistor
        name="R3"
        resistance="10k"
        footprint="0402"
        schX={-2.5}
        schY={5.4}
        schRotation={90}
        pcbX={-2.667}
        pcbY={-1.27}
        pcbRotation={270}
        connections={{
          pin1: "net.INT",
          pin2: "net.V3_3",
        }}
      />

      <resistor
        name="R5"
        resistance="15k"
        footprint="0402"
        schX={-5.2}
        schY={1.15}
        schRotation={90}
        pcbX={2.413}
        pcbY={-1.27}
        pcbRotation={90}
        connections={{
          pin1: "net.ADDR_15K",
          pin2: "net.V3_3",
        }}
      />

      <solderjumper
        name="SJ_ADDR"
        pinCount={3}
        footprint="solderjumper3_bridged23_pw0.66_pl1.270_p1"
        bridgedPins={[["2", "3"]]}
        layer="bottom"
        schX={-3.35}
        schY={1.15}
        schRotation={180}
        pcbX={2.794}
        pcbY={0}
        pcbRotation={270}
        connections={{
          pin1: "net.V3_3",
          pin2: "net.ADDR",
          pin3: "net.ADDR_15K",
        }}
      />

      <schematictext
        text="Address selection (7-bit, unshifted)"
        schX={-6.2}
        schY={-0.15}
        fontSize={0.22}
        color="gray"
      />
      <schematictext
        text="Default: 15k to 3.3V = 0x3C"
        schX={-6.2}
        schY={-0.45}
        fontSize={0.2}
        color="gray"
      />
      <schematictext
        text="Close ADDR to 3.3V = 0x38"
        schX={-6.2}
        schY={-0.73}
        fontSize={0.2}
        color="gray"
      />
      <schematictext
        text="Open ADDR = undefined"
        schX={-6.2}
        schY={-1.01}
        fontSize={0.2}
        color="gray"
      />

      {/* I2C pull-up disconnect jumper */}
      <solderjumper
        name="I2C_PU"
        pinCount={3}
        footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1"
        bridgedPins={[["1", "2", "3"]]}
        layer="bottom"
        schX={3.9}
        schY={5.2}
        schRotation={180}
        pcbX={5.16255}
        pcbY={0}
        pcbRotation={270}
        connections={{
          pin1: "net.SCL_PU",
          pin2: "net.V3_3",
          pin3: "net.SDA_PU",
        }}
      />

      <resistor
        name="R1"
        resistance="2.2k"
        footprint="0402"
        schX={3.0}
        schY={3.7}
        schRotation={90}
        pcbX={1.397}
        pcbY={1.27}
        pcbRotation={90}
        connections={{
          pin1: "net.SCL",
          pin2: "net.SCL_PU",
        }}
      />

      <resistor
        name="R2"
        resistance="2.2k"
        footprint="0402"
        schX={4.8}
        schY={3.7}
        schRotation={90}
        pcbX={1.397}
        pcbY={-1.27}
        pcbRotation={270}
        connections={{
          pin1: "net.SDA",
          pin2: "net.SDA_PU",
        }}
      />

      <schematictext
        text="Cut both traces to remove I2C pull-ups"
        schX={3.9}
        schY={2.35}
        fontSize={0.2}
        color="gray"
      />

      {/* Power LED and its cuttable ground jumper */}
      <resistor
        name="R4"
        resistance="2.2k"
        footprint="0402"
        schX={9.3}
        schY={4.8}
        schRotation={90}
        pcbX={-2.032}
        pcbY={3.0988}
        pcbRotation={180}
        connections={{
          pin1: "net.LED_A",
          pin2: "net.V3_3",
        }}
      />

      <led
        name="D1"
        color="red"
        footprint="0402"
        schX={9.3}
        schY={3.35}
        schRotation={-90}
        pcbX={-0.0254}
        pcbY={3.0988}
        connections={{
          pin1: "net.LED_A",
          pin2: "net.LED_K",
        }}
      />

      <solderjumper
        name="LED"
        pinCount={2}
        footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
        bridgedPins={[["1", "2"]]}
        layer="bottom"
        schX={9.3}
        schY={1.95}
        schRotation={90}
        pcbX={0.1778}
        pcbY={2.3368}
        pcbRotation={90}
        connections={{
          pin1: "net.GND",
          pin2: "net.LED_K",
        }}
      />

      <schematictext
        text="Cut LED trace to disconnect power LED"
        schX={10.7}
        schY={2.2}
        fontSize={0.2}
        color="gray"
      />

      {/* Bottom-side test pads, ordered like the original board */}
      <testpoint
        name="TP3"
        footprintVariant="pad"
        padDiameter="0.762mm"
        layer="bottom"
        schX={0.5}
        schY={-0.7}
        pcbX={8.5725}
        pcbY={-0.9525}
        connections={{ pin1: "net.V3_3" }}
      />
      <testpoint
        name="TP2"
        footprintVariant="pad"
        padDiameter="0.762mm"
        layer="bottom"
        schX={0.5}
        schY={-1.05}
        pcbX={8.5725}
        pcbY={0.9525}
        connections={{ pin1: "net.SDA" }}
      />
      <testpoint
        name="TP1"
        footprintVariant="pad"
        padDiameter="0.762mm"
        layer="bottom"
        schX={0.5}
        schY={-1.4}
        pcbX={8.5725}
        pcbY={2.8575}
        connections={{ pin1: "net.SCL" }}
      />
      <testpoint
        name="TP4"
        footprintVariant="pad"
        padDiameter="0.762mm"
        layer="bottom"
        schX={0.5}
        schY={-1.75}
        pcbX={8.5725}
        pcbY={-2.8575}
        connections={{ pin1: "net.GND" }}
      />

      {/* Connectors */}
      <JST04_1MM_RA
        name="J1"
        schX={1.5}
        schY={-5.25}
        pcbX={6.487}
        pcbY={0}
        pcbRotation={90}
        connections={{
          pin1: "net.GND",
          pin2: "net.V3_3",
          pin3: "net.SDA",
          pin4: "net.SCL",
        }}
      />

      <jumper
        name="J3"
        footprint={singlePinHeaderFootprint}
        cadModel={null}
        pinLabels={{ pin1: ["INT"] }}
        schPinArrangement={{
          leftSide: { direction: "top-to-bottom", pins: ["pin1"] },
        }}
        schX={-5.6}
        schY={-5.0}
        schWidth={0.55}
        pcbX={-4.445}
        pcbY={-2.54}
        connections={{ pin1: "net.INT" }}
      />

      <jumper
        name="J4"
        footprint={singlePinHeaderFootprint}
        cadModel={null}
        pinLabels={{ pin1: ["GND"] }}
        schPinArrangement={{
          leftSide: { direction: "top-to-bottom", pins: ["pin1"] },
        }}
        schX={-5.6}
        schY={-5.75}
        schWidth={0.55}
        pcbX={-4.445}
        pcbY={2.54}
        connections={{ pin1: "net.GND" }}
      />

      <schematictext
        text="PTH connectors accept 22 AWG or smaller"
        schX={-5.3}
        schY={-6.65}
        fontSize={0.2}
        color="gray"
      />
      <schematictext
        text="Qwiic right angle"
        schX={1.5}
        schY={-6.65}
        fontSize={0.2}
        color="gray"
      />

      {/* Mechanical details and fabrication marks from the official Eagle board */}
      <hole name="STANDOFF1" diameter="3.048mm" pcbX="-6.985mm" pcbY="0mm" />

      <fiducial
        name="FID1"
        padDiameter="0.335mm"
        soldermaskPullback="0.335mm"
        pcbX={4.4196}
        pcbY={3.2004}
      />
      <fiducial
        name="FID2"
        padDiameter="0.335mm"
        soldermaskPullback="0.335mm"
        pcbX={-8.8646}
        pcbY={-0.7366}
      />
      <fiducial
        name="FD1"
        layer="bottom"
        padDiameter="0.335mm"
        soldermaskPullback="0.335mm"
        pcbX={6.4516}
        pcbY={3.175}
      />
      <fiducial
        name="FD2"
        layer="bottom"
        padDiameter="0.335mm"
        soldermaskPullback="0.335mm"
        pcbX={-8.8646}
        pcbY={-0.7366}
      />

      <silkscreentext
        text="STTS22H"
        layer="bottom"
        fontSize={0.68}
        pcbX={-1.1}
        pcbY={-2.65}
      />
      <silkscreentext
        text="TEMP SENSOR"
        layer="bottom"
        fontSize={0.55}
        pcbX={-1.1}
        pcbY={-3.25}
      />
      <silkscreentext text="QWIIC" fontSize={0.55} pcbX={2.5} pcbY={-2.75} />
      <silkscreentext
        text="SCL"
        layer="bottom"
        fontSize={0.38}
        pcbX={7.65}
        pcbY={2.86}
      />
      <silkscreentext
        text="SDA"
        layer="bottom"
        fontSize={0.38}
        pcbX={7.65}
        pcbY={0.95}
      />
      <silkscreentext
        text="3V3"
        layer="bottom"
        fontSize={0.38}
        pcbX={7.65}
        pcbY={-0.95}
      />
      <silkscreentext
        text="GND"
        layer="bottom"
        fontSize={0.38}
        pcbX={7.65}
        pcbY={-2.86}
      />
    </board>
  )
}
