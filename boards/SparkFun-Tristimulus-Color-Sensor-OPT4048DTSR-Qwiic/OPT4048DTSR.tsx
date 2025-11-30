import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["ADDR"],
  pin3: ["NC2"],
  pin4: ["GND"],
  pin5: ["SCL"],
  pin6: ["NC1"],
  pin7: ["INT"],
  pin8: ["SDA"],
} as const

export const OPT4048DTSR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C6174012"],
      }}
      manufacturerPartNumber="OPT4048DTSR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin8"]}
            pcbX="-0.7500619999999572mm"
            pcbY="0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.2499359999999342mm"
            pcbY="0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.2499359999999342mm"
            pcbY="0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.7500619999999572mm"
            pcbY="0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.7500619999999572mm"
            pcbY="-0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.2499359999999342mm"
            pcbY="-0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.2499359999999342mm"
            pcbY="-0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.7500619999999572mm"
            pcbY="-0.7900796999999784mm"
            width="0.2800096mm"
            height="0.6800088mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.143000000000029, y: -0.5079873000000816 },
              { x: 1.143000000000029, y: -0.5079873000000816 },
              { x: 1.143000000000029, y: 0.5080126999999948 },
              { x: 1.143000000000029, y: 0.5080126999999948 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.143000000000029, y: 0.5080126999999948 },
              { x: -1.143000000000029, y: -0.5079873000000816 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
