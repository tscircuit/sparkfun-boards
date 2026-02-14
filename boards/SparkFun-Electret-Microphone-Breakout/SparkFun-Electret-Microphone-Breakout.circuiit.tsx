import { sel } from "tscircuit"
import { GMI9745P_30db } from "./MIC"
import { OPA344NA_250 } from "./OPA344"

export default () => {
  return (
    <board width={"20.32mm"} height={"10.16mm"}>
      <OPA344NA_250
        name="U1"
        layer={"bottom"}
        pcbX={2.858}
        pcbRotation={-180}
        schPinArrangement={{
          rightSide: {
            direction: "top-to-bottom",
            pins: ["pin1"],
          },
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin4", "pin3"],
          },
          topSide: {
            direction: "left-to-right",
            pins: ["pin5"],
          },
          bottomSide: {
            direction: "left-to-right",
            pins: ["pin2"],
          },
        }}
        connections={{
          pin2: sel.net().GND,
          pin5: sel.net().VCC,
        }}
      />

      <GMI9745P_30db
        name="MIC"
        pcbX={-7.08}
        pcbRotation={-90}
        schX={-10}
        schPinArrangement={{
          rightSide: {
            direction: "top-to-bottom",
            pins: ["pin1", "pin2"],
          },
        }}
        connections={{
          pin2: sel.net().GND,
        }}
      />

      <resistor
        name="R1"
        resistance="2.2k"
        footprint={"0603"}
        layer={"bottom"}
        schX={-8}
        schY={2}
        schRotation={90}
        connections={{
          pin1: sel.C1.pin1,
          pin2: sel.net().VCC,
        }}
      />

      <capacitor
        name="C1"
        capacitance="4.7uF"
        footprint={"0603"}
        layer={"bottom"}
        schX={-6}
        schY={1}
        connections={{
          pin1: sel.MIC.pin1,
          pin2: sel.R4.pin2,
        }}
      />

      <resistor
        name="R4"
        resistance="10k"
        footprint={"0603"}
        layer={"bottom"}
        schX={-4}
        schY={1}
        connections={{
          pin1: sel.U1.pin4,
        }}
        schRotation={-180}
      />

      <capacitor
        name="C2"
        capacitance="4.7uF"
        footprint={"0603"}
        layer={"bottom"}
        pcbX={6.032}
        pcbY={-2.222}
        pcbRotation={-90}
        schX={-5}
        schY={-1}
        schRotation={-90}
        connections={{
          pin1: sel.R3.pin2,
          pin2: sel.net().GND,
        }}
      />

      <capacitor
        name="C4"
        capacitance="0.1uF"
        footprint={"0603"}
        layer={"bottom"}
        schX={6}
        schRotation={90}
        connections={{
          pin1: sel.net().GND,
          pin2: sel.net().VCC,
        }}
      />

      <jumper
        name="J1"
        footprint={"pinrow3"}
        pcbX={8.89}
        pcbRotation={90}
        schX={4}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin1", "pin2", "pin3"],
          },
        }}
        connections={{
          pin1: sel.net().VCC,
          pin2: sel.net().GND,
          pin3: sel.U1.pin1,
        }}
      />

      <resistor
        name="R2"
        resistance="10k"
        footprint={"0603"}
        layer={"bottom"}
        schX={-3}
        schY={2}
        schRotation={90}
        connections={{
          pin1: sel.R3.pin2,
          pin2: sel.net().VCC,
        }}
      />
      <resistor
        name="R3"
        resistance="10k"
        footprint={"0603"}
        layer={"bottom"}
        pcbX={6.032}
        pcbY={2.222}
        schX={-3}
        schY={-1}
        schRotation={90}
        connections={{
          pin1: sel.net().GND,
          pin2: sel.U1.pin3,
        }}
      />
      <resistor
        name="R5"
        resistance="820k"
        footprint={"0603"}
        layer={"bottom"}
        schY={2}
        schRotation={180}
        connections={{
          pin1: sel.U1.pin1,
          pin2: sel.U1.pin4,
        }}
      />
    </board>
  )
}
