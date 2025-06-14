import { FT232RL } from "@tsci/techmannih.FT232RL"
import { TYPE_C_31_M_12 } from "@tsci/techmannih.TYPE_C_31_M_12"
import { MST22D18G2_125 } from "@tsci/techmannih.MST22D18G2_125"

const USBToSerialBreakout = () => (
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
      GND1="net.GND"
      GND2="net.GND"
      VBUS1="net.VBUS"
      VBUS2="net.VBUS"
      pcbY={12.2}
      pcbRotation={180}
      schX={-12}
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
      schY={1.5}
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
    <MST22D18G2_125
      name="SW3"
      type="spdt"
      footprint="son6"
      schX={-5}
      schY={-6}
      pcbY={6}
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
    <trace from=".U1 > .pin1" to="net.TXD" />
    <trace from=".U1 > .pin2" to="net.DTR" />
    <trace from=".U1 > .pin4" to="net.VCCIO" />
    <trace from=".U1 > .pin5" to="net.RXD" />

    <trace from=".U1 > .pin3" to="net.RTS" />
    <trace from=".U1 > .pin6" to="net.RI" />

    <trace from=".U1 > .pin7" to="net.GND" />
    <trace from=".U1 > .pin9" to="net.DSR" />
    <trace from=".U1 > .pin10" to="net.DCD" />
    <trace from=".U1 > .pin11" to="net.CTS" />
    <trace from=".U1 > .pin12" to="net.SLEEP" />
    <trace from=".U1 > .pin13" to="net.TXDEN" />
    <trace from=".U1 > .pin14" to="net.PWREN" />

    <trace from=".U1 > .pin18" to="net.GND" />
    <trace from=".U1 > .pin21" to="net.GND" />
    <trace from=".U1 > .pin25" to="net.GND" />
    <trace from=".U1 > .pin26" to="net.GND" />
    <trace from=".JP1 > .pin1" to="net.GND" />
    <trace from=".JP1 > .pin6" to="net.CTS" />
    <trace from=".JP1 > .pin2" to="net.TXLED" />
    <trace from=".JP1 > .pin3" to="net.RXLED" />
    <trace from=".JP1 > .pin4" to="net.VCC" />
    {/* <trace from=".JP1 > .pin5" to="net.3.3V" /> */}
    <trace from=".JP1 > .pin7" to="net.SLEEP" />
    <trace from=".JP1 > .pin8" to="net.TXDEN" />
    <trace from=".JP1 > .pin9" to="net.PWREN" />
    <trace from=".JP2 > .pin1" to="net.TXD" />
    <trace from=".JP2 > .pin2" to="net.DTR" />
    <trace from=".JP2 > .pin3" to="net.RTS" />
    <trace from=".JP2 > .pin4" to="net.VCCIO" />
    <trace from=".JP2 > .pin5" to="net.RXD" />
    <trace from=".JP2 > .pin6" to="net.RI" />
    <trace from=".JP2 > .pin7" to="net.GND" />
    <trace from=".JP2 > .pin8" to="net.DSR" />
    <trace from=".JP2 > .pin9" to="net.DCD" />
    {/* <trace from=".JP3 > .pin6" to="net.RI" /> */}
    <trace from=".JP3 > .pin2" to="net.TXD" />
    <trace from=".JP3 > .pin3" to="net.RXD" />
    <trace from=".JP3 > .pin4" to="net.GND" />
    <trace from=".JP3 > .pin1" to="net.VCC" />

    <trace from=".SW3 > .pin1" to="net.VCCIO" />
    <trace from=".SW3 > .pin3" to="net.VCC" />
    <trace from=".R1 > .pin2" to="net.VCCIO" />
    <trace from=".R2 > .pin2" to="net.VCCIO" />
    <trace from=".R2 > .pin1" to=".LED2 > .pin1" />
    <trace from=".R1 > .pin1" to=".LED1 > .pin1" />
    <trace from=".U1 > .pin23" to=".LED1 > .pin2" />

    <trace from=".U1 > .pin22" to=".LED2 > .pin2" />
    <trace from=".U1 > .pin20" to=".F1 > .pin2" />
    <trace from=".USBC > .pin9" to=".U1 > .pin16" />
    <trace from=".U1 > .pin15" to=".USBC > .pin10" />

    <trace from=".C1 > .pin1" to="net.GND" />
    <trace from=".C1 > .pin2" to="net.VCC" />

    <trace from=".U1 > .pin17" to=".C1 > .pin2" />
    <trace from=".C2 > .pin2" to=".F1 > .pin2" />
    <trace from=".C5 > .pin2" to=".F1 > .pin2" />
    <trace from=".USBC > .pin3" to=".F1 > .pin1" />

    <trace from=".C2 > .pin1" to="net.GND" />
    <trace from=".C5 > .pin1" to="net.GND" />
  </board>
)

export default USBToSerialBreakout
