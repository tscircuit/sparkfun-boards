import { barePinRow } from "../../util/bare-pin-row"
import { FT232RL } from "./FT232RL"
import { TYPE_C_31_M_12 } from "./TYPE_C_31_M_12"
import { MST22D18G2_125 } from "./MST22D18G2_125"
import { sel } from "@tscircuit/core"

const selectors = {
  U1: sel.U1(FT232RL),
  USBC: sel.USBC(TYPE_C_31_M_12),
  JP1: sel<
    | "GND"
    | "TXLED"
    | "RXLED"
    | "VCC"
    | "V3_3"
    | "CTS"
    | "SLEEP"
    | "TXDEN"
    | "PWREN"
  >("JP1"),
  JP2: sel<
    "TXD" | "DTR" | "RTS" | "VCCIO" | "RXD" | "RI" | "GND" | "DSR" | "DCD"
  >("JP2"),
  JP3: sel<"VCC" | "TXD" | "RXD" | "GND">("JP3"),
  net: sel.net<
    | "TXD"
    | "DTR"
    | "RTS"
    | "VCCIO"
    | "RXD"
    | "RI"
    | "GND"
    | "DSR"
    | "DCD"
    | "GND"
    | "TXLED"
    | "RXLED"
    | "VCC"
    | "V3_3"
    | "CTS"
    | "SLEEP"
    | "TXDEN"
    | "PWREN"
  >(),
}

