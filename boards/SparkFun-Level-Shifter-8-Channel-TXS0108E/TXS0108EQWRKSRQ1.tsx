import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["VCCA"],
  pin3: ["A2"],
  pin4: ["A3"],
  pin5: ["A4"],
  pin6: ["A5"],
  pin7: ["A6"],
  pin8: ["A7"],
  pin9: ["A8"],
  pin10: ["OE"],
  pin11: ["GND"],
  pin12: ["B8"],
  pin13: ["B7"],
  pin14: ["B6"],
  pin15: ["B5"],
  pin16: ["B4"],
  pin17: ["B3"],
  pin18: ["B2"],
  pin19: ["VCCB"],
  pin20: ["B1"],
  pin21: ["EP"],
} as const

export const TXS0108EQWRKSRQ1 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="TXS0108EQWRKSRQ1"
    footprint={
      <footprint>
        <smtpad
          portHints={["pin20"]}
          pcbX="-2.3mm"
          pcbY="0.75mm"
          height="0.280mm"
          width="0.700mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin11"]}
          pcbX="2.3mm"
          pcbY="0.75mm"
          height="0.280mm"
          width="0.700mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin21"]}
          pcbX="0mm"
          pcbY="0mm"
          width="3.050mm"
          height="2.050mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin10"]}
          pcbX="2.3mm"
          pcbY="-0.75mm"
          height="0.280mm"
          width="0.700mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin1"]}
          pcbX="-2.3mm"
          pcbY="-0.75mm"
          height="0.280mm"
          width="0.700mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-1.75mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-1.25mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="-0.75mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="-0.25mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.25mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="0.75mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin8"]}
          pcbX="1.25mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin9"]}
          pcbX="1.75mm"
          pcbY="-1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />

        <smtpad
          portHints={["pin12"]}
          pcbX="-1.75mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin13"]}
          pcbX="-1.25mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin14"]}
          pcbX="-0.75mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin15"]}
          pcbX="-0.25mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin16"]}
          pcbX="0.25mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin17"]}
          pcbX="0.75mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin18"]}
          pcbX="1.25mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin19"]}
          pcbX="1.75mm"
          pcbY="1.8mm"
          width="0.28mm"
          height="0.7mm"
          shape="rect"
        />
      </footprint>
    }
    pinLabels={pinLabels}
    {...props}
  />
)
