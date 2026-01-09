import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["SDA"],
  pin3: ["INT"],
  pin4: ["ADD"],
  pin5: ["SCL"],
  pin6: ["VDD"],
} as const

export const VEML6030 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C132182"],
      }}
      schPinArrangement={{
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin6"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin2", "pin5", "pin4", "pin3"],
        },
      }}
      manufacturerPartNumber="VEML6030"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin4"]}
            pcbX="0.8750299999999243mm"
            pcbY="-0.6498589999999922mm"
            width="0.6500114mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.8750299999999243mm"
            pcbY="-0.6498589999999922mm"
            width="0.6500114mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.8750299999999243mm"
            pcbY="0.000381000000061249mm"
            width="0.6500114mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.8750299999999243mm"
            pcbY="0.000381000000061249mm"
            width="0.6500114mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.8750299999999243mm"
            pcbY="0.6498590000001059mm"
            width="0.6500114mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.8750299999999243mm"
            pcbY="0.6490969999999834mm"
            width="0.6500114mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0460735999999997, y: 1.0207752000001165 },
              { x: 0.9859263999999257, y: 1.0207752000001165 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9859263999999257, y: -1.0112247999999227 },
              { x: -1.0460735999999997, y: -1.0112247999999227 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4524f635bbc740058d5f3b214807d25b&pn=C132182",
        rotationOffset: { x: 180, y: 0, z: 0 },
        positionOffset: {
          x: -0.0001015999999935957,
          y: 0.0001015999999935957,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
