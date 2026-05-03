import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
} as const

export const Fiducial = (props: ChipProps<typeof pinLabels>) => (
  <chip
    pinLabels={pinLabels}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="0mm"
          pcbY="0mm"
          width="1mm"
          height="1mm"
          shape="rect"
        />
      </footprint>
    }
    cadModel={null}
    {...props}
  />
)
