import { sel } from "tscircuit"
import { Fuse20mm } from "./imports/Fuse20mm"
import { PowerJackPthLock } from "./imports/PowerJackPthLock"
import { PptcFusePth } from "./imports/PptcFusePth"
import { ScrewTerminal5mm2 } from "./imports/ScrewTerminal5mm2"

const outline = [
  { x: -31.1785, y: -6.35 },
  { x: -32.4485, y: -5.08 },
  { x: -32.4485, y: 5.08 },
  { x: -31.1785, y: 6.35 },
  { x: -11.8745, y: 6.35 },
  { x: -10.0965, y: 4.572 },
  { x: -8.3185, y: 6.35 },
  { x: 19.7485, y: 6.35 },
  { x: 21.5265, y: 4.572 },
  { x: 23.3045, y: 6.35 },
  { x: 31.1785, y: 6.35 },
  { x: 32.4485, y: 5.08 },
  { x: 32.4485, y: -5.08 },
  { x: 31.1785, y: -6.35 },
  { x: 23.3045, y: -6.35 },
  { x: 21.5265, y: -4.572 },
  { x: 19.7485, y: -6.35 },
  { x: -8.3185, y: -6.35 },
  { x: -10.0965, y: -4.572 },
  { x: -11.8745, y: -6.35 },
  { x: -31.1785, y: -6.35 },
]

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
