import type { ChipProps } from "@tscircuit/props"

// Standard 10-pin, 1.27mm pitch ARM Cortex Debug (mini SWD/JTAG) connector.
// Pinout matches SparkFun's RedBoard-Artemis CORTEX_DEBUG_MINIMUM part:
// 1 VCC, 2 SWDIO, 3 GND, 4 SWCLK, 5 GND, 6 SWO, 7/8 NC (key), 9 GND, 10 RESET
const pinLabels = {
  pin1: ["VCC"],
  pin2: ["SWDIO"],
  pin3: ["GND1"],
  pin4: ["SWDCLK"],
  pin5: ["GND2"],
  pin6: ["SWO"],
  pin7: ["NC1"],
  pin8: ["NC2"],
  pin9: ["GND3"],
  pin10: ["RESET"],
} as const

export const CortexDebugHeader = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="SAMTECH_FTSH-105-01"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="0mm"
            pcbY="0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.27mm"
            pcbY="0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="2.54mm"
            pcbY="0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="3.81mm"
            pcbY="0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin9"]}
            pcbX="5.08mm"
            pcbY="0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="-0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="1.27mm"
            pcbY="-0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="2.54mm"
            pcbY="-0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="3.81mm"
            pcbY="-0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin10"]}
            pcbX="5.08mm"
            pcbY="-0.635mm"
            holeDiameter="0.5mm"
            outerDiameter="0.9mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  )
}
