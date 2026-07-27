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
      footprint="qfn16_p0.4999mm_w2.5998mm_h3.6499mm_pw0.3mm_pl0.3mm"
      {...props}
    />
  )
}
