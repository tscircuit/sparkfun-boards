import { sel } from "tscircuit"
import { VCNL4040 } from "./VCNL4040"
import { JST04_1MM_RA } from "./JST04_1MM_RA"

const SectionTitle = ({
  text,
  schX,
  schY,
}: {
  text: string
  schX: number
  schY: number
}) => (
  <schematictext
    text={text}
    schX={schX}
    schY={schY}
    fontSize={0.48}
    color="#4d5fd4"
  />
)

export default () => (
  <board width="19.05mm" height="7.62mm">
    <SectionTitle text="Proximity Sensor" schX={-1.5} schY={6.5} />
    <SectionTitle text="LED" schX={11.5} schY={6.5} />
    <SectionTitle text="Connectors" schX={-4.5} schY={-4.2} />

    <VCNL4040
      name="U4"
      schX={-1.5}
      schY={2.8}
      schWidth={3.2}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin4", "pin5", "pin2", "pin1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin7", "pin8", "pin6"],
        },
      }}
      schPinStyle={{
        pin3: { marginLeft: 0.2 },
        pin4: { marginLeft: 0.2 },
        pin5: { marginLeft: 0.2 },
        pin2: { marginLeft: 0.2 },
        pin1: { marginLeft: 0.2 },
        pin7: { marginRight: 0.2 },
        pin8: { marginRight: 0.2 },
        pin6: { marginRight: 0.2 },
      }}
      pcbX={0.025}
      pcbY={0}
      pcbRotation={0}
      connections={{
        pin1: "net.GND",
        pin3: "net.V3_3",
        pin4: "net.V3_3",
        pin5: sel.U4.pin2,
        pin6: "net.INT",
        pin7: "net.SDA",
        pin8: "net.SCL",
      }}
    />

    <capacitor
      name="C1"
      capacitance="2.2uF"
      footprint="0402"
      schX={-5.5}
      schY={2.9}
      pcbX={-1.245}
      pcbY={2.232}
      schRotation={-90}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      schX={-7.2}
      schY={2.9}
      pcbX={1.295}
      pcbY={2.232}
      schRotation={-90}
    />
    <netlabel
      net="V3_3"
      schX={-7.2}
      schY={3.6}
      anchorSide="bottom"
      connectsTo={sel.C2.pin1}
    />
    <netlabel
      net="V3_3"
      schX={-5.5}
      schY={3.6}
      anchorSide="bottom"
      connectsTo={sel.C1.pin1}
    />
    <netlabel
      net="GND"
      schX={-7.2}
      schY={2.1}
      anchorSide="top"
      connectsTo={sel.C2.pin2}
    />
    <netlabel
      net="GND"
      schX={-5.5}
      schY={2.1}
      anchorSide="top"
      connectsTo={sel.C1.pin2}
    />

    <netlabel
      net="V3_3"
      schX={-3.7}
      schY={3.4}
      anchorSide="bottom"
      connectsTo={sel.U4.pin3}
    />
    <netlabel
      net="GND"
      schX={-3.7}
      schY={2.2}
      anchorSide="top"
      connectsTo={sel.U4.pin1}
    />
    <netlabel
      net="SDA"
      schX={1.2}
      schY={3.0}
      anchorSide="left"
      connectsTo={sel.U4.pin7}
    />
    <netlabel
      net="SCL"
      schX={1.2}
      schY={2.8}
      anchorSide="left"
      connectsTo={sel.U4.pin8}
    />
    <netlabel
      net="N_INT"
      schX={1.2}
      schY={2.6}
      anchorSide="left"
      connectsTo={sel.U4.pin6}
    />

    <solderjumper
      name="SJ1"
      pinCount={2}
      connections={{
        pin1: sel.R1.pin2,
        pin2: "net.V3_3",
      }}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      bridgedPins={[["1", "2"]]}
      schX={0.7}
      schY={4.8}
      schRotation={90}
      pcbX={0.025}
      pcbY={1.915}
      pcbRotation={0}
      layer="bottom"
    />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0402"
      schX={0.7}
      schY={3.6}
      pcbX={1.295}
      pcbY={-2.213}
      schRotation={90}
      connections={{ pin1: "net.INT" }}
    />
    <netlabel
      net="V3_3"
      schX={0.7}
      schY={5.4}
      anchorSide="bottom"
      connectsTo="SJ1.pin2"
    />

    <solderjumper
      name="SJ2"
      pinCount={2}
      connections={{
        pin1: sel.R2.pin1,
        pin2: "net.V3_3",
      }}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      bridgedPins={[["1", "2"]]}
      schX={12.3}
      schY={4.8}
      schRotation={90}
      pcbX={0.025}
      pcbY={-1.895}
      pcbRotation={0}
      layer="bottom"
    />
    <netlabel
      net="V3_3"
      schX={12.3}
      schY={5.4}
      anchorSide="bottom"
      connectsTo="SJ2.pin2"
    />

    <resistor
      name="R2"
      resistance="1k"
      footprint="0402"
      schX={12.3}
      schY={3.7}
      pcbX={-1.245}
      pcbY={-2.213}
      schRotation={-90}
      connections={{ pin2: "D1.pin1" }}
    />
    <led
      name="D1"
      color="red"
      footprint="0402"
      schX={12.3}
      schY={2.4}
      schRotation={-90}
      pcbX={-8.23}
      pcbY={-3.165}
      connections={{ pin2: "net.GND" }}
    />

    <netlabel
      net="GND"
      schX={12.3}
      schY={1.5}
      anchorSide="top"
      connectsTo={sel.D1.pin2}
    />
    <hole diameter={3.1} pcbX={-6.96} pcbY={0} />
    <JST04_1MM_RA
      name="J2"
      schX={-3.0}
      schY={-6.0}
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

    <testpoint
      name="TP1"
      footprintVariant="pad"
      padDiameter="0.9mm"
      schX={-4.3}
      schY={-4.9}
      pcbX={8.28}
      pcbY={0.963}
      connections={{ pin1: "net.SCL" }}
    />
    <testpoint
      name="TP2"
      footprintVariant="pad"
      padDiameter="0.9mm"
      schX={-4.5}
      schY={-4.6}
      pcbX={8.28}
      pcbY={-0.943}
      connections={{ pin1: "net.SDA" }}
    />

    <jumper
      name="J1"
      schWidth={0.45}
      schX={2.2}
      schY={-6}
      pcbX={-5.7}
      pcbY={-2.53}
      footprint="pinrow1_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal"
      cadModel={null}
      pinLabels={{ pin1: "INT" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["pin1"] },
      }}
      connections={{ pin1: "net.INT" }}
    />
    <schematictext
      text="J1"
      schX={2.2}
      schY={-7.7}
      fontSize={0.3}
      color="#245b61"
    />
    <schematictext
      text="PTH_1x1mm"
      schX={3.2}
      schY={-7.7}
      fontSize={0.3}
      color="#245b61"
    />

    <netlabel
      net="SCL"
      schX={-5}
      schY={-5.7}
      anchorSide="right"
      connectsTo={sel.J2.pin4}
    />
    <netlabel
      net="SDA"
      schX={-5}
      schY={-5.9}
      anchorSide="right"
      connectsTo={sel.J2.pin3}
    />
    <netlabel
      net="V3_3"
      schX={-4.3}
      schY={-5.4}
      anchorSide="bottom"
      connectsTo={sel.J2.pin2}
    />
    <netlabel
      net="GND"
      schX={-4.3}
      schY={-6.8}
      anchorSide="top"
      connectsTo={sel.J2.pin1}
    />
    <netlabel
      net="N_INT"
      schX={1.5}
      schY={-6}
      anchorSide="right"
      connectsTo={sel.J1.pin1}
    />
    <schematictext
      text="I2C controller must have pull-ups on I2C lines"
      schX={-3.1}
      schY={-8.5}
      fontSize={0.23}
      color="#808080"
    />
  </board>
)
