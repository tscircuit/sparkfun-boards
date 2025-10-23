import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SOURCE"],
  pin2: ["GATE"],
  pin3: ["DRAIN"],
} as const

export const DMG2305 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schematicSymbol={{
        type: "mosfet",
        transistorType: "p",
        mode: "enhancement",
        pinOrder: { source: "SOURCE", gate: "GATE", drain: "DRAIN" },
      }}
      manufacturerPartNumber="DMG2305UX-7"
      supplierPartNumbers={{ digikey: ["DMG2305UX-7DICT-ND"] }}
      footprint={
        <footprint>
          {/* SOT-23 pads: pin1 (source), pin2 (gate), pin3 (drain) */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.95mm"
            pcbY="0.95mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.95mm"
            pcbY="0.95mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0mm"
            pcbY="-0.95mm"
            width="0.6mm"
            height="1.2mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  )
}
