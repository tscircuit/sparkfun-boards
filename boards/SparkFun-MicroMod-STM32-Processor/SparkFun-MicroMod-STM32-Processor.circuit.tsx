import React from "react"
import STM32F405RG from "./STM32F405RG"
import W25Q128 from "./W25Q128"
import MicroModEdge from "./MicroModEdge"

const Board = () => (
  <board width="50mm" height="22mm" name="SparkFun MicroMod STM32 Processor">
    <MicroModEdge
      name="J1"
      schX={0}
      schY={-50}
      // position props if you want (schX/schY/pcbX/pcbY)
      connections={{
        V3V3: "net.V3V3",
        GND: "net.GND",
        USB_DM: "net.USB_DM",
        USB_DP: "net.USB_DP",
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
        I2C_SCL: "net.I2C_SCL",
        I2C_SDA: "net.I2C_SDA",
        UART_TX: "net.UART_TX",
        UART_RX: "net.UART_RX",
        SPI_SCK: "net.SPI_SCK",
        SPI_MISO: "net.SPI_MISO",
        SPI_MOSI: "net.SPI_MOSI",
        SDIO_CMD: "net.SDIO_CMD",
        SDIO_CLK: "net.SDIO_CLK",
        SDIO_D0: "net.SDIO_D0",
        SDIO_D1: "net.SDIO_D1",
        SDIO_D2: "net.SDIO_D2",
        SDIO_D3: "net.SDIO_D3",
        NRST: "net.NRST",
        STAT_LED: "net.STAT_LED",
      }}
    />

    <STM32F405RG
      name="U1"
      schX={0}
      schY={0}
      connections={{
        // power & refs
        V3V3: "net.V3V3",
        GND: "net.GND",
        VDDA: "net.V3V3",
        VSSA: "net.GND",
        VCAP1: "net.VCAP1",
        VCAP2: "net.VCAP2",

        // reset & boot
        NRST: "net.NRST",
        BOOT0: "net.BOOT0",

        // USB
        USB_DM: "net.USB_DM",
        USB_DP: "net.USB_DP",

        // SWD
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",

        // I2C / UART / SPI to edge
        I2C_SCL: "net.I2C_SCL",
        I2C_SDA: "net.I2C_SDA",
        UART_TX: "net.UART_TX",
        UART_RX: "net.UART_RX",
        SPI_SCK: "net.SPI_SCK",
        SPI_MISO: "net.SPI_MISO",
        SPI_MOSI: "net.SPI_MOSI",

        // SDIO
        SDIO_CLK: "net.SDIO_CLK",
        SDIO_CMD: "net.SDIO_CMD",
        SDIO_D0: "net.SDIO_D0",
        SDIO_D1: "net.SDIO_D1",
        SDIO_D2: "net.SDIO_D2",
        SDIO_D3: "net.SDIO_D3",

        // Flash (to U2)
        FLASH_CS_N: "net.FLASH_CS_N",
        FLASH_SCK: "net.FLASH_SCK",
        FLASH_SI: "net.FLASH_SI",
        FLASH_SO: "net.FLASH_SO",
        FLASH_WP_N: "net.FLASH_WP_N",
        FLASH_HOLD_N: "net.FLASH_HOLD_N",

        // status LED from edge (optional GPIO)
        STAT_LED: "net.STAT_LED",

        // crystals (nets exist even if you skip the crystal symbols for now)
        PH0_HSE: "net.PH0_HSE",
        PH1_HSE: "net.PH1_HSE",
        PC14_LSE: "net.PC14_LSE",
        PC15_LSE: "net.PC15_LSE",
      }}
    />

    <W25Q128
      name="U2"
      schX={-80} // move flash to left
      schY={-20}
      connections={{
        V3V3: "net.V3V3",
        GND: "net.GND",
        FLASH_CS_N: "net.FLASH_CS_N",
        FLASH_SCK: "net.FLASH_SCK",
        FLASH_SI: "net.FLASH_SI",
        FLASH_SO: "net.FLASH_SO",
        FLASH_WP_N: "net.FLASH_WP_N",
        FLASH_HOLD_N: "net.FLASH_HOLD_N",
      }}
    />
  </board>
)

export default Board
