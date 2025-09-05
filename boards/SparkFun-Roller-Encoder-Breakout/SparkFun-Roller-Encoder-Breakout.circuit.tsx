import { sel } from "tscircuit"

export default () => (
  <board width="25.4mm" height="25.4mm">
    <jumper
      name="J1"
      cadModel={null}
      footprint="pinrow4_nosquareplating_id1.016_od1.880_p2.54_doublesidedpinlabel_pinlabelorthogonal_pinlabeltextalignleft"
      pcbX={-11.375}
      pcbRotation={90}
      pinLabels={{
        pin1: "B",
        pin2: "A",
        pin3: "SWITCH",
        pin4: "GND",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["B", "A", "SWITCH", "GND"],
        },
      }}
      schWidth={1}
      schX={3}
      connections={{
        A: sel.net().A,
        B: sel.net().B,
        SWITCH: sel.net().SWITCH,
        GND: sel.net.GND,
      }}
    />
    <netlabel net="GND" anchorSide="top" connectsTo={sel.J1.GND} />
    <netlabel net="GND" anchorSide="top" connectsTo={sel.SW1.pin2} />
    <hole name="ST4" diameter={3.1} pcbX={-10.142} pcbY={-10.13} />
    <hole name="ST1" diameter={3.1} pcbX={10.142} pcbY={10.13} />
    <hole name="ST2" diameter={3.1} pcbX={10.142} pcbY={-10.13} />
    <hole name="ST3" diameter={3.1} pcbX={-10.142} pcbY={10.13} />
    <chip
      name="SW1"
      cadModel={null}
      pcbX={-0.263}
      pinLabels={{
        pin1: "SWITCH",
        pin2: "GND",
        pin3: "GND",
        pin4: "A",
        pin5: "B",
        pin6: "NC",
      }}
      schX={-2}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SWITCH", "GND"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["A", "B"],
        },
      }}
      footprint={
        <footprint>
          <platedhole
            shape="circle"
            portHints={["pin1"]}
            outerDiameter={1.6}
            holeDiameter={0.85}
            pcbX={-1.599}
            pcbY={6.6}
          />
          <platedhole
            shape="circle"
            portHints={["pin2"]}
            outerDiameter={1.6}
            holeDiameter={0.85}
            pcbX={0.4}
            pcbY={6.6}
          />
          <platedhole
            shape="circle"
            portHints={["pin3"]}
            outerDiameter={1.6}
            holeDiameter={0.85}
            pcbY={3.81}
          />
          <platedhole
            shape="circle"
            portHints={["pin4"]}
            outerDiameter={1.6}
            holeDiameter={0.85}
            pcbY={1.27}
          />
          <platedhole
            shape="circle"
            portHints={["pin5"]}
            outerDiameter={1.6}
            holeDiameter={0.85}
            pcbY={-1.27}
          />
          <platedhole
            shape="circle"
            portHints={["pin6"]}
            outerDiameter={1.6}
            holeDiameter={0.85}
            pcbY={-3.81}
          />
          <hole diameter={1.6} pcbY={-6} />
        </footprint>
      }
      connections={{
        pin2: sel.net.GND,
        pin3: sel.SW1.pin2,
        A: sel.net().A,
        B: sel.net().B,
        SWITCH: sel.net().SWITCH,
      }}
    />
    <silkscreentext text="Roller" pcbY={-10} />
    <silkscreentext text="Encoder" pcbY={-11.5} />
    <silkscreentext text="Roller" pcbY={0} pcbX={6} layer="bottom" />
    <silkscreentext text="Encoder" pcbY={-1.5} pcbX={6} layer="bottom" />
    <silkscreentext text="Breakout" pcbY={-3} pcbX={6} layer="bottom" />
    <silkscreentext text="2380451A_P93_250126" pcbY={12} layer="bottom" />
  </board>
)
