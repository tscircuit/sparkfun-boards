import { sel } from "@tscircuit/core"

export default () => (
  <board width="22mm" height="16mm">
    <chip
      name="U1"
      cadModel={null}
      footprint="lqfp64"
      pcbX={0}
      pcbY={0}
    />
    <silkscreentext text="STM32" pcbY={-6} />
  </board>
)