import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A0"],
  pin2: ["A1"],
  pin3: ["pin3"],
  pin4: ["SD0"],
  pin5: ["SC0"],
  pin6: ["SD1"],
  pin7: ["SC1"],
  pin8: ["SD2"],
  pin9: ["SC2"],
  pin10: ["SD3"],
  pin11: ["SC3"],
  pin12: ["VSS"],
  pin13: ["SD4"],
  pin14: ["SC4"],
  pin15: ["SD5"],
  pin16: ["SC5"],
  pin17: ["SD6"],
  pin18: ["SC6"],
  pin19: ["SD7"],
  pin20: ["SC7"],
  pin21: ["A2"],
  pin22: ["SCL"],
  pin23: ["SDA"],
  pin24: ["VDD"],
} as const

export const PCA9548APW_118 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C21198"],
      }}
      manufacturerPartNumber="PCA9548APW_118"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.324866mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.974852mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.624838mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.274824mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.92481mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.574796mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.324866mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="3.574796mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.925064mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.275078mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.625092mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.975106mm"
            pcbY="-3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-0.974852mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-1.624838mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-2.274824mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-2.92481mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-3.574796mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-0.324866mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.574796mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.925064mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.275078mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.625092mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.975106mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="0.324866mm"
            pcbY="3.0226mm"
            width="0.3999992mm"
            height="1.6500094mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 3.937000000000012, y: 1.9049999999999727 },
              { x: 3.937000000000012, y: -1.9050000000000864 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.8862000000001444, y: -1.7526000000000295 },
              { x: -3.8862000000001444, y: -1.9050000000000864 },
              { x: 3.937000000000012, y: -1.9050000000000864 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.8862000000001444, y: 1.7526000000000295 },
              { x: -3.8862000000001444, y: 1.9049999999999727 },
              { x: 3.937000000000012, y: 1.9049999999999727 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.8862000000001444, y: 0.48260000000004766 },
              { x: -3.8862000000001444, y: 1.7526000000000295 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.8862000000001444, y: -1.7526000000000295 },
              { x: -3.8862000000001444, y: -0.48260000000004766 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.8862000000001444, y: 0.4572000000001708 },
              { x: -3.8862000000001444, y: -0.48260000000004766 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0mm"
            pcbY="4.8354mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.1870000000001255, y: 4.08540000000005 },
              { x: 4.187000000000012, y: 4.08540000000005 },
              { x: 4.187000000000012, y: -4.110800000000154 },
              { x: -4.1870000000001255, y: -4.110800000000154 },
              { x: -4.1870000000001255, y: 4.08540000000005 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C21198.obj?uuid=4564b07290534b8ea1373eede2664361",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C21198.step?uuid=4564b07290534b8ea1373eede2664361",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  )
}
