import { RP2040 } from "./RP2040"
import { MicroModConnector } from "./MicroModConnector"
import { VoltageRegulator_3V3 } from "./PowerComponents"

export default () => (
  <board width="80mm" height="100mm">
    {/* Main microcontroller - well centered */}
    <RP2040 name="U1" pcbX={0} pcbY={0} />

    {/* MicroMod M.2 connector - maximum separation */}
    <MicroModConnector name="J1" pcbX={0} pcbY={-40} />

    {/* Power regulation - far from other components */}
    <VoltageRegulator_3V3 name="U2" pcbX={-30} pcbY={30} />

    {/* Basic power connections */}
    <trace from=".J1 > .pin65" to=".U2 > .pin1" />
    <trace from=".U2 > .pin5" to=".U1 > .pin1" />

    {/* Ground connection */}
    <trace from=".J1 > .pin1" to=".U1 > .pin57" />
    <trace from=".U2 > .pin2" to=".J1 > .pin1" />

    {/* USB connections */}
    <trace from=".J1 > .pin5" to=".U1 > .pin50" />
    <trace from=".J1 > .pin6" to=".U1 > .pin49" />
  </board>
)
