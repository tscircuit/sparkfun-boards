import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VSSA"],
  pin2: ["VSSA"],
  pin3: ["VDDA"],
  pin4: ["REXT"],
  pin5: ["VSSA"],
  pin6: ["VSSA"],
  pin7: ["A1"],
  pin8: ["SYN"],
  pin9: ["READY"],
  pin10: ["VDDD"],
  pin11: ["VSSD"],
  pin12: ["SDA"],
  pin13: ["SCL"],
  pin14: ["A0"],
  pin15: ["VSSA"],
  pin16: ["VSSA"],
} as const

export const AS7331_AQFM_OLGA16_LF_T_R = (
  props: ChipProps<typeof pinLabels>,
) => {
  return (
    <chip
      pinLabels={pinLabels}
      displayName="AS7331"
      schWidth={1.55}
      schHeight={2.6}
      schPinSpacing={0.32}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin10", "pin3", "pin4", "pin11", "pin1", "pin2"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin13", "pin12", "pin9", "pin14", "pin8", "pin7"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C20482877"],
      }}
      manufacturerPartNumber="AS7331_AQFM_OLGA16_LF_T_R"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.7499350000000504mm"
            pcbY="1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.24980900000002748mm"
            pcbY="1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.25006299999984094mm"
            pcbY="1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.7501889999998639mm"
            pcbY="1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.049908999999957mm"
            pcbY="0.7499350000000504mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.049908999999957mm"
            pcbY="0.2500630000000683mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.049908999999957mm"
            pcbY="-0.2500629999999546mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.049908999999957mm"
            pcbY="-0.7499350000000504mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.7501889999998639mm"
            pcbY="-1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.25006299999984094mm"
            pcbY="-1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.24980900000002748mm"
            pcbY="-1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-0.7499350000000504mm"
            pcbY="-1.5749270000000024mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.0499090000000706mm"
            pcbY="-0.7499350000000504mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.0499090000000706mm"
            pcbY="-0.2500629999999546mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.0499090000000706mm"
            pcbY="0.2500630000000683mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.0499090000000706mm"
            pcbY="0.7499350000000504mm"
            width="0.29999939999999997mm"
            height="0.29999939999999997mm"
            shape="rect"
          />
          <courtyardoutline
            outline={[
              { x: -1.6603350000001456, y: 2.181797000000074 },
              { x: 1.6336649999999509, y: 2.181797000000074 },
              { x: 1.6336649999999509, y: -2.1790030000000797 },
              { x: -1.6603350000001456, y: -2.1790030000000797 },
              { x: -1.6603350000001456, y: 2.181797000000074 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  )
}
