import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
} as const

export const A_1751251 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C91152"],
      }}
      manufacturerPartNumber="A_1751251"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-3.50012mm"
            pcbY="0mm"
            outerDiameter="2.1999956mm"
            holeDiameter="1.400048mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="0mm"
            outerDiameter="2.1999956mm"
            holeDiameter="1.400048mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="3.50012mm"
            pcbY="0mm"
            outerDiameter="2.1999956mm"
            holeDiameter="1.400048mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -5.499862000000007, y: -3.5001199999999244 },
              { x: -5.499862000000007, y: 3.8000940000000583 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.499862000000007, y: -3.5001199999999244 },
              { x: 5.5001159999999345, y: -3.5001199999999244 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.504942000000028, y: 3.8000940000000583 },
              { x: 5.504942000000028, y: -3.5001199999999244 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.504942000000028, y: 3.8000940000000583 },
              { x: -5.495036000000027, y: 3.8000940000000583 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.499862000000007, y: -2.5399999999999636 },
              { x: 5.5001159999999345, y: -2.5399999999999636 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.0127mm"
            pcbY="4.937mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.88880000000006, y: 4.1870000000001255 },
              { x: 5.86340000000007, y: 4.1870000000001255 },
              { x: 5.86340000000007, y: -3.8822000000000116 },
              { x: -5.88880000000006, y: -3.8822000000000116 },
              { x: -5.88880000000006, y: 4.1870000000001255 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91152.obj?uuid=0b4d57e4edc5417eb4c2c3fd5c88e90f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C91152.step?uuid=0b4d57e4edc5417eb4c2c3fd5c88e90f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 3.5,
          y: 0.000012700000070253736,
          z: -4.250007,
        },
      }}
      {...props}
    />
  )
}
