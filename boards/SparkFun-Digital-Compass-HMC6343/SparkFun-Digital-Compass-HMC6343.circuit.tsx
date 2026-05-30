import { HMC6343 } from "./HMC6343"
import { sel } from "@tscircuit/core"

export default () => (
  <board width="20.32mm" height="20.32mm">
    <HMC6343
      name="U1"
      schWidth="1.4mm"
      schX={15}
      schY={12.7}
      connections={{
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
        CS: sel.U1.pin34,
        pin3: sel.net.V3_3,
        pin11: sel.net.V3_3,
        pin21: sel.net.V3_3,
        pin25: sel.net.GND,
        pin29: sel.net.GND,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin11", "pin21", "pin29", "pin25"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "CS", "CS_CTRL"],
        },
      }}
      schPinStyle={{
        pin21: {
          marginBottom: 0.6,
        },
        SDA: {
          marginBottom: 0.4,
        },
      }}
    />

    <netlabel
      net="V3_3"
      schX={13.5}
      schY={14.3}
      anchorSide="bottom"
      connectsTo={sel.U1.VDD}
    />

    <netlabel
      net="GND"
      schX={13.5}
      schY={11.1}
      anchorSide="top"
      connectsTo={sel.U1.GND}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      schX={10}
      schY={12.4}
      schRotation={-90}
    />
    <netlabel
      net="V3_3"
      schX={10}
      schY={13.1}
      anchorSide="bottom"
      connectsTo={sel.C1.pin1}
    />

    <netlabel
      net="GND"
      schX={10}
      schY={11.7}
      anchorSide="top"
      connectsTo={sel.C1.pin2}
    />

    <capacitor
      name="C2"
      capacitance="1.0uF"
      footprint="0603"
      schX={12}
      schY={12.4}
      schRotation={-90}
    />
    <netlabel
      net="V3_3"
      schX={12}
      schY={13.1}
      anchorSide="bottom"
      connectsTo={sel.C2.pin1}
    />

    <netlabel
      net="GND"
      schX={12}
      schY={11.7}
      anchorSide="top"
      connectsTo={sel.C2.pin2}
    />

    <solderjumper
      name="JP1"
      footprint={
        <footprint name="Jumper_3_NC_H_Pad">
          <smtpad
            portHints={["1"]}
            pcbX="-1.016mm"
            pcbY="0mm"
            width="0.635mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["2"]}
            pcbX="0mm"
            pcbY="0mm"
            width="0.635mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["3"]}
            pcbX="1.016mm"
            pcbY="0mm"
            width="0.635mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            pcbX="-0.508mm"
            pcbY="0mm"
            width="0.381mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            pcbX="0.508mm"
            pcbY="0mm"
            width="0.381mm"
            height="0.4mm"
            shape="rect"
          />
        </footprint>
      }
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      schRotation={180}
      schX={20.5}
      schY={13.5}
      pinCount={3}
    />

    <resistor
      name="R2"
      resistance="10K"
      footprint="0603"
      schX={21.5}
      schY={12.2}
      schRotation={-90}
      connections={{
        pin1: ".JP1 > .pin1",
        pin2: "net.SDA",
      }}
    />

    <resistor
      name="R1"
      resistance="10K"
      footprint="0603"
      schX={19.5}
      schY={12.2}
      schRotation={-90}
      connections={{
        pin1: ".JP1 > .pin3",
        pin2: "net.SCL",
      }}
    />

    <netlabel
      net="V3_3"
      schX={20.5}
      schY={14}
      anchorSide="bottom"
      connectsTo={"JP1.pin2"}
    />
    <netlabel
      net="SCL"
      schX={19.5}
      schY={11.5}
      anchorSide="top"
      connectsTo={sel.R1.pin2}
    />
    <netlabel
      net="SDA"
      schX={21.5}
      schY={11.5}
      anchorSide="top"
      connectsTo={sel.R2.pin2}
    />
    <jumper
      name="J3"
      footprint={"pinrow4_id1.016_od1.88_nosquareplating_doublesidedpinlabel"}
      schWidth={0.65}
      cadModel={null}
      schDirection="left"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["V3_3"],
        pin3: ["SDA"],
        pin4: ["SCL"],
      }}
      schX={5}
      schY={12.7}
      pcbX={1.5}
      pcbY={-8.43}
      connections={{
        GND: "net.GND",
        V3_3: "net.V3_3",
      }}
    />

    <netlabel
      net="V3_3"
      schX={5.9}
      schY={13.2}
      anchorSide="bottom"
      connectsTo={"J3.pin2"}
    />
    <netlabel
      net="SDA"
      schX={6.2}
      schY={12.8}
      anchorSide="left"
      connectsTo={"J3.SDA"}
    />
    <netlabel
      net="SCL"
      schX={6.2}
      schY={13}
      anchorSide="left"
      connectsTo={"J3.SCL"}
    />
    <netlabel
      net="GND"
      schX={5.9}
      schY={12.1}
      anchorSide="top"
      connectsTo={"J3.GND"}
    />

    <hole diameter={3.1} pcbX={8.16} pcbY={8.162} />
    <hole diameter={3.1} pcbX={-8.16} pcbY={-8.158} />

    <schematictext
      text="Digital Compass HMC6343"
      fontSize={0.4}
      color="blue"
      schY={15.5}
      schX={15}
    />

    <schematictext
      text="I²C Pullups"
      fontSize={0.4}
      color="blue"
      schY={15.5}
      schX={20.5}
    />

    <schematictext
      text=" Cut jumper to remove pullups from data lines."
      fontSize={0.2}
      color="gray"
      schY={15}
      schX={20.5}
    />

    <schematictext
      text="Connectors"
      fontSize={0.4}
      color="blue"
      schY={15.5}
      schX={5}
    />

    <silkscreentext
      text="HMC6343"
      pcbX={7.8}
      pcbY={0}
      pcbRotation={90}
      fontSize={1.6}
      layer="top"
    />

    <silkscreentext
      text="Z"
      pcbX={-6.16}
      pcbY={-2.338}
      fontSize={1}
      layer="top"
    />
    <silkscreentext
      text="Y"
      pcbX={-8.66}
      pcbY={-2.338}
      fontSize={1}
      layer="top"
    />
    <silkscreentext
      text="X"
      pcbX={-8.66}
      pcbY={-4.838}
      fontSize={1}
      layer="top"
    />

    <silkscreentext
      text="Magnetometer Breakout"
      pcbX={0}
      pcbY={-4}
      fontSize={1.2}
      layer="bottom"
    />
    <silkscreentext
      text="HMC6343"
      pcbX={0}
      pcbY={-2}
      fontSize={1.2}
      layer="bottom"
    />

    <silkscreentext
      text="Z"
      pcbX={-6.26}
      pcbY={-2.338}
      fontSize={1}
      layer="bottom"
    />
    <silkscreentext
      text="Y"
      pcbX={-8.66}
      pcbY={-2.338}
      fontSize={1}
      layer="bottom"
    />
    <silkscreentext
      text="X"
      pcbX={-8.66}
      pcbY={-4.838}
      fontSize={1}
      layer="bottom"
    />

    <silkscreentext
      text="I2C"
      pcbX={6.5}
      pcbY={-5.4}
      fontSize={1}
      layer="bottom"
    />
  </board>
)
