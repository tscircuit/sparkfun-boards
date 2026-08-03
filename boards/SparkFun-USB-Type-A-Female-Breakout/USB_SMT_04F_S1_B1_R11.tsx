import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_N"],
  pin3: ["D_P"],
  pin4: ["GND"],
  pin5: ["S2"],
  pin6: ["S1"],
} as const

export const USB_SMT_04F_S1_B1_R11 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={0.8}
      schHeight={1.5}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["D_P", "D_N", "VBUS", "GND"],
        },
        bottomSide: {
          direction: "top-to-bottom",
          pins: ["S2", "S1"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C718023"],
      }}
      manufacturerPartNumber="USB_SMT_04F_S1_B1_R11"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin5"]}
            pcbX="-6.425057mm"
            pcbY="-2.7750325mm"
            holeWidth="0.8499856mm"
            holeHeight="2.4499824mm"
            outerWidth="1.3999972mm"
            outerHeight="2.999994mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="6.425057mm"
            pcbY="-2.7750325mm"
            holeWidth="0.8499856mm"
            holeHeight="2.4499824mm"
            outerWidth="1.3999972mm"
            outerHeight="2.999994mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.499993mm"
            pcbY="1.3250355mm"
            width="0.999998mm"
            height="2.999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.000125mm"
            pcbY="1.3250355mm"
            width="0.999998mm"
            height="2.999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="1.000125mm"
            pcbY="1.3250355mm"
            width="0.999998mm"
            height="2.999994mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="3.499993mm"
            pcbY="1.3250355mm"
            width="0.999998mm"
            height="2.999994mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 3.70842540000001, y: -5.881173099999955 },
              { x: 3.124225400000114, y: -10.935747699999979 },
              { x: 1.2699999999999818, y: -10.935747699999979 },
              { x: 0.6883400000000393, y: -5.888818499999957 },
              { x: 1.0211054000000104, y: -5.863393099999939 },
              { x: 1.6764254000000847, y: -10.427747700000054 },
              { x: 2.616225399999962, y: -10.427747700000054 },
              { x: 3.4036508000000367, y: -5.830398500000001 },
              { x: 3.70842540000001, y: -5.881173099999955 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.1176508000000922, y: -6.795547700000043 },
              { x: 3.2004254000000856, y: -6.795547700000043 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.4478000000000293, y: -8.548173099999985 },
              { x: 2.895650800000112, y: -8.548173099999985 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.0225745999998708, y: -8.598973099999967 },
              { x: -1.5747746000000689, y: -8.598973099999967 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.352774599999975, y: -6.8463985000000775 },
              { x: -1.2699999999998681, y: -6.8463985000000775 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7619999999999436, y: -5.93197310000005 },
              { x: -1.066774599999917, y: -5.881173099999955 },
              { x: -1.8541999999999916, y: -10.478547700000036 },
              { x: -2.793999999999869, y: -10.478547700000036 },
              { x: -3.4492692000000034, y: -5.914167700000007 },
              { x: -3.782034600000088, y: -5.939593099999911 },
              { x: -3.2003491999998914, y: -10.986547700000074 },
              { x: -1.3462000000000671, y: -10.986547700000074 },
              { x: -0.7619999999999436, y: -5.93197310000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.231132000000116, y: 0.32097349999992275 },
              { x: 6.4499998000000005, y: 0.32097349999992275 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.7312640000000101, y: 0.32097349999992275 },
              { x: 2.768854000000033, y: 0.32097349999992275 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.2689860000000408, y: 0.32097349999992275 },
              { x: 0.2689860000001545, y: 0.32097349999992275 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.7688539999999193, y: 0.32097349999992275 },
              { x: -1.7312640000000101, y: 0.32097349999992275 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.4499998000000005, y: 0.32097349999992275 },
              { x: -4.231132000000002, y: 0.32097349999992275 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.4499998000000005, y: -1.0441495000000032 },
              { x: 6.4499998000000005, y: 0.32097349999992275 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 6.4499998000000005, y: -13.175037099999827 },
              { x: 6.4499998000000005, y: -4.505763099999967 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.4499998000000005, y: -1.0441495000000032 },
              { x: -6.4499998000000005, y: 0.32097349999992275 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.4499998000000005, y: -13.175037099999827 },
              { x: -6.4499998000000005, y: -4.505763099999967 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.4499998000000005, y: -13.175037099999827 },
              { x: 6.4499998000000005, y: -13.175037099999827 },
            ]}
          />
          <courtyardoutline
            outline={[
              { x: -7.437310999999909, y: 3.0721115000000054 },
              { x: 7.464488999999958, y: 3.0721115000000054 },
              { x: 7.464488999999958, y: -13.429888499999947 },
              { x: -7.437310999999909, y: -13.429888499999947 },
              { x: -7.437310999999909, y: 3.0721115000000054 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C718023.obj?uuid=3e50fbf3f37c465bbdbb28024e6007b6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C718023.step?uuid=3e50fbf3f37c465bbdbb28024e6007b6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 12.187981099999956, z: -4.290004 },
      }}
      {...props}
    />
  )
}
