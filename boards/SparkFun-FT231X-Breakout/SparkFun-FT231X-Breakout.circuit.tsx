import { FT231X } from "./FT231X"
import { USB_MICRO_B } from "./USB_MICRO_B"
import { sel } from "tscircuit"

/**
 * SparkFun FT231X Breakout - Based on official schematic ft231x-breakout-v01
 * Full UART hardware handshaking with USB-to-Serial conversion
 */

const FT231XBreakout = () => (
  <board width="25mm" height="36mm" autorouter="auto-cloud">
    {/* ===== USB Connector ===== */}
    <USB_MICRO_B
      name="USB"
      pcbY={16}
      pcbRotation={180}
      schX={-12}
      schY={0}
      connections={{
        VBUS: "net.VCC",
        GND: "net.GND",
        SHIELD1: "net.GND",
        SHIELD2: "net.GND",
      }}
    />

    {/* ===== Main FT231XS IC ===== */}
    <FT231X
      name="U1"
      pcbX={0}
      pcbY={5}
      schX={-4}
      schY={0}
      connections={{
        TXD: "net.TXD",
        RXD: "net.RXD",
        RTS: "net.RTS",
        CTS: "net.CTS",
        DTR: "net.DTR",
        CBUS0: "net.CBUS0",
        CBUS1: "net.CBUS1",
        CBUS2: "net.RXLED",
        CBUS3: "net.TXLED",
        GND1: "net.GND",
        GND2: "net.GND",
        GND3: "net.GND",
        VCC: "net.VCC",
        V3_3: sel.C2.pin1,
        V3_3OUT: "net.V3_3",
        USBDP: sel.R1.pin2,
        USBDM: sel.R2.pin2,
        RESET: sel.C5.pin1,
        OSCI: "net.GND",
        OSCO: "net.GND",
      }}
    />

    {/* ===== USB Series Resistors R1, R2 (27Ω each) ===== */}
    <resistor
      name="R1"
      resistance="27"
      footprint="0402"
      schX={-9}
      schY={-1}
      pcbX={-5}
      pcbY={12}
      connections={{
        pin1: sel.USB.D_PLUS,
      }}
    />

    <resistor
      name="R2"
      resistance="27"
      footprint="0402"
      schX={-9}
      schY={-2}
      pcbX={-5}
      pcbY={10}
      connections={{
        pin1: sel.USB.D_MINUS,
      }}
    />

    {/* ===== USB Data Line Capacitors C3, C4 (47pF) ===== */}
    <capacitor
      name="C3"
      capacitance="47pF"
      footprint="0402"
      schX={-8}
      schY={-3}
      pcbX={-8}
      pcbY={12}
      connections={{
        pin1: sel.R1.pin1,
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C4"
      capacitance="47pF"
      footprint="0402"
      schX={-8}
      schY={-4}
      pcbX={-8}
      pcbY={10}
      connections={{
        pin1: sel.R2.pin1,
        pin2: "net.GND",
      }}
    />

    {/* ===== Power Decoupling Capacitors ===== */}
    {/* C1: 10uF on VCC */}
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      schX={-2}
      schY={4}
      pcbX={6}
      pcbY={12}
      connections={{
        pin1: "net.VCC",
        pin2: "net.GND",
      }}
    />

    {/* C2: 0.1uF on 3V3 */}
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      schX={0}
      schY={4}
      pcbX={6}
      pcbY={9}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />

    {/* C5: 0.1uF on RESET */}
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      schX={-6}
      schY={-5}
      pcbX={6}
      pcbY={6}
      connections={{
        pin1: sel.U1.pin1,
        pin2: "net.GND",
      }}
    />

    {/* ===== DTR Auto-Reset Circuit ===== */}
    {/* Q1: 2N7002 N-Channel MOSFET for DTR reset */}
    <chip
      name="Q1"
      footprint="sot23"
      schX={-6}
      schY={-8}
      pcbX={-2}
      pcbY={-4}
      pinLabels={{
        pin1: ["G"],
        pin2: ["S"],
        pin3: ["D"],
      }}
      connections={{
        pin1: sel.R5.pin2,
        pin2: "net.GND",
        pin3: "net.RESET_OUT",
      }}
    />

    {/* R7: 10k pull-up on RESET output */}
    <resistor
      name="R7"
      resistance="10k"
      footprint="0402"
      schX={-4}
      schY={-7}
      pcbX={2}
      pcbY={-4}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.RESET_OUT",
      }}
    />

    {/* R5: 10k gate resistor */}
    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      schX={-8}
      schY={-8}
      pcbX={-6}
      pcbY={-4}
      connections={{
        pin1: "net.DTR",
      }}
    />

    {/* R6: 10k gate pull-down */}
    <resistor
      name="R6"
      resistance="10k"
      footprint="0402"
      schX={-6}
      schY={-9}
      pcbX={-4}
      pcbY={-7}
      connections={{
        pin1: sel.R5.pin2,
        pin2: "net.GND",
      }}
    />

    {/* ===== Status LEDs ===== */}
    {/* TXLED (active low from CBUS3) */}
    <resistor
      name="R4"
      resistance="1k"
      footprint="0402"
      schX={6}
      schY={2}
      pcbX={8}
      pcbY={4}
      connections={{
        pin1: "net.V3_3",
        pin2: sel.LED1.pin1,
      }}
    />

    <led
      name="LED1"
      footprint="0603"
      color="green"
      schX={6}
      schY={0}
      pcbX={8}
      pcbY={1}
      schDisplayValue="TXLED"
      connections={{
        pin2: "net.TXLED",
      }}
    />

    {/* RXLED (active low from CBUS2) */}
    <resistor
      name="R3"
      resistance="1k"
      footprint="0402"
      schX={8}
      schY={2}
      pcbX={8}
      pcbY={-2}
      connections={{
        pin1: "net.V3_3",
        pin2: sel.LED2.pin1,
      }}
    />

    <led
      name="LED2"
      footprint="0603"
      color="yellow"
      schX={8}
      schY={0}
      pcbX={8}
      pcbY={-5}
      schDisplayValue="RXLED"
      connections={{
        pin2: "net.RXLED",
      }}
    />

    {/* ===== JP1: Arduino Compatible 6-pin Header (Bottom) ===== */}
    <pinheader
      name="JP1"
      pinCount={6}
      pitch="2.54mm"
      schX={12}
      schY={2}
      pcbX={-3}
      pcbY={-17}
      pcbRotation={0}
      pinLabels={{
        pin1: "RESET",
        pin2: "RXD",
        pin3: "TXD",
        pin4: "VOUT",
        pin5: "CTS",
        pin6: "GND",
      }}
      connections={{
        pin1: "net.RESET_OUT",
        pin2: "net.RXD",
        pin3: "net.TXD",
        pin4: "net.VOUT",
        pin5: "net.CTS",
        pin6: "net.GND",
      }}
    />

    {/* ===== JP10: 7-pin Header (Left Side) ===== */}
    <pinheader
      name="JP10"
      pinCount={7}
      pitch="2.54mm"
      schX={14}
      schY={4}
      pcbX={-10}
      pcbY={5}
      pcbRotation={90}
      pinLabels={{
        pin1: "GND",
        pin2: "VCC",
        pin3: "CBUS2",
        pin4: "CBUS3",
        pin5: "CBUS0",
        pin6: "RXLED",
        pin7: "TXLED",
      }}
      connections={{
        pin1: "net.GND",
        pin2: "net.VCC",
        pin3: "net.CBUS2",
        pin4: "net.CBUS3",
        pin5: "net.CBUS0",
        pin6: "net.RXLED",
        pin7: "net.TXLED",
      }}
    />

    {/* ===== JP11: 7-pin Header (Right Side) ===== */}
    <pinheader
      name="JP11"
      pinCount={7}
      pitch="2.54mm"
      schX={14}
      schY={-2}
      pcbX={10}
      pcbY={5}
      pcbRotation={90}
      pinLabels={{
        pin1: "V3_3",
        pin2: "RTS",
        pin3: "RXD",
        pin4: "RI",
        pin5: "DSR",
        pin6: "DCD",
        pin7: "CTS",
      }}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.RTS",
        pin3: "net.RXD",
        pin4: "net.RI",
        pin5: "net.DSR",
        pin6: "net.DCD",
        pin7: "net.CTS",
      }}
    />
  </board>
)

export default FT231XBreakout
