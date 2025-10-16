import React from "react"

// ---------------- MCU (STM32F405RG, LQFP64) ----------------
const STM32F405RG = (props: any) => (
  <chip
    name="U1"
    footprint="qfp64_p0.5mm"
    pinLabels={{
      pin1: "VBAT",
      pin3: "PC14_LSE",
      pin4: "PC15_LSE",
      pin5: "PH0_HSE",
      pin6: "PH1_HSE",
      pin7: "NRST",

      // Power / refs (representative)
      pin9: "VSSA",
      pin10: "VDDA",
      pin18: "VSS",
      pin19: "VDD",
      pin31: "VCAP1",
      pin47: "VCAP2",
      pin63: "VSS3",
      pin64: "VDD3",

      // BOOT
      pin60: "BOOT0",

      // USB FS
      pin44: "PA11_USB_DM",
      pin45: "PA12_USB_DP",

      // SWD
      pin46: "PA13_SWDIO",
      pin49: "PA14_SWCLK",

      // I2C1
      pin58: "PB8_I2C1_SCL",
      pin59: "PB9_I2C1_SDA",

      // UART1
      pin37: "PA9_UART1_TX",
      pin38: "PA10_UART1_RX",

      // SPI2 (flash)
      pin50: "PB12_SPI2_NSS",
      pin51: "PB13_SPI2_SCK",
      pin52: "PB14_SPI2_MISO",
      pin53: "PB15_SPI2_MOSI",

      // SDIO
      pin40: "PC8_SDIO_D0",
      pin41: "PC9_SDIO_D1",
      pin42: "PC10_SDIO_D2",
      pin43: "PC11_SDIO_D3",
      pin56: "PC12_SDIO_CLK",
      pin54: "PD2_SDIO_CMD",
    }}
    {...props}
  />
)

// ---------------- External Flash (W25Q128, SOIC-8) ----------
const W25Q128 = (props: any) => (
  <chip
    name="U2"
    pinLabels={{
      pin1: "CS_N",
      pin2: "DO", // MISO
      pin3: "WP_N",
      pin4: "GND",
      pin5: "DI", // MOSI
      pin6: "CLK", // SCK
      pin7: "HOLD_N",
      pin8: "VCC",
    }}
    {...props}
  />
)

// ---------------- MicroMod Edge (only pins we use) ----------
const MicroModEdge = (props: any) => (
  <chip
    name="J1"
    pinLabels={{
      pin1: "V3V3",
      pin2: "GND",
      pin3: "USB_DM",
      pin4: "USB_DP",
      pin5: "SWDIO",
      pin6: "SWCLK",
      pin7: "I2C_SCL",
      pin8: "I2C_SDA",
      pin9: "UART_TX",
      pin10: "UART_RX",
      pin11: "SPI_SCK",
      pin12: "SPI_MISO",
      pin13: "SPI_MOSI",
      pin14: "SDIO_CMD",
      pin15: "SDIO_CLK",
      pin16: "SDIO_D0",
      pin17: "SDIO_D1",
      pin18: "SDIO_D2",
      pin19: "SDIO_D3",
      pin20: "RESET_N",
      pin21: "BOOT_N",
      pin22: "STAT_LED",
    }}
    {...props}
  />
)

// ---------------- Board ------------------------------------
const Board = () => (
  <board width="50mm" height="22mm" name="SparkFun MicroMod STM32 Processor">
    {/* Parts */}
    <MicroModEdge x={-22} y={0} />
    <STM32F405RG x={12} y={0} />
    <W25Q128 x={8} y={-12} />

    {/* Nets (rails + named busses) */}
    <net name="V3V3" />
    <net name="GND" />
    <net name="I2C_SCL" />
    <net name="I2C_SDA" />
    <net name="UART_TX" />
    <net name="UART_RX" />
    <net name="SDIO_CMD" />
    <net name="SDIO_CLK" />

    {/* Power */}
    <trace path={[".J1 > .V3V3", ".U2 > .VCC"]} />
    <trace path={[".J1 > .GND", ".U2 > .GND"]} />
    <trace path={[".U1 > .VDD", ".J1 > .V3V3"]} />
    <trace path={[".U1 > .VSS", ".J1 > .GND"]} />
    <trace path={[".U1 > .VDDA", ".J1 > .V3V3"]} />
    <trace path={[".U1 > .VSSA", ".J1 > .GND"]} />

    {/* USB to MCU */}
    <trace path={[".J1 > .USB_DM", ".U1 > .PA11_USB_DM"]} />
    <trace path={[".J1 > .USB_DP", ".U1 > .PA12_USB_DP"]} />

    {/* SWD */}
    <trace path={[".J1 > .SWDIO", ".U1 > .PA13_SWDIO"]} />
    <trace path={[".J1 > .SWCLK", ".U1 > .PA14_SWCLK"]} />

    {/* I2C1 */}
    <trace path={[".J1 > .I2C_SCL", ".U1 > .PB8_I2C1_SCL"]} />
    <trace path={[".J1 > .I2C_SDA", ".U1 > .PB9_I2C1_SDA"]} />

    {/* UART1 */}
    <trace path={[".J1 > .UART_TX", ".U1 > .PA9_UART1_TX"]} />
    <trace path={[".J1 > .UART_RX", ".U1 > .PA10_UART1_RX"]} />

    {/* SDIO */}
    <trace path={[".J1 > .SDIO_CMD", ".U1 > .PD2_SDIO_CMD"]} />
    <trace path={[".J1 > .SDIO_CLK", ".U1 > .PC12_SDIO_CLK"]} />
    <trace path={[".J1 > .SDIO_D0", ".U1 > .PC8_SDIO_D0"]} />
    <trace path={[".J1 > .SDIO_D1", ".U1 > .PC9_SDIO_D1"]} />
    <trace path={[".J1 > .SDIO_D2", ".U1 > .PC10_SDIO_D2"]} />
    <trace path={[".J1 > .SDIO_D3", ".U1 > .PC11_SDIO_D3"]} />

    {/* External SPI Flash on SPI2 */}
    <trace path={[".U1 > .PB13_SPI2_SCK", ".U2 > .CLK"]} />
    <trace path={[".U1 > .PB14_SPI2_MISO", ".U2 > .DO"]} />
    <trace path={[".U1 > .PB15_SPI2_MOSI", ".U2 > .DI"]} />
    <trace path={[".U1 > .PB12_SPI2_NSS", ".U2 > .CS_N"]} />
    {/* Pull WP/HOLD high to VCC (representative) */}
    <trace path={[".U2 > .WP_N", ".J1 > .V3V3"]} />
    <trace path={[".U2 > .HOLD_N", ".J1 > .V3V3"]} />

    {/* Reset / Boot (stubs to edge) */}
    <trace path={[".J1 > .RESET_N", ".U1 > .NRST"]} />
    <trace path={[".J1 > .BOOT_N", ".U1 > .BOOT0"]} />
  </board>
)

export default Board
