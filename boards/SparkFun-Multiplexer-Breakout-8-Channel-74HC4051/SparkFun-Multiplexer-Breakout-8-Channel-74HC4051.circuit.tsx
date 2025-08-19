import { sel } from "@tscircuit/core"
import { A_74HC4051BQ_115 } from "./A_74HC4051BQ_115"

export default () => (
  <board width="12.7mm" height="27.94mm">
    <A_74HC4051BQ_115
      name="U1"
      pcbRotation={270}
      connections={{
        VCC: sel.net.VCC,
        GND: sel.net.GND,
        pin1: sel.net().Y4,
        pin2: sel.net().Y6,
        pin3: sel.net().Z,
        pin4: sel.net().Y7,
        pin5: sel.net().Y5,
        pin6: sel.net().N_E,
        pin7: sel.net().VEE,
        pin8: sel.net.GND,
        pin9: sel.net().S2,
        pin10: sel.net().S1,
        pin11: sel.net().S0,
        pin12: sel.net().Y3,
        pin13: sel.net().Y0,
        pin14: sel.net().Y1,
        pin15: sel.net().Y2,
        pin16: sel.net.VCC,
        pin17: sel.U1.pin16,
      }}
    />
    <netlabel
      net="VCC"
      schX={1.5}
      schY={1}
      connectsTo={sel.U1.VCC}
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={-1.5}
      schY={-1}
      connectsTo={sel.U1.GND}
      anchorSide="top"
    />
    <capacitor
      capacitance={"0.1uF"}
      name="C1"
      footprint={"0603"}
      pcbY={3.81}
      schY={3}
      schRotation={270}
      pcbRotation={180}
      connections={{
        pin2: sel.net.GND,
        pin1: sel.net.VCC,
      }}
    />
    <resistor
      name="R1"
      resistance={"10k"}
      footprint={"0603"}
      pcbY={-6.35}
      schX={-4.4}
      schY={-2}
      schRotation={270}
      connections={{
        pin2: sel.net.GND,
        pin1: sel<"N_E">("J2").N_E,
      }}
    />
    <schematictext
      text="R1 keeps enable"
      schX={-3.7}
      schY={-1.7}
      fontSize={0.2}
      anchor="center_left"
    />
    <schematictext
      text="active (low). Pull"
      schX={-3.7}
      schY={-1.9}
      fontSize={0.2}
      anchor="center_left"
    />
    <schematictext
      text="E/ directly to VCC"
      schX={-3.7}
      schY={-2.1}
      fontSize={0.2}
      anchor="center_left"
    />
    <schematictext
      text="to disable the mux."
      schX={-3.7}
      schY={-2.3}
      fontSize={0.2}
      anchor="center_left"
    />
    <solderjumper
      name="JP1"
      pinCount={2}
      footprint={"solderjumper2_p0.82_pw0.635_pl1.27"}
      pcbY={7.62}
      schY={-3}
      schRotation={90}
      pcbRotation={90}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net().VEE,
      }}
    />
    <schematictext
      text="JP1 shorts VEE to GND, if"
      schX={0.5}
      schY={-2.9}
      fontSize={0.2}
      anchor="center_left"
    />
    <schematictext
      text="a bi-polar supply is not used."
      schX={0.5}
      schY={-3.1}
      fontSize={0.2}
      anchor="center_left"
    />
    <schematictext
      text="(Defaults closed.)"
      schX={0.5}
      schY={-3.3}
      fontSize={0.2}
      anchor="center_left"
    />
    <hole name="MH1" pcbY={11.43} diameter={3.302} />
    <hole name="MH2" pcbY={-11.43} diameter={3.302} />
    <jumper
      name="J1"
      footprint={
        "pinrow11_nosquareplating_doublesidedpinlabel_id1.016_od1.88_p2.54"
      }
      schX={4}
      pcbX={5.08}
      pcbRotation={90}
      pinLabels={{
        pin1: "Y7",
        pin2: "Y6",
        pin3: "Y5",
        pin4: "Y4",
        pin5: "Y3",
        pin6: "Y2",
        pin7: "Y1",
        pin8: "Y0",
        pin9: "GND",
        pin10: "VCC",
        pin11: "VEE",
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
            "pin10",
            "pin11",
          ],
        },
      }}
      connections={{
        pin1: sel.net().Y7,
        pin2: sel.net().Y6,
        pin3: sel.net().Y5,
        pin4: sel.net().Y4,
        pin5: sel.net().Y3,
        pin6: sel.net().Y2,
        pin7: sel.net().Y1,
        pin8: sel.net().Y0,
        pin9: sel.net.GND,
        pin10: sel.net.VCC,
        pin11: sel.net().VEE,
      }}
    />
    <netlabel
      net="VCC"
      schX={2}
      schY={1}
      connectsTo={sel.J1.VCC}
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={2}
      schY={-1}
      connectsTo={sel.J1.GND}
      anchorSide="top"
    />
    <jumper
      name="J2"
      footprint={
        "pinrow8_nosquareplating_doublesidedpinlabel_id1.016_od1.88_p2.54_pinlabeltextalignleft_pinlabelorthogonal"
      }
      pcbX={-5.08}
      pcbY={1.27}
      schX={-6.5}
      schY={-0.5}
      pcbRotation={90}
      pinLabels={{
        pin1: "N_E",
        pin2: "S2",
        pin3: "S1",
        pin4: "S0",
        pin5: "Z",
        pin6: "GND",
        pin7: "VCC",
        pin8: "VEE",
      }}
      connections={{
        pin1: sel.net().N_E,
        pin2: sel.net().S2,
        pin3: sel.net().S1,
        pin4: sel.net().S0,
        pin5: sel.net().Z,
        pin6: sel.R1.pin2,
        pin7: sel.net.VCC,
        pin8: sel.net().VEE,
      }}
    />
    <netlabel
      net="VCC"
      schX={-4.5}
      schY={0.5}
      connectsTo={sel.J2.VCC}
      anchorSide="bottom"
    />
    <silkscreentext text="74HC4051" pcbY={6.3} />
    <silkscreentext text="8-Mux" pcbY={5.3} />
    <silkscreentext
      text="74HC4051"
      pcbRotation={90}
      layer={"bottom"}
      pcbX={0}
      pcbY={-5}
    />
    <silkscreentext
      text="8-Channel"
      layer={"bottom"}
      pcbRotation={90}
      pcbX={0}
    />
    <silkscreentext
      text="Mux/Demux"
      layer={"bottom"}
      pcbRotation={90}
      pcbX={-1}
      pcbY={-2}
    />
    <schematictable schX={12} schY={-1}>
      <schematicrow height={0.7}>
        <schematiccell></schematiccell>
        <schematiccell>Min</schematiccell>
        <schematiccell>Typ</schematiccell>
        <schematiccell>Max</schematiccell>
      </schematicrow>
      <schematicrow height={0.7}>
        <schematiccell>VCC-GND</schematiccell>
        <schematiccell>2</schematiccell>
        <schematiccell>5</schematiccell>
        <schematiccell>10</schematiccell>
      </schematicrow>
      <schematicrow height={0.7}>
        <schematiccell>VCC-VEE</schematiccell>
        <schematiccell>2</schematiccell>
        <schematiccell>5</schematiccell>
        <schematiccell>10</schematiccell>
      </schematicrow>
    </schematictable>

    <schematictable schX={10.2} schY={-5}>
      <schematicrow height={0.7}>
        <schematiccell>VCC</schematiccell>
        <schematiccell>VEE</schematiccell>
        <schematiccell>GND</schematiccell>
      </schematicrow>
      <schematicrow height={0.7}>
        <schematiccell>5V</schematiccell>
        <schematiccell>0V</schematiccell>
        <schematiccell>0V</schematiccell>
      </schematicrow>
      <schematicrow height={0.7}>
        <schematiccell>10V</schematiccell>
        <schematiccell>0V</schematiccell>
        <schematiccell>0V</schematiccell>
      </schematicrow>
      <schematicrow height={0.7}>
        <schematiccell>+5V</schematiccell>
        <schematiccell>-5V</schematiccell>
        <schematiccell>0V</schematiccell>
      </schematicrow>
      <schematicrow height={0.7}>
        <schematiccell>+2V</schematiccell>
        <schematiccell>-8V</schematiccell>
        <schematiccell>0V</schematiccell>
      </schematicrow>
    </schematictable>
  </board>
)
