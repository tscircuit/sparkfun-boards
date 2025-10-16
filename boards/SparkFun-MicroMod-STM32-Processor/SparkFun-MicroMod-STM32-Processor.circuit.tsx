import { sel } from "@tscircuit/core"
import { outlineBuilder } from "../../util/OutlineBuilder"
import { STM32F405RGT6 } from "./STM32F405RGT6"
import { W25Q128JVPIQ } from "./W25Q128JVPIQ"
import { MicroModEdge } from "./MicroModEdge"

// MicroMod 22mm x 22mm outline derived from EAGLE Dimension layer (notch exact)
// notch verticals at x=13 and x=15 up to y=2.9, arcs r=0.6 to y=3.5, top span 13.6..14.4
const BOARD_W = 22
const BOARD_H = 22
const NOTCH_L = 13.0
const NOTCH_R = 15.0
const NOTCH_UP = 2.9
const NOTCH_ARC_R = 0.6
const NOTCH_TOP_Y = 3.5
const NOTCH_TOP_L = 13.6
const NOTCH_TOP_R = 14.4
const outline = outlineBuilder(1, 0)
  .lineTo(NOTCH_L, 0)
  .lineTo(NOTCH_L, NOTCH_UP)
  .arcTo(NOTCH_TOP_L, NOTCH_TOP_Y, { radius: NOTCH_ARC_R, sweep: false })
  .lineTo(NOTCH_TOP_R, NOTCH_TOP_Y)
  .arcTo(NOTCH_R, NOTCH_UP, { radius: NOTCH_ARC_R, sweep: false })
  .lineTo(NOTCH_R, 0)
  .lineTo(BOARD_W - 1, 0)
  .lineTo(BOARD_W, 1)
  .lineTo(BOARD_W, BOARD_H - 1)
  .lineTo(BOARD_W - 1, BOARD_H)
  .lineTo(1, BOARD_H)
  .lineTo(0, BOARD_H - 1)
  .lineTo(0, 1)
  .lineTo(1, 0)
  .toArray()

