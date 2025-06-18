import { FT232RL } from "./FT232RL"
import { TYPE_C_31_M_12 } from "./TYPE_C_31_M_12"

const USBToSerialBreakout = () => {
  return (
    <board width="18mm" height="35mm" autorouter="auto-cloud">
      <FT232RL name="U1" pcbRotation={90} pcbY={-5} />
      <resistor
        resistance="0.33k"
        footprint="0603"
        name="R1"
        schX={3}
        schRotation={90}
        pcbX={6.3}
        pcbY={-16.2}
      />
      <TYPE_C_31_M_12 name="USBC" pcbY={12.2} pcbRotation={180} schX={-12} />
      <resistor
        resistance="0.33k"
        footprint="0603"
        name="R2"
        schX={4}
        schRotation={90}
        pcbX={-6}
        pcbY={-5}
        pcbRotation={90}
      />
      <led
        name="LED1"
        footprint="0402"
        schRotation={270}
        schY={-2}
        schX={3}
        pcbX={-6.3}
        pcbY={-14}
        color="red"
        schDisplayValue="Red"
      />
      <led
        name="LED2"
        footprint="0402"
        schRotation={270}
        schY={-2}
        schX={4}
        pcbX={6.3}
        pcbY={-14}
        color="red"
        schDisplayValue="Green"
      />

      <capacitor
        capacitance="100000pF"
        footprint="cap0603"
        name="C2"
        schY={-2}
        schX={-8}
        pcbX={-6.3}
        pcbY={-16.2}
        schRotation={90}
      />
      <capacitor
        capacitance="10000000pF"
        footprint="cap0603"
        name="C5"
        schY={-2}
        schX={-6.5}
        pcbX={-6}
        pcbY={8}
        schRotation={90}
        pcbRotation={90}
        polarized
      />
      <capacitor
        capacitance="100000pF"
        footprint="cap0603"
        name="C1"
        schY={-2}
        schX={-5}
        pcbX={6.1}
        pcbY={-10.5}
        pcbRotation={90}
        schRotation={90}
      />
      <fuse
        name="F1"
        currentRating="0.5"
        voltageRating="220"
        pcbX={6}
        pcbY={8}
        footprint="0402"
        pcbRotation={90}
        schY={1.5}
        schX={-9}
      />
      <jumper
        name="JP1"
        footprint="pinrow9_nosquareplating"
        pcbY={0}
        pcbX={8}
        pcbRotation={90}
        schDirection="left"
        schX={5}
        schY={3}
      />
      <jumper
        name="JP2"
        footprint="pinrow9_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal"
        pcbX={-8}
        pcbRotation={90}
        pcbY={0}
        schDirection="left"
        schX={6.5}
        schY={-2}
      />
      <jumper
        name="JP3"
        footprint="pinrow4"
        pcbX={0}
        pcbRotation="180"
        schDirection="left"
        pcbY={-16.2}
        schX={0}
        schY={-5}
      />
      <switch
        name="SW3"
        type="spdt"
        footprint={
          <footprint>
            <smtpad
              portHints={["pin5"]}
              pcbX="0mm"
              pcbY="-2.8497529999998505mm"
              width="1.199896mm"
              height="1.9999959999999999mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin6"]}
              pcbX="2.4998679999998785mm"
              pcbY="-2.8500069999998914mm"
              width="1.199896mm"
              height="1.9999959999999999mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin1"]}
              pcbX="-2.499867999999992mm"
              pcbY="2.850007000000005mm"
              width="1.199896mm"
              height="1.9999959999999999mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin2"]}
              pcbX="0mm"
              pcbY="2.850007000000005mm"
              width="1.199896mm"
              height="1.9999959999999999mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin3"]}
              pcbX="2.4998679999998785mm"
              pcbY="2.850007000000005mm"
              width="1.199896mm"
              height="1.9999959999999999mm"
              shape="rect"
            />
            <smtpad
              portHints={["pin4"]}
              pcbX="-2.499867999999992mm"
              pcbY="-2.8500069999998914mm"
              width="1.199896mm"
              height="1.9999959999999999mm"
              shape="rect"
            />
            <silkscreenpath
              route={[
                { x: -2.5400000000000773, y: -0.5078730000000178 },
                { x: -2.5400000000000773, y: 0.5081270000000586 },
                { x: -1.5240000000001146, y: 0.5081270000000586 },
                { x: -1.5240000000001146, y: -0.5078730000000178 },
                { x: -2.5400000000000773, y: -0.5078730000000178 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: -3.048000000000002, y: -1.2698729999999614 },
                { x: -3.048000000000002, y: 1.270127000000116 },
                { x: 3.048000000000002, y: 1.270127000000116 },
                { x: 3.048000000000002, y: -1.2698729999999614 },
                { x: -3.048000000000002, y: -1.2698729999999614 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: -4.599965399999974, y: 1.8001487999999881 },
                { x: -3.325571200000013, y: 1.8001487999999881 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: -1.6744188000000122, y: 1.8001487999999881 },
                { x: -0.8255507999999736, y: 1.8001487999999881 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: 0.8255507999999736, y: 1.8001487999999881 },
                { x: 1.6744441999999253, y: 1.8001487999999881 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: 3.3255457999999862, y: 1.8001487999999881 },
                { x: 4.571999999999889, y: 1.77800000000002 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: 4.571999999999889, y: -1.777872999999886 },
                { x: 3.3194498000000294, y: -1.777872999999886 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: 1.6805401999999958, y: -1.777872999999886 },
                { x: 0.8194547999999031, y: -1.777872999999886 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: -0.8194548000001305, y: -1.777872999999886 },
                { x: -1.6805401999999958, y: -1.777872999999886 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: -3.3194497999999157, y: -1.777872999999886 },
                { x: -4.599965399999974, y: -1.777872999999886 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: -4.599965399999974, y: 1.8001487999999881 },
                { x: -4.599965399999974, y: -1.7779999999999063 },
              ]}
            />
            <silkscreenpath
              route={[
                { x: 4.571999999999889, y: -1.777872999999886 },
                { x: 4.571999999999889, y: 1.8001487999999881 },
              ]}
            />
          </footprint>
        }
        cadModel={{
          objUrl:
            "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=a98562e0d24740e1809e54f73242e180&pn=C2906280",
          rotationOffset: { x: 0, y: 0, z: 0 },
          positionOffset: { x: 0, y: 0, z: 0 },
        }}
        schX={-5}
        schY={-6}
        pcbY={5}
      />
      <schematictext
        fontSize={0.3}
        text="Vcc = 2.7V to 5.5V"
        schX={-4}
        schY={5}
        anchor="center_left"
      />
      <schematictext
        fontSize={0.3}
        text="GND = 1100000 (0x60) (Default)"
        schX={-4.5}
        schY={-7.5}
        anchor="center_left"
      />
      <schematictext
        fontSize={0.3}
        text="VCC - 1100001 (0x61)"
        schX={-4.5}
        schY={-8}
        anchor="center_left"
      />

      <trace from=".U1 > .pin1" to="net.TXD" />
      <trace from=".U1 > .pin2" to="net.DTR" />
      <trace from=".U1 > .pin4" to="net.VCCIO" />
      <trace from=".U1 > .pin5" to="net.RXD" />

      <trace from=".U1 > .pin3" to="net.RTS" />
      <trace from=".U1 > .pin6" to="net.RI" />

      <trace from=".U1 > .pin7" to="net.GND" />
      <trace from=".U1 > .pin9" to="net.DSR" />
      <trace from=".U1 > .pin10" to="net.DCD" />
      <trace from=".U1 > .pin11" to="net.CTS" />
      <trace from=".U1 > .pin12" to="net.SLEEP" />
      <trace from=".U1 > .pin13" to="net.TXDEN" />
      <trace from=".U1 > .pin14" to="net.PWREN" />

      <trace from=".U1 > .pin18" to="net.GND" />
      <trace from=".U1 > .pin21" to="net.GND" />
      <trace from=".U1 > .pin25" to="net.GND" />
      <trace from=".U1 > .pin26" to="net.GND" />
      <trace from=".JP1 > .pin1" to="net.GND" />
      <trace from=".JP1 > .pin6" to="net.CTS" />
      <trace from=".JP1 > .pin2" to="net.TXLED" />
      <trace from=".JP1 > .pin3" to="net.RXLED" />
      <trace from=".JP1 > .pin4" to="net.VCC" />
      {/* <trace from=".JP1 > .pin5" to="net.3.3V" /> */}
      <trace from=".JP1 > .pin7" to="net.SLEEP" />
      <trace from=".JP1 > .pin8" to="net.TXDEN" />
      <trace from=".JP1 > .pin9" to="net.PWREN" />
      <trace from=".JP2 > .pin1" to="net.TXD" />
      <trace from=".JP2 > .pin2" to="net.DTR" />
      <trace from=".JP2 > .pin3" to="net.RTS" />
      <trace from=".JP2 > .pin4" to="net.VCCIO" />
      <trace from=".JP2 > .pin5" to="net.RXD" />
      <trace from=".JP2 > .pin6" to="net.RI" />
      <trace from=".JP2 > .pin7" to="net.GND" />
      <trace from=".JP2 > .pin8" to="net.DSR" />
      <trace from=".JP2 > .pin9" to="net.DCD" />
      {/* <trace from=".JP3 > .pin6" to="net.RI" /> */}
      <trace from=".JP3 > .pin2" to="net.TXD" />
      <trace from=".JP3 > .pin3" to="net.RXD" />
      <trace from=".JP3 > .pin4" to="net.GND" />
      <trace from=".JP3 > .pin1" to="net.VCC" />

      <trace from=".SW3 > .pin1" to="net.VCCIO" />
      <trace from=".SW3 > .pin3" to="net.VCC" />
      <trace from=".R1 > .pin2" to="net.VCCIO" />
      <trace from=".R2 > .pin2" to="net.VCCIO" />
      <trace from=".R2 > .pin1" to=".LED2 > .pin1" />
      <trace from=".R1 > .pin1" to=".LED1 > .pin1" />
      <trace from=".U1 > .pin23" to=".LED1 > .pin2" />

      <trace from=".U1 > .pin22" to=".LED2 > .pin2" />
      <trace from=".U1 > .pin20" to=".F1 > .pin2" />
      <trace from=".USBC > .pin9" to=".U1 > .pin16" />
      <trace from=".U1 > .pin15" to=".USBC > .pin10" />

      <trace from=".C1 > .pin1" to="net.GND" />
      <trace from=".C1 > .pin2" to="net.VCC" />

      <trace from=".U1 > .pin17" to=".C1 > .pin2" />
      <trace from=".C2 > .pin2" to=".F1 > .pin2" />
      <trace from=".C5 > .pin2" to=".F1 > .pin2" />
      <trace from=".USBC > .pin3" to=".F1 > .pin1" />

      <trace from=".C2 > .pin1" to="net.GND" />
      <trace from=".C5 > .pin1" to="net.GND" />
    </board>
  )
}
export default USBToSerialBreakout
