import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCL"],
  pin2: ["GND"],
  pin3: ["ALERT"],
  pin4: ["ADD0"],
  pin5: ["VCC"],
  pin6: ["SDA"],
} as const

export const TMP102AIDRLR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinStyle={{
        pin5: { bottomMargin: 0.8 },
        pin1: { bottomMargin: 0.4 },
      }}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["SDA", "SCL", "ALERT", "ADD0"],
        },
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C99269"],
      }}
      manufacturerPartNumber="TMP102AIDRLR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.7499858000000046mm"
            pcbY="-0.00012699999999199463mm"
            width="0.5999987999999999mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.7499857999999904mm"
            pcbY="-0.00012699999999199463mm"
            width="0.5999987999999999mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.7499857999999904mm"
            pcbY="0.4999989999999883mm"
            width="0.5999987999999999mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="0.7499857999999904mm"
            pcbY="-0.4999990000000025mm"
            width="0.5999987999999999mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.7499858000000046mm"
            pcbY="0.4999989999999883mm"
            width="0.5999987999999999mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.7499858000000046mm"
            pcbY="-0.4999990000000025mm"
            width="0.5999987999999999mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -0.4751578000000052, y: -0.7874762000000004 },
              { x: 0.4748021999999992, y: -0.7874762000000004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.4751578000000052, y: 0.7873237999999958 },
              { x: 0.4748021999999992, y: 0.7873237999999958 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=ec2270bac0544bf5afe06b24e8356512&pn=C99269",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
