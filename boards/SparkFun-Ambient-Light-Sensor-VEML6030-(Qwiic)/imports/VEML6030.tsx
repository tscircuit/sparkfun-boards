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
      manufacturerPartNumber="VEML6030"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin4"]}
            pcbX="0.87503mm"
            pcbY="-0.649859mm"
            width="0.6500114mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.87503mm"
            pcbY="-0.649859mm"
            width="0.6500114mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.87503mm"
            pcbY="0.000381mm"
            width="0.6500114mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.87503mm"
            pcbY="0.000381mm"
            width="0.6500114mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.87503mm"
            pcbY="0.649859mm"
            width="0.6500114mm"
            height="0.4500118mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.87503mm"
            pcbY="0.649097mm"
            width="0.6500114mm"
            height="0.4500118mm"
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
          <silkscreenpath
            route={[
              { x: -1.4050009999999702, y: 0.7800085999999737 },
              { x: -1.4084084105562624, y: 0.7541267472536219 },
              { x: -1.418398432826507, y: 0.7300087000000985 },
              { x: -1.4342902633026142, y: 0.7092980633028674 },
              { x: -1.455000899999959, y: 0.6934062328265327 },
              { x: -1.4791189472535962, y: 0.6834162105561745 },
              { x: -1.505000799999948, y: 0.680008799999996 },
              { x: -1.5308826527462998, y: 0.6834162105561745 },
              { x: -1.5550006999998232, y: 0.6934062328265327 },
              { x: -1.575711336697168, y: 0.7092980633028674 },
              { x: -1.5916031671732753, y: 0.7300087000000985 },
              { x: -1.6015931894438609, y: 0.7541267472536219 },
              { x: -1.6050006000000394, y: 0.7800085999999737 },
              { x: -1.6015931894438609, y: 0.8058904527464392 },
              { x: -1.5916031671732753, y: 0.8300085000000763 },
              { x: -1.575711336697168, y: 0.8507191366973075 },
              { x: -1.5550006999998232, y: 0.8666109671735285 },
              { x: -1.5308826527462998, y: 0.876600989443773 },
              { x: -1.505000799999948, y: 0.8800084000000652 },
              { x: -1.4791189472535962, y: 0.876600989443773 },
              { x: -1.455000899999959, y: 0.8666109671735285 },
              { x: -1.4342902633026142, y: 0.8507191366973075 },
              { x: -1.418398432826507, y: 0.8300085000000763 },
              { x: -1.4084084105562624, y: 0.8058904527464392 },
              { x: -1.4050009999999702, y: 0.7800085999999737 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.205994mm"
            pcbY="2.040257mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -1.852993999999967, y: 1.2902570000001106 },
              { x: 1.441005999999902, y: 1.2902570000001106 },
              { x: 1.441005999999902, y: -1.2417429999999285 },
              { x: -1.852993999999967, y: -1.2417429999999285 },
              { x: -1.852993999999967, y: 1.2902570000001106 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C132182.obj?uuid=4524f635bbc740058d5f3b214807d25b",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C132182.step?uuid=4524f635bbc740058d5f3b214807d25b",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.0001015999999935957,
          y: -0.00010160000010728254,
          z: -0.42,
        },
      }}
      {...props}
    />
  )
}
