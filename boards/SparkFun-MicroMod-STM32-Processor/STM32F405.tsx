import type { ChipProps } from "@tscircuit/props"

// stm32f405rgt6 simplified for micromod

const pinLabels = {
    pin1: ["VCAP1"],
    pin2: ["VCAP2"],
    pin3: ["VDD3"],
    pin4: ["VDD4"],
    pin5: ["VDDA"],
    pin6: ["OSC_IN"],
    pin7: ["OSC_OUT"],
    pin8: ["OSC32_IN"],
    pin9: ["OSC32_OUT"],
    pin10: ["NRST"],
    pin11: ["BOOT0"],
    pin12: ["TX1"],
    pin13: ["RX1"],
    pin14: ["SWDIO"],
    pin15: ["SWCLK"],
    pin16: ["SCL1"],
    pin17: ["SDA1"],
    pin18: ["OTG_FS_DM"],
    pin19: ["OTG_FS_DP"],
    pin20: ["SDIO_CK"],
    pin21: ["SDIO_D0"],
    pin22: ["SDIO_D1"],
    pin23: ["SDIO_D2"],
    pin24: ["SDIO_D3"],
    pin25: ["NSCS"],
    pin26: ["MISO1"],
    pin27: ["MOSI1"],
    pin28: ["SCK1"],
} as const

export const STM32F405 = (props: ChipProps<typeof pinLabels>) => {
    return (
        <chip
            pinLabels={pinLabels}
            supplierPartNumbers={{
                jlcpcb: ["C15742"],
            }}
            manufacturerPartNumber="STM32F405RGT6"
            footprint="lqfp64_w10_h10_pl0.5_pw1.5"
            {...props}
        />
    )
}
