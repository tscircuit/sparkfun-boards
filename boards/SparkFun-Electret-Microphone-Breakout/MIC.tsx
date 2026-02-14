import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
} as const

export const GMI9745P_30db = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C233955"],
      }}
      manufacturerPartNumber="GMI9745P_30db"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-1.269999999999996mm"
            pcbY="0mm"
            outerDiameter="1.6764mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="1.269999999999996mm"
            pcbY="0mm"
            outerDiameter="1.6764mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <silkscreentext
            text="_NEG"
            pcbX="2.9210000000000065mm"
            pcbY="0.6096000000000004mm"
            anchorAlignment="bottom_left"
            fontSize="1.524mm"
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=d58f406863284e7ab4a14d28d76d2085&pn=C233955",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: {
          x: 2,
          y: 0,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
