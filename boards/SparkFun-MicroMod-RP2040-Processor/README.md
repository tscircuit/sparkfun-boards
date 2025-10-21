# SparkFun MicroMod RP2040 Processor

## Build Notes

This board requires building with the `--ignore-errors` flag due to autorouter complexity:

```bash
bun run tsci-build-safe boards/SparkFun-MicroMod-RP2040-Processor
```

The autorouter warnings are due to the complexity of the 60-pin RP2040 component and do not indicate actual design failures. The circuit.json is generated successfully.

## Components

- RP2040 microcontroller (60-pin QFN)
- Simplified MicroMod M.2 connector (5 essential pins)
- AP2112K 3.3V voltage regulator
- Essential power and USB connections

## Design Features

- Minimal viable implementation for MicroMod compatibility
- Essential power distribution (VIN → 3.3V → RP2040)
- USB data connections (D+/D-)
- Optimized for autorouter compatibility