interface DisplacementProps {
  x?: number
  y?: number
}

export default ({ x = 0, y = 0 }: DisplacementProps) => (
  <group schX={x} schY={y}>
    <solderjumper
      name="I2C_PU"
      pinCount={3}
      footprint="solderjumper3_p0.8_pw0.635_ph1.270"
      schRotation={180}
    />
    <trace from=".I2C_PU > .pin2" to="net.V3_3" />

    <resistor
      name="R1"
      footprint={"0402"}
      schRotation={"90deg"}
      schY={-0.8}
      schX={-0.439}
      resistance={"2.2K"}
    />
    <resistor
      name="R2"
      footprint={"0402"}
      schRotation={"90deg"}
      schY={-0.8}
      schX={0.439}
      resistance={"2.2K"}
    />

    <trace from=".I2C_PU > .pin3" to=".R1 > .pin2" />
    <trace from=".I2C_PU > .pin1" to=".R2 > .pin2" />

    <netlabel
      net="SDA"
      schX={1}
      schY={-1.35}
      connection=".R2 > .pin1"
      anchorSide="left"
    />
    <netlabel
      net="SCL"
      schX={1}
      schY={-2}
      connection=".R1 > .pin1"
      anchorSide="left"
    />

    <schematictext
      fontSize={0.1}
      schX={-1.4}
      schY={0}
      text="Cut traces to remove I2C pull-up resistors."
    />

    <resistor
      schX={2.5}
      name="R4"
      footprint={"0402"}
      resistance={"4.7K"}
      schRotation={"90deg"}
    />
    <trace from=".R4 > .pin2" to="net.V3_3" />
    <led
      schX={2.5}
      name="D1"
      schY={-1.2}
      footprint="solderjumper3_p0.8_pw0.635_ph1.270"
      schRotation={"270deg"}
      schDisplayValue="RED"
    />
    <trace from=".D1 > .pin1  " to=".R4 > .pin1" />
    <solderjumper
      name="LED"
      pinCount={2}
      footprint="solderjumper3_p0.8_pw0.635_ph1.270"
      schRotation={90}
      schX={2.5}
      schY={-2.2}
    />
    <schematictext
      fontSize={0.1}
      schX={3.1}
      schY={-2.2}
      text="Cut trace to disconnect Power LED."
    />
    <trace from=".LED > .pin1" to="net.GND" />
  </group>
)
