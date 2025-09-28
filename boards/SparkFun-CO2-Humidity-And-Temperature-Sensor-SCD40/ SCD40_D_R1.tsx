import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["DNC1"],
  pin2: ["DNC2"],
  pin3: ["DNC3"],
  pin4: ["DNC4"],
  pin5: ["DNC5"],
  pin6: ["GND"],
  pin7: ["VDD"],
  pin8: ["DNC6"],
  pin9: ["SCL"],
  pin10: ["SDA"],
  pin11: ["DNC7"],
  pin12: ["DNC8"],
  pin13: ["DNC9"],
  pin14: ["DNC10"],
  pin15: ["DNC11"],
  pin16: ["DNC12"],
  pin17: ["DNC13"],
  pin18: ["DNC14"],
  pin19: ["VDDH"],
  pin20: ["GND2"],
  pin21: ["GND3"],
} as const

export const SCD40_D_R1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      connections={{
        pin21: [sel.U1.pin6, sel.U1.pin20],
        pin9: sel.net.SCL,
        pin10: sel.net.SDA,
        pin7: sel.net.V3_3,
        pin19: sel.net.V3_3,
        pin6: sel.net.GND,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "VDDH", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SDA", "SCL"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C3037696"],
      }}
      manufacturerPartNumber="SCD40_D_R1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.350004000000126mm"
            pcbY="2.500122000000033mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-4.350004000000126mm"
            pcbY="1.2499339999999393mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-4.350004000000126mm"
            pcbY="-1.1368683772161603e-13mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-4.350004000000126mm"
            pcbY="-1.249934000000053mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-4.350004000000126mm"
            pcbY="-2.499868000000106mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.499867999999992mm"
            pcbY="-4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.249934000000053mm"
            pcbY="-4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="-4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.25018799999998mm"
            pcbY="-4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.5001219999999194mm"
            pcbY="-4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="4.350004000000013mm"
            pcbY="-2.499868000000106mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="4.350004000000013mm"
            pcbY="-1.249934000000053mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="4.350004000000013mm"
            pcbY="-1.1368683772161603e-13mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="4.350004000000013mm"
            pcbY="1.2499339999999393mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="4.350004000000013mm"
            pcbY="2.500122000000033mm"
            width="2.1999956mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.5001219999999194mm"
            pcbY="4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.25018799999998mm"
            pcbY="4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="0mm"
            pcbY="4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.249934000000053mm"
            pcbY="4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.499867999999992mm"
            pcbY="4.350004000000013mm"
            width="0.7999983999999999mm"
            height="2.1999956mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0mm"
            pcbY="-1.1368683772161603e-13mm"
            width="4.7999903999999995mm"
            height="4.7999903999999995mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -4.999939199999972, y: 3.1311849999999595 },
              { x: -4.999939199999972, y: 5.000040799999965 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.131007199999999, y: -4.999990000000139 },
              { x: -4.999939199999972, y: -4.999990000000139 },
              { x: -4.999939199999972, y: -3.1311342000000195 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.000091599999905, y: -3.1311342000000195 },
              { x: 5.000091599999905, y: -4.999990000000139 },
              { x: 3.1312357999998994, y: -4.999990000000139 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.1312357999998994, y: 5.000040799999965 },
              { x: 5.000091599999905, y: 5.000040799999965 },
              { x: 5.000091599999905, y: 3.1311849999999595 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.999939199999972, y: 5.000040799999965 },
              { x: -3.131007199999999, y: 5.000040799999965 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=167158fd0bab4ce8b8b08d195956a609&pn=C3037696",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
