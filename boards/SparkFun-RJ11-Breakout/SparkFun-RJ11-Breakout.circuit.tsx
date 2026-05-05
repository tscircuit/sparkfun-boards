import { sel } from "tscircuit"
import { RJ11 } from "./RJ11"

export default () => {
  return (
    <board width="22.24mm" height="42.32mm">
      <RJ11
        schWidth={0.65}
        schX={2.6}
        schY={0}
        schDirection="right"
        name="JP1"
        cadModel={null}
        pcbX={-2}
        pcbY={12.908}
        pcbRotation={0}
        pinLabels={{
          pin1: "1",
          pin2: "2",
          pin3: "3",
          pin4: "4",
          pin5: "5",
          pin6: "6",
        }}
        connections={{
          pin1: sel.JP2.pin1,
          pin2: sel.JP2.pin2,
          pin3: sel.JP2.pin3,
          pin4: sel.JP2.pin4,
          pin5: sel.JP2.pin5,
          pin6: sel.JP2.pin6,
        }}
      />

      <jumper
        schWidth={0.65}
        schX={5.6}
        schY={0}
        schDirection="left"
        name="JP2"
        footprint={
          "pinrow6_id1.016_od1.88_p2.54_nosquareplating_doublesidedpinlabel"
        }
        cadModel={null}
        pcbX={-2}
        pcbY={2.938}
        pcbRotation={0}
        pinLabels={{
          pin6: "6",
          pin5: "5",
          pin4: "4",
          pin3: "3",
          pin2: "2",
          pin1: "1",
        }}
        schPinArrangement={{
          leftSide: {
            pins: ["pin6", "pin5", "pin4", "pin3", "pin2", "pin1"],
            direction: "top-to-bottom",
          },
        }}
        connections={{
          pin1: sel.JP1.pin1,
          pin2: sel.JP1.pin2,
          pin3: sel.JP1.pin3,
          pin4: sel.JP1.pin4,
          pin5: sel.JP1.pin5,
          pin6: sel.JP1.pin6,
        }}
      />

      <schematictext
        text="BLUE-2"
        schX={4.1}
        schY={0.55}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="YELLOW-2"
        schX={4.25}
        schY={0.35}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="GREEN-2"
        schX={4.19}
        schY={0.15}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="RED-2"
        schX={4.05}
        schY={-0.05}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="BLACK-2"
        schX={4.17}
        schY={-0.25}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="WHITE-2"
        schX={4.17}
        schY={-0.45}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="RJ11"
        schX={2.6}
        schY={-0.9}
        fontSize={0.25}
        color="#808080"
      />
      <schematictext
        text="Pins"
        schX={5.6}
        schY={-0.9}
        fontSize={0.25}
        color="#808080"
      />

      <RJ11
        schWidth={0.65}
        schX={2.6}
        schY={2.6}
        schDirection="right"
        name="JP3"
        cadModel={null}
        pcbX={-2}
        pcbY={-12.08}
        pcbRotation={0}
        pinLabels={{
          pin1: "1",
          pin2: "2",
          pin3: "3",
          pin4: "4",
          pin5: "5",
          pin6: "6",
        }}
        connections={{
          pin1: sel.JP4.pin1,
          pin2: sel.JP4.pin2,
          pin3: sel.JP4.pin3,
          pin4: sel.JP4.pin4,
          pin5: sel.JP4.pin5,
          pin6: sel.JP4.pin6,
        }}
      />
      <jumper
        schWidth={0.65}
        schX={5.6}
        schY={2.6}
        schDirection="left"
        name="JP4"
        footprint={
          "pinrow6_id1.016_od1.88_p2.54_nosquareplating_doublesidedpinlabel"
        }
        cadModel={null}
        pcbX={-2}
        pcbY={-18.89}
        pcbRotation={0}
        pinLabels={{
          pin6: "6",
          pin5: "5",
          pin4: "4",
          pin3: "3",
          pin2: "2",
          pin1: "1",
        }}
        schPinArrangement={{
          leftSide: {
            pins: ["pin6", "pin5", "pin4", "pin3", "pin2", "pin1"],
            direction: "top-to-bottom",
          },
        }}
        connections={{
          pin1: sel.JP3.pin1,
          pin2: sel.JP3.pin2,
          pin3: sel.JP3.pin3,
          pin4: sel.JP3.pin4,
          pin5: sel.JP3.pin5,
          pin6: sel.JP3.pin6,
        }}
      />

      <schematictext
        text="BLUE"
        schX={4.1}
        schY={3.15}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="YELLOW"
        schX={4.25}
        schY={2.95}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="GREEN"
        schX={4.19}
        schY={2.75}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="RED"
        schX={4.05}
        schY={2.55}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="BLACK"
        schX={4.17}
        schY={2.35}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="WHITE"
        schX={4.17}
        schY={2.15}
        fontSize={0.2}
        color="#808080"
      />
      <schematictext
        text="RJ11"
        schX={2.6}
        schY={1.7}
        fontSize={0.25}
        color="#808080"
      />
      <schematictext
        text="Pins"
        schX={5.6}
        schY={1.71}
        fontSize={0.25}
        color="#808080"
      />
      <hole diameter={3.302} pcbX={8.049} pcbY={3.462} />
      <hole diameter={3.302} pcbX={8.049} pcbY={-3.239} />
      <hole diameter={3.302} pcbX={8.049} pcbY={18.067} />
      <hole diameter={3.302} pcbX={8.049} pcbY={-17.366} />

      <silkscreentext text="RJ11" pcbY={-1} pcbX={-1.5} fontSize={1} />
      <silkscreentext
        text="RJ11"
        pcbY={-9}
        pcbX={-1.5}
        fontSize={1}
        layer={"bottom"}
        pcbRotation={180}
      />
      <silkscreentext text="Breakout" pcbY={-3} pcbX={-1.5} fontSize={1} />
      <silkscreentext
        text="Breakout"
        pcbY={-7}
        pcbX={-1.5}
        fontSize={1}
        layer={"bottom"}
        pcbRotation={180}
      />
      <silkscreentext
        text="Y  G  R  B"
        pcbY={-16}
        pcbX={-2}
        fontSize={1.2}
        layer={"bottom"}
      />
    </board>
  )
}
