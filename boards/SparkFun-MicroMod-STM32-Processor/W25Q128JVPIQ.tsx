import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CS"],
  pin2: ["DO", "MISO"],
  pin3: ["WP"],
  pin4: ["GND"],
  pin5: ["DI", "MOSI"],
  pin6: ["CLK", "SCK"],
  pin7: ["HOLD"],
  pin8: ["VCC"],
} as const

export const W25Q128JVPIQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="W25Q128JVPIQ"
      supplierPartNumbers={{
        jlcpcb: ["C97521"],
      }}
      footprint={
        <footprint>
          {/* WSON-8 6x5mm package */}
          {/* Left side pads (pins 1-4) */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.2mm"
            pcbY="1.905mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.2mm"
            pcbY="0.635mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.2mm"
            pcbY="-0.635mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.2mm"
            pcbY="-1.905mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          {/* Right side pads (pins 5-8) */}
          <smtpad
            portHints={["pin5"]}
            pcbX="2.2mm"
            pcbY="-1.905mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.2mm"
            pcbY="-0.635mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="2.2mm"
            pcbY="0.635mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="2.2mm"
            pcbY="1.905mm"
            width="0.6mm"
            height="0.41mm"
            shape="rect"
          />
          {/* Pin 1 marker */}
          <silkscreenpath
            route={[
              { x: -3, y: 2.5 },
              { x: -2.5, y: 3 },
              { x: -3, y: 3 },
              { x: -3, y: 2.5 },
            ]}
          />
          {/* Body outline */}
          <silkscreenpath
            route={[
              { x: -2, y: -2.5 },
              { x: 2, y: -2.5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2, y: -2.5 },
              { x: 2, y: 2.5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2, y: 2.5 },
              { x: -2, y: 2.5 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
