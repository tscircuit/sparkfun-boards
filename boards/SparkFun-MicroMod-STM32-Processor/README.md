# SparkFun MicroMod STM32 Processor

SparkFun Product: [DEV-21326](https://www.sparkfun.com/sparkfun-micromod-stm32-processor.html)

## Description

The SparkFun MicroMod STM32 Processor Board features the STM32F405RG ARM Cortex-M4 running at up to 168MHz, with 1MB Flash and 192KB SRAM, plus an additional 128Mb (16MB) SPI Flash. It connects to any MicroMod Carrier Board via the standard M.2 MicroMod connector.

## Features

- STM32F405RG ARM Cortex-M4 @ 168MHz
- 1MB internal Flash, 192KB SRAM
- 128Mb (16MB) SPI Flash (W25Q128)
- Standard MicroMod M.2 form factor (22mm × 22mm)
- All pins 3.3V logic

## Pin Mapping (M.2 ↔ STM32F405)

| M.2 Signal    | STM32 Pin |
|---------------|-----------|
| D0            | PC0       |
| D1            | PC1       |
| A0            | PC5       |
| A1            | PB0       |
| PWM0          | PC6       |
| PWM1          | PC7       |
| UART_TX1      | PA9       |
| UART_RX1      | PA10      |
| I2C_SCL       | PB10      |
| I2C_SDA       | PB11      |
| I2C_INT#      | PB1       |
| I2C_SCL1      | PB6       |
| I2C_SDA1      | PB7       |
| SPI_PICO      | PA6       |
| SPI_POCI      | PA7       |
| SPI_SCK       | PA5       |
| SPI_CS#       | PC4       |
| AUD_BCLK      | PB3       |
| AUD_LRCLK     | PA4       |
| AUD_OUT       | PB4       |
| AUD_IN        | PB5       |
| G0/BUS0       | PD2       |
| G1/BUS1       | PA8       |
| G2/BUS2       | PA0       |
| G3/BUS3       | PC8       |
| G4/BUS4       | PC9       |
| G5/BUS5       | PC13      |
| G6/BUS6       | PC2       |
| G10/HOST_VBUS | PB13      |
| G11/HOST_ID   | PB12      |
| CAN_RX        | PB8       |
| CAN_TX        | PB9       |
| USBHOST_D-    | PB14      |
| USBHOST_D+    | PB15      |
| SWDIO         | PA13      |
| SWDCK         | PA14      |
| USB_D-        | PA11      |
| USB_D+        | PA12      |

## Resources

- [Hookup Guide](https://learn.sparkfun.com/tutorials/micromod-stm32-processor-hookup-guide)
- [Schematic PDF](https://cdn.sparkfun.com/assets/8/a/a/7/3/MicroMod_STM32_Processor.pdf)
- [STM32F405 Datasheet](https://cdn.sparkfun.com/assets/4/c/b/0/2/stm32f405rg-1851084.pdf)
