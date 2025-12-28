# SparkFun MicroMod RP2040 Processor
A defined board for the [SparkFun MicroMod RP2040 Processor](https://www.sparkfun.com/products/17720).

## Specs
- **Microcontroller**: Raspberry Pi RP2040 (Dual-core Cortex-M0+ @ 133MHz)
- **Flash**: 128Mbit (16MB) QSPI Flash
- **Form Factor**: MicroMod (M.2 Key E standard)
- **Status LED**: Connected to GPIO25
- **Crystal**: 12MHz

## Pins
- **UART**: UART1 (TX/RX), UART2 (TX/RX)
- **I2C**: I2C0 (SDA/SCL)
- **SPI**: SPI0 (SCK/SDO/SDI)
- **Audio**: I2S (MCLK/BCLK/LRCLK/DIN/DOUT)
- **ADC**: ADC0-ADC3 (shared with some GPIOs)

## Usage
To blink the status LED, toggle GPIO25.
