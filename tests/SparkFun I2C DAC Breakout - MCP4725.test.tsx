import { expect, test } from "bun:test"
import { Circuit } from "@tscircuit/core"
import board from "../boards/SparkFun I2C DAC Breakout - MCP4725/index"
import {
  convertCircuitJsonToPcbSvg,
  convertCircuitJsonToSchematicSvg,
} from "circuit-to-svg"

test("svg snapshot example", async () => {
  const circuit = new Circuit()
  circuit.add(board())
  await circuit.renderUntilSettled()
  const circuitJson = circuit.getCircuitJson()
  const pcbSvg = convertCircuitJsonToPcbSvg(circuitJson)
  const schSvg = convertCircuitJsonToSchematicSvg(circuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path + "-pcb")
  await expect(schSvg).toMatchSvgSnapshot(import.meta.path + "-sch")
})
