import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["IN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["BYP"],
  pin5: ["OUT"],
} as const

export const MIC5219_3_3YM5_TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C29613"],
      }}
      manufacturerPartNumber="MIC5219_3_3YM5_TR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin5"]}
            pcbX="1.271397mm"
            pcbY="0.950087mm"
            width="0.999998mm"
            height="0.5500116mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.271397mm"
            pcbY="-0.950087mm"
            width="0.999998mm"
            height="0.5500116mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.271397mm"
            pcbY="-0.950087mm"
            width="0.999998mm"
            height="0.5500116mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.271397mm"
            pcbY="-0.000127mm"
            width="0.999998mm"
            height="0.5500116mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.271397mm"
            pcbY="0.950087mm"
            width="0.999998mm"
            height="0.5500116mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.8889238000000432, y: 0.38092380000000503 },
              { x: 0.8889238000000432, y: -0.4190746000000445 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.8889238000000432, y: 1.6509237999998732 },
              { x: -0.9110218000001851, y: 1.6509237999998732 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9697211999999809, y: -1.5217648000000281 },
              { x: -0.8302244000001338, y: -1.5217648000000281 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.269873000000075, y: 1.6508730000000469 },
              { x: -1.2742004200614474, y: 1.6180029812720704 },
              { x: -1.2868877737195135, y: 1.5873730000000705 },
              { x: -1.3070704387893102, y: 1.5610704387893293 },
              { x: -1.3333730000001651, y: 1.5408877737194189 },
              { x: -1.3640029812720513, y: 1.5282004200612391 },
              { x: -1.3968730000001415, y: 1.5238730000000942 },
              { x: -1.4297430187280042, y: 1.5282004200612391 },
              { x: -1.4603730000001178, y: 1.5408877737194189 },
              { x: -1.4866755612107454, y: 1.5610704387893293 },
              { x: -1.5068582262806558, y: 1.5873730000000705 },
              { x: -1.5195455799388355, y: 1.6180029812720704 },
              { x: -1.5238730000000942, y: 1.6508730000000469 },
              { x: -1.5195455799388355, y: 1.6837430187280233 },
              { x: -1.5068582262806558, y: 1.7143730000000232 },
              { x: -1.4866755612107454, y: 1.7406755612107645 },
              { x: -1.4603730000001178, y: 1.7608582262805612 },
              { x: -1.4297430187280042, y: 1.7735455799386273 },
              { x: -1.3968730000001415, y: 1.7778729999999996 },
              { x: -1.3640029812720513, y: 1.7735455799386273 },
              { x: -1.3333730000001651, y: 1.7608582262805612 },
              { x: -1.3070704387893102, y: 1.7406755612107645 },
              { x: -1.2868877737195135, y: 1.7143730000000232 },
              { x: -1.2742004200614474, y: 1.6837430187280233 },
              { x: -1.269873000000075, y: 1.6508730000000469 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.001905mm"
            pcbY="2.770507mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.026095000000055, y: 2.0205069999999523 },
              { x: 2.0299049999998715, y: 2.0205069999999523 },
              { x: 2.0299049999998715, y: -1.781492999999955 },
              { x: -2.026095000000055, y: -1.781492999999955 },
              { x: -2.026095000000055, y: 2.0205069999999523 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C29613.obj?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C29613.step?uuid=460193f9bf2d42e58cf3c2f675b07dc6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.049083 },
      }}
      {...props}
    />
  )
}
