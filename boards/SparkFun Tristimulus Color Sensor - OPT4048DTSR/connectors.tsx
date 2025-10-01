const pinLabelsJ2: Record<`pin${number}`, string> = {
  pin4: "SCL",
  pin3: "SDA",
  pin2: "VCC",
  pin1: "GND",
}

export default ({ x = 0, y = 0 }: DisplacementProps) => (
  <group schX={x} schY={y}>
    <jumper
      name="J3"
      schX={-3}
      schPinSpacing={0.3}
      footprint="pinrow5_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_doublesidedpinlabel"
    />
    <netlabel net="INT" connection=".J3 > .pin5" anchorSide="left" />
    <netlabel net="SCL" connection=".J3 > .pin4" anchorSide="left" />
    <netlabel net="SDA" connection=".J3 > .pin3" anchorSide="left" />
    <netlabel
      net="V3_3"
      schX={-2}
      schY={1}
      connection=".J3 > .pin2"
      anchorSide="bottom"
    />
    <netlabel
      net="GND"
      schX={-2}
      schY={-1}
      connection=".J3 > .pin1"
      anchorSide="top"
    />

    <jumper
      manufacturerPartNumber="QWIIC_RIGHT_ANGLE"
      name="J2"
      pinLabels={pinLabelsJ2}
      schY={1}
      footprint="pinrow4_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_doublesidedpinlabel"
    />
    <trace from=".J2 > .pin4" to="net.SCL" />
    <trace from=".J2 > .pin3" to="net.SDA" />

    <jumper
      manufacturerPartNumber="QWIIC_RIGHT_ANGLE"
      name="J1"
      schY={-1}
      schPinSpacing={0.3}
      pinLabels={pinLabelsJ2}
      footprint="pinrow4_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_doublesidedpinlabel"
    />
    <trace from=".J1 > .pin4" to="net.SCL" />
    <trace from=".J1 > .pin3" to="net.SDA" />
    <netlabel
      net="GND"
      schX={1.5}
      schY={-1.5}
      connectsTo={[".J1 > .pin1", ".J2 > .pin1"]}
      anchorSide="top"
    />
    <netlabel
      net="V3_3"
      schX={1.5}
      schY={2}
      connectsTo={[".J1 > .pin2", ".J2 > .pin2"]}
      anchorSide="bottom"
    />
  </group>
)
