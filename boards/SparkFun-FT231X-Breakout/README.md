# SparkFun FT231X Breakout

A tscircuit implementation of the SparkFun FT231X Breakout board (BOB-13263).

## Description

The SparkFun FT231X Breakout is a USB-to-Serial adapter built around the FTDI FT231X chip. Unlike basic FTDI adapters, this board breaks out all pins for full UART hardware handshaking support.

## Features

- **FT231X IC**: Full-speed USB to asynchronous serial UART interface
- **Micro-B USB Connector**: Standard USB interface
- **Full Hardware Handshaking**: RTS, CTS, DTR, DSR, DCD, RI signals
- **Arduino Compatible**: Standard 6-pin header (DTR, RXI, TXO, VCC, CTS, GND)
- **TX/RX LEDs**: Visual indication of serial activity
- **3.3V/5V Selectable**: Voltage flexibility for different logic levels
- **5V Tolerant I/O**: Safe interfacing with various logic levels

## Pin Headers

### JP1 - Arduino Compatible Header
| Pin | Function |
|-----|----------|
| 1 | DTR |
| 2 | RXI |
| 3 | TXO |
| 4 | VCC |
| 5 | CTS |
| 6 | GND |

### JP2 - Extended UART Header
| Pin | Function |
|-----|----------|
| 1 | RTS |
| 2 | RXO |
| 3 | TXI |
| 4 | RI |
| 5 | DSR |
| 6 | DCD |
| 7 | GND |

## Components

- U1: FT231X (SSOP-20)
- USB: Micro-B USB Connector
- F1: 500mA Polyfuse
- R1, R2: 330Ω LED resistors
- LED1: TX LED (Green)
- LED2: RX LED (Yellow)
- C1-C4: Decoupling capacitors

## Usage

```tsx
import { SparkFunFT231XBreakout } from "./boards/SparkFun-FT231X-Breakout"

export default () => <SparkFunFT231XBreakout />
```

## Reference

- [SparkFun Product Page](https://www.sparkfun.com/products/13263)
- [FT231X Datasheet](http://cdn.sparkfun.com/datasheets/Components/General%20IC/DS_FT231X.pdf)
- [Schematic](http://cdn.sparkfun.com/datasheets/BreakoutBoards/ft231x-breakout-v11.pdf)
