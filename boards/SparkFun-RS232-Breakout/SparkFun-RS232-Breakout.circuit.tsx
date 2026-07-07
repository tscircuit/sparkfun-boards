import { sel } from "tscircuit"
import { DS1037_09FNAKT74_0CC } from "./imports/DS1037_09FNAKT74_0CC"
import { SP3223EEY_L_TR } from "./imports/SP3223EEY_L_TR"

export default () => (
  <board width="27.94mm" height="31.75mm" autorouter="auto-cloud">
    <schematicsection name="rs232" displayName="RS-232 / DE9 Connector" />
    <schematicsection name="transceiver" displayName="RS-232 Transceiver" />
    <schematicsection name="ttl" displayName="TTL Logic Header" />

    {/* RS-232 transceiver (ST3222/SP3223) */}
    <SP3223EEY_L_TR
      name="U2"
      schSectionName="transceiver"
      pcbX={5.075}
      pcbY={0.067}
      schX={0}
      schY={0}
      schWidth={2}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin2", // C1_POS
            "pin4", // C1_NEG
            "pin1", // EN
            "pin20", // SHUTDOWN
            "pin13", // T1IN
            "pin12", // T2IN
            "pin15", // R1OUT
            "pin10", // R2OUT
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin5", // C2_POS
            "pin6", // C2_NEG
            "pin3", // V_POS
            "pin7", // V_NEG
            "pin17", // T1OUT
            "pin8", // T2OUT
            "pin16", // R1IN
            "pin9", // R2IN
          ],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["pin19"], // VCC
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["pin18"],
        },
      }}
      connections={{
        // Charge-pump capacitors (flying + reservoir)
        C1_POS: sel.C2.pin1,
        C1_NEG: sel.C2.pin2,
        C2_POS: sel.C3.pin1,
        C2_NEG: sel.C3.pin2,
        V_POS: sel.C4.pin2,
        V_NEG: sel.C1.pin1,
        // Power & control
        VCC: sel.net().VCC,
        GND: sel.net().GND,
        EN: sel.net().EN,
        SHUTDOWN: sel.net().SHDN,
        // TTL/CMOS side (0.1" header)
        T1IN: sel.net().TX_IN,
        R1OUT: sel.net().RX_OUT,
        T2IN: sel.net().RTS_IN,
        R2OUT: sel.net().CTS_OUT,
        // RS-232 side (DE9)
        T1OUT: sel.net().TxD_DE9,
        R1IN: sel.net().RxD_DE9,
        T2OUT: sel.net().RTS_DE9,
        R2IN: sel.net().CTS_DE9,
      }}
    />

    {/* DE9 female connector */}
    <DS1037_09FNAKT74_0CC
      name="J3"
      schSectionName="rs232"
      pcbX={-4}
      pcbY={-0.113}
      pcbRotation={180}
      schX={-11}
      schY={0}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin7", "pin8", "pin9"],
        },
      }}
      connections={{
        pin2: sel.net().TxD_DE9,
        pin3: sel.net().RxD_DE9,
        pin5: sel.net().GND,
        pin7: sel.net().CTS_DE9,
        pin8: sel.net().RTS_DE9,
      }}
    />

    {/* Charge-pump capacitors (all on U2's left, near the C1+/C2+/V+/V- pins) */}
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="cap0603"
      schSectionName="transceiver"
      pcbX={0}
      pcbY={2.222}
      pcbRotation={90}
      schX={-4}
      schY={4}
      schRotation={-90}
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
    />
    <capacitor
      name="C3"
      capacitance="0.1uF"
      footprint="cap0603"
      schSectionName="transceiver"
      pcbX={0}
      pcbY={-0.953}
      pcbRotation={90}
      schX={3.5}
      schY={3.4}
      schRotation={-90}
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="cap0603"
      schSectionName="transceiver"
      pcbX={5.398}
      pcbY={5.7}
      pcbRotation={90}
      schX={4}
      schY={1.8}
      schRotation={-90}
      connections={{ pin1: sel.net().GND }}
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
    />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="cap0603"
      schSectionName="transceiver"
      pcbX={5.398}
      pcbY={-5.7}
      pcbRotation={90}
      schX={4}
      schY={-1}
      schRotation={-90}
      connections={{ pin2: sel.net().GND }}
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
    />

    {/* SHUTDOWN pull-up */}
    <resistor
      name="R2"
      resistance="10k"
      footprint="0603"
      schSectionName="transceiver"
      pcbX={8.5}
      pcbY={5.7}
      pcbRotation={270}
      schX={-5}
      schY={5}
      schRotation={90}
      connections={{ pin1: sel.net().SHDN, pin2: sel.net().VCC }}
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
    />

    {/* EN solder jumper (bottom side, normally open) */}
    <solderjumper
      name="JP1"
      footprint="solderjumper2_bridged12"
      bridged={false}
      layer="bottom"
      schSectionName="transceiver"
      pcbX={2.286}
      pcbY={4.699}
      pcbRotation={90}
      schX={-5}
      schY={-5}
      pinLabels={{ pin1: ["GND"], pin2: ["EN"] }}
      connections={{ pin1: sel.net().GND, pin2: sel.net().EN }}
    />

    {/* 0.1" breakout header (TTL/CMOS side) */}
    <pinheader
      name="J1"
      pinCount={9}
      gender="male"
      pitch="2.54mm"
      footprint="pinrow9"
      schFacingDirection="right"
      schSectionName="ttl"
      pcbX={12.7}
      pcbY={0}
      pcbRotation={270}
      schX={11}
      schY={0}
      schWidth={0.58}
      pinLabels={["VCC", "GND", "CTS", "RTS", "TX", "RX", "EN", "SHDN", "GND"]}
      connections={{
        pin1: sel.net().VCC,
        pin2: sel.net().GND,
        pin3: sel.net().CTS_OUT,
        pin4: sel.net().RTS_IN,
        pin5: sel.net().TX_IN,
        pin6: sel.net().RX_OUT,
        pin7: sel.net().EN,
        pin8: sel.net().SHDN,
        pin9: sel.net().GND,
      }}
    />

    {/* Mounting standoffs */}
    <hole diameter={3.302} pcbX={3.81} pcbY={13.017} />
    <hole diameter={3.302} pcbX={3.81} pcbY={-13.018} />

    <silkscreentext
      text="SparkFun RS232 Breakout"
      pcbX={0}
      pcbY={-14.6}
      fontSize={0.8}
    />
  </board>
)
