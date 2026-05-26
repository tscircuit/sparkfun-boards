import { sel } from "tscircuit"
import { STM32F405RG } from "./imports/STM32F405RG"
import { MicroModConnector } from "./imports/MicroModConnector"

/**
 * SparkFun MicroMod STM32 Processor Board (DEV-21326)
 * STM32F405RG ARM Cortex-M4 @ 168MHz + 128Mb SPI Flash
 * Standard MicroMod M.2 form factor (22mm x 22mm)
 *
 * Pin mapping source:
 * https://learn.sparkfun.com/tutorials/micromod-stm32-processor-hookup-guide/all
 */
export default () => (
  <board width="22mm" height="22mm" routingDisabled>
    {/* STM32F405RG ARM Cortex-M4 MCU */}
    <STM32F405RG
      name="U1"
      pcbX={0}
      pcbY={2}
      connections={{
        // Power
        pin1: "net.VBAT",
        pin12: sel.net.GND,
        pin13: sel.net.VDD,
        pin18: sel.net.GND,
        pin19: sel.net.VDD,
        pin31: "net.VCAP1",
        pin32: sel.net.GND,
        pin33: sel.net.VDD,
        pin48: "net.VCAP2",
        pin49: sel.net.GND,
        pin50: sel.net.VDD,
        // USB
        pin45: sel.J1.pin5, // PA11 = USB_DN
        pin46: sel.J1.pin3, // PA12 = USB_DP
        // RESET / BOOT
        pin7: sel.J1.pin6, // NRST = RESET#
        pin62: sel.J1.pin11, // BOOT0 = BOOT
        // SWD
        pin47: sel.J1.pin23, // PA13 = SWDIO
        pin51: sel.J1.pin21, // PA14 = SWDCK
        // UART1
        pin43: sel.J1.pin17, // PA9  = UART_TX1
        pin44: sel.J1.pin19, // PA10 = UART_RX1
        // I2C primary
        pin29: sel.J1.pin14, // PB10 = I2C_SCL
        pin30: sel.J1.pin12, // PB11 = I2C_SDA
        pin27: sel.J1.pin16, // PB1  = I2C_INT#
        // I2C secondary
        pin60: sel.J1.pin53, // PB6  = I2C_SCL1
        pin61: sel.J1.pin51, // PB7  = I2C_SDA1
        // SPI
        pin22: sel.J1.pin61, // PA6  = SPI_PICO
        pin23: sel.J1.pin59, // PA7  = SPI_POCI
        pin21: sel.J1.pin57, // PA5  = SPI_SCK
        pin24: sel.J1.pin55, // PC4  = SPI_CS#
        // Analog
        pin25: sel.J1.pin34, // PC5  = A0
        pin26: sel.J1.pin38, // PB0  = A1
        // PWM
        pin38: sel.J1.pin32, // PC6  = PWM0
        pin39: sel.J1.pin47, // PC7  = PWM1
        // GPIO/BUS
        pin56: sel.J1.pin40, // PD2  = G0/BUS0
        pin42: sel.J1.pin42, // PA8  = G1/BUS1
        pin14: sel.J1.pin44, // PA0  = G2/BUS2
        pin40: sel.J1.pin46, // PC8  = G3/BUS3
        pin41: sel.J1.pin48, // PC9  = G4/BUS4
        pin2: sel.J1.pin73, // PC13 = G5/BUS5
        pin10: sel.J1.pin71, // PC2  = G6/BUS6
        pin34: sel.J1.pin8, // PB12 = G11/HOST_ID
        // CAN
        pin63: sel.J1.pin41, // PB8  = CAN_RX
        pin64: sel.J1.pin43, // PB9  = CAN_TX
        // USB Host
        pin36: sel.J1.pin37, // PB14 = USBHOST_DN
        pin37: sel.J1.pin35, // PB15 = USBHOST_DP
        pin35: sel.J1.pin63, // PB13 = G10/HOST_VBUS
        // Digital
        pin8: sel.J1.pin10, // PC0  = D0
        pin17: sel.J1.pin18, // PC1  = D1
        // Audio I2S
        pin57: sel.J1.pin50, // PB3  = AUD_BCLK
        pin20: sel.J1.pin52, // PA4  = AUD_LRCLK
        pin58: sel.J1.pin56, // PB4  = AUD_OUT
        pin59: sel.J1.pin54, // PB5  = AUD_IN
      }}
    />

    {/* M.2 MicroMod Edge Connector */}
    <MicroModConnector
      name="J1"
      pcbX={0}
      pcbY={-8}
      connections={{
        pin1: sel.net.GND,
        pin2: sel.net.VDD,
        pin7: sel.net.GND,
        pin33: sel.net.GND,
        pin36: sel.net.GND,
        pin39: sel.net.GND,
        pin45: sel.net.GND,
        pin74: sel.net.VDD,
        pin75: sel.net.GND,
      }}
    />

    {/* VDD decoupling capacitors */}
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={5}
      schX={-8}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={3}
      schX={-6}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={1}
      schX={-4}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />

    {/* VCAP capacitors (required for STM32F4 internal LDO) */}
    <capacitor
      name="C4"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={-3}
      pcbY={5}
      schX={-8}
      schY={-3}
      connections={{ pin1: "net.VCAP1", pin2: sel.net.GND }}
    />
    <capacitor
      name="C5"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={-3}
      pcbY={3}
      schX={-6}
      schY={-3}
      connections={{ pin1: "net.VCAP2", pin2: sel.net.GND }}
    />

    {/* VDDA decoupling */}
    <capacitor
      name="C6"
      capacitance="1uF"
      footprint="0402"
      pcbX={-3}
      pcbY={1}
      schX={-4}
      schY={-3}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C7"
      capacitance="10nF"
      footprint="0402"
      pcbX={-3}
      pcbY={-1}
      schX={-2}
      schY={-3}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />

    {/* Status LED (LED_BUILTIN - on module, not exposed to board edge) */}
    <led
      name="LED1"
      color="blue"
      footprint="0402"
      pcbX={5}
      pcbY={-1}
      schX={8}
      schY={2}
      connections={{ anode: sel.net.VDD, cathode: sel.R1.pin1 }}
    />
    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={5}
      pcbY={-3}
      schX={8}
      schY={0}
      connections={{ pin1: sel.LED1.cathode, pin2: sel.net.GND }}
    />

    {/* M.2 screw mounting hole */}
    <hole diameter={2.05} pcbX={0} pcbY={8} />
  </board>
)
