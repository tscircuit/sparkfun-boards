import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: "COM",
  pin2: "CHAN7",
  pin3: "CHAN6",
  pin4: "CHAN5",
  pin5: "CHAN4",
  pin6: "CHAN3",
  pin7: "CHAN2",
  pin8: "CHAN1",
  pin9: "CHAN0",
  pin10: "S0",
  pin11: "S1",
  pin12: "GND",
  pin13: "S3",
  pin14: "S2",
  pin15: "N_EN",
  pin16: "CHAN15",
  pin17: "CHAN14",
  pin18: "CHAN13",
  pin19: "CHAN12",
  pin20: "CHAN11",
  pin21: "CHAN10",
  pin22: "CHAN9",
  pin23: "CHAN8",
  pin24: "VCC",
} as const

export const CD74HC4067 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={2}
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "CHAN0",
            "CHAN1",
            "CHAN2",
            "CHAN3",
            "CHAN4",
            "CHAN5",
            "CHAN6",
            "CHAN7",
            "CHAN8",
            "CHAN9",
            "CHAN10",
            "CHAN11",
            "CHAN12",
            "CHAN13",
            "CHAN14",
            "CHAN15",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "N_EN", "S0", "S1", "S2", "S3", "COM", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C128429"],
      }}
      manufacturerPartNumber="CD74HC4067"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.4mm"
            pcbY="3.575mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.4mm"
            pcbY="2.925mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.4mm"
            pcbY="2.275mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.4mm"
            pcbY="1.625mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.4mm"
            pcbY="0.975mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-3.4mm"
            pcbY="0.325mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-3.4mm"
            pcbY="-0.325mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-3.4mm"
            pcbY="-0.975mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-3.4mm"
            pcbY="-1.625mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.4mm"
            pcbY="-2.275mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-3.4mm"
            pcbY="-2.925mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3.4mm"
            pcbY="-3.575mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.4mm"
            pcbY="-3.575mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.4mm"
            pcbY="-2.925mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.4mm"
            pcbY="-2.275mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.4mm"
            pcbY="-1.625mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="3.4mm"
            pcbY="-0.975mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.4mm"
            pcbY="-0.325mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.4mm"
            pcbY="0.325mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="3.4mm"
            pcbY="0.975mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="3.4mm"
            pcbY="1.625mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="3.4mm"
            pcbY="2.275mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="3.4mm"
            pcbY="2.925mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="3.4mm"
            pcbY="3.575mm"
            width="1.5mm"
            height="0.4mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.65, y: -4.1 },
              { x: 2.65, y: -4.1 },
              { x: 2.65, y: 4.1 },
              { x: -2.65, y: 4.1 },
              { x: -2.65, y: -4.1 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
