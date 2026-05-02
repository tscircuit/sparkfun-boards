const x = (eagleX: number) => `${eagleX - 7.62}mm`
const y = (eagleY: number) => `${eagleY - 10.16}mm`

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

const headerPinLabels = {
  pin1: ["pin1", "VL"],
  pin2: ["pin2", "GND"],
  pin3: ["pin3", "VCC"],
  pin4: ["pin4", "SDA"],
  pin5: ["pin5", "SCL"],
  pin6: ["pin6", "INT"],
} as const

const solderJumper2PinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
} as const

const solderJumper3PinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
} as const

const polarizedCapPinLabels = {
  pin1: ["pin1", "A", "pos"],
  pin2: ["pin2", "C", "neg"],
} as const

const Apds9960 = (props: any) => (
  <chip
    pinLabels={apds9960PinLabels}
    manufacturerPartNumber="APDS-9960"
    schPinArrangement={{
      leftSide: { pins: ["VDD", "GND", "LEDA"], direction: "top-to-bottom" },
      rightSide: {
        pins: ["LEDK", "LDR", "INT", "SCL", "SDA"],
        direction: "top-to-bottom",
      },
    }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1", "SDA"]}
          pcbX="0.7mm"
          pcbY="1.455mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2", "INT"]}
          pcbX="0.7mm"
          pcbY="0.485mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3", "LDR"]}
          pcbX="0.7mm"
          pcbY="-0.485mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4", "LEDK"]}
          pcbX="0.7mm"
          pcbY="-1.455mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5", "LEDA"]}
          pcbX="-0.7mm"
          pcbY="-1.455mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6", "GND"]}
          pcbX="-0.7mm"
          pcbY="-0.485mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin7", "SCL"]}
          pcbX="-0.7mm"
          pcbY="0.485mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin8", "VDD"]}
          pcbX="-0.7mm"
          pcbY="1.455mm"
          width="0.6mm"
          height="0.72mm"
          shape="rect"
        />
        <silkscreenpath
          route={[
            { x: -1.21, y: 2.02 },
            { x: 1.21, y: 2.02 },
            { x: 1.21, y: -2.02 },
            { x: -1.21, y: -2.02 },
            { x: -1.21, y: 2.02 },
          ]}
        />
        <silkscreencircle pcbX="0mm" pcbY="1.27mm" radius="0.55mm" />
        <silkscreencircle pcbX="0mm" pcbY="-1.43mm" radius="0.45mm" />
      </footprint>
    }
    {...props}
  />
)

const Header1x6 = (props: any) => (
  <chip
    pinLabels={headerPinLabels}
    schPinArrangement={{
      rightSide: {
        pins: ["INT", "SCL", "SDA", "VCC", "GND", "VL"],
        direction: "top-to-bottom",
      },
    }}
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1", "VL"]}
          pcbX="0mm"
          pcbY="0mm"
          outerDiameter="1.8796mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin2", "GND"]}
          pcbX="2.54mm"
          pcbY="0mm"
          outerDiameter="1.8796mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin3", "VCC"]}
          pcbX="5.08mm"
          pcbY="0mm"
          outerDiameter="1.8796mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin4", "SDA"]}
          pcbX="7.62mm"
          pcbY="0mm"
          outerDiameter="1.8796mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin5", "SCL"]}
          pcbX="10.16mm"
          pcbY="0mm"
          outerDiameter="1.8796mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <platedhole
          portHints={["pin6", "INT"]}
          pcbX="12.7mm"
          pcbY="0mm"
          outerDiameter="1.8796mm"
          holeDiameter="1.016mm"
          shape="circle"
        />
        <silkscreenpath
          route={[
            { x: -1.27, y: -0.635 },
            { x: -1.27, y: 0.635 },
            { x: -0.635, y: 1.27 },
            { x: 13.335, y: 1.27 },
            { x: 13.97, y: 0.635 },
            { x: 13.97, y: -0.635 },
            { x: 13.335, y: -1.27 },
            { x: -0.635, y: -1.27 },
            { x: -1.27, y: -0.635 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
)

const Resistor0603Footprint = (
  <footprint>
    <smtpad
      portHints={["pin1", "left"]}
      pcbX="-0.753364mm"
      pcbY="0mm"
      width="0.8064754mm"
      height="0.8640064mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2", "right"]}
      pcbX="0.753364mm"
      pcbY="0mm"
      width="0.8064754mm"
      height="0.8640064mm"
      shape="rect"
    />
    <silkscreenpath
      route={[
        { x: -0.356, y: 0.432 },
        { x: 0.356, y: 0.432 },
      ]}
    />
    <silkscreenpath
      route={[
        { x: -0.356, y: -0.419 },
        { x: 0.356, y: -0.419 },
      ]}
    />
  </footprint>
)

