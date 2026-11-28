import { checkCopperToBoardEdgeClearance } from "@tscircuit/checks"
import type { AnyCircuitElement } from "circuit-json"

// allowOffBoard permits connector bodies to overhang, but also exempts their
// pads from the compiler's edge check. Recheck the actual copper without that
// exemption so intentional body overhangs cannot hide off-board pads or vias.
export const checkBoardEdgeCopper = (circuitJson: AnyCircuitElement[]) =>
  checkCopperToBoardEdgeClearance(
    circuitJson.map((element) =>
      element.type === "pcb_component"
        ? { ...element, is_allowed_to_be_off_board: false }
        : element,
    ),
  )
