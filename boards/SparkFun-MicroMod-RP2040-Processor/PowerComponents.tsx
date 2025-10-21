import type { ChipProps } from "@tscircuit/props"

const pinLabels_3V3 = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["VOUT"],
} as const

export const VoltageRegulator_3V3 = (
  props: ChipProps<typeof pinLabels_3V3>,
) => {
  return (
    <chip
      pinLabels={pinLabels_3V3}
      manufacturerPartNumber="AP2112K-3.3TRG1"
      supplierPartNumbers={{
        jlcpcb: ["C96446"],
      }}
      {...props}
    />
  )
}

const pinLabels_1V1 = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["VOUT"],
} as const

export const VoltageRegulator_1V1 = (
  props: ChipProps<typeof pinLabels_1V1>,
) => {
  return (
    <chip
      pinLabels={pinLabels_1V1}
      manufacturerPartNumber="AP2112K-1.1TRG1"
      {...props}
    />
  )
}

export const DecouplingCapacitor_100nF = (props: any) => {
  return <capacitor capacitance="100nF" footprint="0402" {...props} />
}

export const DecouplingCapacitor_10uF = (props: any) => {
  return <capacitor capacitance="10uF" footprint="0603" {...props} />
}

export const DecouplingCapacitor_1uF = (props: any) => {
  return <capacitor capacitance="1uF" footprint="0402" {...props} />
}
