import { JST05_1MM_RA } from "./JST05_1MM_RA"
import { HMC6343 } from "./HMC6343"
import { JST04_1MM_RA } from "./JST04_1MM_RA"
import { sel } from "@tscircuit/core"

const HMC6343Qwiic = () => (
  <board width="25.4mm" height="25.4mm">
    <HMC6343
      name="U1"
      schWidth="1.4mm"
      schX={12.7}
      schY={12.7}
      connections={{
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
        DRDY: "net.DRDY",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "GND"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["DRDY", "SDA", "SCL"],
        },
      }}
      schPinStyle={{
        VDD: {
          marginBottom: 0.6,
        },
        SDA: {
          marginBottom: 0.4,
        },
      }}
    />

    <netlabel
      net="V3_3"
      schX={11.3}
      schY={13.3}
      anchorSide="bottom"
      connectsTo={sel.U1.VDD}
    />

    <netlabel
      net="GND"
      schX={11.3}
      schY={12.1}
      anchorSide="top"
      connectsTo={sel.U1.GND}
    />

    <capacitor
      name="C1"
      capacitance="1.0uF"
      footprint="0402"
      schX={9.985}
      schY={12.4}
      pcbX={-5.715}
      pcbY={0.952}
      schRotation={-90}
    />
    <netlabel
      net="V3_3"
      schX={9.985}
      schY={13.1}
      anchorSide="bottom"
      connectsTo={sel.C1.pin1}
    />

    <netlabel
      net="GND"
      schX={9.985}
      schY={11.7}
      anchorSide="top"
      connectsTo={sel.C1.pin2}
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
      layer={"bottom"}
      pcbX={9.132}
      pcbY={-5.398}
      pcbRotation="0"
      schX={19.832}
      schY={12.502}
      pinCount={3}
      schRotation="-90deg"
    />

    <resistor
      name="R2"
      resistance="2.2k"
      footprint="0603"
      pcbX={8.255}
      pcbY={-5.398}
      pcbRotation="270deg"
      schX={20.73}
      schY={13.2}
      connections={{
        pin1: ".JP1 > .pin1",
      }}
    />

    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0603"
      pcbX={10.16}
      pcbY={-5.398}
      pcbRotation="270deg"
      schX={20.73}
      schY={11.8}
      connections={{
        pin1: ".JP1 > .pin3",
        pin2: "net.SCL",
      }}
    />

    <netlabel
      net="SCL"
      schX={21.8}
      schY={11.8}
      anchorSide="left"
      connectsTo={sel.R1.pin2}
    />
    <netlabel
      net="SDA"
      schX={21.9}
      schY={13.2}
      anchorSide="left"
      connectsTo={sel.R2.pin2}
    />
    <netlabel
      net="V3_3"
      schX={18.985}
      schY={12.7}
      anchorSide="bottom"
      connectsTo={"JP1.pin2"}
    />

    <netlabel
      net="V3_3"
      schX={27.032}
      schY={13.92}
      anchorSide="bottom"
      connectsTo="LED.pin2"
    />

    <solderjumper
      name="LED"
      connections={{ pin1: "R3.pin1" }}
      bridgedPins={[["1"], ["2"]]}
      schRotation={90}
      pcbX={-6.668}
      pcbY={-5.398}
      schX={27.032}
      schY={13.32}
      footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
      pcbRotation={180}
      layer="bottom"
    />

    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0402"
      schX={27.032}
      schY={12.22}
      pcbX={-9.843}
      pcbY={-6.348}
      schRotation={-90}
      connections={{ pin1: "LED.pin1", pin2: "D1.pin1" }}
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      schX={27.032}
      schY={11.02}
      schRotation={-90}
      pcbX={-9.843}
      pcbY={-4.761}
      connections={{ pin2: "net.GND" }}
    />

    <netlabel
      net="GND"
      schX={27.032}
      schY={10.32}
      anchorSide="top"
      connectsTo={"D1.pin2"}
    />

    <JST04_1MM_RA
      name="J1"
      schX={12.7}
      schY={5}
      pcbX={9.62}
      pcbY={0}
      pcbRotation={90}
      connections={{
        GND: "net.GND",
        V3_3: "net.V3_3",
      }}
    />
    <netlabel
      net="V3_3"
      schX={11.7}
      schY={5.5}
      anchorSide="bottom"
      connectsTo={"J1.pin2"}
    />
    <netlabel
      net="SDA"
      schX={11.5}
      schY={5.1}
      anchorSide="right"
      connectsTo={"J1.SDA"}
    />
    <netlabel
      net="SCL"
      schX={11.5}
      schY={5.3}
      anchorSide="right"
      connectsTo={"J1.SCL"}
    />
    <netlabel
      net="GND"
      schX={11.7}
      schY={4.5}
      anchorSide="top"
      connectsTo={"J1.GND"}
    />

    <JST05_1MM_RA
      name="J2"
      schX={17.7}
      schY={5}
      pcbX={-9.62}
      pcbY={0}
      pcbRotation={270}
      connections={{
        GND: "net.GND",
        V3_3: "net.V3_3",
      }}
    />
    <netlabel
      net="V3_3"
      schX={16.7}
      schY={5.5}
      anchorSide="bottom"
      connectsTo={"J2.pin2"}
    />
    <netlabel
      net="SDA"
      schX={16.5}
      schY={5.1}
      anchorSide="right"
      connectsTo={"J2.SDA"}
    />
    <netlabel
      net="SCL"
      schX={16.5}
      schY={5.3}
      anchorSide="right"
      connectsTo={"J2.SCL"}
    />
    <netlabel
      net="GND"
      schX={16.7}
      schY={4.5}
      anchorSide="top"
      connectsTo={"J2.GND"}
    />
    <jumper
      name="J3"
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
        pin2: ["V3_3"],
        pin3: ["SDA"],
        pin4: ["SCL"],
      }}
      schX={22.2}
      schY={4.7}
      pcbX={-1.08}
      pcbY={-11.43}
      connections={{
        GND: "net.GND",
        V3_3: "net.V3_3",
      }}
    />

    <netlabel
      net="V3_3"
      schX={21.1}
      schY={5.2}
      anchorSide="bottom"
      connectsTo={"J3.pin2"}
    />
    <netlabel
      net="SDA"
      schX={20.9}
      schY={4.8}
      anchorSide="right"
      connectsTo={"J3.SDA"}
    />
    <netlabel
      net="SCL"
      schX={20.9}
      schY={5}
      anchorSide="right"
      connectsTo={"J3.SCL"}
    />
    <netlabel
      net="GND"
      schX={21.1}
      schY={4.1}
      anchorSide="top"
      connectsTo={"J3.GND"}
    />

    <jumper
      name="J4"
      footprint="pinrow1_id1.016_od1.88_nosquareplating"
      cadModel={null}
      pcbX={5.08}
      pcbY={-11.43}
      schWidth={0.6}
      schDirection="left"
      schX={22.1}
      schY={3.4}
      connections={{
        pin1: "net.DRDY",
      }}
    />
    <netlabel
      net="DRDY"
      schX={21}
      schY={3.4}
      anchorSide="right"
      connectsTo="J4.pin1"
    />
    <hole diameter={3.1} pcbX={-10.16} pcbY={10.162} />
    <hole diameter={3.1} pcbX={10.16} pcbY={10.162} />
    <hole diameter={3.1} pcbX={-10.16} pcbY={-10.158} />
    <hole diameter={3.1} pcbX={10.16} pcbY={-10.158} />

    <schematictext
      text="Digital Compass - HMC6343"
      fontSize={0.4}
      color="blue"
      schY={15.5}
      schX={12}
    />

    <schematictext
      text="I²C Pullups"
      fontSize={0.4}
      color="blue"
      schY={15.5}
      schX={21}
    />

    <schematictext
      text=" Cut jumper to remove pullups from data lines."
      fontSize={0.2}
      color="gray"
      schY={15}
      schX={21}
    />

    <schematictext
      text="Power LED"
      fontSize={0.4}
      color="blue"
      schY={15.5}
      schX={27}
    />

    <schematictext
      text="Cut jumper to turn off power LED"
      fontSize={0.2}
      color="gray"
      schY={15}
      schX={27}
    />

    <schematictext
      text="Connectors"
      fontSize={0.4}
      color="blue"
      schY={8}
      schX={18}
    />

    <schematictext
      text="Connectors"
      fontSize={0.4}
      color="blue"
      schY={8}
      schX={18}
    />
  </board>
)

export default HMC6343Qwiic
