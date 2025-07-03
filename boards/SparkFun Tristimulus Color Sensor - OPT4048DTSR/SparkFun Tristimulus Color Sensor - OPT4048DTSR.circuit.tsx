import manualEdits from "./manual-edits.json"
import Jumpers from "./jumpers"
import Sensor from "./color-sensor"
import Address from "./address"
import Connectors from "./connectors"

export default () => (
  <board width="25.4mm" height="25.4mm" manualEdits={manualEdits}>
    <Sensor x={2} y={2} />
    <Jumpers x={8} y={5} />
    <Address x={8} y={0} />
    <Connectors x={2} y={-2} />
  </board>
)
