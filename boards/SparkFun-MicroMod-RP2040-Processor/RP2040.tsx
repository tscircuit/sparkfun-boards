import type { ChipProps } from "@tscircuit/props"

export const RP2040 = (props: any) => (
  <chip
    {...props}
    name="U3"
    footprint="qfn56"
    pinLabels={{
      "2": "GPIO0",
      "3": "GPIO1",
      "4": "GPIO2",
      "5": "GPIO3",
      "6": "GPIO4",
      "7": "GPIO5",
      "8": "GPIO6",
      "9": "GPIO7",
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
      "24": "SWCLK",
      "25": "SWDIO",
      "26": "RUN",
      "27": "GPIO16",
      "28": "GPIO17",
      "29": "GPIO18",
      "30": "GPIO19",
      "31": "GPIO20",
      "32": "GPIO21",
      "34": "GPIO22",
      "35": "GPIO23",
      "36": "GPIO24",
      "37": "GPIO25",
      "38": "GPIO26/ADC0",
      "39": "GPIO27/ADC1",
      "40": "GPIO28/ADC2",
      "41": "GPIO29/ADC3",
      "43": "ADC_VDD",
      "44": "LDO_IN",
      "45": "LDO_OUT",
      "46": "USB_D-",
      "47": "USB_D+",
      "48": "USB_VDD",
      "51": "QSPI_SD3",
      "52": "QSPI_SCLK",
      "53": "QSPI_SD0",
      "54": "QSPI_SD2",
      "55": "QSPI_SD1",
      "56": "QSPI_!CS!",
      "57": "GND", // EPAD
      // Power Groups
      "1": "VDDIO",
      "10": "VDDIO",
      "22": "VDDIO",
      "33": "VDDIO",
      "42": "VDDIO",
      "49": "VDDIO",
      "23": "VDD_1V1",
      "50": "VDD_1V1",
    }}
  />
)
