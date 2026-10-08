import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
} as const

export const Fuse20mm = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    supplierPartNumbers={{ jlcpcb: ["C3131"] }}
    manufacturerPartNumber="5x20 BLX-A型 保险丝支架 XC-7"
    footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-10.999978mm" pcbY="0mm" holeWidth="0.5999988mm" holeHeight="1.6999966mm" outerWidth="0.999998mm" outerHeight="2.1999956mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="10.999978mm" pcbY="0mm" holeWidth="0.5999988mm" holeHeight="1.6999966mm" outerWidth="0.999998mm" outerHeight="2.1999956mm" shape="pill" />
<silkscreenpath route={[{"x":-14.199971599999998,"y":-4.750003200000009},{"x":-13.499973000000011,"y":-4.750003200000009}]} />
<silkscreenpath route={[{"x":-14.199971599999998,"y":4.750003200000009},{"x":-14.199971599999998,"y":-4.750003200000009}]} />
<silkscreenpath route={[{"x":-13.499973000000011,"y":4.750003200000009},{"x":-14.199971599999998,"y":4.750003200000009}]} />
<silkscreenpath route={[{"x":14.199971600000012,"y":4.750003200000009},{"x":13.499972999999997,"y":4.750003200000009}]} />
<silkscreenpath route={[{"x":13.499972999999997,"y":-4.750003200000009},{"x":14.199971600000012,"y":-4.750003200000009},{"x":14.199971600000012,"y":4.750003200000009}]} />
<silkscreenpath route={[{"x":13.499972999999997,"y":4.750003200000009},{"x":-13.499973000000011,"y":4.750003200000009},{"x":-13.499973000000011,"y":-4.750003200000009},{"x":13.499972999999997,"y":-4.750003200000009},{"x":13.499972999999997,"y":4.750003200000009}]} />
<silkscreenpath route={[{"x":-8.999982000000017,"y":2.4999949999999984},{"x":-7.4999850000000094,"y":2.4999949999999984},{"x":-7.4999850000000094,"y":-2.4999949999999984},{"x":-8.999982000000017,"y":-2.4999949999999984},{"x":-8.999982000000017,"y":2.4999949999999984}]} />
<silkscreenpath route={[{"x":-10.542778000000013,"y":3.7508180000000095},{"x":10.557001999999997,"y":3.7508180000000095},{"x":10.557001999999997,"y":-3.6492180000000047},{"x":-10.542778000000013,"y":-3.6492180000000047},{"x":-10.542778000000013,"y":3.7508180000000095}]} />
<silkscreentext text="{NAME}" pcbX="-0.030226mm" pcbY="5.7498mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-8.999982000000017,"y":-2.4999949999999984},{"x":-7.4999850000000094,"y":-2.4999949999999984},{"x":-7.4999850000000094,"y":2.4999949999999984},{"x":-8.999982000000017,"y":2.4999949999999984},{"x":-8.999982000000017,"y":-2.4999949999999984}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-13.849972800000003,"y":4.999977799999996},{"x":13.649973199999991,"y":4.999977799999996},{"x":13.649973199999991,"y":-5.000003200000009},{"x":-13.849972800000003,"y":-5.000003200000009},{"x":-13.849972800000003,"y":4.999977799999996}]} />
      </footprint>}
    cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3131.obj?uuid=a8f2a1ef2fd7465c8dcc7fd0cc18faea",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3131.step?uuid=a8f2a1ef2fd7465c8dcc7fd0cc18faea",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.0999998000000204, y: 0.0005126999999993664, z: -0.000008000000000230045 },
      }}
    {...props}
  />
)
