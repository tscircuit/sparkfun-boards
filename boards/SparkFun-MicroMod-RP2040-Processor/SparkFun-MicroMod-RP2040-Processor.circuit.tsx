import { RP2040 } from "./RP2040"
import { MicroModConnector } from "./MicroModConnector"
import {
  VoltageRegulator_3V3,
  VoltageRegulator_1V1,
  DecouplingCapacitor_100nF,
  DecouplingCapacitor_10uF,
  DecouplingCapacitor_1uF,
} from "./PowerComponents"
import {
  Crystal_12MHz,
  Crystal_32kHz,
  CrystalLoadCapacitor_18pF,
  CrystalLoadCapacitor_10pF,
} from "./CrystalComponents"
import {
  ResetButton,
  BootButton,
  PowerLED,
  StatusLED,
  PullupResistor_10k,
  CurrentLimitingResistor_1k,
  FlashMemory,
} from "./SupportingComponents"

export default () => (
  <board width="22mm" height="44mm">
    {/* Main microcontroller */}
    <RP2040 name="U1" pcbX={0} pcbY={10} />

    {/* MicroMod M.2 connector */}
    <MicroModConnector name="J1" pcbX={0} pcbY={-15} />

    {/* Power regulation */}
    <VoltageRegulator_3V3 name="U2" pcbX={-8} pcbY={15} />
    <VoltageRegulator_1V1 name="U3" pcbX={-8} pcbY={12} />

    {/* Basic decoupling capacitors */}
    <DecouplingCapacitor_10uF name="C1" pcbX={-6} pcbY={15} />
    <DecouplingCapacitor_100nF name="C2" pcbX={2} pcbY={12} />

    {/* Power connections */}
    <trace from=".J1 > .pin65" to=".U2 > .pin1" />
    <trace from=".U2 > .pin5" to=".U1 > .pin1" />
    <trace from=".U3 > .pin5" to=".U1 > .pin25" />

    {/* Ground connections */}
    <trace from=".J1 > .pin1" to=".U1 > .pin57" />

    {/* Capacitor connections - power decoupling */}
    <trace from=".C1 > .pin1" to=".U1 > .pin1" />
    <trace from=".C1 > .pin2" to=".U1 > .pin57" />
    <trace from=".C2 > .pin1" to=".U1 > .pin25" />
    <trace from=".C2 > .pin2" to=".U1 > .pin57" />

    {/* USB connections */}
    <trace from=".J1 > .pin5" to=".U1 > .USB_DP" />
    <trace from=".J1 > .pin6" to=".U1 > .USB_DM" />

    {/* GPIO connections to MicroMod connector */}
    <trace from=".U1 > .GPIO0" to=".J1 > .pin34" />
    <trace from=".U1 > .GPIO1" to=".J1 > .pin35" />

    {/* I2C connections */}
    <trace from=".U1 > .GPIO22" to=".J1 > .pin15" />
    <trace from=".U1 > .GPIO23" to=".J1 > .pin16" />
  </board>
)
