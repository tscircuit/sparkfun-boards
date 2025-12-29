import { RP2040 } from "./RP2040"
import { W25Q128 } from "./W25Q128"
import { MicroModEdge } from "./MicroModEdge"
import { sel } from "@tscircuit/core"
import type { ChipProps } from "@tscircuit/props"

const net: any = sel.net

export const SparkFunMicroModRP2040 = () => (
  <board width="22mm" height="22mm">

    {/* MicroMod Edge Connector (J1) - Bottom Center */}
    {/* Eagle (11, 0) -> Tsci (0, -11) */}
    <MicroModEdge
      name="J1"
      pcbX={0} pcbY={-11} pcbRotation="0deg" layer="top"
      connections={{
        // Power
        "2": net.V3V3, "74": net.V3V3,
        "1": net.GND, "7": net.GND, "33": net.GND, "36": net.GND, "39": net.GND, "45": net.GND, "75": net.GND,
        "6": net.RESET, "11": net.BOOT,
        // USB (Through Mux)
        "3": net.USB_DP, "5": net.USB_DN, "9": net.USB_VIN,
        // UART
        "17": net.UART_TX1, "19": net.UART_RX1,
        "22": net.UART_TX2, "20": net.UART_RX2,
        // SWD
        "23": net.SWDIO, "21": net.SWDCK,
        // I2C
        "12": net.I2C_SDA, "14": net.I2C_SCL, "16": net.UART_TX2,
        // SPI / G-Pins
        "71": net.G6, "69": net.G7, "48": net.G4, "73": net.G5,
        // Audio
        "50": net.AUD_BCLK, "52": net.AUD_LRCLK, "56": net.AUD_OUT, "54": net.AUD_IN, "58": net.AUD_MCLK, "47": net.AUD_MCLK,
        // ADC
        "34": net.ADC0, "38": net.ADC1, "65": net.G9, "49": net.BATT_VIN_DIV3,
        // PWM
        "32": net.PWM0,
        // SDIO
        "64": net.SPI_SDI1, "66": net.AUD_IN, "60": net.SPI_SCK1, "62": net.SPI_SDO1, "70": net.UART_RX2, "68": net.AUD_OUT,
        // G-Pins
        "40": net.G0, "42": net.G1, "44": net.G2, "46": net.G3, "63": net.G10,
      }}
    />

    {/* RP2040 (U3) - Top Layer */}
    {/* Eagle (11, 12) -> Tsci (0, 1) */}
    <RP2040
      name="U3"
      pcbX={0} pcbY={1} pcbRotation="-90deg" layer="top"
      connections={{
        // GPIO
        "2": net.UART_TX1, "3": net.UART_RX1, "4": net.AUD_LRCLK, "5": net.AUD_BCLK,
        "6": net.I2C_SDA, "7": net.I2C_SCL, "8": net.D0, "9": net.D1,
        "11": net.UART_TX2, "12": net.UART_RX2, "13": net.AUD_OUT, "14": net.AUD_IN,
        "15": net.SPI_SDI1, "16": net.PWM0, "17": net.SPI_SCK1, "18": net.SPI_SDO1,
        "27": net.G0, "28": net.G1, "29": net.G2, "30": net.G3, "31": net.G4,
        "32": net.G5, "34": net.G6, "35": net.G7, "36": net.AUD_MCLK, "37": net.G10,
        "38": net.ADC0, "39": net.ADC1, "40": net.G9, "41": net.BATT_VIN_DIV3,
        // System
        "26": net.RESET, "19": net.GND, "25": net.SWDIO, "24": net.SWDCK, "20": net.XIN, "21": net.XOUT,
        // Flash (QSPI)
        "56": net.QSPI_SS, "52": net.QSPI_SCLK, "53": net.QSPI_SD0, "55": net.QSPI_SD1, "54": net.QSPI_SD2, "51": net.QSPI_SD3,
        // USB - Connects to Mux U2
        "46": net.RP_DN, "47": net.RP_DP,
        // Power
        "1": net.V3V3, "10": net.V3V3, "22": net.V3V3, "33": net.V3V3, "42": net.V3V3, "49": net.V3V3,
        "43": net.V3V3, "44": net.V3V3, "48": net.V3V3, "57": net.GND, "23": net.V1V1, "50": net.V1V1
      }}
    />

    {/* Flash Memory (U1) - Bottom Layer */}
    {/* Eagle (11, 16) -> Tsci (0, 5) */}
    <W25Q128
      name="U1"
      pcbX={0} pcbY={5} pcbRotation="180deg" layer="bottom"
      connections={{
        nCS: net.QSPI_SS, CLK: net.QSPI_SCLK, DI: net.QSPI_SD0, DO: net.QSPI_SD1,
        nWP: net.QSPI_SD2, nHOLD: net.QSPI_SD3, VCC: net.V3V3, GND: net.GND
      }}
    />

    {/* USB Mux FSUSB30 (U2) - Bottom Layer */}
    {/* Eagle (19, 10) -> Tsci (8, -1) */}
    <chip
      name="U2"
      footprint="msop10"
      pcbX={8} pcbY={-1} pcbRotation="-90deg" layer="bottom"
      pinLabels={{
        "1": "D2+", "2": "D2-", "3": "D1+", "4": "D1-", "5": "VCC",
        "6": "D-", "7": "OE", "8": "D+", "9": "S", "10": "GND"
      }}
      connections={{
        "1": net.USB_DP, "2": net.USB_DN, // Host
        "3": net.USBHOST_DP, "4": net.USBHOST_DN,
        "5": net.V3V3,
        "6": net.RP_DN, "7": net.GND, "8": net.RP_DP,
        "9": net.USB_MUX_SIG, // Select
        "10": net.GND
      }}
    />

    {/* Crystal (Y1) - Top */}
    {/* Eagle (3, 12) -> Tsci (-8, 1) */}
    <chip
      name="Y1"
      footprint="crystal_3.2x2.5"
      pcbX={-8} pcbY={1} pcbRotation="-90deg" layer="top"
      pinLabels={{ "1": "1", "2": "2", "3": "3", "4": "4" }}
      connections={{ "1": net.XIN, "2": net.GND, "3": net.XOUT, "4": net.GND }}
    />

    {/* Status LED (D2) - Top */}
    {/* Eagle (3, 21) -> Tsci (-8, 10) */}
    <diode
      name="D2"
      footprint="0603"
      pcbX={-8} pcbY={10} pcbRotation="180deg" layer="top"
      connections={{ anode: net.LED_ANODE, cathode: net.GND }}
    />
    <resistor
      name="R1" resistance="1k" footprint="0402"
      pcbX={-5} pcbY={10} pcbRotation="0deg" layer="top"
      connections={{ pin1: net.G10, pin2: net.LED_ANODE }}
    />

    {/* Decoupling Capacitors & Resistors */}

    {/* Bottom Layer Passives */}
    <capacitor name="C1" capacitance="2.2uF" footprint="0402" pcbX={5} pcbY={-4} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C2" capacitance="0.1uF" footprint="0402" pcbX={8} pcbY={-5} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C3" capacitance="2.2uF" footprint="0402" pcbX={5} pcbY={3} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.V1V1, pin2: net.GND }} />
    <capacitor name="C5" capacitance="0.1uF" footprint="0402" pcbX={-5} pcbY={1} pcbRotation="0deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C7" capacitance="0.1uF" footprint="0402" pcbX={2.6} pcbY={-4.3} pcbRotation="-90deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C8" capacitance="0.1uF" footprint="0402" pcbX={5} pcbY={-2} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C9" capacitance="0.1uF" footprint="0402" pcbX={-1} pcbY={-4.5} pcbRotation="-90deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C10" capacitance="0.1uF" footprint="0402" pcbX={5} pcbY={2} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C12" capacitance="0.1uF" footprint="0402" pcbX={5} pcbY={-1} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C14" capacitance="0.1uF" footprint="0402" pcbX={-5} pcbY={0} pcbRotation="0deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C15" capacitance="2.2uF" footprint="0402" pcbX={5} pcbY={5} pcbRotation="-90deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C29" capacitance="0.1uF" footprint="0402" pcbX={4} pcbY={5} pcbRotation="-90deg" layer="bottom" connections={{ pin1: net.V3V3, pin2: net.GND }} />

    {/* Resistors - Bottom */}
    <resistor name="R2" resistance="200" footprint="0402" pcbX={5} pcbY={-3} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.ADC_VDD, pin2: net.V3V3 }} />
    <resistor name="R4" resistance="10k" footprint="0402" pcbX={-6} pcbY={4} pcbRotation="90deg" layer="bottom" connections={{ pin1: net.QSPI_SS, pin2: net.V3V3 }} />
    <resistor name="R5" resistance="10k" footprint="0402" pcbX={7} pcbY={3} pcbRotation="180deg" layer="bottom" connections={{ pin1: net.GND, pin2: net.USB_MUX_SIG }} />
    <resistor name="R9" resistance="1k" footprint="0402" pcbX={-5} pcbY={4} pcbRotation="90deg" layer="bottom" connections={{ pin1: net.QSPI_SS, pin2: net.BOOT }} />
    <resistor name="R10" resistance="27" footprint="0402" pcbX={5} pcbY={1} pcbRotation="0deg" layer="bottom" connections={{ pin1: net.RP_DP, pin2: net.USB_DP }} />
    <resistor name="R11" resistance="27" footprint="0402" pcbX={5} pcbY={0} pcbRotation="0deg" layer="bottom" connections={{ pin1: net.RP_DN, pin2: net.USB_DN }} />
    <resistor name="R18" resistance="1k" footprint="0402" pcbX={9} pcbY={3} pcbRotation="0deg" layer="bottom" connections={{ pin1: net.USB_VIN, pin2: net.USB_MUX_SIG }} />

    {/* Top Layer Passives */}
    <capacitor name="C4" capacitance="2.2uF" footprint="0402" pcbX={3} pcbY={6} pcbRotation="90deg" layer="top" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C6" capacitance="0.1uF" footprint="0402" pcbX={-1} pcbY={6} pcbRotation="90deg" layer="top" connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C11" capacitance="15pF" footprint="0402" pcbX={-8} pcbY={-1} pcbRotation="0deg" layer="top" connections={{ pin1: net.XIN, pin2: net.GND }} />
    <capacitor name="C13" capacitance="15pF" footprint="0402" pcbX={-8} pcbY={3} pcbRotation="0deg" layer="top" connections={{ pin1: net.XOUT, pin2: net.GND }} />
    <resistor name="R8" resistance="1k" footprint="0402" pcbX={-6} pcbY={1} pcbRotation="90deg" layer="top" connections={{ pin1: net.XIN, pin2: net.XOUT }} />

  </board>
)

export default SparkFunMicroModRP2040
