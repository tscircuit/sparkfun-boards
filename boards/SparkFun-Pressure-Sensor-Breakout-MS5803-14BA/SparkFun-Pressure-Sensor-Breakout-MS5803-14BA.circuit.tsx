import { MS580314BA01_00 } from "./MS5803-14BA"

export const SparkFunPressureSensorBreakoutMS580314BA01_00 = () => {
  return (
    <board width={20.32} height={17.78}>
      <group pcbX={0} pcbY={0}>
        <MS580314BA01_00
          name="U1"
          pcbRotation={90}
          pcbY={2.54}
          schX={0}
          schY={0}
          connections={{ pin5: "net.V3_3", pin2: "net.GND" }}
        />
        <capacitor
          name="C1"
          connections={{ pin1: ["U1.pin5", "JP1.pin2"], pin2: "net.GND" }}
          capacitance={"0.1uF"}
          footprint={"cap0603"}
          schX={-10}
          schY={0}
          schRotation={-90}
          pcbY={-2.8}
          pcbX={-2.794}
          pcbRotation={180}
        />
        <resistor
          name="R1"
          connections={{ pin1: "U1.pin1" }}
          resistance={"2.2k"}
          footprint={"0603"}
          schX={-3.4}
          schRotation={90}
          schY={1.4}
          pcbY={4.064}
          pcbX={-5.24}
          pcbRotation={180}
        />
        <resistor
          name="R2"
          connections={{ pin1: "U1.pin7" }}
          resistance={"2.2k"}
          footprint={"0603"}
          schX={-1.6}
          schRotation={90}
          schY={1.4}
          pcbY={2.196}
          pcbX={-5.24}
          pcbRotation={180}
        />
        <resistor
          name="R3"
          resistance={"10k"}
          connections={{ pin1: "net.PS", pin2: "net.V3_3" }}
          footprint={"0603"}
          schX={1.2}
          schRotation={90}
          schY={1.3}
          pcbY={-3.302}
          pcbX={5.588}
          pcbRotation={180}
        />
        <resistor
          name="R4"
          resistance={"10k"}
          connections={{ pin1: "net.AD", pin2: "net.V3_3" }}
          footprint={"0603"}
          schX={4}
          schRotation={90}
          schY={1.3}
          pcbY={0.762}
          pcbX={5.588}
          pcbRotation={180}
        />

        <hole diameter={3.048} pcbX={7.62} pcbY={6.35} />
        <hole diameter={3.048} pcbX={-7.62} pcbY={-1.27} />

        <solderjumper
          name="SJ1"
          pinCount={3}
          footprint="solderjumper3_bridged123_p0.8128_pw0.635_ph1.27"
          bridgedPins={[
            ["1", "2"],
            ["2", "3"],
          ]}
          schRotation={-180}
          schX={-2.5}
          schY={2.6}
          connections={{
            pin1: "R2.pin2",
            pin2: "U1.pin5",
            pin3: "R1.pin2",
          }}
          pcbX={-8.128}
          pcbY={2.489}
          pcbRotation={90}
        />
        <solderjumper
          name="SJ2"
          pinCount={2}
          footprint="solderjumper2_p0.8128_pw0.635_ph1.27"
          schRotation={90}
          schX={4}
          schY={-1.2}
          connections={{
            pin2: "U1.pin3",
            pin1: "net.GND",
          }}
          pcbY={0.762}
          pcbX={9}
          pcbRotation={180}
        />
        <solderjumper
          name="SJ3"
          pinCount={2}
          footprint="solderjumper2_p0.8128_pw0.635_ph1.27"
          schRotation={90}
          schX={1.2}
          schY={-1.2}
          connections={{
            pin2: "net.PS",
            pin1: "net.GND",
          }}
          pcbY={-3.302}
          pcbX={9}
          pcbRotation={180}
        />

        <jumper
          cadModel={null}
          name="JP1"
          schX={-8}
          footprint={"pinrow7_id1.016mm_od1.88mm_p2.54mm_nosquareplating"}
          pcbY={-7.62}
          connections={{
            pin3: "U1.pin7",
            pin4: "U1.pin1",
            pin5: "net.SDO",
            pin6: "net.AD",
            pin7: "net.PS",
          }}
          schPinArrangement={{
            rightSide: {
              direction: "top-to-bottom",
              pins: ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7"],
            },
          }}
        />
        <netlabel
          net="GND"
          anchorSide="top"
          schX={-7}
          schY={-1.6}
          connectsTo={["JP1.pin1"]}
        />
        <netlabel
          net="SDA"
          anchorSide="right"
          schX={-1.8}
          schY={0.2}
          connectsTo={["U1.pin7"]}
        />
        <netlabel
          net="SCL"
          anchorSide="right"
          schX={-3.6}
          schY={0}
          connectsTo={["U1.pin1"]}
        />
        <netlabel
          net="SDO"
          anchorSide="right"
          schX={-1.2}
          schY={-0.2}
          connectsTo={["U1.pin8"]}
        />
        <netlabel
          net="PS"
          anchorSide="left"
          schX={1.5}
          schY={0.4}
          connectsTo={["U1.pin6"]}
        />
        <netlabel
          net="AD"
          anchorSide="left"
          schX={4.5}
          schY={-0.4}
          connectsTo={["U1.pin3"]}
        />
        <netlabel
          net="GND"
          anchorSide="top"
          schX={-7}
          schY={-1.6}
          connectsTo={["JP1.pin1"]}
        />
        <silkscreentext text="MS5883-14BA Breakout" pcbX={0} pcbY={8} />
        <silkscreentext text="PU" pcbX={-8.2} pcbY={5.5} />
        <silkscreentext text="0x76/0x77" pcbX={7} pcbY={3.5} />
        <silkscreentext text="I2C/SPI" pcbX={7} pcbY={-1} />
      </group>
    </board>
  )
}
