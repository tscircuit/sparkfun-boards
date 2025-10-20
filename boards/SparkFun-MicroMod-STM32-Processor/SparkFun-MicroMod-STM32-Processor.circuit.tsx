import React from "react"
import STM32F405RG from "./STM32F405RG"
import W25Q128 from "./W25Q128"
import MicroModEdge from "./MicroModEdge"
import { sel } from "@tscircuit/core"

const Board = () => (
  <board width={100} height={100} name="SparkFun MicroMod STM32 Processor">
    <MicroModEdge name="J1" schX={30} schY={0} pcbX={-40} pcbY={-40} pcbRotation={0} connections={{ V3_3: "net.V3_3", RESET_N: "net.RESET_N", BOOT_N: "net.BOOT_N", SWDIO: "net.SWDIO", SWDCK: "net.SWCLK", AUD_MCLK: "net.AUD_MCLK", AUD_LRCLK: "net.AUD_LRCLK", AUD_BCLK: "net.AUD_BCLK", I2C_SCL: "net.I2C_SCL", I2C_SDA: "net.I2C_SDA", GND: "net.GND", A0: "net.A0", A1: "net.A1", PWM0: "net.PWM0", PWM1: "net.PWM1", D0: "net.D0", D1_CAM_TRIG: "net.D1", TX1: "net.TX1", RX1: "net.RX1", G0_BUS0: "net.G0", G1_BUS1: "net.G1", G2_BUS2: "net.G2", G3_BUS3: "net.G3", G4_BUS4: "net.G4", G5_BUS5: "net.G5", G6_BUS6: "net.G6", G8: "net.G8", G10_ADC_DP_CAM_VSYNC: "net.HOST_VBUS", G11: "net.G11", SPI_SCK: "net.SCK", SPI_SDO: "net.C0P1", SPI_SDI: "net.C1P0", SPI_CS: "net.CS", I2C_INT_N: "net.INT_N" }} />

    <STM32F405RG name="U1" schX={0} schY={0} pcbX={0} pcbY={0} pcbRotation={0} connections={{ NRST: "net.RESET", PA0: "net.G2", PA1: "net.BATT_VIN", PA13_JTMS: "net.SWDIO", PA2_UART2_TX: "net.TX1", PA3_UART2_RX: "net.RX1", PA4_SPI1_NSS: "net.AUD_LRCLK", PA5_SPI1_SCK: "net.SCK", PA6_SPI1_MISO: "net.C1P0", PA7_SPI1_MOSI: "net.C0P1", PA8: "net.G1", PB0: "net.A1", PB1: "net.INT_N", PB10: "net.SCL", PB11: "net.SDA", PB12_I2S2_WS: "net.HOST_ID", PB13_I2S2_CK: "net.HOST_VBUS", PB14_I2S2_XD: "net.HOST_DN", PB15_I2S2_SD: "net.HOST_DP", PB3_JTDO: "net.AUD_BCLK", PB4_JTRST: "net.AUD_OUT", PB5: "net.AUD_IN", PB6: "net.SCL1", PB7: "net.SDA1", PB8: "net.CAN_RX", PB9: "net.CAN_TX", PC0: "net.D0", PC1: "net.D1", PC10_SDIO_D2: "net.FLASH_SCK", PC11_SDIO_D3: "net.FLASH_SDO", PC12_SDIO_CLK: "net.FLASH_SDI", PC13: "net.G5", PC2: "net.G6", PC3: "net.FLASH_CS_N", PC4: "net.CS", PC5: "net.A0", PC7: "net.PWM1", PC8_SDIO_D0: "net.G3", PC9_SDIO_D1: "net.G4", PD2_SDIO_CMD: "net.G0" }} />

    <W25Q128 name="U2" schX={5} schY={-15} pcbX={25} pcbY={10} pcbRotation={0} connections={{ V3_3: "net.V3_3", GND: "net.GND", CS_N: "net.FLASH_CS_N", CLK: "net.FLASH_SCK", DO_DI: "net.FLASH_SDI", D1_DO: "net.FLASH_SDO" }} />

    <crystal name="Y1" frequency="12MHz" loadCapacitance="18pF" schX={-10} schY={4} pcbX={-5} pcbY={15} pcbRotation={0} connections={{ pin1: "net.U1_PH0_HSE", pin2: "net.U1_PH1_HSE" }} />
    <capacitor name="C1" footprint="0402" capacitance="22pF" schX={-9} schY={5} pcbX={-7} pcbY={18} pcbRotation={0} connections={{ pin2: "net.GND" }} />
    <capacitor name="C2" footprint="0402" capacitance="22pF" schX={-11} schY={5} pcbX={-3} pcbY={18} pcbRotation={0} connections={{ pin2: "net.GND" }} />

    <crystal name="Y2" frequency="32.768kHz" loadCapacitance="12.5pF" schX={-3} schY={4} pcbX={5} pcbY={20} pcbRotation={0} connections={{ pin1: "U1.pin4", pin2: "U1.pin3" }} />
    <capacitor name="C3" footprint="0402" capacitance="15pF" schX={-4} schY={5} pcbX={3} pcbY={23} pcbRotation={0} connections={{ pin2: "net.GND" }} />
    <capacitor name="C4" footprint="0402" capacitance="15pF" schX={-2} schY={5} pcbX={7} pcbY={23} pcbRotation={0} connections={{ pin2: "net.GND" }} />

    <capacitor name="C5" footprint="0402" capacitance="2.2uF" schX={-5} schY={0} pcbX={-10} pcbY={-5} pcbRotation={0} connections={{ pin2: "net.GND" }} />
    <capacitor name="C6" footprint="0402" capacitance="2.2uF" schX={-7} schY={0} pcbX={10} pcbY={-5} pcbRotation={0} connections={{ pin2: "net.GND" }} />

    <resistor name="R2" footprint="0402" resistance="22" schX={7} schY={-0.9} pcbX={15} pcbY={5} pcbRotation={0} connections={{ pin1: "U1.pin44", pin2: "net.DP" }} />
    <resistor name="R3" footprint="0402" resistance="22" schX={7} schY={0} pcbX={15} pcbY={8} pcbRotation={0} connections={{ pin1: "U1.pin45", pin2: "net.DN" }} />

    <resistor name="R5" resistance="100k" footprint="0402" schX={15} schY={0} pcbX={0} pcbY={-20} pcbRotation={0} connections={{ pin1: "net.V3_3", pin2: "net.BOOT" }} />
    <chip name="Q1" footprint="sot23" schX={15} schY={2} pcbX={5} pcbY={-20} pcbRotation={0} pinLabels={{ pin1: "G", pin2: "S", pin3: "D" }} connections={{ pin1: "net.BOOT", pin2: "net.V3_3", pin3: "net.BOOT0" }} />
    <resistor name="R1" resistance="100k" footprint="0402" schX={15} schY={5} pcbX={10} pcbY={-20} pcbRotation={0} connections={{ pin1: "net.BOOT0", pin2: "net.GND" }} />

    <resistor name="R4" footprint="0402" resistance="5.1k" schX={15} schY={-3} pcbX={-2} pcbY={-15} pcbRotation={0} connections={{ pin1: "U1.pin7", pin2: "net.V3_3" }} />
    <capacitor name="C15" footprint="0402" capacitance="100nF" schX={15} schY={-7} pcbX={-5} pcbY={-15} pcbRotation={0} connections={{ pin1: "U1.pin7", pin2: "net.GND" }} />

    <led name="D5" color="blue" footprint="0402" schX={-10} schY={-15} pcbX={30} pcbY={-25} />
    <resistor name="R12" resistance="1k" footprint="0402" schX={-15} schY={-15} pcbX={33} pcbY={-25} pcbRotation={0} connections={{ pin1: "net.STAT", pin2: sel.D5.pin1 }} />
    <netlabel net="GND" connectsTo={[sel.D5.pin2]} />

    <capacitor name="C20" footprint="0402" capacitance="0.1uF" schX={0} schY={-14} pcbX={25} pcbY={25} pcbRotation={0} connections={{ pin1: "U2.pin4", pin2: "U2.pin8" }} />
    <resistor name="R11" resistance="100k" footprint="0402" schX={3} schY={-13} pcbX={28} pcbY={25} pcbRotation={0} connections={{ pin1: "U2.pin1", pin2: "net.V3_3" }} />

    <trace from="C1.pin1" to="U1.pin6" />
    <trace from="C2.pin1" to="U1.pin5" />
    <trace from="C3.pin1" to="U1.pin4" />
    <trace from="C4.pin1" to="U1.pin3" />
    <trace from="C5.pin1" to="U1.pin31" />
    <trace from="C6.pin1" to="U1.pin13" />
    <trace from="U1.pin42" to="U1.pin43" />
    <trace from="U1.pin42" to="U1.pin13" />
    <trace from="U1.pin13" to="U1.pin64" />
    <trace from="U1.pin64" to="U1.pin48" />
    <trace from="U1.pin48" to="U1.pin32" />
    <trace from="U1.pin32" to="U1.pin19" />
    <trace from="U1.pin11" to="U2.pin1" />
    <trace from="U1.pin51" to="U2.pin6" />
    <trace from="U1.pin52" to="U2.pin2" />
    <trace from="U1.pin53" to="U2.pin5" />
    <trace from="U2.pin7" to="U2.pin3" />
    <trace from="J1.pin57" to="U1.pin21" />
    <trace from="J1.pin59" to="U1.pin23" />
    <trace from="J1.pin61" to="U1.pin22" />
    <trace from="J1.pin55" to="U1.pin20" />
    <trace from="J1.pin14" to="U1.pin29" />
    <trace from="J1.pin12" to="U1.pin30" />
    <trace from="J1.pin16" to="U1.pin27" />
    <trace from="J1.pin17" to="U1.pin16" />
    <trace from="J1.pin19" to="U1.pin17" />
    <trace from="J1.pin23" to="U1.pin46" />
    <trace from="J1.pin21" to="U1.pin49" />
    <trace from="J1.pin2" to="U1.pin64" />
    <trace from="J1.pin1" to="U1.pin18" />
    <trace from="U2.pin8" to="J1.pin2" />
    <trace from="U2.pin4" to="J1.pin1" />
    <trace from="U2.pin6" to="U1.pin53" />
    <trace from="U2.pin5" to="U1.pin52" />
    <trace from="U2.pin2" to="U1.pin51" />
    <trace from="U2.pin1" to="U1.pin3" />
  </board>
)

export default Board