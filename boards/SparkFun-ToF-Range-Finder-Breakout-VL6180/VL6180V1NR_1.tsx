import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GPIO1"],
  pin2: ["NC1"],
  pin3: ["NC2"],
  pin4: ["GPIO0"],
  pin5: ["SCL"],
  pin6: ["SDA"],
  pin7: ["NC3"],
  pin8: ["AVDD_VCSEL"],
  pin9: ["AVSS_VCSEL"],
  pin10: ["AVDD"],
  pin11: ["NC4"],
  pin12: ["GND"],
} as const

export const VL6180V1NR_1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={2}
      schPinStyle={{
        pin1: { marginBottom: 0.2 },
        pin4: { marginBottom: 0.6 },
        pin8: { marginBottom: 0.8 },
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [10, 8, 9, 12],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 4, 5, 6],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2655167"],
      }}
      manufacturerPartNumber="VL6180V1NR_1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.8750279999999293mm"
            pcbY="-0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.1249659999999722mm"
            pcbY="-0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.374904000000015mm"
            pcbY="-0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.3749040000001287mm"
            pcbY="-0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.1249660000000858mm"
            pcbY="-0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.875028000000043mm"
            pcbY="-0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.875028000000043mm"
            pcbY="0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.1249660000000858mm"
            pcbY="0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.3749040000001287mm"
            pcbY="0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.374904000000015mm"
            pcbY="0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.1249659999999722mm"
            pcbY="0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.8750279999999293mm"
            pcbY="0.999998000000005mm"
            width="0.5500115999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.4000205999998343, y: -0.5570219999999608 },
              { x: -2.4000205999998343, y: -1.3970000000000482 },
              { x: -2.35516419999999, y: -1.3970000000000482 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.399969800000008, y: 1.3969999999999345 },
              { x: 2.35511340000005, y: 1.3969999999999345 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.399969800000008, y: -0.5570219999999608 },
              { x: 2.399969800000008, y: -1.3970000000000482 },
              { x: 2.35511340000005, y: -1.3970000000000482 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.399969800000008, y: 0.5569966000000477 },
              { x: 2.399969800000008, y: 1.3969999999999345 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4000205999998343, y: 0.5570219999999608 },
              { x: -2.4000205999998343, y: 1.3969999999999345 },
              { x: -2.35516419999999, y: 1.3969999999999345 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.399969800000008, y: 0 },
              { x: 2.399969800000008, y: 0.5569966000000477 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.399969800000008, y: 0 },
              { x: 2.399969800000008, y: -0.5570219999999608 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4000205999998343, y: 0 },
              { x: -2.4000205999998343, y: -0.5570219999999608 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4000205999998343, y: 0 },
              { x: -2.4000205999998343, y: 0.5570219999999608 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5aeca3d04b2f4ed88dcf6b959e02f9ea&pn=C2655167",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
