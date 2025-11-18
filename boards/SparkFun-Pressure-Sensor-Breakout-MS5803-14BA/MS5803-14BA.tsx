import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SCLK"],
  pin2: ["GND"],
  pin3: ["CSB"],
  pin4: ["NC"],
  pin5: ["VDD"],
  pin6: ["PS"],
  pin7: ["pin7"],
  pin8: ["SDO"],
} as const

export const MS580314BA01_00 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin5", "pin7", "pin1", "pin8", "pin2"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin3"],
        },
      }}
      schPinStyle={{
        pin6: { marginBottom: 0.6 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C7235082"],
      }}
      manufacturerPartNumber="MS580314BA01_00"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin2"]}
            pcbX="2.6747470000001385mm"
            pcbY="-0.6499860000000126mm"
            width="2.2499320000000003mm"
            height="0.899922mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="2.6747470000001385mm"
            pcbY="-1.8999199999999519mm"
            width="2.2499320000000003mm"
            height="0.899922mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.6750009999998383mm"
            pcbY="-1.8999199999999519mm"
            width="2.2499320000000003mm"
            height="0.899922mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.6750009999998383mm"
            pcbY="-0.6499860000000126mm"
            width="2.2499320000000003mm"
            height="0.899922mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="2.6747470000001385mm"
            pcbY="1.8999200000000656mm"
            width="2.2499320000000003mm"
            height="0.899922mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="2.3999189999999544mm"
            pcbY="0.6499859999998989mm"
            width="2.800096mm"
            height="0.899922mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.6750009999998383mm"
            pcbY="0.6499859999998989mm"
            width="2.2499320000000003mm"
            height="0.899922mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.6750009999998383mm"
            pcbY="1.8999200000000656mm"
            width="2.2499320000000003mm"
            height="0.899922mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.110128399999894, y: 2.5810209999999643 },
              { x: -3.110128399999894, y: 3.1899859999999762 },
              { x: 3.099866800000086, y: 3.1999936000000844 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.099866800000086, y: -2.5810209999999643 },
              { x: 3.099866800000086, y: -3.1999935999999707 },
              { x: -3.110128399999894, y: -3.1999935999999707 },
              { x: -3.110128399999894, y: -2.5810209999999643 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.099866800000086, y: 3.1999936000000844 },
              { x: 3.099866800000086, y: 2.5810209999999643 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4f1da0d752ef4401a1cb5c23278b04c7&pn=C7235082",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: -0.00012699999979304266, y: 0, z: 3 },
      }}
      {...props}
    />
  )
}
