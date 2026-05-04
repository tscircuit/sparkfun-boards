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
    <board width="15.24mm" height="20.32mm" layers={2} thickness="1.6mm">
      <pinheader
        name="JP1"
        pinCount={6}
        pinLabels={["VL", "GND", "VCC", "SDA", "SCL", "INT"]}
        footprint="pinrow6_p2.54_id1.016_od1.8796_nosquareplating_doublesidedpinlabel"
        pcbX="-0.05mm"
        pcbY="-8.89mm"
        schX={-8.5}
        schY={-1.4}
        schWidth="1.1"
        schHeight="1"
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
        schX={6.5}
        schY={0.5}
        pcbRotation={-90}
        schWidth="1.96"
        schHeight="0.8"
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
        footprint="0603"
        resistance="10k"
        pcbX="3.81mm"
        pcbY="3.175mm"
        schX={9.7}
        schY={1.45}
        schOrientation="vertical"
      />
      <resistor
        name="R2"
        footprint="0603"
        resistance="4.7k"
        pcbX="1.27mm"
        pcbY="0.635mm"
        pcbRotation={270}
        schX={-5.2}
        schY={1.5}
        schOrientation="vertical"
      />
      <resistor
        name="R3"
        footprint="0603"
        resistance="4.7k"
        pcbX="3.81mm"
        pcbY="0.635mm"
        pcbRotation={90}
        schX={-3.6}
        schY={1.5}
        schOrientation="vertical"
      />
      <resistor
        name="R4"
        displayName="DNP"
        doNotPlace
        footprint="0603"
        resistance="10k"
        pcbX="-3.81mm"
        pcbY="0.635mm"
        pcbRotation={90}
        schX={2.5}
        schY={1.3}
        schOrientation="vertical"
      />
      <capacitor
        name="C2"
        footprint="0603"
        capacitance="1.0uF"
        pcbX="-1.27mm"
        pcbY="0.635mm"
        pcbRotation={270}
        schX={4.5}
        schY={-2.0}
        schOrientation="vertical"
      />
      <capacitor
        name="C3"
        footprint="0603"
        capacitance="1.0uF"
        pcbX="-3.81mm"
        pcbY="3.175mm"
        schX={4.3}
        schY={1.9}
        schOrientation="vertical"
      />
      <capacitor
        name="C1"
        footprint="kicad:Capacitor_Tantalum_SMD/CP_EIA-7343-31_Kemet-D"
        capacitance="100uF"
        polarized
        pcbX="0mm"
        pcbY="-3.81mm"
        pcbRotation={180}
        schX={3.0}
        schY={-2.0}
        schOrientation="vertical"
      />
      <solderjumper
        name="SJ1"
        pinCount={3}
        footprint={
          <footprint>
            <smtpad
              portHints={["pin1"]}
              pcbX="-0.8128mm"
              pcbY="0mm"
              width="0.635mm"
              height="1.27mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin2"]}
              pcbX="0mm"
              pcbY="0mm"
              width="0.635mm"
              height="1.27mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin3"]}
              pcbX="0.8128mm"
              pcbY="0mm"
              width="0.635mm"
              height="1.27mm"
              shape="rect"
            />
          </footprint>
        }
        pcbX="6.17mm"
        pcbY="0.635mm"
        pcbRotation={270}
        schX={-4.4}
        schY={3.4}
        schHeight="0.4"
      />
      <solderjumper
        name="SJ2"
        pinCount={2}
        footprint={
          <footprint>
            <smtpad
              portHints={["pin1"]}
              pcbX="-0.4119mm"
              pcbY="0mm"
              width="0.635mm"
              height="1.27mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin2"]}
              pcbX="0.4119mm"
              pcbY="0mm"
              width="0.635mm"
              height="1.27mm"
              shape="rect"
            />
          </footprint>
        }
        pcbX="-6.35mm"
        pcbY="0.635mm"
        pcbRotation={90}
        schX={2.5}
        schY={3.0}
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
        text="I2C Pullup\nEnable"
        schX={-3.1}
        schY={3.25}
        fontSize={0.24}
        color="red"
        anchor="center"
      />
      <schematictext
        text="Connect\nPower Supplies"
        schX={1.25}
        schY={2.25}
        fontSize={0.24}
        color="red"
        anchor="center"
      />
      <schematictext
        text="I2C Addr: 0x39"
        schX={6.9}
        schY={3.25}
        fontSize={0.25}
        color="red"
        anchor="center"
      />

      <trace from="JP1.VL" to="U1.LEDA" schDisplayLabel="VL" />
      <trace from="JP1.VL" to="C2.pin1" schDisplayLabel="VL" />
      <trace from="JP1.VL" to="C1.pin1" schDisplayLabel="VL" />
      <trace from="JP1.VL" to="SJ2.pin1" schDisplayLabel="VL" />
      <trace from="JP1.VL" to="R4.pin1" schDisplayLabel="VL" />

      <trace from="JP1.GND" to="U1.GND" schDisplayLabel="GND" />
      <trace from="JP1.GND" to="C1.pin2" schDisplayLabel="GND" />
      <trace from="JP1.GND" to="C2.pin2" schDisplayLabel="GND" />
      <trace from="JP1.GND" to="C3.pin2" schDisplayLabel="GND" />

      <trace from="JP1.VCC" to="U1.VDD" schDisplayLabel="VCC" />
      <trace from="JP1.VCC" to="C3.pin1" schDisplayLabel="VCC" />
      <trace from="JP1.VCC" to="R1.pin2" schDisplayLabel="VCC" />
      <trace from="JP1.VCC" to="R4.pin2" schDisplayLabel="VCC" />
      <trace from="JP1.VCC" to="SJ1.pin2" schDisplayLabel="VCC" />
      <trace from="JP1.VCC" to="SJ2.pin2" schDisplayLabel="VCC" />

      <trace from="JP1.SDA" to="U1.SDA" schDisplayLabel="SDA" />
      <trace from="JP1.SDA" to="R2.pin1" schDisplayLabel="SDA" />
      <trace from="JP1.SCL" to="U1.SCL" schDisplayLabel="SCL" />
      <trace from="JP1.SCL" to="R3.pin1" schDisplayLabel="SCL" />
      <trace from="JP1.INT" to="U1.INT" schDisplayLabel="INT" />
      <trace from="JP1.INT" to="R1.pin1" schDisplayLabel="INT" />

      <trace from="R2.pin2" to="SJ1.pin3" schDisplayLabel="SDA" />
      <trace from="R3.pin2" to="SJ1.pin1" schDisplayLabel="SCL" />
      <trace from="U1.LEDK" to="U1.LDR" />
    </board>
  )
}
