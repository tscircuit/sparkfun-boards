import { DS3234S_T_R } from "./DS3234"
import { BatteryHolder } from "./BatteryHolder"
import { OutlineBuilder } from "../../util/OutlineBuilder"

const outline = new OutlineBuilder(10, 10.16)
  .lineTo(10.16, 10.16)
  .lineTo(10.16, -10.16)
  .lineTo(-10.16, -10.16)
  .lineTo(-10.16, 10.16)
  .lineTo(-5, 10.16)
  .arcTo(5, 10.16, { radius: 6, sweep: true })
  .toArray()

export default () => {
  return (
    <board outline={outline} routingDisabled>
      <group pcbX={0} pcbY={0}>
        <DS3234S_T_R
          name="U1"
          pcbRotation={180}
          connections={{
            pin4: "net.VCC",
            pin18: "net.SCLK",
            pin20: "U1.pin18",
            pin19: "net.MISO",
            pin17: "net.MOSI",
            pin1: "net.SS",
            pin5: "net.INT",
          }}
        />
        <jumper
          cadModel={null}
          connections={{
            pin7: "net.GND",
            pin6: "net.VCC",
            pin5: "net.INT",
            pin4: "net.SCLK",
            pin3: "net.MISO",
            pin2: "net.MOSI",
            pin1: "net.SS",
          }}
          name="JP1"
          schX={-7}
          footprint={"pinrow7_id1.016mm_od1.88mm_p2.54mm_nosquareplating"}
          pcbRotation={180}
          pcbY={-8.89}
        />
        <BatteryHolder
          name="U2"
          pcbY={3.81}
          layer={"bottom"}
          schX={3}
          schY={0.5}
          connections={{ pin1: "U1.VBAT", pin2: "U1.pin10" }}
        />
        <capacitor
          name="C1"
          schRotation={-90}
          schX={-3.2}
          schY={-2}
          connections={{ pin1: ["JP1.pin6", "R1.pin2"], pin2: "net.GND" }}
          capacitance={"22pF"}
          footprint={"cap0402"}
          pcbRotation={90}
          pcbX={7.62}
          pcbY={1.27}
        />
        <resistor
          name="R1"
          schRotation={-90}
          connections={{ pin1: "JP1.pin5" }}
          schX={-4}
          schY={-0.5}
          resistance={"10k"}
          footprint={"res0402"}
          pcbRotation={90}
          pcbX={7.62}
          pcbY={-1.27}
        />
        <netlabel
          net="GND"
          anchorSide="top"
          schX={1.5}
          schY={-1.6}
          connectsTo={[
            "U1.pin2",
            "U1.pin7",
            "U1.pin8",
            "U1.pin9",
            "U1.pin10",
            "U1.pin11",
            "U1.pin12",
            "U1.pin13",
            "U1.pin14",
            "U1.pin15",
          ]}
        />
        <silkscreentext text="DeadOn RTC" pcbX={-9} pcbY={0} pcbRotation={90} />
        <silkscreentext text="DS3234" pcbX={-8} pcbY={3.5} pcbRotation={90} />
      </group>
    </board>
  )
}
