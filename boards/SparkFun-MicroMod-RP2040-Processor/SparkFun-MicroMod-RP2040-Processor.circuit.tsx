import { sel } from "@tscircuit/core"
import { RP2040 } from "./RP2040"
import { W25Q128JV } from "./W25Q128JV"

// RP2040 pin-number → signal name reference (QFN-56, datasheet Table 2)
// pin2=GPIO0  pin3=GPIO1  pin28=GPIO26/ADC0  pin29=GPIO27/ADC1
// pin35=USB_DM  pin36=USB_DP  pin38=XIN  pin39=XOUT  pin42=RUN
// pin43=QSPI_SD3  pin44=QSPI_SCLK  pin45=QSPI_SD0
// pin46=QSPI_SD2  pin47=QSPI_SD1   pin48=QSPI_SS_N

// MicroMod M.2 Key E edge connector (75-pin, SparkFun MicroMod spec v1.0)
const MicroModEdge = (props: any) => (
  <chip
    manufacturerPartNumber="MicroMod_M2_Key_E_75P"
    footprint="edge_connector_75p_m2_key_e"
    pinLabels={{
      pin1: "GND",
      pin2: "3V3",
      pin3: "USB_VIN",
      pin4: "3V3_EN",
      pin5: "GND",
      pin6: "RESET",
      pin7: "GND",
      pin8: "BOOT",
      pin9: "GND",
      pin10: "USB_DM",
      pin11: "GND",
      pin12: "USB_DP",
      pin13: "GND",
      pin14: "NC",
      pin15: "GND",
      pin16: "UART_TX1",
      pin17: "GND",
      pin18: "UART_RX1",
      pin19: "GND",
      pin20: "UART_RTS1",
      pin21: "GND",
      pin22: "UART_CTS1",
      pin23: "GND",
      pin24: "I2C_SDA",
      pin25: "GND",
      pin26: "I2C_SCL",
      pin27: "GND",
      pin28: "I2C_INT",
      pin29: "GND",
      pin30: "I2C1_SDA",
      pin31: "GND",
      pin32: "I2C1_SCL",
      pin33: "GND",
      pin34: "SPI_CS",
      pin35: "GND",
      pin36: "SPI_SCK",
      pin37: "GND",
      pin38: "SPI_COPI",
      pin39: "GND",
      pin40: "SPI_CIPO",
      pin41: "GND",
      pin42: "SPI1_CS",
      pin43: "GND",
      pin44: "SPI1_SCK",
      pin45: "GND",
      pin46: "SPI1_COPI",
      pin47: "GND",
      pin48: "SPI1_CIPO",
      pin49: "GND",
      pin50: "A0",
      pin51: "GND",
      pin52: "A1",
      pin53: "GND",
      pin54: "BATT_VIN3",
      pin55: "GND",
      pin56: "PWM0",
      pin57: "GND",
      pin58: "PWM1",
      pin59: "GND",
      pin60: "D0",
      pin61: "GND",
      pin62: "D1",
      pin63: "GND",
      pin64: "G0",
      pin65: "GND",
      pin66: "G1",
      pin67: "GND",
      pin68: "G2",
      pin69: "GND",
      pin70: "G3",
      pin71: "GND",
      pin72: "G4",
      pin73: "GND",
      pin74: "G5",
      pin75: "GND",
    }}
    schPinArrangement={{
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "pin2",
          "pin3",
          "pin4",
          "pin6",
          "pin8",
          "pin10",
          "pin12",
          "pin16",
          "pin18",
          "pin20",
          "pin22",
          "pin24",
          "pin26",
          "pin28",
          "pin30",
          "pin32",
          "pin34",
          "pin36",
          "pin38",
          "pin40",
          "pin42",
          "pin44",
          "pin46",
          "pin48",
          "pin50",
          "pin52",
          "pin54",
          "pin56",
          "pin58",
          "pin60",
          "pin62",
          "pin64",
          "pin66",
          "pin68",
          "pin70",
          "pin72",
          "pin74",
        ],
      },
    }}
    {...props}
  />
)

