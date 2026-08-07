# SparkFun MicroMod RP2040 Processor

SparkFun product page: https://www.sparkfun.com/sparkfun-micromod-rp2040-processor.html

## Overview

The SparkFun MicroMod RP2040 Processor board features the Raspberry Pi RP2040 
dual-core ARM Cortex-M0+ microcontroller in the MicroMod M.2 Key E form factor.

## Key Components

| Reference | Part | Description |
|-----------|------|-------------|
| U1 | RP2040 | Dual-core ARM Cortex-M0+ MCU, QFN-56 |
| U2 | W25Q128JV | 128Mbit QSPI Flash, SOIC-8 |
| Y1 | 12 MHz Crystal | External oscillator for USB clock |
| J1 | M.2 Key E 75-pin | MicroMod edge connector to carrier board |

## MicroMod Pin Mapping (RP2040 → M.2)

| M.2 Signal | RP2040 GPIO | Function |
|-----------|-------------|---------|
| UART_TX1 | GPIO0 | UART TX |
| UART_RX1 | GPIO1 | UART RX |
| I2C_SDA | GPIO4 | I2C data |
| I2C_SCL | GPIO5 | I2C clock |
| SPI_CIPO | GPIO16 | SPI RX |
| SPI_CS | GPIO17 | SPI chip select |
| SPI_SCK | GPIO18 | SPI clock |
| SPI_COPI | GPIO19 | SPI TX |
| A0 | GPIO26/ADC0 | Analog input 0 |
| A1 | GPIO27/ADC1 | Analog input 1 |
| PWM0 | GPIO21 | PWM output 0 |
| PWM1 | GPIO22 | PWM output 1 |
| D0 | GPIO6 | Digital I/O |
| D1 | GPIO7 | Digital I/O |
| G0–G5 | GPIO8–13 | General purpose I/O |

## Resources

- [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [MicroMod Interface Specification](https://cdn.sparkfun.com/assets/learn_tutorials/1/2/0/6/SparkFun_MicroMod_Interface_v1.0_-_Pin_Descriptions.pdf)
- [SparkFun MicroMod Getting Started](https://learn.sparkfun.com/tutorials/getting-started-with-micromod)
