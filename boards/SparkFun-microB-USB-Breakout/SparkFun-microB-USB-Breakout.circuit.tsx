import { sel } from "tscircuit"
import { USB_MICRO_XNJ_JB } from "./USB_MICRO_XNJ_JB"

const pinlabels = {
  pin1: "GND",
  pin2: "ID",
  pin3: "D_p",
  pin4: "D_N",
  pin5: "VCC",
}

export default () => (
  <board width="20.32mm" height="11.43mm">
    <USB_MICRO_XNJ_JB
      schY={-1.8}
      name="USB_B"
      pcbY={-2.4}
      connections={{
        pin1: sel.net().VBUS,
        pin2: sel.net().D_N,
        pin3: sel.net().D_P,
        pin4: sel.net().ID,
        pin5: sel.net().GND,
      }}
    />
    <jumper
      pinLabels={pinlabels}
      name="J1"
      connections={{
        pin1: sel.net().GND,
        pin2: sel.net().ID,
        pin3: sel.net().D_P,
        pin4: sel.net().D_N,
        pin5: sel.net().VBUS,
      }}
      schWidth={0.6}
      manufacturerPartNumber="M05PTH"
      pcbY={4.445}
      pcbRotation={180}
      footprint="pinrow5_id1.016_od1.88_nosquareplating_pinlabeltextalignright_pinlabelorthogonal"
    />
    <hole diameter={3.3} pcbY={-3} pcbX={7.62} />
    <hole diameter={3.3} pcbY={-3} pcbX={-7.62} />
    <silkscreentext text="Micro USB" layer="bottom" fontSize={2} pcbY={-4.3} />
  </board>
)
