import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
} as const

export const KMR221GLFS = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C72443"],
      }}
      manufacturerPartNumber="KMR221GLFS"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.29997mm"
            pcbY="0.5381498mm"
            width="0.999998mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="2.29997mm"
            pcbY="0.5381498mm"
            width="0.999998mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.29997mm"
            pcbY="-1.0620502mm"
            width="0.999998mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="2.29997mm"
            pcbY="-1.0620502mm"
            width="0.999998mm"
            height="1.0999978mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="1.2620498mm"
            width="1.999996mm"
            height="0.6999986mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0160000000000764, y: 0.24604980000003707 },
              { x: -1.0160000000000764, y: -0.7699502000000393 },
              { x: 1.0159999999999627, y: -0.7699502000000393 },
              { x: 1.0159999999999627, y: 0.24604980000003707 },
              { x: -1.0160000000000764, y: 0.24604980000003707 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.574342799999954, y: 1.1380216000000019 },
              { x: 1.2311380000001009, y: 1.1380216000000019 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.2311380000001009, y: 1.1380216000000019 },
              { x: -1.574342799999954, y: 1.1380216000000019 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.099970399999961, y: -0.24300180000000182 },
              { x: 2.099970399999961, y: -0.28089860000000044 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.574342799999954, y: -1.6619474000001446 },
              { x: -1.574342799999954, y: -1.6619474000001446 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.0999704000000747, y: -0.28089860000000044 },
              { x: -2.0999704000000747, y: -0.24300180000000182 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0mm"
            pcbY="2.6176498mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.0439999999999827, y: 1.867649799999981 },
              { x: 3.043999999999869, y: 1.867649799999981 },
              { x: 3.043999999999869, y: -1.9089501999999356 },
              { x: -3.0439999999999827, y: -1.9089501999999356 },
              { x: -3.0439999999999827, y: 1.867649799999981 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C72443.obj?uuid=40eb4b87cf0c4873966e77676402d6ca",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C72443.step?uuid=40eb4b87cf0c4873966e77676402d6ca",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.2532745999999846, z: -0.026272 },
      }}
      {...props}
    />
  )
}
