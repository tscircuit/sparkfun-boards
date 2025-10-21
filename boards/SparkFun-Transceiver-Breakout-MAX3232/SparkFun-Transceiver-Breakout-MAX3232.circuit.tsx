import { sel } from "tscircuit"
import { JP } from "./JP"
import { MAX3232ESE_UMW } from "./MAX3232ESE_UMW"
import manualEdits from "./manual-edits.json"

const selectors = {
  U1: sel.U1(MAX3232ESE_UMW),
  JP2: sel.JP2(JP),
}

export default () => (
  <board
    width="25.5mm"
    height="15mm"
    autorouter="auto-cloud"
    manualEdits={manualEdits}
  >
    <capacitor
      capacitance="0.1uF"
      footprint="cap0603"
      name="C1"
      pcbX={4.518}
      pcbY={6.35}
      schRotation={-90}
      pcbRotation={180}
      supplierPartNumbers={{
        jlcpcb: ["C577419"],
      }}
    />
    <capacitor
      capacitance="0.1uF"
      footprint="cap0603"
      name="C2"
      pcbX={0}
      pcbY={6.35}
      schRotation={-90}
      pcbRotation={180}
      supplierPartNumbers={{
        jlcpcb: ["C577419"],
      }}
    />
    <capacitor
      capacitance="0.1uF"
      footprint="cap0603"
      name="C3"
      pcbY={2.388}
      schRotation={-90}
      pcbX={7.955}
      supplierPartNumbers={{
        jlcpcb: ["C577419"],
      }}
      connections={{ pin1: sel.net().V_P, pin2: sel.net().GND }}
      pcbRotation={90}
    />
    <capacitor
      capacitance="0.1uF"
      footprint="cap0603"
      name="C4"
      pcbX={-4.594}
      schRotation={-90}
      pcbY={6.35}
      supplierPartNumbers={{
        jlcpcb: ["C577419"],
      }}
      connections={{ pin1: sel.net().V_N, pin2: sel.net().GND }}
      pcbRotation={180}
    />
    <capacitor
      capacitance="0.1uF"
      footprint="cap0603"
      name="C5"
      schRotation={-90}
      pcbX={7.955}
      pcbY={-1.331}
      supplierPartNumbers={{
        jlcpcb: ["C577419"],
      }}
      connections={{ pin1: sel.net().VCC, pin2: sel.net().GND }}
      pcbRotation={90}
    />

    <MAX3232ESE_UMW
      name="U1"
      pcbRotation={180}
      connections={{
        C1_P: sel.C1.pin1,
        C1_N: sel.C1.pin2,
        C2_P: sel.C2.pin1,
        C2_N: sel.C2.pin2,
        T1IN: sel.net().T1IN,
        T2IN: sel.net().T2IN,
        T1OUT: sel.net().T1OUT,
        T2OUT: sel.net().T2OUT,
        R1OUT: sel.net().R1OUT,
        R2OUT: sel.net().R2OUT,
        R1IN: sel.net().R1IN,
        R2IN: sel.net().R2IN,
        V_P: sel.net().V_P,
        V_N: sel.net().V_N,
        GND: sel.net().GND,
        VCC: sel.net().VCC,
      }}
    />
    <JP
      name="JP2"
      pcbRotation={180}
      connections={{
        T1IN: sel.net().T1IN,
        T2IN: sel.net().T2IN,
        T1OUT: sel.net().T1OUT,
        T2OUT: sel.net().T2OUT,
        R1OUT: sel.net().R1OUT,
        R2OUT: sel.net().R2OUT,
        R1IN: sel.net().R1IN,
        R2IN: sel.net().R2IN,
      }}
    />

    <schematicbox
      strokeStyle="dashed"
      overlay={[".U1 .pin14", ".U1 .pin7", ".U1 .pin13", ".U1 .pin8"]}
      schX={0.61}
      schY={-0.2}
      padding={0.4}
      title={"RS-232"}
      titleAlignment="bottom_center"
      titleInside
    />
    <schematicbox
      strokeStyle="dashed"
      overlay={[".U1 .pin11", ".U1 .pin10", ".U1 .pin12", ".U1 .pin9"]}
      schX={-0.6}
      schY={-0.2}
      padding={0.4}
      title={"TTL/CMOS"}
      titleAlignment="bottom_center"
      titleInside
    />
    <netlabel
      schX={-8}
      schY={0.3}
      anchorSide="bottom"
      net="VCC"
      connectsTo={[selectors.JP2.VCC, sel.net().VCC!]}
    />
    <netlabel
      schX={-8}
      schY={-0.3}
      anchorSide="top"
      net="GND"
      connectsTo={[selectors.JP2.GND, sel.net().GND!]}
    />
  </board>
)
