import React from "react"

const MicroModEdge = (props: any) => (
  <chip
    name="J1"
    pinLabels={{
      // ---- Left column ----
      pin2: "V3_3",
      pin6: "RESET_N",
      pin8: "G11",
      pin11: "BOOT_N",
      pin4: "3V3_EN",
      pin72: "RTC_3V",
      pin9: "USB_VIN",
      pin5: "USB_DN",
      pin3: "USB_DP",
      pin37: "USBHOST_DN",
      pin35: "USBHOST_DP",
      pin43: "CAN_TX",
      pin41: "CAN_RX",
      pin23: "SWDIO",
      pin21: "SWDCK",
      pin58: "AUD_MCLK",
      pin56: "AUD_OUT_CAM_MCLK",
      pin52: "AUD_LRCLK",
      pin54: "AUD_IN_CAM_PCLK",
      pin50: "AUD_BCLK",
      pin14: "I2C_SCL",
      pin12: "I2C_SDA",
      pin16: "I2C_INT_N",
      pin53: "I2C_SCL1",
      pin51: "I2C_SDA1",
      pin49: "BATT_VIN_3",
      pin1: "GND",

      // ---- Right column ----
      pin60: "SPI_SCK1_SDIO_CLK",
      pin62: "SPI_SDO1_SDIO_CMD",
      pin64: "SPI_SDI1_SDIO_DATA0",
      pin66: "SDIO_DATA1",
      pin68: "SDIO_DATA2",
      pin70: "SPI_CS1_SDIO_DATA3",

      pin57: "SPI_SCK",
      pin59: "SPI_SDO",
      pin61: "SPI_SDI",
      pin55: "SPI_CS",

      pin34: "A0",
      pin38: "A1",

      pin32: "PWM0",
      pin47: "PWM1",

      pin10: "D0",
      pin18: "D1_CAM_TRIG",

      pin17: "TX1",
      pin19: "RX1",
      pin13: "RTS1",
      pin15: "CTS1",
      pin22: "TX2",
      pin20: "RX2",

      pin40: "G0_BUS0",
      pin42: "G1_BUS1",
      pin44: "G2_BUS2",
      pin46: "G3_BUS3",
      pin48: "G4_BUS4",
      pin73: "G5_BUS5",
      pin71: "G6_BUS6",
      pin69: "G7_BUS7",
      pin67: "G8",
      pin65: "G9_ADC_DN_CAM_HSYNC",
      pin63: "G10_ADC_DP_CAM_VSYNC",
      //pin61: "G11", // Add if defined (some variants use 61/65 for bottom G pins)
    }}
    {...props}
  />
)

export default MicroModEdge
