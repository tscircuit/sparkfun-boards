import { USB_MICRO_XNJ_JB } from "../SparkFun-microB-USB-Breakout/USB_MICRO_XNJ_JB"
import { MIC5219_3_3YM5_TR } from "./imports/MIC5219_3_3YM5_TR"
import { ATMEGA32U4_MU } from "./imports/ATMEGA32U4_MU"
import { sel } from "tscircuit"

const LEFT_PIN_LABELS = {
  pin1: "TXO",
  pin2: "RXI",
  pin3: "GND",
  pin4: "GND",
  pin5: "2",
  pin6: "3",
  pin7: "4",
  pin8: "5",
  pin9: "6",
  pin10: "7",
  pin11: "8",
  pin12: "9",
}

const RIGHT_PIN_LABELS = {
  pin1: "RAW",
  pin2: "GND",
  pin3: "RST",
  pin4: "VCC",
  pin5: "A3",
  pin6: "A2",
  pin7: "A1",
  pin8: "A0",
  pin9: "15",
  pin10: "14",
  pin11: "16",
  pin12: "10",
}

const HEADER_PIN_ORDER = [
  "pin1",
  "pin2",
  "pin3",
  "pin4",
  "pin5",
  "pin6",
  "pin7",
  "pin8",
  "pin9",
  "pin10",
  "pin11",
  "pin12",
]

