# SparkFun MicroMod STM32 Processor

This is a TSCircuit implementation of the SparkFun MicroMod STM32 Processor board featuring the STM32F405RGT6 microcontroller.

## Features

- STM32F405RGT6 ARM Cortex-M4 microcontroller (LQFP-64 package)
- 12MHz HSE crystal oscillator
- 32.768kHz LSE crystal for RTC
- SPI flash memory (W25Q128)
- MicroMod M.2 "E-class" 22mm edge connector
- Boot control circuitry
- Power decoupling and regulation

## Board Details

- **Product**: SparkFun MicroMod STM32 Processor (STM32F405RGT6)
- **Product Page**: https://www.sparkfun.com/products/21326
- **Hardware Repo**: https://github.com/sparkfun/MicroMod_STM32_Processor
- **Hookup Guide**: https://learn.sparkfun.com/tutorials/micromod-stm32-processor-hookup-guide

## Usage

```tsx
import SparkFunMicroModSTM32Processor from "sparkfun-boards/SparkFun-MicroMod-STM32-Processor"

export default () => (
  <board>
    <SparkFunMicroModSTM32Processor />
  </board>
)
```