import type { ChipProps } from "@tscircuit/props"

export const MicroModEdge = (props: any) => (
  <chip
    {...props}
    name="J1"
    footprint="micromod_processor_edge"
    schPortArrangement={{
      leftSide: {
        pins: [
          "6",
          "11",
          "4",
          "72", // System
          "9",
          "5",
          "3", // USB
          "37",
          "35", // USB Host
          "43",
          "41", // CAN
          "23",
          "21", // SWD
          "58",
          "56",
          "54",
          "52",
          "50", // Audio
          "14",
          "12",
          "16",
          "53",
          "51", // I2C
          "49", // BATT
        ],
      },
      rightSide: {
        pins: [
          "60",
          "62",
          "64",
          "66",
          "68",
          "70", // SPI/SDIO
          "57",
          "59",
          "61",
          "55", // SPI
          "34",
          "38",
          "32",
          "47",
          "10",
          "18", // ADC/PWM/Digital
          "17",
          "19",
          "13",
          "15",
          "22",
          "20", // UART
          "40",
          "42",
          "44",
          "46",
          "48",
          "73",
          "71",
          "69",
          "67",
          "65",
          "63",
          "8", // G-Pins
        ],
      },
      topSide: {
        pins: ["2", "74"], // 3.3V
      },
      bottomSide: {
        pins: ["1", "7", "33", "36", "39", "45", "75"], // GND
      },
    }}
    pinLabels={{
      "1": "GND",
      "2": "3.3V",
      "3": "USB_D+",
      "4": "3.3V_EN",
      "5": "USB_D-",
      "6": "!RESET!",
      "7": "GND",
      "8": "G11",
      "9": "USB_VIN",
      "10": "D0",
      "11": "!BOOT!",
      "12": "I2C_SDA",
      "13": "RTS1",
      "14": "I2C_SCL",
      "15": "CTS1",
      "16": "I2C_!INT!",
      "17": "TX1",
      "18": "D1/CAM_TRIG",
      "19": "RX1",
      "20": "RX2",
      "21": "SWDCK",
      "22": "TX2",
      "23": "SWDIO",
      "32": "PWM0",
      "33": "GND",
      "34": "A0",
      "35": "USBHOST_D+",
      "36": "GND",
      "37": "USBHOST_D-",
      "38": "A1",
      "39": "GND",
      "40": "G0/BUS0",
      "41": "CAN-RX",
      "42": "G1/BUS1",
      "43": "CAN-TX",
      "44": "G2/BUS2",
      "45": "GND",
      "46": "G3/BUS3",
      "47": "PWM1",
      "48": "G4/BUS4",
      "49": "BATT_VIN/3",
      "50": "AUD_BCLK",
      "51": "I2C_SDA1",
      "52": "AUD_LRCLK",
      "53": "I2C_SCL1",
      "54": "AUD_IN/CAM_PCLK",
      "55": "SPI_!CS!",
      "56": "AUD_OUT/CAM_MCLK",
      "57": "SPI_SCK",
      "58": "AUD_MCLK",
      "59": "SPI_SDO",
      "60": "SPI_SCK1/SDIO_CLK",
      "61": "SPI_SDI",
      "62": "SPI_SDO1/SDIO_CMD",
      "63": "G10/ADC_D+/CAM_VSYNC",
      "64": "SPI_SDI1/SDIO_DATA0",
      "65": "G9/ADC_D-/CAM_HSYNC",
      "66": "SDIO_DATA1",
      "67": "G8",
      "68": "SDIO_DATA2",
      "69": "G7/BUS7",
      "70": "SPI_!CS1!/SDIO_DATA3",
      "71": "G6/BUS6",
      "72": "RTC_3V",
      "73": "G5/BUS5",
      "74": "3.3V",
      "75": "GND",
    }}
  />
)
