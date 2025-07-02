import { ChipProps } from "@tscircuit/props"
import { sel } from "@tscircuit/core"

const pinLabels: Record<`pin${number}`, string> = {
  pin1: "VDD",
  pin2: "ADDR",
  pin3: "NC",
  pin4: "GND",
  pin5: "SCL",
  pin6: "NC",
  pin7: "INT",
  pin8: "SDA",
}

const OPT4048DTSR = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...props}
    pinLabels={pinLabels}
    footprint={"soic8"}
    manufacturerPartNumber="OPT4048"
  />
)
export default ({ x = 0, y = 0 }: DisplacementProps) => (
  <group name="sensor" schX={x} schY={y}>
    <schematictext
      fontSize={0.3}
      text="VDD Range: 1.71V - 3.6V"
      schX={-3}
      schY={4}
      anchor="center_left"
    />
    <OPT4048DTSR
      name="U1"
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VDD", "GND"] },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["SCL", "SDA", "ADDR", "INT"],
        },
      }}
      schPinStyle={{
        VDD: { marginBottom: 1 },
        GND: { marginBottom: 0 },
        ADDR: { marginBottom: 0.65 },
      }}
      connections={{
        SCL: sel.net.SCL,
        SDA: sel.net.SDA,
        ADDR: "net.ADDR",
        INT: "net.INT",
      }}
    />
    <netlabel
      net="GND"
      schX={-1.5}
      schY={-0.6}
      connection=".U1 > .GND"
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={-1.5}
      schY={0.6}
      connection=".U1 > .VDD"
      anchorSide="bottom"
    />
    <resistor
      name="R3"
      footprint="0402"
      resistance={"10K"}
      connections={{
        pin1: sel.net.V3_3,
        pin2: "net.INT",
      }}
      schRotation="270deg"
      schX={1}
      schY={1.8}
    />
    <capacitor
      footprint="0402"
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.V3_3,
      }}
      schX={-2.5}
      name="C1"
      schRotation="90deg"
      capacitance={"0.0000001F"}
    />
  </group>
)
