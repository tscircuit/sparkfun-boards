import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["CATHODE_SEN"],
  pin3: ["VDD"],
  pin4: ["ANODE"],
  pin5: ["CATHODE_LED"],
  pin6: ["INT"],
  pin7: ["SDA"],
  pin8: ["SCL"],
} as const

export const VCNL4040M3OE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        pin2: { marginTop: "0.15" },
        pin3: { marginBottom: "1.6" },
        pin4: { marginBottom: "0.3" },
        pin8: { marginBottom: "0.2" },
        pin6: { marginBottom: "0.2" },
      }}
      schWidth={2.5}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin3", "pin1"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin4", "pin7", "pin8", "pin6", "pin5", "pin2"],
        },
      }}
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
          <silkscreenpath
            route={[
              { x: -1.487423999999919, y: -1.9009360000000015 },
              { x: -1.491682181340252, y: -1.9332800984283267 },
              { x: -1.50416653733987, y: -1.963420000000042 },
              { x: -1.5240262797688047, y: -1.9893017202313104 },
              { x: -1.5499079999999594, y: -2.0091614626601313 },
              { x: -1.5800479015716746, y: -2.0216458186596356 },
              { x: -1.6123919999999998, y: -2.0259039999999686 },
              { x: -1.644736098428325, y: -2.0216458186596356 },
              { x: -1.6748760000000402, y: -2.0091614626601313 },
              { x: -1.7007577202313087, y: -1.9893017202313104 },
              { x: -1.7206174626601296, y: -1.963420000000042 },
              { x: -1.7331018186597476, y: -1.9332800984283267 },
              { x: -1.7373600000000806, y: -1.9009360000000015 },
              { x: -1.7331018186597476, y: -1.8685919015715626 },
              { x: -1.7206174626601296, y: -1.8384519999999611 },
              { x: -1.7007577202313087, y: -1.812570279768579 },
              { x: -1.6748760000000402, y: -1.792710537339758 },
              { x: -1.644736098428325, y: -1.7802261813402538 },
              { x: -1.6123919999999998, y: -1.7759679999999207 },
              { x: -1.5800479015716746, y: -1.7802261813402538 },
              { x: -1.5499079999999594, y: -1.792710537339758 },
              { x: -1.5240262797688047, y: -1.812570279768579 },
              { x: -1.50416653733987, y: -1.8384519999999611 },
              { x: -1.491682181340252, y: -1.8685919015715626 },
              { x: -1.487423999999919, y: -1.9009360000000015 },
            ]}
          />
          <courtyardoutline
            outline={[
              { x: -2.3327999999999065, y: 1.5453999999999724 },
              { x: 2.3074000000000296, y: 1.5453999999999724 },
              { x: 2.3074000000000296, y: -2.2819999999999254 },
              { x: -2.3327999999999065, y: -2.2819999999999254 },
              { x: -2.3327999999999065, y: 1.5453999999999724 },
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
