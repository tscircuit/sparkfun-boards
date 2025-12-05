import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["MH1"],
  pin11: ["MH2"]
} as const

export const DS1037_09MNAKT74_0CC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C75750"
  ]
}}
      manufacturerPartNumber="DS1037_09MNAKT74_0CC"
      footprint={<footprint>
        <platedhole  portHints={["pin10"]} pcbX="-12.49997499999995mm" pcbY="0mm" outerDiameter="4.9999899999999995mm" holeDiameter="3.2500316000000002mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-4.154804999999897mm" pcbY="-1.420114000000126mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-1.3846810000000005mm" pcbY="-1.420114000000126mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="1.3851890000000822mm" pcbY="-1.420114000000126mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="4.155313000000092mm" pcbY="-1.420114000000126mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-5.539867000000072mm" pcbY="1.4198599999999715mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-2.7697429999999486mm" pcbY="1.4198599999999715mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="2.77025100000003mm" pcbY="1.4198599999999715mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="5.540121000000113mm" pcbY="1.4198599999999715mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<platedhole  portHints={["pin11"]} pcbX="12.49997499999995mm" pcbY="0mm" outerDiameter="4.9999899999999995mm" holeDiameter="3.2500316000000002mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="0.00012700000013410317mm" pcbY="1.4198599999999715mm" outerDiameter="1.7999964mm" holeDiameter="1.1000231999999999mm" shape="circle" />
<silkscreenpath route={[{"x":14.570176600000195,"y":-9.500184200000035},{"x":14.570176600000195,"y":-15.500197600000092}]} />
<silkscreenpath route={[{"x":14.540153800000098,"y":-15.500197600000092},{"x":10.430205200000046,"y":-15.500197600000092},{"x":10.430205200000046,"y":-9.500184200000035}]} />
<silkscreenpath route={[{"x":-14.569439999999872,"y":-9.499955600000021},{"x":-14.569439999999872,"y":-15.49946100000011},{"x":-10.459745399999974,"y":-15.49946100000011}]} />
<silkscreenpath route={[{"x":-10.429849599999898,"y":-9.500184200000035},{"x":-10.429849599999898,"y":-15.500197600000092}]} />
<silkscreenpath route={[{"x":-8.36980799999992,"y":-9.500184200000035},{"x":-8.36980799999992,"y":-15.500197600000092},{"x":8.380171200000063,"y":-15.500197600000092},{"x":8.380171200000063,"y":-9.500184200000035}]} />
<silkscreenpath route={[{"x":0.005181600000128128,"y":-14.780183800000032},{"x":0.005181600000128128,"y":-15.48023319999993}]} />
<silkscreenpath route={[{"x":15.400197800000115,"y":-9.500184200000035},{"x":15.400197800000115,"y":2.999816199999941},{"x":-15.39984220000008,"y":2.999816199999941},{"x":-15.39984220000008,"y":-9.500184200000035},{"x":15.400197800000115,"y":-9.500184200000035}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=229279761a4c4689a96f326afb707ff8&pn=C75750",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0.0001015999999935957, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}