import type { ChipProps } from "@tscircuit/props"

// SMD DC barrel jack (5.5x2.1mm), matching SparkFun's POWER_JACK part.
// PWR = center pin, GND = sleeve, GNDBREAK = normally-closed detect switch
// that opens when a plug is inserted (used for USB/barrel-jack power muxing).
const pinLabels = {
  pin1: ["PWR"],
  pin2: ["GND"],
  pin3: ["GNDBREAK"],
  pin4: ["GND2"],
} as const

export const PowerJack = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="PJ-102AH"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0mm"
            pcbY="-4mm"
            width="2mm"
            height="2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.5mm"
            pcbY="0mm"
            width="3mm"
            height="4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="3.5mm"
            pcbY="0mm"
            width="3mm"
            height="4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="4mm"
            width="2mm"
            height="2mm"
            shape="rect"
          />
          <silkscreencircle pcbX="0mm" pcbY="0mm" radius="4mm" />
        </footprint>
      }
      {...props}
    />
  )
}
