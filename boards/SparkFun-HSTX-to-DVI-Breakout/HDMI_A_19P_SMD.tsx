import type { ChipProps } from "@tscircuit/props"

// 19-pin female HDMI Type-A SMD receptacle.
// Pad geometry approximated from the SparkFun-Connector:HDMI_A_19P_SMD
// footprint instance for J2 in SparkFun_HSTX_to_DVI_Breakout.kicad_pcb
// (19 signal pads on 0.5mm pitch along local X, plus 4 through-hole
// shield/ground tabs). Pad shapes are simplified rectangles/pills - not
// pixel-perfect, but pin numbering and relative placement match the source.
const pinLabels = {
  pin1: ["D2P"],
  pin2: ["D2S"],
  pin3: ["D2N"],
  pin4: ["D1P"],
  pin5: ["D1S"],
  pin6: ["D1N"],
  pin7: ["D0P"],
  pin8: ["D0S"],
  pin9: ["D0N"],
  pin10: ["CKP"],
  pin11: ["CKS"],
  pin12: ["CKN"],
  pin13: ["CEC"],
  pin14: ["UTILITY"],
  pin15: ["SCL5V"],
  pin16: ["SDA5V"],
  pin17: ["GND"],
  pin18: ["P5V"],
  pin19: ["HPD"],
  pin20: ["SHIELD1"],
  pin21: ["SHIELD2"],
  pin22: ["SHIELD3"],
  pin23: ["SHIELD4"],
} as const

const signalPads: Array<{ pin: keyof typeof pinLabels; x: number }> = [
  { pin: "pin1", x: 4.5 },
  { pin: "pin2", x: 4.0 },
  { pin: "pin3", x: 3.5 },
  { pin: "pin4", x: 3.0 },
  { pin: "pin5", x: 2.5 },
  { pin: "pin6", x: 2.0 },
  { pin: "pin7", x: 1.5 },
  { pin: "pin8", x: 1.0 },
  { pin: "pin9", x: 0.5 },
  { pin: "pin10", x: 0.0 },
  { pin: "pin11", x: -0.5 },
  { pin: "pin12", x: -1.0 },
  { pin: "pin13", x: -1.5 },
  { pin: "pin14", x: -2.0 },
  { pin: "pin15", x: -2.5 },
  { pin: "pin16", x: -3.0 },
  { pin: "pin17", x: -3.5 },
  { pin: "pin18", x: -4.0 },
  { pin: "pin19", x: -4.5 },
]

export const HDMI_A_19P_SMD = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="XUNPU-HDMI-001S"
      footprint={
        <footprint>
          {signalPads.map(({ pin, x }) => (
            <smtpad
              key={pin}
              portHints={[pin]}
              pcbX={`${x}mm`}
              pcbY="0mm"
              width="0.3mm"
              height="1.2mm"
              shape="rect"
            />
          ))}
          <platedhole
            portHints={["pin20"]}
            pcbX="-7.25mm"
            pcbY="0.76mm"
            holeDiameter="0.9mm"
            outerWidth="1.5mm"
            outerHeight="3.3mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin21"]}
            pcbX="-7.25mm"
            pcbY="6.72mm"
            holeDiameter="0.9mm"
            outerWidth="1.5mm"
            outerHeight="2.3mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin22"]}
            pcbX="7.25mm"
            pcbY="0.76mm"
            holeDiameter="0.9mm"
            outerWidth="1.5mm"
            outerHeight="3.3mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin23"]}
            pcbX="7.25mm"
            pcbY="6.72mm"
            holeDiameter="0.9mm"
            outerWidth="1.5mm"
            outerHeight="2.3mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: -7.9, y: 2.5 },
              { x: -7.9, y: 5.5 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 7.9, y: 2.5 },
              { x: 7.9, y: 5.5 },
            ]}
          />
        </footprint>
      }
      cadModel={null}
      {...props}
    />
  )
}
