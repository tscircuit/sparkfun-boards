import { sel } from "tscircuit"
import { ThingPlus } from "./Thing-Pulse"
import { SM04B_SRSS_TB_LF__SN_J1 } from "./SM04B_SRSS_TB_LF__SN_J1"
import { SM04B_SRSS_TB_LF__SN_J2 } from "./SM04B_SRSS_TB_LF__SN_J2"
import { SM04B_SRSS_TB_LF__SN_J3 } from "./SM04B_SRSS_TB_LF__SN_J3"
import { SM04B_SRSS_TB_LF__SN_J4 } from "./SM04B_SRSS_TB_LF__SN_J4"

export default () => (
  <board width="22.76mm" height="50.66mm">
    <ThingPlus name="J5" schX={-5} schY={0} pcbX={0.05} pcbY={3.5} />

    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0603"
      schX={-7.2}
      schY={2}
      schRotation={90}
      pcbX={-3.76}
      pcbY={0.05}
      connections={{
        pin1: sel.J5.SCL,
      }}
    />

    <solderjumper
      name="I2C"
      pinCount={3}
      footprint="solderjumper3_bridged12_pl1.27_pw0.635_p1"
      bridgedPins={[["1"], ["2"], ["3"]]}
      schX={-7.85}
      schY={3.7}
      schRotation={180}
      pcbX={-0.8}
      pcbY={0.07}
      layer="top"
      connections={{
        pin1: sel.R1.pin2,
        pin3: sel.R2.pin2,
      }}
    />

    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0603"
      schX={-8.5}
      schY={2}
      schRotation={90}
      pcbX={3.86}
      pcbY={0.07}
      connections={{
        pin1: sel.J5.SDA,
      }}
    />

    <SM04B_SRSS_TB_LF__SN_J1
      name="J1"
      schX={6}
      schY={5}
      pcbX={0.05}
      pcbY={-22.25}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      connections={{
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
    />

    <SM04B_SRSS_TB_LF__SN_J2
      name="J2"
      schX={6}
      schY={3}
      pcbX={0.05}
      pcbY={22.39}
      pcbRotation={180}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      connections={{
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
    />

    <SM04B_SRSS_TB_LF__SN_J3
      name="J3"
      schX={6}
      schY={1}
      pcbX={0.05}
      pcbY={10.23}
      pcbRotation={0}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      connections={{
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
    />

    <SM04B_SRSS_TB_LF__SN_J4
      name="J4"
      schX={6}
      schY={-1}
      pcbX={0.05}
      pcbY={-10.09}
      pcbRotation={180}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin3", "pin2", "pin1"],
        },
      }}
      connections={{
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
    />

    <netlabel
      net="SCL"
      schX={7.5}
      schY={5.3}
      anchorSide="left"
      connectsTo={sel.J1.SCL}
    />
    <netlabel
      net="SCL"
      schX={7.5}
      schY={3.3}
      anchorSide="left"
      connectsTo={sel.J2.SCL}
    />
    <netlabel
      net="SCL"
      schX={7.5}
      schY={1.3}
      anchorSide="left"
      connectsTo={sel.J3.SCL}
    />
    <netlabel
      net="SCL"
      schX={7.5}
      schY={-0.7}
      anchorSide="left"
      connectsTo={sel.J4.SCL}
    />
    <netlabel
      net="SCL"
      schX={-9.4}
      schY={0.9}
      anchorSide="right"
      connectsTo={sel.J5.SCL}
    />

    <netlabel
      net="SDA"
      schX={7.5}
      schY={5.1}
      anchorSide="left"
      connectsTo={sel.J1.SDA}
    />
    <netlabel
      net="SDA"
      schX={7.5}
      schY={3.1}
      anchorSide="left"
      connectsTo={sel.J2.SDA}
    />
    <netlabel
      net="SDA"
      schX={7.5}
      schY={1.1}
      anchorSide="left"
      connectsTo={sel.J3.SDA}
    />
    <netlabel
      net="SDA"
      schX={7.5}
      schY={-0.9}
      anchorSide="left"
      connectsTo={sel.J4.SDA}
    />
    <netlabel
      net="SDA"
      schX={-9.4}
      schY={1.1}
      anchorSide="right"
      connectsTo={sel.J5.SDA}
    />

    <netlabel
      net="V3_3"
      schX={7}
      schY={5.8}
      anchorSide="bottom"
      connectsTo={sel.J1.VCC}
    />
    <netlabel
      net="V3_3"
      schX={-7.85}
      schY={4.3}
      anchorSide="bottom"
      connection="I2C.pin2"
    />

    <netlabel
      net="V3_3"
      schX={-2.2}
      schY={-0.4}
      anchorSide="bottom"
      connectsTo={sel.J5.pin27}
    />

    <netlabel
      net="GND"
      schX={7}
      schY={-1.8}
      anchorSide="top"
      connectsTo={sel.J4.GND}
    />
    <netlabel
      net="GND"
      schX={-2.8}
      schY={-1.9}
      anchorSide="top"
      connectsTo={sel.J5.GND}
    />

    <fiducial
      name="FD1"
      padDiameter="1mm"
      soldermaskPullback="1mm"
      pcbX="-10.11mm"
      pcbY="-18.98mm"
    />
    <fiducial
      name="FD2"
      padDiameter="1mm"
      soldermaskPullback="1mm"
      pcbX="-10.11mm"
      pcbY="-18.98mm"
      layer={"bottom"}
    />
    <fiducial
      name="FD3"
      padDiameter="1mm"
      soldermaskPullback="1mm"
      pcbX="7.67mm"
      pcbY="19.12mm"
    />
    <fiducial
      name="FD4"
      padDiameter="1mm"
      soldermaskPullback="1mm"
      pcbX="7.67mm"
      pcbY="19.12mm"
      layer={"bottom"}
    />

    <schematictext
      text="THING PLUS"
      color="brown"
      fontSize={0.3}
      schX={-8}
      schY={8}
    />
    <schematictext
      text="Qwiic Connectors"
      color="brown"
      fontSize={0.3}
      schX={7}
      schY={8}
    />
    <schematictext
      text="Connect this jumper if your I2C"
      color="gray"
      fontSize={0.15}
      schX={-6}
      schY={4.3}
    />
    <schematictext
      text="slave does not have pull up resistors"
      color="gray"
      fontSize={0.15}
      schX={-6}
      schY={4.1}
    />
    <schematictext
      text="Vertical Qwiic Connector"
      color="gray"
      fontSize={0.15}
      schX={6}
      schY={0.2}
    />
    <schematictext
      text="QWIIC_RIGHT_ANGLE"
      color="gray"
      fontSize={0.15}
      schX={6}
      schY={2.2}
    />
    <schematictext
      text="QWIIC_RIGHT_ANGLE"
      color="gray"
      fontSize={0.15}
      schX={6}
      schY={4.2}
    />
    <schematictext
      text="Vertical Qwiic Connector"
      color="gray"
      fontSize={0.15}
      schX={6}
      schY={-1.8}
    />

    <silkscreentext text="Qwiic" fontSize="1.5mm" pcbX={0} pcbY={9} />
    <silkscreentext text="Shield" fontSize="1.5mm" pcbX={0} pcbY={7.5} />
    <silkscreentext text="Thing Plus" fontSize="1mm" pcbX={0} pcbY={-9} />

    <silkscreentext text="SDA" pcbRotation={0} pcbX={-8} pcbY={19} />
    <silkscreentext text="SCL" pcbRotation={0} pcbX={-8} pcbY={16.3} />
    <silkscreentext text="3.3V" pcbRotation={0} pcbX={7.8} pcbY={-16.8} />
    <silkscreentext text="GND" pcbRotation={0} pcbX={8} pcbY={-11.8} />
    <silkscreentext text="Thing Pulse " pcbRotation={0} pcbX={0} pcbY={-15.8} />
    <silkscreentext text="Qwiic Shield" pcbRotation={0} pcbX={0} pcbY={-17.8} />
    <silkscreentext
      text="SDA"
      pcbRotation={0}
      pcbX={-8}
      pcbY={19}
      layer={"bottom"}
    />
    <silkscreentext
      text="SCL"
      pcbRotation={0}
      pcbX={-8}
      pcbY={16.3}
      layer={"bottom"}
    />
    <silkscreentext
      text="3.3V"
      pcbRotation={0}
      pcbX={7.8}
      pcbY={-16.8}
      layer={"bottom"}
    />
    <silkscreentext
      text="GND"
      pcbRotation={0}
      pcbX={8}
      pcbY={-11.8}
      layer={"bottom"}
    />

    <hole diameter={3.302} pcbX={8.94} pcbY={22.93} />
    <hole diameter={3.302} pcbX={-8.84} pcbY={-22.79} />
    <hole diameter={3.302} pcbX={8.94} pcbY={-22.79} />
    <hole diameter={3.302} pcbX={-8.84} pcbY={22.93} />
  </board>
)
