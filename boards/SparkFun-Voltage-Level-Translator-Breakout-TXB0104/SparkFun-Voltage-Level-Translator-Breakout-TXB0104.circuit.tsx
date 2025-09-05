import { sel } from "@tscircuit/core"
import { TXB0104 } from "./TXB0104"

export default () => (
  <board width="12.7mm" height="17.78mm">
    <silkscreentext
      text="TXB0104"
      fontSize={1.5}
      pcbRotation={90}
      layer="bottom"
      pcbY={5}
    />
    <silkscreentext text="OE" fontSize={1.5} pcbY={6.1} />

    <TXB0104
      name="U1"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin8", "pin2", "pin3", "pin4", "pin5"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["pin7"],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["pin1", "pin14"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin10", "pin11", "pin12", "pin13"],
        },
      }}
      schWidth={1.8}
      schHeight={2}
      schPinStyle={{
        pin8: {
          bottomMargin: 0.2,
        },
        pin1: {
          rightMargin: 0.1,
        },
        pin14: {
          leftMargin: 0.1,
        },
        pin13: {
          topMargin: 0.4,
        },
      }}
      pcbRotation={270}
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: sel.JP1.pin2,
        pin14: sel.JP2.pin2,
      }}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connectsTo={["U1.pin1", "SJ1.pin2"]}
      schY={2.5}
      schX={-0.2}
    />
    <netlabel
      net="V5"
      anchorSide="bottom"
      connection="U1.pin14"
      schY={2.5}
      schX={0.2}
    />
    <pinheader
      name="JP1"
      pinCount={7}
      footprint="pinrow7_p2.54_id1.016_od1.8769_nosquareplating_bottomsidepinlabel_pinlabelorthogonal_pinlabeltextalignleft"
      pitch="2.54mm"
      gender="female"
      schX={-4}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7"],
        },
      }}
      connections={{
        pin1: sel.U1.pin7,
        pin3: sel.U1.pin5,
        pin4: sel.U1.pin4,
        pin5: sel.U1.pin3,
        pin6: sel.U1.pin2,
        pin7: ".SJ1 > .pin1",
      }}
      schY={-0.3}
      pcbX={-5.08}
      pcbRotation={90}
      pcbPinLabels={{
        pin1: "GND",
        pin2: "VccA",
        pin3: "A4",
        pin4: "A3",
        pin5: "A2",
        pin6: "A1",
        pin7: "OE",
      }}
    />

    <solderjumper
      name="SJ1"
      footprint={
        <footprint name="SJ_2S-NOTRACE">
          <smtpad
            portHints={["1"]}
            pcbX="-0.4009mm"
            pcbY="0mm"
            width="0.635mm"
            height="1.27mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["2"]}
            pcbX="0.4127mm"
            pcbY="0mm"
            width="0.635mm"
            height="1.27mm"
            shape="rect"
            layer="top"
          />
        </footprint>
      }
      pinCount={2}
      bridgedPins={[["1", "2"]]}
      schX={-3}
      schY={1.3}
      schRotation={90}
      connections={{
        pin1: sel.U1.pin8,
      }}
      pcbX={0}
      pcbY={7.62}
      pcbRotation={270}
    />
    <schematictext
      text="OE"
      fontSize={0.2}
      color="gray"
      schX={-2.5}
      schY={0.8}
    />
    <schematictext
      text="SOLDERJUMPERC2"
      fontSize={0.2}
      color="gray"
      schX={-4.1}
      schY={1.6}
    />
    <schematictext
      text="A side Vcc from 1.2 to 3.6V"
      fontSize={0.2}
      color="gray"
      schX={-2}
      schY={2}
    />
    <schematictext
      text="B side Vcc from 1.65 to 5V"
      fontSize={0.2}
      color="gray"
      schX={1.8}
      schY={2}
    />
    <schematictext
      text="VccA *must* be less than VccB!"
      fontSize={0.2}
      color="gray"
      schX={0}
      schY={3.5}
    />
    <pinheader
      name="JP2"
      pinCount={7}
      schFacingDirection="left"
      footprint="pinrow7_p2.54_id1.016_od1.8769_nosquareplating_bottomsidepinlabel_pinlabelorthogonal_pinlabeltextalignright"
      pitch="2.54mm"
      gender="female"
      schX={4}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7"],
        },
      }}
      connections={{
        pin1: sel.net.GND,
        pin3: sel.U1.pin10,
        pin4: sel.U1.pin11,
        pin5: sel.U1.pin12,
        pin6: sel.U1.pin13,
        pin7: sel.net().DE,
      }}
      schY={-0.3}
      pcbX={5.08}
      pcbRotation={90}
      pcbPinLabels={{
        pin1: "GND",
        pin2: "VccB",
        pin3: "B4",
        pin4: "B3",
        pin5: "B2",
        pin6: "B1",
        pin7: "OE",
      }}
    />
    <netlabel
      net="DE"
      anchorSide="left"
      connection="JP2.pin7"
      schX={3.4}
      schY={1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connectsTo={["JP2.pin1", "U1.pin7"]}
      schX={1.5}
      schY={-1.8}
    />
    <schematictext
      text="B1"
      fontSize={0.15}
      color="gray"
      schX={3.3}
      schY={0.17}
    />
    <schematictext
      text="B2"
      fontSize={0.15}
      color="gray"
      schX={3.3}
      schY={-0.03}
    />
    <schematictext
      text="B3"
      fontSize={0.15}
      color="gray"
      schX={3.3}
      schY={-0.24}
    />
    <schematictext
      text="B4"
      fontSize={0.15}
      color="gray"
      schX={3.3}
      schY={-0.44}
    />
    <capacitor
      name="C1"
      footprint="0603"
      capacitance="0.1uf"
      schRotation={90}
      schY={7}
      schX={-1}
      connections={{
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
      pcbX={-2.54}
      pcbY={6.35}
      pcbRotation={90}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="C1.pin2"
      schX={-1}
      schY={8}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C1.pin1"
      schX={-1}
      schY={6}
    />

    <capacitor
      name="C2"
      footprint="0603"
      capacitance="0.1uf"
      schRotation={90}
      schY={7}
      schX={0.5}
      connections={{
        pin2: sel.net.V3_3,
        pin1: sel.net.GND,
      }}
      pcbX={2.54}
      pcbY={6.35}
      pcbRotation={90}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="C2.pin2"
      schX={0.5}
      schY={8}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C2.pin1"
      schX={0.5}
      schY={6}
    />
  </board>
)
