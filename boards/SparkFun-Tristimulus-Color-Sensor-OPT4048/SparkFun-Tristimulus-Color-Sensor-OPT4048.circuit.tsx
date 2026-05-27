import { sel } from "tscircuit"
import { OPT4048 } from "./imports/OPT4048"

/**
 * SparkFun Tristimulus Color Sensor - OPT4048DTSR (Qwiic) (SEN-22638)
 * OPT4048 XYZ color sensor with Qwiic I2C interface
 * Board size: 1" x 1" (25.4mm x 25.4mm)
 *
 * Schematic: https://cdn.sparkfun.com/assets/5/9/2/b/8/Tristimulus_Color_Sensor-OPT4048_Schematic.pdf
 */
export default () => (
  <board width="25.4mm" height="25.4mm" routingDisabled>
    {/* OPT4048 color sensor */}
    <OPT4048
      name="U1"
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: sel.net.SCL,
        pin2: sel.net.SDA,
        pin3: sel.net.GND,
        pin4: sel.net.GND,
        pin5: "net.INT",
        pin6: sel.net.VDD,
      }}
    />

    {/* 100nF decoupling capacitor */}
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={2}
      pcbY={0}
      schX={4}
      schY={2}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />

    {/* 10uF bulk capacitor */}
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0402"
      pcbX={2}
      pcbY={-2}
      schX={6}
      schY={2}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />

    {/* 2.2kΩ I2C pullup resistors */}
    <resistor
      name="R1"
      resistance="2.2k"
      footprint="0402"
      pcbX={-3}
      pcbY={3}
      schX={-4}
      schY={3}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.SCL }}
    />
    <resistor
      name="R2"
      resistance="2.2k"
      footprint="0402"
      pcbX={-3}
      pcbY={1}
      schX={-4}
      schY={1}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.SDA }}
    />

    {/* ADDR resistor to GND (sets I2C address 0x44) */}
    <resistor
      name="R3"
      resistance="10k"
      footprint="0402"
      pcbX={3}
      pcbY={1}
      schX={4}
      schY={-2}
      connections={{ pin1: "net.ADDR", pin2: sel.net.GND }}
    />

    {/* Qwiic connector 1 */}
    <chip
      name="J1"
      footprint="jst_sh4_smd_p1mm"
      pcbX={-8}
      pcbY={0}
      schX={-8}
      schY={0}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["VDD"],
        pin3: ["SDA"],
        pin4: ["SCL"],
      }}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.VDD,
        pin3: sel.net.SDA,
        pin4: sel.net.SCL,
      }}
    />

    {/* Qwiic connector 2 */}
    <chip
      name="J2"
      footprint="jst_sh4_smd_p1mm"
      pcbX={8}
      pcbY={0}
      schX={8}
      schY={0}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["VDD"],
        pin3: ["SDA"],
        pin4: ["SCL"],
      }}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.VDD,
        pin3: sel.net.SDA,
        pin4: sel.net.SCL,
      }}
    />

    {/* PTH breakout header: VDD, GND, SDA, SCL, INT */}
    <chip
      name="J3"
      footprint="pinrow5_p2.54mm"
      pcbX={0}
      pcbY={10}
      schX={0}
      schY={-6}
      pinLabels={{
        pin1: ["VDD"],
        pin2: ["GND"],
        pin3: ["SDA"],
        pin4: ["SCL"],
        pin5: ["INT"],
      }}
      connections={{
        pin1: sel.net.VDD,
        pin2: sel.net.GND,
        pin3: sel.net.SDA,
        pin4: sel.net.SCL,
        pin5: "net.INT",
      }}
    />
  </board>
)
