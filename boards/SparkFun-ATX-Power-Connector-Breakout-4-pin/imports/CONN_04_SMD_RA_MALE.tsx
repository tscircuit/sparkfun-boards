import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
} as const

export const CONN_04_SMD_RA_MALE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C722701"],
      }}
      manufacturerPartNumber="1X04_SMD_RA_MALE"
      footprint={
        <footprint>
          {/* Surface Mount Pads */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.81mm"
            pcbY="5.00mm"
            width="1.00mm"
            height="3.00mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.27mm"
            pcbY="5.00mm"
            width="1.00mm"
            height="3.00mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.27mm"
            pcbY="5.00mm"
            width="1.00mm"
            height="3.00mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="3.81mm"
            pcbY="5.00mm"
            width="1.00mm"
            height="3.00mm"
            shape="rect"
          />

          {/* Non-plated alignment holes */}
          <hole pcbX="-2.54mm" pcbY="0mm" diameter="1.40mm" />
          <hole pcbX="2.54mm" pcbY="0mm" diameter="1.40mm" />

          {/* Silkscreen path - Body Outline */}
          <silkscreenpath
            route={[
              { x: 5.08, y: 1.25 },
              { x: -5.08, y: 1.25 },
              { x: -5.08, y: -1.25 },
              { x: 5.08, y: -1.25 },
              { x: 5.08, y: 1.25 },
            ]}
          />

          {/* Silkscreen paths - Pin projections */}
          <silkscreenpath
            route={[
              { x: 3.81, y: -1.25 },
              { x: 3.81, y: -7.25 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.27, y: -1.25 },
              { x: 1.27, y: -7.25 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.27, y: -1.25 },
              { x: -1.27, y: -7.25 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.81, y: -1.25 },
              { x: -3.81, y: -7.25 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
