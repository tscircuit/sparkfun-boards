import { Circuit } from "tscircuit"
import type { CommonLayoutProps } from "@tscircuit/props"

/**
 * SparkFun MicroMod RP2040 Processor Board
 * 
 * A compact microcontroller board featuring the Raspberry Pi RP2040 dual-core ARM Cortex-M0+ processor.
 * Designed to work with SparkFun's MicroMod ecosystem.
 * 
 * Features:
 * - Dual-core ARM Cortex-M0+ processor running at 133MHz
 * - 264KB of SRAM
 * - 16MB of flash memory
 * - USB-C connector for programming and power
 * - SWD debug interface
 * - MicroMod M.2 connector for carrier board compatibility
 * - Operating voltage: 3.3V
 * - Board dimensions: 22mm x 22mm
 */
interface SparkfunMicroModRP2040ProcessorProps extends CommonLayoutProps {
  name: string
}

export default function SparkfunMicroModRP2040Processor({
  name,
  ...props
}: SparkfunMicroModRP2040ProcessorProps) {
  return (
    <Circuit {...props}>
      {/* Main RP2040 Microcontroller */}
      <chip
        name={`${name}_rp2040`}
        footprint="QFN-56"
        manufacturerPartNumber="RP2040"
        pinLabels={{
          "1": "IOVDD",
          "2": "GPIO0",
          "3": "GPIO1",
          "4": "GPIO2",
          "5": "GPIO3",
          "6": "GPIO4",
          "7": "GPIO5",
          "8": "GPIO6",
          "9": "GPIO7",
          "10": "IOVDD",
          "11": "GPIO8",
          "12": "GPIO9",
          "13": "GPIO10",
          "14": "GPIO11",
          "15": "GPIO12",
          "16": "GPIO13",
          "17": "GPIO14",
          "18": "GPIO15",
          "19": "TESTEN",
          "20": "XIN",
          "21": "XOUT",
          "22": "IOVDD",
          "23": "DVDD",
          "24": "SWCLK",
          "25": "SWD",
          "26": "RUN",
          "27": "GPIO16",
          "28": "GPIO17",
          "29": "GPIO18",
          "30": "GPIO19",
          "31": "GPIO20",
          "32": "GPIO21",
          "33": "IOVDD",
          "34": "GPIO22",
          "35": "GPIO23",
          "36": "GPIO24",
          "37": "GPIO25",
          "38": "GPIO26_ADC0",
          "39": "GPIO27_ADC1",
          "40": "GPIO28_ADC2",
          "41": "GPIO29_ADC3",
          "42": "IOVDD",
          "43": "ADC_AVDD",
          "44": "VREG_IN",
          "45": "VREG_VOUT",
          "46": "USB_DM",
          "47": "USB_DP",
          "48": "USB_VDD",
          "49": "IOVDD",
          "50": "DVDD",
          "51": "QSPI_SD3",
          "52": "QSPI_SCLK",
          "53": "QSPI_SD0",
          "54": "QSPI_SD2",
          "55": "QSPI_SD1",
          "56": "QSPI_SS_N"
        }}
      />

      {/* 16MB Flash Memory */}
      <chip
        name={`${name}_flash`}
        footprint="SOIC-8"
        manufacturerPartNumber="W25Q128JVSIQ"
        pinLabels={{
          "1": "CS",
          "2": "SO",
          "3": "WP",
          "4": "GND",
          "5": "SI",
          "6": "SCK",
          "7": "HOLD",
          "8": "VCC"
        }}
      />

      {/* 12MHz Crystal Oscillator */}
      <chip
        name={`${name}_crystal`}
        footprint="3225"
        manufacturerPartNumber="ABM8-12.000MHZ-18-D2Y-T"
        pinLabels={{
          "1": "X1",
          "2": "GND",
          "3": "X2",
          "4": "GND"
        }}
      />

      {/* USB-C Connector */}
      <chip
        name={`${name}_usb_connector`}
        footprint="USB-C-16P"
        pinLabels={{
          "A1": "GND",
          "A4": "VBUS",
          "A5": "CC1",
          "A6": "DP1",
          "A7": "DN1",
          "A8": "SBU1",
          "A9": "VBUS",
          "A12": "GND",
          "B1": "GND",
          "B4": "VBUS",
          "B5": "CC2",
          "B6": "DP2",
          "B7": "DN2",
          "B8": "SBU2",
          "B9": "VBUS",
          "B12": "GND"
        }}
      />

      {/* MicroMod M.2 Connector */}
      <chip
        name={`${name}_micromod_connector`}
        footprint="M.2-75P"
        pinLabels={{
          "1": "GND",
          "2": "3V3",
          "3": "GND",
          "4": "3V3",
          "5": "GND",
          "6": "3V3",
          "7": "GND",
          "8": "3V3_EN",
          "9": "GND",
          "10": "USB_VIN",
          "11": "USB_DM",
          "12": "USB_DP",
          "13": "GND",
          "14": "CAN_RX",
          "15": "CAN_TX",
          "16": "USBHOST_DM",
          "17": "USBHOST_DP",
          "18": "BATT_VIN/3",
          "19": "GND",
          "20": "I2C_INT",
          "21": "I2C_SCL",
          "22": "I2C1_SDA",
          "23": "GND",
          "24": "UART1_TX",
          "25": "UART1_RX",
          "26": "UART1_CTS",
          "27": "UART1_RTS",
          "28": "UART2_TX",
          "29": "UART2_RX",
          "30": "D1",
          "31": "GND",
          "32": "PWM1",
          "33": "SPI_COPI",
          "34": "SPI_CIPO",
          "35": "SPI_SCK",
          "36": "SPI_CS",
          "37": "GND",
          "38": "A1",
          "39": "GND",
          "40": "A0",
          "41": "PWM0",
          "42": "G0",
          "43": "G1",
          "44": "G2",
          "45": "G3",
          "46": "G4",
          "47": "G5",
          "48": "G6",
          "49": "G7",
          "50": "G8",
          "51": "G9",
          "52": "G10",
          "53": "G11",
          "54": "SPI1_COPI",
          "55": "SPI1_CIPO",
          "56": "SPI1_SCK",
          "57": "SPI1_CS",
          "58": "I2C1_SCL",
          "59": "I2C1_SDA",
          "60": "D0",
          "61": "RESET",
          "62": "BOOT",
          "63": "GND",
          "64": "VIN",
          "65": "GND",
          "66": "VIN",
          "67": "GND",
          "68": "VIN",
          "69": "GND",
          "70": "VIN",
          "71": "GND",
          "72": "VIN",
          "73": "GND",
          "74": "VIN",
          "75": "GND"
        }}
      />

      {/* Power Regulator */}
      <chip
        name={`${name}_regulator`}
        footprint="SOT-23-5"
        manufacturerPartNumber="AP2112K-3.3TRG1"
        pinLabels={{
          "1": "VIN",
          "2": "GND",
          "3": "EN",
          "4": "NC",
          "5": "VOUT"
        }}
      />

      {/* Status LED */}
      <resistor
        name={`${name}_led_resistor`}
        resistance="330ohm"
        footprint="0603"
      />
      
      <led
        name={`${name}_status_led`}
        color="blue"
        footprint="0603"
      />

      {/* Decoupling Capacitors */}
      <capacitor
        name={`${name}_cap_3v3_1`}
        capacitance="100nF"
        footprint="0603"
      />
      
      <capacitor
        name={`${name}_cap_3v3_2`}
        capacitance="100nF"
        footprint="0603"
      />
      
      <capacitor
        name={`${name}_cap_3v3_3`}
        capacitance="100nF"
        footprint="0603"
      />
      
      <capacitor
        name={`${name}_cap_usb_1`}
        capacitance="100nF"
        footprint="0603"
      />
      
      <capacitor
        name={`${name}_cap_adc`}
        capacitance="100nF"
        footprint="0603"
      />
      
      <capacitor
        name={`${name}_cap_vreg`}
        capacitance="10uF"
        footprint="0805"
      />

      {/* Crystal Load Capacitors */}
      <capacitor
        name={`${name}_xtal_cap1`}
        capacitance="15pF"
        footprint="0603"
      />
      
      <capacitor
        name={`${name}_xtal_cap2`}
        capacitance="15pF"
        footprint="0603"
      />

      {/* Reset and Boot Buttons */}
      <chip
        name={`${name}_reset_button`}
        footprint="TACTILE-4P"
        pinLabels={{
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4"
        }}
      />
      
      <chip
        name={`${name}_boot_button`}
        footprint="TACTILE-4P"
        pinLabels={{
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4"
        }}
      />

      {/* Pull-up Resistors */}
      <resistor
        name={`${name}_reset_pullup`}
        resistance="10kohm"
        footprint="0603"
      />
      
      <resistor
        name={`${name}_boot_pullup`}
        resistance="10kohm"
        footprint="0603"
      />

      {/* Main connections between RP2040 and Flash */}
      <trace from={`.${name}_rp2040 .QSPI_SS_N`} to={`.${name}_flash .CS`} />
      <trace from={`.${name}_rp2040 .QSPI_SCLK`} to={`.${name}_flash .SCK`} />
      <trace from={`.${name}_rp2040 .QSPI_SD0`} to={`.${name}_flash .SI`} />
      <trace from={`.${name}_rp2040 .QSPI_SD1`} to={`.${name}_flash .SO`} />
      <trace from={`.${name}_rp2040 .QSPI_SD2`} to={`.${name}_flash .WP`} />
      <trace from={`.${name}_rp2040 .QSPI_SD3`} to={`.${name}_flash .HOLD`} />

      {/* USB connections */}
      <trace from={`.${name}_rp2040 .USB_DP`} to={`.${name}_usb_connector .DP1`} />
      <trace from={`.${name}_rp2040 .USB_DM`} to={`.${name}_usb_connector .DN1`} />

      {/* Crystal connections */}
      <trace from={`.${name}_rp2040 .XIN`} to={`.${name}_crystal .X1`} />
      <trace from={`.${name}_rp2040 .XOUT`} to={`.${name}_crystal .X2`} />

      {/* Power connections */}
      <trace from={`.${name}_regulator .VOUT`} to={`.${name}_rp2040 .IOVDD`} />
      <trace from={`.${name}_regulator .VOUT`} to={`.${name}_rp2040 .DVDD`} />
      <trace from={`.${name}_regulator .VOUT`} to={`.${name}_rp2040 .ADC_AVDD`} />
      <trace from={`.${name}_regulator .VOUT`} to={`.${name}_rp2040 .USB_VDD`} />

      {/* Status LED connections */}
      <trace from={`.${name}_rp2040 .GPIO25`} to={`.${name}_led_resistor .pin1`} />
      <trace from={`.${name}_led_resistor .pin2`} to={`.${name}_status_led .anode`} />

      {/* Reset button connections */}
      <trace from={`.${name}_rp2040 .RUN`} to={`.${name}_reset_pullup .pin1`} />
      <trace from={`.${name}_reset_button .1`} to={`.${name}_rp2040 .RUN`} />

      {/* Boot button connections */}
      <trace from={`.${name}_rp2040 .GPIO0`} to={`.${name}_boot_pullup .pin1`} />
      <trace from={`.${name}_boot_button .1`} to={`.${name}_rp2040 .GPIO0`} />
    </Circuit>
  )
}