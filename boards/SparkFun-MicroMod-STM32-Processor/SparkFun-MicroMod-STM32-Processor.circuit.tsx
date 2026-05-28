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
    {/* STM32F405RG ARM Cortex-M4 MCU — center */}
    <STM32F405RG
      name="U1"
      pcbX={0}
      pcbY={2}
      schX={0}
      schY={0}
      connections={{
        pin1: "net.VBAT",
        pin2: sel.J1.pin73,
        pin3: "net.LSE_IN",
        pin4: "net.LSE_OUT",
        pin5: "net.OSC_IN",
        pin6: "net.OSC_OUT",
        pin7: "net.NRST",
        pin8: sel.J1.pin10,
        pin9: sel.J1.pin18,
        pin10: sel.J1.pin71,
        pin12: sel.net.GND,
        pin13: sel.net.VDD,
        pin14: sel.J1.pin44,
        pin15: "net.STAT",
        pin16: sel.J1.pin22,
        pin17: sel.J1.pin20,
        pin18: sel.net.GND,
        pin19: sel.net.VDD,
        pin20: sel.J1.pin52,
        pin21: sel.J1.pin57,
        pin22: sel.J1.pin61,
        pin23: sel.J1.pin59,
        pin24: sel.J1.pin55,
        pin25: sel.J1.pin34,
        pin26: sel.J1.pin38,
        pin27: sel.J1.pin16,
        pin29: sel.J1.pin14,
        pin30: sel.J1.pin12,
        pin31: "net.VCAP1",
        pin32: sel.net.GND,
        pin33: sel.net.VDD,
        pin34: sel.J1.pin8,
        pin35: sel.J1.pin63,
        pin36: sel.J1.pin37,
        pin37: sel.J1.pin35,
        pin38: sel.J1.pin32,
        pin39: sel.J1.pin47,
        pin40: sel.J1.pin46,
        pin41: sel.J1.pin48,
        pin42: sel.J1.pin42,
        pin43: sel.J1.pin17,
        pin44: sel.J1.pin19,
        pin45: sel.J1.pin5,
        pin46: sel.J1.pin3,
        pin47: sel.J1.pin23,
        pin48: "net.VCAP2",
        pin49: sel.net.GND,
        pin50: sel.net.VDD,
        pin51: sel.J1.pin21,
        pin52: sel.J1.pin54,
        pin53: sel.J1.pin50,
        pin54: sel.J1.pin56,
        pin55: "net.FLASH_CS",
        pin56: sel.J1.pin40,
        pin57: "net.FLASH_SCK",
        pin58: "net.FLASH_SDO",
        pin59: "net.FLASH_SDI",
        pin60: sel.J1.pin53,
        pin61: sel.J1.pin51,
        pin62: "net.BOOT0",
        pin63: sel.J1.pin41,
        pin64: sel.J1.pin43,
      }}
    />

    {/* W25Q128 SPI Flash — right side */}
    <W25Q128
      name="U2"
      pcbX={5}
      pcbY={-5}
      schX={20}
      schY={0}
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

    {/* MicroMod Connector — bottom */}
    <MicroModConnector
      name="J1"
      pcbX={0}
      pcbY={-8}
      schX={0}
      schY={-20}
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

    {/* 12MHz HSE Crystal — top left */}
    <chip
      name="Y1"
      footprint="crystal_2pad_w2mm_h1.6mm"
      pcbX={-5}
      pcbY={5}
      schX={-20}
      schY={6}
      pinLabels={{ pin1: ["IN"], pin2: ["OUT"] }}
      connections={{ pin1: "net.OSC_IN", pin2: "net.OSC_OUT" }}
    />
    <capacitor
      name="C1"
      capacitance="22pF"
      footprint="0402"
      pcbX={-6}
      pcbY={4}
      schX={-24}
      schY={6}
      connections={{ pin1: "net.OSC_IN", pin2: sel.net.GND }}
    />
    <capacitor
      name="C2"
      capacitance="22pF"
      footprint="0402"
      pcbX={-6}
      pcbY={6}
      schX={-24}
      schY={8}
      connections={{ pin1: "net.OSC_OUT", pin2: sel.net.GND }}
    />

    {/* 32.768kHz LSE Crystal — top left */}
    <chip
      name="Y2"
      footprint="crystal_2pad_w1.6mm_h1mm"
      pcbX={-5}
      pcbY={-2}
      schX={-20}
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
      schX={-24}
      schY={0}
      connections={{ pin1: "net.LSE_IN", pin2: sel.net.GND }}
    />
    <capacitor
      name="C4"
      capacitance="15pF"
      footprint="0402"
      pcbX={-6}
      pcbY={-3}
      schX={-24}
      schY={-2}
      connections={{ pin1: "net.LSE_OUT", pin2: sel.net.GND }}
    />

    {/* Boot Inversion Circuit — top right */}
    <chip
      name="Q1"
      footprint="sot23"
      pcbX={3}
      pcbY={8}
      schX={20}
      schY={10}
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
      schX={24}
      schY={12}
      connections={{ pin1: sel.net.VDD, pin2: "net.BOOT0" }}
    />
    <resistor
      name="R4"
      resistance="100k"
      footprint="0402"
      pcbX={5}
      pcbY={9}
      schX={24}
      schY={10}
      connections={{ pin1: sel.J1.pin11, pin2: "net.BOOT_IN" }}
    />

    {/* Reset capacitor */}
    <capacitor
      name="C15"
      capacitance="100nF"
      footprint="0402"
      pcbX={2}
      pcbY={8}
      schX={20}
      schY={14}
      connections={{ pin1: "net.NRST", pin2: sel.net.GND }}
    />

    {/* USB series resistors — bottom left */}
    <resistor
      name="R2"
      resistance="220"
      footprint="0402"
      pcbX={-2}
      pcbY={-6}
      schX={-10}
      schY={-10}
      connections={{ pin1: sel.J1.pin5, pin2: "net.USB_DN_R" }}
    />
    <resistor
      name="R3"
      resistance="220"
      footprint="0402"
      pcbX={-3}
      pcbY={-6}
      schX={-10}
      schY={-12}
      connections={{ pin1: sel.J1.pin3, pin2: "net.USB_DP_R" }}
    />

    {/* Flash CS pullup */}
    <resistor
      name="R11"
      resistance="100k"
      footprint="0402"
      pcbX={6}
      pcbY={-3}
      schX={24}
      schY={0}
      connections={{ pin1: sel.net.VDD, pin2: "net.FLASH_CS" }}
    />

    {/* Status LED + resistor — right */}
    <led
      name="D5"
      color="blue"
      footprint="0402"
      pcbX={5}
      pcbY={-1}
      schX={16}
      schY={6}
      connections={{ anode: "net.STAT", cathode: sel.R12.pin1 }}
    />
    <resistor
      name="R12"
      resistance="1k"
      footprint="0402"
      pcbX={5}
      pcbY={-3}
      schX={16}
      schY={4}
      connections={{ pin1: sel.D5.cathode, pin2: sel.net.GND }}
    />

    {/* VCAP capacitors */}
    <capacitor
      name="C5"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={-3}
      pcbY={5}
      schX={-10}
      schY={8}
      connections={{ pin1: "net.VCAP1", pin2: sel.net.GND }}
    />
    <capacitor
      name="C6"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={-3}
      pcbY={3}
      schX={-10}
      schY={6}
      connections={{ pin1: "net.VCAP2", pin2: sel.net.GND }}
    />

    {/* Decoupling caps — spread out below U1 */}
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={1}
      schX={-16}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={5}
      schX={-12}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C9"
      capacitance="1uF"
      footprint="0402"
      pcbX={3}
      pcbY={3}
      schX={-8}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C10"
      capacitance="1.7uF"
      footprint="0402"
      pcbX={3}
      pcbY={1}
      schX={-4}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C11"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={-1}
      schX={0}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C12"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={-3}
      schX={4}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C13"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={-1}
      schX={8}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />
    <capacitor
      name="C14"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={-3}
      schX={12}
      schY={-4}
      connections={{ pin1: sel.net.VDD, pin2: sel.net.GND }}
    />

    {/* M.2 mounting hole */}
    <hole diameter={2.05} pcbX={0} pcbY={9} />
  </board>
)
