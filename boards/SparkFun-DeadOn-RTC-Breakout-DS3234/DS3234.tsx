import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["32kHz"],
  pin4: ["VCC"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["GND"],
  pin16: ["VBAT"],
  pin17: ["DIN"],
  pin18: ["SCLK2"],
  pin19: ["DOUT"],
  pin20: ["SCLK1"],
} as const

export const DS3234S_T_R = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={1.8}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin4",
            "pin18",
            "pin20",
            "pin19",
            "pin17",
            "pin1",
            "pin5",
            "pin6",
            "pin3",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin16",
            "pin2",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
            "pin11",
            "pin12",
            "pin13",
            "pin14",
            "pin15",
          ],
        },
      }}
      schPinStyle={{
        pin4: { marginBottom: 0.3 },
        pin1: { marginBottom: 0.3 },
        pin5: { marginBottom: 0.3 },
        pin16: { marginBottom: 0.3 },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C2651511"],
      }}
      manufacturerPartNumber="DS3234S_T_R"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-5.715000000000032mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-4.44500000000005mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-3.175000000000068mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.9050000000000864mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.6349999999999909mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.6349999999999909mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.9049999999999727mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="3.1749999999999545mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="4.444999999999936mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="5.714999999999918mm"
            pcbY="-4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-5.715000000000032mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-4.44500000000005mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-3.175000000000068mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-1.9050000000000864mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.6349999999999909mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.6349999999999909mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.9049999999999727mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.1749999999999545mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="4.444999999999936mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="5.714999999999918mm"
            pcbY="4.729987999999935mm"
            width="0.5949949999999999mm"
            height="2.3599902mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -6.4762126000000535, y: -3.3214056000000483 },
              { x: -6.4762126000000535, y: 3.3214055999999346 },
              { x: 6.4762126000000535, y: 3.3214055999999346 },
              { x: 6.4762126000000535, y: -3.3214056000000483 },
              { x: -6.4762126000000535, y: -3.3214056000000483 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d767b157409641d0a32b7431c9b1a541&pn=C2651511",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
