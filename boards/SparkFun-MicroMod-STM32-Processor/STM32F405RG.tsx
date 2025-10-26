import React from "react"

const pinsPerSide = 16
const pitch = 0.5
const padLength = 0.25
const padWidth = 1.5 // <-- this is the thing you want to increase
const bodyHalfSize = 5
const halfSpan = ((pinsPerSide - 1) / 2) * pitch

const mm = (v: number) => `${v.toFixed(3)}mm`

const leftPins = Array.from({ length: pinsPerSide }, (_, i) => i + 1)
const bottomPins = Array.from({ length: pinsPerSide }, (_, i) => i + 17)
const rightPins = Array.from({ length: pinsPerSide }, (_, i) => i + 33)
const topPins = Array.from({ length: pinsPerSide }, (_, i) => i + 49)

const createLeftPads = () =>
  leftPins.map((pin, idx) => (
    <smtpad
      portHints={[`pin${pin}`]}
      pcbX={`-${mm(bodyHalfSize + padLength / 2)}`}
      pcbY={mm(halfSpan - idx * pitch)}
      width={mm(padWidth)}
      height={mm(padLength)}
      shape="rect"
    />
  ))

const createRightPads = () =>
  rightPins.map((pin, idx) => (
    <smtpad
      portHints={[`pin${pin}`]}
      pcbX={mm(bodyHalfSize + padLength / 2)}
      pcbY={mm(-halfSpan + idx * pitch)}
      width={mm(padWidth)}
      height={mm(padLength)}
      shape="rect"
    />
  ))

const createBottomPads = () =>
  bottomPins.map((pin, idx) => (
    <smtpad
      portHints={[`pin${pin}`]}
      pcbY={`-${mm(bodyHalfSize + padLength / 2)}`}
      pcbX={mm(-halfSpan + idx * pitch)}
      width={mm(padLength)}
      height={mm(padWidth)} // flipped because pads are rotated
      shape="rect"
    />
  ))

const createTopPads = () =>
  topPins.map((pin, idx) => (
    <smtpad
      portHints={[`pin${pin}`]}
      pcbY={mm(bodyHalfSize + padLength / 2)}
      pcbX={mm(halfSpan - idx * pitch)}
      width={mm(padLength)}
      height={mm(padWidth)} // flipped here too
      shape="rect"
    />
  ))

export const LQFP64_WidePads = (
  <footprint name="lqfp64_p0.5mm_widepads">
    {createLeftPads()}
    {createBottomPads()}
    {createRightPads()}
    {createTopPads()}
  </footprint>
)

