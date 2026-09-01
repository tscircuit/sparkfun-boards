import type { ChipProps } from "@tscircuit/props"

/**
 * W25Q128JVPIM - Winbond 128Mbit (16MB) Serial Flash Memory
 * Package: WSON-8 (8x6mm) / SOIC-8
 * 
 * Used for external flash storage on RP2040 boards
 */

const pinLabels = {
    pin1: ["CS"],
    pin2: ["DO", "IO1"],
    pin3: ["WP", "IO2"],
    pin4: ["GND"],
    pin5: ["DI", "IO0"],
    pin6: ["CLK"],
    pin7: ["HOLD", "IO3"],
    pin8: ["VCC"],
} as const

export const W25Q128JV = (props: ChipProps<typeof pinLabels>) => {
    return (
        <chip
            pinLabels={pinLabels}
            schPinArrangement={{
                leftSide: {
                    direction: "top-to-bottom",
                    pins: ["pin1", "pin2", "pin3", "pin4"],
                },
                rightSide: {
                    direction: "bottom-to-top",
                    pins: ["pin5", "pin6", "pin7", "pin8"],
                },
            }}
            supplierPartNumbers={{
                jlcpcb: ["C97521"],
            }}
            manufacturerPartNumber="W25Q128JVPIM"
            footprint={
                <footprint>
                    {/* WSON-8 6x5mm footprint */}
                    <smtpad portHints={["pin1"]} pcbX="-2.475mm" pcbY="0.975mm" width="1.05mm" height="0.45mm" shape="rect" />
                    <smtpad portHints={["pin2"]} pcbX="-2.475mm" pcbY="0.325mm" width="1.05mm" height="0.45mm" shape="rect" />
                    <smtpad portHints={["pin3"]} pcbX="-2.475mm" pcbY="-0.325mm" width="1.05mm" height="0.45mm" shape="rect" />
                    <smtpad portHints={["pin4"]} pcbX="-2.475mm" pcbY="-0.975mm" width="1.05mm" height="0.45mm" shape="rect" />
                    <smtpad portHints={["pin5"]} pcbX="2.475mm" pcbY="-0.975mm" width="1.05mm" height="0.45mm" shape="rect" />
                    <smtpad portHints={["pin6"]} pcbX="2.475mm" pcbY="-0.325mm" width="1.05mm" height="0.45mm" shape="rect" />
                    <smtpad portHints={["pin7"]} pcbX="2.475mm" pcbY="0.325mm" width="1.05mm" height="0.45mm" shape="rect" />
                    <smtpad portHints={["pin8"]} pcbX="2.475mm" pcbY="0.975mm" width="1.05mm" height="0.45mm" shape="rect" />
                    {/* Thermal pad */}
                    <smtpad portHints={["GND"]} pcbX="0mm" pcbY="0mm" width="3.35mm" height="1.65mm" shape="rect" />
                    {/* Package outline */}
                    <silkscreenpath
                        route={[
                            { x: -3, y: 2.5 },
                            { x: 3, y: 2.5 },
                            { x: 3, y: -2.5 },
                            { x: -3, y: -2.5 },
                            { x: -3, y: 2.5 },
                        ]}
                    />
                    {/* Pin 1 marker */}
                    <silkscreenpath
                        route={[
                            { x: -3.3, y: 1.5 },
                            { x: -3.3, y: 0.5 },
                        ]}
                    />
                </footprint>
            }
            cadModel={{
                objUrl:
                    "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a5c3f2b1d4e6f8a0c2b4d6e8f0a2c4d6&pn=C97521",
                rotationOffset: { x: 0, y: 0, z: 0 },
                positionOffset: { x: 0, y: 0, z: 0 },
            }}
            {...props}
        />
    )
}