const Capacitor0603Footprint = (
  <footprint>
    <smtpad
      portHints={["pin1", "left", "pos"]}
      pcbX="-0.700024mm"
      pcbY="0mm"
      width="0.7999984mm"
      height="0.8999982mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin2", "right", "neg"]}
      pcbX="0.700024mm"
      pcbY="0mm"
      width="0.7999984mm"
      height="0.8999982mm"
      shape="rect"
    />
    <silkscreenpath
      route={[
        { x: -0.356, y: 0.432 },
        { x: 0.356, y: 0.432 },
      ]}
    />
    <silkscreenpath
      route={[
        { x: -0.356, y: -0.419 },
        { x: 0.356, y: -0.419 },
      ]}
    />
  </footprint>
)

const Resistor10k = (props: any) => (
  <resistor
    resistance="10k"
    footprint={Resistor0603Footprint}
    supplierPartNumbers={{ jlcpcb: ["C25804"] }}
    manufacturerPartNumber="A_0603WAF1002T5E"
    {...props}
  />
)

const Resistor4k7 = (props: any) => (
  <resistor
    resistance="4.7k"
    footprint={Resistor0603Footprint}
    supplierPartNumbers={{ jlcpcb: ["C23162"] }}
    manufacturerPartNumber="A_0603WAF4701T5E"
    {...props}
  />
)

const Capacitor1uF = (props: any) => (
  <capacitor
    capacitance="1uF"
    footprint={Capacitor0603Footprint}
    supplierPartNumbers={{ jlcpcb: ["C15849"] }}
    manufacturerPartNumber="CL10A105KB8NNNC"
    {...props}
  />
)

