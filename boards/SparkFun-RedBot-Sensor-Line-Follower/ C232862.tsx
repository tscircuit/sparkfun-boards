import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
} as const

export const QRE1113GR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C232862"],
      }}
      manufacturerPartNumber="QRE1113GR"
      footprint="dfn4_p1.8001mm_w5.66mm_pw0.8mm_pl1.66mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=bea63151d7814fd59377ff1bdb0cacb7&pn=C232862",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -0.5000482000001056 },
      }}
      {...props}
    />
  )
}
