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
            pcbX="-5.5001159999999345mm"
            pcbY="-2.550096499999995mm"
            width="0.7999983999999999mm"
            height="3.5999928mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.53999999999985mm"
            pcbY="-3.049968499999977mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.2699999999998681mm"
            pcbY="-3.049968499999977mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.1368683772161603e-13mm"
            pcbY="-3.049968499999977mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.2700000000000955mm"
            pcbY="-3.049968499999977mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.5400000000000773mm"
            pcbY="-3.049968499999977mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="5.500116000000048mm"
            pcbY="-3.049968499999977mm"
            width="0.7999983999999999mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="5.500116000000048mm"
            pcbY="3.0500954999999976mm"
            width="0.7999983999999999mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.5400000000000773mm"
            pcbY="3.0500954999999976mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.2700000000000955mm"
            pcbY="3.0500954999999976mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.1368683772161603e-13mm"
            pcbY="3.0500954999999976mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.2699999999998681mm"
            pcbY="3.0500954999999976mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-2.53999999999985mm"
            pcbY="3.0500954999999976mm"
            width="0.6999986mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-5.5001159999999345mm"
            pcbY="3.0500954999999976mm"
            width="0.7999983999999999mm"
            height="2.5999947999999997mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -6.603974599999901, y: -2.6669872999999598 },
              { x: -6.603974599999901, y: -4.952987299999904 },
              { x: -4.571999999999889, y: -4.952987299999904 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=27b2e859e34d4063a6a2658122b7cd2c&pn=C20484505",
        rotationOffset: { x: 180, y: 0, z: 0 },
        positionOffset: {
          x: 1.1368683772161603e-13,
          y: 0.000012699999956566899,
          z: 1.8,
        },
      }}
      {...props}
    />
  )
}