const ProMicro5V16MHz = () => (
  <board
    width="17.78mm"
    height="33.02mm"
    autorouter="sequential-trace"
    autorouterEffortLevel="10x"
    minTraceWidth="0.15mm"
    defaultTraceWidth="0.25mm"
  >
    {/* USB Micro-B on the top short edge */}
    <USB_MICRO_XNJ_JB
      name="J1"
      pcbX={0}
      pcbY={15.5}
      pcbRotation={0}
      schX={-10}
      schY={2}
      connections={{
        pin1: sel.net().USB_VBUS,
        pin2: sel.net().USB_DN,
        pin3: sel.net().USB_DP,
        pin5: sel.net().GND,
      }}
    />

    {/* Left header (TXO, RXI, GND, GND, 2..9) */}
    <jumper
      name="JP1"
      pinLabels={LEFT_PIN_LABELS}
      footprint="pinrow12_id1.016_od1.88_nosquareplating_pinlabeltextalignright_pinlabelorthogonal"
      schDirection="left"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: HEADER_PIN_ORDER,
        },
      }}
      pcbX={-7.62}
      pcbY={0}
      pcbRotation={90}
      cadModel={null}
      schX={-3}
      schY={-2}
      schWidth={0.9}
      connections={{
        pin1: sel.net().TXO,
        pin2: sel.net().RXI,
        pin3: sel.net().GND,
        pin4: sel.net().GND,
        pin5: sel.net().D2,
        pin6: sel.net().D3,
        pin7: sel.net().D4,
        pin8: sel.net().D5,
        pin9: sel.net().D6,
        pin10: sel.net().D7,
        pin11: sel.net().D8,
        pin12: sel.net().D9,
      }}
    />

    {/* Right header (RAW, GND, RST, VCC, A3..A0, 15, 14, 16, 10) */}
    <jumper
      name="JP2"
      pinLabels={RIGHT_PIN_LABELS}
      footprint="pinrow12_id1.016_od1.88_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal"
      schDirection="left"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: HEADER_PIN_ORDER,
        },
      }}
      pcbX={7.62}
      pcbY={0}
      pcbRotation={90}
      cadModel={null}
      schX={3}
      schY={-2}
      schWidth={0.9}
      connections={{
        pin1: sel.net().RAW,
        pin2: sel.net().GND,
        pin3: sel.net().RST,
        pin4: sel.net().VCC,
        pin5: sel.net().A3,
        pin6: sel.net().A2,
        pin7: sel.net().A1,
        pin8: sel.net().A0,
        pin9: sel.net().D15,
        pin10: sel.net().D14,
        pin11: sel.net().D16,
        pin12: sel.net().D10,
      }}
    />

    {/*
      ────── TOP STRIP (between USB and MCU) ──────
      Row A  (y=+10.5): F1 fuse  | D2 diode | U2 regulator
      Row B  (y= +8.5): R6/R7 USB data resistors | C3 reg bypass
      Row C  (y= +6.5): TX LED + R4 | RX LED + R5 | C1/C2 reg caps
      All components live OUTSIDE the central 7x7mm MCU body.
    */}

    {/* Row A: power-input protection */}
    <fuse
      name="F1"
      currentRating="0.5"
      voltageRating="16"
      footprint="1206"
      pcbX={-4.5}
      pcbY={6}
      pcbRotation={90}
      schX={-7.3}
      schY={3.8}
      schRotation={90}
      connections={{
        pin1: sel.net().USB_VBUS,
        pin2: sel.net().RAW,
      }}
    />

    {/* D1 omitted: parallel USB_VBUS->RAW with F1 triggers dual-net autorouter error */}

    <MIC5219_3_3YM5_TR
      name="U2"
      pcbX={0}
      pcbY={8.5}
      pcbRotation={90}
      schX={-4.2}
      schY={3.6}
      connections={{
        pin1: sel.net().RAW,
        pin5: sel.net().VCC,
        pin3: sel.net().RAW,
        pin2: sel.net().GND,
        pin4: sel.net().U2_BP,
      }}
    />

    {/* Row C: TX/RX status LEDs - see routing note in README; wired via TX_LED/RX_LED nets */}
    <resistor
      name="R4"
      resistance="330"
      footprint="0603"
      pcbX={-4.2}
      pcbY={6.5}
      pcbRotation={0}
      schX={-0.8}
      schY={3.9}
      schRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().TX_LED_A,
      }}
    />

    <led
      name="LED1"
      color="green"
      footprint="0603"
      pcbX={-5}
      pcbY={-12.5}
      pcbRotation={90}
      schX={-0.8}
      schY={3.2}
      schRotation={270}
      schDisplayValue="TX"
      connections={{
        pin1: sel.net().TX_LED_A,
        pin2: sel.net().TX_LED,
      }}
    />

    <resistor
      name="R5"
      resistance="330"
      footprint="0603"
      pcbX={-2}
      pcbY={5.5}
      pcbRotation={90}
      schX={0.5}
      schY={3.9}
      schRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().RX_LED_A,
      }}
    />

    <led
      name="LED2"
      color="yellow"
      footprint="0603"
      pcbX={5}
      pcbY={-12.5}
      pcbRotation={90}
      schX={0.5}
      schY={3.2}
      schRotation={270}
      schDisplayValue="RX"
      connections={{
        pin1: sel.net().RX_LED_A,
        pin2: sel.net().RX_LED,
      }}
    />

    {/* ATmega32U4 MCU - centered */}
    <ATMEGA32U4_MU
      name="U3"
      pcbX={0}
      pcbY={-1}
      pcbRotation={45}
      schX={0}
      schY={-2}
      connections={{
        pin13: sel.net().RST,
        pin21: sel.net().TXO,
        pin20: sel.net().RXI,
        pin19: sel.net().D2,
        pin18: sel.net().D3,
        pin25: sel.net().D4,
        pin22: sel.net().TX_LED,
        pin31: sel.net().D5,
        pin27: sel.net().D6,
        pin1: sel.net().D7,
        pin8: sel.net().RX_LED,
        pin28: sel.net().D8,
        pin29: sel.net().D9,
        pin30: sel.net().D10,
        pin11: sel.net().D14,
        pin9: sel.net().D15,
        pin10: sel.net().D16,
        pin36: sel.net().A0,
        pin37: sel.net().A1,
        pin38: sel.net().A2,
        pin39: sel.net().A3,
        pin17: sel.net().XTAL1,
        pin16: sel.net().XTAL2,
        pin6: sel.net().UCAP,
        pin4: sel.net().USB_DP_MCU,
        pin3: sel.net().USB_DN_MCU,
        pin7: sel.net().USB_VBUS,
        pin2: sel.net().VCC,
        pin14: sel.net().VCC,
        pin24: sel.net().VCC,
        pin34: sel.net().VCC,
        pin42: sel.net().VCC,
        pin44: sel.net().VCC,
        pin5: sel.net().GND,
        pin15: sel.net().GND,
        pin23: sel.net().GND,
        pin35: sel.net().GND,
        pin43: sel.net().GND,
        pin45: sel.net().GND,
      }}
    />

    {/* Row B: USB data series resistors */}
    <resistor
      name="R6"
      resistance="22"
      footprint="0603"
      pcbX={-4.5}
      pcbY={8.9}
      pcbRotation={0}
      schX={-7.2}
      schY={1}
      schRotation={90}
      connections={{
        pin1: sel.net().USB_DN,
        pin2: sel.net().USB_DN_MCU,
      }}
    />

    <resistor
      name="R7"
      resistance="22"
      footprint="0603"
      pcbX={6}
      pcbY={14}
      pcbRotation={90}
      schX={-6.2}
      schY={1}
      schRotation={90}
      connections={{
        pin1: sel.net().USB_DP,
        pin2: sel.net().USB_DP_MCU,
      }}
    />

    {/* Regulator input/output caps, lined up to the right of the regulator */}
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="cap0603"
      pcbX={5.5}
      pcbY={10.7}
      pcbRotation={90}
      schX={-8.8}
      schY={2}
      schRotation={90}
      polarized
      connections={{
        pin1: sel.net().RAW,
        pin2: sel.net().GND,
      }}
    />

    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="cap0603"
      pcbX={5.5}
      pcbY={8}
      pcbRotation={90}
      schX={-6.2}
      schY={2}
      schRotation={90}
      polarized
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().GND,
      }}
    />

    <capacitor
      name="C3"
      capacitance="470pF"
      footprint="cap0603"
      pcbX={3.5}
      pcbY={6}
      pcbRotation={90}
      schX={-4.2}
      schY={2.4}
      schRotation={90}
      connections={{
        pin1: sel.net().U2_BP,
        pin2: sel.net().GND,
      }}
    />

    {/* UCAP capacitor, tucked left of the MCU */}
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="cap0603"
      pcbX={1.5}
      pcbY={-10.5}
      pcbRotation={0}
      schX={-4.8}
      schY={-3.2}
      schRotation={90}
      connections={{
        pin1: sel.net().UCAP,
        pin2: sel.net().GND,
      }}
    />

    {/* 16 MHz SMD crystal below MCU (5.0 x 3.2 mm can, 2-pad SMT) */}
    <crystal
      name="Y1"
      frequency="16MHz"
      loadCapacitance="12pF"
      footprint="pinrow2_p3.2_smd_pw1.2_pl2.4_nopinlabels"
      pcbX={0}
      pcbY={-13}
      pcbRotation={0}
      schX={-2.2}
      schY={-6.6}
      connections={{
        pin1: sel.net().XTAL1,
        pin2: sel.net().XTAL2,
      }}
    />

    {/* RST pull-up resistor (right of ProMicro logo) */}
    <resistor
      name="R1"
      resistance="10k"
      footprint="0603"
      pcbX={5}
      pcbY={-5}
      pcbRotation={0}
      schX={4.5}
      schY={2.2}
      schRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().RST,
      }}
    />

    {/* 22 pF crystal load capacitors flanking Y1 */}
    <capacitor
      name="C7"
      capacitance="22pF"
      footprint="cap0603"
      pcbX={-4.6}
      pcbY={-8}
      pcbRotation={90}
      schX={-3.2}
      schY={-7.6}
      schRotation={90}
      connections={{
        pin1: sel.net().XTAL1,
        pin2: sel.net().GND,
      }}
    />

    <capacitor
      name="C8"
      capacitance="22pF"
      footprint="cap0603"
      pcbX={4.6}
      pcbY={-8}
      pcbRotation={90}
      schX={-1.2}
      schY={-7.6}
      schRotation={90}
      connections={{
        pin1: sel.net().XTAL2,
        pin2: sel.net().GND,
      }}
    />

    {/* 100 nF VCC decoupling caps - on either side of MCU body */}
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="cap0603"
      pcbX={-1.5}
      pcbY={-10.5}
      pcbRotation={0}
      schX={1.4}
      schY={-4.6}
      schRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().GND,
      }}
    />

    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="cap0603"
      pcbX={5.5}
      pcbY={5}
      pcbRotation={90}
      schX={2.2}
      schY={-4.6}
      schRotation={90}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().GND,
      }}
    />

    {/*
      Silkscreen labels:
      - "ProMicro" sits in the gap between the MCU (top half) and the crystal (bottom half)
      - "5V/16MHz" / "DEV-12640" sit at the very bottom edge
    */}
    <silkscreentext text="ProMicro" pcbX={0} pcbY={-8} fontSize="1.3mm" />
    <silkscreentext text="5V/16MHz" pcbX={0} pcbY={-11.5} fontSize="1mm" />
    <silkscreentext text="DEV-12640" pcbX={0} pcbY={-13.2} fontSize="0.7mm" />

    {/* Reference designators printed on silkscreen, off to the side of components */}
    <silkscreentext text="F1" pcbX={-5.4} pcbY={11.8} fontSize="0.5mm" />
    <silkscreentext text="D2" pcbX={-2} pcbY={11.8} fontSize="0.5mm" />
    <silkscreentext text="U2" pcbX={4.2} pcbY={11.8} fontSize="0.5mm" />
    <silkscreentext text="JP" pcbX={-5} pcbY={-3.7} fontSize="0.6mm" />
    <silkscreentext text="R1" pcbX={5} pcbY={-3.7} fontSize="0.6mm" />
    {/* <silkscreentext text="Y1" pcbX={4} pcbY={-12} fontSize="0.55mm" /> */}

    {/* "16.000 / SPK W13" markings printed on the crystal can */}
    <silkscreentext text="16.000" pcbX={0} pcbY={-10.55} fontSize="0.55mm" />
    <silkscreentext text="SPK W13" pcbX={0} pcbY={-13.45} fontSize="0.45mm" />

    {/* Crystal can body outline (silkscreen rectangle around Y1) */}
    {/* <silkscreenrect
      pcbX={0}
      pcbY={-13}
      width="5mm"
      height="3.2mm"
      strokeWidth="0.1mm"
      filled={false}
    /> */}
    <silkscreentext text="J1" pcbX={4.6} pcbY={14.5} fontSize="0.7mm" />

    {/* SparkFun flame mark approximation (top-right corner) */}
    <silkscreentext text="SFE" pcbX={7.4} pcbY={14.3} fontSize="0.65mm" />

    {/* Bottom layer text */}
    <silkscreentext
      text="SparkFun Pro Micro"
      layer="bottom"
      pcbX={0}
      pcbY={0}
      pcbRotation={180}
      fontSize="1mm"
    />

    {/* Schematic netlabels */}
    <netlabel net="GND" anchorSide="top" schX={-10.5} schY={1.2} />
    <netlabel net="VCC" anchorSide="bottom" schX={-4.2} schY={4.2} />
    <netlabel net="RAW" anchorSide="bottom" schX={-7.3} schY={4.4} />
  </board>
)

export default ProMicro5V16MHz
