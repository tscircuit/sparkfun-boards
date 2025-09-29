import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["VCC"],
  pin2: ["GNDC"],
  pin3: ["GPIO0"],
  pin4: ["N_INT"],
  pin5: ["SCL"],
  pin6: ["SDA"],
  pin7: ["VDD"],
  pin8: ["GND"],
  pin9: ["EN"],
  pin10: ["GPIO1"],
  pin11: ["GNDV"],
  pin12: ["VDDV"],
} as const

export const TMF8820_1AM = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      connections={{
        pin1: sel.U1.pin7,
        pin12: sel.U1.pin1,
        pin2: sel.U1.pin11,
        pin11: sel.U1.pin8,
        pin3: sel.net().GPIO0,
        pin10: sel.net().GPIO1,
        pin5: sel.net().SCL,
        pin6: sel.net().SDA,
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "EN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["N_INT", "GPIO0", "GPIO1", "SCL", "SDA"],
        },
      }}
      schPinStyle={{
        pin1: {
          bottomMargin: 0.18,
        },
        pin9: {
          bottomMargin: 0.18,
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C17336360"],
      }}
      manufacturerPartNumber="TMF8820_1AM"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.0500339999999966mm"
            pcbY="-0.6800088000000102mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-2.0500339999999966mm"
            pcbY="0.680008799999996mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.2301220000000086mm"
            pcbY="-0.6800088000000102mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-1.2301220000000086mm"
            pcbY="0.680008799999996mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.409955999999994mm"
            pcbY="-0.6800088000000102mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.409955999999994mm"
            pcbY="0.680008799999996mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.4099560000000082mm"
            pcbY="-0.6800088000000102mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.4099560000000082mm"
            pcbY="0.680008799999996mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.2301220000000086mm"
            pcbY="-0.6800088000000102mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.2301220000000086mm"
            pcbY="0.680008799999996mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.0500339999999966mm"
            pcbY="-0.6800088000000102mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="2.0500339999999966mm"
            pcbY="0.680008799999996mm"
            width="0.350012mm"
            height="0.49999899999999997mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 2.390825800000016, y: -0.9999472000000083 },
              { x: 2.429891000000012, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5709137999999996, y: -0.9999472000000083 },
              { x: 1.7092421999999914, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7507478000000134, y: -0.9999472000000083 },
              { x: 0.8893302000000034, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.069164200000003, y: -0.9999472000000083 },
              { x: 0.069164200000003, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8893302000000034, y: -0.9999472000000083 },
              { x: -0.7507477999999992, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7092422000000056, y: -0.9999472000000083 },
              { x: -1.5709137999999854, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.430094199999999, y: -0.9999472000000083 },
              { x: -2.3908258000000018, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.390775000000005, y: 1.0000487999999876 },
              { x: 2.429891000000012, y: 1.0000487999999876 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.5708629999999886, y: 1.0000487999999876 },
              { x: 1.7092930000000024, y: 1.0000487999999876 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7506970000000024, y: 1.0000487999999876 },
              { x: 0.8893810000000002, y: 1.0000487999999876 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.0692149999999998, y: 1.0000487999999876 },
              { x: 0.0692149999999856, y: 1.0000487999999876 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.889380999999986, y: 1.0000487999999876 },
              { x: -0.7506969999999882, y: 1.0000487999999876 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7092929999999882, y: 1.0000487999999876 },
              { x: -1.5708630000000028, y: 1.0000487999999876 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.430094199999999, y: 1.0000487999999876 },
              { x: -2.3907749999999908, y: 1.0000487999999876 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.429891000000012, y: 1.0000487999999876 },
              { x: 2.429891000000012, y: -0.9999472000000083 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.430094199999999, y: -0.9999472000000083 },
              { x: -2.430094199999999, y: 1.0000487999999876 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=61f7a9790a5d40ba85a5e4d2b3f458d8&pn=C17336360",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
