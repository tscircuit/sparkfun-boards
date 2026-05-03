import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "SDA"],
  pin2: ["pin2", "INT"],
  pin3: ["pin3", "LDR"],
  pin4: ["pin4", "LEDK"],
  pin5: ["pin5", "LEDA"],
  pin6: ["pin6", "GND"],
  pin7: ["pin7", "SCL"],
  pin8: ["pin8", "VDD"],
} as const

export const Apds9960 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    manufacturerPartNumber="APDS-9960"
    schPinArrangement={{
      leftSide: { pins: ["VDD", "GND", "LEDA"], direction: "top-to-bottom" },
      rightSide: {
        pins: ["LEDK", "LDR", "INT", "SCL", "SDA"],
        direction: "top-to-bottom",
      },
    }}
    footprint="kicad:Sensor/Avago_APDS-9960"
    cadModel={null}
    {...props}
  />
)
