import type { ChipProps } from "@tscircuit/props"

// FT231X - USB to Full Handshake UART IC (SSOP-20 package)
const pinLabels = {
  pin1: ["RESET"],
  pin2: ["OSCO"],
  pin3: ["OSCI"],
  pin4: ["GND1"],
  pin5: ["TXD"],
  pin6: ["RXD"],
  pin7: ["RTS"],
  pin8: ["CTS"],
  pin9: ["CBUS2"],
  pin10: ["CBUS1"],
  pin11: ["GND2"],
  pin12: ["VCC"],
  pin13: ["V3_3"],
  pin14: ["USBDP"],
  pin15: ["USBDM"],
  pin16: ["V3_3OUT"],
  pin17: ["GND3"],
  pin18: ["CBUS0"],
  pin19: ["CBUS3"],
  pin20: ["DTR"],
} as const

export const FT231X = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C14010"],
      }}
      manufacturerPartNumber="FT231XS-R"
      footprint={
        <footprint>
          {/* SSOP-20 package - 0.65mm pitch, 5.3mm x 6.2mm body */}
          {/* Left side pins (1-10) */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.4mm"
            pcbY="2.925mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.4mm"
            pcbY="2.275mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.4mm"
            pcbY="1.625mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.4mm"
            pcbY="0.975mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.4mm"
            pcbY="0.325mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.4mm"
            pcbY="-0.325mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.4mm"
            pcbY="-0.975mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.4mm"
            pcbY="-1.625mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.4mm"
            pcbY="-2.275mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.4mm"
            pcbY="-2.925mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />

          {/* Right side pins (11-20) */}
          <smtpad
            portHints={["pin11"]}
            pcbX="3.4mm"
            pcbY="-2.925mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="3.4mm"
            pcbY="-2.275mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.4mm"
            pcbY="-1.625mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.4mm"
            pcbY="-0.975mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.4mm"
            pcbY="-0.325mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.4mm"
            pcbY="0.325mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="3.4mm"
            pcbY="0.975mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.4mm"
            pcbY="1.625mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.4mm"
            pcbY="2.275mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="3.4mm"
            pcbY="2.925mm"
            width="1.6mm"
            height="0.4mm"
            shape="rect"
          />

          {/* Silkscreen body outline */}
          <silkscreenpath
            route={[
              { x: -2.65, y: 3.3 },
              { x: 2.65, y: 3.3 },
              { x: 2.65, y: -3.3 },
              { x: -2.65, y: -3.3 },
              { x: -2.65, y: 3.3 },
            ]}
          />
          {/* Pin 1 indicator */}
          <silkscreencircle pcbX="-2.2" pcbY="3.6" radius={0.2} />
        </footprint>
      }
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        },
      }}
      schWidth={1.5}
      schHeight={3}
      {...props}
    />
  )
}
