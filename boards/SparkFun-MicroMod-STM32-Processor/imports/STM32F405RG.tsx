import type { ChipProps } from "@tscircuit/props"

/**
 * STM32F405RG - ARM Cortex-M4 MCU
 * LQFP-64 package
 * Used on SparkFun MicroMod STM32 Processor Board
 */
const pinLabels = {
  pin1: ["VBAT"],
  pin2: ["PC13"],
  pin3: ["PC14"],
  pin4: ["PC15"],
  pin5: ["PH0"],
  pin6: ["PH1"],
  pin7: ["NRST"],
  pin8: ["PC0"],
  pin9: ["PC1"],
  pin10: ["PC2"],
  pin11: ["PC3"],
  pin12: ["VSSA"],
  pin13: ["VDDA"],
  pin14: ["PA0"],
  pin15: ["PA1"],
  pin16: ["PA2"],
  pin17: ["PA3"],
  pin18: ["VSS"],
  pin19: ["VDD"],
  pin20: ["PA4"],
  pin21: ["PA5"],
  pin22: ["PA6"],
  pin23: ["PA7"],
  pin24: ["PC4"],
  pin25: ["PC5"],
  pin26: ["PB0"],
  pin27: ["PB1"],
  pin28: ["PB2"],
  pin29: ["PB10"],
  pin30: ["PB11"],
  pin31: ["VCAP1"],
  pin32: ["VSS2"],
  pin33: ["VDD2"],
  pin34: ["PB12"],
  pin35: ["PB13"],
  pin36: ["PB14"],
  pin37: ["PB15"],
  pin38: ["PC6"],
  pin39: ["PC7"],
  pin40: ["PC8"],
  pin41: ["PC9"],
  pin42: ["PA8"],
  pin43: ["PA9"],
  pin44: ["PA10"],
  pin45: ["PA11"],
  pin46: ["PA12"],
  pin47: ["PA13"],
  pin48: ["VCAP2"],
  pin49: ["VSS3"],
  pin50: ["VDD3"],
  pin51: ["PA14"],
  pin52: ["PA15"],
  pin53: ["PC10"],
  pin54: ["PC11"],
  pin55: ["PC12"],
  pin56: ["PD2"],
  pin57: ["PB3"],
  pin58: ["PB4"],
  pin59: ["PB5"],
  pin60: ["PB6"],
  pin61: ["PB7"],
  pin62: ["BOOT0"],
  pin63: ["PB8"],
  pin64: ["PB9"],
} as const

export const STM32F405RG = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      {...props}
      pinLabels={pinLabels}
      manufacturerPartNumber="STM32F405RGT6"
      supplierPartNumbers={{
        jlcpcb: ["C89470"],
      }}
      footprint="lqfp64_w10mm_h10mm_pl0.6mm_pw0.45mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7",
            "pin8", "pin9", "pin10", "pin11", "pin12", "pin13", "pin14",
            "pin15", "pin16",
          ],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: [
            "pin17", "pin18", "pin19", "pin20", "pin21", "pin22",
            "pin23", "pin24", "pin25", "pin26", "pin27", "pin28",
            "pin29", "pin30", "pin31", "pin32",
          ],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [
            "pin33", "pin34", "pin35", "pin36", "pin37", "pin38",
            "pin39", "pin40", "pin41", "pin42", "pin43", "pin44",
            "pin45", "pin46", "pin47", "pin48",
          ],
        },
        topSide: {
          direction: "right-to-left",
          pins: [
            "pin49", "pin50", "pin51", "pin52", "pin53", "pin54",
            "pin55", "pin56", "pin57", "pin58", "pin59", "pin60",
            "pin61", "pin62", "pin63", "pin64",
          ],
        },
      }}
    />
  )
}
