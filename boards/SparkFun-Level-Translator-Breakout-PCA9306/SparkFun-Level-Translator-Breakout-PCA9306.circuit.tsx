import { sel } from "tscircuit"
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
      schPortArrangement={{
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
    />
    <netlabel
      net="EN"
      schX={4.5}
      schY={0.1}
      anchorSide="left"
      connectsTo={sel.JP1.pin1}
    />
  </board>
)
