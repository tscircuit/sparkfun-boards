import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["ST"],
  pin3: ["GND1"],
  pin4: ["pin4"],
  pin5: ["GND2"],
  pin6: ["GND3"],
  pin7: ["GND4"],
  pin8: ["ZOUT"],
  pin9: ["pin9"],
  pin10: ["YOUT"],
  pin11: ["pin11"],
  pin12: ["XOUT"],
  pin13: ["pin13"],
  pin14: ["VS1"],
  pin15: ["VS2"],
  pin16: ["pin16"],
  pin17: ["EP"],
} as const

export const ADXL335BCPZ_RL7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={1.6}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin15", "pin14", "pin3", "pin5", "pin6", "pin7"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin12", "pin10", "pin8", "pin2"],
        },
      }}
      schPinStyle={{
        pin14: { marginBottom: 0.3 },
        pin8: { marginBottom: 0.7 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C34439"],
      }}
      manufacturerPartNumber="ADXL335BCPZ_RL7"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.9784060000000636mm"
            pcbY="0.9751060000000962mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.9784060000000636mm"
            pcbY="0.32486600000004273mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.9784060000000636mm"
            pcbY="-0.3251199999999699mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.9784060000000636mm"
            pcbY="-0.9751059999999825mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.9751059999999825mm"
            pcbY="-1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.32512000000008356mm"
            pcbY="-1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.32486600000004273mm"
            pcbY="-1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.9751059999999825mm"
            pcbY="-1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.9784060000001773mm"
            pcbY="-0.9751059999999825mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.9784060000001773mm"
            pcbY="-0.3251199999999699mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.9784060000001773mm"
            pcbY="0.32486600000004273mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="1.9784060000001773mm"
            pcbY="0.9751060000000962mm"
            width="1.0070084mm"
            height="0.3640074mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.9751059999999825mm"
            pcbY="1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.32486600000004273mm"
            pcbY="1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-0.32512000000008356mm"
            pcbY="1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.9751059999999825mm"
            pcbY="1.97840599999995mm"
            width="0.3640074mm"
            height="1.0070084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.7549875999999998mm"
            height="1.7549875999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.3475969999999506, y: 2.076297600000089 },
              { x: 2.0762975999999753, y: 2.076297600000089 },
              { x: 2.0762975999999753, y: 1.3475970000000643 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.3475969999999506, y: -2.076145199999928 },
              { x: 2.0762975999999753, y: -2.076145199999928 },
              { x: 2.0762975999999753, y: -1.3474445999999034 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.347444600000017, y: 2.076297600000089 },
              { x: -2.0761452000000418, y: 2.076297600000089 },
              { x: -2.0761452000000418, y: 1.3475970000000643 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.347444600000017, y: -2.076145199999928 },
              { x: -2.0761452000000418, y: -2.076145199999928 },
              { x: -2.0761452000000418, y: -1.3474445999999034 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=68903396014e48fb91a97afa470c7888&pn=C34439",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
