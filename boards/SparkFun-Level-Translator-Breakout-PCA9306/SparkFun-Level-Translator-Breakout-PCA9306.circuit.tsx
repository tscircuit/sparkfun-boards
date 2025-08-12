import { sel } from "tscircuit"

const selectors = {
  net: sel.net<"VREF2" | "VREF1" | "SDA1" | "SCL1" | "SDA2" | "SCL2">(),
}

export default () => (
  <board width="19mm" height="12.7mm">
    <chip
      footprint="vssop8_p0.5_ph0.8_pw0.3"
      manufacturerPartNumber="PCA9306DC"
      pinLabels={{
        pin1: ["GND"],
        pin2: ["VREF1"],
        pin3: ["SCL1"],
        pin4: ["SDA1"],
        pin5: ["SDA2"],
        pin6: ["SCL2"],
        pin7: ["VREF2"],
        pin8: ["EN"],
      }}
      name="U1"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VREF1", "SCL1", "SDA1", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["EN", "VREF2", "SCL2", "SDA2"],
        },
      }}
      schPinStyle={{
        VREF1: { marginTop: 0.4 },
      }}
      schWidth={1.3}
      pcbRotation={0}
      pcbX="0.66mm"
      pcbY="0mm"
      connections={{
        GND: sel.net.GND,
        EN: sel<"VREF2">("U1").VREF2,
      }}
    />
    <netlabel net="GND" connectsTo={sel.U1.GND} schX={-1.2} schY={-1} />

    <capacitor
      capacitance="100pF"
      pcbX="3.124mm"
      pcbY="3.048mm"
      pcbRotation={90}
      name="C1"
      footprint="0603"
      schX="1.5"
      schY="-1.5"
      schRotation={270}
      connections={{
        pin1: sel<"VREF2">("U1").VREF2,
        pin2: sel.net.GND,
      }}
    />
    <resistor
      name="R2"
      resistance="2.2k"
      schX={-2}
      schY={1}
      schRotation={90}
      footprint="0603"
      pcbX="-0.356mm"
      pcbY="-3.302mm"
      pcbRotation={270}
      connections={{
        pin1: sel<"SCL1">("U1").SCL1,
        pin2: sel<"VREF1">("U1").VREF1,
      }}
    />
    <resistor
      name="R1"
      resistance="2.2k"
      schX={-3}
      schY={1}
      schRotation={90}
      footprint="0603"
      pcbX="-1.88mm"
      pcbY="-3.302mm"
      pcbRotation={270}
      connections={{
        pin1: sel<"SDA1">("U1").SDA1,
        pin2: sel.R2.pin2,
      }}
    />
    <netlabel
      net="SDA1"
      schX={-3.5}
      schY={-0.3}
      anchorSide="right"
      connectsTo={sel<"SDA1">("U1").SDA1}
    />
    <netlabel
      net="VREF1"
      schX={-2.5}
      schY={2}
      anchorSide="bottom"
      connectsTo={sel.R2.pin2}
    />
    <resistor
      name="R3"
      resistance="200k"
      schX={1.5}
      schY={1}
      schRotation={270}
      footprint="0603"
      pcbX="1.651mm"
      pcbY="3.048mm"
      pcbRotation={90}
      connections={{
        pin2: sel<"VREF2">("U1").VREF2,
        pin1: sel.JP1.pin2,
      }}
    />
    <resistor
      name="R4"
      resistance="2.2k"
      schX={3}
      schY={1}
      schRotation={270}
      footprint="0603"
      pcbX="0.152mm"
      pcbY="3.048mm"
      pcbRotation={90}
      connections={{
        pin1: sel.JP1.pin1,
        pin2: sel<"SCL2">("U1").SCL2,
      }}
    />
    <resistor
      name="R5"
      resistance="2.2k"
      schX={4}
      schY={1}
      schRotation={270}
      footprint="0603"
      pcbX="-1.626mm"
      pcbY="3.048mm"
      pcbRotation={90}
      connections={{
        pin2: sel<"SDA2">("U1").SDA2,
        pin1: sel.JP1.pin1,
      }}
    />
    <netlabel
      net="SDA2"
      schX={4.5}
      schY={-0.3}
      anchorSide="left"
      connectsTo={sel<"SDA2">("U1").SDA2}
    />
    <netlabel
      net="SCL2"
      schX={4.5}
      schY={-0.1}
      anchorSide="left"
      connectsTo={sel<"SCL2">("U1").SCL2}
    />
    <solderjumper
      name="JP1"
      pinCount={3}
      bridgedPins={[["2", "3"]]}
      footprint="solderjumper3_bridged23_pw0.635_ph1.270_p1"
      pcbX="1.914mm"
      pcbY="3.429mm"
      layer="bottom"
      schY={2}
      schX={2}
      schRotation={270}
      connections={{
        pin3: sel.net.EN,
        pin1: selectors.net.VREF2,
      }}
    />
    <netlabel
      net="EN"
      schX={4.5}
      schY={0.1}
      anchorSide="left"
      connectsTo={sel.JP1.pin3}
    />
    <jumper
      name="J1"
      footprint="pinrow4_p2.54_id1.016_od1.880_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal"
      pcbX="-8.23mm"
      pcbY="-1.27"
      pcbRotation={90}
      schX={8}
      pinLabels={{
        pin1: "GND",
        pin2: "VREF1",
        pin3: "SDA1",
        pin4: "SCL1",
      }}
      connections={{
        GND: sel.net.GND,
        VREF1: selectors.net.VREF1,
        SDA1: selectors.net.SDA1,
        SCL1: selectors.net.SCL1,
      }}
    />
    <netlabel
      net="GND"
      schX={9.5}
      schY={-0.5}
      anchorSide="top"
      connectsTo={sel.J1.GND}
    />
    <netlabel
      net="VREF1"
      schX={9.5}
      schY={1}
      anchorSide="bottom"
      connectsTo={sel<"VREF1">("J1").VREF1}
    />

    <jumper
      name="J2"
      footprint="pinrow5_p2.54_id1.016_od1.880_nosquareplating_pinlabelorthogonal_pinlabeltextalignright"
      pcbX="8.28mm"
      pcbY="0mm"
      pcbRotation={90}
      schX={14}
      pinLabels={{
        pin1: "GND",
        pin2: "VREF2",
        pin3: "SDA2",
        pin4: "SCL2",
        pin5: "EN",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["EN", "SCL2", "SDA2", "VREF2", "GND"],
        },
      }}
      connections={{
        GND: sel.net.GND,
        VREF2: selectors.net.VREF2,
        SDA2: selectors.net.SDA2,
        SCL2: selectors.net.SCL2,
        EN: sel.net.EN,
      }}
    />
    <netlabel
      net="GND"
      schX={12}
      schY={-0.5}
      anchorSide="top"
      connectsTo={sel.J2.GND}
    />
    <netlabel
      net="VREF2"
      schX={12}
      schY={1}
      anchorSide="bottom"
      connectsTo={sel<"VREF2">("J2").VREF2}
    />

    <silkscreentext
      text="HIGH"
      fontSize={0.7}
      pcbRotation={270}
      pcbX={5}
      pcbY={-4}
    />
    <silkscreentext
      text="LOW"
      fontSize={0.7}
      pcbRotation={270}
      pcbX={-5}
      pcbY={4}
    />
    <silkscreentext
      text="HIGH"
      layer="bottom"
      fontSize={0.7}
      pcbRotation={270}
      pcbX={5}
      pcbY={4}
    />
    <silkscreentext
      text="LOW"
      layer="bottom"
      fontSize={0.7}
      pcbRotation={270}
      pcbX={-5}
      pcbY={-4}
    />
    <silkscreentext
      text="1.8V-5V"
      layer="bottom"
      fontSize={0.7}
      pcbRotation={270}
      pcbX={5}
      pcbY={-4}
    />
    <silkscreentext
      text="1.2V-3.3V"
      layer="bottom"
      fontSize={0.7}
      pcbRotation={270}
      pcbX={-5}
      pcbY={4}
    />
    <silkscreentext
      text="SWITCH"
      layer="bottom"
      fontSize={0.7}
      pcbRotation={90}
      pcbX={-1.5}
      pcbY={3.5}
    />
    <silkscreentext
      text="ON"
      layer="bottom"
      fontSize={0.7}
      pcbRotation={90}
      pcbX={3}
      pcbY={3.5}
    />
    <silkscreentext
      text="EN"
      layer="bottom"
      fontSize={0.7}
      pcbX={1}
      pcbY={5.5}
    />
    <silkscreentext
      text="Logic Level"
      layer="bottom"
      fontSize={0.7}
      pcbX={0}
      pcbY={0}
    />
    <silkscreentext
      text="Translator"
      layer="bottom"
      fontSize={0.7}
      pcbX={0}
      pcbY={-1}
    />
    <silkscreentext
      text="PCA9306"
      layer="bottom"
      fontSize={0.7}
      pcbX={0}
      pcbY={-2}
    />

    <schematictext
      text="Headers"
      schX={7.8}
      schY={5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Logic Level Translator PCA9306"
      schX={-3}
      schY={5}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="To enable, enable: cut trace"
      schX={3.5}
      schY={2.7}
      color="gray"
      anchor="left"
      fontSize={0.1}
    />
    <schematictext
      text="and fill in lower jumper."
      schX={3.5}
      schY={2.5}
      color="gray"
      anchor="left"
      fontSize={0.1}
    />

    <schematictext
      text="Level Translation"
      schX={-5.5}
      schY={-3.7}
      color="gray"
      anchor="left"
      fontSize={0.3}
    />

    <schematictable schY={-6}>
      <schematicrow height={0.8}>
        <schematiccell>VREF1</schematiccell>
        <schematiccell>VREF2</schematiccell>
      </schematicrow>
      <schematicrow height={0.8}>
        <schematiccell>1.2V</schematiccell>
        <schematiccell>1.8, 2.5, 3.3, 5V</schematiccell>
      </schematicrow>
      <schematicrow height={0.8}>
        <schematiccell>1.8V</schematiccell>
        <schematiccell>2.5, 3.3, 5V</schematiccell>
      </schematicrow>
      <schematicrow height={0.8}>
        <schematiccell>2.5V</schematiccell>
        <schematiccell>3.3, 5V</schematiccell>
      </schematicrow>
      <schematicrow height={0.8}>
        <schematiccell>3.3V</schematiccell>
        <schematiccell>5V</schematiccell>
      </schematicrow>
    </schematictable>
  </board>
)
