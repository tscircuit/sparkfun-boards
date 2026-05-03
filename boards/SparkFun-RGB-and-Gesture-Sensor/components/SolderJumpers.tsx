import type { SolderJumperProps } from "@tscircuit/props"

export const SolderJumper2 = (
  props: Omit<SolderJumperProps, "pinCount" | "footprint">,
) => (
  <solderjumper
    pinCount={2}
    footprint="solderjumper2_p0.8238_pw0.635_ph1.27"
    {...props}
  />
)

export const SolderJumper3 = (
  props: Omit<SolderJumperProps, "pinCount" | "footprint">,
) => (
  <solderjumper
    pinCount={3}
    footprint="solderjumper3_p0.8128_pw0.635_ph1.27"
    {...props}
  />
)
