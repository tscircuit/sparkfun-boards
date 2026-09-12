import { expect, test } from "bun:test"
import { fp } from "@tscircuit/footprinter"
import { Circuit } from "tscircuit"
import { barePinRow } from "../util/bare-pin-row"
import { contiguousPinHeader } from "../util/contiguous-pin-header"

test("bare rows preserve copper, drills and pin-one identification", () => {
  const definition = "pinrow4_id1.016_od1.88_p2.54"
  const original = fp.string(definition).circuitJson()
  const footprint = barePinRow(definition) as unknown as typeof original
  expect(footprint.filter((e) => !e.type.startsWith("pcb_courtyard"))).toEqual(
    original.filter((e) => !e.type.startsWith("pcb_courtyard")),
  )
  const courtyard = footprint.find((e) => e.type === "pcb_courtyard_rect")!
  expect(courtyard.type).toBe("pcb_courtyard_rect")
  if (courtyard.type !== "pcb_courtyard_rect")
    throw new Error("Missing courtyard")
  for (const pad of footprint) {
    if (pad.type !== "pcb_plated_hole") continue
    const width =
      pad.shape === "circle"
        ? pad.outer_diameter
        : pad.shape === "circular_hole_with_rect_pad"
          ? pad.rect_pad_width
          : 0
    expect(
      Math.abs(pad.x - courtyard.center.x) + width / 2,
    ).toBeLessThanOrEqual(courtyard.width / 2 + 1e-8)
  }
})

test("adjoining header sections fit without moving their 2.54 mm grid", async () => {
  const circuit = new Circuit()
  circuit.add(
    <board width={20} height={10} routingDisabled>
      <pinheader
        name="J1"
        pinCount={2}
        pcbX={0}
        footprint={contiguousPinHeader("pinrow2_id1.016_od1.88")}
      />
      <pinheader
        name="J2"
        pinCount={1}
        pcbX={3.81}
        footprint={contiguousPinHeader("pinrow1_id1.016_od1.88")}
      />
    </board>,
  )
  await circuit.renderUntilSettled()
  const json = circuit.getCircuitJson()
  expect(json.filter((e) => e.type.endsWith("_error"))).toEqual([])
  const holes = json.filter((e) => e.type === "pcb_plated_hole")
  expect(holes.map((e) => e.x).sort((a, b) => a - b)).toEqual([
    -1.27, 1.27, 3.81,
  ])
})
