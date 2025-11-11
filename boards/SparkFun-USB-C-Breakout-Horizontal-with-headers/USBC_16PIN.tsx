import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["GND"],
  pin3: ["B1A12"],
  pin4: ["B4A9"],
  pin5: ["CC2"],
  pin6: ["A8"],
  pin7: ["D_P"],
  pin8: ["A7"],
  pin9: ["A6"],
  pin10: ["D_N"],
  pin11: ["CC1"],
  pin12: ["B8"],
  pin13: ["SHILD"],
  pin14: ["SHILD2"],
  pin15: ["SHILD3"],
  pin16: ["SHILD4"],
} as const

export const USBC_16PIN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      connections={{
        pin1: sel.USBC.pin3,
        pin2: sel.USBC.pin4,
        pin9: sel.USBC.pin7,
        pin10: sel.USBC.pin8,
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin7", "pin10", "pin11", "pin5", "pin13", "pin2"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C393939"],
      }}
      manufacturerPartNumber="TYPE_C16PIN"
      footprint={
        <footprint>
          <hole
            pcbX="2.890011999999956mm"
            pcbY="1.4505304999997861mm"
            diameter="0.6499860000000001mm"
          />
          <hole
            pcbX="-2.890011999999956mm"
            pcbY="1.4505304999997861mm"
            diameter="0.6499860000000001mm"
          />
          <platedhole
            portHints={["pin13"]}
            pcbX="-4.320032000000083mm"
            pcbY="-2.1999574999999822mm"
            outerHeight="1.7999964mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.3999972mm"
            holeWidth="0.7999983999999999mm"
            pcbRotation={90}
            shape="pill"
          />
          <platedhole
            portHints={["pin14"]}
            pcbX="4.320031999999969mm"
            pcbY="1.9498945000000276mm"
            outerHeight="1.9999959999999999mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.5999968mm"
            holeWidth="0.7999983999999999mm"
            pcbRotation={90}
            shape="pill"
          />
          <platedhole
            portHints={["pin15"]}
            pcbX="-4.320032000000083mm"
            pcbY="1.9498945000000276mm"
            outerHeight="1.9999959999999999mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.5999968mm"
            holeWidth="0.7999983999999999mm"
            pcbRotation={90}
            shape="pill"
          />
          <platedhole
            portHints={["pin16"]}
            pcbX="4.320031999999969mm"
            pcbY="-2.1999574999999822mm"
            outerHeight="1.7999964mm"
            outerWidth="1.1999975999999999mm"
            holeHeight="1.3999972mm"
            holeWidth="0.7999983999999999mm"
            pcbRotation={90}
            shape="pill"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.200146000000018mm"
            pcbY="2.5249504999999317mm"
            width="0.5999987999999999mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.400045999999975mm"
            pcbY="2.5249504999999317mm"
            width="0.5999987999999999mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="3.1998920000000908mm"
            pcbY="2.5249504999999317mm"
            width="0.5999987999999999mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="2.400045999999975mm"
            pcbY="2.5249504999999317mm"
            width="0.5999987999999999mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.7500599999999622mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.2499339999999393mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.7500620000001845mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.2499360000000479mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.2499359999999342mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.7500619999999572mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.249934000000053mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.7500600000000759mm"
            pcbY="2.5249504999999317mm"
            width="0.29999939999999997mm"
            height="1.1500103999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 4.450003800000104, y: -1.0805033000001458 },
              { x: 4.450003800000104, y: 0.6804278999999269 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.449978399999964, y: -3.3194116999999324 },
              { x: -4.449978399999964, y: -4.837468100000024 },
              { x: 4.450003800000104, y: -4.837468100000024 },
              { x: 4.450003800000104, y: -3.3194116999999324 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.449978399999964, y: 0.6804278999999269 },
              { x: -4.449978399999964, y: -1.0805033000001458 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=99e30ad731ee487a8d60b7518cb54538&pn=C393939",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: -2.1, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
