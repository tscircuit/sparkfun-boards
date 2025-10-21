import type { ChipProps, SupplierPartNumbers } from "@tscircuit/props"

const supplierPartNumbers_12MHz: SupplierPartNumbers = {
  jlcpcb: ["C9002"], // 12MHz crystal
}

const supplierPartNumbers_32kHz: SupplierPartNumbers = {
  jlcpcb: ["C32346"], // 32.768kHz crystal
}

const pinLabels_12MHz = {
  pin1: "XTAL1",
  pin2: "XTAL2",
} as const

export const Crystal_12MHz = (props: any) => {
  return (
    <chip
      footprint="hc49u"
      pinLabels={pinLabels_12MHz}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["XTAL1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["XTAL2"],
        },
      }}
      schWidth={1.5}
      schHeight={0.8}
      manufacturerPartNumber="FA-238 12.0000MB-C3"
      supplierPartNumbers={supplierPartNumbers_12MHz}
      {...props}
    />
  )
}

const pinLabels_32kHz = {
  pin1: "XTAL1",
  pin2: "XTAL2",
} as const

export const Crystal_32kHz = (props: any) => {
  return (
    <chip
      footprint="Crystal_SMD_3215-2Pin_3.2x1.5mm"
      pinLabels={pinLabels_32kHz}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["XTAL1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["XTAL2"],
        },
      }}
      schWidth={1.5}
      schHeight={0.8}
      manufacturerPartNumber="FC-135 32.7680KA-A3"
      supplierPartNumbers={supplierPartNumbers_32kHz}
      {...props}
    />
  )
}

export const CrystalLoadCapacitor_18pF = (props: any) => {
  return <capacitor capacitance="18pF" footprint="0402" {...props} />
}

export const CrystalLoadCapacitor_10pF = (props: any) => {
  return <capacitor capacitance="10pF" footprint="0402" {...props} />
}
