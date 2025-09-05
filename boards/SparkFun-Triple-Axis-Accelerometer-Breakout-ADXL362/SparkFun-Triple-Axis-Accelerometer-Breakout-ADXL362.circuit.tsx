import { ADXL362BCCZ_R2 } from "./ADXL362BCCZ_R2"
import { sel } from "tscircuit"

const JP1PinLabels = {
  pin1: ["SCK"],
  pin2: ["MISO"],
  pin3: ["MOSI"],
  pin4: ["N_CS"],
}

const JP2PinLabels = {
  pin1: ["V_P"],
  pin2: ["GND"],
  pin3: ["INT1"],
  pin4: ["INT2"],
}
export default () => (
  <board width="12.70mm" height="10.16mm">
    <ADXL362BCCZ_R2 name="U1" />
    <capacitor
      capacitance="0.1uF"
      footprint="cap0402"
      name="C1"
      schRotation={90}
      pcbY={2.54}
      connections={{ pin2: sel.net().V3_3, pin1: sel.net().GND }}
      schX={5.5}
    />
    <jumper
      schWidth={0.6}
      cadModel={null}
      name="JP1"
      schX={-3}
      pinLabels={JP1PinLabels}
      footprint="pinrow4_pinlabeltextalignleft_pinlabelorthogonal_bottomsidepinlabel"
      pcbRotation={90}
      pcbX={-5.08}
      connections={{
        pin1: sel.U1.pin8,
        pin2: sel.U1.pin7,
        pin3: sel.U1.pin6,
        pin4: sel.U1.pin4,
      }}
    />
    <jumper
      schWidth={0.6}
      cadModel={null}
      name="JP2"
      schX={4}
      schDirection="left"
      pinLabels={JP2PinLabels}
      footprint="pinrow4_pinlabeltextalignleft_pinlabelorthogonal_bottomsidepinlabel_pinlabelverticallyinverted"
      pcbRotation={-90}
      pcbX={5.08}
      connections={{
        pin1: [sel.net().V3_3!],
        pin3: sel.U1.pin11,
        pin4: sel.U1.pin9,
      }}
    />
    <netlabel
      net="GND"
      schX={2}
      schY={-1.7}
      anchorSide="top"
      connectsTo={[sel.U1.pin12, sel.JP2.pin2]}
    />
  </board>
)
