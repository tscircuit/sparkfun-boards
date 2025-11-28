import React from "react"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["V3_3"],
  pin3: ["USB_DP"],
  pin4: ["GND"],
  pin5: ["USB_DN"],
  pin6: ["GND"],
  pin7: ["USB_VIN"],
  pin8: ["GND"],
  pin9: ["GND"],
  pin10: ["V3_3_EN"],
  pin11: ["BOOT_N"],
  pin12: ["RESET_N"],
  pin13: ["V3_3"],
  pin14: ["V3_3"],
  pin15: ["RTC_3V"],
  pin16: ["SPI_CS"],
  pin17: ["SPI_SCK"],
  pin18: ["SPI_CIPO"],
  pin19: ["SPI_COPI"],
  pin20: ["SDIO_DATA3"],
  pin21: ["SDIO_DATA2"],
  pin22: ["SDIO_DATA1"],
  pin23: ["SDIO_DATA0"],
  pin24: ["SDIO_CMD"],
  pin25: ["SDIO_SCK"],
  pin26: ["SDIO_VDD"],
  pin27: ["I2C_SDA"],
  pin28: ["I2C_SCL"],
  pin29: ["I2C_INT"],
  pin30: ["I2C1_SDA"],
  pin31: ["I2C1_SCL"],
  pin32: ["I2C1_INT"],
  pin33: ["UART_TX1"],
  pin34: ["UART_RX1"],
  pin35: ["UART_RTS1"],
  pin36: ["UART_CTS1"],
  pin37: ["CAN_TX"],
  pin38: ["CAN_RX"],
  pin39: ["UART_TX2"],
  pin40: ["UART_RX2"],
  pin41: ["D0"],
  pin42: ["D1"],
  pin43: ["SWO"],
  pin44: ["SWDCK"],
  pin45: ["SWDIO"],
  pin46: ["GND"],
  pin47: ["A0"],
  pin48: ["A1"],
  pin49: ["GND"],
  pin50: ["PWM0"],
  pin51: ["PWM1"],
  pin52: ["GND"],
  pin53: ["GND"],
  pin54: ["G0"],
  pin55: ["G1"],
  pin56: ["GND"],
  pin57: ["G2"],
  pin58: ["G3"],
  pin59: ["GND"],
  pin60: ["G4"],
  pin61: ["G5"],
  pin62: ["GND"],
  pin63: ["G6"],
  pin64: ["G7"],
  pin65: ["GND"],
  pin66: ["BUS0"],
  pin67: ["BUS1"],
  pin68: ["GND"],
  pin69: ["BUS2"],
  pin70: ["BUS3"],
  pin71: ["GND"],
  pin72: ["BUS4"],
  pin73: ["BUS5"],
  pin74: ["GND"],
  pin75: ["BUS6"],
} as const

export const MicroModEdge = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="MicroMod-M.2-Edge-75pin"
      schWidth={2.2}
      schHeight={10}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: Array.from({ length: 38 }, (_, i) => `pin${i + 1}`),
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: Array.from({ length: 37 }, (_, i) => `pin${i + 39}`),
        },
      }}
      footprint={
        <footprint should_not_route_to={["R4"]}>
          {/* M.2 edge connector - 75 pads across 22mm board width, pads on both sides */}
          {/* Use shared X columns: each column has a top (odd) and bottom (even) pad at the same X */}
          {(() => {
            const cols = 38 // odd: 38, even: 37 -> total 75 pins
            const PAD_W = 0.25
            // Constrain first/last pad edges to board edges (-11..+11)
            const startX = -11 + PAD_W / 2
            const endX = 11 - PAD_W / 2
            const dx = (endX - startX) / (cols - 1)
            const pads: any[] = []
            for (let c = 0; c < cols; c++) {
              const x = startX + c * dx
              // Skip any pad whose extent overlaps the notch window [2,4]
              if (x - PAD_W / 2 < 4 && x + PAD_W / 2 > 2) continue
              const oddPin = 2 * c + 1
              const evenPin = 2 * c + 2
              // Top side (odd pins)
              if (oddPin <= 75) {
                pads.push(
                  <React.Fragment key={`pin${oddPin}`}>
                    <smtpad
                      portHints={[`pin${oddPin}`]}
                      pcbX={x}
                      pcbY={0}
                      width={PAD_W}
                      height={1.5}
                      shape="rect"
                      layer="top"
                    />
                  </React.Fragment>,
                )
              }
              // Bottom side (even pins)
              if (evenPin <= 75) {
                pads.push(
                  <React.Fragment key={`pin${evenPin}`}>
                    <smtpad
                      portHints={[`pin${evenPin}`]}
                      pcbX={x}
                      pcbY={0}
                      width={PAD_W}
                      height={1.5}
                      shape="rect"
                      layer="bottom"
                    />
                  </React.Fragment>,
                )
              }
            }
            return pads
          })()}
        </footprint>
      }
      {...props}
    />
  )
}
