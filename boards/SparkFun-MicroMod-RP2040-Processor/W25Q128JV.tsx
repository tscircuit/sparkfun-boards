import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
    pin1: ["CS"],
    pin2: ["DO_IO1"],
    pin3: ["WP_IO2"],
    pin4: ["GND"],
    pin5: ["DI_IO0"],
    pin6: ["CLK"],
    pin7: ["HOLD_IO3"],
    pin8: ["VCC"],
} as const

export const W25Q128JV = (props: ChipProps<typeof pinLabels>) => {
    return (
        <chip
            pinLabels={pinLabels}
            schWidth={1.6}
            schHeight={1.2}
            manufacturerPartNumber="W25Q128JVSIQ"
            supplierPartNumbers={{
                jlcpcb: ["C97521"],
            }}
            footprint={
                <footprint>
                    {/* SOIC-8 package */}
                    <smtpad portHints={["pin1"]} pcbX="-2.7mm" pcbY="1.905mm" width="1.55mm" height="0.6mm" shape="rect" />
                    <smtpad portHints={["pin2"]} pcbX="-2.7mm" pcbY="0.635mm" width="1.55mm" height="0.6mm" shape="rect" />
                    <smtpad portHints={["pin3"]} pcbX="-2.7mm" pcbY="-0.635mm" width="1.55mm" height="0.6mm" shape="rect" />
                    <smtpad portHints={["pin4"]} pcbX="-2.7mm" pcbY="-1.905mm" width="1.55mm" height="0.6mm" shape="rect" />
                    <smtpad portHints={["pin5"]} pcbX="2.7mm" pcbY="-1.905mm" width="1.55mm" height="0.6mm" shape="rect" />
                    <smtpad portHints={["pin6"]} pcbX="2.7mm" pcbY="-0.635mm" width="1.55mm" height="0.6mm" shape="rect" />
                    <smtpad portHints={["pin7"]} pcbX="2.7mm" pcbY="0.635mm" width="1.55mm" height="0.6mm" shape="rect" />
                    <smtpad portHints={["pin8"]} pcbX="2.7mm" pcbY="1.905mm" width="1.55mm" height="0.6mm" shape="rect" />

                    {/* Silkscreen outline */}
                    <silkscreenpath
                        route={[
                            { x: -1.95, y: 2.45 },
                            { x: 1.95, y: 2.45 },
                            { x: 1.95, y: -2.45 },
                            { x: -1.95, y: -2.45 },
                            { x: -1.95, y: 2.45 },
                        ]}
                    />
                    {/* Pin 1 indicator */}
                    <silkscreenpath
                        route={[
                            { x: -1.5, y: 2.0 },
                            { x: -1.0, y: 2.0 },
                        ]}
                    />
                </footprint>
            }
            {...props}
        />
    )
}
