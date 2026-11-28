import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { checkBoardEdgeCopper } from "../util/check-board-edge-copper"

const connectorAt = (padX: number): AnyCircuitElement[] =>
  [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      num_layers: 2,
    },
    {
      type: "pcb_component",
      pcb_component_id: "connector",
      pcb_board_id: "board",
      center: { x: 4.5, y: 0 },
      width: 3,
      height: 3,
      layer: "top",
      rotation: 0,
      is_allowed_to_be_off_board: true,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad",
      pcb_component_id: "connector",
      shape: "rect",
      x: padX,
      y: 0,
      width: 1,
      height: 1,
      layer: "top",
    },
  ] as AnyCircuitElement[]

test("connector body overhang preserves copper-edge checks", () => {
  expect(checkBoardEdgeCopper(connectorAt(4))).toHaveLength(0)
  expect(checkBoardEdgeCopper(connectorAt(5))).toHaveLength(1)
  expect(checkBoardEdgeCopper(connectorAt(4.4))).toHaveLength(1)
})
