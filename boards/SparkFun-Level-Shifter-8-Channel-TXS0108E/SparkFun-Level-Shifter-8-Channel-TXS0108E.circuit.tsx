import { sel } from "tscircuit"
import { TXS0108EQWRKSRQ1 } from "./TXS0108EQWRKSRQ1"

const selectors = {
  net: sel.net<
    | "A1"
    | "A2"
    | "A3"
    | "A4"
    | "A5"
    | "A6"
    | "A7"
    | "A8"
    | "B1"
    | "B2"
    | "B3"
    | "B4"
    | "B5"
    | "B6"
    | "B7"
    | "B8"
    | "VCCA"
    | "VCCB"
    | "OE"
  >(),
}

export default () => (
  <board width="27.95mm" height="12.7mm">
    <TXS0108EQWRKSRQ1
      name="U1"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["A1", "A2", "A3", "A4", "VCCA", "OE", "A5", "A6", "A7", "A8"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["B1", "B2", "B3", "B4", "VCCB", "GND", "B5", "B6", "B7", "B8"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["EP"],
        },
      }}
      schWidth={1.5}
      schX={0}
      schY={0}
      pcbX="1.265mm"
      pcbY="0mm"
      connections={{
        A1: selectors.net.A1,
        A2: selectors.net.A2,
        A3: selectors.net.A3,
        A4: selectors.net.A4,
        A5: selectors.net.A5,
        A6: selectors.net.A6,
        A7: selectors.net.A7,
        A8: selectors.net.A8,
        B1: selectors.net.B1,
        B2: selectors.net.B2,
        B3: selectors.net.B3,
        B4: selectors.net.B4,
        B5: selectors.net.B5,
        B6: selectors.net.B6,
        B7: selectors.net.B7,
        B8: selectors.net.B8,
        VCCA: selectors.net.VCCA,
        VCCB: selectors.net.VCCB,
        GND: sel.net.GND,
        EP: sel.net.GND,
        OE: selectors.net.OE,
      }}
    />
    <netlabel
      net="VCCA"
      connectsTo={sel<"VCCA">("U1").VCCA}
      schX={-2}
      schY={0.5}
      anchorSide="bottom"
    />
    <netlabel
      net="OE"
      connectsTo={sel<"OE">("U1").OE}
      schX={-2.5}
      schY={-0.1}
    />
    <netlabel
      net="VCCB"
      connectsTo={sel<"VCCB">("U1").VCCB}
      schX={2}
      schY={0.5}
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      connectsTo={sel.U1.GND}
      schX={2}
      schY={-0.5}
      anchorSide="top"
    />
    <resistor
      resistance="100k"
      name="R1"
      footprint="0603"
      pcbX="6.345mm"
      pcbY="-1.651mm"
      pcbRotation={270}
      connections={{
        pin1: sel.net.GND,
        pin2: sel<"OE">("U1").OE,
      }}
      schX={-2}
      schY={-1}
      schRotation={90}
    />
    <capacitor
      name="C3"
      capacitance="10uF"
      footprint="0603"
      pcbX="-6.355mm"
      pcbY="-1.651mm"
      pcbRotation={90}
      schY={4}
      schX={4}
      schRotation={270}
      connections={{
        pin2: sel.C1.pin2,
        pin1: sel.C1.pin1,
      }}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="0603"
      pcbX="-6.355mm"
      pcbY="1.651mm"
      pcbRotation={270}
      schY={4}
      schX={7}
      schRotation={270}
      connections={{
        pin2: sel.C2.pin2,
        pin1: sel.C2.pin1,
      }}
    />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      pcbX="-3.815"
      pcbY="-1.651mm"
      pcbRotation={90}
      schY={4}
      schX={5}
      schRotation={270}
      connections={{
        pin2: sel.net.GND,
        pin1: selectors.net.VCCA,
      }}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0603"
      pcbX="-3.815"
      pcbY="1.651mm"
      pcbRotation={270}
      schY={4}
      schX={6}
      schRotation={270}
      connections={{
        pin2: sel.net.GND,
        pin1: selectors.net.VCCB,
      }}
    />
    <jumper
      name="J1"
      pcbX="-0.005mm"
      pcbY="-5.08mm"
      footprint="pinrow11_id1.016_od1.880_p2.54_nosquareplating_pinlabelorthogonal_pinlabeltextalignright_doublesidedpinlabel"
      schY={-4}
      schX={4}
      pinLabels={{
        pin1: ["OE"],
        pin2: ["A8"],
        pin3: ["A7"],
        pin4: ["A6"],
        pin5: ["A5"],
        pin6: ["A4"],
        pin7: ["A3"],
        pin8: ["A2"],
        pin9: ["A1"],
        pin10: ["VCCA"],
        pin11: ["GND"],
      }}
      connections={{
        OE: selectors.net.OE,
        A8: selectors.net.A8,
        A7: selectors.net.A7,
        A6: selectors.net.A6,
        A5: selectors.net.A5,
        A4: selectors.net.A4,
        A3: selectors.net.A3,
        A2: selectors.net.A2,
        A1: selectors.net.A1,
        GND: sel.net.GND,
        VCCA: selectors.net.VCCA,
      }}
    />
    <netlabel
      net="VCCA"
      connectsTo={sel<"VCCA">("J1").VCCA}
      schX={5.3}
      schY={-2.5}
    />
    <netlabel
      net="GND"
      connectsTo={sel.J1.GND}
      anchorSide="top"
      schX={5.8}
      schY={-3.3}
    />
    <jumper
      name="J2"
      pcbX="-1.275mm"
      pcbY="5.08mm"
      footprint="pinrow10_id1.016_od1.880_p2.54_nosquareplating_pinlabelorthogonal_pinlabeltextalignleft_doublesidedpinlabel"
      schY={-4}
      schX={8}
      pinLabels={{
        pin1: ["B8"],
        pin2: ["B7"],
        pin3: ["B6"],
        pin4: ["B5"],
        pin5: ["B4"],
        pin6: ["B3"],
        pin7: ["B2"],
        pin8: ["B1"],
        pin9: ["VCCB"],
        pin10: ["GND"],
      }}
      connections={{
        B8: selectors.net.B8,
        B7: selectors.net.B7,
        B6: selectors.net.B6,
        B5: selectors.net.B5,
        B4: selectors.net.B4,
        B3: selectors.net.B3,
        B2: selectors.net.B2,
        B1: selectors.net.B1,
        GND: sel.net.GND,
        VCCB: selectors.net.VCCB,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["GND", "VCCB", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
        },
      }}
    />
    <netlabel
      net="VCCB"
      connectsTo={sel<"VCCB">("J2").VCCB}
      schX={6.7}
      schY={-2.5}
    />
    <netlabel
      net="GND"
      connectsTo={sel.J2.GND}
      anchorSide="top"
      schX={6.3}
      schY={-3.3}
    />

    <silkscreentext
      text="TXS0108"
      layer="bottom"
      fontSize={1}
      pcbX={0}
      pcbY={0}
    />
    <silkscreentext text="TXS0108" fontSize={1} pcbX={11} pcbY={0} />

    <schematictext
      text="Headers"
      schX={3.4}
      schY={-1}
      color="brown"
      anchor="left"
      fontSize={0.3}
    />
    <schematictext
      text="Bypass Capacitors"
      schX={3.4}
      schY={6}
      color="brown"
      anchor="left"
      fontSize={0.3}
    />
    <schematictext
      text="TSX0108"
      schX={-3.4}
      schY={6}
      color="brown"
      anchor="left"
      fontSize={0.3}
    />

    <schematictable schY={3.5} borderWidth={0.02}>
      <schematicrow height={0.6}>
        <schematiccell text="Must have VCCA <= VCCB" colSpan={2} width={2.5} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="VCCA Range:" width={2.5} />
        <schematiccell text="VCCB Range:" width={2.5} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="1.4V to 3.6V" width={2.5} />
        <schematiccell text="1.65V to 5.5V" width={2.5} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell
          text="OE voltage is referenced to VCCA"
          colSpan={2}
          width={2.5}
        />
      </schematicrow>
    </schematictable>
  </board>
)
