import type { ChipProps } from "@tscircuit/props"

/**
 * MicroMod M.2 Connector - standard 75-pin M.2 (Key-E) edge connector
 * Used on all SparkFun MicroMod Processor Boards
 * Pin numbering matches SparkFun MicroMod Interface v1.0
 */
const pinLabels = {
  pin1:  ["GND"],
  pin2:  ["3V3"],
  pin3:  ["USB_DP"],
  pin4:  ["RTC_3V_BATT"],
  pin5:  ["USB_DN"],
  pin6:  ["RESET"],
  pin7:  ["GND2"],
  pin8:  ["G11"],
  pin9:  ["USB_VIN"],
  pin10: ["D0"],
  pin11: ["BOOT"],
  pin12: ["I2C_SDA"],
  pin13: ["UART_RTS1"],
  pin14: ["I2C_SCL"],
  pin15: ["UART_CTS1"],
  pin16: ["I2C_INT"],
  pin17: ["UART_TX1"],
  pin18: ["D1"],
  pin19: ["UART_RX1"],
  pin20: ["UART_RX2"],
  pin21: ["SWDCK"],
  pin22: ["UART_TX2"],
  pin23: ["SWDIO"],
  pin31: ["Module_Key"],
  pin32: ["PWM0"],
  pin33: ["GND3"],
  pin34: ["A0"],
  pin35: ["USBHOST_DP"],
  pin36: ["GND4"],
  pin37: ["USBHOST_DN"],
  pin38: ["A1"],
  pin39: ["GND5"],
  pin40: ["G0"],
  pin41: ["CAN_RX"],
  pin42: ["G1"],
  pin43: ["CAN_TX"],
  pin44: ["G2"],
  pin45: ["GND6"],
  pin46: ["G3"],
  pin47: ["PWM1"],
  pin48: ["G4"],
  pin49: ["BATT_VIN3"],
  pin50: ["AUD_BCLK"],
  pin51: ["I2C_SDA1"],
  pin52: ["AUD_LRCLK"],
  pin53: ["I2C_SCL1"],
  pin54: ["AUD_IN"],
  pin55: ["SPI_CS"],
  pin56: ["AUD_OUT"],
  pin57: ["SPI_SCK"],
  pin58: ["AUD_MCLK"],
  pin59: ["SPI_POCI"],
  pin60: ["SDIO_SCK"],
  pin61: ["SPI_PICO"],
  pin62: ["SDIO_CMD"],
  pin63: ["G10"],
  pin64: ["SDIO_DATA0"],
  pin65: ["G9"],
  pin66: ["SDIO_DATA1"],
  pin67: ["G8"],
  pin68: ["SDIO_DATA2"],
  pin69: ["G7"],
  pin70: ["SDIO_DATA3"],
  pin71: ["G6"],
  pin72: ["RTC_3V"],
  pin73: ["G5"],
  pin74: ["3V3_2"],
  pin75: ["GND7"],
} as const

export const MicroModConnector = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...props}
      pinLabels={pinLabels}
      manufacturerPartNumber="M.2-MicroMod-Connector"
      footprint="m2_micromod_connector"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7",
            "pin8", "pin9", "pin10", "pin11", "pin12", "pin13", "pin14",
            "pin15", "pin16", "pin17", "pin18", "pin19", "pin20",
            "pin21", "pin22", "pin23", "pin32", "pin34", "pin38",
            "pin40", "pin42", "pin44", "pin46", "pin48",
            "pin50", "pin52", "pin54", "pin56", "pin58", "pin60",
            "pin62", "pin64", "pin66", "pin68", "pin70", "pin72", "pin74",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin75", "pin73", "pin71", "pin69", "pin67", "pin65",
            "pin63", "pin61", "pin59", "pin57", "pin55", "pin53",
            "pin51", "pin49", "pin47", "pin45", "pin43", "pin41",
            "pin39", "pin37", "pin35", "pin33", "pin31",
            "pin20", "pin18", "pin16", "pin14", "pin12", "pin10",
            "pin8", "pin6", "pin4", "pin2",
          ],
        },
      }}
    />
  )
}
