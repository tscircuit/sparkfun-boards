import type { ChipProps } from "@tscircuit/props"

/**
 * Raspberry Pi RP2040 - Dual ARM Cortex-M0+ @ 133MHz
 * QFN-56 package (7mm x 7mm)
 */
const pinLabels = {
  pin1: ["IOVDD"],
  pin2: ["GPIO0"],
  pin3: ["GPIO1"],
  pin4: ["GPIO2"],
  pin5: ["GPIO3"],
  pin6: ["GPIO4"],
  pin7: ["GPIO5"],
  pin8: ["GPIO6"],
  pin9: ["GPIO7"],
  pin10: ["IOVDD"],
  pin11: ["GPIO8"],
  pin12: ["GPIO9"],
  pin13: ["GPIO10"],
  pin14: ["GPIO11"],
  pin15: ["GPIO12"],
  pin16: ["GPIO13"],
  pin17: ["GPIO14"],
  pin18: ["GPIO15"],
  pin19: ["IOVDD"],
  pin20: ["GPIO16"],
  pin21: ["GPIO17"],
  pin22: ["GPIO18"],
  pin23: ["GPIO19"],
  pin24: ["GPIO20"],
  pin25: ["GPIO21"],
  pin26: ["GPIO22"],
  pin27: ["GPIO23"],
  pin28: ["IOVDD"],
  pin29: ["GPIO24"],
  pin30: ["GPIO25"],
  pin31: ["GPIO26_ADC0"],
  pin32: ["GPIO27_ADC1"],
  pin33: ["GPIO28_ADC2"],
  pin34: ["GPIO29_ADC3"],
  pin35: ["ADC_AVDD"],
  pin36: ["VREG_VIN"],
  pin37: ["VREG_VOUT"],
  pin38: ["USB_DM"],
  pin39: ["USB_DP"],
  pin40: ["USB_VDD"],
  pin41: ["XIN"],
  pin42: ["XOUT"],
  pin43: ["IOVDD"],
  pin44: ["DVDD"],
  pin45: ["SWCLK"],
  pin46: ["SWD"],
  pin47: ["RUN"],
  pin48: ["IOVDD"],
  pin49: ["QSPI_SD3"],
  pin50: ["QSPI_SCLK"],
  pin51: ["QSPI_SD0"],
  pin52: ["QSPI_SD2"],
  pin53: ["QSPI_SD1"],
  pin54: ["QSPI_SS_N"],
  pin55: ["DVDD"],
  pin56: ["IOVDD"],
  pin57: ["GND_PAD"],
} as const

export const RP2040 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...props}
      pinLabels={pinLabels}
      manufacturerPartNumber="RP2040"
      supplierPartNumbers={{ jlcpcb: ["C2040"] }}
      footprint="qfn56_w7mm_p0.4mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin1",
            "pin2",
            "pin3",
            "pin4",
            "pin5",
            "pin6",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
            "pin11",
            "pin12",
            "pin13",
            "pin14",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin29",
            "pin30",
            "pin31",
            "pin32",
            "pin33",
            "pin34",
            "pin35",
            "pin36",
            "pin37",
            "pin38",
            "pin39",
            "pin40",
            "pin41",
            "pin42",
          ],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["pin43", "pin44", "pin45", "pin46", "pin47", "pin48"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [
            "pin15",
            "pin16",
            "pin17",
            "pin18",
            "pin19",
            "pin20",
            "pin21",
            "pin22",
            "pin23",
            "pin24",
            "pin25",
            "pin26",
            "pin27",
            "pin28",
          ],
        },
      }}
    />
  )
}
