import { sel } from "@tscircuit/core"
import { RS485SOIC } from "./RS485SOIC"
import { RJ45_8PTH, SCREWTERMINAL_3_5MM_3 } from "./footprints"

export default () => (
  <board width="22.86mm" height="27.94mm">
    <pinheader
      name="JP9"
      pinCount={5}
      footprint="pinrow5_p2.54_id1.016_od1.8769_nosquareplating_nopinlabels"
      showSilkscreenPinLabels={false}
      gender="female"
      connections={{
        pin1: sel.net.VCC,
        pin2: sel.net().RX_I,
        pin3: sel.net().TX_O,
        pin4: sel.R3.pin2,
        pin5: sel.net.GND,
      }}
      pcbX={-8.89}
      pcbRotation={270}
    />
    <silkscreentext text="RTS" fontSize={1.5} pcbX={-8} pcbY={-7.8} />
    <silkscreentext text="RS485 Breakout" fontSize={1.5} pcbX={0} pcbY={9} />

    <resistor
      resistance="330"
      footprint="0603"
      name="R3"
      schX={2}
      schY={-1}
      pcbX={-3.81}
      pcbY={-6.35}
      schRotation={90}
      connections={{
        pin1: sel.LED3.anode,
        pin2: sel.JP9.pin4,
      }}
    />
    <led
      name="LED3"
      footprint="0603_textbottom"
      pcbX={-3.81}
      pcbRotation={0}
      pcbY={-7.874}
      color="Green"
      schX={1.997}
      schY={-2.5}
      schRotation={-90}
    />
    <netlabel
      net="GND"
      schX={2}
      schY={-3.4}
      connection="LED3.pin2"
      anchorSide="top"
    />
    <netlabel
      net="GND"
      schX={1}
      schY={-0.5}
      connection="JP9.pin5"
      anchorSide="top"
    />
    <netlabel
      net="VCC"
      schX={1}
      schY={0.5}
      connection="JP9.pin1"
      anchorSide="bottom"
    />

    <RS485SOIC
      name="U2"
      connections={{
        RO: sel.net().TX_O,
        DE: sel.U2.pin2,
        pin2: sel.net().RTS,
        DI: sel.net().RX_I,
        GND: sel.net.GND,
        A: sel.net().A,
        B: sel.net().B,
        VCC: sel.net.VCC,
      }}
      schX={7}
      pcbX={-3.81}
      pcbY={0}
    />
    <netlabel
      net="GND"
      schX={8.5}
      schY={-0.5}
      connection="U2.pin5"
      anchorSide="top"
    />
    <netlabel
      net="VCC"
      schX={8.5}
      schY={0.5}
      connection="U2.pin8"
      anchorSide="bottom"
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      footprint="0603"
      schX={10}
      pcbX={-6.477}
      pcbY={5.461}
      pcbRotation={90}
      schRotation="-90deg"
      connections={{
        pin1: sel.net.VCC,
        pin2: sel.net.GND,
      }}
    />
    <netlabel
      net="VCC"
      schX={10}
      schY={1}
      connection="C3.pin1"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={10}
      schY={-1}
      connection="C3.pin2"
      anchorSide="top"
    />

    <pinheader
      name="JP1"
      pinCount={4}
      footprint="pinrow4_p2.54_id1.016_od1.8769_doublesidedpinlabel"
      gender="female"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      pcbPinLabels={{ pin1: "5", pin2: "3", pin3: "2", pin4: "1" }}
      pitch="1mm"
      pcbY={-12.7}
      schX={13}
      schY={4}
      connections={{
        pin1: sel.net().N5,
        pin2: sel.net().N3,
        pin3: sel.net().N2,
        pin4: sel.net().N1,
      }}
    />
    <pinheader
      name="JP2"
      pinCount={3}
      footprint={SCREWTERMINAL_3_5MM_3}
      gender="female"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      pcbRotation={90}
      pitch="1mm"
      pcbX={6.35}
      pcbY={-3.429}
      schX={13}
      schY={2}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.R4.pin1,
        pin3: sel.R4.pin2,
      }}
    />
    <netlabel
      net="GND"
      schX={14}
      schY={1.5}
      connection="JP2.pin1"
      anchorSide="top"
    />
    <resistor
      resistance="220"
      footprint="0603"
      name="R4"
      schX={15}
      schY={2}
      schRotation={90}
      pcbX={-4.064}
      pcbY={5.08}
      pcbRotation={180}
      connections={{
        pin1: sel.net().B,
        pin2: sel.net().A,
      }}
    />
    <netlabel
      net="A"
      anchorSide="left"
      connection="R4.pin2"
      schX={15.5}
      schY={2.55}
    />
    <netlabel
      net="B"
      anchorSide="left"
      connection="R4.pin1"
      schX={15.5}
      schY={1.45}
    />
    <pinheader
      name="JP3"
      pinCount={3}
      footprint="pinrow3_p2.54_id1.016_od1.8769_nosquareplating_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal"
      gender="female"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3"],
        },
      }}
      pcbRotation={90}
      pitch="1mm"
      pcbX={10.16}
      schX={13}
      schY={-0.5}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net().A,
        pin3: sel.net().B,
      }}
      pcbPinLabels={{ pin1: "G", pin2: "A", pin3: "B" }}
    />
    <netlabel
      net="GND"
      schX={14}
      schY={-1}
      connection="JP3.pin1"
      anchorSide="top"
    />

    <pinheader
      name="JP4"
      pinCount={8}
      footprint={RJ45_8PTH}
      gender="female"
      pitch="2.54mm"
      pinLabels={["1", "2", "3", "4", "5", "6", "7", "8"]}
      schX={13}
      schY={-3}
      pcbX={8.89}
      pcbRotation={90}
      connections={{
        pin1: sel.net().N1,
        pin2: sel.net().N2,
        pin3: sel.net().N3,
        pin4: sel.JP4.pin5,
        pin5: sel.net.GND,
        pin6: sel.net().N5,
        pin7: sel.net().B,
        pin8: sel.net().A,
      }}
      schWidth={0.9}
    />
    <netlabel
      net="GND"
      schX={16}
      schY={-3.5}
      connection="JP4.pin5"
      anchorSide="top"
    />
    <schematictext
      text="RJ45-8PTH"
      color="gray"
      fontSize={0.2}
      schX={13}
      schY={-4.1}
    />
    <hole diameter="3.32mm" pcbX={-8.89} pcbY={-11.43} />
    <hole diameter="3.32mm" pcbX={8.89} pcbY={11.43} />
    <hole diameter="3.32mm" pcbX={8.89} pcbY={-11.43} />
    <hole diameter="3.32mm" pcbX={-8.89} pcbY={11.43} />
  </board>
)
