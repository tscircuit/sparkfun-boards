import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EN"],
  pin2: ["C1_POS"],
  pin3: ["V_POS"],
  pin4: ["C1_NEG"],
  pin5: ["C2_POS"],
  pin6: ["C2_NEG"],
  pin7: ["V_NEG"],
  pin8: ["T2OUT"],
  pin9: ["R2IN"],
  pin10: ["R2OUT"],
  pin11: ["STATUS"],
  pin12: ["T2IN"],
  pin13: ["T1IN"],
  pin14: ["ONLINE"],
  pin15: ["R1OUT"],
  pin16: ["R1IN"],
  pin17: ["T1OUT"],
  pin18: ["GND"],
  pin19: ["VCC"],
  pin20: ["SHUTDOWN"],
} as const

export const SP3223EEY_L_TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C33330"],
      }}
      manufacturerPartNumber="SP3223EEY_L_TR"
      footprint="dfn20_pillpads_p0.65mm_w7.4839mm_pw0.364mm_pl1.742mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33330.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33330.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  )
}
