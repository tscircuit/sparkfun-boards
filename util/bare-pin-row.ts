import { fp } from "@tscircuit/footprinter"
import type { FootprintSoupElements } from "@tscircuit/props"

/** Preserve a bare row's plated holes and labels without a header assembly courtyard. */
export function barePinRow(definition: string): FootprintSoupElements[] {
  const footprint = fp.string(definition).circuitJson()
  if (!footprint.some((element) => element.type === "pcb_plated_hole")) {
    throw new Error("Expected a through-hole pin row")
  }

  // doNotPlace records assembly intent but does not remove generated courtyards.
  // Bare holes have no header body; copper clearance rules still cover the pads.
  return footprint.filter(
    (element) => !element.type.startsWith("pcb_courtyard_"),
  ) as FootprintSoupElements[]
}
