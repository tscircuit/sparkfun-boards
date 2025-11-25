import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDDIO"],
  pin2: ["BYP"],
  pin3: ["NC1"],
  pin4: ["SCL"],
  pin5: ["GND1"],
  pin6: ["SDA"],
  pin7: ["SA0"],
  pin8: ["NC2"],
  pin9: ["INT2"],
  pin10: ["GND2"],
  pin11: ["INT1"],
  pin12: ["GND3"],
  pin13: ["NC3"],
  pin14: ["VDD"],
  pin15: ["NC4"],
  pin16: ["NC5"],
} as const

export const MMA8452QR1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      connections={{
        pin5: "U1.pin10",
        pin10: "U1.pin12",
        pin9: "net.INT2",
        pin11: "net.INT1",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin14", "pin1", "pin2", "pin12", "pin10", "pin5"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin6", "pin9", "pin11", "pin7"],
        },
      }}
      schPinStyle={{
        pin6: { marginBottom: 0.2 },
        pin11: { marginBottom: 0.2 },
        pin2: { marginBottom: 0.6 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C11360"],
      }}
      manufacturerPartNumber="MMA8452QR1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.3500099999998838mm"
            pcbY="0.999998000000005mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.3500099999998838mm"
            pcbY="0.4998720000000958mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.3500099999998838mm"
            pcbY="0mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.3500099999998838mm"
            pcbY="-0.5001259999999093mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.3500099999998838mm"
            pcbY="-0.999998000000005mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.5001259999999093mm"
            pcbY="-1.3500099999999975mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="-1.3500099999999975mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.4998719999999821mm"
            pcbY="-1.3500099999999975mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.3500099999999975mm"
            pcbY="-0.999998000000005mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.3500099999999975mm"
            pcbY="-0.5001259999999093mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.3500099999999975mm"
            pcbY="0mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.3500099999999975mm"
            pcbY="0.4998720000000958mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.3500099999999975mm"
            pcbY="0.999998000000005mm"
            width="0.5999987999999999mm"
            height="0.25001219999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.4998719999999821mm"
            pcbY="1.3500099999999975mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0mm"
            pcbY="1.3500099999999975mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.5001259999999093mm"
            pcbY="1.3500099999999975mm"
            width="0.25001219999999996mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.5000986000000012, y: -1.3561313999999811 },
              { x: -1.5000986000000012, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5000986000000012, y: 1.4999970000000076 },
              { x: -1.5000986000000012, y: 1.3561313999999811 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8435848000000306, y: -1.4999970000000076 },
              { x: -1.5000986000000012, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.499895400000014, y: -1.4999970000000076 },
              { x: 0.8433815999999297, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.499895400000014, y: -1.3434822000000395 },
              { x: 1.499895400000014, y: -1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.499895400000014, y: 1.4999970000000076 },
              { x: 1.499895400000014, y: 1.3434821999999258 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8546592000000146, y: 1.4999970000000076 },
              { x: 1.499895400000014, y: 1.4999970000000076 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5000986000000012, y: 1.4999970000000076 },
              { x: -0.8548624000000018, y: 1.4999970000000076 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=08a4171995a5425492150a116d19333c&pn=C11360",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
