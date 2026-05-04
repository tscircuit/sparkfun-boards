import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
} as const

export const CA45_D_10V_100uF_K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C503925"],
      }}
      manufacturerPartNumber="CA45_D_10V_100uF_K"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="2.9999939999999867mm"
            pcbY="0mm"
            width="2.7990799999999996mm"
            height="3.0099mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.9999939999999867mm"
            pcbY="0mm"
            width="2.7990799999999996mm"
            height="3.0099mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.099997799999997, y: -2.2999954000000002 },
              { x: 1.101267799999988, y: 2.2999954000000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.6999926000000016, y: 2.2999954000000002 },
              { x: 3.5999928000000097, y: 2.2999954000000002 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.6999925999999874, y: -2.2999954000000002 },
              { x: -3.5999927999999954, y: -2.2999954000000002 },
            ]}
          />
          <courtyardoutline
            outline={[
              { x: -4.644199999999998, y: 2.561400000000006 },
              { x: 4.644200000000012, y: 2.561400000000006 },
              { x: 4.644200000000012, y: -2.5360000000000014 },
              { x: -4.644199999999998, y: -2.5360000000000014 },
              { x: -4.644199999999998, y: 2.561400000000006 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C503925.obj?uuid=54b4a7b9b595470ba3bec66fde072b82",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C503925.step?uuid=54b4a7b9b595470ba3bec66fde072b82",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -1.616759 },
      }}
      {...props}
    />
  )
}
