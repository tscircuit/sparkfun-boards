import type { ChipProps } from "@tscircuit/props"

// Dual N-channel MOSFET (2x BSS138) in a single SOT-363 / SC-70-6 package.
// Pin geometry pulled from SparkFun-Semiconductor-Standard:SOT-363 footprint
// instance for Q1 in SparkFun_HSTX_to_DVI_Breakout.kicad_pcb.
//
// Pinout (per KiCad pad -> pinfunction):
//   pin1 S (MOSFET A source)   pin4 S (MOSFET B source)
//   pin2 G (MOSFET A gate)     pin5 G (MOSFET B gate)
//   pin3 D (MOSFET A drain)    pin6 D (MOSFET B drain)
const pinLabels = {
  pin1: ["S1"],
  pin2: ["G1"],
  pin3: ["D1"],
  pin4: ["S2"],
  pin5: ["G2"],
  pin6: ["D2"],
} as const

export const BSS138_SOT363 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="BSS138"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.95mm"
            pcbY="-0.65mm"
            width="0.6mm"
            height="0.42mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.95mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.42mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.95mm"
            pcbY="0.65mm"
            width="0.6mm"
            height="0.42mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.95mm"
            pcbY="0.65mm"
            width="0.6mm"
            height="0.42mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.95mm"
            pcbY="0mm"
            width="0.6mm"
            height="0.42mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.95mm"
            pcbY="-0.65mm"
            width="0.6mm"
            height="0.42mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.65, y: 1.2 },
              { x: 0.65, y: 1.2 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.65, y: -1.2 },
              { x: 0.65, y: -1.2 },
            ]}
          />
        </footprint>
      }
      cadModel={null}
      {...props}
    />
  )
}
