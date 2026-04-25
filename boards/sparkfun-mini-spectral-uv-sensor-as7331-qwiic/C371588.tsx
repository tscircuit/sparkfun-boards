import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
} as const

export const A1001WV_S_04P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C371588"],
      }}
      manufacturerPartNumber="A1001WV_S_04P"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="1.4999970000001213mm"
            pcbY="1.325003699999911mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.4999990000002299mm"
            pcbY="1.325003699999911mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.49999899999988884mm"
            pcbY="1.325003699999911mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.4999969999998939mm"
            pcbY="1.325003699999911mm"
            width="0.5999987999999999mm"
            height="1.5500095999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.799969000000033mm"
            pcbY="-1.2000102999999172mm"
            width="1.1999975999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.799968999999919mm"
            pcbY="-1.2000102999999172mm"
            width="1.1999975999999999mm"
            height="1.7999964mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 1.9999960000001238, y: -1.8749899000000596 },
              { x: -1.9999705999998696, y: -1.8749899000000596 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.9999960000001238, y: 1.0250043000000915 },
              { x: 2.999994000000015, y: 1.0250043000000915 },
              { x: 2.999994000000015, y: -0.07499350000023242 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.999589599999922, y: 1.0252837000000454 },
              { x: -3.000349599999936, y: 1.0252837000000454 },
              { x: -3.000349599999936, y: -0.07453630000020439 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
