import { sel } from "tscircuit"
import { RP2040 } from "./imports/RP2040"
import { W25Q128 } from "./imports/W25Q128"

/**
 * SparkFun MicroMod RP2040 Processor Board (DEV-17720)
 * Dual ARM Cortex-M0+ @ 133MHz + 16MB SPI Flash
 * Schematic: https://cdn.sparkfun.com/assets/1/8/3/5/8/MicroMod-RP2040-ProcessorBoard_Schematic.pdf
 */
export default () => (
  <board width="22mm" height="22mm" routingDisabled>
    <RP2040
      name="U1"
      pcbX={0}
      pcbY={2}
      schX={0}
      schY={0}
      connections={{
        pin1: "net.VDD",
        pin10: "net.VDD",
        pin19: "net.VDD",
        pin28: "net.VDD",
        pin43: "net.VDD",
        pin48: "net.VDD",
        pin56: "net.VDD",
        pin44: "net.DVDD",
        pin55: "net.DVDD",
        pin35: "net.VDD",
        pin36: "net.VDD",
        pin37: "net.DVDD",
        pin57: "net.GND",
        pin40: "net.USB_VDD",
        pin38: sel.J1.pin5,
        pin39: sel.J1.pin3,
        pin41: "net.XIN",
        pin42: "net.XOUT",
        pin45: sel.J1.pin21,
        pin46: sel.J1.pin23,
        pin47: sel.J1.pin6,
        pin49: "net.FLASH_SD3",
        pin50: "net.FLASH_SCK",
        pin51: "net.FLASH_SD0",
        pin52: "net.FLASH_SD2",
        pin53: "net.FLASH_SD1",
        pin54: "net.FLASH_CS",
        pin2: sel.J1.pin17,
        pin3: sel.J1.pin19,
        pin4: sel.J1.pin52,
        pin5: sel.J1.pin50,
        pin6: sel.J1.pin12,
        pin7: sel.J1.pin14,
        pin8: sel.J1.pin10,
        pin9: sel.J1.pin18,
        pin11: sel.J1.pin16,
        pin12: sel.J1.pin53,
        pin13: sel.J1.pin48,
        pin14: sel.J1.pin54,
        pin15: sel.J1.pin56,
        pin16: sel.J1.pin58,
        pin17: sel.J1.pin32,
        pin18: sel.J1.pin13,
        pin20: sel.J1.pin40,
        pin21: sel.J1.pin42,
        pin22: sel.J1.pin44,
        pin23: sel.J1.pin46,
        pin24: sel.J1.pin55,
        pin25: sel.J1.pin61,
        pin26: sel.J1.pin57,
        pin27: sel.J1.pin59,
        pin29: sel.J1.pin47,
        pin30: "net.STAT",
        pin31: sel.J1.pin34,
        pin32: sel.J1.pin38,
      }}
    />

    <W25Q128
      name="U2"
      pcbX={4}
      pcbY={-4}
      schX={14}
      schY={0}
      connections={{
        pin1: "net.FLASH_CS",
        pin2: "net.FLASH_SD1",
        pin3: "net.VDD",
        pin4: "net.GND",
        pin5: "net.FLASH_SD0",
        pin6: "net.FLASH_SCK",
        pin7: "net.VDD",
        pin8: "net.VDD",
      }}
    />

    <chip
      name="J1"
      footprint="m2_micromod_22x22mm"
      pcbX={0}
      pcbY={-9}
      schX={28}
      schY={0}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["3V3"],
        pin3: ["USB_DP"],
        pin4: ["3V3_EN"],
        pin5: ["USB_DM"],
        pin6: ["RESET"],
        pin7: ["GND"],
        pin9: ["USB_VIN"],
        pin10: ["D0"],
        pin11: ["BOOT"],
        pin12: ["I2C_SDA"],
        pin13: ["UART_RTS1"],
        pin14: ["I2C_SCL"],
        pin16: ["I2C_INT"],
        pin17: ["UART_TX1"],
        pin18: ["D1"],
        pin19: ["UART_RX1"],
        pin21: ["SWDCK"],
        pin23: ["SWDIO"],
        pin32: ["PWM0"],
        pin34: ["A0"],
        pin38: ["A1"],
        pin40: ["G0"],
        pin42: ["G1"],
        pin44: ["G2"],
        pin46: ["G3"],
        pin47: ["PWM1"],
        pin48: ["G4"],
        pin49: ["BATT_VIN"],
        pin50: ["AUD_BCLK"],
        pin51: ["I2C_SDA1"],
        pin52: ["AUD_LRCLK"],
        pin53: ["I2C_SCL1"],
        pin54: ["AUD_IN"],
        pin55: ["SPI_CS"],
        pin56: ["AUD_OUT"],
        pin57: ["SPI_SCK"],
        pin58: ["AUD_MCLK"],
        pin59: ["SPI_COPI"],
        pin61: ["SPI_CIPO"],
        pin74: ["3V3"],
        pin75: ["GND"],
      }}
      connections={{
        pin1: "net.GND",
        pin2: "net.VDD",
        pin4: "net.VDD",
        pin7: "net.GND",
        pin9: "net.USB_VIN",
        pin49: "net.BATT_VIN",
        pin74: "net.VDD",
        pin75: "net.GND",
      }}
    />

    <chip
      name="Y1"
      footprint="crystal_2pad_w2mm_h1.6mm"
      pcbX={-4}
      pcbY={4}
      schX={-12}
      schY={4}
      pinLabels={{ pin1: ["IN"], pin2: ["OUT"] }}
      connections={{ pin1: "net.XIN", pin2: "net.XOUT" }}
    />
    <capacitor
      name="C1"
      capacitance="15pF"
      footprint="0402"
      pcbX={-6}
      pcbY={3}
      schX={-14}
      schY={4}
      connections={{ pin1: "net.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="15pF"
      footprint="0402"
      pcbX={-6}
      pcbY={5}
      schX={-14}
      schY={5}
      connections={{ pin1: "net.XOUT", pin2: "net.GND" }}
    />

    <led
      name="D1"
      color="green"
      footprint="0402"
      pcbX={5}
      pcbY={2}
      schX={8}
      schY={-8}
      connections={{ anode: "net.STAT", cathode: sel.R1.pin2 }}
    />
    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={5}
      pcbY={0}
      schX={6}
      schY={-8}
      connections={{ pin1: "net.GND", pin2: sel.D1.cathode }}
    />

    <resistor
      name="R2"
      resistance="10k"
      footprint="0402"
      pcbX={7}
      pcbY={-2}
      schX={16}
      schY={-4}
      connections={{ pin1: "net.VDD", pin2: "net.FLASH_CS" }}
    />

    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={6}
      schX={-8}
      schY={-2}
      connections={{ pin1: "net.DVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="0402"
      pcbX={-5}
      pcbY={6}
      schX={-6}
      schY={-2}
      connections={{ pin1: "net.DVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      pcbX={3}
      pcbY={6}
      schX={-4}
      schY={-2}
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      pcbX={5}
      pcbY={6}
      schX={-2}
      schY={-2}
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={7}
      pcbY={6}
      schX={0}
      schY={-2}
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="1uF"
      footprint="0402"
      pcbX={-7}
      pcbY={6}
      schX={2}
      schY={-2}
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C9"
      capacitance="100nF"
      footprint="0402"
      pcbX={-5}
      pcbY={-2}
      schX={-10}
      schY={-2}
      connections={{ pin1: "net.USB_VDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      capacitance="100nF"
      footprint="0402"
      pcbX={6}
      pcbY={-6}
      schX={16}
      schY={-6}
      connections={{ pin1: "net.VDD", pin2: "net.GND" }}
    />

    <hole diameter={2.05} pcbX={0} pcbY={9} />
  </board>
)
