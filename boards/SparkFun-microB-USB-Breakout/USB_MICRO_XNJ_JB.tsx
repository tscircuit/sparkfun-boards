import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_N"],
  pin3: ["D_P"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["EH3"],
  pin7: ["EH4"],
  pin8: ["EH1"],
  pin9: ["EH2"],
  pin10: ["EH3"],
} as const

export const USB_MICRO_XNJ_JB = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={0.6}
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VBUS", "D_N", "D_P", "ID", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C7507410"],
      }}
      manufacturerPartNumber="USB_MICRO_XNJ_JB"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin10"]}
            pcbX="-3.75"
            pcbY="-1.624946799999998mm"
            width="1.8mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0mm"
            pcbY="-1.624946799999998mm"
            width="2.5mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.75mm"
            pcbY="-1.624946799999998mm"
            width="1.8mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="-2.4249379999999974mm"
            pcbY="0.7050087999999732mm"
            outerDiameter="1.2500101999999997mm"
            holeDiameter="0.700024mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="2.4249379999999974mm"
            pcbY="0.7050087999999732mm"
            outerDiameter="1.2500101999999997mm"
            holeDiameter="0.700024mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.2895579999999427mm"
            pcbY="1.224946799999998mm"
            width="0.39999919999999994mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.6395719999999301mm"
            pcbY="1.224946799999998mm"
            width="0.39999919999999994mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.010414000000082524mm"
            pcbY="1.224946799999998mm"
            width="0.39999919999999994mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.6603999999999814mm"
            pcbY="1.224946799999998mm"
            width="0.39999919999999994mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.3103860000001077mm"
            pcbY="1.224946799999998mm"
            width="0.39999919999999994mm"
            height="1.5999967999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.9463980000000447, y: -4.987131200000135 },
              { x: -3.3962847999999894, y: -4.987664600000016 },
              { x: -2.9888180000000375, y: -4.187031200000092 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.2692085999999563, y: -4.187666200000081 },
              { x: 3.2692085999999563, y: -4.760410800000045 },
              { x: 3.456355799999983, y: -4.987664600000016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.9537132000000383, y: -4.987664600000016 },
              { x: 3.456355799999983, y: -4.987664600000016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.6999925999998595, y: -4.187666200000081 },
              { x: 3.6999925999998595, y: -4.733944000000065 },
              { x: 3.9537132000000383, y: -4.987664600000016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.699992599999973, y: -4.187666200000081 },
              { x: -3.699992599999973, y: -4.741386200000079 },
              { x: -3.9462710000000243, y: -4.987664600000016 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.699992599999973, y: -0.38767380000001594 },
              { x: -3.699992599999973, y: 0.8749855999999454 },
              { x: -3.2639762000001156, y: 0.8749855999999454 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.265931999999907, y: 0.8619807999999693 },
              { x: 3.7002719999998135, y: 0.8619807999999693 },
              { x: 3.7002719999998135, y: 0.8111807999998746 },
              { x: 3.7002719999998135, y: -0.6213792000002059 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.699992599999973, y: -0.6228777999999693 },
              { x: -3.699992599999973, y: -0.38767380000001594 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.6999925999998595, y: -3.266763800000035 },
              { x: 3.6999925999998595, y: -4.187666200000081 },
              { x: -3.699992599999973, y: -4.187666200000081 },
              { x: -3.699992599999973, y: -3.267271800000117 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e418b386351d4badb989ca6c483e9bb5&pn=C7507410",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -0.9, z: 0 },
      }}
      {...props}
    />
  )
}
