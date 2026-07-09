import { OutlineBuilder } from "../../util/OutlineBuilder"
import { sel } from "tscircuit"
import { Fuse20mm } from "./imports/Fuse20mm"
import { PowerJackPthLock } from "./imports/PowerJackPthLock"
import { PptcFusePth } from "./imports/PptcFusePth"
import { ScrewTerminal5mm2 } from "./imports/ScrewTerminal5mm2"

// Board: 65mm x 12.7mm with four semi-circle mounting cutouts
// Cutout centers at roughly x=±21.526mm from center, on both ±Y edges
const R = 1.778 // semi-circle notch radius (≈1/14 inch)
const outline = new OutlineBuilder(-32.4485, -5.08)
  .lineTo(-32.4485, 5.08)
  .lineTo(-31.1785, 6.35)
  .lineTo(-11.8745, 6.35)
  .arcTo(-10.0965, 6.35, { radius: R, sweep: false })
  .arcTo(-8.3185, 6.35, { radius: R, sweep: false })
  .lineTo(19.7485, 6.35)
  .arcTo(21.5265, 6.35, { radius: R, sweep: false })
  .arcTo(23.3045, 6.35, { radius: R, sweep: false })
  .lineTo(31.1785, 6.35)
  .lineTo(32.4485, 5.08)
  .lineTo(32.4485, -5.08)
  .lineTo(31.1785, -6.35)
  .lineTo(23.3045, -6.35)
  .arcTo(21.5265, -6.35, { radius: R, sweep: false })
  .arcTo(19.7485, -6.35, { radius: R, sweep: false })
  .lineTo(-8.3185, -6.35)
  .arcTo(-10.0965, -6.35, { radius: R, sweep: false })
  .arcTo(-11.8745, -6.35, { radius: R, sweep: false })
  .lineTo(-31.1785, -6.35)
  .lineTo(-32.4485, -5.08)
  .toArray()

export default () => (
  <board outline={outline}>
    <PowerJackPthLock
      name="J2"
      pcbX={-28.5115}
      pcbY={-0.127}
      pcbRotation={270}
      schX={-6.5}
      schY={-1.3}
      connections={{ PWR: "net.VIN", GND: "net.GND", GNDBREAK: "net.GND" }}
    />
    <ScrewTerminal5mm2
      name="J1"
      pcbX={-28.6385}
      pcbY={2.54}
      pcbRotation={270}
      schX={-6.6}
      schY={1.8}
      schRotation={90}
      connections={{ pin1: "net.VIN", pin2: "net.GND" }}
    />
    <ScrewTerminal5mm2
      name="J3"
      pcbX={28.5115}
      pcbY={-2.54}
      pcbRotation={90}
      schX={6.5}
      schY={1.8}
      schRotation={270}
      connections={{ pin1: "net.VOUT", pin2: "net.GND" }}
    />
    <Fuse20mm
      name="F1"
      displayName="FUSEX20MM"
      pcbX={5.6515}
      pcbY={0}
      pcbRotation={270}
      schX={0}
      schY={2.6}
      connections={{
        pin1: "net.VIN",
        pin2: "net.VIN",
        pin3: "net.VOUT",
        pin4: "net.VOUT",
      }}
    />
    <PptcFusePth
      name="F2"
      displayName="72V/0.25A"
      pcbX={5.6515}
      pcbY={0}
      schX={0}
      schY={0}
      connections={{ pin1: "net.VIN", pin2: "net.VOUT" }}
    />
    <pcbtrace
      layer="top"
      thickness="0.508mm"
      route={[
        { x: -2.2225, y: -2.54 },
        { x: 1.5875, y: 0 },
        { x: 5.6515, y: 0 },
      ]}
    />
    <pcbtrace
      layer="top"
      thickness="0.508mm"
      route={[
        { x: 18.8595, y: 0 },
        { x: 14.6685, y: 0 },
        { x: 16.8275, y: -2.54 },
        { x: 16.8275, y: 2.54 },
      ]}
    />
    <silkscreentext
      text="VIN"
      pcbX={-9.97}
      pcbY={2.794}
      pcbRotation={270}
      fontSize={1.2}
      anchorAlignment="center"
    />
    <silkscreentext
      text="VOUT"
      pcbX={20.13}
      pcbY={3.937}
      pcbRotation={270}
      fontSize={1.2}
      anchorAlignment="center"
    />
    <silkscreentext
      text="F1"
      pcbX={-5.78}
      pcbY={4.064}
      fontSize={1}
      anchorAlignment="center"
    />
    <silkscreentext
      text="F2"
      pcbX={4.38}
      pcbY={0}
      fontSize={1}
      anchorAlignment="center"
    />
    <silkscreentext
      text="+"
      pcbX={-23.94}
      pcbY={1.905}
      fontSize={1.2}
      anchorAlignment="center"
    />
    <silkscreentext
      text="-"
      pcbX={-23.94}
      pcbY={-3.429}
      fontSize={1.2}
      anchorAlignment="center"
    />
    <silkscreentext
      text="+"
      pcbX={22.2885}
      pcbY={-3.175}
      fontSize={1.2}
      anchorAlignment="center"
    />
    <silkscreentext
      text="-"
      pcbX={22.2885}
      pcbY={1.778}
      fontSize={1.2}
      anchorAlignment="center"
    />
    <silkscreentext
      text="v10"
      pcbX={18.3515}
      pcbY={3.81}
      layer="bottom"
      fontSize={1}
      anchorAlignment="center"
    />
    {/* ── Schematic section labels ── */}
    <schematictext
      text="Power Input"
      fontSize={0.2}
      schX={-6.5}
      schY={-3.5}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="J1: Screw Terminal (VIN/GND)"
      fontSize={0.18}
      schX={-6.5}
      schY={-3.8}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="J2: Barrel Jack (VIN/GND)"
      fontSize={0.18}
      schX={-6.5}
      schY={-4.05}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Fuse Section"
      fontSize={0.2}
      schX={-1}
      schY={-3.5}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="F1: 5x20mm Glass Fuse (5x20-BLX-A)"
      fontSize={0.18}
      schX={-1}
      schY={-3.8}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="F2: PPTC Resettable Fuse (FRX025-60F, 60V/0.25A)"
      fontSize={0.18}
      schX={-1}
      schY={-4.05}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Power Output"
      fontSize={0.2}
      schX={5}
      schY={-3.5}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="J3: Screw Terminal (VOUT/GND)"
      fontSize={0.18}
      schX={5}
      schY={-3.8}
      anchor="left"
      color="gray"
    />
    <netlabel
      net="VIN"
      connectsTo={[
        sel.J2.PWR,
        sel.J1.pin1,
        sel.F1.pin1,
        sel.F1.pin2,
        sel.F2.pin1,
      ]}
      schX={-2.5}
      schY={1.2}
    />
    <netlabel
      net="VOUT"
      connectsTo={[
        sel.J3.pin1,
        (sel.F1 as any).pin3,
        (sel.F1 as any).pin4,
        sel.F2.pin2,
      ]}
      schX={2.5}
      schY={1.2}
    />
    <netlabel
      net="GND"
      connectsTo={[
        sel.J2.GND,
        (sel.J2 as any).GNDBREAK,
        sel.J1.pin2,
        sel.J3.pin2,
      ]}
      schX={-5.5}
      schY={-2.8}
    />
  </board>
)
