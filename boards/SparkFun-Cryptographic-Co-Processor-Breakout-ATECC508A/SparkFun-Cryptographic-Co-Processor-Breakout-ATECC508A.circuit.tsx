import { ATECC508A } from "./ATECC508A"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { SM04B_SRSS_TB_LF__SN2 } from "./SM04B_SRSS_TB_LF__SN2"
import { sel } from "@tscircuit/core"

const MotionSensor = () => (
  <board width="25.4mm" height="25.4mm" routingDisabled>
    <capacitor
      name="C1"
      schX={5}
      schY={0.5}
      pcbX={0}
      pcbY={3}
      schRotation={-90}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().GND }}
      capacitance={"0.1uF"}
      footprint={"cap0603"}
    />
    <led
      name="D1"
      schRotation={-90}
      schX={-5}
      schY={-1.5}
      color="red"
      pcbX={10.2}
      pcbY={-5}
      footprint="0603"
      connections={{ pin2: sel.net().GND }}
    />
    <resistor
      name="R1"
      schX={-7.7}
      schY={-5}
      pcbX={0}
      pcbY={-3}
      schRotation={90}
      resistance="4.7k"
      footprint="0603"
      connections={{ pin1: sel.net().SDA }}
    />
    <resistor
      name="R2"
      schX={-6.3}
      schY={-5}
      schRotation={90}
      pcbX={0}
      pcbY={-5}
      resistance="4.7k"
      connections={{ pin1: sel.net().SCL }}
      footprint="0603"
    />
    <resistor
      name="R3"
      connections={{ pin1: sel.D1.pin1 }}
      schRotation={90}
      resistance="1k"
      pcbX={7}
      pcbY={-5}
      schX={-5}
      schY={-0.25}
      pcbRotation={180}
      footprint="0603"
    />

    <ATECC508A name="U1" pcbRotation={-90} pcbX={0} pcbY={0} />

    <silkscreentext text="qwiic" pcbX={10} pcbY={4} />
    <silkscreentext text="PWR" pcbX={10} pcbY={-6.5} />
    <silkscreentext
      text="Cryptographic Co-Processor"
      pcbX={0}
      pcbY={8}
      fontSize={1.2}
    />
    <silkscreentext text="ATECC508A" pcbX={0} pcbY={6.5} fontSize={1.2} />
    <silkscreentext
      text="Cryptographic Co-Processor"
      pcbX={0}
      pcbY={8}
      fontSize={1.2}
      layer="bottom"
    />
    <silkscreentext
      text="ATECC508A"
      pcbX={0}
      pcbY={6.5}
      fontSize={1.2}
      layer="bottom"
    />
    <silkscreentext
      text="LED"
      pcbX={8.4}
      pcbY={-3}
      fontSize={1.2}
      layer="bottom"
    />
    <silkscreentext
      text="I2C"
      pcbX={-3.5}
      pcbY={-1}
      fontSize={1.2}
      layer="bottom"
    />

    <jumper
      name="JP3"
      footprint={"pinrow4_id1.016_od1.88_nosquareplating_doublesidedpinlabel"}
      schWidth={0.65}
      cadModel={null}
      schDirection="left"
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["VDD"],
        pin3: ["SDA"],
        pin4: ["SCL"],
      }}
      schX={3}
      schY={-5}
      pcbX="0"
      pcbY={-11.5}
    />
    <SM04B_SRSS_TB_LF__SN
      schX={0}
      schY={-5}
      name="JP2"
      pcbX={-9.7}
      pcbRotation={-90}
    />
    <SM04B_SRSS_TB_LF__SN2
      schX={-3}
      schY={-5}
      name="JP1"
      pcbX={9.7}
      pcbRotation={90}
    />

    <solderjumper
      name="JP4"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.041_pw0.660_ph1.270"
      bridgedPins={[["1", "2"]]}
      schX={-5}
      schY={1}
      schRotation={-90}
      pcbX={9}
      pcbY={-5}
      layer="bottom"
      connections={{
        pin2: "R3.pin2",
        pin1: "net.V3_3",
      }}
    />

    <solderjumper
      name="JP5"
      pinCount={3}
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      footprint="solderjumper3_bridged123_p1.041_pw0.660_ph1.270"
      layer="bottom"
      schX={-7}
      schY={-4}
      pcbRotation={-90}
      schRotation={180}
      connections={{
        pin2: sel.net().V3_3,
        pin1: sel.R2.pin2,
        pin3: sel.R1.pin2,
      }}
      pcbY={-4.8}
      pcbX={-3.6}
    />

    <netlabel
      schX={-1.2}
      schY={0.5}
      net="V3_3"
      connection="U1.pin8"
      anchorSide="bottom"
    />
    <netlabel
      schX={-1.2}
      schY={-0.5}
      anchorSide="top"
      net="GND"
      connectsTo={["U1.pin4", "U1.pin9"]}
    />
    <netlabel
      schX={-4}
      schY={-5.5}
      anchorSide="top"
      net="GND"
      connectsTo={sel.JP1.pin1}
    />
    <netlabel
      schX={-4}
      schY={-4.3}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      schX={-4.3}
      schY={-4.9}
      net="SDA"
      anchorSide="right"
      connectsTo={sel.JP1.pin3}
    />
    <netlabel
      schX={-4.3}
      schY={-4.7}
      net="SCL"
      anchorSide="right"
      connectsTo={sel.JP1.pin4}
    />
    <netlabel
      schX={-1}
      schY={-4.3}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP2.pin2}
    />
    <netlabel
      schX={-1}
      schY={-5.5}
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP2.pin1}
    />
    <netlabel
      schX={-1.3}
      schY={-4.7}
      net="SCL"
      anchorSide="right"
      connectsTo={sel.JP2.pin4}
    />
    <netlabel
      schX={-1.3}
      schY={-4.9}
      net="SDA"
      anchorSide="right"
      connectsTo={sel.JP2.pin3}
    />
    <netlabel
      schX={2}
      schY={-5.5}
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP3.pin1}
    />

    <netlabel
      schX={2}
      schY={-4.3}
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP3.pin2}
    />
    <netlabel
      schX={1.6}
      schY={-4.7}
      net="SCL"
      anchorSide="right"
      connectsTo={sel.JP3.pin4}
    />
    <netlabel
      schX={1.6}
      schY={-4.9}
      net="SDA"
      anchorSide="right"
      connectsTo={sel.JP3.pin3}
    />
    <hole diameter="3.302mm" name="H1" pcbX={-10.16} pcbY={10.16} />
    <hole diameter="3.302mm" name="H2" pcbX={10.16} pcbY={10.16} />
    <hole diameter="3.302mm" name="H3" pcbX={-10.16} pcbY={-10.16} />
    <hole diameter="3.302mm" name="H4" pcbX={10.16} pcbY={-10.16} />

    <schematictext
      text="ATECC508A - CryptoAuthentication IC"
      schX={-8}
      schY={5}
      color="brown"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="VCC RANGE: 2.0V to 5.5V"
      schX={-8}
      schY={4.3}
      anchor="center"
      color="gray"
      fontSize={0.15}
    />
    <schematictext
      text="IO LEVELS: 1.8V to 5.5V"
      schX={-8}
      schY={4}
      anchor="center"
      color="gray"
      fontSize={0.15}
    />
    <schematictext
      text="Cut this jumper to"
      schX={-6.2}
      schY={1.2}
      anchor="center"
      color="gray"
      fontSize={0.15}
    />
    <schematictext
      text="disable power LED"
      schX={-6.2}
      schY={0.8}
      anchor="center"
      color="gray"
      fontSize={0.15}
    />
    <schematictext
      text="JUMPER-SMT_2_NC_TRACE_SILK"
      schX={-4.5}
      schY={2}
      schRotation={-90}
      anchor="center"
      color="gray"
      fontSize={0.15}
    />
    <schematictext
      text="DEFAULT 12C ADDRESS: 0x60"
      schX={-0.6}
      schY={-1.4}
      color="gray"
      anchor="center"
      fontSize={0.15}
    />
    <schematictext
      text="(Software definable)"
      schX={-0.6}
      schY={-1.6}
      color="gray"
      anchor="center"
      fontSize={0.15}
    />
    <schematictext
      text="This jumper connects"
      schX={-9.8}
      schY={-2.8}
      color="gray"
      anchor="center"
      fontSize={0.15}
    />
    <schematictext
      text="SDA and SCL"
      schX={-9.8}
      schY={-3}
      color="gray"
      anchor="center"
      fontSize={0.15}
    />
    <schematictext
      text="to 4.7k pull-up"
      schX={-9.8}
      schY={-3.2}
      color="gray"
      anchor="center"
      fontSize={0.15}
    />
    <schematictext
      text="resistors."
      schX={-9.8}
      schY={-3.4}
      color="gray"
      anchor="center"
      fontSize={0.15}
    />

    <schematictext
      text="JUMPER-SMT_3_2-NC_TRACE_SILK"
      schX={-7}
      schY={-5.6}
      color="gray"
      anchor="center"
      schRotation={-90}
      fontSize={0.15}
    />
  </board>
)

export default MotionSensor
