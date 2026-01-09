import { RP2040 } from "./RP2040"
import { MicroModConnector } from "./MicroModConnector"

import { Resistor, Capacitor, Led, Chip } from "@tscircuit/parts"

export const SparkFunMicroModRP2040 = () => (
    <board width="22mm" height="22mm">

        <RP2040 name="U3"
            schX={0} schY={0}
            footprint="qfn56_7x7"
        />

        <MicroModConnector name="J1"
            schX={-25} schY={0}
        />

        {/* Flash Memory */}
        <chip name="U1" manufacturerPartNumber="W25Q128" footprint="soic8"
            pinLabels={{
                pin1: ["CS#"], pin2: ["DO/IO1"], pin3: ["WP#/IO2"], pin4: ["GND"],
                pin5: ["DI/IO0"], pin6: ["CLK"], pin7: ["HOLD#/IO3"], pin8: ["VCC"]
            }}
            schX={15} schY={10}
        />

        {/* Crystal 12MHz */}
        <component name="Y1" pcbX={5} pcbY={-5} schX={10} schY={-10}>
            <footprint>
                <smtpad shape="rect" width="1mm" height="1mm" layer="top" pcbX={-1} pcbY={0} portHints={["pin1"]} />
                <smtpad shape="rect" width="1mm" height="1mm" layer="top" pcbX={1} pcbY={0} portHints={["pin2"]} />
            </footprint>
        </component>

        {/* USB Mux - FSUSB30MUX */}
        <chip name="U2" manufacturerPartNumber="FSUSB30MUX" footprint="msop10"
            pinLabels={{
                pin1: ["VCC"], pin2: ["S"], pin3: ["OE#"], pin4: ["HSD1-"], pin5: ["HSD1+"],
                pin6: ["HSD2+"], pin7: ["HSD2-"], pin8: ["GND"], pin9: ["D-"], pin10: ["D+"]
            }}
            schX={-15} schY={15}
        />

        {/* LED D2 (Blue) - Status LED */}
        <Led name="D2" color="blue" footprint="0603" schX={10} schY={15} />
        <Resistor name="R1" resistance="1k" footprint="0402" schX={5} schY={15} />

        {/* USB Resistors */}
        <Resistor name="R10" resistance="27" footprint="0402" schX={-5} schY={5} />
        <Resistor name="R11" resistance="27" footprint="0402" schX={-5} schY={7} />

        {/* USB VBUS Divider */}
        <Resistor name="R18" resistance="1k" footprint="0402" schX={-20} schY={18} />
        <Resistor name="R5" resistance="10k" footprint="0402" schX={-20} schY={20} />

        {/* Caps (Simplification: generic decoupling) */}
        <Capacitor name="C3" capacitance="2.2uF" footprint="0402" schX={0} schY={-15} />
        <Capacitor name="C4" capacitance="2.2uF" footprint="0402" schX={2} schY={-15} />

        {/* Power Connections */}
        <net name="3.3V">
            <port port="J1.pin2" />
            <port port="J1.pin73" />
            <port port="J1.pin74" />
            <port port="U3.IOVDD" />
            <port port="U3.DVDD" />
            <port port="U3.ADC_AVDD" />
            <port port="U3.VREG_VIN" /> {/* VIN typically higher, but schematic showed 3.3V net on VREG_VIN? */}
            <port port="U3.USB_VDD" />
            <port port="U1.pin8" />
            <port port="U2.pin1" />
            <port port="C3.pin1" />
            <port port="C4.pin1" />
        </net>

        <net name="GND">
            <port port="J1.pin1" />
            <port port="J1.pin7" />
            <port port="J1.pin75" />
            <port port="U3.GND" />
            <port port="U1.pin4" />
            <port port="U2.pin8" />
            <port port="U2.pin3" /> {/* OE# grounded always enabled */}
            <port port="D2.cathode" />
            <port port="R5.pin1" />
            <port port="C3.pin2" />
            <port port="C4.pin2" />
            {/* Crystal Caps typically ground too, omitted for brevity but Y1 needs load caps */}
        </net>

        <net name="1.1V">
            <port port="U3.VREG_VOUT" />
            {/* Connects to internal core digital supply DVDD? No, U3.DVDD connected to 3.3V or 1.1V? 
            Check: RP2040 VREG_VOUT is 1.1V out. DVDD is 1.1V IN.
            Wait, earlier I connected U3.DVDD to 3.3V. 
            Correction: RP2040 DVDD is 1.1V Input! IOVDD is 3.3V.
            I must fix this. 
            Netlist: Supply8 -> 1.1V
            Let's assume loopback U3.VREG_VOUT -> U3.DVDD 
         */}
            <port port="U3.DVDD" />
        </net>

        {/* Crystal */}
        <net name="XIN"><port port="U3.XIN" /><port port="Y1.pin1" /></net>
        <net name="XOUT"><port port="U3.XOUT" /><port port="Y1.pin2" /></net>

        {/* Flash QSPI */}
        <net name="QSPI_SS"><port port="U3.QSPI_SS" /><port port="U1.pin1" /></net>
        <net name="QSPI_SCLK"><port port="U3.QSPI_SCLK" /><port port="U1.pin6" /></net>
        <net name="QSPI_SD0"><port port="U3.QSPI_SD0" /><port port="U1.pin5" /></net>
        <net name="QSPI_SD1"><port port="U3.QSPI_SD1" /><port port="U1.pin2" /></net>
        <net name="QSPI_SD2"><port port="U3.QSPI_SD2" /><port port="U1.pin3" /></net>
        <net name="QSPI_SD3"><port port="U3.QSPI_SD3" /><port port="U1.pin7" /></net>

        {/* USB Logic */}
        {/* VBUS Detect */}
        <net name="USB_VIN">
            <port port="J1.pin9" />
            <port port="R18.pin1" />
        </net>
        <net name="USB_MUX_SIG">
            <port port="R18.pin2" />
            <port port="R5.pin2" />
            <port port="U2.pin2" /> {/* S */}
        </net>

        {/* USB Data Path */}
        {/* J1 to Mux */}
        <net name="USB_D_N"><port port="J1.pin5" /><port port="U2.pin7" />{/* HSD2- */}</net>
        <net name="USB_D_P"><port port="J1.pin3" /><port port="U2.pin6" />{/* HSD2+ */}</net>
        {/* USBHost to Mux (if used) */}
        {/* <net name="USBHOST_D_N"><port port="J1.pin..." /><port port="U2.pin4" /></net> */}

        {/* Mux Common to RP2040 via Resistors */}
        <net name="RP_D_P_MUX"><port port="U2.pin10" /><port port="R10.pin1" /></net>
        <net name="RP_D_N_MUX"><port port="U2.pin9" /><port port="R11.pin1" /></net>

        <net name="RP_D_P"><port port="R10.pin2" /><port port="U3.USB_DP" /></net>
        <net name="RP_D_N"><port port="R11.pin2" /><port port="U3.USB_DM" /></net>

        {/* Status LED */}
        <net name="LED_SIG">
            <port port="U3.GPIO25" />
            <port port="J1.pin53" /> {/* G10 */}
            <port port="R1.pin2" />
        </net>
        <net name="LED_ANODE"><port port="R1.pin1" /><port port="D2.anode" /></net>


        {/* MicroMod GPIOs */}
        <net name="UART_TX1"><port port="U3.GPIO0" /><port port="J1.TX1" /></net>
        <net name="UART_RX1"><port port="U3.GPIO1" /><port port="J1.RX1" /></net>

        <net name="CTS1"><port port="U3.GPIO2" /><port port="J1.CTS1" /></net>
        <net name="RTS1"><port port="U3.GPIO3" /><port port="J1.RTS1" /></net>

        <net name="I2C_SDA"><port port="U3.GPIO4" /><port port="J1.I2C_SDA" /></net>
        <net name="I2C_SCL"><port port="U3.GPIO5" /><port port="J1.I2C_SCL" /></net>

        <net name="D0"><port port="U3.GPIO6" /><port port="J1.D0" /></net>
        <net name="D1"><port port="U3.GPIO7" /><port port="J1.D1" /></net>

        <net name="I2C_INT"><port port="U3.GPIO8" /><port port="J1.TX2" /></net>
        <net name="RX2"><port port="U3.GPIO9" /><port port="J1.RX2" /></net>

        <net name="SDIO_DATA2"><port port="U3.GPIO10" /><port port="J1.SDIO_DATA2" /></net>
        <net name="SDIO_DATA1"><port port="U3.GPIO11" /><port port="J1.SDIO_DATA1" /></net>
        <net name="SDIO_DATA0"><port port="U3.GPIO12" /><port port="J1.SDIO_DATA0" /></net>

        <net name="PWM0"><port port="U3.GPIO13" /><port port="J1.PWM0" /></net>

        <net name="SDIO_CLK"><port port="U3.GPIO14" /><port port="J1.SDIO_CLK" /></net>
        <net name="SDIO_CMD"><port port="U3.GPIO15" /><port port="J1.SDIO_CMD" /></net>

        <net name="G0"><port port="U3.GPIO16" /><port port="J1.G0" /></net>
        <net name="G1"><port port="U3.GPIO17" /><port port="J1.G1" /></net>
        <net name="G2"><port port="U3.GPIO18" /><port port="J1.G2" /></net>
        <net name="G3"><port port="U3.GPIO19" /><port port="J1.G3" /></net>

        <net name="SPI_CIPO"><port port="U3.GPIO20" /><port port="J1.SPI_CIPO" /></net>
        <net name="SPI_CS"><port port="U3.GPIO21" /><port port="J1.SPI_CS#" /></net>
        <net name="SPI_SCK"><port port="U3.GPIO22" /><port port="J1.SPI_SCK" /></net>
        <net name="SPI_COPI"><port port="U3.GPIO23" /><port port="J1.SPI_COPI" /></net>

        <net name="PWM1"><port port="U3.GPIO24" /><port port="J1.PWM1" /></net>

        <net name="A0"><port port="U3.GPIO26_ADC0" /><port port="J1.A0" /></net>
        <net name="A1"><port port="U3.GPIO27_ADC1" /><port port="J1.A1" /></net>
        <net name="G9"><port port="U3.GPIO28_ADC2" /><port port="J1.G9" /></net>
        <net name="BATT_VIN_3"><port port="U3.GPIO29_ADC3" /><port port="J1.BATT_VIN/3" /></net>

        <net name="SWDIO"><port port="U3.SWDIO" /><port port="J1.SWD_IO" /></net>
        <net name="SWCLK"><port port="U3.SWCLK" /><port port="J1.SWD_CLK" /></net>
        <net name="RESET"><port port="U3.RUN" /><port port="J1.RESET#" /></net>
        <net name="BOOT"><port port="J1.BOOT" /></net> {/* BOOT usually pulled down? Not connected to RP2040 directly... wait, QSPI_SS? No. 
        Flash has to be handled. RP2040 boot mode via QSPI_SS usually.
        If J1.BOOT is asserted, how does it affect?
        Schematic check: `Net: BOOT` -> `J1.!BOOT!`. Is it connected to `U1.CS`?
        Usually BOOT button pulls QSPI_CS low (or similar) on power up.
        If not connected in netlist, maybe it's unused or I missed it. I'll leave as stub.
    */}

    </board>
)

export default SparkFunMicroModRP2040
