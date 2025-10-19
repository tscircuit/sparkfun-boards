import React from "react"
import STM32F405RG from "./STM32F405RG"
import W25Q128 from "./W25Q128"
import MicroModEdge from "./MicroModEdge"
import { sel } from "@tscircuit/core"

const Board = () => (
  <board width="100mm" height="100mm" name="SparkFun MicroMod STM32 Processor">
    {/* === MicroMod Edge Connector (J1) === */}
    <MicroModEdge
      name="J1"
      schX={30}
      schY={0}
      connections={{
        VBUS1: "net.VBUS1",
        RESET: "net.RESET",
        BOOT: "net.BOOT",

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
      }}
    />

    <STM32F405RG
      name="U1"
      schX={0}
      schY={0}
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
        PB1: "net.INT",
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
        PC3: "net.FLASH_CS",
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
      schX={5} // move flash to left
      schY={-15}
      // farther up-left so routes don't cross the U1 pad row (FLASH_* pins)
      pcbX="-20mm"
      pcbY="-3mm" // if this goes down instead of up in your viewer, use "+10mm"
      pcbRotation={180}
      connections={{
        VDD: "net.VDD",
        GND: "net.GND",
        CS_N: "net.FLASH_CS_N",
        CLK: "net.FLASH_SCK",
        DO_DI: "net.FLASH_SDI",
        D1_DO: "net.FLASH_SDO",
      }}
    />
    {/* Other parts left unchanged; helper circuitry ignored per your request */}
    {/* HSE 12MHz + caps */}
    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="18pF"
      schX={-10}
      schY={4}
      pcbX={-14}
      pcbY={5}
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
      pcbX={-15}
      pcbY={7}
      schRotation={90}
      pcbRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      footprint="0402"
      capacitance="22pF"
      schX={-11}
      schY={5}
      pcbX={-19}
      pcbY={7}
      schRotation={90}
      pcbRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <trace from="C1.pin1" to="U1.pin6" />
    <trace from="C2.pin1" to="U1.pin5" />
    {/* LSE 32.768kHz + caps */}
    <crystal
      name="Y2"
      frequency="32.768kHz"
      loadCapacitance="12.5pF"
      schX={-3}
      schY={4}
      pcbX={-12}
      pcbY={16}
      pcbRotation={0}
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
      schRotation={90}
      pcbRotation={90}
      pcbX={-16}
      pcbY={20}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      footprint="0402"
      capacitance="15pF"
      schX={-2}
      schY={5}
      pcbX={-8}
      pcbY={20}
      schRotation={90}
      pcbRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <trace from="C3.pin1" to="U1.pin4" />
    <trace from="C4.pin1" to="U1.pin3" />
    {/* VCAP1 / VCAP2 */}
    <capacitor
      name="C5"
      footprint="0402"
      capacitance="2.2uF"
      schX={-5}
      schY={0}
      pcbX={-15}
      pcbY={-10}
      schRotation={90}
      pcbRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      footprint="0402"
      capacitance="2.2uF"
      schX={-7}
      schY={0}
      pcbX={-21}
      pcbY={-10}
      schRotation={90}
      pcbRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <trace from="C5.pin1" to="U1.pin31" />
    <trace from="C6.pin1" to="U1.pin13" />
    {/* 22Ω series on D- / D+ between MCU and edge */}
    <resistor
      name="R2"
      footprint="0402"
      resistance="22"
      schX={7}
      schY={-0.9}
      pcbX={15}
      pcbY={0}
      connections={{ pin1: "U1.pin44", pin2: "net.DP" }}
    />
    <resistor
      name="R3"
      footprint="0402"
      resistance="22"
      schX={7}
      schY={0}
      pcbX={15}
      pcbY={5}
      connections={{ pin1: "U1.pin45", pin2: "net.DN" }}
    />
    {/* BOOT inversion with a P-MOSFET (SparkFun style) */}
    <resistor
      name="R5"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={0}
      connections={{ pin1: "net.VDD", pin2: "net.BOOT" }} // change to "BOOT_N" if that's your edge net
    />
    <chip
      name="Q1"
      footprint="sot23" // or whatever your repo uses, e.g. "SOT23" or "sot23_pmos"
      schX={15}
      schY={2}
      pinLabels={{ pin1: "G", pin2: "S", pin3: "D" }} // label pins as generic transistor pins
      connections={{
        pin1: "net.BOOT", // Gate connected to BOOT signal
        pin2: "net.VDD", // Source to 3.3V
        pin3: "net.BOOT0", // Drain to BOOT0 node
      }}
    />
    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={5}
      connections={{ pin1: "net.BOOT0", pin2: "net.GND" }}
    />
    {/* Reset (NRST) pull-up + POR cap */}
    <resistor
      name="R4"
      footprint="0402"
      resistance="5.1k"
      schX={15}
      schY={-3}
      connections={{ pin1: "U1.pin7", pin2: "net.VDD" }}
    />
    <capacitor
      name="C15"
      footprint="0402"
      capacitance="100nF"
      schX={15}
      schY={-7}
      connections={{ pin1: "U1.pin7", pin2: "net.GND" }}
    />

    {/* ===== Status LED (right side) ===== */}
    <led name="D5" color="blue" footprint="0402" schX={-10} schY={-15} />
    <resistor
      name="R12"
      resistance="1k"
      footprint="0402"
      schX={-15}
      schY={-15}
      connections={{ pin1: "net.STAT", pin2: sel.D5.pin1 }}
    />
    <netlabel net="GND" connectsTo={[sel.D5.pin2]} />

    {/* ===== W25Q128 Helper circuits ===== */}
    <capacitor
      name="C20"
      footprint="0402"
      capacitance="0.1uF"
      schX={0}
      schY={-14}
      schRotation={90}
      connections={{ pin1: "U2.pin4", pin2: "U2.pin8" }}
    />

    <resistor
      name="R11"
      resistance="100k"
      footprint="0402"
      schX={3}
      schY={-13}
      schRotation={90}
      connections={{ pin1: "U2.pin1", pin2: "net.VDD" }}
    />
  </board>
)

export default Board
