import { sel } from "tscircuit"
import { Fuse20mm } from "./imports/Fuse20mm"
import { PowerJackPthLock } from "./imports/PowerJackPthLock"
import { PptcFusePth } from "./imports/PptcFusePth"
import { ScrewTerminal5mm2 } from "./imports/ScrewTerminal5mm2"

// Board: 65mm x 12.7mm with four semi-circle mounting cutouts
// Static pre-computed rounded coordinates to prevent floating point differences across OS platforms
const outline = [
  { x: -32.4485, y: -5.08 },
  { x: -32.4485, y: 5.08 },
  { x: -31.1785, y: 6.35 },
  { x: -11.8745, y: 6.35 },
  { x: -11.7719, y: 6.4048 },
  { x: -11.6659, y: 6.4529 },
  { x: -11.557, y: 6.4938 },
  { x: -11.4457, y: 6.5276 },
  { x: -11.3324, y: 6.554 },
  { x: -11.2176, y: 6.573 },
  { x: -11.1018, y: 6.5844 },
  { x: -10.9855, y: 6.5882 },
  { x: -10.8692, y: 6.5844 },
  { x: -10.7534, y: 6.573 },
  { x: -10.6386, y: 6.554 },
  { x: -10.5253, y: 6.5276 },
  { x: -10.414, y: 6.4938 },
  { x: -10.3051, y: 6.4529 },
  { x: -10.1991, y: 6.4048 },
  { x: -10.0965, y: 6.35 },
  { x: -9.9939, y: 6.4048 },
  { x: -9.8879, y: 6.4529 },
  { x: -9.779, y: 6.4938 },
  { x: -9.6677, y: 6.5276 },
  { x: -9.5544, y: 6.554 },
  { x: -9.4396, y: 6.573 },
  { x: -9.3238, y: 6.5844 },
  { x: -9.2075, y: 6.5882 },
  { x: -9.0912, y: 6.5844 },
  { x: -8.9754, y: 6.573 },
  { x: -8.8606, y: 6.554 },
  { x: -8.7473, y: 6.5276 },
  { x: -8.636, y: 6.4938 },
  { x: -8.5271, y: 6.4529 },
  { x: -8.4211, y: 6.4048 },
  { x: -8.3185, y: 6.35 },
  { x: 19.7485, y: 6.35 },
  { x: 19.8511, y: 6.4048 },
  { x: 19.9571, y: 6.4529 },
  { x: 20.066, y: 6.4938 },
  { x: 20.1773, y: 6.5276 },
  { x: 20.2906, y: 6.554 },
  { x: 20.4054, y: 6.573 },
  { x: 20.5212, y: 6.5844 },
  { x: 20.6375, y: 6.5882 },
  { x: 20.7538, y: 6.5844 },
  { x: 20.8696, y: 6.573 },
  { x: 20.9844, y: 6.554 },
  { x: 21.0977, y: 6.5276 },
  { x: 21.209, y: 6.4938 },
  { x: 21.3179, y: 6.4529 },
  { x: 21.4239, y: 6.4048 },
  { x: 21.5265, y: 6.35 },
  { x: 21.6291, y: 6.4048 },
  { x: 21.7351, y: 6.4529 },
  { x: 21.844, y: 6.4938 },
  { x: 21.9553, y: 6.5276 },
  { x: 22.0686, y: 6.554 },
  { x: 22.1834, y: 6.573 },
  { x: 22.2992, y: 6.5844 },
  { x: 22.4155, y: 6.5882 },
  { x: 22.5318, y: 6.5844 },
  { x: 22.6476, y: 6.573 },
  { x: 22.7624, y: 6.554 },
  { x: 22.8757, y: 6.5276 },
  { x: 22.987, y: 6.4938 },
  { x: 23.0959, y: 6.4529 },
  { x: 23.2019, y: 6.4048 },
  { x: 23.3045, y: 6.35 },
  { x: 31.1785, y: 6.35 },
  { x: 32.4485, y: 5.08 },
  { x: 32.4485, y: -5.08 },
  { x: 31.1785, y: -6.35 },
  { x: 23.3045, y: -6.35 },
  { x: 23.2019, y: -6.4048 },
  { x: 23.0959, y: -6.4529 },
  { x: 22.987, y: -6.4938 },
  { x: 22.8757, y: -6.5276 },
  { x: 22.7624, y: -6.554 },
  { x: 22.6476, y: -6.573 },
  { x: 22.5318, y: -6.5844 },
  { x: 22.4155, y: -6.5882 },
  { x: 22.2992, y: -6.5844 },
  { x: 22.1834, y: -6.573 },
  { x: 22.0686, y: -6.554 },
  { x: 21.9553, y: -6.5276 },
  { x: 21.844, y: -6.4938 },
  { x: 21.7351, y: -6.4529 },
  { x: 21.6291, y: -6.4048 },
  { x: 21.5265, y: -6.35 },
  { x: 21.4239, y: -6.4048 },
  { x: 21.3179, y: -6.4529 },
  { x: 21.209, y: -6.4938 },
  { x: 21.0977, y: -6.5276 },
  { x: 20.9844, y: -6.554 },
  { x: 20.8696, y: -6.573 },
  { x: 20.7538, y: -6.5844 },
  { x: 20.6375, y: -6.5882 },
  { x: 20.5212, y: -6.5844 },
  { x: 20.4054, y: -6.573 },
  { x: 20.2906, y: -6.554 },
  { x: 20.1773, y: -6.5276 },
  { x: 20.066, y: -6.4938 },
  { x: 19.9571, y: -6.4529 },
  { x: 19.8511, y: -6.4048 },
  { x: 19.7485, y: -6.35 },
  { x: -8.3185, y: -6.35 },
  { x: -8.4211, y: -6.4048 },
  { x: -8.5271, y: -6.4529 },
  { x: -8.636, y: -6.4938 },
  { x: -8.7473, y: -6.5276 },
  { x: -8.8606, y: -6.554 },
  { x: -8.9754, y: -6.573 },
  { x: -9.0912, y: -6.5844 },
  { x: -9.2075, y: -6.5882 },
  { x: -9.3238, y: -6.5844 },
  { x: -9.4396, y: -6.573 },
  { x: -9.5544, y: -6.554 },
  { x: -9.6677, y: -6.5276 },
  { x: -9.779, y: -6.4938 },
  { x: -9.8879, y: -6.4529 },
  { x: -9.9939, y: -6.4048 },
  { x: -10.0965, y: -6.35 },
  { x: -10.1991, y: -6.4048 },
  { x: -10.3051, y: -6.4529 },
  { x: -10.414, y: -6.4938 },
  { x: -10.5253, y: -6.5276 },
  { x: -10.6386, y: -6.554 },
  { x: -10.7534, y: -6.573 },
  { x: -10.8692, y: -6.5844 },
  { x: -10.9855, y: -6.5882 },
  { x: -11.1018, y: -6.5844 },
  { x: -11.2176, y: -6.573 },
  { x: -11.3324, y: -6.554 },
  { x: -11.4457, y: -6.5276 },
  { x: -11.557, y: -6.4938 },
  { x: -11.6659, y: -6.4529 },
  { x: -11.7719, y: -6.4048 },
  { x: -11.8745, y: -6.35 },
  { x: -31.1785, y: -6.35 },
  { x: -32.4485, y: -5.08 },
]

