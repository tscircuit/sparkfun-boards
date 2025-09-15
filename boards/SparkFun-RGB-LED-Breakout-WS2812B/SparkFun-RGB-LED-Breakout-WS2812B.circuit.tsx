import { WS2812B_V5_W } from "./WS2812B_V5_W"
import { sel } from "tscircuit"

const JP1PinLabels = {
  pin1: ["GND"],
  pin2: ["DI"],
  pin3: ["V5"],
}
const JP2PinLabels = {
  pin1: ["GND"],
  pin2: ["DO"],
  pin3: ["V5"],
}
export default () => {
  return (
    <board width="17.78mm" height="12.70mm">
      {/* X 8.89 Y 6.35 */}
      <WS2812B_V5_W
        name="U1"
        pcbY={-2.134}
        connections={{ pin2: sel.net().DO, pin4: sel.net().DI }}
      />
      <capacitor
        name="C1"
        capacitance="0.1uF"
        footprint="cap0603"
        pcbRotation={90}
        pcbX={-4.445}
        pcbY={-2.743}
        schX={-8.2}
        connections={{ pin2: sel.net().VCC, pin1: sel.net().GND }}
        schRotation={90}
      />
      <hole diameter={3.302} pcbX={-6.35} pcbY={3.81} />
      <hole diameter={3.302} pcbX={6.35} pcbY={3.81} />
      <schematictext
        text="VCC:  3.5V to 5.3V"
        color="gray"
        fontSize={0.2}
        schX={0}
        schY={2}
      />
      <jumper
        connections={{ pin2: sel.net().DI }}
        name="JP1"
        pinLabels={JP1PinLabels}
        footprint="pinrow3_id1mm_od1.88_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal_doublesidedpinlabel"
        schWidth={0.6}
        schX={-4.2}
        pcbRotation={90}
        pcbX={-7.62}
        pcbY={-2.54}
        cadModel={null}
      />
      <jumper
        connections={{ pin2: sel.net().DO }}
        name="JP2"
        pinLabels={JP2PinLabels}
        footprint="pinrow3_id1mm_od1.88_nosquareplating_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel"
        schPinArrangement={{
          leftSide: {
            direction: "bottom-to-top",
            pins: ["pin1", "pin2", "pin3"],
          },
        }}
        schDirection="left"
        schWidth={0.6}
        schX={4.2}
        pcbRotation={90}
        pcbX={7.62}
        pcbY={-2.54}
        cadModel={null}
      />
      <silkscreentext text="WS2812B" fontSize={1.6} pcbY={3.4} />
      <silkscreentext text="Breakout" fontSize={1.6} pcbY={2} />

      <netlabel net="GND" connectsTo={sel.JP1.pin1} anchorSide="top" />
      <netlabel net="VCC" connectsTo={sel.JP1.pin3} anchorSide="bottom" />
      <netlabel net="GND" connectsTo={sel.JP2.pin1} anchorSide="top" />
      <netlabel net="VCC" connectsTo={sel.JP2.pin3} anchorSide="bottom" />
      <netlabel net="GND" connectsTo={sel.U1.pin3} anchorSide="top" />
      <netlabel net="VCC" connectsTo={sel.U1.pin1} anchorSide="bottom" />
    </board>
  )
}
