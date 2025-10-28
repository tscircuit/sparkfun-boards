import React from "react"

const W25Q128 = (props: any) => (
  <chip
    name="U2"
    footprint="soic8_208mil"
    pinLabels={{
      pin1: "CS_N",
      pin5: "DO_DI",
      pin2: "D1_DO",
      pin4: "GND",
      pin3: "D2_WP",
      pin6: "CLK",
      pin7: "D3_HOLD",
      pin8: "V3_3",
    }}
    {...props}
  />
)

export default W25Q128
