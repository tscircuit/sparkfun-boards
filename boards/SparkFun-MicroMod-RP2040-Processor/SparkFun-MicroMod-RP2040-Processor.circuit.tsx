import { RP2040 } from "./RP2040"
import { MicroModConnector } from "./MicroModConnector"
import { sel } from "tscircuit"

const nets = sel.net as any

export const SparkFunMicroModRP2040 = () => (
  <board width="22mm" height="22mm">

    <RP2040 name="U3"
      schX={0} schY={0}
      footprint="qfn56_7x7"
      connections={{
        pin1: nets.V3_3, // IOVDD
        pin2: nets.TX1, // GPIO0 (UART TX1)
        pin3: nets.RX1, // GPIO1 (UART RX1)
        pin4: nets.CTS1, // GPIO2
        pin5: nets.RTS1, // GPIO3
        pin6: nets.I2C_SDA, // GPIO4
        pin7: nets.I2C_SCL, // GPIO5
        pin8: nets.D0, // GPIO6
        pin9: nets.D1, // GPIO7
        pin10: nets.V3_3, // IOVDD
        pin11: nets.I2C_INT, // GPIO8
        pin12: nets.RX2, // GPIO9
        pin13: nets.SDIO_DATA2, // GPIO10
        pin14: nets.SDIO_DATA1, // GPIO11
        pin15: nets.SDIO_DATA0, // GPIO12
        pin16: nets.PWM0, // GPIO13
        pin17: nets.SDIO_CLK, // GPIO14
        pin18: nets.SDIO_CMD, // GPIO15
        pin19: nets.GND, // TESTEN (Grounded)
        pin20: nets.XIN, // XIN
        pin21: nets.XOUT, // XOUT
        pin22: nets.V3_3, // IOVDD
        pin23: nets.V1_1, // DVDD
        pin24: nets.SWCLK, // SWCLK
        pin25: nets.SWDIO, // SWDIO
        pin26: nets.RESET, // RUN
        pin27: nets.G0, // GPIO16
        pin28: nets.G1, // GPIO17
        pin29: nets.G2, // GPIO18
        pin30: nets.G3, // GPIO19
        pin31: nets.SPI_CIPO, // GPIO20
        pin32: nets.SPI_CS, // GPIO21
        pin33: nets.V3_3, // IOVDD
        pin34: nets.SPI_SCK, // GPIO22
        pin35: nets.SPI_COPI, // GPIO23
        pin36: nets.PWM1, // GPIO24
        pin37: nets.LED_SIG, // GPIO25 (LED)
        pin38: nets.A0, // GPIO26_ADC0
        pin39: nets.A1, // GPIO27_ADC1
        pin40: nets.G9, // GPIO28_ADC2
        pin41: nets.BATT_VIN_3, // GPIO29_ADC3
        pin42: nets.V3_3, // IOVDD
        pin43: nets.V3_3, // ADC_AVDD
        pin44: nets.V3_3, // VREG_VIN
        pin45: nets.V1_1, // VREG_VOUT
        pin46: nets.RP_D_N, // USB_DM
        pin47: nets.RP_D_P, // USB_DP
        pin48: nets.V3_3, // USB_VDD
        pin49: nets.V3_3, // IOVDD
        pin50: nets.V1_1, // DVDD
        pin51: nets.QSPI_SD3,
        pin52: nets.QSPI_SCLK,
        pin53: nets.QSPI_SD0,
        pin54: nets.QSPI_SD2,
        pin55: nets.QSPI_SD1,
        pin56: nets.QSPI_SS,
        pin57: nets.GND, // E-Pad
      }}
    />

    <MicroModConnector name="J1"
      schX={-25} schY={0}
      connections={{
        pin1: nets.GND,
        pin2: nets.V3_3,
        pin3: nets.USB_D_P, // USB_D+
        pin5: nets.USB_D_N, // USB_D-
        pin6: nets.RESET,
        pin7: nets.GND,
        pin8: nets.GND,
        pin9: nets.USB_VIN,
        pin10: nets.D0,
        pin11: nets.BOOT,
        pin12: nets.I2C_SDA,
        pin13: nets.GND,
        pin14: nets.I2C_SCL,
        pin15: nets.BATT_VIN_3,
        pin16: nets.I2C_INT,
        pin18: nets.D1,
        pin19: nets.GND,
        pin20: nets.RX1,
        pin21: nets.TX1,
        pin22: nets.RX2,
        pin23: nets.CTS1,
        pin24: nets.I2C_INT,
        pin25: nets.RTS1,
        pin26: nets.GND,
        pin27: nets.PWM0,
        pin28: nets.GND,
        pin29: nets.PWM1,
        pin30: nets.GND,
        pin31: nets.SPI_SCK,
        pin32: nets.GND,
        pin33: nets.SPI_CIPO,
        pin34: nets.A0,
        pin35: nets.SPI_COPI,
        pin36: nets.GND,
        pin37: nets.SPI_CS,
        pin38: nets.A1,
        pin39: nets.G0,
        pin40: nets.GND,
        pin41: nets.G1,
        pin42: nets.SPI_CIPO,
        pin43: nets.G2,
        pin44: nets.SPI_CS,
        pin45: nets.G3,
        pin46: nets.SPI_SCK,
        pin47: nets.GND,
        pin48: nets.SPI_COPI,
        pin49: nets.GND,
        pin50: nets.I2C_INT,
        pin51: nets.G9,
        // pin52: G11/SWO
        pin53: nets.LED_SIG, // G10
        pin54: nets.SWCLK,
        pin55: nets.SWDIO,

        pin66: nets.SDIO_DATA2,
        pin67: nets.SPI_CS, // SDIO_DATA3 (CS1)
        pin68: nets.SDIO_DATA1,
        pin69: nets.SDIO_CMD,
        pin70: nets.SDIO_DATA0,
        pin71: nets.SDIO_CLK,

        pin72: nets.V3_3, // RTC_3V
        pin73: nets.V3_3,
        pin74: nets.V3_3,
        pin75: nets.GND
      }}
    />

    {/* Flash Memory - W25Q128 */}
    <chip name="U1" manufacturerPartNumber="W25Q128" footprint="soic8"
      pinLabels={{
        pin1: ["CS#"], pin2: ["DO/IO1"], pin3: ["WP#/IO2"], pin4: ["GND"],
        pin5: ["DI/IO0"], pin6: ["CLK"], pin7: ["HOLD#/IO3"], pin8: ["VCC"]
      }}
      schX={15} schY={10}
      connections={{
        pin1: nets.QSPI_SS,
        pin2: nets.QSPI_SD1,
        pin3: nets.QSPI_SD2,
        pin4: nets.GND,
        pin5: nets.QSPI_SD0,
        pin6: nets.QSPI_SCLK,
        pin7: nets.QSPI_SD3,
        pin8: nets.V3_3
      }}
    />

    {/* Crystal 12MHz */}
    {/* Using 'component' generic */}
    <component name="Y1" pcbX={5} pcbY={-5} schX={10} schY={-10}>
      <footprint>
        <smtpad shape="rect" width="1mm" height="1mm" layer="top" pcbX={-1} pcbY={0} portHints={["pin1"]} />
        <smtpad shape="rect" width="1mm" height="1mm" layer="top" pcbX={1} pcbY={0} portHints={["pin2"]} />
      </footprint>
    </component>
    <chip name="Y1_Logic"
      pinLabels={{ pin1: ["XIN"], pin2: ["XOUT"] }}
      schX={10} schY={-10}
      connections={{ pin1: nets.XIN, pin2: nets.XOUT }}
    />


    {/* USB Mux - FSUSB30MUX */}
    <chip name="U2" manufacturerPartNumber="FSUSB30MUX" footprint="msop10"
      pinLabels={{
        pin1: ["VCC"], pin2: ["S"], pin3: ["OE#"], pin4: ["HSD1-"], pin5: ["HSD1+"],
        pin6: ["HSD2+"], pin7: ["HSD2-"], pin8: ["GND"], pin9: ["D-"], pin10: ["D+"]
      }}
      schX={-15} schY={15}
      connections={{
        pin1: nets.V3_3,
        pin2: nets.USB_MUX_SIG,
        pin3: nets.GND,
        // pin4/5 HSD1 (USBHost?) Unused/Unconnected?
        pin6: nets.USB_D_P, // HSD2+ -> J1
        pin7: nets.USB_D_N, // HSD2- -> J1
        pin8: nets.GND,
        pin9: nets.RP_D_N_MUX, // D- -> RP2040 (via R11)
        pin10: nets.RP_D_P_MUX // D+ -> RP2040 (via R10)
      }}
    />

    {/* LED D2 (Blue) - Status LED */}
    <led name="D2" color="blue" footprint="0603" schX={10} schY={15}
      connections={{ anode: nets.LED_ANODE, cathode: nets.GND }}
    />
    <resistor name="R1" resistance="1k" footprint="0402" schX={5} schY={15}
      connections={{ pin1: nets.LED_ANODE, pin2: nets.LED_SIG }}
    />

    {/* USB Resistors */}
    <resistor name="R10" resistance="27" footprint="0402" schX={-5} schY={5}
      connections={{ pin1: nets.RP_D_P_MUX, pin2: nets.RP_D_P }}
    />
    <resistor name="R11" resistance="27" footprint="0402" schX={-5} schY={7}
      connections={{ pin1: nets.RP_D_N_MUX, pin2: nets.RP_D_N }}
    />

    {/* USB VBUS Divider */}
    <resistor name="R18" resistance="1k" footprint="0402" schX={-20} schY={18}
      connections={{ pin1: nets.USB_VIN, pin2: nets.USB_MUX_SIG }}
    />
    <resistor name="R5" resistance="10k" footprint="0402" schX={-20} schY={20}
      connections={{ pin1: nets.GND, pin2: nets.USB_MUX_SIG }}
    />

    {/* Caps */}
    <capacitor name="C3" capacitance="2.2uF" footprint="0402" schX={0} schY={-15}
      connections={{ pin1: nets.V3_3, pin2: nets.GND }}
    />
    <capacitor name="C4" capacitance="2.2uF" footprint="0402" schX={2} schY={-15}
      connections={{ pin1: nets.V3_3, pin2: nets.GND }}
    />

  </board>
)
