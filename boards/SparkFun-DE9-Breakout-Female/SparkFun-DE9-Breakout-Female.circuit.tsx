import { sel, SilkscreenText } from "tscircuit"
import { DS1037_09FNAKT74_0CC } from "./DS1037_09FNAKT74_0CC"

export default () => {
  return (
    <board width="22.86mm" height="31.75mm">
      <DS1037_09FNAKT74_0CC
        pcbX={-2}
        pcbY={0}
        schY={0.4}
        schX={-2}
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
            direction: "top-to-bottom",
            pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
          },
          rightSide: {
            direction: "top-to-bottom",
            pins: ["pin6", "pin7", "pin8", "pin9"],
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
            direction: "top-to-bottom",
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
        schX={-4}
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
        schY={-2.5}
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
        schX={-2.1}
        schY={-4.3}
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
        schX={-3.95}
        schY={2.15}
        fontSize={0.36}
      />

      <schematictext
        text="RS232 + RS485 Pinout Male"
        schX={5.5}
        schY={1.4}
        fontSize={0.18}
      />
      <schematictext
        text="Common Pinouts"
        schX={6.2}
        schY={2.35}
        fontSize={0.32}
      />
      <schematictable
        schX={6.05}
        schY={-0.55}
        borderWidth={0.03}
        fontSize={0.18}
      >
        <schematicrow height={0.36}>
          <schematiccell text="Pin 1" width={0.78} />
          <schematiccell
            text="Data Carrier Detect (DCD)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 2" width={0.78} />
          <schematiccell
            text="Received Data (RXD)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 3" width={0.78} />
          <schematiccell
            text="Transmitted Data (TXD)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 4" width={0.78} />
          <schematiccell
            text="Data Terminal Ready (DTR)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 5" width={0.78} />
          <schematiccell
            text="Ground (GND)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 6" width={0.78} />
          <schematiccell
            text="Data Set Ready (DSR)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 7" width={0.78} />
          <schematiccell
            text="Request to Send (RTS)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 8" width={0.78} />
          <schematiccell
            text="Clear to Send (CTS)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 9" width={0.78} />
          <schematiccell
            text="Ring Indicator (RI)"
            width={2.7}
            horizontalAlign="left"
          />
        </schematicrow>
      </schematictable>

      <schematictext
        text="CAN bus Pinout"
        schX={5.5}
        schY={-3.1}
        fontSize={0.18}
      />
      <schematictable
        schX={6.05}
        schY={-4.95}
        borderWidth={0.03}
        fontSize={0.18}
      >
        <schematicrow height={0.36}>
          <schematiccell text="Pin 1" width={0.78} />
          <schematiccell text="Shield" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 2" width={0.78} />
          <schematiccell text="NC" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 3" width={0.78} />
          <schematiccell text="GND" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 4" width={0.78} />
          <schematiccell text="CAN-L" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 5" width={0.78} />
          <schematiccell text="NC" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 6" width={0.78} />
          <schematiccell text="VCC" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 7" width={0.78} />
          <schematiccell text="NC" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 8" width={0.78} />
          <schematiccell text="CAN-H" width={1.95} horizontalAlign="left" />
        </schematicrow>
        <schematicrow height={0.36}>
          <schematiccell text="Pin 9" width={0.78} />
          <schematiccell
            text="Optional GND"
            width={1.95}
            horizontalAlign="left"
          />
        </schematicrow>
      </schematictable>
    </board>
  )
}
