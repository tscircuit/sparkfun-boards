import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["VDDIO", "V3_3"],
  pin2: ["NC1"],
  pin3: ["RESERVED1"],
  pin4: ["SCLK"],
  pin5: ["RESERVED2"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["N_CS"],
  pin9: ["INT2"],
  pin10: ["RESERVED3"],
  pin11: ["INT1"],
  pin12: ["GND"],
  pin13: ["GND2"],
  pin14: ["VS"],
  pin15: ["NC2"],
  pin16: ["GND3"],
} as const

export const ADXL362BCCZ_R2 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schHeight={1.5}
      pinLabels={pinLabels}
      connections={{
        pin12: [sel.U1.pin13, sel.U1.pin16],
        pin1: sel.net().V3_3,
        pin14: sel.net().V3_3,
      }}
      schWidth={1.7}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SCLK", "MOSI", "MISO", "N_CS"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VDDIO", "VS", "INT1", "INT2"],
        },
        bottomSide: {
          direction: "top-to-bottom",
          pins: ["GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C579463"],
      }}
      manufacturerPartNumber="ADXL362BCCZ_R2"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.5300959999999577mm"
            pcbY="0.999998000000005mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.5300959999999577mm"
            pcbY="0.4998719999999821mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.5300959999999577mm"
            pcbY="0mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.5300959999999577mm"
            pcbY="-0.5001260000000229mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.5300959999999577mm"
            pcbY="-0.9999979999998914mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.4998720000000958mm"
            pcbY="-1.4175740000000587mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="-1.4175740000000587mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.5001260000000229mm"
            pcbY="-1.4175740000000587mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.5300959999999577mm"
            pcbY="-0.9999979999998914mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.5300959999999577mm"
            pcbY="-0.5001260000000229mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.5300959999999577mm"
            pcbY="0mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.5300959999999577mm"
            pcbY="0.4998719999999821mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.5300959999999577mm"
            pcbY="0.999998000000005mm"
            width="0.5849874mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.5001260000000229mm"
            pcbY="1.4175740000000587mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0mm"
            pcbY="1.4175740000000587mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.4998720000000958mm"
            pcbY="1.4175740000000587mm"
            width="0.2800096mm"
            height="0.5849874mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.830503799999974, y: 1.5761970000000929 },
              { x: 1.688693599999965, y: 1.5761970000000929 },
              { x: 1.688693599999965, y: 1.3305027999999766 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.830503799999974, y: -1.5761969999999792 },
              { x: 1.688693599999965, y: -1.5761969999999792 },
              { x: 1.688693599999965, y: -1.3305027999999766 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.830503799999974, y: 1.5761970000000929 },
              { x: -1.6886936000000787, y: 1.5761970000000929 },
              { x: -1.6886936000000787, y: 1.3305027999999766 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.830503799999974, y: -1.5761969999999792 },
              { x: -1.6886936000000787, y: -1.5761969999999792 },
              { x: -1.6886936000000787, y: -1.3305027999999766 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=80761f96cf574bf59b33f883e6177959&pn=C579463",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
