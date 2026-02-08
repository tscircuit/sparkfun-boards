import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["A1"],
  pin2: ["C11"],
  pin3: ["A2"],
  pin4: ["C21"],
  pin5: ["E1"],
  pin6: ["C12"],
  pin7: ["E2"],
  pin8: ["C22"],
} as const

export const ILD213T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C435834"],
      }}
      manufacturerPartNumber="ILD213T"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.9050000000000864mm"
            pcbY="-2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.6349999999999909mm"
            pcbY="-2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.6349999999999909mm"
            pcbY="-2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.9049999999999727mm"
            pcbY="-2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.9050000000000864mm"
            pcbY="2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.6349999999999909mm"
            pcbY="2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.6349999999999909mm"
            pcbY="2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.9049999999999727mm"
            pcbY="2.7398980000000392mm"
            width="0.9100057999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 3.150006400000052, y: 1.9499834000000646 },
              { x: 3.150006400000052, y: -1.9500087999999778 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.1500064000001657, y: 1.9500087999999778 },
              { x: -3.1500064000001657, y: 0.5080000000000382 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.1500064000001657, y: -1.9499834000000646 },
              { x: -3.1500064000001657, y: -0.6349999999999909 },
              { x: -3.1500064000001657, y: -0.5080000000000382 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.1500064000001657, y: 1.9500087999999778 },
              { x: -2.489758800000118, y: 1.9500087999999778 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.320241200000055, y: 1.9500087999999778 },
              { x: -1.219809600000076, y: 1.9500087999999778 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.05019040000001951, y: 1.9500087999999778 },
              { x: 0.05019040000001951, y: 1.9500087999999778 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.2198095999999623, y: 1.9500087999999778 },
              { x: 1.3201904000000013, y: 1.9500087999999778 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.489809599999944, y: 1.9500087999999778 },
              { x: 3.150006400000052, y: 1.9500087999999778 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.1500064000001657, y: -1.9499834000000646 },
              { x: -2.489758800000118, y: -1.9499834000000646 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.320241200000055, y: -1.9499834000000646 },
              { x: -1.2197588000000223, y: -1.9499834000000646 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.05024120000007315, y: -1.9499834000000646 },
              { x: 0.05024119999995946, y: -1.9499834000000646 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.2197588000000223, y: -1.9499834000000646 },
              { x: 1.3202411999999413, y: -1.9499834000000646 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.489758800000004, y: -1.9499834000000646 },
              { x: 3.048000000000002, y: -1.9499834000000646 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.1500064000001657, y: 0.5080000000000382 },
              { x: -3.1496000000000777, y: -0.5072379999999157 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=61eacee788cc4ebfb3195079c1eb215f&pn=C435834",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -2.5398968000000197 },
      }}
      {...props}
    />
  )
}