const USBToSerialBreakout = () => (
  <board width="18mm" height="35mm" autorouter="auto-local">
    <trace from="LED1.pin2" to="net.TXLED" />
    <trace from="LED2.pin2" to="net.RXLED" />
    <autoroutingphase minBoardEdgeClearance="0.3mm" />
    <FT232RL
      name="U1"
      pcbRotation={90}
      pcbY={-5}
      connections={{
        TXD: "net.TXD",
        DTR: "net.DTR",
        RTS: "net.RTS",
        RI: "net.RI",
        DCD: "net.DCD",
        DSR: "net.DSR",
        CTS: "net.CTS",
        VCCIO: "net.VCCIO",
        RXD: "net.RXD",
        GND1: "net.GND",
        GND2: "net.GND",
        GND3: "net.GND",
        AGND: "net.GND",
        TEST: "net.GND",
        CBUS4: "net.SLEEP",
        CBUS2: "net.TXDEN",
        CBUS3: "net.PWREN",
        CBUS0: sel.LED1.pin2,
        CBUS1: sel.LED2.pin2,
        VCC: sel.F1.pin2,
        USBDM: selectors.USBC.D_MINUS,
        USBDP: selectors.USBC.D_PLUS,
        V3_3OUT: sel.C1.pin2,
      }}
    />

    <TYPE_C_31_M_12
      name="USBC"
      pcbY={12.2}
      pcbRotation={180}
      schX={-12.5}
      schY={0.1}
      connections={{
        pin1: "net.GND",
        pin2: "net.GND",
        pin3: "net.GND",
        pin20: "net.GND",
        pin12: "net.GND",
        pin13: "net.GND",
        pin18: "net.GND",
        pin19: "net.GND",
        pin14: "net.VBUS",
        pin15: "net.VBUS",
        pin16: "net.VBUS",
        pin17: "net.VBUS",
        pin6: "net.USB_DM",
        pin8: "net.USB_DM",
        pin7: "net.USB_DP",
        pin9: "net.USB_DP",
        CC1: "R3.pin1",
        CC2: "R4.pin1",
      }}
    />

    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0402"
      layer="bottom"
      pcbX={-1.5}
      pcbY={12.2}
      schX={-14}
      schY={-2.5}
      schRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <resistor
      name="R4"
      resistance="5.1k"
      footprint="0402"
      layer="bottom"
      pcbX={1.5}
      pcbY={12.2}
      schX={-12.5}
      schY={-2.5}
      schRotation={90}
      connections={{ pin2: "net.GND" }}
    />

    <fuse
      name="F1"
      currentRating="0.5"
      voltageRating="220"
      footprint="0402"
      pcbX={6}
      pcbY={8}
      pcbRotation={90}
      schY={0.5}
      schX={-9}
      connections={{
        pin1: selectors.USBC.VCC,
      }}
    />

    <resistor
      name="R1"
      resistance="0.33k"
      footprint="0603"
      schX={3}
      schRotation={90}
      pcbX={7.1}
      pcbY={-16}
      connections={{ pin1: sel.LED1.pin1, pin2: "net.VCCIO" }}
    />

    <resistor
      name="R2"
      resistance="0.33k"
      footprint="0603"
      schX={4}
      schRotation={90}
      pcbX={-5.5}
      pcbY={-5.06}
      pcbRotation={90}
      connections={{ pin1: sel.LED2.pin1, pin2: "net.VCCIO" }}
    />

    <led
      name="LED1"
      footprint="0402"
      schRotation={270}
      schY={-2}
      schX={3}
      pcbX={-6.3}
      pcbY={-13.6}
      color="red"
      schDisplayValue="Red"
    />

    <led
      name="LED2"
      footprint="0402"
      schRotation={270}
      schY={-2}
      schX={4}
      pcbX={6.3}
      pcbY={-13.6}
      color="red"
      schDisplayValue="Green"
    />

    <capacitor
      name="C1"
      capacitance="100000pF"
      footprint="cap0603"
      schY={-2}
      schX={-5}
      pcbX={-5.5}
      pcbY={-2.075}
      schRotation={90}
      pcbRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      maxDecouplingTraceLength="5mm"
    />

    <capacitor
      name="C2"
      capacitance="100000pF"
      footprint="cap0603"
      schY={-2}
      schX={-8}
      pcbX={-5.5}
      pcbY={-8.12}
      schRotation={90}
      connections={{ pin1: "net.GND", pin2: "net.VCC" }}
      maxDecouplingTraceLength="20mm"
      pcbRotation={90}
    />

    <capacitor
      name="C5"
      capacitance="10000000pF"
      footprint="cap0603"
      schY={-2}
      schX={-6.5}
      pcbX={-5.5}
      pcbY={8}
      schRotation={270}
      pcbRotation={90}
      polarized
      connections={{ pin1: sel.F1.pin2, pin2: sel.net.GND }}
      maxDecouplingTraceLength="20mm"
    />

    <jumper
      name="JP1"
      pinLabels={{
        pin1: "GND",
        pin2: "TXLED",
        pin3: "RXLED",
        pin4: "VCC",
        pin5: "V3_3",
        pin6: "CTS",
        pin7: "SLEEP",
        pin8: "TXDEN",
        pin9: "PWREN",
      }}
      footprint={barePinRow("pinrow9_nosquareplating")}
      cadModel={null}
      pcbY={0}
      pcbX={7.6}
      pcbRotation={90}
      schDirection="left"
      schX={7}
      schY={3}
      connections={{
        pin1: selectors.net.GND,
        pin2: selectors.net.TXLED,
        pin3: selectors.net.RXLED,
        pin4: selectors.net.VCC,
        pin5: selectors.net.V3_3,
        pin6: selectors.net.CTS,
        pin7: selectors.net.SLEEP,
        pin8: selectors.net.TXDEN,
        pin9: selectors.net.PWREN,
      }}
    />

    <jumper
      name="JP2"
      footprint={barePinRow(
        "pinrow9_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal",
      )}
      cadModel={null}
      pcbX={-7.6}
      pcbRotation={90}
      pcbY={0}
      schDirection="left"
      schX={7}
      schY={-2}
      pinLabels={{
        pin1: ["TXD"],
        pin2: ["DTR"],
        pin3: ["RTS"],
        pin4: ["VCCIO"],
        pin5: ["RXD"],
        pin6: ["RI"],
        pin7: ["GND"],
        pin8: ["DSR"],
        pin9: ["DCD"],
      }}
      connections={{
        TXD: selectors.net.TXD,
        DTR: selectors.net.DTR,
        RTS: selectors.net.RTS,
        VCCIO: selectors.net.VCCIO,
        RXD: selectors.net.RXD,
        RI: selectors.net.RI,
        GND: selectors.net.GND,
        DSR: selectors.net.DSR,
        DCD: selectors.net.DCD,
      }}
    />
    <jumper
      name="JP3"
      footprint="pinrow4"
      pcbX={0}
      pcbRotation="180"
      schDirection="left"
      pcbY={-16}
      schX={0}
      schY={-5}
      pinLabels={{
        pin1: "VCC",
        pin2: "TXD",
        pin3: "RXD",
        pin4: "GND",
      }}
      connections={{
        VCC: selectors.net.VCC,
        TXD: selectors.net.TXD,
        RXD: selectors.net.RXD,
        GND: selectors.net.GND,
      }}
    />
    <MST22D18G2_125 name="SW3" schX={-5} schY={-6} pcbY={5} />
    <netlabel
      schX={-4.62}
      schY={-6.07}
      anchorSide="left"
      net="VCC"
      connectsTo={[sel.SW3.pin3]}
    />
    <netlabel
      schX={-4.62}
      schY={-5.83}
      anchorSide="left"
      net="V3_3"
      connectsTo={[sel.SW3.pin2]}
    />
    <netlabel
      schX={-5.37}
      schY={-5.98}
      anchorSide="right"
      net="VCCIO"
      connectsTo={[sel.SW3.pin1]}
    />
    <schematictext
      fontSize={0.3}
      text="Vcc = 2.7V to 5.5V"
      schX={-4}
      schY={5}
      anchor="center_left"
    />
    <schematictext
      fontSize={0.3}
      text="GND = 1100000 (0x60) (Default)"
      schX={-4.5}
      schY={-7.5}
      anchor="center_left"
    />
    <schematictext
      fontSize={0.3}
      text="VCC - 1100001 (0x61)"
      schX={-4.5}
      schY={-8}
      anchor="center_left"
    />
  </board>
)

export default USBToSerialBreakout
