import { sel } from "tscircuit"

/**
 * SparkFun MicroMod RP2040 Processor Board
 *
 * A low-cost, high-performance processor board featuring the Raspberry Pi RP2040
 * microcontroller with M.2 MicroMod connector interface.
 *
 * Key features:
 * - Dual Cortex M0+ processors, up to 133 MHz
 * - 264 kB embedded SRAM
 * - 128Mbit/16MB external flash (W25Q128JVPIM)
 * - M.2 MicroMod connector (E-key compatible)
 * - Status LED on GPIO25
 *
 * @see https://www.sparkfun.com/sparkfun-micromod-rp2040-processor.html
 * @see https://learn.sparkfun.com/tutorials/micromod-rp2040-processor-board-hookup-guide
 */

// MicroMod M.2 connector pin labels (75 positions, E-key)
// Based on MicroMod Interface v1.0 specification
const micromodPinLabels = {
  // Power pins
  pin1: ["GND"],
  pin2: ["GND"],
  pin3: ["3V3"],
  pin4: ["3V3"],
  // USB
  pin5: ["USB_DN"],
  pin6: ["USB_DP"],
  // Reset and Boot
  pin7: ["RESET"],
  pin8: ["BOOT"],
  // I2C0
  pin9: ["I2C_SDA"],
  pin10: ["I2C_SCL"],
  // SPI
  pin11: ["SPI_CIPO"],
  pin12: ["SPI_COPI"],
  pin13: ["SPI_SCK"],
  pin14: ["SPI_CS"],
  // UART
  pin15: ["UART_TX1"],
  pin16: ["UART_RX1"],
  // Analog
  pin17: ["A0"],
  pin18: ["A1"],
  // Digital/PWM
  pin19: ["D0", "PWM0"],
  pin20: ["D1", "PWM1"],
  pin21: ["G0"],
  pin22: ["G1"],
  pin23: ["G2"],
  pin24: ["G3"],
  pin25: ["G4"],
  pin26: ["G5"],
  pin27: ["G6"],
  // SWD Debug
  pin28: ["SWDIO"],
  pin29: ["SWCLK"],
}

export default () => (
  <board width="22mm" height="22mm">
    {/* RP2040 Microcontroller - Main processor */}
    <chip
      name="U1"
      footprint="qfn56_p0.4_ep3.2x3.2mm"
      pinLabels={{
        pin1: ["GPIO0"],
        pin2: ["GPIO1"],
        pin3: ["GPIO2"],
        pin4: ["GPIO3"],
        pin5: ["GPIO4"],
        pin6: ["GPIO5"],
        pin7: ["GPIO6"],
        pin8: ["GPIO7"],
        pin9: ["GPIO8"],
        pin10: ["GPIO9"],
        pin11: ["GPIO10"],
        pin12: ["GPIO11"],
        pin13: ["GPIO12"],
        pin14: ["GPIO13"],
        pin15: ["GPIO14"],
        pin16: ["GPIO15"],
        pin17: ["GPIO16"],
        pin18: ["GPIO17"],
        pin19: ["GPIO18"],
        pin20: ["GPIO19"],
        pin21: ["GPIO20"],
        pin22: ["GPIO21"],
        pin23: ["GPIO22"],
        pin24: ["GPIO23"],
        pin25: ["GPIO24"],
        pin26: ["GPIO25"], // Status LED
        pin27: ["GPIO26", "ADC0"],
        pin28: ["GPIO27", "ADC1"],
        pin29: ["GPIO28", "ADC2"],
        pin30: ["GPIO29", "ADC3"],
        pin31: ["USB_DM"],
        pin32: ["USB_DP"],
        pin33: ["XIN"],
        pin34: ["XOUT"],
        pin35: ["SWCLK"],
        pin36: ["SWDIO"],
        pin37: ["RUN"],
        pin38: ["QSPI_SD3"],
        pin39: ["QSPI_SCLK"],
        pin40: ["QSPI_SD0"],
        pin41: ["QSPI_SD1"],
        pin42: ["QSPI_SD2"],
        pin43: ["QSPI_SS"],
        pin44: ["DVDD"],
        pin45: ["VREG_VIN"],
        pin46: ["VREG_VOUT"],
        pin47: ["USB_VDD"],
        pin48: ["IOVDD"],
        pin49: ["GND"],
      }}
      pcbX={0}
      pcbY={5}
      schX={0}
      schY={0}
    />

    {/* 12MHz Crystal Oscillator */}
    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="18pF"
      footprint="crystal_3.2x2.5mm"
      pcbX={-5}
      pcbY={5}
      schX={-5}
      schY={0}
    />

    {/* W25Q128JVPIM - 128Mbit/16MB External Flash */}
    <chip
      name="U2"
      footprint="soic8"
      pinLabels={{
        pin1: ["CS"],
        pin2: ["DO", "IO1"],
        pin3: ["WP", "IO2"],
        pin4: ["GND"],
        pin5: ["DI", "IO0"],
        pin6: ["CLK"],
        pin7: ["HOLD", "IO3"],
        pin8: ["VCC"],
      }}
      pcbX={5}
      pcbY={5}
      schX={5}
      schY={0}
    />

    {/* Status LED (connected to GPIO25) */}
    <led
      name="LED1"
      color="blue"
      footprint="led0603"
      pcbX={8}
      pcbY={-5}
      schX={8}
      schY={-3}
    />

    {/* Current limiting resistor for LED */}
    <resistor
      name="R1"
      resistance="330"
      footprint="0402"
      pcbX={6}
      pcbY={-5}
      schX={6}
      schY={-3}
    />

    {/* M.2 Edge Connector (MicroMod interface) */}
    <jumper
      name="J1"
      footprint="soic75_p0.5mm"
      pinLabels={micromodPinLabels}
      pcbX={0}
      pcbY={-8}
      schX={0}
      schY={-8}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "GND",
            "3V3",
            "USB_DN",
            "USB_DP",
            "RESET",
            "BOOT",
            "I2C_SDA",
            "I2C_SCL",
            "SPI_CIPO",
            "SPI_COPI",
            "SPI_SCK",
            "SPI_CS",
            "UART_TX1",
            "UART_RX1",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "A0",
            "A1",
            "D0",
            "D1",
            "G0",
            "G1",
            "G2",
            "G3",
            "G4",
            "G5",
            "G6",
            "SWDIO",
            "SWCLK",
          ],
        },
      }}
    />

    {/* Decoupling capacitors */}
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={3}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={3}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      pcbX={-3}
      pcbY={7}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="0402"
      pcbX={3}
      pcbY={7}
    />

    {/* Net labels for power */}
    <netlabel
      net="GND"
      schX={-10}
      schY={-5}
      anchorSide="right"
      connectsTo={sel.J1.pin1}
    />
    <netlabel
      net="VCC"
      schX={-10}
      schY={-3}
      anchorSide="right"
      connectsTo={sel.J1.pin3}
    />

    {/* Silkscreen text */}
    <silkscreentext
      text="MicroMod"
      layer="top"
      fontSize={0.8}
      pcbX={0}
      pcbY={10}
    />
    <silkscreentext
      text="RP2040"
      layer="top"
      fontSize={0.8}
      pcbX={0}
      pcbY={9}
    />
    <silkscreentext
      text="SparkFun"
      layer="bottom"
      fontSize={0.6}
      pcbX={0}
      pcbY={10}
    />
  </board>
)
