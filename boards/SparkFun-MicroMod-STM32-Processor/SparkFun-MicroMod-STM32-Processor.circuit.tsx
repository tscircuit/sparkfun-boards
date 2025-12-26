import { sel } from "tscircuit"
import { STM32F405 } from "./STM32F405"
import { MicroModEdge } from "./MicroModEdge"

// sparkfun micromod stm32 processor
// https://www.sparkfun.com/products/21326

export default () => {
  return (
    <board width={22} height={22}>
      <STM32F405 name="U1" pcbX={0} pcbY={4} schX={0} schY={0} />
      <MicroModEdge name="J1" pcbX={0} pcbY={-8} schX={8} schY={0} />

      <crystal
        name="Y1"
        frequency="12MHz"
        footprint="0402"
        loadCapacitance="10pF"
        pcbX={3}
        pcbY={6}
        connections={{
          pin1: sel.U1.OSC_IN,
          pin2: sel.U1.OSC_OUT,
        }}
      />
      <crystal
        name="Y2"
        frequency="32.768kHz"
        footprint="0402"
        loadCapacitance="7pF"
        pcbX={-3}
        pcbY={6}
        connections={{
          pin1: sel.U1.OSC32_IN,
          pin2: sel.U1.OSC32_OUT,
        }}
      />

      <capacitor
        name="C1"
        capacitance="2.2uF"
        footprint="cap0402"
        pcbX={2}
        pcbY={2}
        connections={{ pin1: sel.U1.VCAP1, pin2: sel.net().GND }}
      />
      <capacitor
        name="C2"
        capacitance="2.2uF"
        footprint="cap0402"
        pcbX={-2}
        pcbY={2}
        connections={{ pin1: sel.U1.VCAP2, pin2: sel.net().GND }}
      />

      <chip
        name="U2"
        manufacturerPartNumber="W25Q128JVSIQ"
        footprint="soic8"
        pcbX={5}
        pcbY={0}
        pinLabels={{
          pin1: ["CS"],
          pin2: ["DO"],
          pin3: ["WP"],
          pin4: ["GND"],
          pin5: ["DI"],
          pin6: ["CLK"],
          pin7: ["HOLD"],
          pin8: ["VCC"],
        }}
        connections={{
          pin1: sel.U1.NSCS,
          pin2: sel.U1.MISO1,
          pin5: sel.U1.MOSI1,
          pin6: sel.U1.SCK1,
          pin4: sel.net().GND,
        }}
      />
      <netlabel
        net="V3_3"
        schX={6}
        schY={2}
        connectsTo={sel.U2.VCC}
        anchorSide="bottom"
      />

      <netlabel
        net="GND"
        schX={0}
        schY={-10}
        connectsTo={sel.J1.GND}
        anchorSide="top"
      />
      <netlabel
        net="V3_3"
        schX={1}
        schY={-10}
        connectsTo={sel.J1.V3_3}
        anchorSide="bottom"
      />

      <resistor
        name="R1"
        resistance="10k"
        footprint="0402"
        pcbX={-4}
        pcbY={5}
        connections={{ pin1: sel.U1.NRST, pin2: sel.J1.RESET }}
      />
      <resistor
        name="R2"
        resistance="10k"
        footprint="0402"
        pcbX={-4}
        pcbY={3}
        connections={{ pin1: sel.U1.BOOT0, pin2: sel.net().GND }}
      />

      <silkscreentext text="MicroMod" pcbX={0} pcbY={8} />
      <silkscreentext text="STM32" pcbX={0} pcbY={7} />
    </board>
  )
}
