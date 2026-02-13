import { sel } from "tscircuit"
import { PJ_320D_4A } from "./C95562"

export default () => {
  return (
    <board width={"12.70mm"} height={"17.78mm"}>
      <PJ_320D_4A name="U1" pcbY={4} pcbRotation={90} pcbX={0.8}/>
      <jumper
        name="J1"
        schDirection="left"
        footprint="pinrow4_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel_pinlabelverticallyinverted"
        connections={{
            pin1: sel.U1.pin1,
            pin2: sel.U1.pin2,
            pin3: sel.U1.pin3,
            pin4: sel.U1.pin4,
        }}
        schX={2}
        pcbY={-7.5}
      />
    </board>
  )
}
