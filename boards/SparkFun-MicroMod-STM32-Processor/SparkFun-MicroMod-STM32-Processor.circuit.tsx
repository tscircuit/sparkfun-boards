import { STM32F405RG } from "./components/STM32F405RG"
import { W25Q128 } from "./components/W25Q128"
import { Crystal3225 } from "./components/Crystal3225"
import { Crystal3215 } from "./components/Crystal3215"
import { DMG2305 } from "./components/DMG2305"
import { MicroModBoard } from "@tscircuit/common"
import { sel } from "@tscircuit/core"

export type BoardMetadata = {
  name: string
  slug: string
  vendor: string
  product_url: string
}

export const micromodStm32Metadata: BoardMetadata = {
  name: "SparkFun MicroMod STM32 Processor",
  slug: "sparkfun-micromod-stm32-processor",
  vendor: "SparkFun",
  product_url:
    "https://www.sparkfun.com/sparkfun-micromod-stm32-processor.html",
}

const selectors = {
  U1: sel.U1(STM32F405RG),
  net: sel.net<
    | "V3P3"
    | "GND"
    | "RESET_N"
    | "BOOT_CTRL"
    | "BOOT0"
    | "USB_D_CONN_P"
    | "USB_D_CONN_N"
    | "USB_D_MCU_P"
    | "USB_D_MCU_N"
    | "USBHOST_D_P"
    | "USBHOST_D_N"
    | "USB_VIN"
    | "HOST_ID"
    | "HOST_VBUS"
    | "SPI_SCK"
    | "SPI_MOSI"
    | "SPI_MISO"
    | "SPI_CS"
    | "FLASH_SCK"
    | "FLASH_SDI"
    | "FLASH_SDO"
    | "FLASH_CS"
    | "AUD_BCLK"
    | "AUD_LRCLK"
    | "AUD_IN"
    | "AUD_OUT"
    | "PWM0"
    | "PWM1"
    | "STAT"
    | "LED_ANODE"
    | "A0"
    | "A1"
    | "D0"
    | "D1"
    | "BUS0"
    | "BUS1"
    | "BUS2"
    | "BUS3"
    | "BUS4"
    | "BUS5"
    | "BUS6"
    | "CAN_RX"
    | "CAN_TX"
    | "I2C_SCL"
    | "I2C_SDA"
    | "I2C_SCL1"
    | "I2C_SDA1"
    | "I2C_INT"
    | "UART_TX1"
    | "UART_RX1"
    | "SWCLK"
    | "SWDIO"
    | "BATT_VIN"
    | "HSE_IN"
    | "HSE_OUT"
    | "LSE_IN"
    | "LSE_OUT"
    | "VCAP1"
    | "VCAP2"
  >(),
}

const schematic = {
  board: { schX: 6.0, schY: 0.4 },
  mcu: { schX: -2.2, schY: 2.2 },
  flash: { schX: -2.2, schY: -4.2 },
  usbSeries: {
    dn: { schX: -6.8, schY: 4.4 },
    dp: { schX: -4.8, schY: 4.4 },
  },
  boot: {
    fet: { schX: 2.6, schY: 4.4 },
    pulldown: { schX: 1.4, schY: 4.4 },
    pullup: { schX: 3.8, schY: 4.4 },
  },
  flashCsPullup: { schX: -0.2, schY: -3.4 },
  resetCap: { schX: 2.6, schY: 0.2 },
  hse: {
    crystal: { schX: -2.0, schY: 3.6 },
    cIn: { schX: -3.4, schY: 3.6 },
    cOut: { schX: -0.6, schY: 3.6 },
  },
  lse: {
    crystal: { schX: -2.0, schY: 1.2 },
    cIn: { schX: -3.4, schY: 1.2 },
    cOut: { schX: -0.6, schY: 1.2 },
  },
  vcap1: { schX: -4.6, schY: 3.0 },
  vcap2: { schX: -4.6, schY: 1.6 },
  decoupling: {
    c8: { schX: -1.6, schY: 0.6 },
    c9: { schX: -0.4, schY: 0.6 },
    c10: { schX: 0.8, schY: 0.6 },
    c11: { schX: -1.6, schY: -0.6 },
    c12: { schX: -0.4, schY: -0.6 },
    c13: { schX: 0.8, schY: -0.6 },
    c14: { schX: 2, schY: -0.6 },
  },
  flashDecoupling: { schX: -3.8, schY: -4.2 },
  statusLed: {
    resistor: { schX: -4.2, schY: -6.4 },
    led: { schX: -2.8, schY: -6.4 },
  },
} as const

