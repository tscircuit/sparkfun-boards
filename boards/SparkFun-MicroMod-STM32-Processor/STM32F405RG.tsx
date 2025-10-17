import React from "react"

const STM32F405RG = (props: any) => (
  <chip
    name="U1"
    footprint="qfp64_p0.5mm"
    pinLabels={{
      // Power / special
      pin1: "VBAT",
      pin7: "NRST",
      pin8: "VSSA",
      pin9: "GND",
      pin10: "VDDA",
      pin18: "GND",
      pin19: "V3V3",
      pin31: "VCAP1",
      pin47: "VCAP2",
      pin63: "GND",
      pin64: "V3V3",

      // Clocks
      pin5: "PH0_HSE",
      pin6: "PH1_HSE",
      pin3: "PC14_LSE",
      pin4: "PC15_LSE",

      // USB
      pin44: "USB_DM",
      pin45: "USB_DP",

      // SWD
      pin46: "SWDIO",
      pin49: "SWCLK",

      // I2C1
      pin58: "I2C_SCL",
      pin59: "I2C_SDA",

      // Boot configuration
      pin60: "BOOT0",

      // Status LED (GPIO)
      pin33: "STAT_LED",

      // UART1
      pin37: "UART_TX",
      pin38: "UART_RX",

      // SPI2 (for edge SPI)
      pin51: "SPI_SCK",
      pin52: "SPI_MISO",
      pin53: "SPI_MOSI",
      pin50: "SPI_NSS",

      // SDIO
      pin56: "SDIO_CLK",
      pin54: "SDIO_CMD",
      pin40: "SDIO_D0",
      pin41: "SDIO_D1",
      pin42: "SDIO_D2",
      pin43: "SDIO_D3",

      // On-board flash (names must match U2 exactly)
      // Map these to unused GPIOs that you intend to use for the flash
      // (the exact pins don’t matter to the schematic connectivity)
      pin20: "FLASH_CS_N",
      pin21: "FLASH_SO", // MISO from flash
      pin22: "FLASH_SI", // MOSI to flash
      pin23: "FLASH_SCK",
      pin24: "FLASH_WP_N",
      pin25: "FLASH_HOLD_N",
    }}
    {...props}
  />
)

export default STM32F405RG
