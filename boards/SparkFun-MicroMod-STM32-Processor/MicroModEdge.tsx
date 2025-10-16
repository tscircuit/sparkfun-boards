import React from "react"

const MicroModEdge = (props: any) => (
  <chip
    name="J1"
    pinLabels={{
      pin1: "V3V3",
      pin2: "GND",
      pin3: "USB_DM",
      pin4: "USB_DP",
      pin5: "SWDIO",
      pin6: "SWCLK",
      pin7: "I2C_SCL",
      pin8: "I2C_SDA",
      pin9: "UART_TX",
      pin10: "UART_RX",
      pin11: "SPI_SCK",
      pin12: "SPI_MISO",
      pin13: "SPI_MOSI",
      pin14: "SDIO_CMD",
      pin15: "SDIO_CLK",
      pin16: "SDIO_D0",
      pin17: "SDIO_D1",
      pin18: "SDIO_D2",
      pin19: "SDIO_D3",
      pin20: "RESET_N",
      pin21: "BOOT_N",
      pin22: "STAT_LED",
    }}
    {...props}
  />
)

export default MicroModEdge
