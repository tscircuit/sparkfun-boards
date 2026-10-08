import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VDD"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const

export const SM04B_SRSS_TB_LF__SN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={0.7}
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "VDD", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C160404"],
      }}
      manufacturerPartNumber="SM04B-SRSS-TB(LF)(SN)"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.499872mm"
            pcbY="2.0005167mm"
            width="0.5999988mm"
            height="1.5500096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.49987mm"
            pcbY="2.0005167mm"
            width="0.5999988mm"
            height="1.5500096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.500378mm"
            pcbY="2.0000087mm"
            width="0.5999988mm"
            height="1.5500096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.50038mm"
            pcbY="2.0000087mm"
            width="0.5999988mm"
            height="1.5500096mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.800096mm"
            pcbY="-1.8750153mm"
            width="1.1999976mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="2.800096mm"
            pcbY="-1.8755233mm"
            width="1.1999976mm"
            height="1.7999964mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.019960400000059, y: -2.397467900000038 },
              { x: 1.8800063999999566, y: -2.397467900000038 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.9400266000000101, y: 1.8624676999997973 },
              { x: -3.019958400000064, y: 1.8624676999997973 },
              { x: -3.019958400000064, y: -0.7374763000001394 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.040000999999961, y: 1.8624676999997973 },
              { x: 2.9600143999999773, y: 1.8624676999997973 },
              { x: 2.9600143999999773, y: -0.7443089000000782 },
            ]}
          />
          <silkscreencircle
            pcbX="-2.49936mm"
            pcbY="1.3749147mm"
            radius="0.124968mm"
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.000254mm"
            pcbY="3.7879167mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.6500948000000335, y: 3.025521499999968 },
              { x: 3.6500948000000335, y: 3.025521499999968 },
              { x: 3.6500948000000335, y: -3.0255215000000817 },
              { x: -3.6500948000000335, y: -3.0255215000000817 },
              { x: -3.6500948000000335, y: 3.025521499999968 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C160404.obj?uuid=96ff162c26934a308e7bbf01d083d593",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C160404.step?uuid=96ff162c26934a308e7bbf01d083d593",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 1.5, y: 0.2875033000001168, z: -0.01 },
      }}
      {...props}
    />
  )
}