export default () => (
  <board outline={outline} routingDisabled>
    {/* Input Section Components */}
    <PowerJackPthLock
      name="J2"
      pcbX={-28.5115}
      pcbY={-0.127}
      pcbRotation={270}
      schX={-5.5}
      schY={-1.5}
      connections={{ PWR: "net.VIN", GND: "net.GND", GNDBREAK: "net.GND" }}
    />
    <ScrewTerminal5mm2
      name="J1"
      pcbX={-28.6385}
      pcbY={2.54}
      pcbRotation={270}
      schX={-5.5}
      schY={1.5}
      schRotation={90}
      connections={{ pin1: "net.VIN", pin2: "net.GND" }}
    />

    {/* Output Section Components */}
    <ScrewTerminal5mm2
      name="J3"
      pcbX={28.5115}
      pcbY={-2.54}
      pcbRotation={90}
      schX={5.5}
      schY={1.5}
      schRotation={270}
      connections={{ pin1: "net.VOUT", pin2: "net.GND" }}
    />

    {/* Fuse Section Components */}
    <Fuse20mm
      name="F1"
      displayName="FUSEX20MM"
      pcbX={5.6515}
      pcbY={0}
      pcbRotation={270}
      schX={0}
      schY={2.5}
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

    {/* PCB Layout details */}
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

    {/* PCB Silkscreen texts */}
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

    {/* Schematic Dividers */}
    <schematicline
      x1={-3.5}
      y1={5.5}
      x2={-3.5}
      y2={-5.5}
      isDashed
      color="gray"
    />
    <schematicline x1={3.5} y1={5.5} x2={3.5} y2={-5.5} isDashed color="gray" />

    {/* Column Headers */}
    <schematictext
      text="Input"
      fontSize={0.25}
      schX={-5.5}
      schY={5}
      anchor="center"
      color="brown"
    />
    <schematictext
      text="Fuse"
      fontSize={0.25}
      schX={0}
      schY={5}
      anchor="center"
      color="brown"
    />
    <schematictext
      text="Output"
      fontSize={0.25}
      schX={5.5}
      schY={5}
      anchor="center"
      color="brown"
    />

    {/* Net Labels - Input Section */}
    <netlabel net="VIN" connectsTo={sel.J1.pin1} anchorSide="bottom" />
    <netlabel net="GND" connectsTo={sel.J1.pin2} anchorSide="top" />

    {/* Net Labels - Fuse Section */}
    <netlabel net="VIN" connectsTo={sel.F2.pin1} anchorSide="right" />
    <netlabel net="VOUT" connectsTo={sel.F2.pin2} anchorSide="left" />

    {/* Net Labels - Output Section */}
    <netlabel net="VOUT" connectsTo={sel.J3.pin1} anchorSide="bottom" />
    <netlabel net="GND" connectsTo={sel.J3.pin2} anchorSide="top" />

    {/* Footnotes in Fuse Column */}
    <schematictext
      text="Note: Depending on your personal preference,"
      fontSize={0.14}
      schX={0}
      schY={-2.2}
      anchor="center"
      color="gray"
    />
    <schematictext
      text="chose between a glass ferrule type fuse or a"
      fontSize={0.14}
      schX={0}
      schY={-2.5}
      anchor="center"
      color="gray"
    />
    <schematictext
      text="resettable fuse here"
      fontSize={0.14}
      schX={0}
      schY={-2.8}
      anchor="center"
      color="gray"
    />
  </board>
)
