import React from "react"

const X = (x: number) => x - 12.7
const Y = (y: number) => y - 12.7

const ThroughHoleRow = ({
  count,
  pitch = 2.54,
}: {
  count: number
  pitch?: number
}) => (
  <footprint>
    {Array.from({ length: count }, (_, i) => (
      <platedhole
        key={i}
        portHints={[String(i + 1)]}
        pcbX={(i - (count - 1) / 2) * pitch}
        pcbY={0}
        holeDiameter="1.2mm"
        outerDiameter="2.1mm"
        shape="circle"
      />
    ))}
  </footprint>
)

const BarrelJackFootprint = () => (
  <footprint>
    <platedhole
      name="GND"
      portHints={["2", "GND"]}
      shape="pill"
      pcbX={0}
      pcbY={0}
      outerWidth="2mm"
      outerHeight="4mm"
      holeWidth="1mm"
      holeHeight="2mm"
    />
    <platedhole
      name="GNDBREAK"
      portHints={["3", "GNDBREAK"]}
      shape="pill"
      pcbX={-3.048}
      pcbY={4.699}
      outerWidth="4mm"
      outerHeight="2mm"
      holeWidth="2mm"
      holeHeight="1mm"
    />
    <platedhole
      name="PWR"
      portHints={["1", "PWR"]}
      shape="pill"
      pcbX={-5.969}
      pcbY={0}
      outerWidth="2.3mm"
      outerHeight="4.6mm"
      holeWidth="1mm"
      holeHeight="2.6mm"
    />
    <platedhole
      name="GNDBREAK1"
      shape="pill"
      pcbX={-3.048}
      pcbY={-4.699}
      outerWidth="4mm"
      outerHeight="2mm"
      holeWidth="2mm"
      holeHeight="1mm"
    />
  </footprint>
)