export const STM32F405RG = (props: any) => {
  // 1. Physical pad -> logical ID(s)
  // MAKE SURE these pin# keys match your actual LQFP64_WidePads pin numbering!
  //
  // Each array below should usually have exactly one string.
  // That string is the logical ID for that pad.
  //
  const pinLabels = {
    pin1: "VBAT",
    pin2: "PC13",
    pin3: "PC14",
    pin4: "PC15",
    pin5: "PH0",
    pin6: "PH1",
    pin7: "NRST",
    pin8: "PC0",
    pin9: "PC1",
    pin10: "PC2",
    pin11: "PC3",
    pin12: "VSSA",
    pin13: "VDDA",
    pin14: "PA0",
    pin15: "PA1",
    pin16: "PA2_UART2_TX",
    pin17: "PA3_UART2_RX",
    pin18: "VSS1",
    pin19: "VDD1",
    pin20: "PA4_SPI1_NSS",
    pin21: "PA5_SPI1_SCK",
    pin22: "PA6_SPI1_MISO",
    pin23: "PA7_SPI1_MOSI",
    pin24: "PC4",
    pin25: "PC5",
    pin26: "PB0",
    pin27: "PB1",
    pin28: "PB2_BOOT1",
    pin29: "PB10",
    pin30: "PB11",
    pin31: "VCAP1",
    pin32: "VDD2",
    pin33: "PB12_I2S2_WS",
    pin34: "PB13_I2S2_CK",
    pin35: "PB14_I2S2_XD",
    pin36: "PB15_I2S2_SD",
    pin37: "PC6_I2S2_MCK",
    pin38: "PC7",
    pin39: "PC8_SDIO_D0",
    pin40: "PC9_SDIO_D1",
    pin41: "PA8",
    pin42: "PA9_UART1_TX",
    pin43: "PA10_UART1_RX",
    pin44: "PA11",
    pin45: "PA12",
    pin46: "PA13_JTMS",
    pin47: "VCAP2",
    pin48: "VDD3",
    pin49: "PA14_JTCK",
    pin50: "PA15_JTDI",
    pin51: "PC10_SDIO_D2",
    pin52: "PC11_SDIO_D3",
    pin53: "PC12_SDIO_CLK",
    pin54: "PD2_SDIO_CMD",
    pin55: "PB3_JTDO",
    pin56: "PB4_JTRST",
    pin57: "PB5",
    pin58: "PB6",
    pin59: "PB7",
    pin60: "BOOT0",
    pin61: "PB8",
    pin62: "PB9",
    pin63: "VSS2",
    pin64: "VDD4",
  }

  /**
   * 2. Schematic pin arrangement
   *
   * This is the visual vertical order for each side of the symbol.
   * These arrays MUST use the same logical IDs you used above in pinLabels values.
   *
   * Whatever comes first is placed at the TOP.
   *
   * You can rearrange/group however you want.
   */
  const schPinArrangement = {
    leftSide: {
      direction: "top-to-bottom",
      pins: [
        "VBAT",
        "VDD1",
        "VDD2",
        "VDD3",
        "VDD4",
        "VDDA",
        "VCAP1",
        "VCAP2",
        "NRST",
        "BOOT0",
        "PA0",
        "PA1",
        "PA2_UART2_TX",
        "PA3_UART2_RX",
        "PA4_SPI1_NSS",
        "PA5_SPI1_SCK",
        "PA6_SPI1_MISO",
        "PA7_SPI1_MOSI",
        "PA8",
        "PA9_UART1_TX",
        "PA10_UART1_RX",
        "PA11",
        "PA12",
        "PA13_JTMS",
        "PA14_JTCK",
        "PA15_JTDI",
        "PH0",
        "PH1",
        "PD2_SDIO_CMD",
        "VSS1",
        "VSS2",
        "VSSA",
      ],
    },

    rightSide: {
      direction: "top-to-bottom",
      pins: [
        "PB0",
        "PB1",
        "PB2_BOOT1",
        "PB3_JTDO",
        "PB4_JTRST",
        "PB5",
        "PB6",
        "PB7",
        "PB8",
        "PB9",
        "PB10",
        "PB11",
        "PB12_I2S2_WS",
        "PB13_I2S2_CK",
        "PB14_I2S2_XD",
        "PB15_I2S2_SD",
        "PC0",
        "PC1",
        "PC2",
        "PC3",
        "PC4",
        "PC5",
        "PC6_I2S2_MCK",
        "PC7",
        "PC8_SDIO_D0",
        "PC9_SDIO_D1",
        "PC10_SDIO_D2",
        "PC11_SDIO_D3",
        "PC12_SDIO_CLK",
        "PC13",
        "PC14",
        "PC15",
      ],
    },
  }

  /**
   * 3. Optional: spacing between groups
   *
   * Just like schPinStyle in MicroModBoard. Keys are *physical pins*, e.g. "pin14".
   * You can sprinkle visual gaps after certain important pads.
   *
   * You can leave this empty if you don't need spacing.
   */
  const schPinStyle = {
    // example group gaps, tune these later:
    pin14: { marginBottom: 0.4 }, // after BOOT0
    pin6: { marginBottom: 0.4 }, // after clock pins
    pin18: { marginBottom: 0.6 }, // after USB_DP
    pin30: { marginBottom: 0.6 }, // after PB9_CAN_TX
    pin28: { marginBottom: 0.6 }, // after SPI1_MOSI
    pin52: { marginBottom: 0.6 }, // after SPI2_MOSI
    pin34: { marginBottom: 0.6 }, // after PD2_SDIO_CMD_UART5_RX
  }

  // 4. Render the chip in schematic+pcb using the same API MicroModBoard uses. :contentReference[oaicite:1]{index=1}
  return (
    <chip
      {...props}
      name={props.name ?? "U1"}
      footprint={LQFP64_WidePads}
      schWidth={2.8}
      pcbX={0}
      pcbY={0}
      pinLabels={pinLabels}
      schPinArrangement={schPinArrangement}
      schPinStyle={schPinStyle}
    />
  )
}
/*
const STM32F405RG = (props: any) => (
  <chip
    name="U1"
    footprint={LQFP64_WidePads}
    pinLabels={{
      pin1: "VBAT",
      pin2: "PC13",
      pin3: "PC14",
      pin4: "PC15",
      pin5: "PH0",
      pin6: "PH1",
      pin7: "NRST",
      pin8: "PC0",
      pin9: "PC1",
      pin10: "PC2",
      pin11: "PC3",
      pin12: "VSSA",
      pin13: "VDDA",
      pin14: "PA0",
      pin15: "PA1",
      pin16: "PA2_UART2_TX",
      pin17: "PA3_UART2_RX",
      pin18: "VSS1",
      pin19: "VDD1",
      pin20: "PA4_SPI1_NSS",
      pin21: "PA5_SPI1_SCK",
      pin22: "PA6_SPI1_MISO",
      pin23: "PA7_SPI1_MOSI",
      pin24: "PC4",
      pin25: "PC5",
      pin26: "PB0",
      pin27: "PB1",
      pin28: "PB2_BOOT1",
      pin29: "PB10",
      pin30: "PB11",
      pin31: "VCAP1",
      pin32: "VDD2",
      pin33: "PB12_I2S2_WS",
      pin34: "PB13_I2S2_CK",
      pin35: "PB14_I2S2_XD",
      pin36: "PB15_I2S2_SD",
      pin37: "PC6_I2S2_MCK",
      pin38: "PC7",
      pin39: "PC8_SDIO_D0",
      pin40: "PC9_SDIO_D1",
      pin41: "PA8",
      pin42: "PA9_UART1_TX",
      pin43: "PA10_UART1_RX",
      pin44: "PA11",
      pin45: "PA12",
      pin46: "PA13_JTMS",
      pin47: "VCAP2",
      pin48: "VDD3",
      pin49: "PA14_JTCK",
      pin50: "PA15_JTDI",
      pin51: "PC10_SDIO_D2",
      pin52: "PC11_SDIO_D3",
      pin53: "PC12_SDIO_CLK",
      pin54: "PD2_SDIO_CMD",
      pin55: "PB3_JTDO",
      pin56: "PB4_JTRST",
      pin57: "PB5",
      pin58: "PB6",
      pin59: "PB7",
      pin60: "BOOT0",
      pin61: "PB8",
      pin62: "PB9",
      pin63: "VSS2",
      pin64: "VDD4",
    }}
    {...props}
  />
)

*/

export default STM32F405RG
