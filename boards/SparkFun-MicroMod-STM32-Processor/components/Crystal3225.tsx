import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["X1"],
  pin2: ["X2"],
} as const

export const Crystal3225 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schematicSymbol={{ type: "two_pin", pinLabels: ["X1", "X2"] }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.4mm"
            pcbY="0mm"
            width="1.2mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1.4mm"
            pcbY="0mm"
            width="1.2mm"
            height="1.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  )
}
