import type { ChipProps } from "@tscircuit/props"

// micromod m.2 edge connector

const pinLabels = {
    pin1: ["GND"],
    pin2: ["GND2"],
    pin3: ["USB_VIN"],
    pin4: ["V3_3"],
    pin5: ["USB_D_N"],
    pin6: ["V3_3_EN"],
    pin7: ["USB_D_P"],
    pin8: ["RTC_3V"],
    pin9: ["GND3"],
    pin10: ["GND4"],
    pin11: ["BOOT"],
    pin12: ["RESET"],
    pin13: ["SWDIO"],
    pin14: ["SWCLK"],
    pin15: ["TX1"],
    pin16: ["RX1"],
    pin17: ["TX2"],
    pin18: ["RX2"],
    pin19: ["SCL"],
    pin20: ["SDA"],
} as const

export const MicroModEdge = (props: ChipProps<typeof pinLabels>) => {
    return (
        <chip
            pinLabels={pinLabels}
            manufacturerPartNumber="MicroMod-Edge"
            footprint="bga20_4x5_p0.8"
            {...props}
        />
    )
}
