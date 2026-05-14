import { RP2040 } from "./RP2040"
import { W25Q128 } from "./W25Q128"
import { MicroModEdge } from "./MicroModEdge"
import type { ChipProps } from "@tscircuit/props"

export const SparkFunMicroModRP2040 = () => (
  <board width="22mm" height="22mm">
    {/* MicroMod Edge Connector (J1) - Bottom Center */}
    {/* Eagle (11, 0) -> Tsci (0, -11) */}
    <MicroModEdge
      name="J1"
      pcbX={0}
      pcbY={-11}
      pcbRotation="0deg"
      layer="top"
      connections={{
        // Power
        "2": "V3V3",
        "74": "V3V3",
        "1": "GND",
        "7": "GND",
        "33": "GND",
        "36": "GND",
        "39": "GND",
        "45": "GND",
        "75": "GND",
        "6": "RESET",
        "11": "BOOT",
        // USB (Through Mux)
        "3": "USB_DP",
        "5": "USB_DN",
        "9": "USB_VIN",
        // UART
        "17": "UART_TX1",
        "19": "UART_RX1",
        "22": "UART_TX2",
        "20": "UART_RX2",
        // SWD
        "23": "SWDIO",
        "21": "SWDCK",
        // I2C
        "12": "I2C_SDA",
        "14": "I2C_SCL",
        "16": "UART_TX2",
        // SPI / G-Pins
        "71": "G6",
        "69": "G7",
        "48": "G4",
        "73": "G5",
        // Audio
        "50": "AUD_BCLK",
        "52": "AUD_LRCLK",
        "56": "AUD_OUT",
        "54": "AUD_IN",
        "58": "AUD_MCLK",
        "47": "AUD_MCLK",
        // ADC
        "34": "ADC0",
        "38": "ADC1",
        "65": "G9",
        "49": "BATT_VIN_DIV3",
        // PWM
        "32": "PWM0",
        // SDIO
        "64": "SPI_SDI1",
        "66": "AUD_IN",
        "60": "SPI_SCK1",
        "62": "SPI_SDO1",
        "70": "UART_RX2",
        "68": "AUD_OUT",
        // G-Pins
        "40": "G0",
        "42": "G1",
        "44": "G2",
        "46": "G3",
        "63": "G10",
      }}
    />

    {/* RP2040 (U3) - Top Layer */}
    {/* Eagle (11, 12) -> Tsci (0, 1) */}
    <RP2040
      name="U3"
      pcbX={0}
      pcbY={1}
      pcbRotation="-90deg"
      layer="top"
      connections={{
        // GPIO
        "2": "UART_TX1",
        "3": "UART_RX1",
        "4": "AUD_LRCLK",
        "5": "AUD_BCLK",
        "6": "I2C_SDA",
        "7": "I2C_SCL",
        "8": "D0",
        "9": "D1",
        "11": "UART_TX2",
        "12": "UART_RX2",
        "13": "AUD_OUT",
        "14": "AUD_IN",
        "15": "SPI_SDI1",
        "16": "PWM0",
        "17": "SPI_SCK1",
        "18": "SPI_SDO1",
        "27": "G0",
        "28": "G1",
        "29": "G2",
        "30": "G3",
        "31": "G4",
        "32": "G5",
        "34": "G6",
        "35": "G7",
        "36": "AUD_MCLK",
        "37": "G10",
        "38": "ADC0",
        "39": "ADC1",
        "40": "G9",
        "41": "BATT_VIN_DIV3",
        // System
        "26": "RESET",
        "19": "GND",
        "25": "SWDIO",
        "24": "SWDCK",
        "20": "XIN",
        "21": "XOUT",
        // Flash (QSPI)
        "56": "QSPI_SS",
        "52": "QSPI_SCLK",
        "53": "QSPI_SD0",
        "55": "QSPI_SD1",
        "54": "QSPI_SD2",
        "51": "QSPI_SD3",
        // USB - Connects to Mux U2
        "46": "RP_DN",
        "47": "RP_DP",
        // Power
        "1": "V3V3",
        "10": "V3V3",
        "22": "V3V3",
        "33": "V3V3",
        "42": "V3V3",
        "49": "V3V3",
        "43": "V3V3",
        "44": "V3V3",
        "48": "V3V3",
        "57": "GND",
        "23": "V1V1",
        "50": "V1V1",
      }}
    />

    {/* Flash Memory (U1) - Bottom Layer */}
    {/* Eagle (11, 16) -> Tsci (0, 5) */}
    <W25Q128
      name="U1"
      pcbX={0}
      pcbY={5}
      pcbRotation="180deg"
      layer="bottom"
      connections={{
        nCS: "QSPI_SS",
        CLK: "QSPI_SCLK",
        DI: "QSPI_SD0",
        DO: "QSPI_SD1",
        nWP: "QSPI_SD2",
        nHOLD: "QSPI_SD3",
        VCC: "V3V3",
        GND: "GND",
      }}
    />

    {/* USB Mux FSUSB30 (U2) - Bottom Layer */}
    {/* Eagle (19, 10) -> Tsci (8, -1) */}
    <chip
      name="U2"
      footprint="msop10"
      pcbX={8}
      pcbY={-1}
      pcbRotation="-90deg"
      layer="bottom"
      pinLabels={{
        "1": "D2+",
        "2": "D2-",
        "3": "D1+",
        "4": "D1-",
        "5": "VCC",
        "6": "D-",
        "7": "OE",
        "8": "D+",
        "9": "S",
        "10": "GND",
      }}
      connections={{
        "1": "USB_DP",
        "2": "USB_DN", // Host
        "3": "USBHOST_DP",
        "4": "USBHOST_DN",
        "5": "V3V3",
        "6": "RP_DN",
        "7": "GND",
        "8": "RP_DP",
        "9": "USB_MUX_SIG", // Select
        "10": "GND",
      }}
    />

    {/* Crystal (Y1) - Top */}
    {/* Eagle (3, 12) -> Tsci (-8, 1) */}
    <chip
      name="Y1"
      footprint="crystal_3.2x2.5"
      pcbX={-8}
      pcbY={1}
      pcbRotation="-90deg"
      layer="top"
      pinLabels={{ "1": "1", "2": "2", "3": "3", "4": "4" }}
      connections={{ "1": "XIN", "2": "GND", "3": "XOUT", "4": "GND" }}
    />

    {/* Status LED (D2) - Top */}
    {/* Eagle (3, 21) -> Tsci (-8, 10) */}
    <diode
      name="D2"
      footprint="0603"
      pcbX={-8}
      pcbY={10}
      pcbRotation="180deg"
      layer="top"
      connections={{ anode: "LED_ANODE", cathode: "GND" }}
    />
    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={-5}
      pcbY={10}
      pcbRotation="0deg"
      layer="top"
      connections={{ pin1: "G10", pin2: "LED_ANODE" }}
    />

    {/* Decoupling Capacitors & Resistors */}

    {/* Bottom Layer Passives */}
    <capacitor
      name="C1"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={5}
      pcbY={-4}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={8}
      pcbY={-5}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C3"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={5}
      pcbY={3}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "V1V1", pin2: "GND" }}
    />
    <capacitor
      name="C5"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={-5}
      pcbY={1}
      pcbRotation="0deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C7"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={2.6}
      pcbY={-4.3}
      pcbRotation="-90deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C8"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={5}
      pcbY={-2}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C9"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={-1}
      pcbY={-4.5}
      pcbRotation="-90deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C10"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={5}
      pcbY={2}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C12"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={5}
      pcbY={-1}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C14"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={-5}
      pcbY={0}
      pcbRotation="0deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C15"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={5}
      pcbY={5}
      pcbRotation="-90deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C29"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={4}
      pcbY={5}
      pcbRotation="-90deg"
      layer="bottom"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />

    {/* Resistors - Bottom */}
    <resistor
      name="R2"
      resistance="200"
      footprint="0402"
      pcbX={5}
      pcbY={-3}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "ADC_VDD", pin2: "V3V3" }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0402"
      pcbX={-6}
      pcbY={4}
      pcbRotation="90deg"
      layer="bottom"
      connections={{ pin1: "QSPI_SS", pin2: "V3V3" }}
    />
    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      pcbX={7}
      pcbY={3}
      pcbRotation="180deg"
      layer="bottom"
      connections={{ pin1: "GND", pin2: "USB_MUX_SIG" }}
    />
    <resistor
      name="R9"
      resistance="1k"
      footprint="0402"
      pcbX={-5}
      pcbY={4}
      pcbRotation="90deg"
      layer="bottom"
      connections={{ pin1: "QSPI_SS", pin2: "BOOT" }}
    />
    <resistor
      name="R10"
      resistance="27"
      footprint="0402"
      pcbX={5}
      pcbY={1}
      pcbRotation="0deg"
      layer="bottom"
      connections={{ pin1: "RP_DP", pin2: "USB_DP" }}
    />
    <resistor
      name="R11"
      resistance="27"
      footprint="0402"
      pcbX={5}
      pcbY={0}
      pcbRotation="0deg"
      layer="bottom"
      connections={{ pin1: "RP_DN", pin2: "USB_DN" }}
    />
    <resistor
      name="R18"
      resistance="1k"
      footprint="0402"
      pcbX={9}
      pcbY={3}
      pcbRotation="0deg"
      layer="bottom"
      connections={{ pin1: "USB_VIN", pin2: "USB_MUX_SIG" }}
    />

    {/* Top Layer Passives */}
    <capacitor
      name="C4"
      capacitance="2.2uF"
      footprint="0402"
      pcbX={3}
      pcbY={6}
      pcbRotation="90deg"
      layer="top"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C6"
      capacitance="0.1uF"
      footprint="0402"
      pcbX={-1}
      pcbY={6}
      pcbRotation="90deg"
      layer="top"
      connections={{ pin1: "V3V3", pin2: "GND" }}
    />
    <capacitor
      name="C11"
      capacitance="15pF"
      footprint="0402"
      pcbX={-8}
      pcbY={-1}
      pcbRotation="0deg"
      layer="top"
      connections={{ pin1: "XIN", pin2: "GND" }}
    />
    <capacitor
      name="C13"
      capacitance="15pF"
      footprint="0402"
      pcbX={-8}
      pcbY={3}
      pcbRotation="0deg"
      layer="top"
      connections={{ pin1: "XOUT", pin2: "GND" }}
    />
    <resistor
      name="R8"
      resistance="1k"
      footprint="0402"
      pcbX={-6}
      pcbY={1}
      pcbRotation="90deg"
      layer="top"
      connections={{ pin1: "XIN", pin2: "XOUT" }}
    />
  </board>
)

export default SparkFunMicroModRP2040