const SparkFunMicroModRP2040Processor = () => (
  <board width="22.86mm" height="22.86mm">
    {/* RP2040 dual-core ARM Cortex-M0+ MCU */}
    <RP2040
      name="U1"
      footprint="qfn56_7x7mm_p0.4mm"
      pcbX={0}
      pcbY={2}
      schX={0}
      schY={0}
    />

    {/* 128Mbit QSPI flash — connected via pins 43-48 (QSPI interface) */}
    <W25Q128JV
      name="U2"
      footprint="soic8_3.9x4.9mm_p1.27mm"
      pcbX={6}
      pcbY={2}
      schX={14}
      schY={0}
      connections={{
        pin1: sel.U1.pin48, // QSPI_SS_N
        pin2: sel.U1.pin47, // QSPI_SD1
        pin3: "net.3V3",
        pin4: "net.GND",
        pin5: sel.U1.pin45, // QSPI_SD0
        pin6: sel.U1.pin44, // QSPI_SCLK
        pin7: sel.U1.pin43, // QSPI_SD3
        pin8: "net.3V3",
      }}
    />

    {/* 12 MHz crystal for USB PLL reference */}
    <chip
      name="Y1"
      manufacturerPartNumber="12MHz_Crystal"
      footprint="crystal_3.2x2.5mm_p1.2mm"
      pinLabels={{ pin1: "IN", pin2: "GND_L", pin3: "OUT", pin4: "GND_R" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["pin1", "pin2"] },
        rightSide: { direction: "top-to-bottom", pins: ["pin3", "pin4"] },
      }}
      schX={-10}
      schY={6}
      pcbX={-5}
      pcbY={7}
      connections={{
        pin1: sel.U1.pin38, // XIN
        pin3: sel.U1.pin39, // XOUT
        pin2: "net.GND",
        pin4: "net.GND",
      }}
    />

    {/* Crystal load capacitors (15 pF) */}
    <capacitor
      name="C1"
      capacitance="15pF"
      footprint="0402"
      schX={-13}
      schY={4}
      pcbX={-7}
      pcbY={5.5}
      connections={{ pin1: sel.U1.pin38, pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="15pF"
      footprint="0402"
      schX={-13}
      schY={8}
      pcbX={-7}
      pcbY={8.5}
      connections={{ pin1: sel.U1.pin39, pin2: "net.GND" }}
    />

    {/* VREG output decoupling (pin34 = VREG_VOUT) */}
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      schX={4}
      schY={10}
      pcbX={2}
      pcbY={-5}
      connections={{ pin1: sel.U1.pin34, pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="0402"
      schX={6}
      schY={10}
      pcbX={3}
      pcbY={-5}
      connections={{ pin1: sel.U1.pin34, pin2: "net.GND" }}
    />

    {/* IOVDD / 3V3 bulk decoupling */}
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      schX={8}
      schY={10}
      pcbX={-2}
      pcbY={-5}
      connections={{ pin1: "net.3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      schX={10}
      schY={10}
      pcbX={-3}
      pcbY={-5}
      connections={{ pin1: "net.3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="1uF"
      footprint="0402"
      schX={12}
      schY={10}
      pcbX={-4}
      pcbY={-5}
      connections={{ pin1: "net.3V3", pin2: "net.GND" }}
    />

    {/* ADC supply decoupling (pin32 = ADC_AVDD) */}
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      schX={4}
      schY={12}
      pcbX={4}
      pcbY={-6}
      connections={{ pin1: sel.U1.pin32, pin2: "net.GND" }}
    />

    {/* USB series resistors for signal integrity (27 Ω) */}
    <resistor
      name="R1"
      resistance="27"
      footprint="0402"
      schX={-6}
      schY={-8}
      pcbX={-3}
      pcbY={-8}
      connections={{ pin1: sel.U1.pin35, pin2: "net.USB_DM_EXT" }}
    />
    <resistor
      name="R2"
      resistance="27"
      footprint="0402"
      schX={-6}
      schY={-10}
      pcbX={-3}
      pcbY={-9}
      connections={{ pin1: sel.U1.pin36, pin2: "net.USB_DP_EXT" }}
    />

    {/* MicroMod M.2 Key E edge connector */}
    <MicroModEdge
      name="J1"
      schX={28}
      schY={0}
      pcbX={10}
      pcbY={0}
      connections={{
        pin2: "net.3V3",
        pin6: sel.U1.pin42, // RUN / nRESET
        pin8: "net.BOOT",
        pin10: "net.USB_DM_EXT",
        pin12: "net.USB_DP_EXT",
        pin16: sel.U1.pin2, // GPIO0 → UART_TX1
        pin18: sel.U1.pin3, // GPIO1 → UART_RX1
        pin24: sel.U1.pin6, // GPIO4 → I2C_SDA
        pin26: sel.U1.pin7, // GPIO5 → I2C_SCL
        pin34: sel.U1.pin21, // GPIO17 → SPI_CS
        pin36: sel.U1.pin22, // GPIO18 → SPI_SCK
        pin38: sel.U1.pin23, // GPIO19 → SPI_COPI
        pin40: sel.U1.pin20, // GPIO16 → SPI_CIPO
        pin50: sel.U1.pin28, // GPIO26/ADC0 → A0
        pin52: sel.U1.pin29, // GPIO27/ADC1 → A1
        pin56: sel.U1.pin25, // GPIO21 → PWM0
        pin58: sel.U1.pin26, // GPIO22 → PWM1
        pin60: sel.U1.pin8, // GPIO6 → D0
        pin62: sel.U1.pin9, // GPIO7 → D1
        pin64: sel.U1.pin10, // GPIO8 → G0
        pin66: sel.U1.pin11, // GPIO9 → G1
        pin68: sel.U1.pin12, // GPIO10 → G2
        pin70: sel.U1.pin13, // GPIO11 → G3
        pin72: sel.U1.pin14, // GPIO12 → G4
        pin74: sel.U1.pin15, // GPIO13 → G5
      }}
    />

    {/* BOOT button — pulls BOOT net low to force USB bootloader */}
    <pushbutton
      name="SW1"
      footprint="pushbutton_smd_4mm"
      schX={-8}
      schY={-14}
      pcbX={-8}
      pcbY={-2}
      connections={{ pin1: "net.BOOT", pin2: "net.GND" }}
    />

    {/* 10 kΩ pull-up keeps BOOT high during normal operation */}
    <resistor
      name="R3"
      resistance="10k"
      footprint="0402"
      schX={-4}
      schY={-14}
      pcbX={-6}
      pcbY={-2}
      connections={{ pin1: "net.3V3", pin2: "net.BOOT" }}
    />

    {/* Power net labels */}
    <netlabel net="3V3" anchorSide="bottom" connection="U1.pin1" />
    <netlabel net="3V3" anchorSide="bottom" connection="U1.pin53" />
    <netlabel net="3V3" anchorSide="bottom" connection="U1.pin54" />
    <netlabel net="3V3" anchorSide="bottom" connection="U1.pin55" />
    <netlabel net="3V3" anchorSide="bottom" connection="U1.pin37" />
    <netlabel net="3V3" anchorSide="bottom" connection="U1.pin33" />
    <netlabel net="GND" anchorSide="top" connection="U1.pin51" />
    <netlabel net="GND" anchorSide="top" connection="U1.pin52" />
  </board>
)

export default SparkFunMicroModRP2040Processor
