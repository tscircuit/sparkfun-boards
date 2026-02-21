import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: "COM",
  pin2: "CHAN7",
  pin3: "CHAN6",
  pin4: "CHAN5",
  pin5: "CHAN4",
  pin6: "CHAN3",
  pin7: "CHAN2",
  pin8: "CHAN1",
  pin9: "CHAN0",
  pin10: "S0",
  pin11: "S1",
  pin12: "GND",
  pin13: "S3",
  pin14: "S2",
  pin15: "N_EN",
  pin16: "CHAN15",
  pin17: "CHAN14",
  pin18: "CHAN13",
  pin19: "CHAN12",
  pin20: "CHAN11",
  pin21: "CHAN10",
  pin22: "CHAN9",
  pin23: "CHAN8",
  pin24: "VCC",
} as const

export const CD74HC4067 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={2}
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "CHAN0",
            "CHAN1",
            "CHAN2",
            "CHAN3",
            "CHAN4",
            "CHAN5",
            "CHAN6",
            "CHAN7",
            "CHAN8",
            "CHAN9",
            "CHAN10",
            "CHAN11",
            "CHAN12",
            "CHAN13",
            "CHAN14",
            "CHAN15",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "N_EN", "S0", "S1", "S2", "S3", "COM", "GND"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C98457"],
      }}
      manufacturerPartNumber="CD74HC4067SM96"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-3.575050000000033mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.925064000000134mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.2750780000000077mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.6250920000001088mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.9751059999999825mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.32486600000004273mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.32512000000008356mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.9751059999999825mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.625091999999995mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.2750780000000077mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.9250640000000203mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="3.5750499999999192mm"
            pcbY="-3.562095999999883mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-3.575050000000033mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-2.925064000000134mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-2.2750780000000077mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-1.6250920000001088mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-0.9751059999999825mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-0.32486600000004273mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="0.32512000000008356mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="0.9751059999999825mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="1.625091999999995mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.2750780000000077mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.9250640000000203mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.5750499999999192mm"
            pcbY="3.562095999999997mm"
            width="0.30800039999999995mm"
            height="1.3240004mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -3.976192200000014, y: -2.5713943999999174 },
              { x: -3.976192200000014, y: 2.571394400000031 },
              { x: 3.976192200000014, y: 2.571394400000031 },
              { x: 3.976192200000014, y: -2.5713943999999174 },
              { x: -3.976192200000014, y: -2.5713943999999174 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=44cbf0bf34924619a9a3f811509fb70e&pn=C98457",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
