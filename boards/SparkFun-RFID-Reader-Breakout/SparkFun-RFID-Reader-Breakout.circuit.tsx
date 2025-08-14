import { sel } from "@tscircuit/core"

const pinLabels = {
  pin1: "GND",
  pin2: "RES",
  pin3: "ANT1",
  pin4: "ANT2",
  pin5: "CP",
  pin6: "TIR",
  pin7: "FORM",
  pin8: "D1",
  pin9: "D0",
  pin10: "READ",
  pin11: "VCC",
}

export default () => (
  <board width="25.4mm" height="25.4mm">
    <chip
      name="U1"
      pinLabels={pinLabels}
      manufacturerPartNumber="RFID"
      layer="bottom"
      footprint={
        <footprint name="ID_PACKAGE">
          <platedhole
            portHints={["pin1"]}
            pcbX="3mm"
            pcbY="-7.5mm"
            holeDiameter="0.8mm"
            shape="circular_hole_with_rect_pad"
            rectPadWidth="1.524mm"
            rectPadHeight="1.524mm"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="1mm"
            pcbY="-7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-1mm"
            pcbY="-7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="-3mm"
            pcbY="-7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="-5mm"
            pcbY="-7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="-5mm"
            pcbY="7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="-3mm"
            pcbY="7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="-1mm"
            pcbY="7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin9"]}
            pcbX="1mm"
            pcbY="7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin10"]}
            pcbX="3mm"
            pcbY="7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin11"]}
            pcbX="7mm"
            pcbY="7.5mm"
            holeDiameter="0.8mm"
            outerDiameter="1.524mm"
            shape="circle"
          />
        </footprint>
      }
      pcbRotation={0}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin1", "pin2", "pin3", "pin4", "pin5"],
        },
        leftSide: {
          direction: "bottom-to-top",
          pins: ["pin6", "pin7", "pin8", "pin9", "pin10", "pin11"],
        },
      }}
      schPinStyle={{
        pin1: {
          topMargin: 0.2,
        },
      }}
    />
    <pinheader
      name="JP4"
      gender="female"
      footprint="pinrow6_p2.54_id1.016_od1.8796_nosquareplating_pinlabelorthogonal_pinlabeltextalignleft_doublesidedpinlabel"
      pcbPinLabels={{
        pin1: "TIR",
        pin2: "FORM",
        pin3: "D1",
        pin4: "D0",
        pin5: "READ",
        pin6: "VCC",
      }}
      pinCount={6}
      schX={-2.3}
      pcbX={-11.43}
      pcbRotation={90}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: [1, 2, 3, 4, 5, 6],
        },
      }}
      connections={{
        pin1: sel.U1.pin6,
        pin2: sel.U1.pin7,
        pin3: sel.U1.pin8,
        pin4: sel.U1.pin9,
        pin5: sel.U1.pin10,
        pin6: sel.U1.pin11,
      }}
    />
    <pinheader
      name="JP5"
      gender="female"
      footprint="pinrow5_p2.54_id1.016_od1.8796_nosquareplating_pinlabelorthogonal_pinlabeltextalignleft_pinlabelverticallyinverted_doublesidedpinlabel"
      pinCount={5}
      pcbPinLabels={{
        pin1: "GND",
        pin2: "RES",
        pin3: "ANT1",
        pin4: "ANT2",
        pin5: "CP",
      }}
      schX={2.3}
      schY={-0.1}
      pcbX={11.43}
      pcbY={1.25}
      pcbRotation={270}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 5, 6],
        },
      }}
      connections={{
        pin1: sel.U1.pin1,
        pin2: sel.U1.pin2,
        pin3: sel.U1.pin3,
        pin4: sel.U1.pin4,
        pin5: sel.U1.pin5,
      }}
      schFacingDirection="left"
    />
    <silkscreentext text="RFID" fontSize={2} layer="bottom" pcbY={3.5} />
    <silkscreentext text="Breakout" fontSize={2} layer="bottom" pcbY={2} />
    <schematictext
      text="Works with ID-20LA, ID-12LA, ID-2LA"
      color="gray"
      fontSize={0.2}
      schY={1.8}
    />
    <schematictext
      text="VCC is 2.8 to 5V"
      color="gray"
      fontSize={0.2}
      schY={1.55}
    />
    <hole diameter="3.302mm" pcbX={8.89} pcbY={-12.7} />
    <hole diameter="3.302mm" pcbX={-8.89} pcbY={-12.7} />
    <hole diameter="3.302mm" pcbX={8.89} pcbY={12.7} />
    <hole diameter="3.302mm" pcbX={-8.89} pcbY={12.7} />
  </board>
)
