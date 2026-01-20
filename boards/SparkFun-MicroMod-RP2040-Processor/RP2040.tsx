import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IOVDD1"],
  pin2: ["GPIO0"],
  pin3: ["GPIO1"],
  pin4: ["GPIO2"],
  pin5: ["GPIO3"],
  pin6: ["GPIO4"],
  pin7: ["GPIO5"],
  pin8: ["GPIO6"],
  pin9: ["GPIO7"],
  pin10: ["IOVDD2"],
  pin11: ["GPIO8"],
  pin12: ["GPIO9"],
  pin13: ["GPIO10"],
  pin14: ["GPIO11"],
  pin15: ["GPIO12"],
  pin16: ["GPIO13"],
  pin17: ["GPIO14"],
  pin18: ["GPIO15"],
  pin19: ["TESTEN"],
  pin20: ["XIN"],
  pin21: ["XOUT"],
  pin22: ["IOVDD3"],
  pin23: ["DVDD1"],
  pin24: ["SWCLK"],
  pin25: ["SWD"],
  pin26: ["RUN"],
  pin27: ["GPIO16"],
  pin28: ["GPIO17"],
  pin29: ["GPIO18"],
  pin30: ["GPIO19"],
  pin31: ["GPIO20"],
  pin32: ["GPIO21"],
  pin33: ["IOVDD4"],
  pin34: ["GPIO22"],
  pin35: ["GPIO23"],
  pin36: ["GPIO24"],
  pin37: ["GPIO25"],
  pin38: ["GPIO26_ADC0"],
  pin39: ["GPIO27_ADC1"],
  pin40: ["GPIO28_ADC2"],
  pin41: ["GPIO29_ADC3"],
  pin42: ["IOVDD5"],
  pin43: ["ADC_AVDD"],
  pin44: ["VREG_VIN"],
  pin45: ["VREG_VOUT"],
  pin46: ["USB_DM"],
  pin47: ["USB_DP"],
  pin48: ["USB_VDD"],
  pin49: ["IOVDD6"],
  pin50: ["DVDD2"],
  pin51: ["QSPI_SCLK"],
  pin52: ["QSPI_SS"],
  pin53: ["QSPI_SD0"],
  pin54: ["QSPI_SD1"],
  pin55: ["QSPI_SD2"],
  pin56: ["QSPI_SD3"],
  pin57: ["GND"],
} as const

export const RP2040 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={4}
      schHeight={8}
      manufacturerPartNumber="RP2040"
      supplierPartNumbers={{
        jlcpcb: ["C2040"],
      }}
      footprint={
        <footprint>
          {/* QFN-56 7x7mm package - pads around perimeter */}
          {/* Bottom side - pins 1-14 */}
          <smtpad portHints={["pin1"]} pcbX="-3.25mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-2.85mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="-2.45mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="-2.05mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="-1.65mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="-1.25mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="-0.85mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin8"]} pcbX="-0.45mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin9"]} pcbX="-0.05mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin10"]} pcbX="0.35mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin11"]} pcbX="0.75mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin12"]} pcbX="1.15mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin13"]} pcbX="1.55mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin14"]} pcbX="1.95mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          
          {/* Right side - pins 15-28 */}
          <smtpad portHints={["pin15"]} pcbX="3.25mm" pcbY="-2.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin16"]} pcbX="3.25mm" pcbY="-1.8mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin17"]} pcbX="3.25mm" pcbY="-1.4mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin18"]} pcbX="3.25mm" pcbY="-1.0mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin19"]} pcbX="3.25mm" pcbY="-0.6mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin20"]} pcbX="3.25mm" pcbY="-0.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin21"]} pcbX="3.25mm" pcbY="0.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin22"]} pcbX="3.25mm" pcbY="0.6mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin23"]} pcbX="3.25mm" pcbY="1.0mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin24"]} pcbX="3.25mm" pcbY="1.4mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin25"]} pcbX="3.25mm" pcbY="1.8mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin26"]} pcbX="3.25mm" pcbY="2.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin27"]} pcbX="2.35mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin28"]} pcbX="1.95mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          
          {/* Top side - pins 29-42 */}
          <smtpad portHints={["pin29"]} pcbX="1.55mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin30"]} pcbX="1.15mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin31"]} pcbX="0.75mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin32"]} pcbX="0.35mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin33"]} pcbX="-0.05mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin34"]} pcbX="-0.45mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin35"]} pcbX="-0.85mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin36"]} pcbX="-1.25mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin37"]} pcbX="-1.65mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin38"]} pcbX="-2.05mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin39"]} pcbX="-2.45mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin40"]} pcbX="-2.85mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin41"]} pcbX="-3.25mm" pcbY="2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin42"]} pcbX="-3.25mm" pcbY="2.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          
          {/* Left side - pins 43-56 */}
          <smtpad portHints={["pin43"]} pcbX="-3.25mm" pcbY="1.8mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin44"]} pcbX="-3.25mm" pcbY="1.4mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin45"]} pcbX="-3.25mm" pcbY="1.0mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin46"]} pcbX="-3.25mm" pcbY="0.6mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin47"]} pcbX="-3.25mm" pcbY="0.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin48"]} pcbX="-3.25mm" pcbY="-0.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin49"]} pcbX="-3.25mm" pcbY="-0.6mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin50"]} pcbX="-3.25mm" pcbY="-1.0mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin51"]} pcbX="-3.25mm" pcbY="-1.4mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin52"]} pcbX="-3.25mm" pcbY="-1.8mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin53"]} pcbX="-3.25mm" pcbY="-2.2mm" width="0.7mm" height="0.2mm" shape="rect" />
          <smtpad portHints={["pin54"]} pcbX="-2.35mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin55"]} pcbX="-2.75mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          <smtpad portHints={["pin56"]} pcbX="-3.15mm" pcbY="-2.6mm" width="0.2mm" height="0.7mm" shape="rect" />
          
          {/* GND pad (center) */}
          <smtpad portHints={["pin57"]} pcbX="0mm" pcbY="0mm" width="3.2mm" height="3.2mm" shape="rect" />
        </footprint>
      }
      {...props}
    />
  )
}
