import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["DIN"],
  pin2: ["GAIN"],
  pin3: ["GND"],
  pin4: ["N_SD_MODE"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["VDD"],
  pin8: ["VDD2"],
  pin9: ["OUTP"],
  pin10: ["OUTN"],
  pin11: ["GND2"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["LRCLK"],
  pin15: ["GND3"],
  pin16: ["BCLK"],
  pin17: ["EP"],
} as const

export const MAX98357AETE_T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={2}
      connections={{ pin8: sel.U1.pin7, pin3: [sel.U1.pin11, sel.U1.pin15] }}
      schPinStyle={{
        pin1: { marginTop: 0.2 },
        pin14: { marginBottom: 0.2 },
        pin2: { marginBottom: 0.2 },
        pin9: { marginBottom: 0.6 },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "DIN", "BCLK", "LRCLK", "N_SD_MODE", "GAIN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["OUTP", "OUTN"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C910544"],
      }}
      manufacturerPartNumber="MAX98357AETE_T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.7484110000001465mm"
            pcbY="-1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.24853900000016438mm"
            pcbY="-1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.25158699999997225mm"
            pcbY="-1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.7514589999999544mm"
            pcbY="-1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.4999970000000076mm"
            pcbY="-0.7479029999998374mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.4999970000000076mm"
            pcbY="-0.24803099999996903mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.4999970000000076mm"
            pcbY="0.2520950000000539mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.4999970000000076mm"
            pcbY="0.751967000000036mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.7499350000000504mm"
            pcbY="1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.25006299999984094mm"
            pcbY="1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.2500630000000683mm"
            pcbY="1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.7484110000001465mm"
            pcbY="1.4999970000000076mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.4999970000000076mm"
            pcbY="0.751967000000036mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.4999970000000076mm"
            pcbY="0.2520950000000539mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.4999970000000076mm"
            pcbY="-0.24803099999996903mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.4999970000000076mm"
            pcbY="-0.7479029999998374mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.0001269999999067295mm"
            pcbY="-0.0001269999999067295mm"
            width="1.499997mm"
            height="1.499997mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.4998954000001277, y: 1.5001494000000548 },
              { x: -1.4998954000001277, y: 1.1082020000001194 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4998954000001277, y: -1.1040617999998403 },
              { x: -1.4998954000001277, y: -1.4998699999999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5001239999999143, y: -1.4998699999999872 },
              { x: 1.5001239999999143, y: -1.1040617999998403 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5001239999999143, y: 1.1082020000001194 },
              { x: 1.5001239999999143, y: 1.5001494000000548 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4998954000001277, y: 1.5001494000000548 },
              { x: -1.1046206000000893, y: 1.5001494000000548 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1061191999998528, y: 1.5001494000000548 },
              { x: 1.5001239999999143, y: 1.5001494000000548 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.4998954000001277, y: -1.4998699999999872 },
              { x: -1.1046206000000893, y: -1.4998699999999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1076431999997567, y: -1.4998699999999872 },
              { x: 1.5001239999999143, y: -1.4998699999999872 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=edc2f28e721b49ee8c25b04b981b88c3&pn=C910544",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
