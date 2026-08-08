import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["INT", "ALERT"],
  pin3: ["VDD", "V3_3"],
  pin4: ["ADDR"],
  pin5: ["GND"],
  pin6: ["SDA"],
  pin7: ["EP", "GND_EP"],
} as const

/**
 * STMicroelectronics STTS22HTR in SparkFun's UDFN-6L land pattern.
 *
 * The exposed pad is represented as pin 7 so it can be tied to GND, matching
 * the official SparkFun Eagle library and board design.
 */
export const STTS22H = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="STTS22HTR"
    supplierPartNumbers={{
      jlcpcb: ["C2969838"],
    }}
    pinLabels={pinLabels}
    schWidth={2.4}
    schHeight={1.45}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VDD", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT", "ADDR", "SDA", "SCL"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["EP"],
      },
    }}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-0.89mm"
          pcbY="0.65mm"
          width="0.7mm"
          height="0.27mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="-0.89mm"
          pcbY="0mm"
          width="0.7mm"
          height="0.27mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin3"]}
          pcbX="-0.89mm"
          pcbY="-0.65mm"
          width="0.7mm"
          height="0.27mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin4"]}
          pcbX="0.89mm"
          pcbY="-0.65mm"
          width="0.7mm"
          height="0.27mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin5"]}
          pcbX="0.89mm"
          pcbY="0mm"
          width="0.7mm"
          height="0.27mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin6"]}
          pcbX="0.89mm"
          pcbY="0.65mm"
          width="0.7mm"
          height="0.27mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin7"]}
          pcbX="0.01mm"
          pcbY="0mm"
          width="0.65mm"
          height="1.45mm"
          shape="rect"
        />

        <silkscreenpath
          route={[
            { x: -0.99, y: 1.05 },
            { x: 1.01, y: 1.05 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -0.99, y: -1.04 },
            { x: 1.01, y: -1.04 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: -1.2, y: 0.88 },
            { x: -1.2, y: 1.18 },
            { x: -0.9, y: 1.18 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
)
