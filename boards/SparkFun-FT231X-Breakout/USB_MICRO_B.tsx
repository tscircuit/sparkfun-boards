import type { ChipProps } from "@tscircuit/props"

// Micro-B USB Connector
const pinLabels = {
  pin1: ["VCC", "VBUS"],
  pin2: ["D_MINUS", "DM"],
  pin3: ["D_PLUS", "DP"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["SHIELD1"],
  pin7: ["SHIELD2"],
} as const

export const USB_MICRO_B = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C404969"],
      }}
      manufacturerPartNumber="USB-MICRO-B-SMD"
      footprint={
        <footprint>
          {/* USB Micro-B connector pads - typical SMD footprint */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.3mm"
            pcbY="2.7mm"
            width="0.4mm"
            height="1.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.65mm"
            pcbY="2.7mm"
            width="0.4mm"
            height="1.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="2.7mm"
            width="0.4mm"
            height="1.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.65mm"
            pcbY="2.7mm"
            width="0.4mm"
            height="1.35mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.3mm"
            pcbY="2.7mm"
            width="0.4mm"
            height="1.35mm"
            shape="rect"
          />

          {/* Shield/mounting pads */}
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.5mm"
            pcbY="2.7mm"
            width="1.8mm"
            height="1.9mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.5mm"
            pcbY="2.7mm"
            width="1.8mm"
            height="1.9mm"
            shape="rect"
          />

          {/* Silkscreen outline */}
          <silkscreenpath
            route={[
              { x: -4.5, y: 0 },
              { x: 4.5, y: 0 },
              { x: 4.5, y: 5 },
              { x: -4.5, y: 5 },
              { x: -4.5, y: 0 },
            ]}
          />
        </footprint>
      }
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [4, 5, 6, 7],
        },
      }}
      schWidth={1}
      schHeight={1.5}
      {...props}
    />
  )
}
