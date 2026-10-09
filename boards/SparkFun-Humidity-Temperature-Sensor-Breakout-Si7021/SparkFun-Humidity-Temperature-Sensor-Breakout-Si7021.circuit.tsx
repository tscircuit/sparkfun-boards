import { sel } from "tscircuit"
import { Si7021 } from "./imports/Si7021"

/**
 * SparkFun Humidity and Temperature Sensor Breakout - Si7021 (SEN-13763)
 * Si7021-A20 I2C sensor with 4.7kΩ I2C pullup resistors
 * Board size: 0.6" x 0.6" (15.24mm x 15.24mm)
 *
 * Schematic: https://cdn.sparkfun.com/datasheets/Sensors/Weather/SparkFun_Si7021_Breakout.pdf
 */
export default () => (
  <board width="15.24mm" height="15.24mm" routingDisabled>
    {/* Si7021 humidity and temperature sensor */}
    <Si7021
      name="U1"
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: sel.net.SDA,
        pin2: sel.net.GND,
        pin3: sel.net.GND,
        pin4: "net.NC",
        pin5: sel.net.VCC,
        pin6: sel.net.SCL,
      }}
    />

    {/* 4.7kΩ I2C pullup resistors (built into board) */}
    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0402"
      pcbX={-4}
      pcbY={2}
      schX={-5}
      schY={2}
      connections={{ pin1: sel.net.VCC, pin2: sel.net.SDA }}
    />
    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0402"
      pcbX={4}
      pcbY={2}
      schX={-5}
      schY={0}
      connections={{ pin1: sel.net.VCC, pin2: sel.net.SCL }}
    />

    {/* 100nF decoupling capacitor */}
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={0}
      pcbY={-4}
      schX={-5}
      schY={-2}
      connections={{ pin1: sel.net.VCC, pin2: sel.net.GND }}
    />

    {/* Header pins: VCC, GND, SDA, SCL */}
    <chip
      name="J1"
      footprint="pinrow4_p2.54mm"
      pcbX={0}
      pcbY={6}
      schX={5}
      schY={0}
      pinLabels={{
        pin1: ["VCC"],
        pin2: ["GND"],
        pin3: ["SDA"],
        pin4: ["SCL"],
      }}
      connections={{
        pin1: sel.net.VCC,
        pin2: sel.net.GND,
        pin3: sel.net.SDA,
        pin4: sel.net.SCL,
      }}
    />
  </board>
)
