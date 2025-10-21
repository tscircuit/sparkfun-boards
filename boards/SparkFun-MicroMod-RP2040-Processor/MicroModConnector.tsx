import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["3V3"],
  pin5: ["USB_DP"],
  pin6: ["USB_DM"],
  pin65: ["VIN"],
} as const

export const MicroModConnector = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [65],
        },
        topSide: {
          direction: "left-to-right",
          pins: [5, 6],
        },
      }}
      schWidth={3.5}
      schHeight={2.5}
      manufacturerPartNumber="M.2_MicroMod_Connector"
      footprint={
        <footprint>
          {/* Generate simplified M.2 connector with just a few key pins */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-11.0mm"
            pcbY="1.6mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin65"]}
            pcbX="11.0mm"
            pcbY="1.6mm"
            width="0.3mm"
            height="1.5mm"
            shape="rect"
          />

          {/* Connector outline */}
          <silkscreenpath
            route={[
              { x: -12, y: 3 },
              { x: 22, y: 3 },
              { x: 22, y: -3 },
              { x: -12, y: -3 },
              { x: -12, y: 3 },
            ]}
            strokeWidth="0.15mm"
          />
        </footprint>
      }
      {...props}
    />
  )
}
