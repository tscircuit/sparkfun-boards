// The source LED footprint numbers the cathode 1 and anode 2.
// The built-in LED glyph assumes the opposite numeric pin assignment.
export const RedLedSymbol = () => (
  <symbol>
    <schematicpath
      points={[
        { x: 0, y: 0.54 },
        { x: 0, y: 0.13 },
      ]}
    />
    <schematicpath
      points={[
        { x: -0.13, y: 0.13 },
        { x: 0.13, y: 0.13 },
        { x: 0, y: -0.14 },
        { x: -0.13, y: 0.13 },
      ]}
    />
    <schematicpath
      points={[
        { x: -0.13, y: -0.14 },
        { x: 0.13, y: -0.14 },
      ]}
    />
    <schematicpath
      points={[
        { x: 0, y: -0.14 },
        { x: 0, y: -0.54 },
      ]}
    />
    <schematicpath
      points={[
        { x: -0.18, y: 0.04 },
        { x: -0.34, y: 0.2 },
        { x: -0.25, y: 0.18 },
        { x: -0.34, y: 0.2 },
        { x: -0.32, y: 0.11 },
      ]}
    />
    <schematicpath
      points={[
        { x: -0.22, y: -0.1 },
        { x: -0.38, y: 0.06 },
        { x: -0.29, y: 0.04 },
        { x: -0.38, y: 0.06 },
        { x: -0.36, y: -0.03 },
      ]}
    />
    <schematictext text="D1" schX={0.35} schY={0.2} fontSize={0.18} />
    <schematictext text="red" schX={0.35} schY={-0.2} fontSize={0.18} />
    <port name="pin1" direction="down" schX={0} schY={-0.54} />
    <port name="pin2" direction="up" schX={0} schY={0.54} />
  </symbol>
)
