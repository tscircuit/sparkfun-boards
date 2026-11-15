# SparkFun MicroMod RP2040 Processor

A tscircuit implementation of the [SparkFun MicroMod RP2040 Processor](https://www.sparkfun.com/products/17720) (DEV-17720).

## Overview

The SparkFun MicroMod RP2040 Processor Board features the Raspberry Pi Foundation's RP2040 microcontroller in the MicroMod form factor. This allows easy integration with any MicroMod carrier board.

## Features

- **Processor**: RP2040 dual-core ARM Cortex-M0+ @ up to 133MHz
- **Memory**: 264KB SRAM + 16MB external flash (W25Q128JV)
- **USB**: USB 1.1 Host/Device capable
- **GPIO**: 30 programmable I/O pins
- **Peripherals**:
  - 2x SPI
  - 2x I2C
  - 2x UART
  - 16x PWM
  - 4x ADC channels
- **Debug**: SWD interface
- **Form Factor**: MicroMod M.2 (22mm)

## Components

- `RP2040.tsx` - RP2040 microcontroller (QFN-56)
- `W25Q128JV.tsx` - 128Mbit flash memory (WSON-8)
- `MicroModEdge.tsx` - MicroMod M.2 edge connector (75-pin)
- `SparkFun-MicroMod-RP2040-Processor.circuit.tsx` - Main board schematic

## Resources

- [Product Page](https://www.sparkfun.com/products/17720)
- [Hookup Guide](https://learn.sparkfun.com/tutorials/micromod-rp2040-processor-board-hookup-guide)
- [Schematic (PDF)](https://cdn.sparkfun.com/assets/1/8/3/5/8/MicroMod-RP2040-ProcessorBoard_Schematic.pdf)
- [Hardware Design Files](https://github.com/sparkfun/MicroMod_Processor-RP2040)
- [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)

## Issue Reference

This implementation addresses [Issue #175](https://github.com/tscircuit/sparkfun-boards/issues/175) on the tscircuit/sparkfun-boards repository.

## Bounty

$500 - Algora Bounty
