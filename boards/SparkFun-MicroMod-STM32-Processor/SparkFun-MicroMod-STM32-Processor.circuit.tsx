import React from "react"
import STM32F405RG from "./STM32F405RG"
import W25Q128 from "./W25Q128"
import { MicroModBoard } from "@tscircuit/common"
import { sel } from "@tscircuit/core"

const pitch = 0.45
const padW = 0.2
const padH = 1.45
const startX = 0
const startY = 0
// Define pin arrays (inverted sides)
const topPinsRight = Array.from({ length: 12 }, (_, i) => 12 - i) // 12→1
const topPinsLeft = Array.from({ length: 24 }, (_, i) => 36 - i) // 36→13
const bottomPinsRight = Array.from({ length: 11 }, (_, i) => 11 - i).reverse() // 12→1
const bottomPinsLeft = Array.from({ length: 24 }, (_, i) => 36 - i).reverse() // 36→13

const Board = () => (
  <MicroModBoard
    width="22mm"
    height="22mm"
    name="SparkFun MicroMod STM32 Processor"
    schX={22}
  >
    <STM32F405RG
      name="U1"
      schX={0}
      schY={0}
      pcbX={0.33}
      pcbY={0.58}
      connections={{
        NRST: "net.RESET",
        PA0: "net.G2",
        PA1: "net.BATT_VIN",
        PA13_JTMS: "net.SWDIO",
        PA2_UART2_TX: "net.TX1",
        PA3_UART2_RX: "net.RX1",
        PA4_SPI1_NSS: "net.AUD_LRCLK",
        PA5_SPI1_SCK: "net.SCK",
        PA6_SPI1_MISO: "net.C1P0",
        PA7_SPI1_MOSI: "net.C0P1",
        PA8: "net.G1",
        PB0: "net.A1",
        PB1: "net.INT_N",
        PB10: "net.SCL",
        PB11: "net.SDA",
        PB12_I2S2_WS: "net.HOST_ID",
        PB13_I2S2_CK: "net.HOST_VBUS",
        PB14_I2S2_XD: "net.HOST_DN",
        PB15_I2S2_SD: "net.HOST_DP",
        PB3_JTDO: "net.AUD_BCLK",
        PB4_JTRST: "net.AUD_OUT",
        PB5: "net.AUD_IN",
        PB6: "net.SCL1",
        PB7: "net.SDA1",
        PB8: "net.CAN_RX",
        PB9: "net.CAN_TX",
        PC0: "net.D0",
        PC1: "net.D1",
        PC10_SDIO_D2: "net.FLASH_SCK",
        PC11_SDIO_D3: "net.FLASH_SDO",
        PC12_SDIO_CLK: "net.FLASH_SDI",
        PC13: "net.G5",
        PC2: "net.G6",
        PC3: "net.FLASH_CS_N",
        PC4: "net.CS",
        PC5: "net.A0",
        PC7: "net.PWM1",
        PC8_SDIO_D0: "net.G3",
        PC9_SDIO_D1: "net.G4",
        PD2_SDIO_CMD: "net.G0",
      }}
    />
    <W25Q128
      name="U2"
      schX={5}
      schY={-15}
      pcbX={1.25}
      pcbY={1.5}
      pcbRotation={0}
      connections={{
        V3_3: "net.V3_3",
        GND: "net.GND",
        CS_N: "net.FLASH_CS_N",
        CLK: "net.FLASH_SCK",
        DO_DI: "net.FLASH_SDI",
        D1_DO: "net.FLASH_SDO",
      }}
      layer="bottom"
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="18pF"
      schX={-4}
      schY={-6}
      pcbX={-8.73}
      pcbY={-0.5}
      pcbRotation={270.0}
      footprint={
        <footprint>
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="-1.1mm"
            pcbY="0.5mm"
            portHints={["pin1"]}
          />
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="1.1mm"
            pcbY="0.5mm"
            portHints={["pin2"]}
          />
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="-1.1mm"
            pcbY="-1.0mm"
            portHints={["pin3"]}
          />
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="1.1mm"
            pcbY="-1.0mm"
            portHints={["pin4"]}
          />
        </footprint>
      }
      connections={{ pin1: "net.U1_PH0_HSE", pin2: "net.U1_PH1_HSE" }}
    />
    <capacitor
      name="C1"
      footprint="0402"
      capacitance="22pF"
      schX={-3}
      schY={-5}
      pcbX={-8.75}
      pcbY={3.15}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      footprint="0402"
      capacitance="22pF"
      schX={-5}
      schY={-5}
      pcbX={-9.61}
      pcbY={-3.93}
      pcbRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <crystal
      name="Y2"
      frequency="32.768kHz"
      loadCapacitance="12.5pF"
      schX={5}
      schY={-6}
      pcbX={-8.6}
      pcbY={6.57}
      pcbRotation={0.0}
      footprint={
        <footprint>
          <smtpad
            shape="rect"
            width="1.0mm"
            height="1.1mm"
            pcbX="-0.95mm"
            pcbY="0mm"
            portHints={["pin1"]}
          />
          <smtpad
            shape="rect"
            width="1.0mm"
            height="1.1mm"
            pcbX="0.95mm"
            pcbY="0mm"
            portHints={["pin2"]}
          />
        </footprint>
      }
      connections={{ pin1: "U1.pin4", pin2: "U1.pin3" }}
    />
    <capacitor
      name="C3"
      footprint="0402"
      capacitance="15pF"
      schX={6}
      schY={-5}
      pcbX={-8.76}
      pcbY={4.73}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      footprint="0402"
      capacitance="15pF"
      schX={4}
      schY={-5}
      pcbX={-8.76}
      pcbY={8.455}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      footprint="0402"
      capacitance="2.2uF"
      schX={-5}
      schY={2}
      pcbX={6.1}
      pcbY={-6.73}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      footprint="0402"
      capacitance="2.2uF"
      schX={-7}
      schY={2}
      pcbX={9.25}
      pcbY={3.25}
      connections={{ pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      footprint="0402"
      resistance="22"
      schX={-7}
      schY={-0.9}
      pcbX={9.25}
      pcbY={0.075}
      connections={{ pin1: "U1.pin44" }}
    />
    <resistor
      name="R3"
      footprint="0402"
      resistance="22"
      schX={-7}
      schY={0}
      pcbX={9.25}
      pcbY={1.65}
      connections={{ pin1: "U1.pin45" }}
    />
    <resistor
      name="R5"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={0}
      pcbX={7.65}
      pcbY={6.5}
      connections={{ pin1: "net.V3_3", pin2: "net.BOOT_N" }}
      layer="bottom"
    />
    <mosfet
      name="Q1"
      channelType="n"
      mosfetMode="depletion"
      footprint="sot23"
      schX={15}
      schY={2}
      pcbX={7.65}
      pcbY={3.03}
      pcbRotation={270}
      layer="bottom"
    />

    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={5}
      pcbX={7.65}
      pcbY={8.22}
      pcbRotation={0.0}
      connections={{ pin1: "net.BOOT0", pin2: "net.GND" }}
      layer="bottom"
    />
    <resistor
      name="R4"
      footprint="0402"
      resistance="5.1k"
      schX={15}
      schY={-3}
      pcbX={-6.4}
      pcbY={-3.95}
      pcbRotation={90}
      connections={{ pin1: "U1.pin7", pin2: "net.V3_3" }}
    />
    <capacitor
      name="C15"
      footprint="0402"
      capacitance="100nF"
      schX={15}
      schY={-7}
      pcbX={-8}
      pcbY={-3.94}
      pcbRotation={90}
      connections={{ pin1: "U1.pin7", pin2: "net.GND" }}
    />
    <led
      name="D5"
      color="blue"
      footprint="0402"
      schX={-10}
      schY={-15}
      pcbX={8.93}
      pcbY={9.31}
      pcbRotation={0.0}
    />
    <resistor
      name="R12"
      resistance="1k"
      footprint="0402"
      schX={-15}
      schY={-15}
      pcbX={8.93}
      pcbY={6.75}
      connections={{ pin1: "net.STAT", pin2: sel.D5.pin1 }}
    />
    <netlabel net="GND" connectsTo={[sel.D5.pin2]} />
    <capacitor
      name="C20"
      footprint="0402"
      capacitance="0.1uF"
      schX={0}
      schY={-14}
      pcbX={6.156}
      pcbY={0.433}
      pcbRotation={90}
      connections={{ pin1: "U2.pin4", pin2: "U2.pin8" }}
      layer="bottom"
    />
    <resistor
      name="R11"
      resistance="100k"
      footprint="0402"
      schX={3}
      schY={-13}
      pcbX={-0.93}
      pcbY={-3.1}
      connections={{ pin1: "U2.pin1", pin2: "net.V3_3" }}
      layer="bottom"
    />
    {/* --- Decoupling Network 1 (C8–C10) --- */}
    <capacitor
      name="C8"
      capacitance="0.1uF"
      footprint="0402"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-9.61}
      pcbY={-5.93}
      pcbRotation={90}
      schX={-15}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C9"
      footprint="0402"
      capacitance="1.0uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-8}
      pcbY={-5.94}
      pcbRotation={90}
      schX={-14}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C10"
      footprint="0402"
      capacitance="4.7uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-6.4}
      pcbY={-5.95}
      pcbRotation={90}
      schX={-13}
      schY={-10}
      schRotation={90}
    />

    {/* --- Decoupling Network 2 (C11–C14) --- */}
    <capacitor
      name="C11"
      footprint="0402"
      capacitance="0.1uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-2.5}
      pcbY={7.85}
      schX={-8}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C12"
      footprint="0402"
      capacitance="0.1uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={6.1}
      pcbY={-5.15}
      schX={-7}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C13"
      footprint="0402"
      capacitance="0.1uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={9.25}
      pcbY={4.83}
      schX={-6}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C14"
      capacitance="0.1uF"
      footprint="0402"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-2.5}
      pcbY={9.5}
      schX={-5}
      schY={-10}
      schRotation={90}
    />

    <trace from="Q1.pin1" to="J1.pin11" />
    <trace from="Q1.pin2" to="net.V3_3" />
    <trace from="Q1.pin3" to="U1.pin60" />
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
    <trace from="R2.pin2" to="J2_TOP_RIGHT.pin3" />
    <trace from="R3.pin2" to="J2_TOP_RIGHT.pin5" />
  </MicroModBoard>
)
export default Board
