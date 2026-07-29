import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["TXD"],
  pin2: ["DTR"],
  pin3: ["RTS"],
  pin4: ["VCCIO"],
  pin5: ["RXD"],
  pin6: ["RI"],
  pin7: ["GND1"],
  pin8: ["NC1"],
  pin9: ["DSR"],
  pin10: ["DCD"],
  pin11: ["CTS"],
  pin12: ["CBUS4"],
  pin13: ["CBUS2"],
  pin14: ["CBUS3"],
  pin15: ["USBDP"],
  pin16: ["USBDM"],
  pin17: ["V3_3OUT"],
  pin18: ["GND3"],
  pin19: ["pin19"],
  pin20: ["VCC"],
  pin21: ["GND2"],
  pin22: ["CBUS1"],
  pin23: ["CBUS0"],
  pin24: ["NC2"],
  pin25: ["AGND"],
  pin26: ["TEST"],
  pin27: ["OSCI"],
  pin28: ["OSCO"],
} as const

export const FT232RL = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C490691"],
      }}
      manufacturerPartNumber="FT232RL"
      footprint="dfn28_p0.65mm_w8.9258mm_pw0.364mm_pl2.0155mm_pin1location(leftside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f6684975c608438e85ae4e120e588908&pn=C490691",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
