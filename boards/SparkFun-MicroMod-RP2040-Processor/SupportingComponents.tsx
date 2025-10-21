import type { ChipProps, SupplierPartNumbers } from "@tscircuit/props"

const supplierPartNumbers_Reset: SupplierPartNumbers = {
  jlcpcb: ["C25804"], // Reset button
}

const supplierPartNumbers_LED: SupplierPartNumbers = {
  jlcpcb: ["C2296"], // LED
}

const supplierPartNumbers_Resistor_10k: SupplierPartNumbers = {
  jlcpcb: ["C25744"], // 10k resistor
}

const supplierPartNumbers_Resistor_1k: SupplierPartNumbers = {
  jlcpcb: ["C21190"], // 1k resistor
}

const pinLabels_Reset = {
  pin1: "1",
  pin2: "2",
} as const

export const ResetButton = (props: any) => {
  return (
    <chip
      footprint="SW_SPST_B3U-1000P"
      pinLabels={pinLabels_Reset}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["2"],
        },
      }}
      schWidth={1.2}
      schHeight={0.8}
      manufacturerPartNumber="B3U-1000P"
      supplierPartNumbers={supplierPartNumbers_Reset}
      {...props}
    />
  )
}

export const BootButton = (props: any) => {
  return (
    <chip
      footprint="SW_SPST_B3U-1000P"
      pinLabels={pinLabels_Reset}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["2"],
        },
      }}
      schWidth={1.2}
      schHeight={0.8}
      manufacturerPartNumber="B3U-1000P"
      supplierPartNumbers={supplierPartNumbers_Reset}
      {...props}
    />
  )
}

const pinLabels_LED = {
  pin1: "ANODE",
  pin2: "CATHODE",
} as const

export const PowerLED = (props: any) => {
  return (
    <chip
      footprint="LED_0603_1608Metric"
      pinLabels={pinLabels_LED}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["ANODE"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["CATHODE"],
        },
      }}
      schWidth={1}
      schHeight={0.6}
      manufacturerPartNumber="LED_0603"
      supplierPartNumbers={supplierPartNumbers_LED}
      {...props}
    />
  )
}

export const StatusLED = (props: any) => {
  return (
    <chip
      footprint="LED_0603_1608Metric"
      pinLabels={pinLabels_LED}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["ANODE"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["CATHODE"],
        },
      }}
      schWidth={1}
      schHeight={0.6}
      manufacturerPartNumber="LED_0603"
      supplierPartNumbers={supplierPartNumbers_LED}
      {...props}
    />
  )
}

export const PullupResistor_10k = (props: any) => {
  return <resistor resistance="10k" footprint="0402" {...props} />
}

export const CurrentLimitingResistor_1k = (props: any) => {
  return <resistor resistance="1k" footprint="0402" {...props} />
}

const pinLabels_Flash = {
  pin1: "CS",
  pin2: "SO_IO1",
  pin3: "WP_IO2",
  pin4: "GND",
  pin5: "SI_IO0",
  pin6: "SCK",
  pin7: "HOLD_IO3",
  pin8: "VCC",
} as const

export const FlashMemory = (props: any) => {
  return (
    <chip
      footprint="SOIC-8_5.23x5.23mm_P1.27mm"
      pinLabels={pinLabels_Flash}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["CS", "SO_IO1", "WP_IO2", "GND"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["VCC", "HOLD_IO3", "SCK", "SI_IO0"],
        },
      }}
      schWidth={2}
      schHeight={1.5}
      manufacturerPartNumber="W25Q128JVSIQ"
      {...props}
    />
  )
}
