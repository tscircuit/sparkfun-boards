import { USBC_16PIN } from "./USBC_16PIN"
import { sel } from "tscircuit"

export default () => (
  <board width="12.7mm" height="21.59mm">
    <USBC_16PIN
      name="USBC"
      pcbY={0}
      pcbX={-2.6}
      pcbRotation={-90}
      schX={-12.5}
      schY={0.1}
      connections={{
        pin1: sel.net().VBUS,
        pin7: sel.net().D_P,
        pin10: sel.net().D_N,
        pin13: sel.net().SHILD,
      }}
    />
    <jumper
      schWidth={0.6}
      schDirection="left"
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      cadModel={null}
      connections={{
        pin6: sel.net().VBUS,
        pin4: sel.net().CC1,
        pin3: sel.net().D_N,
        pin2: sel.net().D_P,
        pin1: sel.net().CC2,
      }}
      name="JP3"
      footprint={"pinrow6_od1.88_id1.016_nosquareplating"}
      pcbRotation={90}
      pcbX={5.1}
      pcbY={0}
      schX={-4.5}
      schY={0.6}
    />
    <hole diameter={"3.32mm"} pcbX={-3.8} pcbY={8.25} />
    <hole diameter={"3.32mm"} pcbX={-3.8} pcbY={-8.25} />

    <resistor
      name="R1"
      resistance={"5.1k"}
      footprint={"0603"}
      pcbY={-8.25}
      schRotation={90}
      pcbX={0.8}
      schX={-10}
      schY={-0.8}
      connections={{ pin1: sel.net().GND }}
    />
    <resistor
      name="R4"
      resistance={"5.1k"}
      footprint={"0603"}
      pcbY={8.25}
      schRotation={90}
      pcbX={0.8}
      schX={-9}
      schY={-0.8}
      connections={{ pin1: sel.net().GND }}
    />

    <netlabel
      net="CC1"
      anchorSide="left"
      schX={-8.7}
      schY={0.1}
      connectsTo={[sel.USBC.pin11, sel.R4.pin2]}
    />
    <netlabel
      net="CC2"
      anchorSide="left"
      schX={-9.8}
      schY={-0.1}
      connectsTo={[sel.USBC.pin5, sel.R1.pin2]}
    />

    <netlabel
      net="GND"
      anchorSide="top"
      schX={-11.2}
      schY={-1.37}
      connectsTo={[sel.USBC.pin2]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-3}
      schY={-0.2}
      connectsTo={[sel.JP3.pin5]}
    />
  </board>
)
