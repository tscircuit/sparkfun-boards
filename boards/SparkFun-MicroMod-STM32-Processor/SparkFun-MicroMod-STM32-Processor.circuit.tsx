import { sel } from "tscircuit"
import { MicroModEdge } from "./MicroModEdge"
import { STM32F405 } from "./STM32F405"

// sparkfun micromod stm32 processor
// https://www.sparkfun.com/products/21326

export default () => {
  return (
    <board width={22} height={22} autorouter="auto">
      <STM32F405 name="U1" pcbX={0} pcbY={2} schX={0} schY={0} />
      <MicroModEdge name="J1" pcbX={0} pcbY={-6} schX={8} schY={0} />

      <capacitor
        name="C1"
        capacitance="2.2uF"
        footprint="cap0402"
        pcbX={4}
        pcbY={2}
      />
      <netlabel net="GND" connectsTo={sel.C1.pin2} />

      <capacitor
        name="C2"
        capacitance="100nF"
        footprint="cap0402"
        pcbX={-4}
        pcbY={2}
      />
      <netlabel net="GND" connectsTo={sel.C2.pin2} />

      <netlabel net="GND" connectsTo={sel.J1.GND} />
      <netlabel net="V3_3" connectsTo={sel.J1.V3_3} />

      <silkscreentext text="MicroMod" pcbX={0} pcbY={8} />
      <silkscreentext text="STM32" pcbX={0} pcbY={7} />
    </board>
  )
}
