import { expect, test } from "bun:test"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
import { Circuit } from "tscircuit"
import Board from "../boards/SparkFun-Tristimulus-Color-Sensor-OPT4048DTSR-Qwiic/SparkFun-Tristimulus-Color-Sensor-OPT4048DTSR-Qwiic.circuit"

test("OPT4048 defaults to address 0x44 without shorting the other address choices", async () => {
  const circuit = new Circuit()
  circuit.pcbDisabled = true
  circuit.schematicDisabled = true
  circuit.add(<Board />)
  await circuit.renderUntilSettled()

  const connectivity = getFullConnectivityMapFromCircuitJson(
    circuit.getCircuitJson(),
  )
  const netId = (name: string) => {
    const net = circuit.db.source_net.list().find((net) => net.name === name)
    expect(net).toBeDefined()
    return net!.source_net_id
  }

  // SparkFun ships only the 0x44 jumper closed. Closing 0x45 or 0x46 as well
  // would connect the address pin to the supply or SDA through that jumper.
  expect(connectivity.areIdsConnected(netId("ADDR"), netId("GND"))).toBe(true)
  expect(connectivity.areIdsConnected(netId("ADDR"), netId("SDA"))).toBe(false)
  const resistor = circuit.db.source_component
    .list()
    .find((component) => component.name === "R5")!
  const supplyChoice = circuit.db.source_port
    .list()
    .find(
      (port) =>
        port.source_component_id === resistor.source_component_id &&
        port.pin_number === 1,
    )!
  expect(supplyChoice).toBeDefined()
  expect(
    connectivity.areIdsConnected(netId("ADDR"), supplyChoice.source_port_id),
  ).toBe(false)
})
