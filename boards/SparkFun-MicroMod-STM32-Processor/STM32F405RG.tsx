import React from "react"

const STM32F405RG = (props: any) => (
  <chip
    name="U1"
    footprint="qfp64_p0.5mm"
    pinLabels={{
      pin1: "VBAT",
      pin3: "PC14_LSE",
      pin4: "PC15_LSE",
      pin5: "PH0_HSE",
      pin6: "PH1_HSE",
      pin7: "NRST",
      pin9: "VSSA",
      pin10: "VDDA",
      pin18: "VSS",
      pin19: "VDD",
      pin31: "VCAP1",
      pin47: "VCAP2",
      pin63: "VSS3",
      pin64: "VDD3",
      pin60: "BOOT0",
      pin44: "PA11_USB_DM",
      pin45: "PA12_USB_DP",
      pin46: "PA13_SWDIO",
      pin49: "PA14_SWCLK",
      pin58: "PB8_I2C1_SCL",
      pin59: "PB9_I2C1_SDA",
      pin37: "PA9_UART1_TX",
      pin38: "PA10_UART1_RX",
      pin50: "PB12_SPI2_NSS",
      pin51: "PB13_SPI2_SCK",
      pin52: "PB14_SPI2_MISO",
      pin53: "PB15_SPI2_MOSI",
      pin40: "PC8_SDIO_D0",
      pin41: "PC9_SDIO_D1",
      pin42: "PC10_SDIO_D2",
      pin43: "PC11_SDIO_D3",
      pin56: "PC12_SDIO_CLK",
      pin54: "PD2_SDIO_CMD",
    }}
    {...props}
  />
)

export default STM32F405RG
