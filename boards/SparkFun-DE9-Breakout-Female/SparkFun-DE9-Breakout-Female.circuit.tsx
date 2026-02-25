import { sel, SilkscreenText } from "tscircuit"
import { DS1037_09FNAKT74_0CC } from "./DS1037_09FNAKT74_0CC"

export default () => {
  return (
    <board width="22.86mm" height="31.75mm">
      <DS1037_09FNAKT74_0CC
        pcbX={-2}
        pcbY={0}
        name="P1"
        pcbRotation={180}
        connections={{
          pin1: sel.J2.pin1,
          pin2: sel.J2.pin2,
          pin3: sel.J2.pin3,
          pin4: sel.J2.pin4,
          pin5: sel.J2.pin5,
          pin6: sel.J2.pin6,
          pin7: sel.J2.pin7,
          pin8: sel.J2.pin8,
          pin9: sel.J2.pin9,
        }}
        schPinArrangement={{
          leftSide: {
            direction: "bottom-to-top",
            pins: [
              "pin1",
              "pin2",
              "pin3",
              "pin4",
              "pin5",
              "pin6",
              "pin7",
              "pin8",
              "pin9",
            ],
          },
        }}
      />
      <jumper
        name="J2"
        footprint={"pinrow9_id1.016_od1.88_nosquareplating"}
        schWidth={0.65}
        cadModel={null}
        schDirection="right"
        schPinArrangement={{
          rightSide: {
            direction: "bottom-to-top",
            pins: [
              "pin1",
              "pin2",
              "pin3",
              "pin4",
              "pin5",
              "pin6",
              "pin7",
              "pin8",
              "pin9",
            ],
          },
        }}
        schX={-3}
        schY={0}
        pcbX={10}
        pcbY={0}
        pcbRotation={90}
      />
      <jumper
        name="J3"
        footprint={"pinrow1_id1.016_od1.88_nosquareplating"}
        schWidth={0.65}
        cadModel={null}
        schDirection="right"
        pinLabels={{
          pin1: ["GND"],
        }}
        schX={-3}
        schY={-2}
        pcbX={10}
        pcbY={12.75}
        pcbRotation={90}
        connections={{ pin1: sel.net().GND }}
      />
      <jumper
        name="J4"
        footprint={"pinrow1_id1.016_od1.88_nosquareplating"}
        schWidth={0.65}
        cadModel={null}
        schDirection="right"
        pinLabels={{
          pin1: ["GND"],
        }}
        schX={-3}
        schY={-3}
        pcbX={10}
        pcbY={-12.75}
        pcbRotation={90}
        connections={{ pin1: sel.net().GND }}
      />

      <netlabel
        net="GND"
        schX={-2}
        schY={-3.5}
        anchorSide="top"
        connectsTo={sel.J4.pin1}
      />

      <hole diameter={3.302} pcbY={12.7} pcbX={5.08} />
      <hole diameter={3.302} pcbY={-12.7} pcbX={5.08} />

      <copperpour connectsTo="net.GND" layer="top" />
      <copperpour connectsTo="net.GND" layer="bottom" />

      <silkscreentext
        text=" Sparkfun \n Female DE9"
        pcbX={3.5}
        pcbY={0}
        fontSize={2}
        pcbRotation={90}
      />
      <schematictext
        text="D-Sub Female Connector -DE9"
        schX={-2}
        schY={2}
        fontSize={0.5}
      />

      <schematictext
        text="RS232 + RS485 Pinout Male"
        schX={4.5}
        schY={0}
        fontSize={0.3}
      />
      <schematictable schX={10} schY={-3} borderWidth={0.05} fontSize={0.3}>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 1" />
          <schematiccell
            text="Data Carrier Detect (DCD)"
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 2" />
          <schematiccell text="Received Data (RXD)" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 3" />
          <schematiccell text="Transmitted Data (TXD)" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 4" />
          <schematiccell
            text="Data Terminal Ready (DTR)"
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 5" />
          <schematiccell text="Ground (GND)" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 6" />
          <schematiccell text="Data Set Ready (DSR)" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 7" />
          <schematiccell text="Request to Send (RTS)" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 8" />
          <schematiccell text="Clear to Send (CTS)" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 9" />
          <schematiccell text="Ring Indicator (RI)" horizontalAlign="left" />
        </schematicrow>
      </schematictable>

      <schematictext text="CAN bus Pinout" schX={4} schY={-7} fontSize={0.3} />
      <schematictable schX={7} schY={-10} borderWidth={0.05} fontSize={0.3}>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 1" />
          <schematiccell text="Shield" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 2" />
          <schematiccell text="NC" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 3" />
          <schematiccell text="GND" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 4" />
          <schematiccell text="CAN-L" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 5" />
          <schematiccell text="NC" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 6" />
          <schematiccell text="VCC" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 7" />
          <schematiccell text="NC" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 8" />
          <schematiccell text="CAN-H" horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.6}>
          <schematiccell text="Pin 9" />
          <schematiccell text="Optional GND" horizontalAlign="left" />
        </schematicrow>
      </schematictable>
    </board>
  )
}
