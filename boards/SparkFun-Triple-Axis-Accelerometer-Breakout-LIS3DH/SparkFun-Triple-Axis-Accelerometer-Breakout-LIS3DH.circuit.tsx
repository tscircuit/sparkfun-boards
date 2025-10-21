import { sel } from "tscircuit"
import { LIS3DHTR } from "./LIS3DH"

const JP1PinLabels = {
  pin1: ["GND"],
  pin2: ["VCC"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SA0"],
  pin6: ["N_CS"],
}
const JP2PinLabels = {
  pin1: ["GND"],
  pin2: ["ADC1"],
  pin3: ["ADC2"],
  pin4: ["ADC3"],
  pin5: ["INT1"],
  pin6: ["INT2"],
}
export default () => (
  <board width="22.86mm" height="12.7mm" routingDisabled>
    <LIS3DHTR
      name="U1"
      schY={-0.5}
      pcbRotation={180}
      connections={{
        pin14: sel.U1.pin1,
        pin1: sel.C2.pin1,
        pin12: sel.U1.pin5,
        pin5: sel.C2.pin2,
        pin8: sel.R4.pin1,
        pin11: sel.net().INT1,
        pin9: sel.net().INT2,
        pin16: sel.net().ADC1,
        pin15: sel.net().ADC2,
        pin13: sel.net().ADC3,
        pin7: sel.R3.pin1,
        pin10: sel.U1.pin5,
      }}
    />
    <silkscreentext
      text="LIS3DH"
      pcbRotation={45}
      pcbX={-9}
      pcbY={-3.7}
      fontSize={1.3}
    />
    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="cap0402"
      pcbY={-0.889}
      pcbX={4.064}
      schX={-4.5}
      schY={-0.5}
      schRotation={-90}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="cap0603"
      pcbX={4.064}
      pcbY={-2.286}
      schRotation={-90}
      schX={-3.5}
      schY={-0.5}
    />
    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0603"
      pcbY={0.508}
      pcbX={4.318}
      schX={3.5}
      schY={2}
      schRotation={90}
      connections={{ pin1: sel.U1.pin4 }}
    />
    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0603"
      pcbY={2.921}
      pcbX={-1.905}
      pcbRotation={180}
      schX={5.5}
      schY={1.8}
      schRotation={90}
      connections={{ pin1: sel.U1.pin6 }}
    />
    <resistor
      name="R3"
      resistance="10k"
      footprint="0603"
      pcbY={2.794}
      pcbX={4.318}
      schX={7.5}
      schY={1}
      schRotation={90}
      connections={{ pin1: sel.JP3.pin2, pin2: sel.net.VCC }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0603"
      pcbY={1.651}
      pcbX={-4.572}
      pcbRotation={-90}
      schX={2.2}
      schY={2.5}
      schRotation={90}
      connections={{
        pin2: sel.net().VCC,
      }}
    />
    <jumper
      schWidth={0.7}
      cadModel={null}
      name="JP1"
      schHeight={1.5}
      pcbRotation={180}
      schPinStyle={{
        pin1: { marginBottom: 0.4 },
      }}
      schX={-10}
      schY={-5}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin8",
            "pin7",
            "pin6",
            "pin5",
            "pin4",
            "pin3",
            "pin2",
            "pin1",
          ],
        },
      }}
      schDirection="left"
      footprint="pinrow6_id1.016mm_od1.88mm_p2.56mm_nosquareplating_pinlabelverticallyinverted_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel"
      pcbY={-5.1}
      pinLabels={JP1PinLabels}
      connections={{
        pin1: sel.net().GND,
        pin2: sel.net().VCC,
        pin3: sel.net().SDA,
        pin4: sel.net().SCL,
        pin5: sel.net().SA0,
        pin6: sel.net().N_CS,
      }}
    />
    <jumper
      schWidth={0.7}
      cadModel={null}
      name="JP2"
      schHeight={1.5}
      pcbRotation={180}
      schPinStyle={{
        pin1: { marginBottom: 0.4 },
      }}
      schX={-6}
      schY={-5}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin8",
            "pin7",
            "pin6",
            "pin5",
            "pin4",
            "pin3",
            "pin2",
            "pin1",
          ],
        },
      }}
      connections={{
        pin1: sel.net().GND,
        pin2: sel.net().ADC1,
        pin3: sel.net().ADC2,
        pin4: sel.net().ADC3,
        pin5: sel.net().INT1,
        pin6: sel.net().INT2,
      }}
      schDirection="left"
      footprint="pinrow6_id1.016mm_od1.88mm_p2.56mm_nosquareplating_pinlabelverticallyinverted_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel"
      pcbY={5.1}
      pinLabels={JP2PinLabels}
    />
    <solderjumper
      name="JP3"
      connections={{ pin1: sel.net().GND }}
      layer="bottom"
      schRotation={90}
      schX={7.5}
      schY={-0.5}
      pcbRotation={-90}
      pcbY={0.058}
      footprint="solderjumper2_pw0.635_ph1.27_p0.9"
    />
    <solderjumper
      name="JP4"
      connections={{
        pin1: sel.R2.pin2,
        pin2: sel.net().VCC,
        pin3: sel.R1.pin2,
      }}
      layer="bottom"
      schRotation={180}
      schX={4.5}
      schY={3.5}
      pcbRotation={180}
      pcbX={-4.623}
      pcbY={-1.651}
      bridgedPins={[["1"], ["2"], ["3"]]}
      footprint="solderjumper3_bridged123_pw0.635_ph1.27_p0.9"
    />

    <hole diameter={3.302} pcbX={-8.89} />
    <hole diameter={3.302} pcbX={8.89} />

    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-4}
      schY={0.5}
      connectsTo={[sel.C1.pin1, sel.C2.pin1]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-4}
      schY={-1.5}
      connectsTo={[sel.C1.pin2, sel.C2.pin2]}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-11.5}
      schY={-3.9}
      connectsTo={sel.JP1.pin2}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-11.5}
      schY={-5.7}
      connectsTo={sel.JP1.pin1}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-6.95}
      schY={-5.7}
      connectsTo={sel.JP2.pin1}
    />
    <netlabel
      net="INT1"
      anchorSide="right"
      schX={-6.75}
      schY={-4.7}
      connectsTo={sel.JP2.pin5}
    />

    <netlabel
      net="N_CS"
      anchorSide="right"
      schX={2}
      schY={1.5}
      connectsTo={sel.R4.pin1}
    />
    <schematictext
      text="SJ2 pulls up the SCK and SDA lines"
      fontSize={0.15}
      schX={4.5}
      schY={0.5}
      anchor="left"
      color="gray"
      schRotation={-90}
    />
    <schematictext
      text="SJ2 pulls up the SCK and SDA lines"
      fontSize={0.15}
      schX={4.8}
      schY={3.8}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="for I2C operation."
      fontSize={0.15}
      schX={4.8}
      schY={3.6}
      anchor="left"
      color="gray"
    />

    <schematictext
      text="LIS3DH Breakout"
      fontSize={0.5}
      schX={-11}
      schY={7}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Accelerometer Circuitry"
      fontSize={0.4}
      schX={-5}
      schY={4}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="User Ports"
      fontSize={0.4}
      schX={-12}
      schY={-1}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Apply regulated 1.8-3.3V to VCC"
      fontSize={0.2}
      schX={-12}
      schY={-1.5}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Modes:"
      fontSize={0.2}
      schX={-11}
      schY={6.5}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="I2C:"
      fontSize={0.2}
      schX={-10.9}
      schY={6.2}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Leave the copper-connected jumper"
      fontSize={0.2}
      schX={-10.8}
      schY={5.9}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="SJ2 as default, use SJ1 to set"
      fontSize={0.2}
      schX={-10.8}
      schY={5.6}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="the I2C Address betweeen 0x18 and 0x19."
      fontSize={0.2}
      schX={-10.8}
      schY={5.3}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="SJ1 is the LSB of the address."
      fontSize={0.2}
      schX={-10.8}
      schY={5.0}
      anchor="left"
      color="gray"
    />

    <schematictext
      text="Leave the copper-connected jumper"
      fontSize={0.2}
      schX={-10.8}
      schY={4.7}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="SJ2 as default, use SJ1 to set"
      fontSize={0.2}
      schX={-10.8}
      schY={4.4}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="SPI 4-WIRE:"
      fontSize={0.2}
      schX={-10.8}
      schY={4.1}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Jumpers SJ2 can be opened to"
      fontSize={0.2}
      schX={-10.8}
      schY={3.8}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="remove 4.7k load on the SPI lines."
      fontSize={0.2}
      schX={-10.8}
      schY={3.5}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="SJ1 must be open for SPI operation."
      fontSize={0.2}
      schX={-10.8}
      schY={3.2}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="SJ2 is the MSB of the address."
      fontSize={0.2}
      schX={-10.8}
      schY={2.9}
      anchor="left"
      color="gray"
    />
    <schematictext
      text="Address selection jumper SJ1"
      anchor="left"
      fontSize={0.1}
      schX={8}
      schY={0}
      color="gray"
    />

    <schematictext
      text="Closed: 0x18 (SA0 = 0)"
      anchor="left"
      fontSize={0.1}
      schX={8}
      schY={-0.4}
      color="gray"
    />
    <schematictext
      text="Open: 0x19 (SA0 = 1)"
      anchor="left"
      fontSize={0.1}
      schX={8}
      schY={-0.6}
      color="gray"
    />

    <silkscreentext
      text="PU"
      fontSize={1.4}
      pcbY={-2.5}
      pcbX={-6.5}
      layer="bottom"
    />
    <silkscreentext
      text="EN"
      fontSize={1.4}
      pcbY={-2.5}
      pcbX={-9}
      layer="bottom"
    />

    <silkscreentext
      text="CLOSED"
      fontSize={0.9}
      pcbY={1.1}
      pcbX={4}
      layer="bottom"
    />
    <silkscreentext
      text="OPEN"
      fontSize={0.9}
      pcbY={1.1}
      pcbX={-3}
      layer="bottom"
    />
    <silkscreentext
      text="0x19"
      fontSize={0.9}
      pcbY={0.1}
      pcbX={-3}
      layer="bottom"
    />
    <silkscreentext
      text="0x18"
      fontSize={0.9}
      pcbY={0.1}
      pcbX={4}
      layer="bottom"
    />
  </board>
)
