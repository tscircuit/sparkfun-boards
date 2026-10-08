import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  PWR: ["PWR"],
  GND: ["GND"],
  GNDBREAK: ["GNDBREAK"],
} as const

export const PowerJackPthLock = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C16214"] }}
    manufacturerPartNumber="DC-005 2.0"
    footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="0.1498727mm" pcbY="-2.3000462mm" holeWidth="2.999994mm" holeHeight="0.7999984mm" outerWidth="3.499993mm" outerHeight="1.2999974mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="-3.1499937mm" pcbY="2.3000462mm" holeWidth="2.999994mm" holeHeight="0.999998mm" outerWidth="3.499993mm" outerHeight="1.499997mm" pcbRotation="270deg" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="3.1499937mm" pcbY="2.3000462mm" holeWidth="2.999994mm" holeHeight="0.999998mm" outerWidth="3.499993mm" outerHeight="1.499997mm" pcbRotation="90deg" shape="pill" />
<silkscreenpath route={[{"x":-10.650004099999933,"y":-2.2466554000000087},{"x":-2.485351899999955,"y":-2.2466554000000087}]} />
<silkscreenpath route={[{"x":-10.650004099999933,"y":6.753326599999923},{"x":3.549992900000234,"y":6.753326599999923},{"x":3.549992900000234,"y":4.287774000000013}]} />
<silkscreenpath route={[{"x":-10.650004099999933,"y":6.74497000000008},{"x":-10.650004099999933,"y":-2.2466299999998682}]} />
<silkscreenpath route={[{"x":3.549992900000234,"y":0.3121151999999938},{"x":3.549992900000234,"y":-2.2466554000000087},{"x":2.5523317000001953,"y":-2.2466554000000087}]} />
<silkscreenpath route={[{"x":-1.8523330999997825,"y":-2.2466554000000087},{"x":-2.485351899999955,"y":-2.2466554000000087}]} />
<silkscreenpath route={[{"x":-7.894205699999816,"y":6.7449446000000535},{"x":-7.894205699999816,"y":-2.2550373999998783}]} />
<silkscreentext text="{NAME}" pcbX="-3.5622357mm" pcbY="7.7778122mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-10.690999699999907,"y":6.7580001999999695},{"x":-7.896999699999924,"y":6.7580001999999695},{"x":-7.896999699999924,"y":-2.2589997999999696},{"x":-10.690999699999907,"y":-2.2589997999999696},{"x":-10.690999699999907,"y":6.7580001999999695}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-10.899978699999792,"y":7.024992800000064},{"x":4.149992200000042,"y":7.024992800000064},{"x":4.149992200000042,"y":-3.200044899999966},{"x":-10.899978699999792,"y":-3.200044899999966},{"x":-10.899978699999792,"y":7.024992800000064}]} />
      </footprint>}
    cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C16214.obj?uuid=4444c9a88a554e93b2b5bfe4465af70b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C16214.step?uuid=4444c9a88a554e93b2b5bfe4465af70b",
        pcbRotationOffset: 270,
        modelOriginPosition: { x: 2.2750086000000693, y: 3.649992699999757, z: -0.0000075999999999964984 },
      }}
    {...props}
  />
)
