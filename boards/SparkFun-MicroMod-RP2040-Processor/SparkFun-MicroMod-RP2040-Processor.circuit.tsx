import { RP2040 } from "./RP2040"
import { MicroModConnector } from "./MicroModConnector"
import {
  VoltageRegulator_3V3,
} from "./PowerComponents"

export default () => (
  <board width="60mm" height="80mm">
    {/* Main microcontroller */}
    <RP2040 name="U1" pcbX={0} pcbY={10} />

    {/* MicroMod M.2 connector */}
    <MicroModConnector name="J1" pcbX={0} pcbY={-35} />

    {/* Power regulation - essential only */}
    <VoltageRegulator_3V3 name="U2" pcbX={-25} pcbY={25} />

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
