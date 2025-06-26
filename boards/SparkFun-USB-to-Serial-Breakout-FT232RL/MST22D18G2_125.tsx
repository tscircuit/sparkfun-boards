import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
} as const

export const MST22D18G2_125 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <switch
      type="spdt"
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2906280"],
      }}
      connections={{
        pin1: "net.VCCIO",
        pin2: "net.V3_3",
        pin3: "net.VCC",
      }}
      manufacturerPartNumber="MST22D18G2_125"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="-2.8497529999998505mm"
            width="1.199896mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.4998679999998785mm"
            pcbY="-2.8500069999998914mm"
            width="1.199896mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.499867999999992mm"
            pcbY="2.850007000000005mm"
            width="1.199896mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="2.850007000000005mm"
            width="1.199896mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="2.4998679999998785mm"
            pcbY="2.850007000000005mm"
            width="1.199896mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.499867999999992mm"
            pcbY="-2.8500069999998914mm"
            width="1.199896mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.5400000000000773, y: -0.5078730000000178 },
              { x: -2.5400000000000773, y: 0.5081270000000586 },
              { x: -1.5240000000001146, y: 0.5081270000000586 },
              { x: -1.5240000000001146, y: -0.5078730000000178 },
              { x: -2.5400000000000773, y: -0.5078730000000178 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.048000000000002, y: -1.2698729999999614 },
              { x: -3.048000000000002, y: 1.270127000000116 },
              { x: 3.048000000000002, y: 1.270127000000116 },
              { x: 3.048000000000002, y: -1.2698729999999614 },
              { x: -3.048000000000002, y: -1.2698729999999614 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.599965399999974, y: 1.8001487999999881 },
              { x: -3.325571200000013, y: 1.8001487999999881 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.6744188000000122, y: 1.8001487999999881 },
              { x: -0.8255507999999736, y: 1.8001487999999881 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8255507999999736, y: 1.8001487999999881 },
              { x: 1.6744441999999253, y: 1.8001487999999881 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.3255457999999862, y: 1.8001487999999881 },
              { x: 4.571999999999889, y: 1.77800000000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.571999999999889, y: -1.777872999999886 },
              { x: 3.3194498000000294, y: -1.777872999999886 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.6805401999999958, y: -1.777872999999886 },
              { x: 0.8194547999999031, y: -1.777872999999886 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8194548000001305, y: -1.777872999999886 },
              { x: -1.6805401999999958, y: -1.777872999999886 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.3194497999999157, y: -1.777872999999886 },
              { x: -4.599965399999974, y: -1.777872999999886 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.599965399999974, y: 1.8001487999999881 },
              { x: -4.599965399999974, y: -1.7779999999999063 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.571999999999889, y: -1.777872999999886 },
              { x: 4.571999999999889, y: 1.8001487999999881 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a98562e0d24740e1809e54f73242e180&pn=C2906280",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
