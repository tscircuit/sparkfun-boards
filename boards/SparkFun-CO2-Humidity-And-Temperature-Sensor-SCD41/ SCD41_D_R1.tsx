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

export const SCD41_D_R1 = (props: ChipProps<typeof pinLabels>) => {
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
        jlcpcb: ["C3659362"],
      }}
      manufacturerPartNumber="SCD41_D_R1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.999992mm"
            pcbY="2.500122mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.999992mm"
            pcbY="1.250188mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.999992mm"
            pcbY="0.000254mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.999992mm"
            pcbY="-1.249934mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.999992mm"
            pcbY="-2.499868mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.500122mm"
            pcbY="-3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.250188mm"
            pcbY="-3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-0mm"
            pcbY="-3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.249934mm"
            pcbY="-3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.499868mm"
            pcbY="-3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="3.999992mm"
            pcbY="-2.499868mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="3.999992mm"
            pcbY="-1.249934mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.999992mm"
            pcbY="0.000254mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.999992mm"
            pcbY="1.250188mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.999992mm"
            pcbY="2.500122mm"
            width="1.499997mm"
            height="0.7999984mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.499868mm"
            pcbY="3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.249934mm"
            pcbY="3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-0mm"
            pcbY="3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-1.250188mm"
            pcbY="3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.500122mm"
            pcbY="3.999992mm"
            width="0.7999984mm"
            height="1.499997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-0mm"
            pcbY="-0mm"
            width="4.7999904mm"
            height="4.7999904mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -5.000040800000193, y: 5.000091599999905 },
              { x: -5.000040800000193, y: -4.999888399999918 },
              { x: 4.999939199999972, y: -4.999888399999918 },
              { x: 4.999939199999972, y: 5.000091599999905 },
              { x: -5.000040800000193, y: 5.000091599999905 },
            ]}
          />
          <silkscreencircle
            pcbX="-5.649976mm"
            pcbY="2.499995mm"
            radius="0.2500122mm"
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.435356mm"
            pcbY="6.090922mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -6.1590560000001915, y: 5.340921999999864 },
              { x: 5.2883439999998245, y: 5.340921999999864 },
              { x: 5.2883439999998245, y: -5.293678000000114 },
              { x: -6.1590560000001915, y: -5.293678000000114 },
              { x: -6.1590560000001915, y: 5.340921999999864 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=46d2fb2c24cc4dfdaf1274f995aebbee&pn=C3659362",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
