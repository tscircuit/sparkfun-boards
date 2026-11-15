import type { ChipProps } from "@tscircuit/props"

/**
 * MicroMod M.2 Edge Connector (22mm form factor, E-key style)
 * 
 * This is the standardized MicroMod edge connector that connects
 * processor boards to carrier boards. Based on the M.2 standard.
 * 
 * Pin definitions follow SparkFun MicroMod specification:
 * https://learn.sparkfun.com/tutorials/micromod-all-the-pins
 */

const pinLabels = {
    // Power pins
    pin1: ["GND"],
    pin2: ["3V3"],
    pin3: ["USB_VIN"],
    pin4: ["3V3_EN"],
    pin5: ["GND"],
    pin6: ["RESET"],
    pin7: ["GND"],
    pin8: ["BOOT"],

    // USB pins
    pin9: ["GND"],
    pin10: ["USB_D-"],
    pin11: ["GND"],
    pin12: ["USB_D+"],
    pin13: ["GND"],
    pin14: ["NC"],

    // UART pins
    pin15: ["GND"],
    pin16: ["UART_TX1"],
    pin17: ["GND"],
    pin18: ["UART_RX1"],
    pin19: ["GND"],
    pin20: ["UART_RTS1"],
    pin21: ["GND"],
    pin22: ["UART_CTS1"],

    // I2C pins
    pin23: ["GND"],
    pin24: ["I2C_SDA"],
    pin25: ["GND"],
    pin26: ["I2C_SCL"],
    pin27: ["GND"],
    pin28: ["I2C_INT"],
    pin29: ["GND"],
    pin30: ["I2C1_SDA"],
    pin31: ["GND"],
    pin32: ["I2C1_SCL"],

    // SPI pins
    pin33: ["GND"],
    pin34: ["SPI_CS"],
    pin35: ["GND"],
    pin36: ["SPI_SCK"],
    pin37: ["GND"],
    pin38: ["SPI_COPI"],
    pin39: ["GND"],
    pin40: ["SPI_CIPO"],

    // SPI1 pins
    pin41: ["GND"],
    pin42: ["SPI1_CS"],
    pin43: ["GND"],
    pin44: ["SPI1_SCK"],
    pin45: ["GND"],
    pin46: ["SPI1_COPI"],
    pin47: ["GND"],
    pin48: ["SPI1_CIPO"],

    // Analog pins
    pin49: ["GND"],
    pin50: ["A0"],
    pin51: ["GND"],
    pin52: ["A1"],
    pin53: ["GND"],
    pin54: ["BATT_VIN/3"],

    // PWM pins
    pin55: ["GND"],
    pin56: ["PWM0"],
    pin57: ["GND"],
    pin58: ["PWM1"],

    // Digital pins
    pin59: ["GND"],
    pin60: ["D0"],
    pin61: ["GND"],
    pin62: ["D1"],
    pin63: ["GND"],
    pin64: ["G0"],
    pin65: ["GND"],
    pin66: ["G1"],
    pin67: ["GND"],
    pin68: ["G2"],
    pin69: ["GND"],
    pin70: ["G3"],
    pin71: ["GND"],
    pin72: ["G4"],
    pin73: ["GND"],
    pin74: ["G5"],
    pin75: ["GND"],
} as const

export const MicroModEdge = (props: ChipProps<typeof pinLabels>) => {
    return (
        <chip
            pinLabels={pinLabels}
            schPinArrangement={{
                rightSide: {
                    direction: "top-to-bottom",
                    pins: [
                        "pin2", "pin3", "pin4", "pin6", "pin8", "pin10", "pin12",
                        "pin16", "pin18", "pin20", "pin22", "pin24", "pin26", "pin28",
                        "pin30", "pin32", "pin34", "pin36", "pin38", "pin40",
                        "pin42", "pin44", "pin46", "pin48", "pin50", "pin52", "pin54",
                        "pin56", "pin58", "pin60", "pin62", "pin64", "pin66", "pin68",
                        "pin70", "pin72", "pin74"
                    ],
                },
            }}
            manufacturerPartNumber="MicroMod_Edge_75P"
            footprint="edgeconnector75_p0.5mm"
            {...props}
        />
    )
}
