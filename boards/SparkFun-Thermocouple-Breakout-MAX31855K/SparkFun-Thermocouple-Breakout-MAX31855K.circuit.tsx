import { sel } from "tscircuit"
import { MAX31855KASA_T } from "./imports/MAX31855KASA_T"

export default () => (
  <board width="29.97mm" height="19.81mm" borderRadius="1mm">
    <capacitor
      capacitance="0.1uF"
      footprint="0603"
      name="C1"
      schRotation={-90}
      pcbX={-1.2}
      pcbY={4}
      connections={{
        pin1: sel.net.VCC,
        pin2: sel.net.GND,
      }}
      schX={-8}
    />
    <capacitor
      capacitance="10nF"
      footprint="0603"
      name="C2"
      pcbX={1.5}
      pcbY={0}
      pcbRotation={-90}
      schX={-4}
      schY={-1}
      schRotation={180}
      connections={{
        pin1: sel.L2.pin1,
        pin2: sel.L1.pin1,
      }}
    />
    <jumper
      name="JP1"
      footprint={"pinrow6_rows1_p2.54mm_id1mm_od1.5mm_male"}
      schPinArrangement={{
        leftSide: {
            direction: "top-to-bottom",
            pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"]
        }
      }}
      pcbRotation={-90}
      pcbX={-14}
      schX={8}
      cadModel={null}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.VCC
      }}
    />
    <MAX31855KASA_T
      name="U1"
      pcbX={-4}
      pcbRotation={90}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.C2.pin2,
        pin3: sel.C2.pin1,
        pin4: sel.net.VCC,
        pin5: sel.JP1.pin3,
        pin6: sel.R1.pin1,  
        pin7: sel.JP1.pin4,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin1", "pin2", "pin3"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin5", "pin6", "pin7"],
        },
      }}
    />

    <testpoint
      name="TP1"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1mm"
      pcbY={7}
      pcbX={2.5}
      schX={-2}
      schY={-3}
    />
    <testpoint
      name="TP2"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1mm"
      pcbY={-7}
      pcbX={2.5}
            schX={-6}
      schY={-3}
      schRotation={180}
    />

    <inductor
      inductance={470}
      name="L1"
      footprint="0603"
      pcbX={1.5}
      pcbY={-5}
      pcbRotation={-90}
      schX={-5}
      schY={-2}
      schRotation={-90}
      connections={{
        pin2: sel.TP2.pin1,
      }}
    />
    <inductor
      inductance={470}
      name="L2"
      footprint="0603"
      pcbX={1.5}
      pcbY={5}
      pcbRotation={90}
      schX={-3}
      schY={-2}
      schRotation={-90}
      connections={{
        pin2: sel.TP1.pin1,
      }}
    />
    <resistor
      resistance="10k"
      name="R1"
      footprint="0603"
      pcbX={-4}
      pcbY={4.5}
      pcbRotation={90}
      schX={4}
      schY={1}
      schRotation={90}
      connections={{
        pin1: sel.JP1.pin6,
        pin2: sel.net.VCC,
      }}
    />
    <hole name="H1" pcbX={-8} pcbY={10} diameter={3.302} />
    <hole name="H2" pcbX={-8} pcbY={-10} diameter={3.302} />

    <chip
      name="Thermo"
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: ["pin2", "pin1"],
        },
      }}
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            name="JP2_POS"
            shape="circle"
            holeDiameter={1}
            outerDiameter={2}
            pcbX={1}
            pcbY={8}
          />
          <platedhole
            portHints={["pin2"]}
            name="JP2_NEG"
            shape="circle"
            holeDiameter={1}
            outerDiameter={2}
            pcbX={1}
            pcbY={-8}
          />

          <platedhole
            name="CLIP_2"
            shape="circle"
            holeDiameter={1}
            outerDiameter={2}
            pcbX={13.5}
            pcbY={8.5}
          />

          <platedhole
            name="CLIP_1"
            shape="circle"
            holeDiameter={1}
            outerDiameter={2}
            pcbX={13.5}
            pcbY={-8.5}
          />
        </footprint>
      }
      connections={{
        pin1: sel.TP1.pin1,
        pin2: sel.TP2.pin1,
      }}
      schX={-4}
      schY={-5}
    />
    <copperpour name="GND Pour" connectsTo="GND" layer={"top"} />
  </board>
)
