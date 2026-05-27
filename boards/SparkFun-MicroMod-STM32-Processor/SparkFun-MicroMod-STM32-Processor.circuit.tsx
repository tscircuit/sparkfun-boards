import { sel } from "tscircuit"
import { STM32F405RG } from "./imports/STM32F405RG"
import { MicroModConnector } from "./imports/MicroModConnector"
import { W25Q128 } from "./imports/W25Q128"

/**
 * SparkFun MicroMod STM32 Processor Board (DEV-21326)
 * STM32F405RG ARM Cortex-M4 @ 168MHz + 128Mb SPI Flash
 * Schematic: https://cdn.sparkfun.com/assets/8/a/a/7/3/MicroMod_STM32_Processor.pdf
 */
export default () => (
  <board width="22mm" height="22mm" routingDisabled>
    {/* STM32F405RG ARM Cortex-M4 MCU */}
    <STM32F405RG
      name="U1"
      pcbX={0}
      pcbY={2}
      connections={{
        // Power rails
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
        // HSE 12MHz crystal
        pin5: "net.OSC_IN",
        pin6: "net.OSC_OUT",
        // LSE 32.768kHz crystal
        pin3: "net.LSE_IN",
        pin4: "net.LSE_OUT",
        // RESET
        pin7: "net.NRST",
        // BOOT0 (via boot inversion circuit)
        pin62: "net.BOOT0",
        // SWD
        pin47: sel.J1.pin23, // PA13 = SWDIO
        pin51: sel.J1.pin21, // PA14 = SWDCK
        // USB device
        pin45: sel.J1.pin5, // PA11 = USB_DN
        pin46: sel.J1.pin3, // PA12 = USB_DP
        // UART1
        pin43: sel.J1.pin17, // PA9  = UART_TX1
        pin44: sel.J1.pin19, // PA10 = UART_RX1
        // UART2
        pin16: sel.J1.pin22, // PA2  = UART_TX2
        pin17: sel.J1.pin20, // PA3  = UART_RX2
        // I2C1 primary
        pin29: sel.J1.pin14, // PB10 = I2C_SCL
        pin30: sel.J1.pin12, // PB11 = I2C_SDA
        pin27: sel.J1.pin16, // PB1  = I2C_INT#
        // I2C2 secondary
        pin60: sel.J1.pin53, // PB6  = I2C_SCL1
        pin61: sel.J1.pin51, // PB7  = I2C_SDA1
        // SPI1 (to MicroMod)
        pin22: sel.J1.pin61, // PA6  = SPI_PICO
        pin23: sel.J1.pin59, // PA7  = SPI_POCI
        pin21: sel.J1.pin57, // PA5  = SPI_SCK
        pin24: sel.J1.pin55, // PC4  = SPI_CS#
        // SPI2 (to flash U2)
        pin57: "net.FLASH_SCK", // PB3
        pin58: "net.FLASH_SDO", // PB4
        pin59: "net.FLASH_SDI", // PB5
        pin55: "net.FLASH_CS", // PC3 (actual: see schematic)
        // Analog
        pin25: sel.J1.pin34, // PC5 = A0
        pin26: sel.J1.pin38, // PB0 = A1
        // PWM
        pin38: sel.J1.pin32, // PC6 = PWM0
        pin39: sel.J1.pin47, // PC7 = PWM1
        // GPIO/BUS
        pin56: sel.J1.pin40, // PD2 = G0/BUS0
        pin42: sel.J1.pin42, // PA8 = G1/BUS1
        pin14: sel.J1.pin44, // PA0 = G2/BUS2
        pin40: sel.J1.pin46, // PC8 = G3/BUS3
        pin41: sel.J1.pin48, // PC9 = G4/BUS4
        pin2: sel.J1.pin73, // PC13 = G5/BUS5
        pin10: sel.J1.pin71, // PC2  = G6/BUS6
        pin34: sel.J1.pin8, // PB12 = G11/HOST_ID
        // CAN
        pin63: sel.J1.pin41, // PB8 = CAN_RX
        pin64: sel.J1.pin43, // PB9 = CAN_TX
        // USB Host
        pin36: sel.J1.pin37, // PB14 = USBHOST_DN
        pin37: sel.J1.pin35, // PB15 = USBHOST_DP
        pin35: sel.J1.pin63, // PB13 = G10/HOST_VBUS
        // Digital
        pin8: sel.J1.pin10, // PC0 = D0
        pin9: sel.J1.pin18, // PC1 = D1
        // Audio I2S
        pin53: sel.J1.pin50, // PC10 = AUD_BCLK (remap)
        pin20: sel.J1.pin52, // PA4  = AUD_LRCLK
        pin54: sel.J1.pin56, // PC11 = AUD_OUT
        pin52: sel.J1.pin54, // PA15 = AUD_IN (remap)
        // STAT LED
        pin15: "net.STAT", // PA1
        // VDDA
        pin13: sel.net.VDD,
      }}
    />

    {/* 128Mbit SPI Flash */}
    <W25Q128
      name="U2"
      pcbX={5}
      pcbY={-5}
      schX={10}
      schY={-5}
      connections={{
        pin1: "net.FLASH_CS",
        pin2: "net.FLASH_SDO",
        pin3: sel.net.VDD,
        pin4: sel.net.GND,
        pin5: "net.FLASH_SDI",
        pin6: "net.FLASH_SCK",
        pin7: sel.net.VDD,
        pin8: sel.net.VDD,
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
        pin9: "net.USB_VIN",
        pin33: sel.net.GND,
        pin36: sel.net.GND,
        pin39: sel.net.GND,
        pin45: sel.net.GND,
        pin49: "net.BATT_VIN",
        pin74: sel.net.VDD,
        pin75: sel.net.GND,
      }}
    />

    {/* 12MHz HSE Crystal */}
    <chip
      name="Y1"
      footprint="crystal_2pad_w2mm_h1.6mm"
      pcbX={-5}
      pcbY={5}
      schX={-10}
      schY={3}
      pinLabels={{ pin1: ["IN"], pin2: ["OUT"] }}
      connections={{ pin1: "net.OSC_IN", pin2: "net.OSC_OUT" }}
    />
    <capacitor
      name="C1"
      capacitance="22pF"
      footprint="0402"
      pcbX={-6}
      pcbY={4}
      schX={-12}
      schY={3}
      connections={{ pin1: "net.OSC_IN", pin2: sel.net.GND }}
    />
    <capacitor
      name="C2"
      capacitance="22pF"
      footprint="0402"
      pcbX={-6}
      pcbY={6}
      schX={-12}
      schY={4}
      connections={{ pin1: "net.OSC_OUT", pin2: sel.net.GND }}
    />

    {/* 32.768kHz LSE Crystal */}
    <chip
      name="Y2"
      footprint="crystal_2pad_w1.6mm_h1mm"
      pcbX={-5}
      pcbY={-2}
      schX={-10}
      schY={0}
      pinLabels={{ pin1: ["IN"], pin2: ["OUT"] }}
      connections={{ pin1: "net.LSE_IN", pin2: "net.LSE_OUT" }}
    />
    <capacitor
      name="C3"
      capacitance="15pF"
      footprint="0402"
      pcbX={-6}
      pcbY={-1}
      schX={-12}
      schY={0}
      connections={{ pin1: "net.LSE_IN", pin2: sel.net.GND }}
    />
    <capacitor
      name="C4"
      capacitance="15pF"
      footprint="0402"
      pcbX={-6}
      pcbY={-3}
      schX={-12}
      schY={-1}
      connections={{ pin1: "net.LSE_OUT", pin2: sel.net.GND }}
    />

    {/* Boot Inversion Circuit (Q1 NPN + R1/R4) */}
    <chip
      name="Q1"
      footprint="sot23"
      pcbX={3}
      pcbY={8}
      schX={5}
      schY={5}
      pinLabels={{ pin1: ["BASE"], pin2: ["EMITTER"], pin3: ["COLLECTOR"] }}
      connections={{
        pin1: "net.BOOT_IN",
        pin2: sel.net.GND,
        pin3: "net.BOOT0",
      }}
    />
    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      pcbX={4}
      pcbY={9}
      schX={5}
      schY={7}
      connections={{ pin1: sel.net.VDD, pin2: "net.BOOT0" }}
    />
    <resistor
      name="R4"
      resistance="100k"
      footprint="0402"
      pcbX={5}
      pcbY={9}
      schX={7}
      schY={7}
      connections={{ pin1: sel.J1.pin11, pin2: "net.BOOT_IN" }}
    />

    {/* Reset circuit */}
    <capacitor
      name="C15"
      capacitance="100nF"
      footprint="0402"
      pcbX={2}
      pcbY={8}
      schX={3}
      schY={5}
      connections={{ pin1: "net.NRST", pin2: sel.net.GND }}
    />

    {/* USB D+/D- series resistors */}
    <resistor
      name="R2"
      resistance="220"
      footprint="0402"
      pcbX={-2}
      pcbY={-6}
      schX={-3}
      schY={-5}
      connections={{ pin1: sel.J1.pin5, pin2: "net.USB_DN_R" }}
    />
    <resistor
      name="R3"
      resistance="220"
      footprint="0402"
      pcbX={-3}
      pcbY={-6}
      schX={-5}
      schY={-5}
      connections={{ pin1: sel.J1.pin3, pin2: "net.USB_DP_R" }}
    />

    {/* Flash CS pullup */}
    <resistor
      name="R11"
      resistance="100k"
      footprint="0402"
      pcbX={6}
      pcbY={-3}
      schX={12}
      schY={-3}
      connections={{ pin1: sel.net.VDD, pin2: "net.FLASH_CS" }}
    />

    {/* Status LED */}
    <led
      name="D5"
      color="blue"
      footprint="0402"
      pcbX={5}
      pcbY={-1}
      schX={8}
      schY={2}
      connections={{ anode: "net.STAT", cathode: sel.R12.pin1 }}
    />
    <resistor
      name="R12"
      resistance="1k"
      footprint="0402"
      pcbX={5}
      pcbY={-3}
      schX={8}
      schY={0}
      connections={{ pin1: sel.D5.cathode, pin2: sel.net.GND }}
    />

    {/* VCAP capacitors */}
    <capacitor
      name="C5"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={-3}
      pcbY={5}
      schX={-8}
      schY={-3}
      connections={{ pin1: "net.VCAP1", pin2: sel.net.GND }}
    />
    <capacitor
      name="C6"
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
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={1}
      schX={-4}
      schY={-3}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={5}
      schX={-8}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C9"
      capacitance="1uF"
      footprint="0402"
      pcbX={3}
      pcbY={3}
      schX={-6}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C10"
      capacitance="1.7uF"
      footprint="0402"
      pcbX={3}
      pcbY={1}
      schX={-4}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />

    {/* VDD decoupling bank */}
    <capacitor
      name="C11"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={-1}
      schX={-2}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C12"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={-3}
      schX={0}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C13"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={-1}
      schX={2}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C14"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={-3}
      schX={4}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />

    {/* M.2 mounting hole */}
    <hole diameter={2.05} pcbX={0} pcbY={9} />
  </board>
)
