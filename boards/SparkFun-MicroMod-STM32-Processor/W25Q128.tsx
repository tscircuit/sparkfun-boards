import React from "react"

const W25Q128 = (props: any) => (
  <chip
    name="U2"
    footprint="soic8_208mil"
    pinLabels={{
      pin1: "FLASH_CS_N",
      pin2: "FLASH_SO", // DO
      pin3: "FLASH_WP_N",
      pin4: "GND",
      pin5: "FLASH_SI", // DI
      pin6: "FLASH_SCK",
      pin7: "FLASH_HOLD_N",
      pin8: "V3V3",
    }}
    {...props}
  />
)

export default W25Q128
