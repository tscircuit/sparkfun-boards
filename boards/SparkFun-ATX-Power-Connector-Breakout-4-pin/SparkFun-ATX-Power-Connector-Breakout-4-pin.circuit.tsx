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
    {/* Schematic Sections */}
    <schematicsection
      name="atx_power"
      displayName="4-Pin Right Angle or Vertical Power Connector"
    />
    <schematicsection
      name="screw_terminals"
      displayName="5mm Screw Terminals"
    />
    <schematicsection
      name="smd_header"
      displayName='0.1" SMD Right Angle Header Pins'
    />
    <schematicsection name="pth_header" displayName='0.1" PTH Header Pins' />

    {/* Standoff / Mounting Holes */}
    <hole name="H1" diameter="3.302mm" pcbX={-14.605} pcbY={14.2875} />
    <hole name="H2" diameter="3.302mm" pcbX={-12.7} pcbY={-14.1605} />
    <hole name="H3" diameter="3.302mm" pcbX={12.7} pcbY={-14.1605} />
    <hole name="H4" diameter="3.302mm" pcbX={14.605} pcbY={14.2875} />

    {/* ATX Power Connector */}
    <COMPUTER_PERIPHERAL_POWER
      name="ATX_POWER_CONNECTOR"
      schSectionName="atx_power"
      pcbX={0.0}
      pcbY={6.2865}
      pcbRotation={0}
      connections={{
        pin1: "net.V12V",
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: "net.V5V",
      }}
      schX={-4}
      schY={0}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
    />

    {/* Note text for ATX Power Connector */}
    <schematictext
      text="Note: The power connector's package"
      schX={-5.5}
      schY={-2.5}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="has been adjusted for the vertical"
      schX={-5.5}
      schY={-2.8}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="mount as well! Just follow the dashed"
      schX={-5.5}
      schY={-3.1}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="silkscreen that outlines the vertical"
      schX={-5.5}
      schY={-3.4}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="mount connector."
      schX={-5.5}
      schY={-3.7}
      fontSize={0.16}
      color="gray"
    />

    {/* J1: 12V Screw Terminal */}
    <ScrewTerminal5mm2
      name="J1"
      schSectionName="screw_terminals"
      pcbX={2.54}
      pcbY={-5.1435}
      pcbRotation={0}
      connections={{
        pin1: "net.GND",
        pin2: "net.V12V",
      }}
      schX={2}
      schY={2}
    />

    {/* J2: 5V Screw Terminal */}
    <ScrewTerminal5mm2
      name="J2"
      schSectionName="screw_terminals"
      pcbX={-7.62}
      pcbY={-5.1435}
      pcbRotation={0}
      connections={{
        pin1: "net.V5V",
        pin2: "net.GND",
      }}
      schX={2}
      schY={-2}
    />

    {/* J3: 1X04 PTH Jumper / Header Pin (placed on bottom) */}
    <jumper
      name="J3"
      schSectionName="pth_header"
      pcbX={0.0}
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
      schX={6}
      schY={-3}
    />

    {/* J4: 1X04 SMD RA Male Header Pin */}
    <CONN_04_SMD_RA_MALE
      name="J4"
      schSectionName="smd_header"
      pcbX={0.0}
      pcbY={-15.3035}
      pcbRotation={0}
      connections={{
        pin1: "net.V5V",
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: "net.V12V",
      }}
      schX={6}
      schY={3}
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
    <silkscreentext
      text="ATX Power Connector"
      pcbX={14.351}
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
