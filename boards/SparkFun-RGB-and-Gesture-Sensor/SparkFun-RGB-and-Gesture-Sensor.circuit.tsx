import { CA45_D_10V_100uF_K } from "./imports/CA45_D_10V_100uF_K"

const apds9960PinLabels = {
  pin1: ["pin1", "SDA"],
  pin2: ["pin2", "INT"],
  pin3: ["pin3", "LDR"],
  pin4: ["pin4", "LEDK"],
  pin5: ["pin5", "LEDA"],
  pin6: ["pin6", "GND"],
  pin7: ["pin7", "SCL"],
  pin8: ["pin8", "VDD"],
} as const

export default function SparkFunApds9960RgbGestureSensor() {
  return (
    <board
      width="15.24mm"
      height="20.32mm"
      layers={2}
      thickness="1.6mm"
    >
      <pinheader
        name="JP1"
        pinCount={6}
        pinLabels={["VL", "GND", "VCC", "SDA", "SCL", "INT"]}
        footprint="pinrow6_p2.54_id1.016_od1.8796_nosquareplating_doublesidedpinlabel"
        pcbX="-0.05mm"
        pcbY="-8.89mm"
        schX={-8.7}
        schY={0}
        schWidth="1.1"
        schHeight="1.8"
        schPinArrangement={{
          rightSide: {
            pins: ["INT", "SCL", "SDA", "VCC", "GND", "VL"],
            direction: "top-to-bottom",
          },
        }}
      />

      <chip
        name="U1"
        pinLabels={apds9960PinLabels}
        manufacturerPartNumber="APDS-9960"
        footprint="kicad:Sensor/Avago_APDS-9960"
        cadModel={null}
        pcbX="0mm"
        pcbY="5.08mm"
        schX={6.0}
        schY={0.45}
        pcbRotation={-90}
        schWidth="2.35"
        schHeight="1.45"
        schPinArrangement={{
          leftSide: {
            pins: ["VDD", "GND", "LEDA"],
            direction: "top-to-bottom",
          },
          rightSide: {
            pins: ["LEDK", "LDR", "INT", "SCL", "SDA"],
            direction: "top-to-bottom",
          },
        }}
      />
      <resistor
        name="R1"
        footprint="0402"
        resistance="10k"
        pcbX="3.81mm"
        pcbY="3.175mm"
        schX={8.75}
        schY={0.85}
        schOrientation="vertical"
      />
      <resistor
        name="R2"
        footprint="0402"
        resistance="4.7k"
        pcbX="1.27mm"
        pcbY="0.635mm"
        pcbRotation={270}
        schX={-5.25}
        schY={1.65}
        schOrientation="vertical"
      />
      <resistor
        name="R3"
        footprint="0402"
        resistance="4.7k"
        pcbX="3.81mm"
        pcbY="0.635mm"
        pcbRotation={90}
        schX={-4.2}
        schY={1.65}
        schOrientation="vertical"
      />
      <resistor
        name="R4"
        displayName="DNP"
        doNotPlace
        footprint="0402"
        resistance="10k"
        pcbX="-3.81mm"
        pcbY="0.635mm"
        pcbRotation={90}
        schX={2.05}
        schY={1.35}
        schOrientation="vertical"
      />
      <capacitor
        name="C2"
        footprint="0603"
        capacitance="1.0uF"
        pcbX="-1.27mm"
        pcbY="0.635mm"
        pcbRotation={270}
        schX={4.2}
        schY={-1.9}
        schOrientation="vertical"
      />
      <capacitor
        name="C3"
        footprint="0603"
        capacitance="1.0uF"
        pcbX="-3.81mm"
        pcbY="3.175mm"
        schX={3.55}
        schY={1.65}
        schOrientation="vertical"
      />
      <CA45_D_10V_100uF_K
        name="C1"
        pcbX="0mm"
        pcbY="-3.81mm"
        pcbRotation={180}
        schX={2.8}
        schY={-1.9}
      />
      <solderjumper
        name="SJ1"
        pinCount={3}
        footprint="solderjumper3_unbridged123_p0.8_pw0.635_ph1.270"
        pcbX="6.17mm"
        pcbY="0.635mm"
        pcbRotation={270}
        schX={-4.75}
        schY={3.0}
        schHeight="0.4"
      />
      <solderjumper
        name="SJ2"
        pinCount={2}
        footprint="solderjumper2_unbridged123_p0.8_pw0.635_ph1.270"
        pcbX="-6.35mm"
        pcbY="0.635mm"
        pcbRotation={90}
        schX={1.3}
        schY={2.35}
      />

      <fiducial
        name="FID1"
        padDiameter="1mm"
        soldermaskPullback="1mm"
        pcbX="6.604mm"
        pcbY="-5.842mm"
      />
      <fiducial
        name="FID2"
        padDiameter="1mm"
        soldermaskPullback="1mm"
        pcbX="-1.778mm"
        pcbY="9.144mm"
      />
      <hole name="STANDOFF1" diameter="3.302mm" pcbX="-5.08mm" pcbY="7.62mm" />
      <hole name="STANDOFF2" diameter="3.302mm" pcbX="5.08mm" pcbY="7.62mm" />

      <schematictext
        text="I2C Pullup"
        schX={-3.45}
        schY={2.45}
        fontSize={0.24}
        color="red"
        anchor="center"
      />
      <schematictext
        text="Connect"
        schX={-0.35}
        schY={1.65}
        fontSize={0.24}
        color="red"
        anchor="center"
      />
      <schematictext
        text="I2C Addr: 0x39"
        schX={6.75}
        schY={2.75}
        fontSize={0.25}
        color="red"
        anchor="center"
      />

      <trace from="JP1.VL" to="U1.LEDA" />
      <trace from="JP1.VL" to="C2.pin1" />
      <trace from="JP1.VL" to="C1.pin1" />
      <trace from="JP1.VL" to="SJ2.pin1" />
      <trace from="JP1.VL" to="R4.pin1" />

      <trace from="JP1.GND" to="U1.GND" />
      <trace from="JP1.GND" to="C1.pin2" />
      <trace from="JP1.GND" to="C2.pin2" />
      <trace from="JP1.GND" to="C3.pin2" />

      <trace from="JP1.VCC" to="U1.VDD" />
      <trace from="JP1.VCC" to="C3.pin1" />
      <trace from="JP1.VCC" to="R1.pin1" />
      <trace from="JP1.VCC" to="R4.pin2" />
      <trace from="JP1.VCC" to="SJ1.pin2" />
      <trace from="JP1.VCC" to="SJ2.pin2" />

      <trace from="JP1.SDA" to="U1.SDA" />
      <trace from="JP1.SDA" to="R2.pin1" />
      <trace from="JP1.SCL" to="U1.SCL" />
      <trace from="JP1.SCL" to="R3.pin1" />
      <trace from="JP1.INT" to="U1.INT" />
      <trace from="JP1.INT" to="R1.pin2" />
      <netlabel
        net="VL"
        connection="JP1.VL"
        schX={-7.45}
        schY={-0.75}
        anchorSide="left"
      />
      <netlabel
        net="GND"
        connection="JP1.GND"
        schX={-7.1}
        schY={-0.35}
        anchorSide="top"
      />
      <netlabel
        net="VCC"
        connection="JP1.VCC"
        schX={-3.35}
        schY={0.05}
        anchorSide="bottom"
      />
      <netlabel
        net="SDA"
        connection="JP1.SDA"
        schX={-3.8}
        schY={0.45}
        anchorSide="left"
      />
      <netlabel
        net="SCL"
        connection="JP1.SCL"
        schX={-3.4}
        schY={0.85}
        anchorSide="left"
      />
      <netlabel
        net="INT"
        connection="JP1.INT"
        schX={-7.45}
        schY={1.15}
        anchorSide="left"
      />
      <netlabel
        net="VCC"
        connection="SJ1.pin2"
        schX={-4.75}
        schY={3.65}
        anchorSide="bottom"
      />
      <netlabel
        net="VCC"
        connection="C3.pin1"
        schX={3.2}
        schY={2.75}
        anchorSide="bottom"
      />
      <netlabel
        net="VL"
        connection="C1.pin1"
        schX={1.2}
        schY={-0.9}
        anchorSide="left"
      />
      <netlabel
        net="GND"
        connection="C1.pin2"
        schX={3.3}
        schY={-2.65}
        anchorSide="top"
      />
      <netlabel
        net="GND"
        connection="C2.pin2"
        schX={4.2}
        schY={-2.65}
        anchorSide="top"
      />
      <netlabel
        net="GND"
        connection="U1.GND"
        schX={4.75}
        schY={0.45}
        anchorSide="left"
      />
      <netlabel
        net="SCL"
        connection="U1.SCL"
        schX={8}
        schY={0.25}
        anchorSide="left"
      />
      <netlabel
        net="SDA"
        connection="U1.SDA"
        schX={8}
        schY={0.05}
        anchorSide="left"
      />
      <netlabel
        net="INT"
        connection="U1.INT"
        schX={8}
        schY={0.45}
        anchorSide="left"
      />
      <netlabel
        net="VCC"
        connection="R1.pin1"
        schX={8.75}
        schY={1.9}
        anchorSide="bottom"
      />
      <trace from="R2.pin2" to="SJ1.pin3" schDisplayLabel="SDA" />
      <trace from="R3.pin2" to="SJ1.pin1" schDisplayLabel="SCL" />
      <trace from="U1.LEDK" to="U1.LDR" />
    </board>
  )
}
