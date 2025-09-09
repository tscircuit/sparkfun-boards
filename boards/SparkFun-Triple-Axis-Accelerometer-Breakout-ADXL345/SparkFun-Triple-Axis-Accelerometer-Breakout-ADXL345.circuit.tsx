import { ADXL345BCCZ_RL7 } from "./ADXL345"
import { sel } from "tscircuit"

const jumperPinLabels = {
  pin1: ["GND"],
  pin2: ["VCC"],
  pin3: ["CS"],
  pin4: ["INIT1"],
  pin5: ["INIT2"],
  pin6: ["SDO"],
  pin7: ["SDA"],
  pin8: ["SCL"],
}
export default () => (
  <board width="20.32mm" height="15.24mm">
    <ADXL345BCCZ_RL7
      name="U1"
      pcbY={0.483}
      schY={-0.5}
      connections={{
        pin7: sel.net().CS,
        pin12: sel.net().SDO,
        pin13: sel.net().SDA,
        pin14: sel.net().SCL,
        pin8: sel.net().INT1,
        pin9: sel.net().INT2,
      }}
    />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="cap0603"
      pcbY={4.318}
      pcbX={-3.972}
      pcbRotation={90}
      schX={-5}
      schY={3}
      schRotation={-90}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      polarized
      footprint="cap1206"
      pcbY={5.461}
      schRotation={-90}
      schX={-6}
      schY={3}
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      footprint="cap0603"
      pcbY={4.318}
      pcbX={3.972}
      pcbRotation={90}
      schX={-2.5}
      schY={3}
      schRotation={-90}
    />
    <jumper
      schWidth={0.7}
      connections={{
        pin1: sel.net().GND,
        pin3: sel.net().CS,
        pin4: sel.net().INIT1,
        pin5: sel.net().INIT2,
        pin6: sel.net().SDO,
        pin7: sel.net().SDA,
        pin8: sel.net().SCL,
      }}
      cadModel={null}
      name="JP1"
      schX={6.5}
      schY={1}
      schDirection="left"
      footprint="pinrow8_id1.016mm_od1.88mm_p2.56mm_pinlabelverticallyinverted_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel"
      pcbY={-6.35}
      pinLabels={jumperPinLabels}
    />
    <hole diameter={3.302} pcbX={-7.62} pcbY={5.08} />
    <hole diameter={3.302} pcbX={7.62} pcbY={5.08} />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-2.5}
      schY={4}
      connectsTo={sel.C3.pin1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-2.5}
      schY={2}
      connectsTo={sel.C3.pin2}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-5.5}
      schY={4}
      connectsTo={[sel.C1.pin1, sel.C2.pin1]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-5.5}
      schY={2}
      connectsTo={[sel.C1.pin2, sel.C2.pin2]}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-1.4}
      schY={0.7}
      connectsTo={[sel.U1.pin1, sel.U1.pin6]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-1.4}
      schY={-1.7}
      connectsTo={[sel.U1.pin2, sel.U1.pin4, sel.U1.pin5]}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={5}
      schY={2}
      connectsTo={sel.JP1.pin2}
    />

    <schematictext
      text="Updates"
      fontSize={0.1}
      schX={-7}
      schY={-3.8}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="*Non-cantilevered - added standoffs for stability"
      anchor="left"
      fontSize={0.1}
      schX={-7}
      schY={-4}
      color="gray"
    />
    <schematictext
      text="*Add decoupling cap - AD suggested 10uF and 0.1uF after upto 100Ohm resistance"
      anchor="left"
      fontSize={0.1}
      schX={-7}
      schY={-4.2}
      color="gray"
    />

    <silkscreentext
      text="sparkfun.com"
      fontSize={3}
      pcbY={2.8}
      layer="bottom"
    />
    <silkscreentext
      text="ADXL345   Breakout"
      fontSize={1.4}
      pcbY={0.6}
      layer="bottom"
    />
  </board>
)
