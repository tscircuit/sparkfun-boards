import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["L_POS"],
  pin10: ["L_NEG"],
  pin11: ["R_POS"],
  pin12: ["R_NEG"],
  pin13: ["S2"],
  pin14: ["S1"],
} as const

export const R_RJ45R08P_C000 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C386757"],
      }}
      manufacturerPartNumber="R_RJ45R08P_C000"
      footprint={
        <footprint>
          <hole
            pcbX="-6.350000000000023mm"
            pcbY="-4.921015000000011mm"
            diameter="3.3000187999999997mm"
          />
          <hole
            pcbX="6.349999999999909mm"
            pcbY="-4.921015000000011mm"
            diameter="3.3000187999999997mm"
          />
          <platedhole
            portHints={["pin14"]}
            pcbX="-8.130032000000028mm"
            pcbY="-1.360951mm"
            outerDiameter="2.4999949999999997mm"
            holeDiameter="1.9000215999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin13"]}
            pcbX="8.130032000000028mm"
            pcbY="-1.360951mm"
            outerDiameter="2.4999949999999997mm"
            holeDiameter="1.9000215999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin12"]}
            pcbX="6.8600320000000465mm"
            pcbY="4.209015000000022mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin11"]}
            pcbX="4.569968000000017mm"
            pcbY="4.209015000000022mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin10"]}
            pcbX="-4.569967999999903mm"
            pcbY="4.209015000000022mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin9"]}
            pcbX="-6.8600320000000465mm"
            pcbY="4.209015000000022mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="-3.569970000000012mm"
            pcbY="-0.6009829999999283mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="-2.5499059999999645mm"
            pcbY="-2.381014999999934mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="-1.5300960000000714mm"
            pcbY="-0.6009829999999283mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="-0.5100320000000238mm"
            pcbY="-2.381014999999934mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="0.5100320000001375mm"
            pcbY="-0.6009829999999283mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.5300959999999577mm"
            pcbY="-2.381014999999934mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="2.549906000000078mm"
            pcbY="-0.6009829999999283mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="3.5699700000001258mm"
            pcbY="-2.381014999999934mm"
            outerDiameter="1.524mm"
            holeDiameter="0.9144mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -8.128050799999983, y: -3.0230253999999377 },
              { x: -8.128050799999983, y: -10.389025400000037 },
              { x: 8.127949200000103, y: -10.389025400000037 },
              { x: 8.127949200000103, y: -2.896025399999985 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 8.130006600000115, y: 0.27897459999996954 },
              { x: 8.130006600000115, y: 5.485974600000077 },
              { x: -8.130032000000028, y: 5.485974600000077 },
              { x: -8.130032000000028, y: 0.27897459999996954 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a69862e215bb4bedbb366f2c7db375f4&pn=C386757",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 4.2, z: 0 },
      }}
      {...props}
    />
  )
}
