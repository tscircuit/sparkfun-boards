import manualEdits from "./manual-edits.json"
import { JP } from "./JP"
import { MAX3232ESE_UMW } from "./MAX3232ESE_UMW"
import { sel } from "tscircuit"

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
      pcbRotation={90}
    />

    <MAX3232ESE_UMW name="U1" pcbRotation={180} />
    <JP name="JP2" pcbRotation={180} />

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
    <trace from={selectors.U1.C1_P} to={sel.C1.pin1} />
    <trace from={selectors.U1.C1_N} to={sel.C1.pin2} />
    <trace from={selectors.U1.C2_P} to=".C2 .pin1" />
    <trace from={selectors.U1.C2_N} to=".C2 .pin2" />
    <trace
      from={selectors.U1.T1OUT}
      to={selectors.JP2.T1OUT}
      schDisplayLabel="T1OUT"
    />
    <trace
      from={selectors.U1.T2OUT}
      to={selectors.JP2.T2OUT}
      schDisplayLabel="T2OUT"
    />
    <trace
      from={selectors.U1.R1IN}
      to={selectors.JP2.R1IN}
      schDisplayLabel="R1IN"
    />
    <trace
      from={selectors.U1.R2IN}
      to={selectors.JP2.R2IN}
      schDisplayLabel="R2IN"
    />
    <trace
      from={selectors.U1.T1IN}
      to={selectors.JP2.T1IN}
      schDisplayLabel="T1IN"
    />
    <trace
      from={selectors.U1.T2IN}
      to={selectors.JP2.T2IN}
      schDisplayLabel="T2IN"
    />
    <trace
      from={selectors.U1.R1OUT}
      to={selectors.JP2.R1OUT}
      schDisplayLabel="R1OUT"
    />
    <trace
      from={selectors.U1.R2OUT}
      to={selectors.JP2.R2OUT}
      schDisplayLabel="R2OUT"
    />
    <trace from={selectors.U1.V_P} to={sel.C3.pin1} schDisplayLabel="U1_V+" />
    <trace from={selectors.U1.V_N} to={sel.C4.pin1} schDisplayLabel="U1_V-" />
    <trace from={selectors.JP2.VCC} to={sel.net.VCC} />
    <trace from={selectors.U1.VCC} to={sel.net.VCC} />
    <trace from={selectors.U1.VCC} to={sel.C5.pin1} schDisplayLabel={"VCC"} />

    {/* GND net */}
    <trace from={sel.U1.pin15} to={sel.net.GND} />
    <trace from={sel.C3.pin2} to={sel.net.GND} />
    <trace from={sel.C4.pin2} to={sel.net.GND} />
    <trace from={sel.C5.pin2} to={sel.net.GND} />
    <trace from={selectors.JP2.GND} to={sel.net.GND} />
    <netlabel
      schX={-8}
      schY={0.3}
      anchorSide="bottom"
      net="VCC"
      connectsTo={[selectors.JP2.VCC, sel.net.VCC]}
    />
    <netlabel
      schX={-8}
      schY={-0.3}
      anchorSide="top"
      net="GND"
      connectsTo={[selectors.JP2.GND, sel.net.GND]}
    />
  </board>
)
