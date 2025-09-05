import manualEdits from "./manual-edits.json"
import { MAX98357AETE_T } from "./MAX98357AETE_T"
import { sel } from "tscircuit"

const outline = [
  // Top edge
  { x: -8.16, y: 10.16 },
  { x: 8.16, y: 10.16 },

  // Top-right arc (clockwise from north to east)
  { x: 8.93, y: 10.01 },
  { x: 9.57, y: 9.57 },
  { x: 10.01, y: 8.93 },
  { x: 10.16, y: 8.16 },

  // Right edge
  { x: 10.16, y: -8.16 },

  // Bottom-right arc (clockwise from east to south)
  { x: 10.01, y: -8.93 },
  { x: 9.57, y: -9.57 },
  { x: 8.93, y: -10.01 },
  { x: 8.16, y: -10.16 },

  // Bottom edge
  { x: -8.16, y: -10.16 },

  // Bottom-left arc (clockwise from south to west)
  { x: -8.93, y: -10.01 },
  { x: -9.57, y: -9.57 },
  { x: -10.01, y: -8.93 },
  { x: -10.16, y: -8.16 },

  // Left edge
  { x: -10.16, y: 8.16 },

  // Top-left arc (counter-clockwise from west to north)
  { x: -10.01, y: 8.93 },
  { x: -9.57, y: 9.57 },
  { x: -8.93, y: 10.01 },
  { x: -8.16, y: 10.16 }, // Closing point (same as start)
]
const JP4PinLabels = {
  pin7: ["VDD"],
  pin6: ["GND"],
  pin5: ["N_SD"],
  pin4: ["GAIN"],
  pin3: ["DIN"],
  pin2: ["BCLK"],
  pin1: ["LRCLK"],
}

