import { sel } from "tscircuit"
import { BM06B_SRSS_TB_LF__SN } from "./BM06B_SRSS_TB_LF__SN"

export default () => (
  <board width="20.32mm" height="10.16mm" routingDisabled>
    <BM06B_SRSS_TB_LF__SN
      name="U1"
      pcbY={-2.54}
      connections={{
        pin1: "JP1.pin6",
        pin2: "JP1.pin5",
        pin3: "JP1.pin4",
        pin4: "JP1.pin3",
        pin5: "JP1.pin2",
        pin6: "JP1.pin1",
      }}
    />
    <jumper
      name="JP1"
      footprint={"pinrow6_nosquareplating_id1.016_od1.880_p2.54"}
      cadModel={null}
      schY={0}
      schX={3}
      pcbX={0}
      pcbY={3.4}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
    />
    <hole diameter={3.302} pcbY={-2.54} pcbX={7.62} />
    <hole diameter={3.302} pcbY={-2.54} pcbX={-7.62} />
  </board>
)
