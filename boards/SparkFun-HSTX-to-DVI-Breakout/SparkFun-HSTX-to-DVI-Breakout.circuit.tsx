import { FPC_0_5_22P } from "./FPC-0.5-22P"
import { HDMI_A_19P_SMD } from "./HDMI_A_19P_SMD"
import { BSS138_SOT363 } from "./BSS138_SOT363"
import { AP3602AKTR } from "./AP3602AKTR"

export default () => (
  <board width="25.4mm" height="25.4mm">
    {/* J1 - 22-pin 0.5mm FPC input connector, HSTX signals from RP2040/RP2350 */}
    <FPC_0_5_22P
      name="J1"
      pcbRotation={-90}
      pcbX={-9}
      pcbY={0}
      schX={-9.24}
      schY={5.61}
      connections={{
        pin1: "net.v3_3",
        pin2: "net.SDA",
        pin3: "net.SCL",
        pin4: "net.GND",
        pin5: "net.IO0_IO28",
        pin6: "net.IO1_IO29",
        pin7: "net.GND",
        // pin8, pin9 - no connect (unused on this board)
        pin10: "net.GND",
        pin11: "net.D2_P",
        pin12: "net.D2_N",
        pin13: "net.GND",
        pin14: "net.CK_P",
        pin15: "net.CK_N",
        pin16: "net.GND",
        pin17: "net.D1_P",
        pin18: "net.D1_N",
        pin19: "net.GND",
        pin20: "net.D0_P",
        pin21: "net.D0_N",
        pin22: "net.GND",
      }}
    />

    {/* J2 - 19-pin female HDMI Type-A SMD receptacle, DVI/HDMI output */}
    <HDMI_A_19P_SMD
      name="J2"
      pcbX={3}
      pcbY={0}
      schX={15.72}
      schY={5.42}
      connections={{
        pin1: "net.HDMI_D2_P",
        pin2: "net.GND",
        pin3: "net.HDMI_D2_N",
        pin4: "net.HDMI_D1_P",
        pin5: "net.GND",
        pin6: "net.HDMI_D1_N",
        pin7: "net.HDMI_D0_P",
        pin8: "net.GND",
        pin9: "net.HDMI_D0_N",
        pin10: "net.HDMI_CK_P",
        pin11: "net.GND",
        pin12: "net.HDMI_CK_N",
        pin13: "net.CEC",
        // pin14 (UTILITY) - no connect
        pin15: "net.SCL_5V",
        pin16: "net.SDA_5V",
        pin17: "net.GND",
        pin18: "net.V5",
        pin19: "net.HOTPLUG_5V",
        pin20: "net.GND",
        pin21: "net.GND",
        pin22: "net.GND",
        pin23: "net.GND",
      }}
    />

    {/* Q1 - dual BSS138 N-MOSFET, bidirectional I2C/DDC level shifter */}
    <BSS138_SOT363
      name="Q1"
      pcbX={-8}
      pcbY={-7.5}
      schX={-14.76}
      schY={-7.53}
      connections={{
        pin1: "net.SDA",
        pin2: "net.v3_3",
        pin3: "net.SCL_5V",
        pin4: "net.SCL",
        pin5: "net.v3_3",
        pin6: "net.SDA_5V",
      }}
    />

    {/* U1 - AP3602AKTR charge-pump voltage doubler, 3.3V -> 5V */}
    <AP3602AKTR
      name="U1"
      pcbX={9}
      pcbY={-5.5}
      schX={-2.38}
      schY={-6.96}
      connections={{
        pin1: "net.V5",
        pin2: "net.GND",
        pin3: "net.v3_3",
        pin4: "net.CFLY_N",
        pin5: "net.v3_3",
        pin6: "net.CFLY_P",
      }}
    />

    {/* C1 - 3.3V rail decoupling */}
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0603"
      pcbX={-5}
      pcbY={-7.5}
      schX={-4.66}
      schY={-7.72}
      connections={{ pin1: "net.v3_3", pin2: "net.GND" }}
    />

    {/* C2 - charge-pump flying capacitor, across U1 C+/C- */}
    <capacitor
      name="C2"
      capacitance="1.0uF"
      footprint="0603"
      pcbX={-1.7}
      pcbY={-7.5}
      schX={-2.38}
      schY={-5.25}
      connections={{ pin1: "net.CFLY_P", pin2: "net.CFLY_N" }}
    />

    {/* C3 - 5V rail (charge-pump output) decoupling */}
    <capacitor
      name="C3"
      capacitance="10uF"
      footprint="0603"
      pcbX={1.6}
      pcbY={-7.5}
      schX={-0.47}
      schY={-7.72}
      connections={{ pin1: "net.V5", pin2: "net.GND" }}
    />

    {/*
      R1 - 10k x4 resistor array (SparkFun-Resistor:10k_1206_4_ARR),
      modeled as 4 independent resistors: I2C/DDC pull-ups, two on the
      3.3V-side SDA/SCL bus, two on the 5V-side DDC bus.
    */}
    <resistor
      name="R1A"
      resistance="10k"
      footprint="0402"
      pcbX={4.3}
      pcbY={-7.5}
      schX={-15.71}
      schY={-5.44}
      connections={{ pin1: "net.SDA", pin2: "net.v3_3" }}
    />
    <resistor
      name="R1B"
      resistance="10k"
      footprint="0402"
      pcbX={7}
      pcbY={-7.5}
      schX={-13.81}
      schY={-9.25}
      connections={{ pin1: "net.SCL", pin2: "net.v3_3" }}
    />
    <resistor
      name="R1C"
      resistance="10k"
      footprint="0402"
      pcbX={-7.2}
      pcbY={-9.6}
      schX={-15.71}
      schY={-9.25}
      connections={{ pin1: "net.SDA_5V", pin2: "net.V5" }}
    />
    <resistor
      name="R1D"
      resistance="10k"
      footprint="0402"
      pcbX={-4.8}
      pcbY={-9.6}
      schX={-13.81}
      schY={-5.44}
      connections={{ pin1: "net.SCL_5V", pin2: "net.V5" }}
    />

    {/*
      R2 - 220R x4 resistor array (SparkFun-Resistor:220_0804_4_ARR),
      series termination on the D2 and D1 HSTX differential pairs.
    */}
    <resistor
      name="R2A"
      resistance="220"
      footprint="0402"
      pcbX={-2.4}
      pcbY={-9.6}
      schX={9.81}
      schY={9.42}
      connections={{ pin1: "net.D2_P", pin2: "net.HDMI_D2_P" }}
    />
    <resistor
      name="R2B"
      resistance="220"
      footprint="0402"
      pcbX={0}
      pcbY={-9.6}
      schX={9.81}
      schY={8.85}
      connections={{ pin1: "net.D2_N", pin2: "net.HDMI_D2_N" }}
    />
    <resistor
      name="R2C"
      resistance="220"
      footprint="0402"
      pcbX={2.4}
      pcbY={-9.6}
      schX={9.81}
      schY={8.28}
      connections={{ pin1: "net.D1_P", pin2: "net.HDMI_D1_P" }}
    />
    <resistor
      name="R2D"
      resistance="220"
      footprint="0402"
      pcbX={4.8}
      pcbY={-9.6}
      schX={9.81}
      schY={7.71}
      connections={{ pin1: "net.D1_N", pin2: "net.HDMI_D1_N" }}
    />

    {/*
      R3 - 220R x4 resistor array (SparkFun-Resistor:220_0804_4_ARR),
      series termination on the D0 and CK HSTX differential pairs.
    */}
    <resistor
      name="R3A"
      resistance="220"
      footprint="0402"
      pcbX={7.2}
      pcbY={-9.6}
      schX={9.81}
      schY={6.57}
      connections={{ pin1: "net.D0_P", pin2: "net.HDMI_D0_P" }}
    />
    <resistor
      name="R3B"
      resistance="220"
      footprint="0402"
      pcbX={-7.2}
      pcbY={-11.4}
      schX={9.81}
      schY={5.99}
      connections={{ pin1: "net.D0_N", pin2: "net.HDMI_D0_N" }}
    />
    <resistor
      name="R3C"
      resistance="220"
      footprint="0402"
      pcbX={-4.8}
      pcbY={-11.4}
      schX={9.81}
      schY={5.42}
      connections={{ pin1: "net.CK_P", pin2: "net.HDMI_CK_P" }}
    />
    <resistor
      name="R3D"
      resistance="220"
      footprint="0402"
      pcbX={-2.4}
      pcbY={-11.4}
      schX={9.81}
      schY={4.85}
      connections={{ pin1: "net.CK_N", pin2: "net.HDMI_CK_N" }}
    />

    {/* R4 - 100k pulldown on /HOTPLUG */}
    <resistor
      name="R4"
      resistance="100k"
      footprint="0402"
      pcbX={0}
      pcbY={-11.4}
      schX={10.77}
      schY={1.99}
      connections={{ pin1: "net.HOTPLUG", pin2: "net.GND" }}
    />

    {/* R5 - 100k series resistor between /HOTPLUG and /5V_HOTPLUG (HPD) */}
    <resistor
      name="R5"
      resistance="100k"
      footprint="0402"
      pcbX={2.4}
      pcbY={-11.4}
      schX={11.53}
      schY={2.76}
      connections={{ pin1: "net.HOTPLUG", pin2: "net.HOTPLUG_5V" }}
    />

    {/* JP1 - "CEC" solder jumper, default bridged. Routes RP2040 GPIO
        IO0/IO28 to the HDMI CEC line; cut to disconnect. */}
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12_pl1.27_pw0.635_p1"
      bridgedPins={[["1"], ["2"]]}
      pcbX={5.6}
      pcbY={-11.4}
      schX={-5.24}
      schY={7.9}
      connections={{ pin1: "net.IO0_IO28", pin2: "net.CEC" }}
    />

    {/* JP2 - "HPE" (Hot Plug Enable) solder jumper, default bridged. Routes
        RP2040 GPIO IO1/IO29 to /HOTPLUG; cut to disconnect. */}
    <solderjumper
      name="JP2"
      footprint="solderjumper2_bridged12_pl1.27_pw0.635_p1"
      bridgedPins={[["1"], ["2"]]}
      pcbX={8.4}
      pcbY={-11.4}
      schX={-5.24}
      schY={7.52}
      connections={{ pin1: "net.IO1_IO29", pin2: "net.HOTPLUG" }}
    />

    <schematictext
      text="HSTX to DVI Breakout"
      fontSize={0.3}
      schX={0}
      color="blue"
      schY={10}
    />
  </board>
)
