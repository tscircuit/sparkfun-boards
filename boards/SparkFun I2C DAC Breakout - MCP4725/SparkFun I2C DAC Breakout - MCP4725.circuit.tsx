import { MCP4725A1T_E_CH } from "./MCP4725A1T_E_CH"

const I2CDACBREAKOUT = () => (
  <board width="15.24mm" height="15.24mm">
    <MCP4725A1T_E_CH name="U1" />
    <resistor
      resistance="4.7k"
      name="R1"
      pcbRotation={270}
      pcbY={4.445}
      footprint="0603"
      schY={1}
      schX={2}
      schRotation={90}
    />
    <resistor
      resistance="4.7k"
      name="R2"
      pcbRotation={90}
      pcbY={4.445}
      pcbX={-1.905}
      footprint="0603"
      schY={1}
      schX={3}
      schRotation={90}
    />
    <resistor
      resistance="10k"
      name="R3"
      pcbRotation={90}
      pcbY={-3.81}
      pcbX={1.905}
      footprint="0603"
      schY={-2.647}
      schX={0}
    />
    <capacitor
      capacitance="0.1uF"
      name="C1"
      pcbRotation={90}
      pcbY={4.445}
      pcbX={1.905}
      footprint="cap0603"
      schY={0}
      schX={5}
      schRotation={90}
    />

    <jumper
      name="JP6"
      pinLabels={{
        pin1: ["GND"],
        pin2: ["VOUT"],
      }}
      footprint="pinrow2_p2.54_id1.016_od1.88_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal_doublesidedpinlabel"
      pcbX={-6.35}
      pcbY={5.08}
      pcbRotation={90}
      schY={0.2}
      schX={-3}
    />

    <jumper
      name="JP5"
      pinLabels={{
        pin1: ["SCL"],
        pin2: ["SDA"],
        pin3: ["VCC"],
        pin4: ["GND"],
      }}
      footprint="pinrow4_pinlabeltextalignright_pinlabelorthogonal_pinlabelverticallyinverted_doublesidedpinlabel"
      pcbX={-6.35}
      pcbY={-2.54}
      pcbRotation={270}
      schY={0}
      schX={8}
    />

    <silkscreentext
      text="I2C"
      layer="bottom"
      pcbX={0}
      pcbY={4.2}
      fontSize={0.5}
    />
    <silkscreentext
      text="PULLUPS"
      layer="bottom"
      pcbX={0}
      pcbY={3.2}
      fontSize={0.5}
    />

    <silkscreentext text="GND" pcbX={0} pcbY={-2.5} fontSize={0.5} />
    <silkscreentext text="VCC" pcbX={0} pcbY={-6.5} fontSize={0.5} />
    <silkscreentext
      text="ADDR"
      pcbX={-0.8}
      pcbY={-4.5}
      pcbRotation={90}
      fontSize={0.5}
    />

    <silkscreentext
      text="MCP4725"
      pcbX={6.5}
      pcbRotation={270}
      fontSize={0.7}
    />
    <schematictext
      fontSize={0.3}
      text="Vcc = 2.7V to 5.5V"
      schX={2}
      schY={3.5}
      anchor="center_left"
    />
    <schematictext
      fontSize={0.3}
      text="I2C Address"
      schX={2}
      schY={-3.5}
      anchor="center_left"
    />
    <schematictext
      fontSize={0.3}
      text="GND = 1100000 (0x60) (Default)"
      schX={2}
      schY={-3.8}
      anchor="center_left"
    />
    <schematictext
      fontSize={0.3}
      text="VCC - 1100001 (0x61)"
      schX={2}
      schY={-3.2}
      anchor="center_left"
    />

    <jumper
      cadModel={null}
      name="SJ1"
      pinCount={3}
      internallyConnectedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      footprint="solderjumper3_bridged123_p0.8_pw0.635_ph1.270"
      pcbX="0.8"
      pcbY="5.715"
      layer="bottom"
      schY={2}
      schX={2.5}
      schRotation={180}
    />
    <jumper
      cadModel={null}
      name="SJ2"
      pinCount={3}
      footprint="solderjumper3_p0.8_pw0.635_ph1.270"
      pcbX="0"
      pcbY="-5.245"
      pcbRotation={90}
      schY={-2.5}
      schX={2}
      schRotation={180}
    />

    <hole name="MH1" diameter="3.302mm" pcbX="5.715mm" pcbY="5.715mm" />
    <hole name="MH1-2" diameter="3.302mm" pcbX="5.715mm" pcbY="-5.715mm" />

    <trace from=".U1 > .pin1" to=".JP6 > .pin2" />
    <trace from=".U1 > .pin2" to="net.GND" />
    <trace from=".U1 > .pin3" to="net.VCC" />
    <trace from=".U1 > .pin4" to="net.SDA" />
    <trace from=".U1 > .pin5" to="net.SCL" />
    <trace from=".U1 > .pin6" to=".SJ2 > .pin2" />

    <trace from=".JP6 > .pin1" to="net.GND" />

    <trace from=".R3 > .pin1" to="net.GND" />
    <trace from=".R3 > .pin2" to=".SJ2 > .pin3" />

    <trace from=".SJ2 > .pin1" to="net.VCC" />

    <trace from=".C1 > .pin1" to="net.VCC" />
    <trace from=".C1 > .pin2" to="net.GND" />

    <trace from=".JP5 > .pin1" to="net.SCL" />
    <trace from=".JP5 > .pin2" to="net.SDA" />
    <trace from=".JP5 > .pin3" to="net.VCC" />
    <trace from=".JP5 > .pin4" to="net.GND" />

    <trace from=".R1 > .pin1" to="net.SCL" />
    <trace from=".R1 > .pin2" to=".SJ1 > .pin3" />

    <trace from=".R2 > .pin1" to="net.SDA" />
    <trace from=".R2 > .pin2" to=".SJ1 > .pin1" />

    <trace from=".SJ1 > .pin2" to="net.VCC" />
  </board>
)

export default I2CDACBREAKOUT
