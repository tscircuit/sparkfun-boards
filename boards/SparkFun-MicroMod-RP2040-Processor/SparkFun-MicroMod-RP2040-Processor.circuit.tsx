import { sel } from "tscircuit"

// MicroMod M.2 connector pin labels (75 positions, E-key)
// Based on MicroMod Interface v1.0 specification
const micromodPinLabels = {
  // Power pins
  pin1: ["GND"],
  pin2: ["GND"],
  pin3: ["V3V3"],
  pin4: ["V3V3"],
  // USB
  pin5: ["USB_DN"],
  pin6: ["USB_DP"],
  // Reset and Boot
  pin7: ["RESET"],
  pin8: ["BOOT"],
  // I2C0
  pin9: ["I2C_SDA"],
  pin10: ["I2C_SCL"],
  // SPI
  pin11: ["SPI_CIPO"],
  pin12: ["SPI_COPI"],
  pin13: ["SPI_SCK"],
  pin14: ["SPI_CS"],
  // UART
  pin15: ["UART_TX1"],
  pin16: ["UART_RX1"],
  // Analog
  pin17: ["A0"],
  pin18: ["A1"],
  // Digital/PWM
  pin19: ["D0", "PWM0"],
  pin20: ["D1", "PWM1"],
  // General purpose
  pin21: ["G0"],
  pin22: ["G1"],
  pin23: ["G2"],
  pin24: ["G3"],
  pin25: ["G4"],
  pin26: ["G5"],
  pin27: ["G6"],
  // SWD
  pin28: ["SWDIO"],
  pin29: ["SWCLK"],
}

export default () => (
  <board width="22mm" height="22mm">
    {/* M.2 Edge Connector (MicroMod interface) */}
    <jumper
      name="J1"
      footprint="soic76_p0.5mm"
      pinLabels={micromodPinLabels}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "GND",
            "V3V3",
            "USB_DN",
            "USB_DP",
            "RESET",
            "BOOT",
            "I2C_SDA",
            "I2C_SCL",
            "SPI_CIPO",
            "SPI_COPI",
            "SPI_SCK",
            "SPI_CS",
            "UART_TX1",
            "UART_RX1",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "A0",
            "A1",
            "D0",
            "D1",
            "G0",
            "G1",
            "G2",
            "G3",
            "G4",
            "G5",
            "G6",
            "SWDIO",
            "SWCLK",
          ],
        },
      }}
    />

    {/* Net labels for power distribution */}
    <netlabel
      net="GND"
      schX={-5}
      schY={2}
      anchorSide="right"
      connectsTo={sel.J1.pin1}
    />
    <netlabel
      net="V3V3"
      schX={-5}
      schY={1}
      anchorSide="right"
      connectsTo={sel.J1.pin3}
    />
  </board>
)
