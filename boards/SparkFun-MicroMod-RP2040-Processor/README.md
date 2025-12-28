# SparkFun MicroMod RP2040 Processor

This is a tscircuit definition for the SparkFun MicroMod RP2040 Processor Board.

## Usage

```tsx
import { SparkFunMicroModRP2040 } from "./SparkFun-MicroMod-RP2040-Processor"

export const MyProject = () => (
  <board width="100mm" height="100mm">
    <SparkFunMicroModRP2040 name="U1" />
  </board>
)
```

## Features

- RP2040 Dual-core Cortex M0+ Processor
- 128Mbit SPI Flash/RAM (W25Q128)
- MicroMod M.2 Connector interface