const SolderJumper2 = (props: any) => (
  <chip
    pinLabels={solderJumper2PinLabels}
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
        <silkscreenpath
          route={[
            { x: -0.8, y: -1 },
            { x: 0.8, y: -1 },
            { x: 1.1, y: -0.75 },
            { x: 1.1, y: 0.75 },
            { x: 0.8, y: 1 },
            { x: -0.8, y: 1 },
            { x: -1.1, y: 0.75 },
            { x: -1.1, y: -0.75 },
            { x: -0.8, y: -1 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
)

const SolderJumper3 = (props: any) => (
  <chip
    pinLabels={solderJumper3PinLabels}
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
        <silkscreenpath
          route={[
            { x: -1.27, y: -1.016 },
            { x: 1.27, y: -1.016 },
            { x: 1.524, y: -0.762 },
            { x: 1.524, y: 0.762 },
            { x: 1.27, y: 1.016 },
            { x: -1.27, y: 1.016 },
            { x: -1.524, y: 0.762 },
            { x: -1.524, y: -0.762 },
            { x: -1.27, y: -1.016 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
)

const Eia7343Footprint = (
  <footprint>
    <smtpad
      portHints={["pin2", "C", "neg"]}
      pcbX="-3.17mm"
      pcbY="0mm"
      width="2.55mm"
      height="2.7mm"
      shape="rect"
    />
    <smtpad
      portHints={["pin1", "A", "pos"]}
      pcbX="3.17mm"
      pcbY="0mm"
      width="2.55mm"
      height="2.7mm"
      shape="rect"
    />
    <silkscreenpath
      route={[
        { x: -5, y: 2.5 },
        { x: -5, y: -2.5 },
        { x: -2, y: -2.5 },
      ]}
    />
    <silkscreenpath
      route={[
        { x: -5, y: 2.5 },
        { x: -2, y: 2.5 },
      ]}
    />
    <silkscreenpath
      route={[
        { x: 2, y: 2.5 },
        { x: 4, y: 2.5 },
        { x: 5, y: 1.5 },
        { x: 5, y: -1.5 },
        { x: 4, y: -2.5 },
        { x: 2, y: -2.5 },
      ]}
    />
  </footprint>
)

const TantalumEia7343 = (props: any) => (
  <capacitor
    capacitance="100uF"
    polarized
    footprint={Eia7343Footprint}
    {...props}
  />
)

const Fiducial = (props: any) => (
  <chip
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="0mm"
          pcbY="0mm"
          width="1mm"
          height="1mm"
          shape="rect"
        />
      </footprint>
    }
    {...props}
  />
)

export default function SparkFunApds9960RgbGestureSensor() {
  return (
    <board width="15.24mm" height="20.32mm" layers={2} thickness="1.6mm">
      <Header1x6
        name="JP1"
        pcbX={x(1.27)}
        pcbY={y(1.27)}
        schX={-8.5}
        schY={-1.4}
        schWidth="1.1"
        schHeight="1"
      />

      <Apds9960
        name="U1"
        pcbX={x(7.62)}
        pcbY={y(15.24)}
        schX={6.5}
        schY={0.5}
        schWidth="1.96"
        schHeight="0.8"
      />
      <Resistor10k
        name="R1"
        pcbX={x(11.43)}
        pcbY={y(13.335)}
        schX={9.7}
        schY={1.45}
        schOrientation="vertical"
      />
      <Resistor4k7
        name="R2"
        pcbX={x(8.89)}
        pcbY={y(10.795)}
        pcbRotation={270}
        schX={-5.2}
        schY={1.5}
        schOrientation="vertical"
      />
      <Resistor4k7
        name="R3"
        pcbX={x(11.43)}
        pcbY={y(10.795)}
        pcbRotation={90}
        schX={-3.6}
        schY={1.5}
        schOrientation="vertical"
      />
      <Resistor10k
        name="R4"
        pcbX={x(3.81)}
        pcbY={y(10.795)}
        pcbRotation={90}
        schX={2.5}
        schY={1.3}
        schOrientation="vertical"
      />
      <Capacitor1uF
        name="C2"
        pcbX={x(6.35)}
        pcbY={y(10.795)}
        pcbRotation={270}
        schX={4.5}
        schY={-2.0}
        schOrientation="vertical"
      />
      <Capacitor1uF
        name="C3"
        pcbX={x(3.81)}
        pcbY={y(13.335)}
        schX={4.3}
        schY={1.9}
        schOrientation="vertical"
      />
      <TantalumEia7343
        name="C1"
        pcbX={x(7.62)}
        pcbY={y(6.35)}
        pcbRotation={180}
        schX={3.0}
        schY={-2.0}
        schOrientation="vertical"
      />
      <SolderJumper3
        name="SJ1"
        pcbX={x(13.97)}
        pcbY={y(10.795)}
        pcbRotation={270}
        schX={-4.4}
        schY={3.4}
        schHeight="0.4"
      />
      <SolderJumper2
        name="SJ2"
        pcbX={x(1.27)}
        pcbY={y(10.795)}
        pcbRotation={90}
        schX={2.5}
        schY={3.0}
      />

      <Fiducial
        name="FID1"
        pcbX={x(14.224)}
        pcbY={y(4.318)}
        noSchematicRepresentation
      />
      <Fiducial
        name="FID2"
        pcbX={x(5.842)}
        pcbY={y(19.304)}
        noSchematicRepresentation
      />
      <hole
        name="STANDOFF1"
        diameter="3.302mm"
        pcbX={x(2.54)}
        pcbY={y(17.78)}
      />
      <hole
        name="STANDOFF2"
        diameter="3.302mm"
        pcbX={x(12.7)}
        pcbY={y(17.78)}
      />

      <silkscreentext
        text="VL"
        pcbX={x(1.27)}
        pcbY={y(2.994)}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="GND"
        pcbX={x(3.81)}
        pcbY={y(2.994)}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="VCC"
        pcbX={x(6.35)}
        pcbY={y(2.994)}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="SDA"
        pcbX={x(8.89)}
        pcbY={y(2.994)}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="SCL"
        pcbX={x(11.43)}
        pcbY={y(2.994)}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="INT"
        pcbX={x(13.97)}
        pcbY={y(2.994)}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="PS"
        pcbX={x(1.27)}
        pcbY={y(8.5)}
        pcbRotation={90}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="I2C"
        pcbX={x(13.335)}
        pcbY={y(8.336)}
        pcbRotation={90}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="PU"
        pcbX={x(14.351)}
        pcbY={y(8.636)}
        pcbRotation={90}
        fontSize="0.8128mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="JP1"
        pcbX={x(14.1)}
        pcbY={y(0.65)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="U1"
        pcbX={x(9.9)}
        pcbY={y(15.24)}
        fontSize="0.55mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="R1"
        pcbX={x(11.43)}
        pcbY={y(14.55)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="R2"
        pcbX={x(8.05)}
        pcbY={y(10.05)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="R3"
        pcbX={x(12.25)}
        pcbY={y(10.05)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="R4"
        pcbX={x(3.0)}
        pcbY={y(11.65)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="C1"
        pcbX={x(7.62)}
        pcbY={y(3.9)}
        fontSize="0.55mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="C2"
        pcbX={x(5.45)}
        pcbY={y(10.0)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="C3"
        pcbX={x(3.15)}
        pcbY={y(14.4)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="SJ1"
        pcbX={x(13.1)}
        pcbY={y(12.05)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="SJ2"
        pcbX={x(2.45)}
        pcbY={y(10.8)}
        fontSize="0.5mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="FID1"
        pcbX={x(13.0)}
        pcbY={y(4.25)}
        fontSize="0.45mm"
        anchorAlignment="center"
      />
      <silkscreentext
        text="FID2"
        pcbX={x(4.7)}
        pcbY={y(19.25)}
        fontSize="0.45mm"
        anchorAlignment="center"
      />
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
