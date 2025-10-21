import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IOVDD"],
  pin2: ["GPIO0"],
  pin3: ["GPIO1"],
  pin4: ["GPIO2"],
  pin5: ["GPIO3"],
  pin6: ["IOVDD"],
  pin7: ["GPIO4"],
  pin8: ["GPIO5"],
  pin9: ["GPIO6"],
  pin10: ["GPIO7"],
  pin11: ["IOVDD"],
  pin12: ["GPIO8"],
  pin13: ["GPIO9"],
  pin14: ["GPIO10"],
  pin15: ["GPIO11"],
  pin16: ["GPIO12"],
  pin17: ["GPIO13"],
  pin18: ["IOVDD"],
  pin19: ["GPIO14"],
  pin20: ["GPIO15"],
  pin21: ["TESTEN"],
  pin22: ["XIN"],
  pin23: ["XOUT"],
  pin24: ["IOVDD"],
  pin25: ["DVDD"],
  pin26: ["SWCLK"],
  pin27: ["SWD"],
  pin28: ["RUN"],
  pin29: ["GPIO16"],
  pin30: ["GPIO17"],
  pin31: ["GPIO18"],
  pin32: ["GPIO19"],
  pin33: ["IOVDD"],
  pin34: ["GPIO20"],
  pin35: ["GPIO21"],
  pin36: ["IOVDD"],
  pin37: ["GPIO22"],
  pin38: ["GPIO23"],
  pin39: ["GPIO24"],
  pin40: ["GPIO25"],
  pin41: ["GPIO26_ADC0"],
  pin42: ["GPIO27_ADC1"],
  pin43: ["GPIO28_ADC2"],
  pin44: ["GPIO29_ADC3"],
  pin45: ["IOVDD"],
  pin46: ["ADC_AVDD"],
  pin47: ["VREG_IN"],
  pin48: ["VREG_VOUT"],
  pin49: ["USB_DM"],
  pin50: ["USB_DP"],
  pin51: ["USB_VDD"],
  pin52: ["IOVDD"],
  pin53: ["DVDD"],
  pin54: ["QSPI_SD3"],
  pin55: ["QSPI_SCLK"],
  pin56: ["QSPI_SD0"],
  pin57: ["QSPI_SD2"],
  pin58: ["QSPI_SD1"],
  pin59: ["QSPI_SS_N"],
  pin60: ["GND"],
} as const

