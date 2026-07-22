import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["CAP"],
  pin3: ["GND"],
  pin4: ["VDDIO"],
  pin5: ["INT2"],
  pin6: ["INT1"],
  pin7: ["SDA"],
  pin8: ["SCL"]
} as const

export const MPL3115A2R1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C54429"
  ]
}}
      manufacturerPartNumber="MPL3115A2R1"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.875028mm" pcbY="-1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.625094mm" pcbY="-1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.625094mm" pcbY="-1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.875028mm" pcbY="-1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.875028mm" pcbY="1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.625094mm" pcbY="1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.625094mm" pcbY="1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.875028mm" pcbY="1.299972mm" width="0.5999988mm" height="1.499997mm" shape="rect" />
<silkscreenpath route={[{"x":-2.4251157999999577,"y":-1.6999457999999947},{"x":-2.7001215999999886,"y":-1.6999457999999947},{"x":-2.7001215999999886,"y":1.7000474000000025},{"x":-2.4251157999999577,"y":1.7000474000000025}]} />
<silkscreenpath route={[{"x":2.424887200000029,"y":-1.6999457999999947},{"x":2.699867600000033,"y":-1.6999457999999947},{"x":2.699867600000033,"y":1.7000474000000025},{"x":2.424887200000029,"y":1.7000474000000025}]} />
<silkscreenpath route={[{"x":-2.6010869999999784,"y":-2.0192491999999973},{"x":-2.599816999999973,"y":-1.8592392800000397},{"x":-2.598546999999968,"y":-2.0192491999999973}]} />
<silkscreentext text="{NAME}" pcbX="0.011176mm" pcbY="3.050796mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.943923999999953,"y":2.3007960000000125},{"x":2.9662759999999935,"y":2.3007960000000125},{"x":2.9662759999999935,"y":-2.4410039999999853},{"x":-2.943923999999953,"y":-2.4410039999999853},{"x":-2.943923999999953,"y":2.3007960000000125}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C54429.obj?uuid=672fc546baaf493a9f668044721589aa",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C54429.step?uuid=672fc546baaf493a9f668044721589aa",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.00007619999999519678, z: 0 },
      }}
      {...props}
    />
  )
}