import { AS7331_AQFM_OLGA16_LF_T_R } from "./AS7331"
import { sel } from "tscircuit"

export default () => {
  return (
    <board width="25.40mm" height="12.70mm" routingDisabled>
      <AS7331_AQFM_OLGA16_LF_T_R
        layer="bottom"
        name="U1"
        pcbX="0mm"
        pcbY="3.04mm"
        pcbRotation={-90}
      />
      <jumper
        name="J1"
        pcbX="10.5mm"
        pcbY="2.9mm"
        footprint={
          "kicad:Connector_JST/JST_SH_BM04B-SRSS-TB_1x04-1MP_P1.00mm_Vertical"
        }
        pcbRotation={-90}
      />
      <jumper
        name="J2"
        pcbX="-10.5mm"
        pcbY="2.9mm"
        footprint={
          "kicad:Connector_JST/JST_SH_BM04B-SRSS-TB_1x04-1MP_P1.00mm_Vertical"
        }
        pcbRotation={90}
      />
      <jumper name="J3" pcbY="-5mm" footprint="pinrow6" pcbRotation={180} />

      <solderjumper
        name="A0"
        bridgedPins={[["2"], ["3"]]}
        footprint="solderjumper3_bridged23_pw0.66_pl1.270_p1"
      />
      <solderjumper
        name="A1"
        bridgedPins={[["2"], ["3"]]}
        footprint="solderjumper3_bridged23_pw0.66_pl1.270_p1"
      />
      <solderjumper
        name="I2C"
        bridgedPins={[["1"], ["2"], ["3"]]}
        footprint="solderjumper3_bridged123_pw0.66_pl1.270_p1"
      />
      <solderjumper
        name="INT"
        bridgedPins={[["1"], ["2"]]}
        footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
      />

      <led name="D1" color="red" footprint="0603" />
      
      <resistor name="R1" resistance={"2.2k"} footprint="0402" />
      <resistor name="R2" resistance={"2.2k"} footprint="0402" />
      <resistor name="R3" resistance={"10k"} footprint="0402" />
      <resistor name="R4" resistance={"10k"} footprint="0402" />
      <resistor name="R5" resistance={"2.2k"} footprint="0402" />
      <resistor name="R6" resistance={"10"} footprint="0402" />
      <resistor name="R7" resistance={"3.3k"} footprint="1206" />

      <capacitor
        name="C1"
        capacitance={"0.1uF"}
        footprint="0402"
        layer={"bottom"}
      />
      <capacitor
        name="C2"
        capacitance={"0.1uF"}
        footprint="0402"
        layer={"bottom"}
      />

      <hole name="H1" diameter={3.3048} pcbX={-10} pcbY={-3.81} />
      <hole name="H2" diameter={3.3048} pcbX={10} pcbY={-3.81} />
    </board>
  )
}
