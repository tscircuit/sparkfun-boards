import type { ChipProps } from "@tscircuit/props"

/**
 * RP2040 - Raspberry Pi Foundation's dual-core ARM Cortex-M0+ microcontroller
 * Package: QFN-56 (7x7mm)
 * 
 * Key Features:
 * - Dual ARM Cortex-M0+ cores @ up to 133MHz
 * - 264KB SRAM
 * - 30 GPIO pins
 * - 4 ADC channels
 * - USB 1.1 Host/Device
 * - 2x SPI, 2x I2C, 2x UART, 16x PWM
 */

const pinLabels = {
    // Power pins
    pin1: ["IOVDD"],
    pin10: ["USB_VDD"],
    pin22: ["DVDD"],
    pin33: ["IOVDD2"],
    pin42: ["IOVDD3"],
    pin49: ["USB_VDD2"],
    pin50: ["IOVDD4"],
    pin44: ["VREG_VIN"],
    pin45: ["VREG_VOUT"],
    pin43: ["ADC_AVDD"],

    // Ground pins  
    pin57: ["GND"],

    // USB pins
    pin46: ["USB_DM"],
    pin47: ["USB_DP"],

    // Crystal pins
    pin20: ["XIN"],
    pin21: ["XOUT"],

    // Reset and Boot
    pin52: ["RUN"],
    pin56: ["QSPI_SS"],

    // QSPI Flash interface
    pin51: ["QSPI_SD3"],
    pin53: ["QSPI_SCLK"],
    pin54: ["QSPI_SD0"],
    pin55: ["QSPI_SD2"],
    pin48: ["QSPI_SD1"],

    // GPIO pins
    pin2: ["GPIO0", "SPI0_RX", "I2C0_SDA", "UART0_TX"],
    pin3: ["GPIO1", "SPI0_CSn", "I2C0_SCL", "UART0_RX"],
    pin4: ["GPIO2", "SPI0_SCK", "I2C1_SDA"],
    pin5: ["GPIO3", "SPI0_TX", "I2C1_SCL"],
    pin6: ["GPIO4", "SPI0_RX", "I2C0_SDA", "UART1_TX"],
    pin7: ["GPIO5", "SPI0_CSn", "I2C0_SCL", "UART1_RX"],
    pin8: ["GPIO6", "SPI0_SCK", "I2C1_SDA"],
    pin9: ["GPIO7", "SPI0_TX", "I2C1_SCL"],
    pin11: ["GPIO8", "SPI1_RX", "I2C0_SDA", "UART1_TX"],
    pin12: ["GPIO9", "SPI1_CSn", "I2C0_SCL", "UART1_RX"],
    pin13: ["GPIO10", "SPI1_SCK", "I2C1_SDA"],
    pin14: ["GPIO11", "SPI1_TX", "I2C1_SCL"],
    pin15: ["GPIO12", "SPI1_RX", "I2C0_SDA", "UART0_TX"],
    pin16: ["GPIO13", "SPI1_CSn", "I2C0_SCL", "UART0_RX"],
    pin17: ["GPIO14", "SPI1_SCK", "I2C1_SDA"],
    pin18: ["GPIO15", "SPI1_TX", "I2C1_SCL"],
    pin19: ["TESTEN"],
    pin23: ["GPIO16", "SPI0_RX", "I2C0_SDA", "UART0_TX"],
    pin24: ["GPIO17", "SPI0_CSn", "I2C0_SCL", "UART0_RX"],
    pin25: ["GPIO18", "SPI0_SCK", "I2C1_SDA"],
    pin26: ["GPIO19", "SPI0_TX", "I2C1_SCL"],
    pin27: ["GPIO20", "SPI0_RX", "I2C0_SDA"],
    pin28: ["GPIO21", "SPI0_CSn", "I2C0_SCL"],
    pin29: ["GPIO22", "SPI0_SCK", "I2C1_SDA"],
    pin30: ["GPIO23"],
    pin31: ["GPIO24"],
    pin32: ["GPIO25", "LED"],
    pin34: ["GPIO26", "ADC0"],
    pin35: ["GPIO27", "ADC1"],
    pin36: ["GPIO28", "ADC2"],
    pin37: ["GPIO29", "ADC3"],
    pin38: ["SWCLK"],
    pin39: ["SWD"],
    pin40: ["SWDIO"],
    pin41: ["XIP_DATA3"],
} as const

export const RP2040 = (props: ChipProps<typeof pinLabels>) => {
    return (
        <chip
            pinLabels={pinLabels}
            schPinArrangement={{
                leftSide: {
                    direction: "top-to-bottom",
                    pins: [
                        "pin2", "pin3", "pin4", "pin5", "pin6", "pin7", "pin8", "pin9",
                        "pin11", "pin12", "pin13", "pin14", "pin15", "pin16", "pin17", "pin18"
                    ],
                },
                rightSide: {
                    direction: "top-to-bottom",
                    pins: [
                        "pin23", "pin24", "pin25", "pin26", "pin27", "pin28", "pin29", "pin30",
                        "pin31", "pin32", "pin34", "pin35", "pin36", "pin37", "pin38", "pin39"
                    ],
                },
                topSide: {
                    direction: "left-to-right",
                    pins: ["pin1", "pin10", "pin22", "pin33", "pin42", "pin44", "pin45", "pin43"],
                },
                bottomSide: {
                    direction: "left-to-right",
                    pins: ["pin57", "pin46", "pin47", "pin20", "pin21", "pin52", "pin56", "pin53"],
                },
            }}
            supplierPartNumbers={{
                jlcpcb: ["C2040"],
            }}
            manufacturerPartNumber="RP2040"
            footprint="qfn56_w7_h7_p0.4mm"
            cadModel={{
                objUrl:
                    "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c4ed2fb5eb5e4858b8f8e4d4d8e6c8a0&pn=C2040",
                rotationOffset: { x: 0, y: 0, z: 0 },
                positionOffset: { x: 0, y: 0, z: 0 },
            }}
            {...props}
        />
    )
}