const pcbPlacement = {
  mcu: { pcbX: 0, pcbY: 0 },
  flash: { pcbX: -6.7, pcbY: 1.6 },
  usbSeries: {
    dn: { pcbX: -0.7, pcbY: -9.4 },
    dp: { pcbX: 0.7, pcbY: -9.4 },
  },
  boot: {
    fet: { pcbX: 2.5, pcbY: 5.7 },
    pulldown: { pcbX: 1.5, pcbY: 5.7 },
    pullup: { pcbX: 3.6, pcbY: 5.7 },
  },
  flashCsPullup: { pcbX: -6.1, pcbY: 1.2 },
  resetCap: { pcbX: 0.9, pcbY: 2.8 },
  hse: {
    crystal: { pcbX: 4.7, pcbY: 7.0 },
    cIn: { pcbX: 5.5, pcbY: 7.3 },
    cOut: { pcbX: 3.9, pcbY: 7.3 },
  },
  lse: {
    crystal: { pcbX: 1.8, pcbY: -4.6 },
    cIn: { pcbX: 2.6, pcbY: -4.3 },
    cOut: { pcbX: 1.0, pcbY: -4.3 },
  },
  vcap1: { pcbX: -3.2, pcbY: 1.3 },
  vcap2: { pcbX: -3.2, pcbY: -1.3 },
  decoupling: {
    c8: { pcbX: 0.35, pcbY: 1.0 },
    c9: { pcbX: 0.35, pcbY: -1.0 },
    c10: { pcbX: -0.95, pcbY: -0.1 },
    c11: { pcbX: -0.4, pcbY: 2.0 },
    c12: { pcbX: -0.4, pcbY: -2.0 },
    c13: { pcbX: 1.2, pcbY: 0.6 },
    c14: { pcbX: 1.2, pcbY: -0.6 },
  },
  flashDecoupling: { pcbX: -6.9, pcbY: 0.9 },
  statusLed: {
    resistor: { pcbX: 3.9, pcbY: 8.3 },
    led: { pcbX: 5.2, pcbY: 8.3 },
  },
} as const

const silkscreenLabels = [
  { text: "STAT", x: 7.4, y: 7.1, rotation: 90, font: 0.82 },
  { text: "INT", x: -7.3, y: 4.0, rotation: 90, font: 0.82 },
  { text: "PWR", x: -7.3, y: -0.2, rotation: 90, font: 0.82 },
  { text: "STM32F405", x: 7.3, y: 0.0, rotation: -90, font: 0.82 },
  { text: "M", x: 7.3, y: -6.8, rotation: -90, font: 0.92 },
] as const

const decorativePaths = [
  {
    layer: "top",
    color: "#ff6adf",
    route: [
      { x: 7.45, y: 6.9 },
      { x: 7.85, y: 8.1 },
      { x: 6.9, y: 8.1 },
      { x: 7.45, y: 6.9 },
    ],
  },
  {
    layer: "top",
    color: "#2d82ff",
    route: [
      { x: -2.6, y: -7.8 },
      { x: 2.6, y: -7.8 },
      { x: 2.6, y: -7.95 },
      { x: -2.6, y: -7.95 },
      { x: -2.6, y: -7.8 },
    ],
  },
] as const

