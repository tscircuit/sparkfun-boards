import { sel } from "tscircuit"
import { FPC_0_5_22P } from "./FPC-0.5-22P"

const pinLabels = {
  pin1: ["v3_3"],
  pin2: ["SDA"],
  pin3: ["SCL"],
  pin4: ["IO1"],
  pin5: ["IO0"],
  pin6: ["GND1"],
  pin7: ["D3_P"],
  pin8: ["D3_N"],
  pin9: ["D2_P"],
  pin10: ["D2_N"],
  pin11: ["CK_P"],
  pin12: ["CK_N"],
  pin13: ["D1_P"],
  pin14: ["D1_N"],
  pin15: ["D0_P"],
  pin16: ["D0_N"],
  pin17: ["GND2"],
}
export default () => (
  <board width="16mm" height="44mm">
    <FPC_0_5_22P
      name="JP1"
      pcbRotation={-90}
      schY={0}
      pcbX={-4.3}
      connections={{
        pin22: "JP2.GND2",
        pin21: "net.D0_N",
        pin20: "net.D0_P",
        pin18: "net.D1_N",
        pin17: "net.D1_P",
        pin15: "net.CK_N",
        pin14: "net.CK_P",
        pin12: "net.D2_N",
        pin11: "net.D2_P",
        pin9: "net.D3_N",
        pin8: "net.D3_P",
        pin6: "net.GND1",
        pin5: "net.IO0",
        pin4: "net.IO1",
        pin3: "net.SCL",
        pin2: "net.SDA",
        pin1: "net.v3_3",
      }}
    />
    <jumper
      name="JP2"
      schWidth={0.7}
      schY={0}
      schX={6}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "GND2",
            "D0_N",
            "D0_P",
            "D1_N",
            "D1_P",
            "CK_N",
            "CK_P",
            "D2_N",
            "D2_P",
            "D3_N",
            "D3_P",
            "GND1",
            "IO0",
            "IO1",
            "SCL",
            "SDA",
            "v3_3",
          ],
        },
      }}
      pinLabels={pinLabels}
      connections={{
        pin16: "net.D0_N",
        pin15: "net.D0_P",
        pin14: "net.D1_N",
        pin13: "net.D1_P",
        pin12: "net.CK_N",
        pin11: "net.CK_P",
        pin10: "net.D2_N",
        pin9: "net.D2_P",
        pin8: "net.D3_N",
        pin7: "net.D3_P",
        pin6: "net.GND1",
        pin5: "net.IO0",
        pin4: "net.IO1",
        pin3: "net.SCL",
        pin2: "net.SDA",
        pin1: "net.v3_3",
      }}
      cadModel={null}
      pcbX={6}
      footprint="pinrow17_id1.016_od1.88_nosquareplating_doublesidedpinlabel"
      pcbRotation={-90}
    />

    <netlabel
      net="GND"
      anchorSide="top"
      schX={0.95}
      schY={-2.7}
      connectsTo={[
        "JP1.GND1",
        "JP1.GND2",
        "JP1.GND3",
        "JP1.GND4",
        "JP1.GND5",
        "JP1.GND6",
        "JP1.GND7",
      ]}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={5.05}
      schY={-2.1}
      connectsTo={["JP2.GND1", "JP2.GND2"]}
    />

    <schematictext
      text="HSTX Connector Breakout"
      fontSize={0.3}
      schX={3}
      color="blue"
      schY={4}
    />
  </board>
)