export default () => (
  <board outline={outline} routingDisabled={true}>
    {/* MicroMod Edge Connector */}
    <MicroModEdge
      name="J1"
      pcbX={11}
      pcbY={1}
      pcbRotation={0}
      schX={-10}
      schY={0}
    />

    {/* STM32F405RGT6 Microcontroller */}
    <STM32F405RGT6
      name="U1"
      pcbX={11.08}
      pcbY={12.08}
      pcbRotation={270}
      schX={5}
      schY={0}
    />

    {/* SPI Flash - Bottom layer, center-top */}
    <W25Q128JVPIQ
      name="U3"
      pcbX={10.2}
      pcbY={13.0}
      pcbRotation={180}
      layer="bottom"
      schX={12}
      schY={0}
    />

    {/* 12MHz Crystal for HSE - Left side vertical */}
    <resistor
      name="Y1"
      resistance="0"
      footprint="0805"
      pcbX={2.02}
      pcbY={11.66}
      pcbRotation={270}
      schX={2}
      schY={-5}
    />

    {/* 32.768kHz Crystal for LSE - Left side below Y1 */}
    <resistor
      name="Y2"
      resistance="0"
      footprint="0603"
      pcbX={2.15}
      pcbY={18.07}
      pcbRotation={0}
      schX={2}
      schY={-8}
    />

    {/* Crystal Load Capacitors - Vertical arrangement bottom left */}
    <capacitor
      name="C1"
      capacitance="22pF"
      footprint="0402"
      pcbX={2.0}
      pcbY={15.22}
      pcbRotation={180}
    />
    <capacitor
      name="C2"
      capacitance="22pF"
      footprint="0402"
      pcbX={1.14}
      pcbY={7.57}
      pcbRotation={270}
    />
    <capacitor
      name="C3"
      capacitance="15pF"
      footprint="0402"
      pcbX={1.99}
      pcbY={16.23}
      pcbRotation={180}
    />
    <capacitor
      name="C4"
      capacitance="15pF"
      footprint="0402"
      pcbX={1.99}
      pcbY={19.955}
      pcbRotation={180}
    />

    {/* Crystal network connections */}
    <netlabel net="HSE_IN" connection="Y1.pin1" />
    <netlabel net="HSE_IN" connection="C1.pin1" />
    <netlabel net="HSE_OUT" connection="Y1.pin2" />
    <netlabel net="HSE_OUT" connection="C2.pin1" />
    <netlabel net="GND" connection="C1.pin2" />
    <netlabel net="GND" connection="C2.pin2" />

    <netlabel net="LSE_IN" connection="Y2.pin1" />
    <netlabel net="LSE_IN" connection="C3.pin1" />
    <netlabel net="LSE_OUT" connection="Y2.pin2" />
    <netlabel net="LSE_OUT" connection="C4.pin1" />
    <netlabel net="GND" connection="C3.pin2" />
    <netlabel net="GND" connection="C4.pin2" />

    {/* VCAP and decoupling cap connections */}
    <netlabel net="VCAP1" connection="C5.pin1" />
    <netlabel net="VCAP1" connection="U1.pin31" />
    <netlabel net="GND" connection="C5.pin2" />
    <netlabel net="VCAP2" connection="C6.pin1" />
    <netlabel net="VCAP2" connection="U1.pin47" />
    <netlabel net="GND" connection="C6.pin2" />

    <netlabel net="V3_3" connection="C8.pin1" />
    <netlabel net="V3_3" connection="C9.pin1" />
    <netlabel net="V3_3" connection="C10.pin1" />
    <netlabel net="GND" connection="C8.pin2" />
    <netlabel net="GND" connection="C9.pin2" />
    <netlabel net="GND" connection="C10.pin2" />

    <netlabel net="V3_3" connection="C11.pin1" />
    <netlabel net="V3_3" connection="C12.pin1" />
    <netlabel net="V3_3" connection="C13.pin1" />
    <netlabel net="V3_3" connection="C14.pin1" />
    <netlabel net="V3_3" connection="C15.pin1" />
    <netlabel net="GND" connection="C11.pin2" />
    <netlabel net="GND" connection="C12.pin2" />
    <netlabel net="GND" connection="C13.pin2" />
    <netlabel net="GND" connection="C14.pin2" />
    <netlabel net="GND" connection="C15.pin2" />

    <netlabel net="V3_3" connection="C20.pin1" />
    <netlabel net="GND" connection="C20.pin2" />

    <netlabel net="V3_3" connection="R11.pin1" />
    <netlabel net="FLASH_WP" connection="R11.pin2" />
    <netlabel net="FLASH_WP" connection="U3.pin3" />
    <netlabel net="V3_3" connection="U3.pin7" />

    <netlabel net="USB_DP_MCU" connection="U1.pin45" />
    <netlabel net="USB_DP_MCU" connection="R3.pin1" />
    <netlabel net="USB_DP" connection="R3.pin2" />
    <netlabel net="USB_DP" connection="J1.pin3" />
    <netlabel net="USB_DN_MCU" connection="U1.pin44" />
    <netlabel net="USB_DN_MCU" connection="R2.pin1" />
    <netlabel net="USB_DN" connection="R2.pin2" />
    <netlabel net="USB_DN" connection="J1.pin5" />

    <netlabel net="LED_STAT" connection="U1.pin27" />
    <netlabel net="LED_STAT" connection="R12.pin1" />
    <netlabel net="LED_ANODE" connection="R12.pin2" />
    <netlabel net="LED_ANODE" connection="D5.anode" />
    <netlabel net="GND" connection="D5.cathode" />

    {/* VCAP Capacitors - Right side near MCU */}
    <capacitor
      name="C5"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={16.85}
      pcbY={4.77}
      pcbRotation={0}
    />
    <capacitor
      name="C6"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={20.0}
      pcbY={15.33}
      pcbRotation={0}
    />

    {/* VDDA Decoupling - Vertical row bottom left */}
    <capacitor
      name="C8"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={1.14}
      pcbY={5.56}
      pcbRotation={270}
    />
    <capacitor
      name="C9"
      capacitance="1.0uF"
      footprint="0402"
      pcbX={2.14}
      pcbY={5.56}
      pcbRotation={270}
    />
    <capacitor
      name="C10"
      capacitance="4.7uF"
      footprint="0402"
      pcbX={3.14}
      pcbY={5.55}
      pcbRotation={270}
    />

    {/* VDD Decoupling (very close to MCU edges) */}
    <capacitor
      name="C11"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={7.75}
      pcbY={19.65}
      pcbRotation={0}
    />
    <capacitor
      name="C12"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={16.85}
      pcbY={5.68}
      pcbRotation={0}
    />
    <capacitor
      name="C13"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={20.0}
      pcbY={16.25}
      pcbRotation={0}
    />
    <capacitor
      name="C14"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={7.75}
      pcbY={20.59}
      pcbRotation={0}
    />

    {/* General decoupling - Near MCU */}
    <capacitor
      name="C15"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={2.14}
      pcbY={7.56}
      pcbRotation={270}
    />

    {/* SPI Flash Decoupling - Bottom layer */}
    <capacitor
      name="C20"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={16.906}
      pcbY={11.933}
      pcbRotation={90}
      layer="bottom"
    />

    {/* Flash WP# Pullup - Bottom layer */}
    <resistor
      name="R11"
      resistance="100k"
      footprint="0402"
      pcbX={7.82}
      pcbY={8.4}
      pcbRotation={180}
      layer="bottom"
    />

    {/* Boot Circuit - Right side */}
    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      pcbX={18.4}
      pcbY={17.72}
      pcbRotation={0}
      layer="bottom"
      schX={15}
      schY={-3}
    />
    <resistor
      name="R5"
      resistance="100k"
      footprint="0402"
      pcbX={18.4}
      pcbY={16.73}
      pcbRotation={180}
      layer="bottom"
      schX={15}
      schY={-5}
    />
    <chip
      name="Q1"
      footprint="sot23"
      pcbX={18.4}
      pcbY={14.53}
      pcbRotation={-90}
      layer="bottom"
      schX={15}
      schY={-7}
      pinLabels={{
        pin1: ["G"],
        pin2: ["S"],
        pin3: ["D"],
      }}
    />

    {/* Boot circuit connections */}
    <netlabel net="BOOT_N" connection="J1.pin11" />
    <netlabel net="BOOT_N" connection="R5.pin1" />
    <netlabel net="BOOT_GATE" connection="R5.pin2" />
    <netlabel net="BOOT_GATE" connection="Q1.pin1" />
    <netlabel net="V3_3" connection="Q1.pin2" />
    <netlabel net="BOOT0" connection="Q1.pin3" />
    <netlabel net="BOOT0" connection="R1.pin1" />
    <netlabel net="BOOT0" connection="U1.pin60" />
    <netlabel net="GND" connection="R1.pin2" />

    {/* USB Series Resistors - Right side horizontal */}
    <resistor
      name="R2"
      resistance="22"
      footprint="0402"
      pcbX={20.0}
      pcbY={13.49}
      pcbRotation={180}
    />
    <resistor
      name="R3"
      resistance="22"
      footprint="0402"
      pcbX={20.0}
      pcbY={14.41}
      pcbRotation={180}
    />

    {/* Status LED - Very top right corner */}
    <led
      name="D5"
      color="blue"
      footprint="0603"
      pcbX={19.68}
      pcbY={20.81}
      pcbRotation={0}
      schX={15}
      schY={2}
    />
    <resistor
      name="R12"
      resistance="1k"
      footprint="0402"
      pcbX={19.68}
      pcbY={18.25}
      pcbRotation={180}
      schX={15}
      schY={4}
    />

    {/* DNP Resistor - Pull-up on RESET (Do Not Populate) */}
    <resistor
      name="R4"
      resistance="0"
      footprint="0402"
      pcbX={3.13}
      pcbY={7.55}
      pcbRotation={270}
    />
    <netlabel net="V3_3" connection="R4.pin2" />
    <netlabel net="RESET" connection="R4.pin1" />

    <netlabel net="GND" connection="R4.pin1" />
    <netlabel net="GND" connection="R4.pin2" />

    {/* Fiducials - spread in corners */}
    <hole name="FD1" diameter="0.635mm" pcbX={20.825} pcbY={7.077} />
    <hole name="FD2" diameter="0.635mm" pcbX={5.2} pcbY={21.04} />

    {/* Top mounting hole - 75% across */}
    <hole name="MH1" diameter="3mm" pcbX={16.5} pcbY={22} />

    {/* Power and Ground Connections */}
    <netlabel net="V3_3" connection="J1.pin2" />
    <netlabel net="V3_3" connection="J1.pin13" />
    <netlabel net="V3_3" connection="J1.pin14" />
    <netlabel net="V3_3" connection="U3.pin8" />

    {/* MCU Power Pins - VDD */}
    <netlabel net="V3_3" connection="U1.pin19" />
    <netlabel net="V3_3" connection="U1.pin32" />
    <netlabel net="V3_3" connection="U1.pin48" />
    <netlabel net="V3_3" connection="U1.pin64" />

    {/* MCU Power Pins - VDDA/VSSA */}
    <netlabel net="V3_3" connection="U1.pin13" />
    <netlabel net="GND" connection="U1.pin12" />

    {/* MCU VBAT */}
    <netlabel net="V3_3" connection="U1.pin1" />

    <netlabel net="GND" connection="J1.pin1" />
    <netlabel net="GND" connection="J1.pin4" />
    <netlabel net="GND" connection="J1.pin6" />
    <netlabel net="GND" connection="J1.pin8" />
    <netlabel net="GND" connection="J1.pin9" />
    <netlabel net="GND" connection="J1.pin46" />
    <netlabel net="GND" connection="J1.pin49" />
    <netlabel net="GND" connection="J1.pin52" />
    <netlabel net="GND" connection="J1.pin53" />
    <netlabel net="GND" connection="J1.pin56" />
    <netlabel net="GND" connection="J1.pin59" />
    <netlabel net="GND" connection="J1.pin62" />
    <netlabel net="GND" connection="J1.pin65" />
    <netlabel net="GND" connection="J1.pin68" />
    <netlabel net="GND" connection="J1.pin71" />
    <netlabel net="GND" connection="J1.pin74" />
    <netlabel net="GND" connection="U1.pin12" />
    <netlabel net="GND" connection="U1.pin18" />
    <netlabel net="GND" connection="U1.pin63" />
    <netlabel net="GND" connection="U3.pin4" />

    {/* Crystal to MCU Connections */}
    <netlabel net="HSE_IN" connection="U1.pin5" />
    <netlabel net="HSE_OUT" connection="U1.pin6" />
    <netlabel net="LSE_IN" connection="U1.pin3" />
    <netlabel net="LSE_OUT" connection="U1.pin4" />

    {/* SPI Flash Connections */}
    <netlabel net="FLASH_CS" connection="U3.pin1" />
    <netlabel net="FLASH_CS" connection="U1.pin24" />
    <netlabel net="FLASH_MISO" connection="U3.pin2" />
    <netlabel net="FLASH_MISO" connection="U1.pin22" />
    <netlabel net="FLASH_MOSI" connection="U3.pin5" />
    <netlabel net="FLASH_MOSI" connection="U1.pin23" />
    <netlabel net="FLASH_SCK" connection="U3.pin6" />
    <netlabel net="FLASH_SCK" connection="U1.pin21" />

    {/* SDIO Connections */}
    <netlabel net="SDIO_D0" connection="J1.pin23" />
    <netlabel net="SDIO_D0" connection="U1.pin39" />
    <netlabel net="SDIO_D1" connection="J1.pin22" />
    <netlabel net="SDIO_D1" connection="U1.pin40" />
    <netlabel net="SDIO_D2" connection="J1.pin21" />
    <netlabel net="SDIO_D2" connection="U1.pin51" />
    <netlabel net="SDIO_D3" connection="J1.pin20" />
    <netlabel net="SDIO_D3" connection="U1.pin52" />
    <netlabel net="SDIO_CMD" connection="J1.pin24" />
    <netlabel net="SDIO_CMD" connection="U1.pin54" />
    <netlabel net="SDIO_CLK" connection="J1.pin25" />
    <netlabel net="SDIO_CLK" connection="U1.pin53" />

    {/* I2C Connections */}
    <netlabel net="I2C_SDA" connection="J1.pin27" />
    <netlabel net="I2C_SDA" connection="U1.pin58" />
    <netlabel net="I2C_SCL" connection="J1.pin28" />
    <netlabel net="I2C_SCL" connection="U1.pin59" />

    {/* UART1 Connections */}
    <netlabel net="UART1_TX" connection="J1.pin33" />
    <netlabel net="UART1_TX" connection="U1.pin42" />
    <netlabel net="UART1_RX" connection="J1.pin34" />
    <netlabel net="UART1_RX" connection="U1.pin43" />

    {/* SWD Connections */}
    <netlabel net="SWDIO" connection="J1.pin45" />
    <netlabel net="SWDIO" connection="U1.pin46" />
    <netlabel net="SWCLK" connection="J1.pin44" />
    <netlabel net="SWCLK" connection="U1.pin49" />

    {/* Reset Connection */}
    <netlabel net="RESET" connection="J1.pin12" />
    <netlabel net="RESET" connection="U1.pin7" />

    {/* SPI from MicroMod (for external devices) */}
    <netlabel net="SPI_COPI" connection="J1.pin19" />
    <netlabel net="SPI_COPI" connection="U1.pin23" />
    <netlabel net="SPI_CIPO" connection="J1.pin18" />
    <netlabel net="SPI_CIPO" connection="U1.pin22" />
    <netlabel net="SPI_SCK" connection="J1.pin17" />
    <netlabel net="SPI_SCK" connection="U1.pin21" />
    <netlabel net="SPI_CS" connection="J1.pin16" />
    <netlabel net="SPI_CS" connection="U1.pin25" />

    {/* RTC Battery Backup */}
    <netlabel net="RTC_3V" connection="J1.pin15" />
    <netlabel net="RTC_3V" connection="U1.pin1" />

    {/* GPIO Mappings */}
    <netlabel net="G0" connection="J1.pin54" />
    <netlabel net="G0" connection="U1.pin14" />
    <netlabel net="G1" connection="J1.pin55" />
    <netlabel net="G1" connection="U1.pin15" />
    <netlabel net="G2" connection="J1.pin57" />
    <netlabel net="G2" connection="U1.pin16" />
    <netlabel net="G3" connection="J1.pin58" />
    <netlabel net="G3" connection="U1.pin17" />
    <netlabel net="G4" connection="J1.pin60" />
    <netlabel net="G4" connection="U1.pin20" />
    <netlabel net="G5" connection="J1.pin61" />
    <netlabel net="G5" connection="U1.pin26" />

    {/* Analog Pins */}
    <netlabel net="A0" connection="J1.pin47" />
    <netlabel net="A0" connection="U1.pin8" />
    <netlabel net="A1" connection="J1.pin48" />
    <netlabel net="A1" connection="U1.pin9" />

    {/* PWM Pins */}
    <netlabel net="PWM0" connection="J1.pin50" />
    <netlabel net="PWM0" connection="U1.pin37" />
    <netlabel net="PWM1" connection="J1.pin51" />
    <netlabel net="PWM1" connection="U1.pin38" />

    {/* Silkscreen Text - Top layer */}
    <silkscreentext
      text="STM32F405"
      pcbX={18}
      pcbY={11.8}
      pcbRotation={90}
      fontSize="1.6mm"
      layer="top"
    />
    <silkscreentext
      text="STAT"
      pcbX={20.5}
      pcbY={19.5}
      fontSize="0.8mm"
      layer="top"
    />

    {/* Silkscreen Text - Bottom layer */}
    <silkscreentext
      text="sparkfun"
      pcbX={7}
      pcbY={18}
      fontSize="3mm"
      layer="bottom"
    />
    <silkscreentext
      text="STM32 MicroMod"
      pcbX={8}
      pcbY={5}
      fontSize="1.5mm"
      layer="bottom"
    />

    {/* Schematic Notes */}
    <schematictext
      text="VDD Range: 1.8 - 3.6V"
      schX={-15}
      schY={-10}
      fontSize={0.3}
      color="gray"
    />
    <schematictext
      text="C8-C10 should be placed near VDDA"
      schX={-15}
      schY={-11}
      fontSize={0.25}
      color="gray"
    />
    <schematictext
      text="C11-C14 should be placed near VDD pins"
      schX={-15}
      schY={-12}
      fontSize={0.25}
      color="gray"
    />
  </board>
)
