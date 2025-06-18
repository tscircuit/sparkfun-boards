import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["B8"],
  pin5: ["A5"],
  pin6: ["B7"],
  pin7: ["A6"],
  pin8: ["A7"],
  pin9: ["B6"],
  pin10: ["A8"],
  pin11: ["B5"],
  pin12: ["A1"],
  pin13: ["B12"],
  pin14: ["GND"],
  pin15: ["DI"],
  pin16: ["D+"],
  pin17: ["D-"],
  pin18: ["VCC"],
  pin19: ["A12"],
  pin20: ["SH"],
} as const

export const TYPE_C_31_M_12 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C165948"],
      }}
      manufacturerPartNumber="TYPE_C_31_M_12"
      footprint={
        <footprint>
          <hole
            pcbX="-2.8999180000000706mm"
            pcbY="0.9056116499999689mm"
            diameter="0.7500111999999999mm"
          />
          <hole
            pcbX="2.8999180000000706mm"
            pcbY="0.9056116499999689mm"
            diameter="0.7500111999999999mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="4.32511199999999mm"
            pcbY="-2.7740863499999477mm"
            outerHeight="1.7999964mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.3999972mm"
            holeWidth="0.7999983999999999mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="4.32511199999999mm"
            pcbY="1.4057376499998782mm"
            outerHeight="1.9999959999999999mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.5999968mm"
            holeWidth="0.7999983999999999mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin20"]}
            pcbX="-4.32511199999999mm"
            pcbY="1.4057376499998782mm"
            outerHeight="1.9999959999999999mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.5999968mm"
            holeWidth="0.7999983999999999mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-4.32511199999999mm"
            pcbY="-2.7740863499999477mm"
            outerHeight="1.7999964mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.3999972mm"
            holeWidth="0.7999983999999999mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.7500600000000759mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.2499339999999393mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.7500619999999572mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.2499359999999342mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.2499359999999342mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.7500619999999572mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.2496799999998984mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.7500600000000759mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-3.3500060000000076mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-3.0500319999999874mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.5499059999999645mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-2.249932000000058mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.249932000000058mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="2.5501600000000053mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.050032000000101mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.3500060000000076mm"
            pcbY="2.174087649999933mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -4.4689776000000165, y: -1.6757141499999761 },
              { x: -4.4689776000000165, y: 0.18719804999989265 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.471009600000116, y: -5.394096350000041 },
              { x: -4.4689776000000165, y: -5.394096350000041 },
              { x: -4.4689776000000165, y: -3.9127937499999916 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.471009600000116, y: -1.6760697500000106 },
              { x: 4.471009600000116, y: 0.18755365000004076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.471009600000116, y: -5.394096350000041 },
              { x: 4.471009600000116, y: -3.9124381500001846 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2a4bc2358b36497d9ab2a66ab6419ba3&pn=C165948",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
