import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "N_CS"],
  pin2: ["pin2", "D1_DO"],
  pin3: ["pin3", "D2_N_WP"],
  pin4: ["pin4", "GND"],
  pin5: ["pin5", "D0_DI"],
  pin6: ["pin6", "CLK"],
  pin7: ["pin7", "D3_N_HOLD"],
  pin8: ["pin8", "V3_3"],
  pin9: ["pin9", "EP"],
} as const

export const W25Q128JVPIQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={1.5}
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          pins: ["N_CS", "CLK", "D0_DI", "D1_DO", "D2_N_WP", "D3_N_HOLD"],
          direction: "top-to-bottom",
        },
        leftSide: {
          pins: ["V3_3", "GND"],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{ pin8: { marginBottom: 0.8 } }}
      supplierPartNumbers={{
        jlcpcb: ["C190862"],
      }}
      manufacturerPartNumber="W25Q128JVPIQ"
      footprint={
        <footprint>
          <silkscreentext pcbX={-3.4} text={`${props.name}`} />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.9050000000000864mm"
            pcbY="-3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.6349999999999909mm"
            pcbY="-3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.6349999999999909mm"
            pcbY="-3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.9049999999999727mm"
            pcbY="-3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.9050000000000864mm"
            pcbY="3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.6349999999999909mm"
            pcbY="3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.6349999999999909mm"
            pcbY="3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.9049999999999727mm"
            pcbY="3.0126940000000104mm"
            width="0.5809996mm"
            height="1.2755117999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0mm"
            width="4.2999914mm"
            height="3.3999932mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.5761949999999842, y: -3.0761939999999868 },
              { x: -2.5761949999999842, y: 3.0761939999999868 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5761949999999842, y: 3.0761939999999868 },
              { x: 2.5761949999999842, y: -3.0761939999999868 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=aeccbecea0df4df4a2a68061a89a4c8e&pn=C190862",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