export const MicromodStm32Processor = () => {
  const net = selectors.net

  const boardConnections = {
    V3_3_1: net.V3P3,
    V3_3_2: net.V3P3,
    N_RESET: net.RESET_N,
    N_BOOT: net.BOOT_CTRL,
    USB_VIN: net.USB_VIN,
    USB_D_P: net.USB_D_CONN_P,
    USB_D_N: net.USB_D_CONN_N,
    USBHOST_D_P: net.USBHOST_D_P,
    USBHOST_D_N: net.USBHOST_D_N,
    CAN_TX: net.CAN_TX,
    CAN_RX: net.CAN_RX,
    SWDIO: net.SWDIO,
    SWDCK: net.SWCLK,
    I2C_SDA: net.I2C_SDA,
    I2C_SCL: net.I2C_SCL,
    I2C_SDA1: net.I2C_SDA1,
    I2C_SCL1: net.I2C_SCL1,
    I2C_N_INT: net.I2C_INT,
    D0: net.D0,
    D1: net.D1,
    TX1: net.UART_TX1,
    RX1: net.UART_RX1,
    PWM0: net.PWM0,
    PWM1: net.PWM1,
    A0: net.A0,
    A1: net.A1,
    BATT_VIN_3: net.BATT_VIN,
    AUD_BCLK: net.AUD_BCLK,
    AUD_LRCLK: net.AUD_LRCLK,
    AUD_IN: net.AUD_IN,
    AUD_OUT: net.AUD_OUT,
    SPI_SCK: net.SPI_SCK,
    SPI_SDO: net.SPI_MOSI,
    SPI_SDI: net.SPI_MISO,
    SPI_N_CS: net.SPI_CS,
    G0: net.BUS0,
    G1: net.BUS1,
    G2: net.BUS2,
    G3: net.BUS3,
    G4: net.BUS4,
    G5: net.BUS5,
    G6: net.BUS6,
    G10: net.HOST_VBUS,
    G11: net.HOST_ID,
    GND1: net.GND,
    GND2: net.GND,
    GND3: net.GND,
    GND4: net.GND,
    GND5: net.GND,
    GND6: net.GND,
    GND7: net.GND,
  } satisfies Record<string, any>

  return (
    <MicroModBoard
      name="J1"
      variant="processor"
      autorouter="auto-cloud"
      {...schematic.board}
      connections={boardConnections}
    >
      <schematictext
        text="STM32F405RG"
        schX={-0.5}
        schY={6.4}
        anchor="center"
        fontSize={0.24}
        color="gray"
      />
      <schematictext
        text="Boot Inversion"
        schX={3.6}
        schY={5.4}
        anchor="center"
        fontSize={0.24}
        color="gray"
      />
      <schematictext
        text="Reset"
        schX={3.8}
        schY={-0.2}
        anchor="center"
        fontSize={0.24}
        color="gray"
      />
      <schematictext
        text="128 Mbit Flash"
        schX={0.2}
        schY={-3.6}
        anchor="center"
        fontSize={0.24}
        color="gray"
      />
      <schematictext
        text="Status LED"
        schX={-3.6}
        schY={-4.8}
        anchor="center"
        fontSize={0.24}
        color="gray"
      />

      <STM32F405RG
        name="U1"
        pcbX={pcbPlacement.mcu.pcbX}
        pcbY={pcbPlacement.mcu.pcbY}
        {...schematic.mcu}
        connections={{
          VDDA: net.V3P3,
          VDD1: net.V3P3,
          VDD2: net.V3P3,
          VDD3: net.V3P3,
          VDD4: net.V3P3,
          VSSA: net.GND,
          VSS1: net.GND,
          VSS2: net.GND,
          VCAP1: net.VCAP1,
          VCAP2: net.VCAP2,
          NRST: net.RESET_N,
          BOOT0: net.BOOT0,
          PA13: net.SWDIO,
          PA14: net.SWCLK,
          PA11: net.USB_D_MCU_N,
          PA12: net.USB_D_MCU_P,
          PA9: net.UART_TX1,
          PA10: net.UART_RX1,
          PA5: net.SPI_SCK,
          PA6: net.SPI_MISO,
          PA7: net.SPI_MOSI,
          PC4: net.SPI_CS,
          PB12: net.HOST_ID,
          PB15: net.USBHOST_D_P,
          PB14: net.USBHOST_D_N,
          PB13: net.HOST_VBUS,
          PB10: net.I2C_SCL,
          PB11: net.I2C_SDA,
          PB6: net.I2C_SCL1,
          PB7: net.I2C_SDA1,
          PB1: net.I2C_INT,
          PC0: net.D0,
          PC1: net.D1,
          PC5: net.A0,
          PB0: net.A1,
          PC6: net.PWM0,
          PC7: net.PWM1,
          PD2: net.BUS0,
          PA8: net.BUS1,
          PA0: net.BUS2,
          PC8: net.BUS3,
          PC9: net.BUS4,
          PC13: net.BUS5,
          PC2: net.BUS6,
          PB8: net.CAN_RX,
          PB9: net.CAN_TX,
          PB3: net.AUD_BCLK,
          PB4: net.AUD_OUT,
          PB5: net.AUD_IN,
          PA4: net.AUD_LRCLK,
          PA15: net.STAT,
          PA1: net.BATT_VIN,
          PA2: net.GND,
          PA3: net.GND,
          PB2: net.GND,
          PH0: net.HSE_IN,
          PH1: net.HSE_OUT,
          PC14: net.LSE_IN,
          PC15: net.LSE_OUT,
          PC10: net.FLASH_SCK,
          PC11: net.FLASH_SDO,
          PC12: net.FLASH_SDI,
          PC3: net.FLASH_CS,
        }}
      />

      <W25Q128
        name="U3"
        pcbX={pcbPlacement.flash.pcbX}
        pcbY={pcbPlacement.flash.pcbY}
        {...schematic.flash}
        connections={{
          N_CS: net.FLASH_CS,
          CLK: net.FLASH_SCK,
          D0_DI: net.FLASH_SDI,
          D1_DO: net.FLASH_SDO,
          D2_N_WP: net.V3P3,
          D3_N_HOLD: net.V3P3,
          V3_3: net.V3P3,
          GND: net.GND,
          EP: net.GND,
        }}
      />

      {/* USB FS 22 Ω series resistors */}
      <resistor
        name="R2"
        resistance="22"
        footprint="0402"
        pcbX={pcbPlacement.usbSeries.dn.pcbX}
        pcbY={pcbPlacement.usbSeries.dn.pcbY}
        {...schematic.usbSeries.dn}
        connections={{ pin1: net.USB_D_CONN_N, pin2: net.USB_D_MCU_N }}
      />
      <resistor
        name="R3"
        resistance="22"
        footprint="0402"
        pcbX={pcbPlacement.usbSeries.dp.pcbX}
        pcbY={pcbPlacement.usbSeries.dp.pcbY}
        {...schematic.usbSeries.dp}
        connections={{ pin1: net.USB_D_CONN_P, pin2: net.USB_D_MCU_P }}
      />

      {/* Boot0 gating network */}
      <DMG2305
        name="Q1"
        pcbX={pcbPlacement.boot.fet.pcbX}
        pcbY={pcbPlacement.boot.fet.pcbY}
        {...schematic.boot.fet}
        connections={{
          SOURCE: net.V3P3,
          DRAIN: net.BOOT0,
          GATE: net.BOOT_CTRL,
        }}
      />
      <resistor
        name="R1"
        resistance="100k"
        footprint="0402"
        pcbX={pcbPlacement.boot.pulldown.pcbX}
        pcbY={pcbPlacement.boot.pulldown.pcbY}
        {...schematic.boot.pulldown}
        connections={{ pin1: net.BOOT0, pin2: net.GND }}
      />
      <resistor
        name="R5"
        resistance="100k"
        footprint="0402"
        pcbX={pcbPlacement.boot.pullup.pcbX}
        pcbY={pcbPlacement.boot.pullup.pcbY}
        {...schematic.boot.pullup}
        connections={{ pin1: net.BOOT_CTRL, pin2: net.V3P3 }}
      />

      {/* Flash chip select pull-up */}
      <resistor
        name="R11"
        resistance="100k"
        footprint="0402"
        pcbX={pcbPlacement.flashCsPullup.pcbX}
        pcbY={pcbPlacement.flashCsPullup.pcbY}
        {...schematic.flashCsPullup}
        connections={{ pin1: net.FLASH_CS, pin2: net.V3P3 }}
      />

      {/* Reset RC */}
      <capacitor
        name="C15"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={pcbPlacement.resetCap.pcbX}
        pcbY={pcbPlacement.resetCap.pcbY}
        {...schematic.resetCap}
        connections={{ pin1: net.RESET_N, pin2: net.GND }}
      />

      {/* Oscillators */}
      <Crystal3225
        name="Y1"
        pcbX={pcbPlacement.hse.crystal.pcbX}
        pcbY={pcbPlacement.hse.crystal.pcbY}
        {...schematic.hse.crystal}
        connections={{ X1: net.HSE_IN, X2: net.HSE_OUT }}
      />
      <capacitor
        name="C1"
        capacitance="22pF"
        footprint="0402"
        pcbX={pcbPlacement.hse.cIn.pcbX}
        pcbY={pcbPlacement.hse.cIn.pcbY}
        {...schematic.hse.cIn}
        connections={{ pin1: net.HSE_IN, pin2: net.GND }}
      />
      <capacitor
        name="C2"
        capacitance="22pF"
        footprint="0402"
        pcbX={pcbPlacement.hse.cOut.pcbX}
        pcbY={pcbPlacement.hse.cOut.pcbY}
        {...schematic.hse.cOut}
        connections={{ pin1: net.HSE_OUT, pin2: net.GND }}
      />

      <Crystal3215
        name="Y2"
        pcbX={pcbPlacement.lse.crystal.pcbX}
        pcbY={pcbPlacement.lse.crystal.pcbY}
        {...schematic.lse.crystal}
        connections={{ X1: net.LSE_IN, X2: net.LSE_OUT }}
      />
      <capacitor
        name="C3"
        capacitance="15pF"
        footprint="0402"
        pcbX={pcbPlacement.lse.cIn.pcbX}
        pcbY={pcbPlacement.lse.cIn.pcbY}
        {...schematic.lse.cIn}
        connections={{ pin1: net.LSE_IN, pin2: net.GND }}
      />
      <capacitor
        name="C4"
        capacitance="15pF"
        footprint="0402"
        pcbX={pcbPlacement.lse.cOut.pcbX}
        pcbY={pcbPlacement.lse.cOut.pcbY}
        {...schematic.lse.cOut}
        connections={{ pin1: net.LSE_OUT, pin2: net.GND }}
      />

      {/* VCAP requirements */}
      <capacitor
        name="C5"
        capacitance="2.2uF"
        footprint="0402"
        pcbX={pcbPlacement.vcap1.pcbX}
        pcbY={pcbPlacement.vcap1.pcbY}
        {...schematic.vcap1}
        connections={{ pin1: net.VCAP1, pin2: net.GND }}
      />
      <capacitor
        name="C6"
        capacitance="2.2uF"
        footprint="0402"
        pcbX={pcbPlacement.vcap2.pcbX}
        pcbY={pcbPlacement.vcap2.pcbY}
        {...schematic.vcap2}
        connections={{ pin1: net.VCAP2, pin2: net.GND }}
      />

      {/* Core decoupling */}
      <capacitor
        name="C8"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={pcbPlacement.decoupling.c8.pcbX}
        pcbY={pcbPlacement.decoupling.c8.pcbY}
        {...schematic.decoupling.c8}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />
      <capacitor
        name="C9"
        capacitance="1uF"
        footprint="0402"
        pcbX={pcbPlacement.decoupling.c9.pcbX}
        pcbY={pcbPlacement.decoupling.c9.pcbY}
        {...schematic.decoupling.c9}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />
      <capacitor
        name="C10"
        capacitance="4.7uF"
        footprint="0402"
        pcbX={pcbPlacement.decoupling.c10.pcbX}
        pcbY={pcbPlacement.decoupling.c10.pcbY}
        {...schematic.decoupling.c10}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />
      <capacitor
        name="C11"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={pcbPlacement.decoupling.c11.pcbX}
        pcbY={pcbPlacement.decoupling.c11.pcbY}
        {...schematic.decoupling.c11}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />
      <capacitor
        name="C12"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={pcbPlacement.decoupling.c12.pcbX}
        pcbY={pcbPlacement.decoupling.c12.pcbY}
        {...schematic.decoupling.c12}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />
      <capacitor
        name="C13"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={pcbPlacement.decoupling.c13.pcbX}
        pcbY={pcbPlacement.decoupling.c13.pcbY}
        {...schematic.decoupling.c13}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />
      <capacitor
        name="C14"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={pcbPlacement.decoupling.c14.pcbX}
        pcbY={pcbPlacement.decoupling.c14.pcbY}
        {...schematic.decoupling.c14}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />

      {/* Flash decoupling */}
      <capacitor
        name="C20"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={pcbPlacement.flashDecoupling.pcbX}
        pcbY={pcbPlacement.flashDecoupling.pcbY}
        {...schematic.flashDecoupling}
        connections={{ pin1: net.V3P3, pin2: net.GND }}
      />

      {/* Status LED (PA15 -> resistor -> LED -> GND) */}
      <resistor
        name="R12"
        resistance="1k"
        footprint="0402"
        pcbX={pcbPlacement.statusLed.resistor.pcbX}
        pcbY={pcbPlacement.statusLed.resistor.pcbY}
        {...schematic.statusLed.resistor}
        connections={{ pin1: net.STAT, pin2: net.LED_ANODE }}
      />
      <led
        name="D5"
        color="blue"
        footprint="0603"
        pcbX={pcbPlacement.statusLed.led.pcbX}
        pcbY={pcbPlacement.statusLed.led.pcbY}
        {...schematic.statusLed.led}
        connections={{ pin1: net.LED_ANODE, pin2: net.GND }}
      />
    </MicroModBoard>
  )
}
