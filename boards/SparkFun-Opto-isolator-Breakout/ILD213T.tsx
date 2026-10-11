import type { ChipProps } from "@tscircuit/props"
import { fp } from "@tscircuit/footprinter"

const footprint = fp
  .string("dfn_w6.8mm_pw0.6mm_pl1.2mm_pin1location(leftside,bottom)")
  .circuitJson()
  .map((element) => {
    if (element.type === "pcb_smtpad" && element.shape === "rotated_rect") {
      // SparkFun's SO08 pads are rectangular, with no rounded corners.
      const { ccw_rotation, corner_radius, ...pad } = element
      return {
        ...pad,
        shape: "rect" as const,
        width: element.height,
        height: element.width,
      }
    }
    if (element.type === "pcb_courtyard_rect") {
      // SO08's documented body/lead envelope is 5.4356 x 6.604 mm.
      // Keep 0.25 mm around that envelope instead of a DFN courtyard.
      return { ...element, width: 5.9356, height: 7.104 }
    }
    return element
  })

const pinLabels = {
  pin1: ["A1"],
  pin2: ["C11"],
  pin3: ["A2"],
  pin4: ["C21"],
  pin5: ["E1"],
  pin6: ["C12"],
  pin7: ["E2"],
  pin8: ["C22"],
} as const

export const ILD213T = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C435834"],
      }}
      manufacturerPartNumber="ILD213T"
      footprint={footprint as ChipProps["footprint"]}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=61eacee788cc4ebfb3195079c1eb215f&pn=C435834",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
