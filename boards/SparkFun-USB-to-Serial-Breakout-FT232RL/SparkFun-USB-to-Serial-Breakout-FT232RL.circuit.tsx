import { FT232RL } from "./FT232RL"
import { TYPE_C_31_M_12 } from "./TYPE_C_31_M_12"
import { MST22D18G2_125 } from "./MST22D18G2_125"
import { sel } from "@tscircuit/core"

// https://tscircuit.com/techmannih/SparkFunUSB-to-SerialBreakout-FT232RL#files

const selectors = {
  U1: sel.U1(FT232RL),
  USBC: sel.USBC(TYPE_C_31_M_12),
}

const USBToSerialBreakout = () => {
  return (
    <board width="18mm" height="35mm" autorouter="auto-cloud">
      <FT232RL name="U1" pcbRotation={90} pcbY={-5} />
      <resistor
        resistance="0.33k"
        footprint="0603"
        name="R1"
        schX={3}
        schRotation={90}
        pcbX={6.3}
        pcbY={-16.2}
      />
      <TYPE_C_31_M_12
        name="USBC"
        pcbY={12.2}
        pcbRotation={180}
        schX={-12}
        schY={0.1}
      />
      <resistor
        resistance="0.33k"
        footprint="0603"
        name="R2"
        schX={4}
        schRotation={90}
        pcbX={-6}
        pcbY={-5}
        pcbRotation={90}
      />
      <led
        name="LED1"
        footprint="0402"
        schRotation={270}
        schY={-2}
        schX={3}
        pcbX={-6.3}
        pcbY={-14}
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
        pcbY={-14}
        color="red"
        schDisplayValue="Green"
      />

      <capacitor
        capacitance="100000pF"
        footprint="cap0603"
        name="C2"
        schY={-2}
        schX={-8}
        pcbX={-6.3}
        pcbY={-16.2}
        schRotation={90}
      />
      <capacitor
        capacitance="10000000pF"
        footprint="cap0603"
        name="C5"
        schY={-2}
        schX={-6.5}
        pcbX={-6}
        pcbY={8}
        schRotation={90}
        pcbRotation={90}
        polarized
      />
      <capacitor
        capacitance="100000pF"
        footprint="cap0603"
        name="C1"
        schY={-2}
        schX={-5}
        pcbX={6.1}
        pcbY={-10.5}
        pcbRotation={90}
        schRotation={90}
      />
      <fuse
        name="F1"
        currentRating="0.5"
        voltageRating="220"
        pcbX={6}
        pcbY={8}
        footprint="0402"
        pcbRotation={90}
        schY={0.5}
        schX={-9}
      />
      <jumper
        name="JP1"
        footprint="pinrow9_nosquareplating"
        pcbY={0}
        pcbX={8}
        pcbRotation={90}
        schDirection="left"
        schX={5}
        schY={3}
      />
      <jumper
        name="JP2"
        footprint="pinrow9_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal"
        pcbX={-8}
        pcbRotation={90}
        pcbY={0}
        schDirection="left"
        schX={6.5}
        schY={-2}
      />
      <jumper
        name="JP3"
        footprint="pinrow4"
        pcbX={0}
        pcbRotation="180"
        schDirection="left"
        pcbY={-16.2}
        schX={0}
        schY={-5}
      />
      <MST22D18G2_125 name="SW3" schX={-5} schY={-6} pcbY={5} />
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
      <trace from={selectors.U1.TXD} to="net.TXD" />
      <trace from={selectors.U1.pin2} to="net.DTR" />
      <trace from={selectors.U1.VCCIO} to="net.VCCIO" />
      <trace from={selectors.U1.RXD} to="net.RXD" />
      <trace from={selectors.U1.pin3} to="net.RTS" />
      <trace from={selectors.U1.pin6} to="net.RI" />
      <trace from={selectors.U1.GND1} to="net.GND" />
      <trace from={selectors.U1.pin9} to="net.DSR" />
      <trace from={selectors.U1.pin10} to="net.DCD" />
      <trace from={selectors.U1.pin11} to="net.CTS" />
      <trace from={selectors.U1.CBUS4} to="net.SLEEP" />
      <trace from={selectors.U1.CBUS2} to="net.TXDEN" />
      <trace from={selectors.U1.CBUS3} to="net.PWREN" />
      <trace from={selectors.U1.GND3} to="net.GND" />
      <trace from={selectors.U1.GND2} to="net.GND" />
      <trace from={selectors.U1.AGND} to="net.GND" />
      <trace from={selectors.U1.TEST} to="net.GND" />
      <trace from={sel.JP1.pin1} to="net.GND" />
      <trace from={sel.JP1.pin6} to="net.CTS" />
      <trace from={sel.JP1.pin2} to="net.TXLED" />
      <trace from={sel.JP1.pin3} to="net.RXLED" />
      <trace from={sel.JP1.pin4} to="net.VCC" />
      <trace from={sel.JP1.pin5} to="net.V3_3" />
      <trace from={sel.JP1.pin7} to="net.SLEEP" />
      <trace from={sel.JP1.pin8} to="net.TXDEN" />
      <trace from={sel.JP1.pin9} to="net.PWREN" />
      <trace from={sel.JP2.pin1} to="net.TXD" />
      <trace from={sel.JP2.pin2} to="net.DTR" />
      <trace from={sel.JP2.pin3} to="net.RTS" />
      <trace from={sel.JP2.pin4} to="net.VCCIO" />
      <trace from={sel.JP2.pin5} to="net.RXD" />
      <trace from={sel.JP2.pin6} to="net.RI" />
      <trace from={sel.JP2.pin7} to="net.GND" />
      <trace from={sel.JP2.pin8} to="net.DSR" />
      <trace from={sel.JP2.pin9} to="net.DCD" />
      <trace from={sel.JP3.pin2} to="net.TXD" />
      <trace from={sel.JP3.pin3} to="net.RXD" />
      <trace from={sel.JP3.pin4} to="net.GND" />
      <trace from={sel.JP3.pin1} to="net.VCC" />
      <trace from={sel.SW3.pin1} to="net.VCCIO" />
      <trace from={sel.SW3.pin2} to="net.V3_3" />
      <trace from={sel.SW3.pin3} to="net.VCC" />
      <trace from={sel.R1.pin2} to="net.VCCIO" />
      <trace from={sel.R2.pin2} to="net.VCCIO" />
      <trace from={selectors.USBC.GND} to="net.GND" />
      <trace from={sel.R2.pin1} to={sel.LED2.pin1} />
      <trace from={sel.R1.pin1} to={sel.LED1.pin1} />
      <trace from={selectors.U1.CBUS0} to={sel.LED1.pin2} />
      <trace from={selectors.U1.CBUS1} to={sel.LED2.pin2} />
      <trace from={selectors.U1.VCC} to={sel.F1.pin2} />
      <trace from={selectors.USBC.D_MINUS} to={selectors.U1.USBDM} />
      <trace from={selectors.U1.USBDP} to={selectors.USBC.D_PLUS} />
      <trace from={sel.C1.pin1} to="net.GND" />
      <trace from={sel.C1.pin2} to="net.VCC" />
      <trace from={selectors.U1.V3_3OUT} to={sel.C1.pin2} />
      <trace from={sel.C2.pin2} to={sel.F1.pin2} />
      <trace from={sel.C5.pin2} to={sel.F1.pin2} />
      <trace from={selectors.USBC.VCC} to={sel.F1.pin1} />
      <trace from={sel.C2.pin1} to="net.GND" />
      <trace from={sel.C5.pin1} to="net.GND" />
    </board>
  )
}
export default USBToSerialBreakout
