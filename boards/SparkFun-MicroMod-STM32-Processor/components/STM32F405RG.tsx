import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["PC14"],
  pin4: ["PC15"],
  pin5: ["PH0", "OSC_IN"],
  pin6: ["PH1", "OSC_OUT"],
  pin7: ["NRST"],
  pin8: ["PC0"],
  pin9: ["PC1"],
  pin10: ["PC2"],
  pin11: ["PC3"],
  pin12: ["VSSA"],
  pin13: ["VDDA"],
  pin14: ["PA0"],
  pin15: ["PA1"],
  pin16: ["PA2"],
  pin17: ["PA3"],
  pin18: ["VSS1"],
  pin19: ["VDD1"],
  pin20: ["PA4", "SPI1_NSS"],
  pin21: ["PA5", "SPI1_SCK"],
  pin22: ["PA6", "SPI1_MISO"],
  pin23: ["PA7", "SPI1_MOSI"],
  pin24: ["PC4"],
  pin25: ["PC5"],
  pin26: ["PB0"],
  pin27: ["PB1"],
  pin28: ["PB2", "BOOT1"],
  pin29: ["PB10"],
  pin30: ["PB11"],
  pin31: ["VCAP1"],
  pin32: ["VDD2"],
  pin33: ["PB12"],
  pin34: ["PB13"],
  pin35: ["PB14"],
  pin36: ["PB15"],
  pin37: ["PC6"],
  pin38: ["PC7"],
  pin39: ["PC8"],
  pin40: ["PC9"],
  pin41: ["PA8"],
  pin42: ["PA9"],
  pin43: ["PA10"],
  pin44: ["PA11"],
  pin45: ["PA12"],
  pin46: ["PA13"],
  pin47: ["VCAP2"],
  pin48: ["VDD3"],
  pin49: ["PA14"],
  pin50: ["PA15"],
  pin51: ["PC10"],
  pin52: ["PC11"],
  pin53: ["PC12"],
  pin54: ["PD2"],
  pin55: ["PB3"],
  pin56: ["PB4"],
  pin57: ["PB5"],
  pin58: ["PB6"],
  pin59: ["PB7"],
  pin60: ["BOOT0"],
  pin61: ["PB8"],
  pin62: ["PB9"],
  pin63: ["VSS2"],
  pin64: ["VDD4"],
} as const

const pinsPerSide = 16
const pitch = 0.5
const padLength = 1.45
const padWidth = 0.3
const bodyHalfSize = 5
const halfSpan = ((pinsPerSide - 1) / 2) * pitch

const format = (value: number) => `${value.toFixed(3)}mm`

const leftPins = Array.from({ length: pinsPerSide }, (_, i) => i + 1)
const bottomPins = Array.from({ length: pinsPerSide }, (_, i) => i + 17)
const rightPins = Array.from({ length: pinsPerSide }, (_, i) => i + 33)
const topPins = Array.from({ length: pinsPerSide }, (_, i) => i + 49)

const createLeftPads = () =>
  leftPins.map((pin, idx) => {
    const port = `pin${pin}` as keyof typeof pinLabels
    return (
      <smtpad
        key={`L${pin}`}
        portHints={[port]}
        pcbX={`-${format(bodyHalfSize + padLength / 2)}`}
        pcbY={format(halfSpan - idx * pitch)}
        width={format(padWidth)}
        height={format(padLength)}
        shape="rect"
      />
    )
  })

const createRightPads = () =>
  rightPins.map((pin, idx) => {
    const port = `pin${pin}` as keyof typeof pinLabels
    return (
      <smtpad
        key={`R${pin}`}
        portHints={[port]}
        pcbX={format(bodyHalfSize + padLength / 2)}
        pcbY={format(-halfSpan + idx * pitch)}
        width={format(padWidth)}
        height={format(padLength)}
        shape="rect"
      />
    )
  })

const createBottomPads = () =>
  bottomPins.map((pin, idx) => {
    const port = `pin${pin}` as keyof typeof pinLabels
    return (
      <smtpad
        key={`B${pin}`}
        portHints={[port]}
        pcbY={`-${format(bodyHalfSize + padLength / 2)}`}
        pcbX={format(-halfSpan + idx * pitch)}
        width={format(padLength)}
        height={format(padWidth)}
        shape="rect"
      />
    )
  })

const createTopPads = () =>
  topPins.map((pin, idx) => {
    const port = `pin${pin}` as keyof typeof pinLabels
    return (
      <smtpad
        key={`T${pin}`}
        portHints={[port]}
        pcbY={format(bodyHalfSize + padLength / 2)}
        pcbX={format(halfSpan - idx * pitch)}
        width={format(padLength)}
        height={format(padWidth)}
        shape="rect"
      />
    )
  })

export const STM32F405RG = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schematicSymbol={{ type: "quad", pinsPerSide }}
      manufacturerPartNumber="STM32F405RGT6"
      supplierPartNumbers={{
        digikey: ["497-12362-ND"],
        mouser: ["511-STM32F405RGT6"],
      }}
      footprint={
        <footprint>
          {createLeftPads()}
          {createBottomPads()}
          {createRightPads()}
          {createTopPads()}
        </footprint>
      }
      {...props}
    />
  )
}
