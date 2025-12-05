import { sel } from "tscircuit"
import { DS1037_09MNAKT74_0CC } from "./DS1037_09MNAKT74_0CC"

export default () => {
  return (
    <board width="22.86mm" height="31.75mm">
      <DS1037_09MNAKT74_0CC
        pcbX={-2}
        pcbY={0}
        name="P1"
        pcbRotation={-90}
        connections={{
          pin1: sel.J2.pin1,
          pin2: sel.J2.pin2,
          pin3: sel.J2.pin3,
          pin4: sel.J2.pin4,
          pin5: sel.J2.pin5,
          pin6: sel.J2.pin6,
          pin7: sel.J2.pin7,
          pin8: sel.J2.pin8,
          pin9: sel.J2.pin9,
        }}
        schPinArrangement={{
          leftSide: {
            direction: "bottom-to-top",
            pins: [
              "pin1",
              "pin2",
              "pin3",
              "pin4",
              "pin5",
              "pin6",
              "pin7",
              "pin8",
              "pin9",
            ],
          },
        }}
      />
      <jumper
        name="J2"
        footprint={"pinrow9_id1.016_od1.88_nosquareplating"}
        schWidth={0.65}
        cadModel={null}
        schDirection="right"
        schPinArrangement={{
          rightSide: {
            direction: "bottom-to-top",
            pins: [
              "pin1",
              "pin2",
              "pin3",
              "pin4",
              "pin5",
              "pin6",
              "pin7",
              "pin8",
              "pin9",
            ],
          },
        }}
        schX={-3}
        schY={0}
        pcbX={10}
        pcbY={0}
        pcbRotation={90}
      />
      <jumper
        name="J3"
        footprint={"pinrow1_id1.016_od1.88_nosquareplating"}
        schWidth={0.65}
        cadModel={null}
        schDirection="right"
        pinLabels={{
          pin1: ["GND"],
        }}
        schX={-3}
        schY={-2}
        pcbX={10}
        pcbY={12.75}
        pcbRotation={90}
        connections={{ pin1: sel.net().GND }}
      />
      <jumper
        name="J4"
        footprint={"pinrow1_id1.016_od1.88_nosquareplating"}
        schWidth={0.65}
        cadModel={null}
        schDirection="right"
        pinLabels={{
          pin1: ["GND"],
        }}
        schX={-3}
        schY={-3}
        pcbX={10}
        pcbY={-12.75}
        pcbRotation={90}
        connections={{ pin1: sel.net().GND }}
      />

      <netlabel
        net="GND"
        schX={-2}
        schY={-3.5}
        anchorSide="top"
        connectsTo={sel.J4.pin1}
      />

      <hole diameter={3.302} pcbY={12.7} pcbX={5.08} />
      <hole diameter={3.302} pcbY={-12.7} pcbX={5.08} />

      <copperpour connectsTo="net.GND" layer="top" />
      <copperpour connectsTo="net.GND" layer="bottom" />
    </board>
  )
}