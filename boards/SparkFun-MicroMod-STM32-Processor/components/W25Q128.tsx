import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["N_CS"],
  pin2: ["D1_DO"],
  pin3: ["D2_N_WP"],
  pin4: ["GND"],
  pin5: ["D0_DI"],
  pin6: ["CLK"],
  pin7: ["D3_N_HOLD"],
  pin8: ["V3_3"],
  pin9: ["EP"],
} as const

export const W25Q128 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      name={props.name}
      pinLabels={pinLabels}
      schWidth={1.5}
      schPinArrangement={{
        rightSide: {
          pins: ["N_CS", "CLK", "D0_DI", "D1_DO", "D2_N_WP", "D3_N_HOLD"],
          direction: "top-to-bottom",
        },
        leftSide: {
          pins: ["V3_3", "GND"],
          direction: "top-to-bottom",
        },
      }}
      manufacturerPartNumber="W25Q128JVPIQ"
      supplierPartNumbers={{ jlcpcb: ["C190862"] }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.905mm"
            pcbY="-3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-0.635mm"
            pcbY="-3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.635mm"
            pcbY="-3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="1.905mm"
            pcbY="-3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1.905mm"
            pcbY="3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.635mm"
            pcbY="3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.905mm"
            pcbY="3.0127mm"
            width="0.581mm"
            height="1.2755mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0mm"
            pcbY="0mm"
            width="4.3mm"
            height="3.4mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  )
}
