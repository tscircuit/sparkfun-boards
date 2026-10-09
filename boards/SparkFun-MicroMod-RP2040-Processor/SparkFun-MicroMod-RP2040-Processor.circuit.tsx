import { RP2040 } from "./RP2040"
import { W25Q128JV } from "./W25Q128JV"
import { MicroModEdge } from "./MicroModEdge"
import { sel } from "tscircuit"

/**
 * SparkFun MicroMod RP2040 Processor Board
 * 
 * Product: DEV-17720
 * https://www.sparkfun.com/products/17720
 * 
 * Features:
 * - RP2040 dual-core ARM Cortex-M0+ @ 133MHz
 * - 16MB external flash (W25Q128JV)
 * - MicroMod M.2 form factor (22mm)
 * - USB 1.1 Host/Device
 * - 30 GPIO pins via MicroMod interface
 * - Status LED on GPIO25
 */

export default () => (
    <board width="22mm" height="22mm" routingDisabled>
        {/* RP2040 Microcontroller */}
        <RP2040
            name="U1"
            pcbX={0}
            pcbY={4}
            connections={{
                // Power connections
                pin1: sel.net().V3_3,
                pin10: sel.net().V3_3,
                pin22: sel.net().V1_1,
                pin33: sel.net().V3_3,
                pin42: sel.net().V3_3,
                pin43: sel.net().V3_3,
                pin44: sel.net().V3_3,
                pin45: sel.net().V1_1,
                pin49: sel.net().V3_3,
                pin50: sel.net().V3_3,
                pin57: sel.net().GND,

                // USB connections
                pin46: sel.net().USB_DM,
                pin47: sel.net().USB_DP,

                // Crystal (12MHz)
                pin20: sel.net().XIN,
                pin21: sel.net().XOUT,

                // QSPI Flash connections
                pin51: sel.net().FLASH_IO3,
                pin53: sel.net().FLASH_CLK,
                pin54: sel.net().FLASH_IO0,
                pin55: sel.net().FLASH_IO2,
                pin48: sel.net().FLASH_IO1,
                pin56: sel.net().FLASH_CS,

                // Status LED
                pin32: sel.net().LED,

                // SWD Debug
                pin38: sel.net().SWCLK,
                pin40: sel.net().SWDIO,

                // GPIO to MicroMod interface
                pin2: sel.net().GPIO0,
                pin3: sel.net().GPIO1,
                pin4: sel.net().I2C_SDA,
                pin5: sel.net().I2C_SCL,
                pin6: sel.net().UART_TX1,
                pin7: sel.net().UART_RX1,
                pin8: sel.net().SPI_COPI,
                pin9: sel.net().SPI_CIPO,
                pin11: sel.net().SPI_SCK,
                pin12: sel.net().SPI_CS,
                pin13: sel.net().PWM0,
                pin14: sel.net().PWM1,
                pin34: sel.net().A0,
                pin35: sel.net().A1,
                pin36: sel.net().A2,
            }}
            schX={0}
            schY={0}
        />

        {/* 16MB Flash Memory */}
        <W25Q128JV
            name="U2"
            pcbX={-6}
            pcbY={0}
            pcbRotation={90}
            connections={{
                pin1: sel.net().FLASH_CS,
                pin2: sel.net().FLASH_IO1,
                pin3: sel.net().FLASH_IO2,
                pin4: sel.net().GND,
                pin5: sel.net().FLASH_IO0,
                pin6: sel.net().FLASH_CLK,
                pin7: sel.net().FLASH_IO3,
                pin8: sel.net().V3_3,
            }}
            schX={8}
            schY={0}
        />

        {/* MicroMod Edge Connector */}
        <MicroModEdge
            name="J1"
            pcbX={0}
            pcbY={-8}
            connections={{
                pin2: sel.net().V3_3,
                pin3: sel.net().USB_VIN,
                pin6: sel.net().RESET,
                pin8: sel.net().BOOT,
                pin10: sel.net().USB_DM,
                pin12: sel.net().USB_DP,
                pin16: sel.net().UART_TX1,
                pin18: sel.net().UART_RX1,
                pin24: sel.net().I2C_SDA,
                pin26: sel.net().I2C_SCL,
                pin34: sel.net().SPI_CS,
                pin36: sel.net().SPI_SCK,
                pin38: sel.net().SPI_COPI,
                pin40: sel.net().SPI_CIPO,
                pin50: sel.net().A0,
                pin52: sel.net().A1,
                pin56: sel.net().PWM0,
                pin58: sel.net().PWM1,
                pin60: sel.net().GPIO0,
                pin62: sel.net().GPIO1,
            }}
            schX={-10}
            schY={0}
        />

        {/* 12MHz Crystal */}
        <crystal
            name="Y1"
            frequency="12MHz"
            loadCapacitance="20pF"
            footprint="crystal_3225"
            pcbX={4}
            pcbY={6}
            schX={4}
            schY={4}
            connections={{
                pin1: sel.net().XIN,
                pin2: sel.net().XOUT,
            }}
        />

        {/* Crystal load capacitors */}
        <capacitor
            name="C1"
            capacitance="20pF"
            footprint="cap0402"
            pcbX={5}
            pcbY={7}
            schX={5}
            schY={3}
            connections={{
                pin1: sel.net().XIN,
                pin2: sel.net().GND,
            }}
        />
        <capacitor
            name="C2"
            capacitance="20pF"
            footprint="cap0402"
            pcbX={5}
            pcbY={5}
            schX={5}
            schY={5}
            connections={{
                pin1: sel.net().XOUT,
                pin2: sel.net().GND,
            }}
        />

        {/* Decoupling capacitors */}
        <capacitor
            name="C3"
            capacitance="100nF"
            footprint="cap0402"
            pcbX={2}
            pcbY={2}
            schX={2}
            schY={-3}
            connections={{
                pin1: sel.net().V3_3,
                pin2: sel.net().GND,
            }}
        />
        <capacitor
            name="C4"
            capacitance="100nF"
            footprint="cap0402"
            pcbX={-2}
            pcbY={2}
            schX={3}
            schY={-3}
            connections={{
                pin1: sel.net().V3_3,
                pin2: sel.net().GND,
            }}
        />
        <capacitor
            name="C5"
            capacitance="1uF"
            footprint="cap0402"
            pcbX={0}
            pcbY={2}
            schX={4}
            schY={-3}
            connections={{
                pin1: sel.net().V3_3,
                pin2: sel.net().GND,
            }}
        />

        {/* Core voltage capacitor */}
        <capacitor
            name="C6"
            capacitance="1uF"
            footprint="cap0402"
            pcbX={-3}
            pcbY={5}
            schX={5}
            schY={-3}
            connections={{
                pin1: sel.net().V1_1,
                pin2: sel.net().GND,
            }}
        />

        {/* Status LED */}
        <led
            name="D1"
            color="green"
            footprint="0402"
            pcbX={8}
            pcbY={2}
            schX={-8}
            schY={-2}
            connections={{
                pin2: sel.net().GND,
            }}
        />
        <resistor
            name="R1"
            resistance="1k"
            footprint="0402"
            pcbX={8}
            pcbY={4}
            schX={-8}
            schY={0}
            connections={{
                pin1: sel.net().LED,
                pin2: sel.D1.pin1,
            }}
        />

        {/* Flash decoupling */}
        <capacitor
            name="C7"
            capacitance="100nF"
            footprint="cap0402"
            pcbX={-8}
            pcbY={2}
            schX={10}
            schY={2}
            connections={{
                pin1: sel.net().V3_3,
                pin2: sel.net().GND,
            }}
        />

        {/* Net labels */}
        <netlabel net="V3_3" schX={2} schY={-4} anchorSide="bottom" />
        <netlabel net="GND" schX={3} schY={-4} anchorSide="top" />
        <netlabel net="USB_DM" schX={-9} schY={2} anchorSide="right" />
        <netlabel net="USB_DP" schX={-9} schY={3} anchorSide="right" />

        {/* Silkscreen labels */}
        <silkscreentext text="MicroMod RP2040" pcbX={0} pcbY={9} fontSize={1} />
        <silkscreentext text="DEV-17720" pcbX={0} pcbY={7.5} fontSize={0.8} />
        <silkscreentext text="SparkFun" pcbX={0} pcbY={-10} fontSize={0.8} layer="bottom" />

        {/* Schematic notes */}
        <schematictext
            text="SparkFun MicroMod RP2040 Processor"
            schX={0}
            schY={8}
            fontSize={0.3}
            color="brown"
        />
        <schematictext
            text="RP2040 Dual Cortex-M0+ @ 133MHz"
            schX={0}
            schY={7}
            fontSize={0.15}
            color="gray"
        />
        <schematictext
            text="16MB External Flash (W25Q128JV)"
            schX={0}
            schY={6.5}
            fontSize={0.15}
            color="gray"
        />
    </board>
)
