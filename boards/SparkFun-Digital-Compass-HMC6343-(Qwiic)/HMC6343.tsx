import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC1"],
  pin2: ["NC2"],
  pin3: ["VDD"],
  pin4: ["NC3"],
  pin5: ["NC4"],
  pin6: ["NC5"],
  pin7: ["NC6"],
  pin8: ["NC7"],
  pin9: ["NC8"],
  pin10: ["NC8"],
  pin11: ["NC9"],
  pin12: ["NC10"],
  pin13: ["NC11"],
  pin14: ["NC12"],
  pin15: ["pin15"],
  pin16: ["NC13"],
  pin17: ["NC14"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin22: ["CS"],
  pin23: ["NC15"],
  pin24: ["NC16"],
  pin25: ["NC17"],
  pin26: ["NC18"],
  pin27: ["NC19"],
  pin28: ["NC20"],
  pin29: ["GND"],
  pin30: ["NC21"],
  pin31: ["NC22"],
  pin32: ["SCL"],
  pin33: ["NC23"],
  pin34: ["CS_CTRL"],
  pin35: ["DRDY"],
  pin36: ["SDA"],
} as const

export const HMC6343 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C1519273"],
      }}
      manufacturerPartNumber="HMC6343"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.37mm"
            pcbY="3.2mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-4.37mm"
            pcbY="2.4mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-4.37mm"
            pcbY="1.6mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-4.37mm"
            pcbY="0.8mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-4.37mm"
            pcbY="0mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-4.37mm"
            pcbY="-0.8mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-4.37mm"
            pcbY="-1.6mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-4.37mm"
            pcbY="-2.4mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-4.37mm"
            pcbY="-3.2mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />

          <smtpad
            portHints={["pin10"]}
            pcbX="-3.2mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-2.4mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.6mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.8mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.8mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.6mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="2.4mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.2mm"
            pcbY="-4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />

          <smtpad
            portHints={["pin19"]}
            pcbX="4.37mm"
            pcbY="-3.2mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="4.37mm"
            pcbY="-2.4mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="4.37mm"
            pcbY="-1.6mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="4.37mm"
            pcbY="-0.8mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="4.37mm"
            pcbY="0mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="4.37mm"
            pcbY="0.8mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="4.37mm"
            pcbY="1.6mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="4.37mm"
            pcbY="2.4mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="4.37mm"
            pcbY="3.2mm"
            width="0.94mm"
            height="0.45mm"
            shape="rect"
          />

          <smtpad
            portHints={["pin28"]}
            pcbX="3.2mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="2.4mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="1.6mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="0.8mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="0mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-0.8mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-1.6mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-2.4mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-3.2mm"
            pcbY="4.37mm"
            width="0.45mm"
            height="0.94mm"
            shape="rect"
          />

          <silkscreenpath
            route={[
              { x: -4.5, y: 3.5 },
              { x: -4.5, y: 4.5 },
              { x: -3.5, y: 4.5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.5, y: 3.5 },
              { x: 4.5, y: 4.5 },
              { x: 3.5, y: 4.5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.5, y: -3.5 },
              { x: 4.5, y: -4.5 },
              { x: 3.5, y: -4.5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.5, y: -3.5 },
              { x: -4.5, y: -4.5 },
              { x: -3.5, y: -4.5 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
