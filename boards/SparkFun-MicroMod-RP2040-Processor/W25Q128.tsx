import { chip } from "@tscircuit/core"

export const W25Q128 = (props: any) => (
    <chip
        {...props}
        name="U1"
        footprint="soic8" // Or wson8 6x5
        pinLabels={{
            "1": "nCS",
            "2": "DO",
            "3": "nWP",
            "4": "GND",
            "5": "DI",
            "6": "CLK",
            "7": "nHOLD",
            "8": "VCC"
        }}
    />
)
