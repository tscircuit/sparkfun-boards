# SparkFun MicroMod RP2040 Processor

A tscircuit implementation of the SparkFun MicroMod RP2040 Processor board.

## Overview

The SparkFun MicroMod RP2040 Processor is a compact microcontroller board featuring the Raspberry Pi RP2040 dual-core ARM Cortex-M0+ processor. It's designed to work with SparkFun's MicroMod ecosystem, allowing it to be paired with various carrier boards for different applications.

## Features

- **Microcontroller**: Raspberry Pi RP2040
  - Dual-core ARM Cortex-M0+ processor
  - 133MHz operating frequency
  - 264KB of SRAM
- **Flash Memory**: 16MB (W25Q128JVSIQ)
- **Connectivity**:
  - USB-C connector for programming and power
  - MicroMod M.2 connector (75-pin)
  - SWD debug interface
- **Power**: 3.3V operating voltage with onboard regulator
- **Indicators**: Status LED (GPIO25)
- **User Interface**: Reset and Boot buttons
- **Form Factor**: 22mm x 22mm MicroMod processor board

## Pin Mapping

### MicroMod Connector Pins

The board follows the MicroMod standard pinout:

| Function | Pin | RP2040 GPIO | Description |
|----------|-----|-------------|-------------|
| PWM0 | 41 | GPIO0 | PWM/Digital I/O |
| PWM1 | 32 | GPIO1 | PWM/Digital I/O |
| SPI_COPI | 33 | GPIO3 | SPI COPI (Controller Out Peripheral In) |
| SPI_CIPO | 34 | GPIO4 | SPI CIPO (Controller In Peripheral Out) |
| SPI_SCK | 35 | GPIO2 | SPI Clock |
| SPI_CS | 36 | GPIO5 | SPI Chip Select |
| UART1_TX | 24 | GPIO8 | UART1 Transmit |
| UART1_RX | 25 | GPIO9 | UART1 Receive |
| UART1_RTS | 27 | GPIO10 | UART1 Request To Send |
| UART1_CTS | 26 | GPIO11 | UART1 Clear To Send |
| I2C_SCL | 21 | GPIO13 | I2C Clock |
| I2C_SDA | 22 | GPIO12 | I2C Data |
| A0 | 40 | GPIO26 | Analog Input 0 |
| A1 | 38 | GPIO27 | Analog Input 1 |
| D0 | 60 | GPIO6 | Digital I/O 0 |
| D1 | 30 | GPIO7 | Digital I/O 1 |

### Special Functions

- **GPIO25**: Connected to onboard status LED
- **USB_DP/USB_DM**: Connected to USB-C connector
- **QSPI**: Connected to 16MB flash memory
- **XIN/XOUT**: Connected to 12MHz crystal oscillator

## Usage

```tsx
import { SparkfunMicroModRP2040Processor } from "sparkfun-boards"

function MyCircuit() {
  return (
    <board width="40mm" height="30mm">
      <SparkfunMicroModRP2040Processor 
        name="processor" 
        x={20}
        y={15}
      />
    </board>
  )
}
```

## Development

To run this board in development mode:

```bash
tsci dev ./boards/sparkfun-micromod-rp2040-processor/sparkfun-micromod-rp2040-processor.circuit.tsx
```

## References

- [SparkFun Product Page](https://www.sparkfun.com/sparkfun-micromod-rp2040-processor.html)
- [RP2040 Datasheet](https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf)
- [MicroMod Specification](https://www.sparkfun.com/micromod)

## Board Dimensions

- **Length**: 22mm
- **Width**: 22mm
- **Thickness**: 1.6mm (standard PCB thickness)
- **Connector**: M.2 MicroMod (75-pin)

## Power Requirements

- **Input Voltage**: 3.3V - 5.5V (via MicroMod connector or USB-C)
- **Operating Voltage**: 3.3V
- **Current Consumption**: 
  - Active (both cores): ~20-30mA
  - Sleep mode: <1mA
  - Deep sleep: <100µA