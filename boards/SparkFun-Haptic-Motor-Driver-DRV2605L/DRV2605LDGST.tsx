import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["REG"],
  pin2: ["SCL"],
  pin3: ["SDA"],
  pin4: ["IN_TRIG"],
  pin5: ["EN"],
  pin6: ["VDD_NC"],
  pin7: ["OUT_N"],
  pin8: ["GND"],
  pin9: ["OUT_P"],
  pin10: ["VDD"],
} as const

export const DRV2605LDGST = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["REG", "SDA", "SCL", "IN_TRIG", "EN"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VDD_NC", "OUT_N", "GND", "OUT_P", "VDD"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C425927"],
      }}
      manufacturerPartNumber="DRV2605LDGST"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999871000000013mm"
            pcbY="-2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.4999990000000025mm"
            pcbY="-2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.00012699999999199463mm"
            pcbY="-2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.4999990000000025mm"
            pcbY="-2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.000124999999997mm"
            pcbY="-2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.9998709999999988mm"
            pcbY="2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.4999990000000025mm"
            pcbY="2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.00012699999999199463mm"
            pcbY="2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.4999990000000025mm"
            pcbY="2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.000124999999997mm"
            pcbY="2.3500080000000025mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.5784830000000056, y: 1.5365221999999932 },
              { x: 1.5215869999999967, y: 1.5365221999999932 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5215869999999967, y: -1.5635478000000091 },
              { x: 1.5215869999999967, y: 1.5365221999999932 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.5784830000000056, y: -1.562277800000004 },
              { x: 1.5215869999999967, y: -1.562277800000004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6026130000000052, y: 1.5365221999999932 },
              { x: -1.6026130000000052, y: 0.6983222000000069 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6026130000000052, y: -0.7240778000000034 },
              { x: -1.6026130000000052, y: -1.562277800000004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6026130000000052, y: 0.6729222000000021 },
              { x: -1.3955278102578177, y: 0.570256723115321 },
              { x: -1.2308116008042873, y: 0.40810541631279307 },
              { x: -1.1249090052417472, y: 0.20265684316703414 },
              { x: -1.0883929318913914, y: -0.025577799999993545 },
              { x: -1.1249090052417472, y: -0.25381244316703544 },
              { x: -1.2308116008042873, y: -0.45926101631278016 },
              { x: -1.3955278102578177, y: -0.6214123231153224 },
              { x: -1.6026130000000052, y: -0.7240778000000034 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=854098f5cce54b6caab82164a7d3deef&pn=C425927",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
