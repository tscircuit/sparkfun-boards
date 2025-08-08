import { sel } from "@tscircuit/core"
import { BME280 } from "./BME280"

export default () => (
  <board width="12.7mm" height="20.32mm">
    <BME280
      name="U1"
      schWidth={1.8}
      schPinStyle={{
        pin1: {
          bottomMargin: 0.2,
        },
        pin2: {
          bottomMargin: 0.2,
        },
        pin3: {
          bottomMargin: 0.2,
        },
        pin8: {
          bottomMargin: 0.2,
        },
        pin7: {
          bottomMargin: 0.2,
        },
        pin6: {
          bottomMargin: 0.2,
        },
      }}
      pcbX={0}
      pcbY={1.27}
      pcbRotation={270}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="U1.pin8"
      schX={1.8}
      schY={-2}
    />
    <netlabel
      net="N_CS"
      anchorSide="left"
      connection="U1.pin7"
      schX={6}
      schY={0.2}
    />
    <netlabel
      net="SDI_SDA"
      anchorSide="left"
      connection="U1.pin6"
      schX={6}
      schY={-0.2}
    />
    <netlabel
      net="SCK_SCL"
      anchorSide="left"
      connection="U1.pin5"
      schX={6}
      schY={-0.6}
    />
    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0603_textbottom"
      schRotation={90}
      schX={2.3}
      schY={1.6}
      connections={{
        pin1: sel.U1.pin6,
      }}
      pcbX={-3.81}
      pcbY={-3.175}
      pcbRotation={180}
    />
    <solderjumper
      name="SJ1"
      layer="bottom"
      pinCount={3}
      footprint="solderjumper3_bridged123_p0.8128_pw0.635_ph1.27"
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      schRotation={-180}
      schX={3.1}
      schY={2.6}
      connections={{
        pin1: sel.R2.pin2,
        pin3: sel.R1.pin2,
      }}
      pcbX={-3.045}
      pcbY={-4.62}
      pcbRotation={-90}
    />
    <silkscreentext
      text="I2C"
      layer="bottom"
      fontSize="1mm"
      pcbX={-3.045}
      pcbY={-5.5}
    />
    <silkscreentext
      text="PU"
      layer="bottom"
      fontSize="1mm"
      pcbX={-3.14}
      pcbY={-6.3}
    />

    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="SJ1.pin2"
      schX={3.1}
      schY={3.1}
    />
    <resistor
      name="R2"
      footprint="0603"
      resistance="4.7k"
      schRotation={90}
      schX={3.9}
      schY={1.6}
      connections={{
        pin1: sel.U1.pin5,
      }}
      pcbX={-3.81}
      pcbY={-4.445}
      pcbRotation={180}
    />

    <solderjumper
      name="SJ2"
      layer="bottom"
      pinCount={2}
      footprint="solderjumper2_bridged12_p1.016_pw0.635_ph1.27"
      bridgedPins={[["1", "2"]]}
      schRotation={90}
      schX={5.4}
      schY={2.4}
      connections={{
        pin1: sel.R3.pin2,
      }}
      pcbX={0.9525}
      pcbY={-2.99}
      pcbRotation={90}
    />
    <silkscreentext
      text="CS"
      layer="bottom"
      fontSize="1mm"
      pcbX={0.9525}
      pcbY={-1.2}
    />
    <silkscreentext
      text="PU"
      layer="bottom"
      fontSize="1mm"
      pcbX={0.9525}
      pcbY={-2}
    />

    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="SJ2.pin2"
      schX={5.4}
      schY={3.1}
    />
    <resistor
      name="R3"
      footprint="0603"
      resistance="4.7k"
      schRotation={90}
      schX={5.4}
      schY={1.2}
      connections={{
        pin1: sel.U1.pin7,
      }}
      pcbX={1.5875}
      pcbY={-3.175}
    />

    <netlabel
      net="GND"
      anchorSide="top"
      connection="U1.pin2"
      schX={-1.8}
      schY={-2}
    />
    <capacitor
      name="C2"
      footprint="0603"
      capacitance="0.1uf"
      schRotation={90}
      schX={-2.8}
      schY={-1.3}
      pcbX={1.27}
      pcbY={4.048125}
      pcbRotation={180}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C2.pin1"
      schX={-2.8}
      schY={-2}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connectsTo={["C2.pin2", "U1.pin1"]}
      schX={-2.8}
      schY={1.2}
    />
    <capacitor
      name="C1"
      footprint="0603"
      capacitance="0.1uf"
      schRotation={90}
      schX={-3.8}
      schY={-1.3}
      pcbX={1.27}
      pcbY={5.635625}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="C1.pin1"
      schX={-3.8}
      schY={-2}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connectsTo={["C1.pin2", "U1.pin3"]}
      schX={-3.8}
      schY={1.2}
    />
    <netlabel
      net="SDD_ADR"
      anchorSide="right"
      connectsTo={["U1.pin4", "SJ3.pin2"]}
      schX={-5.4}
      schY={-0.6}
    />
    <solderjumper
      name="SJ3"
      layer="bottom"
      pinCount={3}
      footprint="solderjumper3_bridged123_p0.8128_pw0.635_ph1.27"
      bridgedPins={[["2", "3"]]}
      schRotation={90}
      schX={-7}
      schY={1}
      connections={{
        pin3: sel.R4.pin1,
      }}
      pcbX={-2.41}
      pcbY={8.89}
      pcbRotation={180}
    />
    <silkscreentext
      text="ADR:"
      layer="bottom"
      fontSize="1mm"
      pcbX={2.2}
      pcbY={9.7}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="SJ3.pin1"
      schX={-7.1}
      schY={0.2}
    />
    <resistor
      name="R4"
      footprint="0603"
      resistance="4.7k"
      schX={-7.1}
      schY={2.3}
      schRotation={90}
      pcbX={0.9525}
      pcbY={7.62}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="R4.pin2"
      schX={-7.1}
      schY={3.2}
    />
    <schematictext
      text="EN ADR PULLUP"
      color="gray"
      schRotation={-90}
      schX={-7.7}
      schY={1.5}
      fontSize={0.2}
    />
    <schematictext
      text="SJ1 pulls up the SCK and SDA lines"
      color="gray"
      schY={4.3}
      fontSize={0.2}
      anchor="left"
    />
    <schematictext
      text="for I2C operation"
      color="gray"
      schY={4.05}
      fontSize={0.2}
      anchor="left"
    />
    <schematictext
      schRotation={-90}
      schX={3.4}
      schY={1.5}
      text="EN I2C PULL"
      color="gray"
      fontSize={0.2}
    />

    <schematictext
      schRotation={-90}
      schX={5.74}
      schY={2.2}
      text="EN I2C MODE"
      color="gray"
      fontSize={0.2}
    />

    <schematictext
      text="SJ2 pulls up the N_CS line forcing I2C"
      color="gray"
      schY={4.3}
      schX={5}
      fontSize={0.2}
      anchor="left"
    />
    <schematictext
      text="mode if no signal is on N_CS"
      color="gray"
      schY={4.1}
      schX={5}
      fontSize={0.2}
      anchor="left"
    />
    <schematictext
      text="SJ3 must be opened."
      color="gray"
      fontSize={0.2}
      schX={-8}
      schY={4}
      anchor="right"
    />
    <schematictext
      text="SPI 3-WIRE:"
      color="gray"
      fontSize={0.25}
      schX={-8.9}
      schY={4.3}
      anchor="right"
    />
    <schematictext
      text="is not necessary."
      color="gray"
      fontSize={0.2}
      schX={-8.4}
      schY={4.6}
      anchor="right"
    />
    <schematictext
      text="remove 4.7k load on the SPI lines but"
      color="gray"
      fontSize={0.2}
      schX={-6.57}
      schY={4.8}
      anchor="right"
    />
    <schematictext
      text="Jumpers SJ1-SJ3 can be opend to"
      color="gray"
      fontSize={0.2}
      schX={-6.85}
      schY={5}
      anchor="right"
    />
    <schematictext
      text="SPI 4-WIRE:"
      color="gray"
      fontSize={0.25}
      schX={-8.9}
      schY={5.2}
      anchor="right"
    />
    <schematictext
      text="Leave the copper-connected jumpers"
      color="gray"
      fontSize={0.2}
      schX={-6.58}
      schY={5.9}
      anchor="right"
    />
    <schematictext
      text="SJ1-SJ2 as default, use SJ3 to set"
      color="gray"
      fontSize={0.2}
      schX={-6.82}
      schY={5.7}
      anchor="right"
    />
    <schematictext
      text="the I2C address"
      color="gray"
      fontSize={0.2}
      schX={-8.45}
      schY={5.5}
      anchor="right"
    />
    <schematictext
      text="I2C:"
      color="gray"
      fontSize={0.25}
      schX={-9.9}
      schY={6.1}
      anchor="right"
    />
    <schematictext
      text="MODES:"
      color="gray"
      fontSize={0.25}
      schX={-9.9}
      schY={6.35}
      anchor="right"
    />
    <schematictext
      text="BME280 Breakout"
      color="gray"
      fontSize={0.35}
      schX={-8.05}
      schY={6.7}
      anchor="right"
    />
    <schematictext
      text="SJ3 controls the lowest bit"
      color="gray"
      fontSize={0.2}
      schX={-9}
      schY={1.2}
      anchor="right"
    />
    <schematictext
      text="of the I2C address--can be:"
      color="gray"
      fontSize={0.2}
      schX={-8.9}
      schY={1}
      anchor="right"
    />
    <schematictext
      text="0x1110110"
      color="gray"
      fontSize={0.2}
      schX={-10.2}
      schY={0.8}
      anchor="right"
    />
    <schematictext
      text="0x1110111"
      color="gray"
      fontSize={0.2}
      schX={-10.2}
      schY={0.6}
      anchor="right"
    />
    <schematictext
      text="Open for SPI 3-wire mode"
      color="gray"
      fontSize={0.2}
      schX={-8.85}
      schY={0.4}
      anchor="right"
    />
    <schematictext
      text="Ports:"
      color="gray"
      fontSize={0.35}
      schX={-10}
      schY={-4}
      anchor="right"
    />
    <schematictext
      text="(Use only 1)"
      color="gray"
      fontSize={0.2}
      schX={-9.8}
      schY={-4.3}
      anchor="right"
    />

    <pinheader
      name="JP1"
      gender="female"
      footprint="pinrow4_p2.54_id1.016_od1.8796_doublesidedpinlabel_pinlabelorthogonal_pinlabeltextalignright_pinlabelverticallyinverted"
      pinCount={4}
      pinLabels={["GND", "VCC", "SDA", "SCL"]}
      schX={-9}
      schY={-6}
      schWidth={0.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4"],
        },
      }}
      connections={{
        pin3: sel.net().SDI_SDA,
        pin4: sel.net().SCK_SCL,
      }}
      pcbX={-5.08}
      pcbY={3.81}
      pcbRotation={270}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="JP1.pin1"
      schX={-7}
      schY={-7}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="JP1.pin2"
      schX={-7}
      schY={-4.7}
    />
    <schematictext
      text="I2C"
      color="gray"
      fontSize={0.35}
      schX={-9}
      schY={-5}
      anchor="right"
    />

    <pinheader
      name="JP2"
      gender="female"
      footprint="pinrow6_p2.54_id1.016_od1.8796_nosquareplating_doublesidedpinlabel"
      pinCount={6}
      schX={-4}
      schY={-6}
      schWidth={0.6}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"],
        },
      }}
      connections={{
        pin1: sel.net.N_CS,
        pin2: sel.net().SDI_SDA,
        pin3: sel.net().SDO_ADR,
        pin4: sel.net().SCK_SCL,
      }}
      pcbX={5.08}
      pcbY={1.27}
      pcbRotation={90}
      pcbPinLabels={{
        pin1: "N_CS",
        pin2: "SDI",
        pin3: "SDO",
        pin4: "SCK",
        pin5: "V3_3",
        pin6: "GND",
      }}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      connection="JP2.pin6"
      schX={-1.7}
      schY={-7}
    />
    <netlabel
      net="V3_3"
      anchorSide="bottom"
      connection="JP2.pin5"
      schX={-1.9}
      schY={-5}
    />
    <schematictext
      text="SPI"
      color="gray"
      fontSize={0.35}
      schX={-4}
      schY={-4.9}
      anchor="right"
    />

    <silkscreentext text="BME" fontSize="1.5mm" pcbX={-4} pcbY={-7} />
    <silkscreentext text="280" fontSize="1.5mm" pcbX={-4} pcbY={-8.2} />

    <hole diameter="3.302mm" pcbY={-7.62} />
  </board>
)
