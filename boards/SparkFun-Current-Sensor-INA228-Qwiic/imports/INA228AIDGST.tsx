import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["A0"],
  pin3: ["ALERT"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["VS"],
  pin7: ["GND"],
  pin8: ["VBUS"],
  pin9: ["pin9"],
  pin10: ["IN_POS"],
} as const

export const INA228AIDGST = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2862904"],
      }}
      manufacturerPartNumber="INA228AIDGST"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.999871mm"
            pcbY="-2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.499999mm"
            pcbY="-2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.000127mm"
            pcbY="-2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.499999mm"
            pcbY="-2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.000125mm"
            pcbY="-2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.999871mm"
            pcbY="2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.499999mm"
            pcbY="2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.000127mm"
            pcbY="2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-0.499999mm"
            pcbY="2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-1.000125mm"
            pcbY="2.350008mm"
            width="0.2999994mm"
            height="1.2999974mm"
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
          <silkscreenpath
            route={[
              { x: -1.4237969999999933, y: -1.9812000000000012 },
              { x: -1.427207007008306, y: -2.0071015747576837 },
              { x: -1.437204641690883, y: -2.031238000000002 },
              { x: -1.4531085817659886, y: -2.0519644182340073 },
              { x: -1.4738350000000082, y: -2.067868358309127 },
              { x: -1.4979714252423264, y: -2.07786599299169 },
              { x: -1.5238729999999947, y: -2.0812759999999884 },
              { x: -1.5497745747576914, y: -2.07786599299169 },
              { x: -1.5739110000000096, y: -2.067868358309127 },
              { x: -1.5946374182340293, y: -2.0519644182340073 },
              { x: -1.6105413583091348, y: -2.031238000000002 },
              { x: -1.6205389929917118, y: -2.0071015747576837 },
              { x: -1.6239490000000103, y: -1.9812000000000012 },
              { x: -1.6205389929917118, y: -1.9552984252423187 },
              { x: -1.6105413583091348, y: -1.9311620000000005 },
              { x: -1.5946374182340293, y: -1.9104355817659808 },
              { x: -1.5739110000000096, y: -1.8945316416908753 },
              { x: -1.5497745747576914, y: -1.8845340070082983 },
              { x: -1.5238729999999947, y: -1.8811239999999856 },
              { x: -1.4979714252423264, y: -1.8845340070082983 },
              { x: -1.4738350000000082, y: -1.8945316416908753 },
              { x: -1.4531085817659886, y: -1.9104355817659808 },
              { x: -1.437204641690883, y: -1.9311620000000005 },
              { x: -1.427207007008306, y: -1.9552984252423187 },
              { x: -1.4237969999999933, y: -1.9812000000000012 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.053213mm"
            pcbY="4.004312mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.8780129999999957, y: 3.2543119999999988 },
              { x: 1.7715869999999967, y: 3.2543119999999988 },
              { x: 1.7715869999999967, y: -3.240088 },
              { x: -1.8780129999999957, y: -3.240088 },
              { x: -1.8780129999999957, y: 3.2543119999999988 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862904.obj?uuid=854098f5cce54b6caab82164a7d3deef",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C2862904.step?uuid=854098f5cce54b6caab82164a7d3deef",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.000012699999999199463, y: 0, z: -0.149083 },
      }}
      {...props}
    />
  )
}
