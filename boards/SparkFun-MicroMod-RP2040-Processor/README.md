# SparkFun MicroMod RP2040 Processor

A tscircuit implementation of the SparkFun MicroMod RP2040 Processor Board.

## Product Overview

The SparkFun MicroMod Pi RP2040 Processor Board is a low-cost, high-performance board with flexible digital interfaces featuring the Raspberry Pi Foundation's RP2040 microcontroller.

## Features

- **RP2040 Processor**: Dual Cortex M0+ processors, up to 133 MHz
- **Memory**: 264 kB embedded SRAM + 128Mbit/16MB external flash
- **M.2 MicroMod Connector**: Standard MicroMod interface (E-key)
- **Status LED**: Connected to GPIO25
- **USB 1.1**: Host/Device functionality

## Pin Functionality

| Function | RP2040 Pin |
|----------|------------|
| I2C SDA  | GPIO4      |
| I2C SCL  | GPIO5      |
| SPI CIPO | GPIO16     |
| SPI COPI | GPIO19     |
| SPI SCK  | GPIO18     |
| SPI CS   | GPIO17     |
| UART TX  | GPIO0      |
| UART RX  | GPIO1      |
| Status LED | GPIO25   |

## Resources

- [SparkFun Product Page](https://www.sparkfun.com/sparkfun-micromod-rp2040-processor.html)
- [Hookup Guide](https://learn.sparkfun.com/tutorials/micromod-rp2040-processor-board-hookup-guide)
- [Schematic (PDF)](https://cdn.sparkfun.com/assets/1/8/3/5/8/MicroMod-RP2040-ProcessorBoard_Schematic.pdf)

## Usage

```tsx
import SparkFunMicroModRP2040 from "@sparkfun-boards/SparkFun-MicroMod-RP2040-Processor"

export default () => (
  <board>
    <SparkFunMicroModRP2040 name="PROC1" />
  </board>
)
```
