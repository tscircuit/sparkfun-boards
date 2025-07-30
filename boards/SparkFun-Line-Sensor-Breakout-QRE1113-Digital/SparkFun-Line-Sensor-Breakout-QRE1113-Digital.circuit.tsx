import { sel } from "tscircuit"
import { QRE1113GR } from "./QRE1113GR"

const jumperPinLabels = {
  pin1: ["VCC"],
  pin2: ["OUT"],
  pin3: ["GND"],
}
const manualEdits = {
  schematic_placements: [
    {
      selector: "JP1",
      center: {
        x: 1.1597979112508316,
        y: 1.7410281825908838,
      },
      relative_to: "group_center",
    },
    {
      selector: "U1",
      center: {
        x: -1.7351885201787445,
        y: 0.7203856214510221,
      },
      relative_to: "group_center",
    },
    {
      selector: "R2",
      center: {
        x: -0.2995082777821345,
        y: 1.7411102499982176,
      },
      relative_to: "group_center",
    },
    {
      selector: "R1",
      center: {
        x: -2.1337534365174244,
        y: 2.599575042208694,
      },
      relative_to: "group_center",
    },
    {
      selector: "C1",
      center: {
        x: -1.34,
        y: 2.6,
      },
      relative_to: "group_center",
    },
  ],
}
export default () => (
  <board width="7.62mm" height="13.97mm" manualEdits={manualEdits}>
    {/* X: 3.81 Y:6.35 */}
    <resistor
      resistance="100"
      footprint="0402"
      name="R1"
      pcbX={2.54}
      schRotation={90}
      pcbRotation={180}
      pcbY={-3.14}
      connections={{ pin2: sel.net().VCC, pin1: sel.U1.pin1 }}
    />
    <capacitor
      footprint="0402"
      pcbY={-3.14}
      name="C1"
      capacitance="10nF"
      schRotation={90}
      connections={{ pin2: sel.net().VCC, pin1: sel.U1.pin3 }}
    />
    <resistor
      resistance="10k"
      footprint="0402"
      name="R2"
      pcbX={-2.54}
      connections={{ pin2: sel.JP1.OUT, pin1: sel.C1.pin1 }}
      pcbY={-3.14}
    />
    <silkscreentext text="QD" pcbY={2} fontSize={2} />
    <QRE1113GR
      name="U1"
      pcbY={-0.635}
      pcbRotation={180}
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: ["pin1", "pin3"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["pin2", "pin4"],
        },
      }}
      schHeight={0.8}
      schWidth={1.3}
      schPinStyle={{
        pin1: { marginRight: 0.6 },
        pin2: { marginRight: 0.6 },
      }}
      connections={{ pin2: sel.net().GND, pin4: sel.net().GND }}
    />
    <jumper
      pinLabels={jumperPinLabels}
      name="JP1"
      schDirection="left"
      footprint="pinrow3_id1.016_od1.88_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal_backsidelabel"
      pcbRotation={180}
      pcbY={-5.8}
      schWidth={0.7}
      cadModel={null}
    />
    <hole diameter={3.302} pcbY={4.5} />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={0.4}
      schY={2.3}
      connectsTo={sel.JP1.pin1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={0.4}
      schY={1.15}
      connectsTo={sel.JP1.pin3}
    />
  </board>
)
