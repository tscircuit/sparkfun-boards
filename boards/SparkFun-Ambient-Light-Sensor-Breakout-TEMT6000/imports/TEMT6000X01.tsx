import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["S"],
  pin2: ["BASE"],
  pin3: ["VCC"],
} as const

export const TEMT6000X01 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C94098"],
      }}
      schHeight={1}
      manufacturerPartNumber="TEMT6000X01"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin3"]}
            pcbX="1.7780000000000058mm"
            pcbY="-0mm"
            width="1.0998199999999998mm"
            height="1.0007599999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.7779999999999916mm"
            pcbY="0.5587999999999909mm"
            width="1.0998199999999998mm"
            height="0.8000999999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.7779999999999916mm"
            pcbY="-0.5588000000000051mm"
            width="1.0998199999999998mm"
            height="0.8000999999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0796524000000005, y: 0.9999979999999908 },
              { x: 1.99999600000001, y: 0.9999979999999908 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.99999600000001, y: -0.0045974000000086335 },
              { x: -1.99999600000001, y: 0.004597399999994423 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.99999600000001, y: -0.6545326000000102 },
              { x: 1.99999600000001, y: -0.999998000000005 },
              { x: -1.0796524000000005, y: -0.999998000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.99999600000001, y: 0.9999979999999908 },
              { x: 1.99999600000001, y: 0.654532599999996 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.6580123999999898, y: -0.00053340000000901 },
              { x: 1.040688799999998, y: -0.00053340000000901 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.6241034000000099, y: 0.6204965999999956 },
              { x: -0.6241034000000099, y: -0.6319012000000157 },
              { x: -0.6221476000000052, y: -0.6338570000000061 },
              { x: 0.6309106000000071, y: -0.6338570000000061 },
              { x: 0.6309106000000071, y: 0.6293865999999753 },
              { x: -0.6085840000000076, y: 0.6293865999999753 },
              { x: -0.6221476000000052, y: 0.615823000000006 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1175238000000007, y: 0.5455157999999898 },
              { x: -0.8940291999999914, y: 0.54889399999999 },
              { x: -0.8940291999999914, y: 0.1729739999999964 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.1217401999999908, y: -0.4999482000000057 },
              { x: -0.8811259999999947, y: -0.4999482000000057 },
              { x: -0.8811259999999947, y: -0.13901420000000542 },
              { x: -0.8798559999999895, y: -0.1524000000000143 },
            ]}
          />
          <courtyardoutline
            outline={[
              { x: -2.6122000000000014, y: 1.3929999999999865 },
              { x: 2.561399999999992, y: 1.3929999999999865 },
              { x: 2.561399999999992, y: -1.2660000000000053 },
              { x: -2.6122000000000014, y: -1.2660000000000053 },
              { x: -2.6122000000000014, y: 1.3929999999999865 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C94098.obj?uuid=8b05c47310504dfe92cc399290b4427e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C94098.step?uuid=8b05c47310504dfe92cc399290b4427e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.04 },
      }}
      {...props}
    />
  )
}
