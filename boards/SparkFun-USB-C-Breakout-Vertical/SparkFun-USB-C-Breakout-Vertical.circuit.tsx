import { sel } from "tscircuit"
import { TYPE_C_14PLC_H10_0 } from "./TYPE_C_14PLC_H10_0"

export default () => (
  <board width="11.43mm" height="20.32mm">
    <TYPE_C_14PLC_H10_0
      name="USBC"
      pcbY={0}
      pcbX={-2.54}
      pcbRotation={90}
      schX={-12.5}
      schY={0.1}
      connections={{
        pin11: sel.net().GND,
        pin12: sel.net().GND,
        pin5: sel.net().GND,
        pin17: sel.net().GND,
        pin1: sel.net().SHLD,
        pin2: sel.net().SHLD,
        pin3: sel.net().SHLD,
        pin4: sel.net().SHLD,
        pin13: sel.net().CC2,
        pin14: sel.net().D_P,
        pin8: sel.net().D_P,
        pin15: sel.net().D_N,
        pin9: sel.net().D_N,
        pin7: sel.net().CC1,
        pin6: sel.net().VBUS,
        pin10: sel.net().VBUS,
        pin16: sel.net().VBUS,
        pin18: sel.net().VBUS,
      }}
    />
    <jumper
      schWidth={0.6}
      schDirection="left"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7"],
        },
      }}
      cadModel={null}
      connections={{
        pin6: sel.net().CC1,
        pin4: sel.net().D_P,
        pin5: sel.net().D_N,
        pin2: sel.net().SHLD,
        pin3: sel.net().CC2,
        pin7: sel.net().VBUS,
      }}
      name="J1"
      footprint={
        "pinrow7_od1.88_id1.016_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal_pinlabelverticallyinverted"
      }
      pcbRotation={-90}
      pcbX={4.445}
      pcbY={0}
      schX={-4.5}
      schY={0.6}
    />
    <hole diameter={"3.32mm"} pcbX={-3.175} pcbY={7.62} />
    <hole diameter={"3.32mm"} pcbX={-3.175} pcbY={-7.62} />
    <resistor
      name="R1"
      resistance={"5.1k"}
      footprint={"0603"}
      pcbY={-6.35}
      schRotation={90}
      pcbRotation={180}
      pcbX={1.27}
      schX={-8}
      schY={-2}
      connections={{ pin1: sel.net().GND }}
      layer={"bottom"}
    />
    <resistor
      name="R2"
      resistance={"5.1k"}
      footprint={"0603"}
      pcbY={6.35}
      schRotation={90}
      pcbRotation={180}
      pcbX={1.27}
      schX={-9}
      schY={-2}
      connections={{ pin1: sel.net().GND }}
      layer={"bottom"}
    />
    <solderjumper
      schRotation={90}
      connections={{
        pin1: sel.net().GND,
      }}
      bridgedPins={[["1"], ["2"]]}
      schX={-10}
      schY={-2}
      pcbX={0.127}
      pcbY={8.89}
      name="JP1"
      footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
      pcbRotation={180}
      layer="bottom"
    />
    <netlabel net="SHLD" connectsTo={sel.JP1.pin2} />

    <netlabel
      net="CC2"
      anchorSide="left"
      schX={-8.98}
      schY={-0.1}
      connectsTo={[sel.USBC.pin13, sel.R2.pin2]}
    />
    <netlabel
      net="CC1"
      anchorSide="left"
      schX={-7.98}
      schY={0.1}
      connectsTo={[sel.USBC.pin7, sel.R1.pin2]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-3}
      schY={-0.2}
      connectsTo={[sel.J1.pin1]}
    />
    <copperpour connectsTo="net.GND" layer="top" />
    <copperpour connectsTo="net.GND" layer="bottom" />
  </board>
)
