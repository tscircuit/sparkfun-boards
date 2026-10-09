# PR: Add SparkFun MicroMod RP2040 Processor Board

## Summary

This PR adds the SparkFun MicroMod RP2040 Processor Board (DEV-17720) to the tscircuit sparkfun-boards catalog.

**Closes #175**

## Changes

### New Components Added

| File | Description |
|------|-------------|
| `RP2040.tsx` | RP2040 dual-core ARM Cortex-M0+ microcontroller component (QFN-56) |
| `W25Q128JV.tsx` | 128Mbit SPI flash memory chip (WSON-8) |
| `MicroModEdge.tsx` | MicroMod M.2 edge connector (75-pin) |
| `SparkFun-MicroMod-RP2040-Processor.circuit.tsx` | Main board schematic |
| `index.tsx` | Package exports |
| `README.md` | Documentation |

### Technical Details

**RP2040 Features Modeled:**
- Dual ARM Cortex-M0+ cores @ 133MHz
- 264KB SRAM
- 30 GPIO pins with alternate functions (SPI, I2C, UART, PWM, ADC)
- USB 1.1 Host/Device
- QSPI flash interface
- SWD debug interface

**Board Features:**
- 12MHz external crystal with load capacitors
- 16MB external flash (W25Q128JV)
- Status LED on GPIO25
- Full MicroMod M.2 interface
- Decoupling capacitors

## Testing

- [x] TypeScript compilation passes (`bunx tsc --noEmit`)
- [x] All components follow existing codebase patterns
- [x] Pin mappings verified against official schematic

## References

- [Product Page](https://www.sparkfun.com/products/17720)
- [Hookup Guide](https://learn.sparkfun.com/tutorials/micromod-rp2040-processor-board-hookup-guide)
- [Official Schematic](https://cdn.sparkfun.com/assets/1/8/3/5/8/MicroMod-RP2040-ProcessorBoard_Schematic.pdf)
- [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)

## Bounty

Algora Issue #175 - $500
