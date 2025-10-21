import { RP2040 } from "./RP2040"
import { MicroModConnector } from "./MicroModConnector"
import {
  VoltageRegulator_3V3,
  VoltageRegulator_1V1,
  DecouplingCapacitor_100nF,
  DecouplingCapacitor_10uF,
  DecouplingCapacitor_1uF,
} from "./PowerComponents"

export default () => (
  <board width="40mm" height="60mm">
    {/* Main microcontroller */}
    <RP2040 name="U1" pcbX={0} pcbY={0} />

    {/* MicroMod M.2 connector */}
    <MicroModConnector name="J1" pcbX={0} pcbY={-25} />

    {/* Power regulation - well separated */}
    <VoltageRegulator_3V3 name="U2" pcbX={-15} pcbY={15} />
    <VoltageRegulator_1V1 name="U3" pcbX={-15} pcbY={5} />

    {/* Basic decoupling capacitors - good spacing */}
    <DecouplingCapacitor_10uF name="C1" pcbX={-10} pcbY={15} />
    <DecouplingCapacitor_100nF name="C2" pcbX={-10} pcbY={5} />

    {/* Power connections with net labels for better routing */}
    <trace from=".J1 > .pin65" to=".U2 > .pin1" />
    <trace from=".U2 > .pin5" to=".U1 > .pin1" />
    <trace from=".U3 > .pin5" to=".U1 > .pin25" />

    {/* Ground connections */}
    <trace from=".J1 > .pin1" to=".U1 > .pin57" />
    <trace from=".U2 > .pin2" to=".J1 > .pin1" />
    <trace from=".U3 > .pin2" to=".J1 > .pin1" />

    {/* Capacitor connections */}
    <trace from=".C1 > .pin1" to=".U2 > .pin5" />
    <trace from=".C1 > .pin2" to=".J1 > .pin1" />
    <trace from=".C2 > .pin1" to=".U3 > .pin5" />
    <trace from=".C2 > .pin2" to=".J1 > .pin1" />

    {/* USB connections */}
    <trace from=".J1 > .pin5" to=".U1 > .pin50" />
    <trace from=".J1 > .pin6" to=".U1 > .pin49" />
  </board>
)
