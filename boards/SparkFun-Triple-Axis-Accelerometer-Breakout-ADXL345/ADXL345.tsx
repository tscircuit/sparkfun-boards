import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["GND1"],
  pin3: ["NC"],
  pin4: ["GND2"],
  pin5: ["GND3"],
  pin6: ["VSS"],
  pin7: ["CS"],
  pin8: ["INT1"],
  pin9: ["INT2"],
  pin10: ["NC"],
  pin11: ["NC"],
  pin12: ["SDO"],
  pin13: ["SDA"],
  pin14: ["SCL"],
} as const

export const ADXL345BCCZ_RL7 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={1.6}
      pinLabels={pinLabels}
      schPinStyle={{
        pin6: { marginBottom: 0.3 },
        pin11: { marginBottom: 0.3 },
        pin7: { marginBottom: 0.3, marginTop: -0.4 },
        pin14: { marginBottom: 0.3 },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin1",
            "pin6",
            "pin3",
            "pin10",
            "pin11",
            "pin2",
            "pin4",
            "pin5",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin7", "pin12", "pin13", "pin14", "pin8", "pin9"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C9667"],
      }}
      manufacturerPartNumber="ADXL345BCCZ_RL7"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.99999600000001mm"
            pcbY="-1.409445999999889mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.1998960000001944mm"
            pcbY="-1.409445999999889mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.4000500000000784mm"
            pcbY="-1.409445999999889mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.4000499999999647mm"
            pcbY="-1.409445999999889mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.1998960000000807mm"
            pcbY="-1.409445999999889mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.9999959999998964mm"
            pcbY="-1.409445999999889mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="2.2974299999998493mm"
            pcbY="0mm"
            width="1.5450058mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.9999959999998964mm"
            pcbY="1.4094460000000026mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.1998960000000807mm"
            pcbY="1.4094460000000026mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.4000499999999647mm"
            pcbY="1.4094460000000026mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.4000500000000784mm"
            pcbY="1.4094460000000026mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.1998960000001944mm"
            pcbY="1.4094460000000026mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.99999600000001mm"
            pcbY="1.4094460000000026mm"
            width="0.44800520000000005mm"
            height="1.7690084mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.297429999999963mm"
            pcbY="0mm"
            width="1.5450058mm"
            height="0.5999987999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.5761949999999842, y: 0.5405120000000352 },
              { x: -2.5761949999999842, y: 1.5761970000000929 },
              { x: -2.4144986000001154, y: 1.5761970000000929 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5761949999999842, y: 0.5405120000000352 },
              { x: 2.5761949999999842, y: 1.5761970000000929 },
              { x: 2.4144986000000017, y: 1.5761970000000929 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.5761949999999842, y: -0.5405120000000352 },
              { x: -2.5761949999999842, y: -1.5761969999999792 },
              { x: -2.4144986000001154, y: -1.5761969999999792 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.5761949999999842, y: -0.5405120000000352 },
              { x: 2.5761949999999842, y: -1.5761969999999792 },
              { x: 2.4144986000000017, y: -1.5761969999999792 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a761e2d4c50e42c28a0df5e341dfbf4d&pn=C9667",
        rotationOffset: { x: 0, y: 0, z: -90 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
