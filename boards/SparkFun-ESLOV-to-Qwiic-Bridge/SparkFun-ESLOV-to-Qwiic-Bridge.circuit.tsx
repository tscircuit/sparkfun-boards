import { sel } from "tscircuit"
import { JST04_1MM_RA } from "./JST04_1MM_RA"
import { JST05_1MM_RA } from "./JST05_1MM_RA"
import { AP2112K } from "./AP2112K"
export default () => (
  <board width="22.86mm" height="8.88mm">
    <AP2112K
      name="U1"
      pcbX="0mm"
      pcbY="1.91mm"
      pcbRotation={180}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VIN", "EN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VOUT"],
        },
      }}
      schPinStyle={{
        VOUT: { marginBottom: 0.4 },
      }}
      connections={{
        GND: sel.net.GND,
        VIN: sel.C1.pin1,
        VOUT: sel.C2.pin1,
        EN: sel.U1.VIN,
      }}
    />
    <netlabel net="GND" connectsTo={sel.U1.GND} schX={-1.2} schY={-0.4} />
    <capacitor
      name="C1"
      capacitance="1uF"
      pcbX="-2.54mm"
      pcbY="2.354mm"
      pcbRotation={270}
      footprint="0402"
      schX={-3}
      schY={-0.35}
      schRotation={270}
      connections={{
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      pcbX="2.54mm"
      pcbY="2.354mm"
      pcbRotation={270}
      footprint="0402"
      schX={2}
      schY={-0.35}
      schRotation={270}
      connections={{
        pin2: sel.net.GND,
      }}
    />
    <jumper
      name="J2"
      footprint={<JST04_1MM_RA />}
      pcbX="6.35mm"
      pcbY="0mm"
      pcbRotation={90}
      pinLabels={{
        pin1: "GND",
        pin2: "VCC",
        pin3: "SDA",
        pin4: "SCL",
      }}
      schX={4.5}
      schY={-2.8}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "VCC", "GND"],
        },
      }}
      connections={{
        GND: sel.net.GND,
        VCC: sel.C2.pin1,
      }}
    />
    <jumper
      name="J1"
      footprint={<JST05_1MM_RA />}
      pcbX="-6.35mm"
      pcbY="0mm"
      pcbRotation={270}
      pinLabels={{
        pin1: "5V",
        pin2: "INT",
        pin3: "SCL",
        pin4: "SDA",
        pin5: "GND",
      }}
      schX={-5}
      schY={-2.5}
      schPortArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["5V", "INT", "SCL", "SDA", "GND"],
        },
      }}
      connections={{
        SCL: sel.J2.SCL,
        SDA: sel.J2.SDA,
        "5V": sel.C1.pin1,
        GND: sel.net.GND,
        INT: sel.J3.INT,
      }}
    />
    <netlabel
      net="VIN_5V"
      connectsTo={sel.C1.pin1}
      anchorSide="bottom"
      schX={-3.45}
      schY={0.3}
    />
    <netlabel
      net="VOUT_3_3V"
      connectsTo={sel.C2.pin1}
      anchorSide="bottom"
      schX={2.7}
      schY={0.3}
    />
    <netlabel
      net="GND"
      connectsTo={sel.J1.GND}
      anchorSide="top"
      schX={-3.45}
      schY={-3.3}
    />
    <netlabel
      net="GND"
      connectsTo={sel.J2.GND}
      anchorSide="top"
      schX={2.7}
      schY={-3.3}
    />
    <jumper
      name="J3"
      pinLabels={{
        pin1: "INT",
      }}
      pcbY="-1.265mm"
      footprint={
        <footprint name="J3_1">
          <platedhole
            portHints={["pin1"]}
            holeDiameter="1.016mm"
            outerDiameter="1.880mm"
            shape="circle"
          />
        </footprint>
      }
      schX={4.5}
      schY={-4.8}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["INT"],
        },
      }}
    />
    <schematictext
      text="ESLOV to Qwiic Bridge"
      schX={0}
      schY={3}
      color="brown"
      anchor="center"
      fontSize={0.3}
    />
    <schematictext
      text="Max VIN: 6V"
      schX={0}
      schY={2}
      color="black"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="Current: 600mA"
      schX={0}
      schY={1.7}
      color="black"
      anchor="center"
      fontSize={0.2}
    />
    <schematictext
      text="Interrupt Pin"
      schX={5.8}
      schY={-4.8}
      color="black"
      anchor="center"
      fontSize={0.2}
    />
    <silkscreentext
      text="INT"
      pcbX={0}
      pcbY={-2.5}
      layer="top"
      fontSize={0.5}
    />
    <silkscreentext
      text="ESLOV to Qwiic Bridge"
      pcbX={0}
      pcbY={4}
      layer="bottom"
      fontSize={0.7}
    />
    <silkscreentext
      text="ESLOV"
      pcbX={-11}
      pcbRotation={90}
      pcbY={0}
      layer="bottom"
      fontSize={0.7}
    />
    <silkscreentext
      text="qwiic"
      pcbX={10.8}
      pcbRotation={90}
      pcbY={0}
      layer="bottom"
      fontSize={0.7}
    />
  </board>
)
