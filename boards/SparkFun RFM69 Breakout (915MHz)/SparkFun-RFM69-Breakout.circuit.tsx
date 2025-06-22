import { RFM69HCW } from "./RFM69HCW"
import { sel } from "@tscircuit/core"

const RFM69BREAKOUT =  () => (
  <board width={30} height={24}>
    <RFM69HCW
      name="U1"
      footprint="stampboard_left8_right8_bottom0_top0_w18mm_p2.22mm"
    />
    <pinheader
      name="JP1"
      pinCount={2}
      schRotation={180}
      footprint="pinrow2_pinlabeltextalignleft_pinlabelorthogonal_nosquareplating"
      schFacingDirection="right"
      schX={-3}
      schY={1.4}
      pcbRotation={90}
      pcbX={-14}
      pcbY={-8}
      showSilkscreenPinLabels={true}
      pinLabels={["3.3V", "GND"]}
    />
    <netlabel
      schX={-1.7}
      schY={1.2}
      anchorSide="top"
      net="GND"
      connection="JP1.GND"
    />
    <netlabel
      schX={-1.7}
      schY={1.8}
      net="V3_3"
      connection="JP1.pin1"
      anchorSide="bottom"
    />
    <pinheader
      name="JP2"
      pinCount={5}
      schRotation={0}
      footprint="pinrow5_pinlabeltextalignleft_pinlabelorthogonal_nosquareplating"
      schFacingDirection="right"
      schX={-3}
      schY={-0.1}
      pcbRotation={90}
      pcbX={-14}
      pcbY={4}
      connections={{
        pin1: sel.U1.pin2,
        pin2: sel.U1.pin3,
        pin3: sel.U1.pin4,
        pin4: sel.U1.pin5,
        pin5: sel.U1.pin6,
      }}
      showSilkscreenPinLabels={true}
      pinLabels={["MISO", "MOSI", "SCK", "NSS", "RESET"]}
    />
    <pinheader
      name="JP3"
      pinCount={1}
      schRotation={180}
      footprint="pinrow1_pinlabeltextalignleft_pinlabelorthogonal_nosquareplating"
      facingDirection="left"
      schX={3}
      schY={1.5}
      pcbRotation={90}
      pcbX={-14}
      pcbY={-4}
      connections={{
        pin1: sel.U1.pin14,
      }}
      showSilkscreenPinLabels={true}
      pinLabels={["DIO0"]}
      schWidth={0.5}
    />
    <pinheader
      name="JP4"
      pinCount={5}
      schRotation={0}
      footprint="pinrow5_pinlabeltextalignright_pinlabelorthogonal_nosquareplating"
      facingDirection="left"
      schX={3}
      schY={0.32}
      pcbRotation={90}
      pcbX={14}
      pcbY={3.3}
      connections={{
        pin1: sel.U1.pin15,
        pin2: sel.U1.pin16,
        pin3: sel.U1.pin11,
        pin4: sel.U1.pin12,
        pin5: sel.U1.pin7,
      }}
      showSilkscreenPinLabels={true}
      pinLabels={["DIO0", "DIO1", "DIO2", "DIO3", "DIO4"]}
    />
    <pinheader
      name="JP5"
      pinCount={3}
      schRotation={180}
      footprint="pinrow3_pinlabeltextalignright_pinlabelorthogonal_nosquareplating"
      facingDirection="left"
      schX={3}
      schY={-1}
      pcbRotation={90}
      pcbX={14}
      pcbY={-6.9}
      connections={{
        pin1: sel.U1.pin8,
        pin2: sel.U1.pin9,
        pin3: sel.U1.pin1,
      }}
      showSilkscreenPinLabels={true}
      pinLabels={["GND", "ANT", "GND"]}
    />
    <netlabel
      schX={+1.6}
      schY={-1.3}
      anchorSide="top"
      net="GND"
      connectsTo={["U1.pin8"]}
    />
    <capacitor
      name="C1"
      capacitance={"0.1uF"}
      footprint={"1210"}
      schRotation={90}
      schX={-4.5}
      pcbY={-10.5}
      pcbX={3.5}
      pcbRotation={180}
    />
    <capacitor
      name="C2"
      capacitance={"0.1uF"}
      footprint={"0603"}
      schRotation={90}
      schX={-5.5}
      pcbY={-10.5}
      pcbX={-3.5}
    />
    <net name="GND" />
    <net name="V3_3" />
    <schematictext
      text="Antenna length (1/4 wave)"
      schX={5}
      schY={-1}
      fontSize={0.2}
      anchor="bottom"
      color="red"
    />
    <schematictext
      text='915MHz: 3.07" = 78mm'
      schX={4.85}
      schY={-1.3}
      fontSize={0.2}
      anchor="bottom"
      color="red"
    />
    <schematictext
      text='434MHz: 6.47" = 164mm'
      schX={4.9}
      schY={-1.5}
      fontSize={0.2}
      anchor="bottom"
      color="red"
    />
    <trace from={sel.U1.pin13} to="JP1.pin1" />
    <trace from={sel.C1.pin1} to={"net.GND"} />
    <trace from={sel.C2.pin1} to={"net.GND"} />
    <trace from={sel.C1.pin2} to={"net.V3_3"} />
    <trace from={sel.C2.pin2} to={"net.V3_3"} />
  </board>
)

export default RFM69BREAKOUT
