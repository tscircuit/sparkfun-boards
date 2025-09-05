import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VCCA"],
  pin2: ["A1"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin7: ["GND"],
  pin8: ["OE"],
  pin10: ["B4"],
  pin11: ["B3"],
  pin12: ["B2"],
  pin13: ["B1"],
  pin14: ["VCCB"],
} as const

export const TXB0104 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="TXB0104PWRSOIC14"
      footprint={
        <footprint name="SO14">
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.81mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.54mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.27mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.27mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.54mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.81mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.81mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.54mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.27mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.27mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.54mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-3.81mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
            layer="top"
          />
        </footprint>
      }
      {...props}
    />
  )
}