export default () => (
  <board outline={outline} manualEdits={manualEdits}>
    <MAX98357AETE_T name="U1" pcbX={-1.016} pcbRotation={-90} />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      pcbRotation={-90}
      pcbX={1.041}
      pcbY={-5.105}
      schRotation={-90}
      connections={{ pin1: sel.U1.pin7 }}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0603"
      pcbRotation={-90}
      pcbX={-0.533}
      pcbY={-5.105}
      schRotation={-90}
      connections={{ pin1: sel.C1.pin1 }}
    />

    <solderjumper
      name="JP1"
      cadModel={null}
      schRotation={-90}
      footprint="solderjumper3_pw0.635mm_ph1.27mm_p0.8mm"
      pinCount={3}
      pcbY={-2.794}
      pcbX={-1.198}
      layer="bottom"
      pcbRotation={180}
    />
    <solderjumper
      name="JP2"
      bridged
      cadModel={null}
      schRotation={90}
      footprint="solderjumper2_bridged12_pw0.635mm_ph1.27mm_p0.8mm"
      pinCount={2}
      pcbY={-7.557}
      pcbX={0.123}
      layer="bottom"
    />
    <jumper
      cadModel={null}
      pinLabels={{
        pin1: ["P"],
        pin2: ["N"],
      }}
      name="JP3"
      footprint="pinrow2_id1.016mm_od1.88mm_p2.62mm_pinlabeltextalignleft_pinlabelorthogonal_doublesidedpinlabel"
      schDirection="left"
      pcbRotation={90}
      pcbX={7.62}
      connections={{ pin1: sel.U1.pin9, pin2: sel.U1.pin10 }}
    />
    <silkscreenline
      x1={9.32}
      y1={4.01}
      x2={9.32}
      y2={2.98}
      layer="top"
      strokeWidth={0.15}
    />
    <silkscreenline
      x1={9.32}
      y1={-4.01}
      x2={9.32}
      y2={-2.98}
      layer="top"
      strokeWidth={0.15}
    />
    <silkscreenline
      x1={8.8}
      y1={-3.49}
      x2={9.8}
      y2={-3.49}
      layer="top"
      strokeWidth={0.15}
    />
    <jumper
      name="JP4"
      cadModel={null}
      manufacturerPartNumber="CONN_07NO_SILK"
      schWidth={0.7}
      pinLabels={JP4PinLabels}
      footprint="pinrow7_id1.016mm_od1.88mm_p2.62mm_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal_nosquareplating_doublesidedpinlabel"
      pcbRotation={-90}
      pcbX={-8.89}
    />
    <hole diameter={3.302} pcbX={6.985} pcbY={6.985} />
    <hole diameter={3.302} pcbX={6.985} pcbY={-6.985} />

    <netlabel
      net="GND"
      anchorSide="top"
      schX={-4}
      schY={-0.8}
      connectsTo={[sel.C1.pin2, sel.C2.pin2]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-1.8}
      schY={-1.8}
      connectsTo={[sel.U1.GND]}
    />
    <netlabel
      net="VDD"
      anchorSide="bottom"
      schX={-2.5}
      schY={1.6}
      connectsTo={[sel.U1.pin7]}
    />
    <netlabel
      net="VDD"
      anchorSide="bottom"
      schX={-2.2}
      schY={-6.4}
      connectsTo={[sel.R2.pin2]}
    />
    <netlabel
      net="VDD"
      anchorSide="bottom"
      schX={-6.8}
      schY={-6.4}
      connectsTo={[sel.JP1.pin1, sel.R1.pin2]}
    />
    <netlabel
      net="N_SD_MODE"
      anchorSide="right"
      schX={-8.2}
      schY={-7.2}
      connectsTo={[sel.JP1.pin2]}
    />

    <netlabel
      net="N_SD_MODE"
      anchorSide="right"
      schX={-2.7}
      schY={-9.4}
      connectsTo={[sel.JP2.pin1]}
    />
    <netlabel
      net="N_SD_MODE"
      anchorSide="left"
      schX={2.6}
      schY={-7.3}
      connectsTo={[sel.JP4.pin5]}
    />
    <netlabel
      net="GAIN"
      anchorSide="left"
      schX={2.6}
      schY={-7.5}
      connectsTo={[sel.JP4.pin4]}
    />
    <netlabel
      net="DIN"
      anchorSide="left"
      schX={2.6}
      schY={-7.7}
      connectsTo={[sel.JP4.pin3]}
    />
    <netlabel
      net="BCLK"
      anchorSide="left"
      schX={2.6}
      schY={-7.9}
      connectsTo={[sel.JP4.pin2]}
    />
    <netlabel
      net="LRCLK"
      anchorSide="left"
      schX={2.6}
      schY={-8.1}
      connectsTo={[sel.JP4.pin1]}
    />
    <netlabel
      net="VDD"
      anchorSide="bottom"
      schX={2.35}
      schY={-6.4}
      connectsTo={[sel.JP4.pin7]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={2.35}
      schY={-8.4}
      connectsTo={[sel.JP4.pin6]}
    />

    <netlabel
      net="GAIN"
      anchorSide="right"
      schX={-1.8}
      schY={-0.5}
      connectsTo={[sel.U1.pin2]}
    />
    <netlabel
      net="DIN"
      anchorSide="right"
      schX={-1.8}
      schY={0.5}
      connectsTo={[sel.U1.pin1]}
    />
    <netlabel
      net="BCLK"
      anchorSide="right"
      schX={-1.8}
      schY={0.3}
      connectsTo={[sel.U1.pin16]}
    />
    <netlabel
      net="LRCLK"
      anchorSide="right"
      schX={-1.8}
      schY={0.1}
      connectsTo={[sel.U1.pin14]}
    />
    <netlabel
      net="N_SD_MODE"
      anchorSide="right"
      schX={-1.8}
      schY={-0.3}
      connectsTo={[sel.U1.pin4]}
    />

    <schematictext
      text="VDD: 2.5-5.5V"
      color="gray"
      fontSize={0.25}
      schY={2.8}
      schX={-2.5}
    />
    <schematictext
      text="VDD: 2.5-5.5V"
      color="gray"
      fontSize={0.25}
      schY={-5.2}
      schX={2.3}
    />
    <schematictext
      text="Mono Output (Default)"
      color="gray"
      fontSize={0.25}
      schY={-5}
      schX={-2.3}
    />
    <schematictext
      text="(Left/2 + Right/2)"
      color="gray"
      fontSize={0.25}
      schY={-5.3}
      schX={-2.3}
    />
    <schematictext
      text="Stereo Output"
      color="gray"
      fontSize={0.25}
      schY={-5}
      schX={-6.8}
    />
    <schematictext
      text="Channel Select"
      color="gray"
      fontSize={0.25}
      schY={-5.3}
      schX={-6.8}
    />
    <schematictext
      text="Right Only"
      color="gray"
      fontSize={0.25}
      schY={-6.5}
      schX={-7.8}
    />
    <schematictext
      text="Left Only"
      color="gray"
      fontSize={0.25}
      schY={-7.9}
      schX={-7.8}
    />

    <schematictable schY={-8} schX={9} borderWidth={0.02}>
      <schematicrow height={0.6}>
        <schematiccell text="Gain Selection" colSpan={2} width={2.5} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="GAIN_SLOT" width={4} />
        <schematiccell text="GAIN" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="Connect to GND through 100kΩ resistor" width={4} />
        <schematiccell text="+15 dB" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="Connect to GND" width={4} />
        <schematiccell text="+12 dB" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="Unconnected (Default)" width={4} />
        <schematiccell text="+9 dB" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="Connect to VDD" width={4} />
        <schematiccell text="+6 dB" width={1} />
      </schematicrow>
      <schematicrow height={0.6}>
        <schematiccell text="Connect to VDD through 100kΩ resistor" width={4} />
        <schematiccell text="+3 dB" width={1} />
      </schematicrow>
    </schematictable>

    <silkscreentext text="I2S Audio" pcbY={9} fontSize={1.5} />
    <silkscreentext text="Breakout" pcbY={7} fontSize={1.5} />
    <silkscreentext text="MAX98357A" pcbY={5} fontSize={1.5} />
    <silkscreentext text="2.5-5.5V" pcbY={-8.5} pcbX={-5.5} fontSize={0.5} />
    <silkscreentext
      text="MONO"
      pcbY={-9}
      pcbX={-0.3}
      layer="bottom"
      fontSize={1}
    />
    <silkscreentext
      text="L"
      pcbY={-0.7}
      pcbX={0.8}
      layer="bottom"
      fontSize={1}
    />
    <silkscreentext
      text="R"
      pcbY={-0.7}
      pcbX={-1.5}
      layer="bottom"
      fontSize={1}
    />

    <silkscreentext
      text="STEREO"
      pcbY={-5}
      pcbX={-0.3}
      layer="bottom"
      fontSize={1}
    />

    <resistor
      resistance="300k"
      footprint="0603"
      name="R1"
      pcbX={-2.197}
      pcbY={-5.105}
      pcbRotation={90}
      schRotation={90}
      connections={{ pin1: sel.JP1.pin3 }}
    />
    <resistor
      resistance="1M"
      footprint="0603"
      name="R2"
      pcbX={-3.67}
      pcbY={-5.105}
      pcbRotation={90}
      schRotation={90}
      connections={{ pin1: sel.JP2.pin2 }}
    />
  </board>
)
