import { MLX90640ESF } from "./MLX90640ESF"
import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { sel } from "tscircuit"

export default () => (
  <board width={25.4} height={25.4}>
    <MLX90640ESF
      schHeight={0.8}
      pcbX={0}
      pcbY={0}
      name="U1"
      pcbRotation={135}
      schX={-0.4}
      schY={0}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["pin2", "pin3"] },
        rightSide: { direction: "top-to-bottom", pins: ["pin1", "pin4"] },
      }}
      connections={{
        pin1: sel.net().SDA,
        pin4: sel.net().SCL,
      }}
      schPinStyle={{
        pin1: {
          marginBottom: 0.2,
        },
        pin2: {
          marginBottom: 0.2,
        },
      }}
    />
    <capacitor
      name="C1"
      pcbX={-7.049}
      pcbY={5.905}
      pcbRotation={180}
      capacitance="0.1uF"
      footprint="cap0603"
      schRotation={-90}
      schX={-3.5}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().GND }}
    />
    <capacitor
      name="C2"
      pcbX={-7.049}
      pcbY={4.445}
      pcbRotation={180}
      capacitance="1uF"
      footprint="cap0603"
      schRotation={-90}
      schX={-4.8}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().GND }}
    />
    <resistor
      name="R1"
      footprint="0603"
      resistance="2.2k"
      pcbRotation={90}
      pcbX={5.08}
      schRotation={90}
      schX={2.8}
      schY={0.5}
      pcbY={-5.08}
      connections={{ pin1: sel.net().SDA }}
    />
    <resistor
      name="R2"
      footprint="0603"
      resistance="2.2k"
      pcbRotation={90}
      pcbX={7.62}
      schRotation={90}
      schX={4.2}
      schY={0.5}
      pcbY={-5.08}
      connections={{ pin1: sel.net().SCL }}
    />
    <resistor
      name="R3"
      footprint="0603"
      resistance="1k"
      schRotation={90}
      schX={-6.2}
      schY={0.5}
      pcbX={-10.16}
      pcbY={-4.445}
      connections={{ pin2: sel.net().V3_3, pin1: sel.D1.pin1 }}
    />

    <led
      name="D1"
      footprint="0603"
      color="red"
      pcbX={-10.16}
      pcbY={-5.779}
      schRotation={-90}
      schX={-6.2}
      schY={-1}
      connections={{ pin2: sel.net().GND }}
    />
    <schematictext
      text="Qwiic/I2C Connections"
      schX={-3.5}
      schY={-2.5}
      color="gray"
      anchor="left"
      fontSize={0.2}
    />
    <schematictext
      text="MLX90640"
      schX={-1}
      schY={1.8}
      color="gray"
      anchor="left"
      fontSize={0.2}
    />
    <schematictext
      text="VIN: 3-3.6V"
      schX={-1}
      schY={1.5}
      color="gray"
      anchor="left"
      fontSize={0.15}
    />
    <schematictext
      text="Cut trace on jumper JP1 to remove 12C pullups"
      schX={3.7}
      schY={1.7}
      color="gray"
      anchor="left"
      fontSize={0.15}
    />
    <schematictext
      text="I2C"
      schX={3.38}
      schY={0.95}
      color="gray"
      anchor="left"
      fontSize={0.15}
    />
    <schematictext
      text="7-bit unshifted 12C Address: 0x33"
      schX={-2}
      schY={-1.1}
      color="gray"
      anchor="left"
      fontSize={0.15}
    />
    <schematictext
      text="This is the 110 Degree FOV version of the board, there is also a board, SEN-14844, with a 55 Degree FOV"
      schX={-5.4}
      schY={-1.6}
      color="gray"
      anchor="left"
      fontSize={0.15}
    />

    <silkscreentext text="Qwiic IR Array" pcbY={10} fontSize={1.8} />
    <silkscreentext text="MLX90640" pcbY={7.5} fontSize={1.8} />
    <silkscreentext text="110x75" pcbY={5} pcbX={8.5} />
    <silkscreentext text="PWR" pcbX={-10.1} pcbY={-7.5} fontSize={1.2} />
    <silkscreentext
      text="qwicc"
      pcbX={10.1}
      pcbY={-7.5}
      fontSize={1.2}
      layer="bottom"
    />
    <silkscreentext
      text="I2C"
      pcbX={6.5}
      pcbY={-7.5}
      fontSize={1.2}
      layer="bottom"
    />

    <SM04B_SRSS_TB_LF__SN
      name="JP2"
      pcbRotation={90}
      pcbX={9.53}
      schX={-3.5}
      schY={-4}
    />
    <jumper
      name="JP3"
      schWidth={0.7}
      schDirection="left"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      schX={-3.5}
      schY={-6.5}
      pinLabels={{ pin1: ["GND"], pin2: ["VDD"], pin3: ["SDA"], pin4: ["SCL"] }}
      footprint="pinrow4_nosquareplating_id1.016_od1.88_pinlabelorthogonal_pinlabeltextalignright_doublesidedpinlabel_pinlabelverticallyinverted"
      pcbY={-11.43}
      cadModel={null}
    />
    <SM04B_SRSS_TB_LF__SN
      name="JP4"
      pcbRotation={-90}
      pcbX={-9.53}
      schX={-1}
      schY={-4}
    />
    <solderjumper
      name="JP1"
      footprint="solderjumper3_bridged123_pl1.27_pw0.635_p1"
      bridgedPins={[["1"], ["2"], ["3"]]}
      schX={3.5}
      schY={1.5}
      pcbX={7.366}
      pcbY={-5.08}
      layer="bottom"
      schRotation={180}
      connections={{
        pin3: sel.R1.pin2,
        pin1: sel.R2.pin2,
        pin2: sel.net().V3_3,
      }}
    />
    <hole diameter={3.302} pcbX={-10.16} pcbY={-10.16} />
    <hole diameter={3.302} pcbX={10.16} pcbY={-10.16} />
    <hole diameter={3.302} pcbX={10.16} pcbY={10.16} />
    <hole diameter={3.302} pcbX={-10.16} pcbY={10.16} />

    <netlabel net="V3_3" anchorSide="bottom" connectsTo={sel.U1.pin2} />
    <netlabel net="GND" anchorSide="top" connectsTo={sel.U1.pin3} />

    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP3.pin2}
      schX={-4.5}
      schY={-6}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP3.pin1}
      schX={-4.5}
      schY={-7.0}
    />
    <netlabel
      net="SDA"
      anchorSide="right"
      connectsTo={sel.JP3.pin3}
      schX={-4.8}
      schY={-6.4}
    />
    <netlabel
      net="SCL"
      anchorSide="right"
      connectsTo={sel.JP3.pin4}
      schX={-4.8}
      schY={-6.2}
    />

    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP4.pin2}
      schX={-2}
      schY={-3.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP4.pin1}
      schX={-2}
      schY={-4.5}
    />
    <netlabel
      net="SDA"
      anchorSide="right"
      connectsTo={sel.JP4.pin3}
      schX={-2.3}
      schY={-3.9}
    />
    <netlabel
      net="SCL"
      anchorSide="right"
      connectsTo={sel.JP4.pin4}
      schX={-2.3}
      schY={-3.7}
    />

    <netlabel
      net="SDA"
      anchorSide="right"
      connectsTo={sel.JP2.pin3}
      schX={-4.8}
      schY={-3.9}
    />
    <netlabel
      net="SCL"
      anchorSide="right"
      connectsTo={sel.JP2.pin4}
      schX={-4.8}
      schY={-3.7}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connectsTo={sel.JP2.pin2}
      schX={-4.5}
      schY={-3.5}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={sel.JP2.pin1}
      schX={-4.5}
      schY={-4.5}
    />
  </board>
)
