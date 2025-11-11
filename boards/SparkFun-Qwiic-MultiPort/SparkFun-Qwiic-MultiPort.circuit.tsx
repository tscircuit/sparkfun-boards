import { OutlineBuilder } from "../../util/OutlineBuilder"
import { sel } from "tscircuit"
import { SM04B_SRSS_TB_LF__SN1 } from "./SM04B_SRSS_TB_LF__SN1"
import { SM04B_SRSS_TB_LF__SN2 } from "./SM04B_SRSS_TB_LF__SN2"
import { SM04B_SRSS_TB_LF__SN3 } from "./SM04B_SRSS_TB_LF__SN3"
import { SM04B_SRSS_TB_LF__SN4 } from "./SM04B_SRSS_TB_LF__SN4"

const outline = new OutlineBuilder(-3.805, 12.7)
  .lineTo(3.805, 12.7)
  .lineTo(3.805, 3.805)
  .lineTo(12.7, 3.805)
  .lineTo(12.7, -3.805)
  .lineTo(3.805, -3.805)
  .lineTo(3.805, -12.7)
  .lineTo(-3.805, -12.7)
  .lineTo(-3.805, -3.805)
  .lineTo(-12.7, -3.805)
  .lineTo(-12.7, 3.805)
  .lineTo(-3.805, 3.805)
  .toArray()
export default () => (
  <board outline={outline} routingDisabled>
    <SM04B_SRSS_TB_LF__SN1
      name="JP1"
      pcbY={-9.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
    />
    <SM04B_SRSS_TB_LF__SN2
      name="JP4"
      pcbRotation={180}
      schX={5}
      schY={-4}
      pcbY={9.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
    />
    <SM04B_SRSS_TB_LF__SN3
      name="JP2"
      pcbRotation={-90}
      schY={-4}
      pcbX={-9.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
    />
    <SM04B_SRSS_TB_LF__SN4
      name="JP3"
      pcbRotation={90}
      schX={5}
      pcbX={9.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
    />
    <resistor
      name="R1"
      footprint={"0603"}
      resistance="1k"
      schX={11}
      schRotation={90}
      schY={-1.4}
      pcbX={-2.032}
      pcbY={3.302}
      connections={{ pin2: sel.JP5.pin1 }}
    />
    <led
      name="D1"
      schX={11}
      schRotation={-90}
      schY={-2.9}
      footprint={"0603"}
      color="red"
      pcbX={-2.032}
      pcbY={4.699}
      connections={{ pin1: sel.R1.pin1, pin2: sel.net().GND }}
    />
    <hole diameter={3.048} pcbX={3.9} pcbY={3.9} />
    <hole diameter={3.048} pcbX={-3.9} pcbY={-3.9} />
    <solderjumper
      name="JP5"
      footprint="solderjumper2_bridged12_pl1.27_pw0.635_p1"
      bridgedPins={[["1"], ["2"]]}
      schX={11}
      schY={0}
      pcbX={-1.511}
      pcbY={6.223}
      layer="bottom"
      schRotation={90}
      connections={{ pin2: sel.net().V3_3 }}
    />
    <netlabel
      net="SCL"
      schY={0.3}
      schX={1.3}
      anchorSide="left"
      connectsTo={sel.JP1.pin4}
    />
    <netlabel
      net="SDA"
      schY={0.1}
      schX={1.3}
      anchorSide="left"
      connectsTo={sel.JP1.pin3}
    />
    <netlabel
      net="V3_3"
      schY={0.5}
      schX={1}
      anchorSide="bottom"
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      net="GND"
      schY={-0.5}
      schX={1}
      anchorSide="top"
      connectsTo={sel.JP1.pin1}
    />

    <netlabel
      net="SCL"
      schY={-3.7}
      schX={1.3}
      anchorSide="left"
      connectsTo={sel.JP2.pin4}
    />
    <netlabel
      net="SDA"
      schY={-3.9}
      schX={1.3}
      anchorSide="left"
      connectsTo={sel.JP2.pin3}
    />
    <netlabel
      net="V3_3"
      schY={-3.5}
      schX={1}
      anchorSide="bottom"
      connectsTo={sel.JP2.pin2}
    />
    <netlabel
      net="GND"
      schY={-4.5}
      schX={1}
      anchorSide="top"
      connectsTo={sel.JP2.pin1}
    />

    <netlabel
      net="SCL"
      schY={0.3}
      schX={6.3}
      anchorSide="left"
      connectsTo={sel.JP3.pin4}
    />
    <netlabel
      net="SDA"
      schY={0.1}
      schX={6.3}
      anchorSide="left"
      connectsTo={sel.JP3.pin3}
    />
    <netlabel
      net="V3_3"
      schY={0.5}
      schX={6}
      anchorSide="bottom"
      connectsTo={sel.JP3.pin2}
    />
    <netlabel
      net="GND"
      schY={-0.5}
      schX={6}
      anchorSide="top"
      connectsTo={sel.JP3.pin1}
    />

    <netlabel
      net="SCL"
      schY={-3.7}
      schX={6.3}
      anchorSide="left"
      connectsTo={sel.JP4.pin4}
    />
    <netlabel
      net="SDA"
      schY={-3.9}
      schX={6.3}
      anchorSide="left"
      connectsTo={sel.JP4.pin3}
    />
    <netlabel
      net="V3_3"
      schY={-3.5}
      schX={6}
      anchorSide="bottom"
      connectsTo={sel.JP4.pin2}
    />
    <netlabel
      net="GND"
      schY={-4.5}
      schX={6}
      anchorSide="top"
      connectsTo={sel.JP4.pin1}
    />

    <schematictext
      text="Qwiic Connectors"
      color="brown"
      fontSize={0.3}
      schX={3}
      schY={2.5}
    />

    <schematictext
      text="Power LED"
      color="brown"
      fontSize={0.3}
      schX={11}
      schY={2.5}
    />
  </board>
)
