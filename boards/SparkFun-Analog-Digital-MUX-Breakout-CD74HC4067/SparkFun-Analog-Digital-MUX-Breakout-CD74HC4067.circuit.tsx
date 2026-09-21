import { sel } from "@tscircuit/core"
import { CD74HC4067 } from "./CD74HC4067"

export default () => (
  <board width="17.78mm" height="40.64mm">
    <CD74HC4067
      name="U1"
      schX={-0.5}
      pcbX={0}
      pcbY={0}
      pcbRotation={0}
      schWidth={2}
      connections={{
        CHAN0: sel.net().MUX_CH0,
        CHAN1: sel.net().MUX_CH1,
        CHAN2: sel.net().MUX_CH2,
        CHAN3: sel.net().MUX_CH3,
        CHAN4: sel.net().MUX_CH4,
        CHAN5: sel.net().MUX_CH5,
        CHAN6: sel.net().MUX_CH6,
        CHAN7: sel.net().MUX_CH7,
        CHAN8: sel.net().MUX_CH8,
        CHAN9: sel.net().MUX_CH9,
        CHAN10: sel.net().MUX_CH10,
        CHAN11: sel.net().MUX_CH11,
        CHAN12: sel.net().MUX_CH12,
        CHAN13: sel.net().MUX_CH13,
        CHAN14: sel.net().MUX_CH14,
        CHAN15: sel.net().MUX_CH15,

        VCC: sel.JP3.pin2,
        GND: sel.JP3.pin1,
        COM: sel.JP3.pin8,
        S0: sel.JP3.pin4,
        S1: sel.JP3.pin5,
        S2: sel.JP3.pin6,
        S3: sel.JP3.pin7,
        N_EN: sel.JP3.pin3,
      }}
    />

    <resistor
      name="R1"
      resistance="10k"
      footprint="0603"
      schRotation={270}
      pcbRotation={90}
      schX={1.8}
      schY={-1.5}
      pcbX={2.54}
      pcbY={6.35}
      connections={{
        pin1: sel.JP3.pin3,
      }}
    />

    <netlabel
      net="GND"
      schX={1.8}
      schY={-2.2}
      anchorSide="top"
      connectsTo={sel.R1.pin2}
    />

    <capacitor
      capacitance={"0.1uF"}
      name="C1"
      footprint={"0603"}
      schRotation={90}
      pcbRotation={90}
      pcbX={2.54}
      pcbY={-8.89}
      schX={4.0}
      schY={0}
    />

    <netlabel
      net="VCC"
      schX={4}
      schY={0.8}
      anchorSide="bottom"
      connectsTo={sel.C1.pin2}
    />

    <netlabel
      net="GND"
      schX={4}
      schY={-0.8}
      anchorSide="top"
      connectsTo={sel.C1.pin1}
    />

    <jumper
      schWidth={0.65}
      schX={-3}
      name="JP1"
      footprint={"pinrow16_id1.016_od1.88_p2.54_nosquareplating"}
      cadModel={null}
      pcbX={-7.62}
      pcbRotation={90}
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
            "pin11",
            "pin12",
            "pin13",
            "pin14",
            "pin15",
            "pin16",
          ],
        },
      }}
      pinLabels={{
        pin1: "1",
        pin2: "2",
        pin3: "3",
        pin4: "4",
        pin5: "5",
        pin6: "6",
        pin7: "7",
        pin8: "8",
        pin9: "9",
        pin10: "10",
        pin11: "11",
        pin12: "12",
        pin13: "13",
        pin14: "14",
        pin15: "15",
        pin16: "16",
      }}
      connections={{
        pin1: sel.net().MUX_CH0,
        pin2: sel.net().MUX_CH1,
        pin3: sel.net().MUX_CH2,
        pin4: sel.net().MUX_CH3,
        pin5: sel.net().MUX_CH4,
        pin6: sel.net().MUX_CH5,
        pin7: sel.net().MUX_CH6,
        pin8: sel.net().MUX_CH7,
        pin9: sel.net().MUX_CH8,
        pin10: sel.net().MUX_CH9,
        pin11: sel.net().MUX_CH10,
        pin12: sel.net().MUX_CH11,
        pin13: sel.net().MUX_CH12,
        pin14: sel.net().MUX_CH13,
        pin15: sel.net().MUX_CH14,
        pin16: sel.net().MUX_CH15,
      }}
    />

    <jumper
      schWidth={0.65}
      schX={2.6}
      schY={0}
      schDirection="left"
      name="JP3"
      footprint={"pinrow8_id1.016_od1.88_p2.54"}
      cadModel={null}
      pcbX={7.62}
      pcbRotation={90}
      pinLabels={{
        pin1: "1",
        pin2: "2",
        pin3: "3",
        pin4: "4",
        pin5: "5",
        pin6: "6",
        pin7: "7",
        pin8: "8",
      }}
      connections={{
        pin1: sel.U1.GND,
        pin2: sel.U1.pin24,
        pin4: sel.U1.pin10,
        pin5: sel.U1.pin11,
        pin6: sel.U1.pin14,
        pin7: sel.U1.pin13,
        pin8: sel.U1.pin1,
      }}
    />

    <hole name="H1" pcbX={6.35} pcbY={17.78} diameter={3.3} />
    <hole name="H2" pcbX={6.35} pcbY={-17.78} diameter={3.3} />

    <silkscreentext text="Analog/Digital MUX" pcbY={15} fontSize={1} />
    <silkscreentext text="CD74HC4067" pcbY={13.5} fontSize={1} />
  </board>
)