export default () => (
  <board width="25.4mm" height="25.4mm" layers={2}>
    <schematicsection
      name="Power Conversion"
      displayName="Adjustable DC-DC Buck Regulator - AP3429A"
    />
    <schematicsection name="Connectors" displayName="Connectors" />
    <schematicsection name="Indicator" displayName="Power LED" />
    <schematictext
      name="POWER_SPEC_1"
      text="Input Range: 3.9V to 5.5V"
      schX={5}
      schY={5.2}
      fontSize={0.18}
      color="gray"
    />
    <schematictext
      name="POWER_SPEC_2"
      text="Output Voltage: 3.3V"
      schX={5}
      schY={4.8}
      fontSize={0.18}
      color="gray"
    />
    <schematictext
      name="POWER_SPEC_3"
      text="Output Current: 2A MAX"
      schX={5}
      schY={4.4}
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
      symbol={
        <symbol width={1.75} height={2.4}>
          <schematicrect
            schX={0}
            schY={0}
            width={1.75}
            height={2.4}
            strokeWidth={0.015}
            color="red"
            isFilled={false}
          />
          <schematictext text="VIN" schX={-0.55} schY={0.62} fontSize={0.18} />
          <schematictext text="EN" schX={-0.55} schY={0} fontSize={0.18} />
          <schematictext text="GND" schX={-0.38} schY={-0.68} fontSize={0.18} />
          <schematictext text="LX" schX={0.55} schY={0.62} fontSize={0.18} />
          <schematictext text="FB" schX={0.55} schY={-0.25} fontSize={0.18} />
          <port
            name="VIN"
            pinNumber={4}
            direction="left"
            schX={-0.875}
            schY={0.62}
          />
          <port
            name="EN"
            pinNumber={1}
            direction="left"
            schX={-0.875}
            schY={0}
          />
          <port
            name="GND"
            pinNumber={2}
            direction="down"
            schX={-0.4}
            schY={-1.2}
          />
          <port
            name="SW"
            pinNumber={3}
            direction="right"
            schX={0.875}
            schY={0.62}
          />
          <port
            name="FB"
            pinNumber={5}
            direction="right"
            schX={0.875}
            schY={-0.25}
          />
        </symbol>
      }
      pcbX={X(15.24)}
      pcbY={Y(13.335)}
      schX={-0.06}
      schY={1}
      schSectionName="Power Conversion"
    />
    <inductor
      name="L1"
      inductance="2.2uH"
      footprint="1206"
      pcbX={X(16.256)}
      pcbY={Y(8.509)}
      schX={3.06}
      schY={1}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C1"
      capacitance="22uF"
      footprint="0805"
      pcbX={X(19.2)}
      pcbY={Y(13.489)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={-5}
      schY={0}
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
      schX={5}
      schY={0}
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
      schY={0}
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
      schY={0}
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
      schY={0}
      schSectionName="Power Conversion"
    />
    <capacitor
      name="C6"
      capacitance="1uF"
      footprint="0603"
      pcbX={X(14)}
      pcbY={Y(5.842)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={15}
      schY={0}
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
      schX={7}
      schY={0}
      schSectionName="Power Conversion"
    />
    <resistor
      name="R2"
      resistance="100k"
      footprint="0603"
      pcbX={X(9.2)}
      pcbY={Y(13.5)}
      schOrientation="vertical"
      schX={7}
      schY={-3}
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
      schRotation={180}
      schX={24}
      schY={1}
      schSectionName="Indicator"
    />
    <resistor
      name="R4"
      resistance="100k"
      footprint="0603"
      pcbX={X(20.458)}
      pcbY={Y(16.891)}
      pcbRotation={270}
      schOrientation="vertical"
      schX={-3}
      schY={0}
      schSectionName="Power Conversion"
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      pcbX={X(18.034)}
      pcbY={Y(4.318)}
      pcbRotation={180}
      schRotation={90}
      schX={24}
      schY={-1}
      schSectionName="Indicator"
    />
    <chip
      name="J1"
      manufacturerPartNumber="Screw Terminal 4-way"
      footprint={<ThroughHoleRow count={4} pitch={3.5} />}
      pinLabels={{ pin1: "VIN", pin2: "GND1", pin3: "GND2", pin4: "VOUT" }}
      pcbX={X(3.5)}
      pcbY={Y(14.2)}
      pcbRotation={270}
      schX={-5}
      schY={-10}
      schSectionName="Connectors"
    />
    <chip
      name="J2"
      manufacturerPartNumber="DC Barrel Jack"
      footprint={<BarrelJackFootprint />}
      pinLabels={{ pin1: "PWR", pin2: "GND", pin3: "GNDBREAK" }}
      schPinArrangement={{
        rightSide: {
          pins: ["PWR", "GND", "GNDBREAK"],
          direction: "top-to-bottom",
        },
      }}
      pcbX={X(13.335)}
      pcbY={Y(23.4)}
      pcbRotation={90}
      schX={0}
      schY={-10}
      schSectionName="Connectors"
    />
    <chip
      name="J3"
      manufacturerPartNumber="Breakout Header"
      footprint={<ThroughHoleRow count={5} />}
      pinLabels={{
        pin1: "EN",
        pin2: "VIN",
        pin3: "GND1",
        pin4: "GND2",
        pin5: "VOUT",
      }}
      schPinArrangement={{
        leftSide: {
          pins: ["EN", "VIN", "GND1", "GND2", "VOUT"],
          direction: "top-to-bottom",
        },
      }}
      schWidth={1.48}
      pcbX={X(23.5)}
      pcbY={Y(14.5)}
      pcbRotation={270}
      schX={5}
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
      schOrientation="vertical"
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
    <silkscreenrect
      pcbX={X(6.35)}
      pcbY={Y(1.016)}
      width="2mm"
      height="1.4mm"
      strokeWidth="0.2mm"
    />
    <silkscreenrect
      pcbX={X(11.938)}
      pcbY={Y(1.016)}
      width="2mm"
      height="1.4mm"
      strokeWidth="0.2mm"
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
    <keepout
      shape="rect"
      pcbX={-1.8}
      pcbY={-0.72}
      width="0.2mm"
      height="0.2mm"
      layer="top"
    />
    <trace from="U1.VIN" to="net.VIN" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.EN" to="net.EN" />
    <trace from="U1.SW" to="L1.pin1" />
    <trace from="L1.pin2" to="net.VOUT" />
    <trace from="U1.FB" to="C2.pin2" />
    <trace from="U1.FB" to="R1.pin1" />
    <trace from="U1.FB" to="R2.pin2" />
    <trace from="R1.pin2" to="net.VOUT" />
    <trace from="C2.pin1" to="net.VOUT" />
    <trace from="R2.pin1" to="net.GND" />
    <trace from="C1.pin1" to="net.VIN" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C3.pin1" to="net.VOUT" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.VOUT" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.VOUT" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.VOUT" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="R4.pin1" to="net.EN" />
    <trace from="R4.pin2" to="net.VIN" />
    <trace from="D1.anode" to="R3.pin1" />
    <trace from="R3.pin2" to="PWR.pin1" />
    <trace from="PWR.pin2" to="net.VOUT" />
    <trace from="D1.cathode" to="net.GND" />
    <trace from="J1.VIN" to="net.VIN" />
    <trace from="J1.GND1" to="net.GND" />
    <trace from="J1.GND2" to="net.GND" />
    <trace from="J1.VOUT" to="net.VOUT" />
    <trace from="J2.PWR" to="net.VIN" />
    <trace from="J2.GND" to="net.GND" />
    <trace from="J3.EN" to="net.EN" />
    <trace from="J3.VIN" to="net.VIN" />
    <trace from="J3.GND1" to="net.GND" />
    <trace from="J3.GND2" to="net.GND" />
    <trace from="J3.VOUT" to="net.VOUT" />
  </board>
)
