import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD_IO"],
  pin2: ["NC1"],
  pin3: ["NC2"],
  pin4: ["SCL"],
  pin5: ["GND1"],
  pin6: ["SDA"],
  pin7: ["SA0"],
  pin8: ["N_CS"],
  pin9: ["INT2"],
  pin10: ["RES"],
  pin11: ["INT1"],
  pin12: ["GND2"],
  pin13: ["ADC3"],
  pin14: ["VDD"],
  pin15: ["ADC2"],
  pin16: ["ADC1"],
} as const

export const LIS3DHTR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schHeight={2.5}
      schWidth={3}
      schPinStyle={{
        pin1: { marginBottom: 0.5 },
        pin10: { marginTop: 0.5, marginBottom: 0.2 },
        pin7: { marginBottom: 0.2 },
        pin9: { marginBottom: 0.2 },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin14", "pin1", "pin10", "pin5", "pin12"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin8",
            "pin4",
            "pin6",
            "pin7",
            "pin11",
            "pin9",
            "pin16",
            "pin15",
            "pin13",
          ],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C15134"],
      }}
      manufacturerPartNumber="LIS3DHTR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.4000479999999982mm"
            pcbY="1.0001249999999828mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.4000479999999982mm"
            pcbY="0.4999989999999883mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.4000479999999982mm"
            pcbY="0.00012699999999199463mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.4000479999999982mm"
            pcbY="-0.4999990000000025mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.4000479999999982mm"
            pcbY="-0.999871000000013mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.49987200000001053mm"
            pcbY="-1.3999210000000062mm"
            width="0.2800096mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="-1.3999210000000062mm"
            width="0.2800096mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.5001259999999803mm"
            pcbY="-1.3999210000000062mm"
            width="0.2800096mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.4000479999999982mm"
            pcbY="-0.999871000000013mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.4000479999999982mm"
            pcbY="-0.4999990000000025mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.4000479999999982mm"
            pcbY="0.00012699999999199463mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.4000479999999982mm"
            pcbY="0.4999989999999883mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.4000479999999982mm"
            pcbY="1.0001249999999828mm"
            width="0.7999983999999999mm"
            height="0.2800096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.5001259999999803mm"
            pcbY="1.3999210000000062mm"
            width="0.2800096mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0mm"
            pcbY="1.3999210000000062mm"
            width="0.2800096mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.49987200000001053mm"
            pcbY="1.3999210000000062mm"
            width="0.2800096mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.724888600000014, y: 1.450111399999983 },
              { x: -1.724888600000014, y: 1.7251171999999855 },
              { x: -1.0248899999999992, y: 1.7251171999999855 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0250932000000006, y: 1.7251171999999855 },
              { x: 1.7251171999999855, y: 1.7251171999999855 },
              { x: 1.7251171999999855, y: 1.450111399999983 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.724888600000014, y: -1.449882800000026 },
              { x: -1.724888600000014, y: -1.7248886000000283 },
              { x: -1.0248899999999992, y: -1.7248886000000283 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0250932000000006, y: -1.7248886000000283 },
              { x: 1.7251171999999855, y: -1.7248886000000283 },
              { x: 1.7251171999999855, y: -1.449882800000026 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.049678400000005, y: 1.574926999999974 },
              { x: -1.9240564439124341, y: 1.698648786962778 },
              { x: -1.799698052107189, y: 1.573656999999983 },
              { x: -1.9240564439124341, y: 1.4486652130371738 },
              { x: -2.049678400000005, y: 1.5723869999999778 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c4b5277f94624e3ba038828676140c3b&pn=C15134",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.4210854715202004e-14, z: 0 },
      }}
      {...props}
    />
  )
}
