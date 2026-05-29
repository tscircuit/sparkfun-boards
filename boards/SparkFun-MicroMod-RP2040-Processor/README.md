# SparkFun MicroMod RP2040 Processor Board

SparkFun Product: [DEV-17720](https://www.sparkfun.com/products/17720)

## Description

The SparkFun MicroMod RP2040 Processor Board features the Raspberry Pi Foundation's RP2040 dual ARM Cortex-M0+ microcontroller in the standard MicroMod M.2 form factor (22mm × 22mm).

## Components

- **RP2040** (QFN-56) — Dual ARM Cortex-M0+ @ 133MHz, 264kB SRAM
- **W25Q128JVPIM** — 128Mbit (16MB) external SPI Flash
- 12MHz crystal (Y1) with 15pF load capacitors
- STAT LED on GPIO25 with 1kΩ resistor
- Decoupling capacitors for DVDD, IOVDD, USB_VDD

## Pin Mapping

| MicroMod Signal | RP2040 GPIO |
|----------------|------------|
| UART_TX1 | GPIO0 |
| UART_RX1 | GPIO1 |
| I2C_SDA | GPIO4 |
| I2C_SCL | GPIO5 |
| D0 | GPIO6 |
| D1 | GPIO7 |
| I2C_INT | GPIO8 |
| I2C_SDA1 | GPIO8 |
| I2C_SCL1 | GPIO9 |
| PWM0 | GPIO13 |
| G0/BUS0 | GPIO16 |
| G1/BUS1 | GPIO17 |
| G2/BUS2 | GPIO18 |
| G3/BUS3 | GPIO19 |
| SPI_CS | GPIO20 (remap) |
| SPI_CIPO | GPIO21 (remap) |
| SPI_SCK | GPIO22 |
| SPI_COPI | GPIO23 |
| PWM1/AUD_MCLK | GPIO24 |
| STAT/G10 | GPIO25 |
| A0 | GPIO26 |
| A1 | GPIO27 |

## Resources

- [Schematic PDF](https://cdn.sparkfun.com/assets/1/8/3/5/8/MicroMod-RP2040-ProcessorBoard_Schematic.pdf)
- [Hookup Guide](https://learn.sparkfun.com/tutorials/micromod-rp2040-processor-board-hookup-guide)
- [RP2040 Datasheet](https://datasheets.raspberrypi.org/rp2040/rp2040_datasheet.pdf)