export const RP2040 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "GPIO0",
            "GPIO1",
            "GPIO2",
            "GPIO3",
            "GPIO4",
            "GPIO5",
            "GPIO6",
            "GPIO7",
            "GPIO8",
            "GPIO9",
            "GPIO10",
            "GPIO11",
            "GPIO12",
            "GPIO13",
            "GPIO14",
            "GPIO15",
          ],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [
            "GPIO16",
            "GPIO17",
            "GPIO18",
            "GPIO19",
            "GPIO20",
            "GPIO21",
            "GPIO22",
            "GPIO23",
            "GPIO24",
            "GPIO25",
            "GPIO26_ADC0",
            "GPIO27_ADC1",
            "GPIO28_ADC2",
            "GPIO29_ADC3",
          ],
        },
        topSide: {
          direction: "left-to-right",
          pins: [
            "IOVDD",
            "DVDD",
            "USB_VDD",
            "ADC_AVDD",
            "VREG_IN",
            "VREG_VOUT",
          ],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["GND", "RUN", "SWCLK", "SWD", "XIN", "XOUT", "TESTEN"],
        },
      }}
      schPinStyle={{
        GPIO0: { marginLeft: 0.1 },
        GPIO1: { marginLeft: 0.1 },
        GPIO2: { marginLeft: 0.1 },
        GPIO3: { marginLeft: 0.1 },
        GPIO4: { marginLeft: 0.1 },
        GPIO5: { marginLeft: 0.1 },
        GPIO6: { marginLeft: 0.1 },
        GPIO7: { marginLeft: 0.1 },
        GPIO8: { marginLeft: 0.1 },
        GPIO9: { marginLeft: 0.1 },
        GPIO10: { marginLeft: 0.1 },
        GPIO11: { marginLeft: 0.1 },
        GPIO12: { marginLeft: 0.1 },
        GPIO13: { marginLeft: 0.1 },
        GPIO14: { marginLeft: 0.1 },
        GPIO15: { marginLeft: 0.1 },
        GPIO16: { marginRight: 0.1 },
        GPIO17: { marginRight: 0.1 },
        GPIO18: { marginRight: 0.1 },
        GPIO19: { marginRight: 0.1 },
        GPIO20: { marginRight: 0.1 },
        GPIO21: { marginRight: 0.1 },
        GPIO22: { marginRight: 0.1 },
        GPIO23: { marginRight: 0.1 },
        GPIO24: { marginRight: 0.1 },
        GPIO25: { marginRight: 0.1 },
        GPIO26_ADC0: { marginRight: 0.1 },
        GPIO27_ADC1: { marginRight: 0.1 },
        GPIO28_ADC2: { marginRight: 0.1 },
        GPIO29_ADC3: { marginRight: 0.1 },
      }}
      manufacturerPartNumber="RP2040"
      supplierPartNumbers={{
        jlcpcb: ["C2040"],
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.25mm"
            pcbY="3.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.25mm"
            pcbY="3.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.25mm"
            pcbY="2.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.25mm"
            pcbY="2.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.25mm"
            pcbY="1.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.25mm"
            pcbY="1.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.25mm"
            pcbY="0.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.25mm"
            pcbY="0.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.25mm"
            pcbY="-0.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.25mm"
            pcbY="-0.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-3.25mm"
            pcbY="-1.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3.25mm"
            pcbY="-1.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-3.25mm"
            pcbY="-2.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-3.25mm"
            pcbY="-2.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-3.25mm"
            pcbY="-3.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-2.75mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-2.25mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.75mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.25mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-0.75mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-0.25mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="0.25mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="0.75mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="1.25mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="1.75mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="2.25mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="2.75mm"
            pcbY="-3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="3.25mm"
            pcbY="-3.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="3.25mm"
            pcbY="-2.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="3.25mm"
            pcbY="-2.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="3.25mm"
            pcbY="-1.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="3.25mm"
            pcbY="-1.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="3.25mm"
            pcbY="-0.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="3.25mm"
            pcbY="-0.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="3.25mm"
            pcbY="0.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="3.25mm"
            pcbY="0.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="3.25mm"
            pcbY="1.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="3.25mm"
            pcbY="1.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="3.25mm"
            pcbY="2.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="3.25mm"
            pcbY="2.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="3.25mm"
            pcbY="3.25mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="2.75mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="2.25mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="1.75mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="1.25mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="0.75mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="0.25mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-0.25mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-0.75mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="-1.25mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="-1.75mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="-2.25mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="-2.75mm"
            pcbY="3.75mm"
            width="0.6mm"
            height="0.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="-3.25mm"
            pcbY="3.75mm"
            width="0.2mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="-0.5mm"
            pcbY="1.5mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="0.5mm"
            pcbY="1.5mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="1.5mm"
            pcbY="1.5mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="0.5mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="-0.5mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin60"]}
            pcbX="0mm"
            pcbY="0mm"
            width="3.2mm"
            height="3.2mm"
            shape="rect"
          />
          {/* Silkscreen outline */}
          <silkscreenpath
            route={[
              { x: -3.5, y: 3.5 },
              { x: 3.5, y: 3.5 },
              { x: 3.5, y: -3.5 },
              { x: -3.5, y: -3.5 },
              { x: -3.5, y: 3.5 },
            ]}
            strokeWidth="0.1524mm"
          />
          {/* Pin 1 indicator */}
          <silkscreenpath
            route={[
              { x: -3.8, y: 3.8 },
              { x: -3.8, y: 3.8 },
            ]}
            strokeWidth="0.2mm"
          />
        </footprint>
      }
      {...props}
    />
  )
}
