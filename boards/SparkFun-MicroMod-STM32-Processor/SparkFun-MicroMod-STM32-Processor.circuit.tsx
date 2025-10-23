import React from "react"
import STM32F405RG from "./STM32F405RG"
import W25Q128 from "./W25Q128"
import MicroModEdge from "./MicroModEdge"
import { sel } from "@tscircuit/core"

const pitch = 0.45
const padW = 0.4
const padH = 1.75
const startX = 0
const startY = 0
// Define pin arrays (inverted sides)
const topPinsRight = Array.from({ length: 12 }, (_, i) => 12 - i) // 12→1
const topPinsLeft = Array.from({ length: 24 }, (_, i) => 36 - i) // 36→13
const bottomPinsRight = Array.from({ length: 12 }, (_, i) => 12 - i).reverse() // 12→1
const bottomPinsLeft = Array.from({ length: 24 }, (_, i) => 36 - i).reverse() // 36→13

const Board = () => (
  <board
    width="22mm"
    height="22mm"
    name="SparkFun MicroMod STM32 Processor"
    outline={[
      // ── Rounded TOP-LEFT corner
      { x: -11.0, y: 9.0 },
      { x: -10.5, y: 9.9 },
      { x: -9.9, y: 10.5 },
      { x: -9.2, y: 10.9 },
      { x: -8.5, y: 11.0 },

      // ── TOP edge
      { x: 8.5, y: 11.0 },

      // ── Rounded TOP-RIGHT corner
      { x: 9.2, y: 10.9 },
      { x: 9.9, y: 10.5 },
      { x: 10.5, y: 9.9 },
      { x: 11.0, y: 9.0 },

      // ── RIGHT edge down to side-notch region
      { x: 11.0, y: -8.5 },

      // ── Bottom-RIGHT side notch
      { x: 10.5, y: -8.5 },
      { x: 10.25, y: -8.567 },
      { x: 10.067, y: -8.75 },
      { x: 10.0, y: -9.0 },
      { x: 10.0, y: -11.0 },

      // ── Flat run toward off-center key
      { x: 3.1, y: -11.0 },

      // ── Off-center key with rounded top corners (r ≈ 0.3 mm)
      // right edge first
      { x: 3.1, y: -8.85 }, // was -9.1
      { x: 2.95, y: -8.65 }, // was -8.9
      { x: 2.8, y: -8.55 }, // was -8.8  (top flat midpoint)
      { x: 2.2, y: -8.55 }, // was -8.8  (top flat midpoint left)
      { x: 2.05, y: -8.65 }, // was -8.9
      { x: 1.9, y: -8.85 }, // was -9.1
      { x: 1.9, y: -11.0 },

      // ── Flat run toward left side notch
      { x: -10.0, y: -11.0 },

      // ── Bottom-LEFT side notch (mirror)
      { x: -10.0, y: -9.0 },
      { x: -10.067, y: -8.75 },
      { x: -10.25, y: -8.567 },
      { x: -10.5, y: -8.5 },
      { x: -11.0, y: -8.5 },

      // ── LEFT edge back up
      { x: -11.0, y: 9.0 },
    ]}
  >
    <hole diameter="2mm" pcbX="4mm" pcbY="11mm" />
    <MicroModEdge
      name="J1"
      schX={30}
      schY={0}
      pcbX={0.25}
      pcbY={-11.5}
      pcbRotation={0.0}
      connections={{
        V3_3: "net.V3_3",
        RESET_N: "net.RESET_N",
        BOOT_N: "net.BOOT_N",
        SWDIO: "net.SWDIO",
        SWDCK: "net.SWCLK",
        AUD_MCLK: "net.AUD_MCLK",
        AUD_LRCLK: "net.AUD_LRCLK",
        AUD_BCLK: "net.AUD_BCLK",
        I2C_SCL: "net.I2C_SCL",
        I2C_SDA: "net.I2C_SDA",
        GND: "net.GND",
        A0: "net.A0",
        A1: "net.A1",
        PWM0: "net.PWM0",
        PWM1: "net.PWM1",
        D0: "net.D0",
        D1_CAM_TRIG: "net.D1",
        TX1: "net.TX1",
        RX1: "net.RX1",
        G0_BUS0: "net.G0",
        G1_BUS1: "net.G1",
        G2_BUS2: "net.G2",
        G3_BUS3: "net.G3",
        G4_BUS4: "net.G4",
        G5_BUS5: "net.G5",
        G6_BUS6: "net.G6",
        G8: "net.G8",
        G10_ADC_DP_CAM_VSYNC: "net.HOST_VBUS",
        G11: "net.G11",
        SPI_SCK: "net.SCK",
        SPI_SDO: "net.C0P1",
        SPI_SDI: "net.C1P0",
        SPI_CS: "net.CS",
        I2C_INT_N: "net.INT_N",
      }}
    />
    <STM32F405RG
      name="U1"
      schX={0}
      schY={0}
      pcbX={0.33}
      pcbY={0.58}
      pcbRotation={270.0}
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
      pcbX={6.25}
      pcbY={-1.5}
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
      schX={-10}
      schY={4}
      pcbX={-8.73}
      pcbY={0.16}
      pcbRotation={270.0}
      footprint={
        <footprint>
          <smtpad
            shape="rect"
            width="1.4mm"
            height="1.2mm"
            pcbX="-1.1mm"
            pcbY="0mm"
            portHints={["pin1"]}
          />
          <smtpad
            shape="rect"
            width="1.4mm"
            height="1.2mm"
            pcbX="1.1mm"
            pcbY="0mm"
            portHints={["pin2"]}
          />
        </footprint>
      }
      connections={{ pin1: "net.U1_PH0_HSE", pin2: "net.U1_PH1_HSE" }}
    />
    <capacitor
      name="C1"
      footprint="0402"
      capacitance="22pF"
      schX={-9}
      schY={5}
      pcbX={-8.75}
      pcbY={3.72}
      pcbRotation={180.0}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      footprint="0402"
      capacitance="22pF"
      schX={-11}
      schY={5}
      pcbX={-9.61}
      pcbY={-3.93}
      pcbRotation={270.0}
      connections={{ pin2: "net.GND" }}
    />
    <crystal
      name="Y2"
      frequency="32.768kHz"
      loadCapacitance="12.5pF"
      schX={-3}
      schY={4}
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
      schX={-4}
      schY={5}
      pcbX={-8.76}
      pcbY={4.73}
      pcbRotation={180.0}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      footprint="0402"
      capacitance="15pF"
      schX={-2}
      schY={5}
      pcbX={-8.76}
      pcbY={8.455}
      pcbRotation={180.0}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      footprint="0402"
      capacitance="2.2uF"
      schX={-5}
      schY={0}
      pcbX={6.1}
      pcbY={-6.73}
      pcbRotation={0.0}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      footprint="0402"
      capacitance="2.2uF"
      schX={-7}
      schY={0}
      pcbX={9.25}
      pcbY={3.83}
      pcbRotation={0.0}
      connections={{ pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      footprint="0402"
      resistance="22"
      schX={7}
      schY={-0.9}
      pcbX={9.25}
      pcbY={1.99}
      pcbRotation={180.0}
      connections={{ pin1: "U1.pin44" }}
    />
    <resistor
      name="R3"
      footprint="0402"
      resistance="22"
      schX={7}
      schY={0}
      pcbX={9.25}
      pcbY={2.91}
      pcbRotation={180.0}
      connections={{ pin1: "U1.pin45" }}
    />
    <resistor
      name="R5"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={0}
      pcbX={7.65}
      pcbY={5.23}
      pcbRotation={180.0}
      connections={{ pin1: "net.V3_3", pin2: "net.BOOT_N" }}
      layer="bottom"
    />
    <chip
      name="Q1"
      footprint="sot23"
      schX={15}
      schY={2}
      pcbX={7.65}
      pcbY={3.03}
      pcbRotation={180.0}
      pinLabels={{ pin1: "G", pin2: "S", pin3: "D" }}
      connections={{ pin1: "net.BOOT_N", pin2: "net.V3_3", pin3: "net.BOOT0" }}
      layer="bottom"
    />
    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={5}
      pcbX={7.65}
      pcbY={6.22}
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
      pcbX={-7.62}
      pcbY={-3.95}
      pcbRotation={270.0}
      connections={{ pin1: "U1.pin7", pin2: "net.V3_3" }}
    />
    <capacitor
      name="C15"
      footprint="0402"
      capacitance="100nF"
      schX={15}
      schY={-7}
      pcbX={-8.61}
      pcbY={-3.94}
      pcbRotation={270.0}
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
      pcbRotation={180.0}
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
      pcbRotation={270.0}
      connections={{ pin1: "U2.pin4", pin2: "U2.pin8" }}
      layer="bottom"
    />
    <resistor
      name="R11"
      resistance="100k"
      footprint="0402"
      schX={3}
      schY={-13}
      pcbX={-2.93}
      pcbY={-3.1}
      pcbRotation={180.0}
      connections={{ pin1: "U2.pin1", pin2: "net.V3_3" }}
      layer="bottom"
    />

    <jumper
      name="J2_TOP_RIGHT"
      schRotation={0}
      schX={35}
      schY={0}
      schWidth={0.6}
      schPinArrangement={{
        leftSide: {
          direction: "right-to-left",
          pins: topPinsRight.map((n) => `pin${n}`),
        },
      }}
      footprint={
        <footprint name="edge_connector_top_right_12">
          {topPinsRight.map((n, i) => (
            <smtpad
              shape="rect"
              width={`${padW}mm`}
              height={`${padH}mm`}
              pcbX={`${startX + i * pitch}mm`}
              pcbY={`${startY}mm`}
              portHints={[`pin${n}`]}
            />
          ))}
        </footprint>
      }
      connections={{
        pin1: "net.GND",
        pin2: "net.V3_3",
        pin3: "net.DP",
        pin4: "net.NC_T04",
        pin5: "net.DN",
        pin6: "net.RESET",
        pin7: "net.GND",
        pin8: "net.HOST_ID",
        pin9: "net.NC_T09",
        pin10: "net.D0",
        pin11: "net.BOOT_N",
        pin12: "net.I2C_SDA",
      }}
      pcbX={3.75}
      pcbY={-9.5}
      pcbRotation={0}
    />

    <jumper
      name="J2_TOP_LEFT"
      schRotation={0}
      schX={38}
      schY={0}
      schWidth={0.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: topPinsLeft.map((n) => `pin${n}`),
        },
      }}
      footprint={
        <footprint name="edge_connector_top_left_24">
          {topPinsLeft.map((n, i) => (
            <smtpad
              shape="rect"
              width={`${padW}mm`}
              height={`${padH}mm`}
              pcbX={`${startX + (i + 12) * pitch}mm`}
              pcbY={`${startY}mm`}
              portHints={[`pin${n}`]}
            />
          ))}
        </footprint>
      }
      connections={{
        pin13: "net.NC_T13",
        pin14: "net.I2C_SCL",
        pin15: "net.NC_T15",
        pin16: "net.INT_N",
        pin17: "net.TX1",
        pin18: "net.D1",
        pin19: "net.RX1",
        pin20: "net.NC_T20",
        pin21: "net.SWCLK",
        pin22: "net.NC_T22",
        pin23: "net.SWDIO",
        pin24: "net.NC_T24",
        pin25: "net.NC_T25",
        pin26: "net.NC_T26",
        pin27: "net.NC_T27",
        pin28: "net.NC_T28",
        pin29: "net.NC_T29",
        pin30: "net.NC_T30",
        pin31: "net.NC_T31",
        pin32: "net.PWM0",
        pin33: "net.GND",
        pin34: "net.A0",
        pin35: "net.HOST_DP",
        pin36: "net.GND",
      }}
      pcbX={-14.5}
      pcbY={-9.5}
      pcbRotation={0}
    />
    <jumper
      name="J2_BOTTOM_RIGHT"
      schRotation={0}
      schX={35}
      schY={0}
      schWidth={0.6}
      layer="bottom"
      schPinArrangement={{
        leftSide: {
          direction: "right-to-left",
          pins: bottomPinsRight.map((n) => `pin${n}`),
        },
      }}
      footprint={
        <footprint name="edge_connector_top_right_12">
          {bottomPinsRight.map((n, i) => (
            <smtpad
              shape="rect"
              width={`${padW}mm`}
              height={`${padH + 0.5}mm`}
              pcbX={`${startX + i * pitch}mm`}
              pcbY={`${startY}mm`}
              portHints={[`pin${n}`]}
            />
          ))}
        </footprint>
      }
      connections={{
        pin1: "net.HOST_DN",
        pin2: "net.A1",
        pin3: "net.GND",
        pin4: "net.G0",
        pin5: "net.CAN_RX",
        pin6: "net.G1",
        pin7: "net.CAN_TX",
        pin8: "net.G2",
        pin9: "net.GND",
        pin10: "net.G3",
        pin11: "net.PWM1",
        pin12: "net.G4",
      }}
      pcbX={8.75}
      pcbY={-9.25}
      pcbRotation={0}
    />

    <jumper
      name="J2_BOTTOM_LEFT"
      schRotation={0}
      schX={38}
      schY={0}
      layer="bottom"
      schWidth={0.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: bottomPinsLeft.map((n) => `pin${n}`),
        },
      }}
      footprint={
        <footprint name="edge_connector_top_left_24">
          {bottomPinsLeft.map((n, i) => (
            <smtpad
              shape="rect"
              width={`${padW}mm`}
              height={`${padH + 0.5}mm`}
              pcbX={`${startX + (i + 12) * pitch}mm`}
              pcbY={`${startY}mm`}
              portHints={[`pin${n}`]}
            />
          ))}
        </footprint>
      }
      connections={{
        pin13: "net.BATT_VIN",
        pin14: "net.AUD_BCLK",
        pin15: "net.SDA1",
        pin16: "net.AUD_LRCLK",
        pin17: "net.SCL1",
        pin18: "net.AUD_IN",
        pin19: "net.CS",
        pin20: "net.AUD_OUT",
        pin21: "net.SCK",
        pin22: "net.NC_B22",
        pin23: "net.C1P0",
        pin24: "net.NC_B24",
        pin25: "net.C0P1",
        pin26: "net.NC_B26",
        pin27: "net.HOST_VBUS",
        pin28: "net.NC_B28",
        pin29: "net.NC_B29",
        pin30: "net.NC_B30",
        pin31: "net.NC_B31",
        pin32: "net.NC_B32",
        pin33: "net.NC_B33",
        pin34: "net.NC_B34",
        pin35: "net.G6",
        pin36: "net.NC_B36",
      }}
      pcbX={6.75}
      pcbY={-9.25}
      pcbRotation={0}
    />

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
    <trace from="R2.pin2" to="J2_TOP_LEFT.pin3" />
    <trace from="R3.pin2" to="J2_TOP_RIGHT.pin5" />
  </board>
)
export default Board
