import { RP2040 } from "./RP2040"
import { W25Q128JV } from "./W25Q128JV"
import { sel } from "tscircuit"

const MicroModRP2040Processor = () => (
    <board width="22mm" height="22mm">
        {/* RP2040 Microcontroller */}
        <RP2040
            name="U1"
            pcbX={0}
            pcbY={2}
            connections={{
                // Power connections
                IOVDD1: "net.VCC_3V3",
                IOVDD2: "net.VCC_3V3",
                IOVDD3: "net.VCC_3V3",
                IOVDD4: "net.VCC_3V3",
                IOVDD5: "net.VCC_3V3",
                IOVDD6: "net.VCC_3V3",
                DVDD1: "net.VCC_1V1",
                DVDD2: "net.VCC_1V1",
                USB_VDD: "net.VCC_3V3",
                ADC_AVDD: "net.VCC_3V3",
                VREG_VIN: "net.VCC_3V3",
                VREG_VOUT: "net.VCC_1V1",
                GND: "net.GND",

                // QSPI Flash connections
                QSPI_SCLK: sel.U2.CLK,
                QSPI_SS: sel.U2.CS,
                QSPI_SD0: sel.U2.DI_IO0,
                QSPI_SD1: sel.U2.DO_IO1,
                QSPI_SD2: sel.U2.WP_IO2,
                QSPI_SD3: sel.U2.HOLD_IO3,

                // Crystal oscillator
                XIN: sel.Y1.pin1,
                XOUT: sel.Y1.pin2,

                // USB
                USB_DP: "net.USB_DP",
                USB_DM: "net.USB_DM",

                // Debug
                SWCLK: "net.SWCLK",
                SWD: "net.SWD",
                RUN: "net.RUN",

                // Status LED
                GPIO25: sel.R1.pin1,

                // Test pin to ground
                TESTEN: "net.GND",

                // MicroMod Interface GPIO mapping
                GPIO0: "net.I2C_SDA",
                GPIO1: "net.I2C_SCL",
                GPIO2: "net.SPI_SCK",
                GPIO3: "net.SPI_COPI",
                GPIO4: "net.SPI_CIPO",
                GPIO5: "net.SPI_CS",
                GPIO6: "net.D0",
                GPIO7: "net.D1",
                GPIO8: "net.UART_TX1",
                GPIO9: "net.UART_RX1",
                GPIO10: "net.SDIO_DATA2",
                GPIO11: "net.SDIO_DATA1",
                GPIO12: "net.SDIO_CLK",
                GPIO13: "net.SDIO_CMD",
                GPIO14: "net.SDIO_DATA0",
                GPIO15: "net.SDIO_DATA3",
                GPIO16: "net.PWM0",
                GPIO17: "net.PWM1",
                GPIO18: "net.I2C_SDA1",
                GPIO19: "net.I2C_SCL1",
                GPIO20: "net.AUD_LRCLK",
                GPIO21: "net.AUD_OUT",
                GPIO22: "net.AUD_IN",
                GPIO23: "net.AUD_BCLK",
                GPIO24: "net.G11",
                GPIO26_ADC0: "net.A0",
                GPIO27_ADC1: "net.A1",
                GPIO28_ADC2: "net.VIN_DIV",
                GPIO29_ADC3: "net.BATT_VIN",
            }}
        />

        {/* 128Mbit QSPI Flash */}
        <W25Q128JV
            name="U2"
            pcbX={-6}
            pcbY={-4}
            pcbRotation={90}
            connections={{
                VCC: "net.VCC_3V3",
                GND: "net.GND",
            }}
        />

        {/* 12MHz Crystal Oscillator */}
        <crystal
            name="Y1"
            frequency="12MHz"
            footprint="crystal0402"
            pcbX={5}
            pcbY={0}
            pcbRotation={90}
            schX={6}
            schY={0}
        />

        {/* Crystal load capacitors */}
        <capacitor
            name="C1"
            capacitance="20pF"
            footprint="cap0402"
            pcbX={6}
            pcbY={1}
            schX={7}
            schY={1}
            connections={{ pin1: sel.Y1.pin1, pin2: "net.GND" }}
        />
        <capacitor
            name="C2"
            capacitance="20pF"
            footprint="cap0402"
            pcbX={6}
            pcbY={-1}
            schX={7}
            schY={-1}
            connections={{ pin1: sel.Y1.pin2, pin2: "net.GND" }}
        />

        {/* Power decoupling capacitors */}
        <capacitor
            name="C3"
            capacitance="0.1uF"
            footprint="cap0402"
            pcbX={2}
            pcbY={6}
            schX={-4}
            schY={4}
            connections={{ pin1: "net.VCC_3V3", pin2: "net.GND" }}
        />
        <capacitor
            name="C4"
            capacitance="0.1uF"
            footprint="cap0402"
            pcbX={0}
            pcbY={6}
            schX={-3}
            schY={4}
            connections={{ pin1: "net.VCC_3V3", pin2: "net.GND" }}
        />
        <capacitor
            name="C5"
            capacitance="0.1uF"
            footprint="cap0402"
            pcbX={-2}
            pcbY={6}
            schX={-2}
            schY={4}
            connections={{ pin1: "net.VCC_3V3", pin2: "net.GND" }}
        />
        <capacitor
            name="C6"
            capacitance="1uF"
            footprint="cap0402"
            pcbX={4}
            pcbY={6}
            schX={-1}
            schY={4}
            connections={{ pin1: "net.VCC_3V3", pin2: "net.GND" }}
        />

        {/* 1.1V core voltage capacitor */}
        <capacitor
            name="C7"
            capacitance="1uF"
            footprint="cap0402"
            pcbX={-4}
            pcbY={6}
            schX={0}
            schY={4}
            connections={{ pin1: "net.VCC_1V1", pin2: "net.GND" }}
        />

        {/* USB decoupling */}
        <capacitor
            name="C8"
            capacitance="0.1uF"
            footprint="cap0402"
            pcbX={-6}
            pcbY={6}
            schX={1}
            schY={4}
            connections={{ pin1: "net.VCC_3V3", pin2: "net.GND" }}
        />

        {/* Flash decoupling */}
        <capacitor
            name="C9"
            capacitance="0.1uF"
            footprint="cap0402"
            pcbX={-8}
            pcbY={-3}
            schX={-6}
            schY={-4}
            connections={{ pin1: "net.VCC_3V3", pin2: "net.GND" }}
        />

        {/* Status LED with current limiting resistor */}
        <resistor
            name="R1"
            resistance="1k"
            footprint="res0402"
            pcbX={7}
            pcbY={4}
            schX={4}
            schY={2}
            schRotation={90}
            connections={{ pin2: sel.LED1.pin1 }}
        />
        <led
            name="LED1"
            color="blue"
            footprint="led0402"
            pcbX={7}
            pcbY={6}
            schX={4}
            schY={0}
            schRotation={270}
            connections={{ pin2: "net.GND" }}
        />

        {/* BOOT button pull-up resistor */}
        <resistor
            name="R2"
            resistance="10k"
            footprint="res0402"
            pcbX={-8}
            pcbY={4}
            schX={-6}
            schY={2}
            connections={{ pin1: "net.VCC_3V3", pin2: "net.RUN" }}
        />

        {/* USB termination resistor */}
        <resistor
            name="R3"
            resistance="27R"
            footprint="res0402"
            pcbX={-7}
            pcbY={0}
            schX={-8}
            schY={0}
            connections={{ pin1: "net.USB_DP", pin2: "net.USB_DP_TERM" }}
        />
        <resistor
            name="R4"
            resistance="27R"
            footprint="res0402"
            pcbX={-7}
            pcbY={-1}
            schX={-8}
            schY={-1}
            connections={{ pin1: "net.USB_DM", pin2: "net.USB_DM_TERM" }}
        />

        {/* M.2 Edge Connector - simplified representation with key pins */}
        <jumper
            name="J1"
            pinLabels={{
                pin1: "GND",
                pin2: "3V3",
                pin3: "USB_DP",
                pin4: "USB_DM",
                pin5: "GND",
                pin6: "D0",
                pin7: "D1",
                pin8: "I2C_SDA",
                pin9: "I2C_SCL",
                pin10: "SPI_CS",
                pin11: "SPI_SCK",
                pin12: "SPI_COPI",
                pin13: "SPI_CIPO",
                pin14: "UART_TX1",
                pin15: "UART_RX1",
                pin16: "A0",
                pin17: "A1",
                pin18: "PWM0",
                pin19: "PWM1",
                pin20: "GND",
            }}
            footprint="pinrow20"
            pcbX={0}
            pcbY={-9}
            pcbRotation={0}
            schX={0}
            schY={-6}
            schDirection="left"
            connections={{
                GND: "net.GND",
                "3V3": "net.VCC_3V3",
                USB_DP: "net.USB_DP_TERM",
                USB_DM: "net.USB_DM_TERM",
                D0: "net.D0",
                D1: "net.D1",
                I2C_SDA: "net.I2C_SDA",
                I2C_SCL: "net.I2C_SCL",
                SPI_CS: "net.SPI_CS",
                SPI_SCK: "net.SPI_SCK",
                SPI_COPI: "net.SPI_COPI",
                SPI_CIPO: "net.SPI_CIPO",
                UART_TX1: "net.UART_TX1",
                UART_RX1: "net.UART_RX1",
                A0: "net.A0",
                A1: "net.A1",
                PWM0: "net.PWM0",
                PWM1: "net.PWM1",
            }}
        />

        {/* Silkscreen labels */}
        <silkscreentext text="MicroMod" fontSize={1.2} pcbX={0} pcbY={9} />
        <silkscreentext text="RP2040" fontSize={1.0} pcbX={0} pcbY={7.5} />

        {/* Board mounting holes */}
        <hole diameter={1.5} pcbX={-9} pcbY={9} />
        <hole diameter={1.5} pcbX={9} pcbY={9} />

        {/* Net labels for schematic clarity */}
        <netlabel net="VCC_3V3" connectsTo={sel.U1.IOVDD1} anchorSide="top" />
        <netlabel net="GND" connectsTo={sel.U1.GND} anchorSide="bottom" />
        <netlabel net="USB_DP" connectsTo={sel.U1.USB_DP} anchorSide="left" />
        <netlabel net="USB_DM" connectsTo={sel.U1.USB_DM} anchorSide="left" />

        <schematictext
            text="SparkFun MicroMod RP2040 Processor"
            fontSize={0.3}
            schX={0}
            schY={6}
        />
        <schematictext
            text="VCC: 3.3V"
            fontSize={0.2}
            schX={6}
            schY={5}
            color="gray"
        />
    </board>
)

export default MicroModRP2040Processor
