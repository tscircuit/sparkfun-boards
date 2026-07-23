import { sel } from "tscircuit"
import { OutlineBuilder } from "../../util/OutlineBuilder"
import { COMPUTER_PERIPHERAL_POWER } from "./imports/COMPUTER_PERIPHERAL_POWER"
import { CONN_04_SMD_RA_MALE } from "./imports/CONN_04_SMD_RA_MALE"
import { ScrewTerminal5mm2 } from "../SparkFun-Fuse-Breakout-Board/imports/ScrewTerminal5mm2"

const outline = new OutlineBuilder(-17.145, 14.2875)
  .lineTo(-17.145, -14.2875)
  .arcTo(-14.605, -16.8275, { radius: 2.54, sweep: true, segments: 8 })
  .lineTo(14.605, -16.8275)
  .arcTo(17.145, -14.2875, { radius: 2.54, sweep: true, segments: 8 })
  .lineTo(17.145, 14.2875)
  .arcTo(14.605, 16.8275, { radius: 2.54, sweep: true, segments: 8 })
  .lineTo(-14.605, 16.8275)
  .arcTo(-17.145, 14.2875, { radius: 2.54, sweep: true, segments: 8 })
  .toArray()

export default () => (
  <board outline={outline}>
    {/* Standoff / Mounting Holes */}
    <hole name="H1" diameter="3.302mm" pcbX={-14.605} pcbY={14.2875} />
    <hole name="H2" diameter="3.302mm" pcbX={-12.7} pcbY={-14.1605} />
    <hole name="H3" diameter="3.302mm" pcbX={12.7} pcbY={-14.1605} />
    <hole name="H4" diameter="3.302mm" pcbX={14.605} pcbY={14.2875} />

    {/* Section 1: ATX Power Connector */}
    <schematictext
      text="4-Pin Right Angle or Vertical Power Connector"
      schX={-5.5}
      schY={4.5}
      fontSize={0.24}
      color="brown"
    />
    <COMPUTER_PERIPHERAL_POWER
      name="ATX_POWER_CONNECTOR"
      pcbX={0.0}
      pcbY={6.2865}
      pcbRotation={0}
      connections={{
        pin1: "net.V12V",
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: "net.V5V",
      }}
      schX={-5.5}
      schY={1.5}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
    />
    {/* Explicit netlabel for ATX GND to prevent vertical GND line intersecting COMPUTER_PERIPHERAL_POWER text */}
    <netlabel
      net="GND"
      connection="ATX_POWER_CONNECTOR.pin2"
      schX={-3.5}
      schY={0.5}
      anchorSide="left"
    />

    {/* Note text for ATX Power Connector - placed far left to avoid vertical traces */}
    <schematictext
      text="Note: The power connector's package"
      schX={-9.0}
      schY={-3.0}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="has been adjusted for the vertical"
      schX={-9.0}
      schY={-3.3}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="mount as well! Just follow the dashed"
      schX={-9.0}
      schY={-3.6}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="silkscreen that outlines the vertical"
      schX={-9.0}
      schY={-3.9}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="mount connector."
      schX={-9.0}
      schY={-4.2}
      fontSize={0.16}
      color="gray"
    />

    {/* Section 2: 5mm Screw Terminals */}
    <schematictext
      text="5mm Screw Terminals"
      schX={0.5}
      schY={4.5}
      fontSize={0.24}
      color="brown"
    />
    <ScrewTerminal5mm2
      name="J1"
      pcbX={2.54}
      pcbY={-5.1435}
      pcbRotation={0}
      connections={{
        pin1: "net.GND",
        pin2: "net.V12V",
      }}
      schX={0.5}
      schY={2.2}
    />
    <netlabel
      net="GND"
      connection="J1.pin1"
      schX={2.2}
      schY={2.2}
      anchorSide="left"
    />

    <ScrewTerminal5mm2
      name="J2"
      pcbX={-7.62}
      pcbY={-5.1435}
      pcbRotation={0}
      connections={{
        pin1: "net.V5V",
        pin2: "net.GND",
      }}
      schX={0.5}
      schY={-1.8}
    />
    {/* GND label moved below SCREWTERMINAL-5MM-2 text (which renders at y=-2.13) */}
    <netlabel
      net="GND"
      connection="J2.pin2"
      schX={2.2}
      schY={-2.5}
      anchorSide="left"
    />

    {/* Section 3: 0.1" SMD Right Angle Header Pins */}
    <schematictext
      text='0.1" SMD Right Angle Header Pins'
      schX={6.5}
      schY={5.0}
      fontSize={0.24}
      color="brown"
    />
    <CONN_04_SMD_RA_MALE
      name="J4"
      pcbX={0.0}
      pcbY={-15.3035}
      pcbRotation={0}
      connections={{
        pin1: "net.V5V",
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: "net.V12V",
      }}
      schX={6.5}
      schY={3.0}
    />

    {/* Section 4: 0.1" PTH Header Pins */}
    <schematictext
      text='0.1" PTH Header Pins'
      schX={6.5}
      schY={-1.0}
      fontSize={0.24}
      color="brown"
    />
    <jumper
      name="J3"
      pcbX={-3.81}
      pcbY={-13.1445}
      pcbRotation={180}
      layer="bottom"
      footprint="pinrow4_id1.016mm_od1.88mm_nosquareplating"
      connections={{
        pin1: "net.V5V",
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: "net.V12V",
      }}
      schX={6.5}
      schY={-3.0}
    />
    {/* Spread V5V and GND labels further apart vertically to avoid overlap */}
    <netlabel
      net="V5V"
      connection="J3.pin1"
      schX={8.0}
      schY={-4.0}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connection="J3.pin2"
      schX={8.0}
      schY={-2.2}
      anchorSide="left"
    />

    {/* Explicit Routed Traces for 5V and 12V with 1.27mm width */}
    <trace from="ATX_POWER_CONNECTOR.pin4" to="J2.pin1" width="1.27mm" />
    <trace from="J2.pin1" to="J3.pin1" width="1.27mm" />
    <trace from="J3.pin1" to="J4.pin1" width="1.27mm" />

    <trace from="ATX_POWER_CONNECTOR.pin1" to="J1.pin2" width="1.27mm" />
    <trace from="J1.pin2" to="J3.pin4" width="1.27mm" />
    <trace from="J3.pin4" to="J4.pin4" width="1.27mm" />

    {/* Ground copper pours on both layers */}
    <copperpour connectsTo="net.GND" layer="top" />
    <copperpour connectsTo="net.GND" layer="bottom" />

    {/* Component Silkscreen Designators - positioned near component centers */}
    {/* J1 at pcb=(5.04, -5.14) - label above */}
    <silkscreentext text="J1" pcbX={5.04} pcbY={-3.0} fontSize={1} />
    {/* J2 at pcb=(-5.12, -5.14) - label above */}
    <silkscreentext text="J2" pcbX={-5.12} pcbY={-3.0} fontSize={1} />
    {/* J3 at pcb=(-3.81, -13.14) - label to the left, clear of footprint */}
    <silkscreentext text="J3" pcbX={-7.5} pcbY={-13.1445} fontSize={1} />
    {/* J4 at pcb=(0.0, -12.40) - label to the right */}
    <silkscreentext text="J4" pcbX={3.5} pcbY={-12.4} fontSize={1} />
    {/* Hole Silkscreen Designators - offset inside from hole center to avoid overlap */}
    {/* H1 at (-14.605, 14.287) - top-left corner */}
    <silkscreentext text="H1" pcbX={-12.0} pcbY={14.287} fontSize={1} />
    {/* H2 at (-12.7, -14.161) - bottom-left */}
    <silkscreentext text="H2" pcbX={-10.2} pcbY={-14.161} fontSize={1} />
    {/* H3 at (12.7, -14.161) - bottom-right */}
    <silkscreentext text="H3" pcbX={10.2} pcbY={-14.161} fontSize={1} />
    {/* H4 at (14.605, 14.287) - top-right corner */}
    <silkscreentext text="H4" pcbX={12.0} pcbY={14.287} fontSize={1} />

    {/* Silkscreen text - Top side */}
    <silkscreentext
      text="12V"
      pcbX={9.144}
      pcbY={-10.4775}
      pcbRotation={270}
      fontSize={1}
    />
    <silkscreentext
      text="5V"
      pcbX={-9.144}
      pcbY={-10.8585}
      pcbRotation={270}
      fontSize={1}
    />
    <silkscreentext
      text="GND"
      pcbX={-6.604}
      pcbY={-10.2235}
      pcbRotation={270}
      fontSize={1}
    />
    <silkscreentext
      text="GND"
      pcbX={6.604}
      pcbY={-10.2235}
      pcbRotation={270}
      fontSize={1}
    />
    {/* ATX connector label - moved inward to avoid overlap with H4 corner hole at (14.605, 14.287) */}
    <silkscreentext
      text="ATX Power Connector"
      pcbX={11.5}
      pcbY={12.5095}
      pcbRotation={270}
      fontSize={1}
    />

    {/* Silkscreen text - Bottom side */}
    <silkscreentext
      text="12V"
      pcbX={9.144}
      pcbY={-15.9385}
      pcbRotation={90}
      layer="bottom"
      fontSize={1}
    />
    <silkscreentext
      text="GND"
      pcbX={6.604}
      pcbY={-16.3195}
      pcbRotation={90}
      layer="bottom"
      fontSize={1}
    />
    <silkscreentext
      text="GND"
      pcbX={-6.604}
      pcbY={-16.3195}
      pcbRotation={90}
      layer="bottom"
      fontSize={1}
    />
    <silkscreentext
      text="5V"
      pcbX={-9.144}
      pcbY={-15.5575}
      pcbRotation={90}
      layer="bottom"
      fontSize={1}
    />
  </board>
)
