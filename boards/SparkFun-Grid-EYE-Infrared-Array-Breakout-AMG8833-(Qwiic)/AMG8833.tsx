import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC1"],
  pin2: ["SDA"],
  pin3: ["SCL"],
  pin4: ["INT"],
  pin5: ["ADDR"],
  pin6: ["GND"],
  pin7: ["NC2"],
  pin8: ["NC3"],
  pin9: ["VDD"],
  pin10: ["AVDD"],
  pin11: ["NC4"],
  pin12: ["DVDD"],
  pin13: ["VPP"],
  pin14: ["NC5"],
} as const

export const AMG8833 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin2", "pin5", "pin4"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin9", "pin13", "pin12", "pin10", "pin6"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C20484505"],
      }}
      manufacturerPartNumber="AMG8833"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-5.500116mm"
            pcbY="-2.55016mm"
            width="0.7999984mm"
            height="3.5999928mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.54mm"
            pcbY="-3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.27mm"
            pcbY="-3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="-3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.27mm"
            pcbY="-3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.54mm"
            pcbY="-3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="5.500116mm"
            pcbY="-3.050032mm"
            width="0.7999984mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="5.500116mm"
            pcbY="3.050032mm"
            width="0.7999984mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.54mm"
            pcbY="3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.27mm"
            pcbY="3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0mm"
            pcbY="3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.27mm"
            pcbY="3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.54mm"
            pcbY="3.050032mm"
            width="0.6999986mm"
            height="2.5999948mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-5.500116mm"
            pcbY="3.050032mm"
            width="0.7999984mm"
            height="2.5999948mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -6.603974600000015, y: -2.66705079999997 },
              { x: -6.603974600000015, y: -4.9530507999999145 },
              { x: -4.572000000000003, y: -4.9530507999999145 },
            ]}
          />
          <silkscreenrect
            pcbX="0mm"
            pcbY="0mm"
            width="12.446mm"
            height="9.144mm"
            strokeWidth="0.254mm"
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1905mm"
            pcbY="5.569968mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -6.853999999999928, y: 4.819968000000017 },
              { x: 6.472999999999956, y: 4.819968000000017 },
              { x: 6.472999999999956, y: -5.20503199999996 },
              { x: -6.853999999999928, y: -5.20503199999996 },
              { x: -6.853999999999928, y: 4.819968000000017 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=27b2e859e34d4063a6a2658122b7cd2c&pn=C20484505",
        rotationOffset: { x: 180, y: 0, z: 0 },
        positionOffset: {
          x: 0,
          y: 0.000012699999956566899,
          z: 1.8,
        },
      }}
      {...props}
    />
  )
}
