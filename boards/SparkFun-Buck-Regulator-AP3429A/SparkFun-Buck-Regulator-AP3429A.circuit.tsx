import { BarrelJackFootprint } from "./footprints"

const X = (x: number) => x - 12.7
const Y = (y: number) => y - 12.7

export default () => (
  <board width="25.4mm" height="25.4mm" layers={2}>
    <schematicsection
      name="Power Conversion"
      displayName="Adjustable DC-DC Buck Regulator - AP3429A"
    />
    <schematicsection name="Connectors" displayName="Connectors" />
    <schematicsection name="Indicator" displayName="Power LED" />
    <schematictext
      text="Input Range: 3.9V to 5.5V"
      schX={5}
      schY={5.2}
      fontSize={0.18}
      color="gray"
    />
    <schematictext
      text="Output Voltage: 3.3V"
      schX={5}
      schY={4.8}
      fontSize={0.18}
      color="gray"
    />
    <schematictext
      text="Output Current: 2A MAX"
      schX={5}
      schY={4.4}
      fontSize={0.18}
      color="gray"
    />
    <schematictext
      text="Cut trace to disconnect LED."
      schX={26.5}
      schY={3}
      fontSize={0.18}
      color="gray"
    />
    <schematictext
      text="WARNING: Only connect one Vin input at a time"
      schX={0}
      schY={-14}
      fontSize={0.18}
      color="gray"
    />
    <chip
      name="U1"
      manufacturerPartNumber="AP3429A"
      footprint="sot23_5"
      pinLabels={{
        pin1: "EN",
        pin2: "GND",
        pin3: "SW",
        pin4: "VIN",
        pin5: "FB",
      }}
      schPinArrangement={{
        leftSide: { pins: ["VIN", "EN", "GND"], direction: "top-to-bottom" },
        rightSide: { pins: ["SW", "FB"], direction: "top-to-bottom" },
      }}
      schWidth={1.675}
      schHeight={0.6}
      pcbX={X(15.24)}
      pcbY={Y(13.335)}
      schX={0}
      schY={1}
      schSectionName="Power Conversion"
    />
    <inductor
      name="L1"
      inductance="2.2uH"
      footprint="1206"
      pcbX={X(16.256)}
      pcbY={Y(8.509)}
      schX={3}
      schY={1}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C1"
      capacitance="22uF"
      footprint="0805"
      pcbX={X(19.2)}
      pcbY={Y(13.589)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={-5}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C2"
      capacitance="22pF"
      footprint="0402"
      pcbX={X(11.8)}
      pcbY={Y(7.5)}
      pcbRotation={90}
      schOrientation="vertical"
      schX={4.5}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C3"
      capacitance="22uF"
      footprint="0805"
      pcbX={X(9.779)}
      pcbY={Y(9.271)}
      pcbRotation={90}
      schOrientation="vertical"
      schX={9}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C4"
      capacitance="22uF"
      footprint="0805"
      pcbX={X(9.144)}
      pcbY={Y(5.842)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={11}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C5"
      capacitance="0.1uF"
      footprint="0603"
      pcbX={X(11.4)}
      pcbY={Y(3.5)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={13}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C6"
      capacitance="1uF"
      footprint="0603"
      pcbX={X(14.0)}
      pcbY={Y(5.842)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={15}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <resistor
      name="R1"
      resistance="453k"
      footprint="0603"
      pcbX={X(11.6)}
      pcbY={Y(11.5)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={6}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <resistor
      name="R2"
      resistance="100k"
      footprint="0603"
      pcbX={X(9.2)}
      pcbY={Y(13.5)}
      schOrientation="vertical"
      schX={6}
      schY={-1.4}
      schSectionName="Power Conversion"
    />
    <resistor
      name="R3"
      resistance="1k"
      footprint="0603"
      pcbX={X(18.034)}
      pcbY={Y(2.667)}
      pcbRotation={180}
      schOrientation="vertical"
      schX={24}
      schY={1}
      schSectionName="Indicator"
    />
    <resistor
      name="R4"
      resistance="100k"
      footprint="0603"
      pcbX={X(19.558)}
      pcbY={Y(16.891)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={-3}
      schY={0.7}
      schSectionName="Power Conversion"
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={X(18.034)}
      pcbY={Y(4.318)}
      pcbRotation={180}
      schRotation={270}
      schX={24}
      schY={-1}
      schSectionName="Indicator"
    />
    <chip
      name="J1"
      manufacturerPartNumber="DB125-3.5-4P-GN-S"
      supplierPartNumbers={{ jlcpcb: ["C2757925"] }}
      footprint="jlcpcb:C2757925"
      pinLabels={{ pin1: "VIN", pin2: "GND1", pin3: "GND2", pin4: "VOUT" }}
      schPinArrangement={{
        rightSide: {
          pins: ["VOUT", "GND2", "GND1", "VIN"],
          direction: "top-to-bottom",
        },
      }}
      schWidth={1.48}
      pcbX={X(3.5)}
      pcbY={Y(13.95)}
      pcbRotation={270}
      schX={-6}
      schY={-10}
      schSectionName="Connectors"
    />
    <chip
      name="J2"
      manufacturerPartNumber="POWER_JACK"
      footprint={<BarrelJackFootprint />}
      pinLabels={{ pin1: "PWR", pin2: "GND", pin3: "GNDBREAK" }}
      schPinArrangement={{
        rightSide: {
          pins: ["PWR", "GND", "GNDBREAK"],
          direction: "top-to-bottom",
        },
      }}
      schWidth={1.8}
      pcbX={X(13.335)}
      pcbY={Y(23.39)}
      pcbRotation={90}
      schX={0}
      schY={-10}
      schSectionName="Connectors"
    />
    <chip
      name="J3"
      manufacturerPartNumber="Breakout Header"
      footprint="pinrow5_p2.54_id1.2_od2.1_nosquareplating"
      pinLabels={{
        pin1: "EN",
        pin2: "VIN",
        pin3: "GND1",
        pin4: "GND2",
        pin5: "VOUT",
      }}
      schPinArrangement={{
        rightSide: {
          pins: ["VOUT", "GND2", "GND1", "VIN", "EN"],
          direction: "top-to-bottom",
        },
      }}
      schWidth={1.48}
      pcbX={X(23.5)}
      pcbY={Y(14.5)}
      pcbRotation={270}
      schX={6}
      schY={-10}
      schSectionName="Connectors"
    />
    <solderjumper
      name="PWR"
      footprint="solderjumper2"
      layer="bottom"
      pcbX={X(7.5)}
      pcbY={Y(14.5)}
      pcbRotation={270}
      schRotation={90}
      schX={24}
      schY={3}
      schSectionName="Indicator"
    />
    <hole name="H1" diameter="3.2mm" pcbX={X(2.54)} pcbY={Y(22.86)} />
    <hole name="H2" diameter="3.2mm" pcbX={X(2.54)} pcbY={Y(2.54)} />
    <hole name="H3" diameter="3.2mm" pcbX={X(22.86)} pcbY={Y(22.86)} />
    <hole name="H4" diameter="3.2mm" pcbX={X(22.86)} pcbY={Y(2.54)} />
    <fiducial
      name="FD1"
      padDiameter="0.7mm"
      soldermaskPullback="0.4mm"
      pcbX={X(24.638)}
      pcbY={Y(0.762)}
    />
    <fiducial
      name="FD2"
      padDiameter="0.7mm"
      soldermaskPullback="0.4mm"
      pcbX={X(0.762)}
      pcbY={Y(24.638)}
    />
    <smtpad
      name="3V3_SELECT"
      shape="rect"
      layer="top"
      pcbX={X(6.35)}
      pcbY={Y(1.016)}
      width="1.6764mm"
      height="1.27mm"
    />
    <smtpad
      name="1V8_SELECT"
      shape="rect"
      layer="top"
      pcbX={X(11.938)}
      pcbY={Y(1.016)}
      width="1.6764mm"
      height="1.27mm"
    />
    <silkscreentext
      text="3.3V"
      pcbX={X(6.35)}
      pcbY={Y(2.15)}
      fontSize="0.65mm"
    />
    <silkscreentext
      text="1.8V"
      pcbX={X(11.938)}
      pcbY={Y(2.15)}
      fontSize="0.65mm"
    />
    <silkscreentext
      text="Buck Regulator"
      pcbX={X(7.9)}
      pcbY={Y(4.25)}
      fontSize="0.7mm"
    />
    <silkscreentext
      text="AP3429/A"
      pcbX={X(7.2)}
      pcbY={Y(3.35)}
      fontSize="0.7mm"
    />
    <silkscreentext
      text="VIN"
      pcbX={X(7.8)}
      pcbY={Y(19.2)}
      pcbRotation={270}
      fontSize="0.6mm"
    />
    <silkscreentext
      text="GND"
      pcbX={X(7.8)}
      pcbY={Y(15.7)}
      pcbRotation={270}
      fontSize="0.6mm"
    />
    <silkscreentext
      text="GND"
      pcbX={X(7.8)}
      pcbY={Y(12.2)}
      pcbRotation={270}
      fontSize="0.6mm"
    />
    <silkscreentext
      text="VOUT"
      pcbX={X(7.8)}
      pcbY={Y(8.7)}
      pcbRotation={270}
      fontSize="0.6mm"
    />
    <keepout
      shape="rect"
      pcbX={-1.8}
      pcbY={-0.72}
      width="0.2mm"
      height="0.2mm"
      layer="top"
    />
    <trace from="C1.pin1" to="R4.pin2" />
    <trace from="C1.pin1" to="net.VIN" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="R4.pin2" to="U1.VIN" />
    <trace from="R4.pin1" to="net.EN" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.SW" to="L1.pin1" />
    <trace from="L1.pin2" to="net.VOUT" />
    <trace from="C2.pin1" to="net.VOUT" />
    <trace from="R1.pin1" to="net.VOUT" />
    <trace from="C3.pin1" to="net.VOUT" />
    <trace from="C4.pin1" to="net.VOUT" />
    <trace from="C5.pin1" to="net.VOUT" />
    <trace from="C6.pin1" to="net.VOUT" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="U1.FB" to="C2.pin2" schDisplayLabel="FB" />
    <trace from="C2.pin2" to="R1.pin2" schDisplayLabel="FB" />
    <trace from="R1.pin2" to="R2.pin1" schDisplayLabel="FB" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="R4.pin1" to="U1.EN" />
    <trace from="PWR.pin1" to="R3.pin1" />
    <trace from="PWR.pin2" to="net.VOUT" />
    <trace from="R3.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />
    <trace from="J1.VOUT" to="net.VOUT" />
    <trace from="J1.VIN" to="net.VIN" />
    <trace from="J1.GND1" to="net.GND" />
    <trace from="J1.GND2" to="J1.GND1" />
    <trace from="J2.PWR" to="net.VIN" />
    <trace from="J2.GND" to="net.GND" />
    <trace from="J3.VOUT" to="net.VOUT" />
    <trace from="J3.VIN" to="net.VIN" />
    <trace from="J3.GND1" to="net.GND" />
    <trace from="J3.GND2" to="J3.GND1" />
    <trace from="J3.EN" to="net.EN" />
  </board>
)
