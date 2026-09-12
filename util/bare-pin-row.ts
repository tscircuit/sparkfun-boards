import { fp } from "@tscircuit/footprinter"
import type { FootprintSoupElements } from "@tscircuit/props"

/** Preserve pin-row copper and labels without reserving a plastic header housing. */
export function barePinRow(definition: string): FootprintSoupElements[] {
  const footprint = fp.string(definition).circuitJson()
  const pads = footprint.flatMap((element) => {
    if (element.type !== "pcb_plated_hole") return []
    if (element.shape === "circle") {
      return [
        {
          x: element.x,
          y: element.y,
          width: element.outer_diameter,
          height: element.outer_diameter,
        },
      ]
    }
    if (element.shape === "circular_hole_with_rect_pad") {
      return [
        {
          x: element.x,
          y: element.y,
          width: element.rect_pad_width,
          height: element.rect_pad_height,
        },
      ]
    }
    throw new Error("Expected round holes with circular or rectangular pads")
  })
  if (pads.length === 0) throw new Error("Expected a through-hole pin row")
  const minX = Math.min(...pads.map((pad) => pad.x - pad.width / 2))
  const maxX = Math.max(...pads.map((pad) => pad.x + pad.width / 2))
  const minY = Math.min(...pads.map((pad) => pad.y - pad.height / 2))
  const maxY = Math.max(...pads.map((pad) => pad.y + pad.height / 2))

  // Bare holes have no component body or assembly courtyard beyond their pads.
  // The board's copper clearance rules still enforce spacing around each pad.
  return footprint.map((element) =>
    element.type === "pcb_courtyard_rect"
      ? {
          ...element,
          center: { x: (minX + maxX) / 2, y: (minY + maxY) / 2 },
          width: maxX - minX,
          height: maxY - minY,
        }
      : element,
  ) as FootprintSoupElements[]
}
