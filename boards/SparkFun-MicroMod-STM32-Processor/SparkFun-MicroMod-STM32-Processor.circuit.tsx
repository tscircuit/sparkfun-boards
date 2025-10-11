export default () => (
  <board width="22mm" height="16mm">
    <chip
      name="U1"
      footprint="lqfp64"
      pcbX={0}
      pcbY={0}
    />
    <resistor
      name="R1"
      resistance="10k"
      footprint="0603"
      pcbX={5}
      pcbY={5}
    />
    <capacitor
      name="C1"
      capacitance="0.1uf"
      footprint="0603"
      pcbX={-5}
      pcbY={5}
    />
    <silkscreentext text="STM32" fontSize={1.5} pcbX={-8} pcbY={-6} />
  </board>
)