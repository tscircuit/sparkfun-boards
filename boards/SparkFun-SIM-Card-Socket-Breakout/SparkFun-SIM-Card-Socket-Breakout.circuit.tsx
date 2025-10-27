import { SIMHolder } from "./SIMHolder"
export default () => (
  <board width={25.4} height={31}>
    <SIMHolder
      name="U1"
      pcbRotation={-90}
      pcbX={3.6}
      pcbY={-1.7}
      schX={-8}
      schY={0}
      connections={{
        pin4: "net.VCC",
        pin3: "net.RST",
        pin2: "net.CLK",
        pin1: "net.SW1",
        pin8: "net.SW2",
        pin7: "net.I_O",
        pin6: "net.VPP",
        pin5: "net.GND",
      }}
    />
    <jumper
      name="JP1"
      pinLabels={{
        pin1: ["VCC"],
        pin2: ["RST"],
        pin3: ["CLK"],
        pin4: ["SW1"],
        pin5: ["SW2"],
        pin6: ["I_O"],
        pin7: ["VPP"],
        pin8: ["GND"],
      }}
      footprint={"pinrow8_id1.016_od1.88_p2.54"}
      connections={{
        pin1: "net.VCC",
        pin2: "net.RST",
        pin3: "net.CLK",
        pin4: "net.SW1",
        pin5: "net.SW2",
        pin6: "net.I_O",
        pin7: "net.VPP",
        pin8: "net.GND",
      }}
      schDirection="right"
      schX={-5}
      schWidth={0.7}
      cadModel={null}
      pcbRotation={-90}
      pcbX={-11.4}
    />
    <hole diameter={3.3} pcbX={-10} pcbY={13} />
    <hole diameter={3.3} pcbX={-10} pcbY={-13} />
  </board>
)
