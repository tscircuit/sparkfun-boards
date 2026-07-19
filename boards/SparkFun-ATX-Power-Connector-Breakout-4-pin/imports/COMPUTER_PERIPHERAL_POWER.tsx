import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["12V", "pin1"],
  pin2: ["GND@2", "pin2"],
  pin3: ["GND@1", "pin3"],
  pin4: ["5V", "pin4"],
} as const

export const COMPUTER_PERIPHERAL_POWER = (
  props: ChipProps<typeof pinLabels>,
) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="Molex 8981"
      footprint={
        <footprint>
          {/* Plated Holes for Pins */}
          <platedhole
            portHints={["pin4"]}
            pcbX="-7.62mm"
            pcbY="-2.54mm"
            holeDiameter="1.82mm"
            outerDiameter="3.302mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-2.54mm"
            pcbY="-2.54mm"
            holeDiameter="1.82mm"
            outerDiameter="3.302mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="2.54mm"
            pcbY="-2.54mm"
            holeDiameter="1.82mm"
            outerDiameter="3.302mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="7.62mm"
            pcbY="-2.54mm"
            holeDiameter="1.82mm"
            outerDiameter="3.302mm"
            shape="circle"
          />

          {/* Mechanical Mounting Holes */}
          <hole pcbX="-10.16mm" pcbY="0mm" diameter="2.54mm" />
          <hole pcbX="10.16mm" pcbY="0mm" diameter="2.54mm" />
          <hole pcbX="-5.08mm" pcbY="7.62mm" diameter="3.9878mm" />
          <hole pcbX="5.08mm" pcbY="7.62mm" diameter="3.9878mm" />

          {/* Silkscreen paths - Main Box */}
          <silkscreenpath
            route={[
              { x: -11.633, y: -3.048 },
              { x: -11.633, y: 10.16 },
              { x: 11.633, y: 10.16 },
              { x: 11.633, y: -3.048 },
            ]}
          />
          {/* Silkscreen paths - Box Bottom segments around pins */}
          <silkscreenpath
            route={[
              { x: -11.633, y: -3.048 },
              { x: -8.89, y: -3.048 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.35, y: -3.048 },
              { x: -3.81, y: -3.048 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.27, y: -3.048 },
              { x: 1.27, y: -3.048 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.81, y: -3.048 },
              { x: 6.35, y: -3.048 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 11.633, y: -3.048 },
              { x: 8.89, y: -3.048 },
            ]}
          />

          {/* Silkscreen paths - Outer Shell */}
          <silkscreenpath
            route={[
              { x: -12.065, y: -0.381 },
              { x: -12.065, y: -6.731 },
              { x: 12.065, y: -6.731 },
              { x: 12.065, y: -0.381 },
              { x: 9.779, y: 1.905 },
              { x: -9.906, y: 1.905 },
              { x: -12.065, y: -0.381 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -12.065, y: -0.381 },
              { x: -12.7, y: -1.016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 12.065, y: -0.381 },
              { x: 12.7, y: -1.016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.271, y: 2.54 },
              { x: -9.906, y: 1.905 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 9.144, y: 2.54 },
              { x: 9.779, y: 1.905 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
