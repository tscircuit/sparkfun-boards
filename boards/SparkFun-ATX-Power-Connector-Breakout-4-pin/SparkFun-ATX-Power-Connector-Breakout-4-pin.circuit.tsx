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
    <schematicsection name="atx_connector" />
    <schematicsection name="screw_terminals" />
    <schematicsection name="smd_header" />
    <schematicsection name="pth_header" />

    {/* Standoff / Mounting Holes */}
    <hole name="H1" diameter="3.302mm" pcbX={-14.605} pcbY={14.2875} />
    <hole name="H2" diameter="3.302mm" pcbX={-12.7} pcbY={-14.1605} />
    <hole name="H3" diameter="3.302mm" pcbX={12.7} pcbY={-14.1605} />
    <hole name="H4" diameter="3.302mm" pcbX={14.605} pcbY={14.2875} />

    {/* Section 1: ATX Power Connector */}
    <schematictext
      text="4-Pin Right Angle or Vertical Power Connector"
      schX={-5.5}
      schY={5.0}
      fontSize={0.22}
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
      schSectionName="atx_connector"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin3"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin4"],
        },
      }}
    />
    {/* Explicit netlabel for ATX GND to prevent vertical GND line intersecting COMPUTER_PERIPHERAL_POWER text */}
    <netlabel
      net="GND"
      connection="ATX_POWER_CONNECTOR.pin2"
      schX={-8.5}
      schY={1.5}
      anchorSide="right"
    />
    <netlabel
      net="V12V"
      connection="ATX_POWER_CONNECTOR.pin1"
      schX={-3.5}
      schY={2.7}
      anchorSide="left"
    />
    <netlabel
      net="V5V"
      connection="ATX_POWER_CONNECTOR.pin4"
      schX={-3.5}
      schY={1.5}
      anchorSide="left"
    />

    <schematictext
      text="Note: The power connector's package"
      schX={-7.9}
      schY={-1.7}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="has been adjusted for the vertical"
      schX={-7.9}
      schY={-2.0}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="mount as well! Just follow the dashed"
      schX={-7.9}
      schY={-2.3}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="silkscreen that outlines the vertical"
      schX={-7.9}
      schY={-2.6}
      fontSize={0.16}
      color="gray"
    />
    <schematictext
      text="mount connector."
      schX={-7.9}
      schY={-2.9}
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
      schSectionName="screw_terminals"
    />
    <netlabel
      net="GND"
      connection="J1.pin1"
      schX={2.2}
      schY={2.2}
      anchorSide="left"
    />
    <netlabel
      net="V12V"
      connection="J1.pin2"
      schX={2.2}
      schY={2.8}
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
      schSectionName="screw_terminals"
    />
    {/* GND label moved below SCREWTERMINAL-5MM-2 text (which renders at y=-2.13) */}
    <netlabel
      net="GND"
      connection="J2.pin2"
      schX={2.2}
      schY={-2.5}
      anchorSide="left"
    />
    <netlabel
      net="V5V"
      connection="J2.pin1"
      schX={2.2}
      schY={-1.1}
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
      schSectionName="smd_header"
    />
    <netlabel
      net="V5V"
      connection="J4.pin1"
      schX={8.2}
      schY={4.2}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connection="J4.pin2"
      schX={8.2}
      schY={3.4}
      anchorSide="left"
    />
    <netlabel
      net="GND"
      connection="J4.pin3"
      schX={8.2}
      schY={2.6}
      anchorSide="left"
    />
    <netlabel
      net="V12V"
      connection="J4.pin4"
      schX={8.2}
      schY={1.8}
      anchorSide="left"
    />

    {/* Section 4: 0.1" PTH Header Pins */}
    <schematictext
      text='0.1" PTH Header Pins'
      schX={6.5}
      schY={-1.0}
      fontSize={0.24}
      color="brown"
    />
    <chip
      name="J3"
      pcbX={0.0}
      pcbY={-13.1445}
      pcbRotation={180}
      layer="bottom"
      pinLabels={{
        pin1: ["pin1"],
        pin2: ["pin2"],
        pin3: ["pin3"],
        pin4: ["pin4"],
      }}
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-5.715mm"
            pcbY="0mm"
            holeDiameter="1.016mm"
            outerDiameter="1.88mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-1.905mm"
            pcbY="0mm"
            holeDiameter="1.016mm"
            outerDiameter="1.88mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.905mm"
            pcbY="0mm"
            holeDiameter="1.016mm"
            outerDiameter="1.88mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="5.715mm"
            pcbY="0mm"
            holeDiameter="1.016mm"
            outerDiameter="1.88mm"
            shape="circle"
          />
        </footprint>
      }
      connections={{
        pin1: "net.V5V",
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: "net.V12V",
      }}
      schX={6.5}
      schY={-3.0}
      schSectionName="pth_header"
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
    <netlabel
      net="GND"
      connection="J3.pin3"
      schX={8.0}
      schY={-2.8}
      anchorSide="left"
    />
    <netlabel
      net="V12V"
      connection="J3.pin4"
      schX={8.0}
      schY={-3.4}
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

    {/* Component Silkscreen Designators */}
    <silkscreentext text="J2" pcbX={-8.89} pcbY={-2.6} fontSize={0.7} />
    <silkscreentext text="J1" pcbX={1.27} pcbY={-2.6} fontSize={0.7} />
    <silkscreentext text="J4" pcbX={-4.32} pcbY={-8.57} fontSize={0.7} />
    <silkscreentext
      text="J3"
      pcbX={-1.27}
      pcbY={-14.54}
      pcbRotation={180}
      layer="bottom"
      fontSize={0.7}
    />

    {/* Hole Silkscreen Designators */}
    <silkscreentext text="H1" pcbX={-14.605} pcbY={16.32} fontSize={0.7} />
    <silkscreentext text="H4" pcbX={14.605} pcbY={16.32} fontSize={0.7} />
    <silkscreentext text="H2" pcbX={-12.7} pcbY={-12.13} fontSize={0.7} />
    <silkscreentext text="H3" pcbX={12.7} pcbY={-12.13} fontSize={0.7} />

    {/* ATX_POWER_CONNECTOR label - centered near the top like the reference board */}
    <silkscreentext
      text="ATX_POWER_CONNECTOR"
      pcbX={2.0}
      pcbY={11.5}
      fontSize={0.7}
    />

    {/* Silkscreen text - Top side (net labels on screw terminal rows) */}
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
