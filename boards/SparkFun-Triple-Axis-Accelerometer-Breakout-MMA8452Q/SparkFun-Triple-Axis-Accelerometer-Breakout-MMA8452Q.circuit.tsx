import { MMA8452QR1 } from "./MMA8452Q"
import { sel } from "tscircuit"

const JPPinlabel = {
  pin6: ["GND"],
  pin5: ["INT1"],
  pin4: ["INT2"],
  pin3: ["SCL"],
  pin2: ["SDA"],
  pin1: ["V3_3"],
}

export default () => {
  return (
    <board width="15.24mm" height="15.24mm" routingDisabled>
      <MMA8452QR1 name="U1" pcbRotation={180} />
      <resistor
        name="R1"
        resistance="10k"
        schY={1.3}
        schX={2}
        schRotation={90}
        footprint="0603"
        pcbX={1}
        pcbY={6}
        pcbRotation={-90}
        connections={{ pin1: sel.net().SCL, pin2: "net.V3_3" }}
      />
      <resistor
        name="R2"
        schRotation={90}
        schY={1.3}
        schX={3}
        resistance="10k"
        footprint="0603"
        pcbY={6}
        pcbX={-1}
        pcbRotation={-90}
        connections={{ pin1: "U1.pin6", pin2: "net.V3_3" }}
      />
      <hole name="MH1" diameter="3.302mm" pcbX="5.715mm" pcbY="5.715mm" />
      <hole name="MH1-2" diameter="3.302mm" pcbX="5.715mm" pcbY="-5.715mm" />
      <resistor
        name="R3"
        schRotation={90}
        schX={5}
        schY={0.2}
        resistance="10k"
        footprint="0603"
        pcbX={1.5}
        pcbY={-4}
        pcbRotation={-90}
        connections={{ pin1: "U1.pin7", pin2: "net.V3_3" }}
      />
      <capacitor
        name="C1"
        connections={{ pin1: "U1.pin1", pin2: "net.GND" }}
        capacitance="0.1uF"
        schRotation={-90}
        schX={-5}
        schY={-0.5}
        footprint="cap0603"
        pcbX={-1.5}
        pcbY={-4}
        pcbRotation={-90}
      />
      <capacitor
        name="C3"
        connections={{ pin1: "U1.pin1", pin2: "net.GND" }}
        capacitance="0.1uF"
        schRotation={-90}
        schX={-4}
        schY={-0.5}
        footprint="cap0603"
        pcbX={-0}
        pcbY={-4}
        pcbRotation={-90}
      />
      <capacitor
        name="C2"
        connections={{ pin1: "U1.pin2", pin2: "net.GND" }}
        capacitance="0.1uF"
        schRotation={-90}
        schX={-3}
        schY={-0.5}
        footprint="cap0603"
        pcbX={3.8}
        pcbY={-1.2}
        pcbRotation={180}
      />
      <solderjumper
        connections={{ pin1: "R3.pin1", pin2: "net.GND" }}
        name="JP1"
        schX={5}
        schY={-1.5}
        schRotation={-90}
        footprint="solderjumper2_p0.9_pw0.6604_ph1.27"
        layer={"bottom"}
        pcbX={0.45}
        pcbY={0}
      />
      <jumper
        name="JP3"
        cadModel={null}
        schWidth={0.7}
        pinLabels={JPPinlabel}
        pcbRotation={-90}
        connections={{
          pin1: "net.V3_3",
          pin2: "net.SDA",
          pin3: "net.SCL",
          pin4: "net.INT2",
          pin5: "net.INT1",
          pin6: "net.GND",
        }}
        schX={8}
        schDirection="left"
        footprint="pinrow6_id1.016mm_od1.88mm_nosquareplating_pinlabeltextalignright_pinlabelverticallyinverted_pinlabelorthogonal"
        pcbY={0}
        pcbX={-6.4}
      />
      <silkscreentext
        text="MMA8452"
        layer="top"
        fontSize={1.4}
        pcbY={0}
        pcbX={6.8}
        pcbRotation={-90}
      />
      <silkscreentext
        text="SA0"
        layer="bottom"
        fontSize={1.2}
        pcbY={0}
        pcbX={2}
        pcbRotation={-90}
      />
      <netlabel
        net="SDA"
        anchorSide="left"
        schX={4}
        schY={0.43}
        connectsTo={sel.U1.SDA}
      />
      <netlabel
        net="SCL"
        anchorSide="left"
        schX={4}
        schY={0.6}
        connectsTo={[sel.U1.SCL]}
      />
      <netlabel
        net="V3_3"
        anchorSide="bottom"
        schX={-1.2}
        schY={1}
        connectsTo={["U1.VDD", "U1.VDDIO"]}
      />
      <netlabel
        net="GND"
        anchorSide="top"
        schX={-1.5}
        schY={-1.3}
        connectsTo={[sel.U1.pin5]}
      />
      <schematictext
        text="Jumper open by default, so SA0 = 0"
        color="gray"
        fontSize={0.2}
        schY={-1}
        schX={7.3}
      />
      <schematictext
        text="I2C Address:"
        color="gray"
        fontSize={0.2}
        schY={-1.5}
        schX={8}
      />
      <schematictext
        text="SA0=0:0x1C"
        color="gray"
        fontSize={0.2}
        schY={-1.8}
        schX={8.9}
      />
      <schematictext
        text="SA0=1:0x1D"
        color="gray"
        fontSize={0.2}
        schY={-2.2}
        schX={8.9}
      />
      <schematictext
        text="v11 Change log"
        anchor="left"
        color="gray"
        fontSize={0.2}
        schY={-6}
        schX={-7}
      />
      <schematictext
        text="* Added 10k pull-up resistors to I2C lines"
        color="gray"
        anchor="left"
        fontSize={0.2}
        schY={-6.3}
        schX={-7}
      />
      <schematictext
        text="* Changed the jumper configuration, single instead of 2-way"
        color="gray"
        anchor="left"
        fontSize={0.2}
        schY={-6.6}
        schX={-7}
      />
      <schematictext
        text="* Minor adjustments to some silk, flipped axis + direction"
        color="gray"
        anchor="left"
        fontSize={0.2}
        schY={-6.9}
        schX={-7}
      />
    </board>
  )
}
