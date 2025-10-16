import React from "react"

const W25Q128 = (props: any) => (
  <chip
    name="U2"
    pinLabels={{
      pin1: "CS_N",
      pin2: "DO",
      pin3: "WP_N",
      pin4: "GND",
      pin5: "DI",
      pin6: "CLK",
      pin7: "HOLD_N",
      pin8: "VCC",
    }}
    {...props}
  />
)

export default W25Q128
