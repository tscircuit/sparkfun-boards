import { sel } from "tscircuit"

const JP1PinLabels = {
  pin1: ["VCC"],
  pin2: ["DOUT"],
  pin3: ["DIN"],
  pin4: ["DO8"],
  pin5: ["RST"],
  pin6: ["PWM0"],
  pin7: ["PWM1"],
  pin8: ["RSV"],
  pin9: ["DTR"],
  pin10: ["GND"],
}
const JP2PinLabels = {
  pin1: ["AD0"],
  pin2: ["AD1"],
  pin3: ["AD2"],
  pin4: ["AD3"],
  pin5: ["RTS"],
  pin6: ["AD5"],
  pin7: ["VREF"],
  pin8: ["ON"],
  pin9: ["CTS"],
  pin10: ["AD4"],
}
const chipPinLabels = {
  pin1: ["VDD"],
  pin2: ["DOUT"],
  pin3: ["DIN"],
  pin4: ["DIO12"],
  pin5: ["RESET"],
  pin6: ["RSSI"],
  pin7: ["DIO11"],
  pin8: ["RES"],
  pin9: ["DTR"],
  pin10: ["GND"],
  pin11: ["DIO4"],
  pin12: ["CTS"],
  pin13: ["DIO9"],
  pin14: ["RES"],
  pin15: ["DIO5"],
  pin16: ["RTS"],
  pin17: ["DIO3"],
  pin18: ["DIO2"],
  pin19: ["DIO1"],
  pin20: ["DIO0"],
}
export default () => (
  <board width="26mm" height="26mm">
    <chip
      name="U1"
      pinLabels={chipPinLabels}
      footprint="dip20_id0.8_od1.4_w22_p1.9"
      schWidth={2}
      pcbY={-2.5}
      connections={{
        pin1: sel.JP1.pin1,
        pin2: sel.JP1.pin2,
        pin3: sel.JP1.pin3,
        pin4: sel.JP1.pin4,
        pin5: sel.JP1.pin5,
        pin6: sel.JP1.pin6,
        pin7: sel.JP1.pin7,
        pin8: sel.JP1.pin8,
        pin9: sel.JP1.pin9,
        pin10: sel.JP1.pin10,
        pin11: sel.JP2.pin10,
        pin12: sel.JP2.pin9,
        pin13: sel.JP2.pin8,
        pin14: sel.JP2.pin7,
        pin15: sel.JP2.pin6,
        pin16: sel.JP2.pin5,
        pin17: sel.JP2.pin4,
        pin18: sel.JP2.pin3,
        pin19: sel.JP2.pin2,
        pin20: sel.JP2.pin1,
      }}
      manufacturerPartNumber="XBEE"
    />
    <silkscreentext text="UP" fontSize={2} pcbY={11} pcbX={-10} />
    <silkscreentext
      text="DOWN"
      fontSize={2}
      layer="bottom"
      pcbY={11}
      pcbX={-10}
    />

    <silkscreentext text="1" fontSize={2} pcbY={8.5} pcbX={-11} />
    <silkscreentext text="20" fontSize={2} pcbY={8.5} pcbX={11} />
    <silkscreentext
      text="XBee"
      fontSize={2}
      pcbX={3.5}
      pcbY={0}
      layer="bottom"
      pcbRotation={-90}
    />
    <silkscreentext
      text="Breakout"
      fontSize={2}
      layer="bottom"
      pcbX={2}
      pcbRotation={-90}
    />
    <silkscreentext
      text="sparkfun.com"
      fontSize={2}
      layer="bottom"
      pcbX={-2}
      pcbRotation={-90}
    />

    <jumper
      schWidth={0.65}
      schX={-3}
      name="JP1"
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
            "pin10",
          ],
        },
      }}
      pinLabels={JP1PinLabels}
      pcbX={-6.431}
      pcbRotation={-90}
      pcbY={-0.35}
      cadModel={null}
      footprint="pinrow10_id1.016mm_od1.626mm_p2.53mm_nosquareplating_pinlabelverticallyinverted_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel"
    />
    <jumper
      schWidth={0.65}
      schX={3}
      schDirection="left"
      name="JP2"
      pinLabels={JP2PinLabels}
      pcbX={6.431}
      pcbY={-0.35}
      pcbRotation={-90}
      cadModel={null}
      footprint="pinrow10_id1.016mm_od1.626mm_p2.53mm_nosquareplating_pinlabelverticallyinverted_pinlabeltextalignleft_pinlabelorthogonal_doublesidedpinlabel"
    />
  </board>
)
