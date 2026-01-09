import { Chip } from "tscircuit"

export const MicroModConnector = (props: any) => (
    <chip
        {...props}
        name={props.name || "J1"}
        footprint="m2_micromod_connector" // Placeholder for M.2 MicroMod Connector
        pinLabels={{
            // Power / Control
            pin1: ["GND"], pin2: ["3.3V"],
            pin3: ["USB_D+"], pin4: ["3.3V_EN"],
            pin5: ["USB_D-"], pin6: ["RESET#"],
            pin7: ["GND"], pin8: ["GND"],
            pin9: ["USB_VIN"], pin10: ["D0"],
            pin11: ["BOOT"], pin12: ["I2C_SDA"],
            pin13: ["GND"], pin14: ["I2C_SCL"],
            pin15: ["BATT_VIN/3"], pin16: ["I2C_INT#"],
            pin17: ["BATT_VIN"], pin18: ["D1"],
            pin19: ["GND"], pin20: ["RX1"],
            pin21: ["TX1"], pin22: ["RX2"],
            pin23: ["CTS1"], pin24: ["TX2"],
            pin25: ["RTS1"], pin26: ["GND"],
            pin27: ["PWM0"], pin28: ["GND"],
            pin29: ["PWM1"], pin30: ["GND"],
            pin31: ["SPI_SCK"], pin32: ["GND"],
            pin33: ["SPI_CIPO"], pin34: ["A0"],
            pin35: ["SPI_COPI"], pin36: ["GND"],
            pin37: ["SPI_CS#"], pin38: ["A1"],
            pin39: ["G0"], pin40: ["GND"],
            pin41: ["G1"], pin42: ["G4"],
            pin43: ["G2"], pin44: ["G5"],
            pin45: ["G3"], pin46: ["G6"],
            pin47: ["GND"], pin48: ["G7"],
            pin49: ["GND"], pin50: ["G8"],
            pin51: ["G9"], pin52: ["G11/SWO"],
            pin53: ["G10"], pin54: ["SWD_CLK"],
            pin55: ["SWD_IO"], // SWD_IO from our netlist
            // Key E
            // 56-65 are typically Key
            pin66: ["SDIO_DATA2"], pin67: ["SDIO_DATA3"],
            pin68: ["SDIO_DATA1"], pin69: ["SDIO_CMD"],
            pin70: ["SDIO_DATA0"], pin71: ["SDIO_CLK"],
            pin72: ["RTC_3V"], pin73: ["3.3V"],
            pin74: ["3.3V"], pin75: ["GND"]
        }}
    />
)
