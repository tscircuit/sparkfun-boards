import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["pin2"],
  pin3: ["VDD"],
  pin4: ["ANODE"],
  pin5: ["pin5"],
  pin6: ["INT"],
  pin7: ["SDAT"],
  pin8: ["SCLK"],
} as const

const pinAttributes = {
  pin1: { requiresGround: true },
  pin3: { requiresPower: true },
} as const

export const VCNL4040M3OE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
        jlcpcb: ["C142526"],
      }}
      manufacturerPartNumber="VCNL4040M3OE"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.612392mm"
            pcbY="-1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.537464mm"
            pcbY="-1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.537464mm"
            pcbY="-1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.612392mm"
            pcbY="-1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.612392mm"
            pcbY="1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.537464mm"
            pcbY="1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.537464mm"
            pcbY="1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.612392mm"
            pcbY="1.038098mm"
            width="0.6020054mm"
            height="1.1260074mm"
            radius="0.3010027mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: -2.0761960000000954, y: -1.0761979999999767 },
              { x: -2.0761960000000954, y: 1.0761980000000904 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.0761959999999817, y: -1.0761979999999767 },
              { x: 2.0761959999999817, y: 1.0761980000000904 },
            ]}
          />
          <silkscreencircle
            pcbX="-1.612392mm"
            pcbY="-1.900936mm"
            radius="0.124968mm"
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127mm"
            pcbY="2.2954mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.24999600000001, y: 1.8511016999999583 },
              { x: 2.2499959999998964, y: 1.8511016999999583 },
              { x: 2.2499959999998964, y: -1.8511016999999583 },
              { x: -2.24999600000001, y: -1.8511016999999583 },
              { x: -2.24999600000001, y: 1.8511016999999583 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C142526.obj?uuid=263d838dce3c462a9139718e05588e07",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C142526.step?uuid=263d838dce3c462a9139718e05588e07",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 0, y: 0, z: -0.03 },
      }}
      {...props}
    />
  )
}
