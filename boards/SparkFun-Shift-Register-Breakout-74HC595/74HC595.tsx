import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["QB"],
  pin2: ["QC"],
  pin3: ["QD"],
  pin4: ["QE"],
  pin5: ["QF"],
  pin6: ["QG"],
  pin7: ["QH"],
  pin8: ["GND"],
  pin9: ["QHS"],
  pin10: ["SCL"],
  pin11: ["SCK"],
  pin12: ["RCK"],
  pin13: ["G"],
  pin14: ["SER"],
  pin15: ["QA"],
  pin16: ["VCC"],
} as const

export const A_74HC595D_118 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C5947"],
      }}
      manufacturerPartNumber="A_74HC595D_118"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.44500000000005mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.175000000000068mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.9050000000000864mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.6349999999999909mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.6349999999999909mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.9049999999999727mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.1749999999999545mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="4.444999999999936mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-4.44500000000005mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-3.175000000000068mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.9050000000000864mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.6349999999999909mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.6349999999999909mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.9049999999999727mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="3.1749999999999545mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="4.444999999999936mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -5.026202800000078, y: -1.5214091999999937 },
              { x: -5.026202800000078, y: 1.5214092000001074 },
              { x: 5.0262027999999646, y: 1.5214092000001074 },
              { x: 5.0262027999999646, y: -1.5214091999999937 },
              { x: -5.026202800000078, y: -1.5214091999999937 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=9adfdf34b7774b23880141fd3e8b4dbb&pn=C5947",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
