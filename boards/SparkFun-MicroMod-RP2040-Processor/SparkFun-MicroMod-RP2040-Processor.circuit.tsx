import { RP2040 } from "./RP2040"
import { W25Q128 } from "./W25Q128"
import { MicroModEdge } from "./MicroModEdge"
import { sel } from "@tscircuit/core"

const net: any = sel.net

export const SparkFunMicroModRP2040 = () => (
  <board width="22mm" height="22mm">
    <MicroModEdge
      name="J1"
      schX={40}
      schY={0}
      pcbX={0}
      pcbY={-9.5}
      connections={{
        // Power & System
        "2": net.V3V3,
        "74": net.V3V3,
        "1": net.GND,
        "7": net.GND,
        "33": net.GND,
        "36": net.GND,
        "39": net.GND,
        "45": net.GND,
        "75": net.GND,

        "6": net.RESET,
        "11": net.BOOT,

        // USB
        "3": net.USB_DP,
        "5": net.USB_DN,
        "9": net.USB_VIN,

        // UART
        "17": net.UART_TX1,
        "19": net.UART_RX1,
        "22": net.UART_TX2,
        "20": net.UART_RX2,

        // SWD
        "23": net.SWDIO,
        "21": net.SWDCK,

        // I2C
        "12": net.I2C_SDA,
        "14": net.I2C_SCL,
        "16": net.UART_TX2,

        // G-Pins / SPI
        "71": net.G6,
        "69": net.G7,
        "48": net.G4,
        "73": net.G5,

        // Audio / I2S
        "50": net.AUD_BCLK,
        "52": net.AUD_LRCLK,
        "56": net.AUD_OUT,
        "54": net.AUD_IN,
        "58": net.AUD_MCLK,
        "47": net.AUD_MCLK, // Shared net

        // ADC
        "34": net.ADC0,
        "38": net.ADC1,
        "65": net.G9,
        "49": net.BATT_VIN_DIV3,

        // PWM
        "32": net.PWM0,

        // SDIO
        "64": net.SPI_SDI1,
        "66": net.AUD_IN,
        "60": net.SPI_SCK1,
        "62": net.SPI_SDO1,
        "70": net.UART_RX2,
        "68": net.AUD_OUT,

        // G-Pins
        "40": net.G0,
        "42": net.G1,
        "44": net.G2,
        "46": net.G3,

        // Misc
        "63": net.G10,
      }}
    />

    <RP2040
      name="U3"
      schX={0}
      schY={0}
      connections={{
        // GPIO
        "2": net.UART_TX1, // GPIO0
        "3": net.UART_RX1,
        "4": net.AUD_LRCLK,
        "5": net.AUD_BCLK,
        "6": net.I2C_SDA,
        "7": net.I2C_SCL,
        "8": net.D0,
        "9": net.D1,
        "11": net.UART_TX2, // GPIO8
        "12": net.UART_RX2, // GPIO9
        "13": net.AUD_OUT,
        "14": net.AUD_IN,
        "15": net.SPI_SDI1, // GPIO12
        "16": net.PWM0, // GPIO13
        "17": net.SPI_SCK1, // GPIO14
        "18": net.SPI_SDO1, // GPIO15
        "27": net.G0, // GPIO16
        "28": net.G1,
        "29": net.G2,
        "30": net.G3,
        "31": net.G4,
        "32": net.G5,
        "34": net.G6,
        "35": net.G7,
        "36": net.AUD_MCLK, // GPIO24
        "37": net.LED_STAT, // GPIO25 (Status LED)
        "38": net.ADC0, // GPIO26/ADC0
        "39": net.ADC1, // GPIO27/ADC1
        "40": net.G9, // ADC2
        "41": net.BATT_VIN_DIV3, // ADC3

        // System
        "26": net.RESET, // RUN
        "19": net.GND, // TESTEN
        "25": net.SWDIO,
        "24": net.SWDCK, // SWCLK
        "20": net.XIN,
        "21": net.XOUT,

        // Flash (QSPI)
        "56": net.QSPI_SS, // PAD 56 is QSPI_!CS!
        "52": net.QSPI_SCLK,
        "53": net.QSPI_SD0,
        "55": net.QSPI_SD1,
        "54": net.QSPI_SD2,
        "51": net.QSPI_SD3,

        // USB
        "46": net.USB_DN,
        "47": net.USB_DP,

        // Power (All VDDIO/ADC_VDD/USB_VDD/LDO_IN)
        "1": net.V3V3,
        "10": net.V3V3,
        "22": net.V3V3,
        "33": net.V3V3,
        "42": net.V3V3,
        "49": net.V3V3,
        "43": net.V3V3, // ADC_VDD
        "44": net.V3V3, // LDO_IN
        "48": net.V3V3, // USB_VDD
        "57": net.GND, // EPAD
        "23": net.V1V1,
        "50": net.V1V1,
      }}
    />

    <W25Q128
      name="U1"
      schX={-40} schY={0}
      connections={{
        nCS: net.QSPI_SS,
        CLK: net.QSPI_SCLK,
        DI: net.QSPI_SD0,
        DO: net.QSPI_SD1,
        nWP: net.QSPI_SD2,
        nHOLD: net.QSPI_SD3,
        VCC: net.V3V3,
        GND: net.GND,
      }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0402"
      schX={-30} schY={10}
      connections={{ pin1: net.QSPI_SS, pin2: net.V3V3 }}
    />
    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      schX={-30} schY={15}
      connections={{ pin1: net.RESET, pin2: net.V3V3 }}
    />

    {/* Status LED */}
    <resistor
      name="R_STAT"
      resistance="1k"
      footprint="0402"
      schX={20} schY={-30}
      connections={{ pin1: net.LED_STAT, pin2: net.LED_ANODE }}
    />
    <led
      name="D_STAT"
      footprint="0603"
      color="green"
      schX={25} schY={-30}
      connections={{
        anode: net.LED_ANODE,
        cathode: net.GND
      }}
    />

    {/* Decoupling Caps Row 1 */}
    <capacitor name="C1" capacitance="2.2uF" footprint="0402" schX={-15} schY={30} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C2" capacitance="0.1uF" footprint="0402" schX={-10} schY={30} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C3" capacitance="2.2uF" footprint="0402" schX={-5} schY={30} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C4" capacitance="2.2uF" footprint="0402" schX={0} schY={30} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C5" capacitance="0.1uF" footprint="0402" schX={5} schY={30} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C6" capacitance="0.1uF" footprint="0402" schX={10} schY={30} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C7" capacitance="0.1uF" footprint="0402" schX={15} schY={30} connections={{ pin1: net.V3V3, pin2: net.GND }} />

    {/* Decoupling Caps Row 2 */}
    <capacitor name="C8" capacitance="0.1uF" footprint="0402" schX={-15} schY={40} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C9" capacitance="0.1uF" footprint="0402" schX={-10} schY={40} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C10" capacitance="0.1uF" footprint="0402" schX={-5} schY={40} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C12" capacitance="0.1uF" footprint="0402" schX={0} schY={40} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C14" capacitance="0.1uF" footprint="0402" schX={5} schY={40} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C15" capacitance="2.2uF" footprint="0402" schX={10} schY={40} connections={{ pin1: net.V3V3, pin2: net.GND }} />
    <capacitor name="C_Reg" capacitance="2.2uF" footprint="0402" schX={15} schY={40} connections={{ pin1: net.V1V1, pin2: net.GND }} />

    {/* Crystal */}
    <capacitor name="C11" capacitance="15pF" footprint="0402" schX={-25} schY={-30} connections={{ pin1: net.XIN, pin2: net.GND }} />
    <capacitor name="C13" capacitance="15pF" footprint="0402" schX={-25} schY={-35} connections={{ pin1: net.XOUT, pin2: net.GND }} />
    <chip
      name="Y1"
      footprint="crystal_smd"
      schX={-20} schY={-32}
      connections={{
        "1": net.XIN,
        "2": net.XOUT,
      }}
    />
  </board>
)

export default SparkFunMicroModRP2040
