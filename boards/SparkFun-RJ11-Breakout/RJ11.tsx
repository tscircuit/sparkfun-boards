import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["1"],
  pin2: ["2"],
  pin3: ["3"],
  pin4: ["4"],
  pin5: ["5"],
  pin6: ["6"],
} as const

export const RJ11 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...props}
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C189747"],
      }}
      manufacturerPartNumber="RJ11"
      footprint={
        <footprint>
          <platedhole
            shape="circle"
            portHints={["pin1"]}
            pcbX="-2.032mm"
            pcbY="1.524mm"
            holeDiameter="0.9mm"
            outerDiameter="1.5mm"
          />
          <platedhole
            shape="circle"
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="1.524mm"
            holeDiameter="0.9mm"
            outerDiameter="1.5mm"
          />
          <platedhole
            shape="circle"
            portHints={["pin5"]}
            pcbX="2.032mm"
            pcbY="1.524mm"
            holeDiameter="0.9mm"
            outerDiameter="1.5mm"
          />

          <platedhole
            shape="circle"
            portHints={["pin2"]}
            pcbX="-1.016mm"
            pcbY="-1.524mm"
            holeDiameter="0.9mm"
            outerDiameter="1.5mm"
          />
          <platedhole
            shape="circle"
            portHints={["pin4"]}
            pcbX="1.016mm"
            pcbY="-1.524mm"
            holeDiameter="0.9mm"
            outerDiameter="1.5mm"
          />
          <platedhole
            shape="circle"
            portHints={["pin6"]}
            pcbX="3.048mm"
            pcbY="-1.524mm"
            holeDiameter="0.9mm"
            outerDiameter="1.5mm"
          />

          <hole pcbX="-5.35mm" pcbY="7mm" diameter="2.2mm" />
          <hole pcbX="5.35mm" pcbY="7mm" diameter="2.2mm" />

          <silkscreenpath
            route={[
              { x: -6.6, y: -7.5 },
              { x: 6.6, y: -7.5 },
              { x: 6.6, y: 7.5 },
              { x: -6.6, y: 7.5 },
              { x: -6.6, y: -7.5 },
            ]}
          />
        </footprint>
      }
    />
  )
}
