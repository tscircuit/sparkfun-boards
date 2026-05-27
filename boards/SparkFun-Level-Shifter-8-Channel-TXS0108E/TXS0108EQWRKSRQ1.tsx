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

export const TXS0108EQWRKSRQ1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C43703393"],
      }}
      manufacturerPartNumber="TXS0108EQWRKSRQ1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin21"]}
            pcbX="0mm"
            pcbY="1.1368683772161603e-13mm"
            width="0.9999979999999999mm"
            height="2.999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.2499359999999342mm"
            pcbY="2.157475999999974mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.25019000000008873mm"
            pcbY="2.157475999999974mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.1574779999999691mm"
            pcbY="1.7500599999999622mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="1.1574779999999691mm"
            pcbY="1.249934000000053mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="1.1574779999999691mm"
            pcbY="0.7500620000000708mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.1574779999999691mm"
            pcbY="0.2499359999999342mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.1574779999999691mm"
            pcbY="-0.2499359999999342mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.1574779999999691mm"
            pcbY="-0.7500619999999572mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.1574779999999691mm"
            pcbY="-1.249934000000053mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.1574779999999691mm"
            pcbY="-1.7500600000000759mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.25019000000008873mm"
            pcbY="-2.157475999999974mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.2499359999999342mm"
            pcbY="-2.157475999999974mm"
            width="0.2800096mm"
            height="0.6649974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.1574779999999691mm"
            pcbY="-1.7500600000000759mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.1574779999999691mm"
            pcbY="-1.249934000000053mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.1574779999999691mm"
            pcbY="-0.7500619999999572mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-1.1574779999999691mm"
            pcbY="-0.2499359999999342mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.1574779999999691mm"
            pcbY="0.2499359999999342mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.1574779999999691mm"
            pcbY="0.7500620000000708mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.1574779999999691mm"
            pcbY="1.249934000000053mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.1574779999999691mm"
            pcbY="1.7500599999999622mm"
            width="0.6649974mm"
            height="0.2800096mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.5805932000000666, y: 2.3261827999999696 },
              { x: 1.3262864000000718, y: 2.3261827999999696 },
              { x: 1.3262864000000718, y: 2.0804886000000806 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.5805932000000666, y: -2.3261828000000833 },
              { x: 1.3262864000000718, y: -2.3261828000000833 },
              { x: 1.3262864000000718, y: -2.080488599999967 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5803899999999658, y: 2.3261827999999696 },
              { x: -1.3260831999998572, y: 2.3261827999999696 },
              { x: -1.3260831999998572, y: 2.0804886000000806 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5803899999999658, y: -2.3261828000000833 },
              { x: -1.3260831999998572, y: -2.3261828000000833 },
              { x: -1.3260831999998572, y: -2.080488599999967 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=b4672b645a9c45daa26327415683c5fe&pn=C43703393",
        rotationOffset: { x: 0, y: 0, z: -90 },
        positionOffset: {
          x: 0,
          y: 0,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
