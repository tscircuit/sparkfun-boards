import { sel } from "tscircuit"
import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { ESP_12S } from "./imports/ESP_12S"
import { KMR221GLFS } from "./imports/KMR221GLFS"
import { TSOP2238 } from "./imports/TSOP2238"

// J1: 6-pin FTDI serial target, J2: 8-pin GPIO breakout
const serialHeaderLabels = ["DTR", "RXI", "TXO", "VCC", "CTS", "GND"]
const gpioHeaderLabels = [
  "GND",
  "VIN",
  "V3_3",
  "IO2",
  "IO12",
  "IO14",
  "ADC",
  "IO5",
]

export default () => {
  return (
    <board width={25.4} height={33.02}>
      {/* Sections mirror the SparkFun reference schematic */}
      <schematicsection
        name="vreg"
        displayName="Voltage Regulator (VIN 2.5-6V)"
      />
      <schematicsection name="ir_rx" displayName="IR Receiver -- 38kHz" />
      <schematicsection name="ir_tx" displayName="IR Emitter" />
      <schematicsection name="boot_btn" displayName="Boot Mode / Buttons" />
      <schematicsection
        name="boot_sel"
        displayName="Boot Mode Default-Select"
      />
      <schematicsection name="mcu" displayName="ESP-12S" />
      <schematicsection name="deepsleep" displayName="Deep Sleep Jumper" />
      <schematicsection name="headers" displayName="Headers" />

      {/* ======================= Voltage Regulator ======================= */}
      <capacitor
        name="C3"
        capacitance="1uF"
        footprint="0603"
        schSectionName="vreg"
        schX={-30}
        schY={6}
        schRotation={-90}
        pcbX={0.127}
        pcbY={-5.08}
        pcbRotation={90}
        connections={{ pin1: sel.net().VIN, pin2: sel.net().GND }}
      />
      <AP2112K_3_3TRG1
        name="U3"
        schSectionName="vreg"
        schX={-27}
        schY={6}
        pcbX={-2.661}
        pcbY={-5.08}
        pcbRotation={90}
        connections={{
          VIN: sel.net().VIN,
          EN: sel.net().VIN,
          GND: sel.net().GND,
          VOUT: sel.net().V3_3,
        }}
      />
      <capacitor
        name="C4"
        capacitance="2.2uF"
        footprint="0603"
        schSectionName="vreg"
        schX={-23.5}
        schY={6}
        schRotation={-90}
        pcbX={-5.842}
        pcbY={-5.08}
        pcbRotation={90}
        connections={{ pin1: sel.net().V3_3, pin2: sel.net().GND }}
      />

      {/* ======================= IR Receiver (TSOP382) ======================= */}
      <TSOP2238
        name="U2"
        schSectionName="ir_rx"
        schX={-18}
        schY={6}
        pcbX={-3.175}
        pcbY={-9.906}
        connections={{
          OUT: sel.net().IR_IN,
          VS: sel.net().V3_3,
          GND: sel.net().GND,
        }}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin3", "pin1", "pin2"],
          },
        }}
      />

      {/* ======================= IR Emitter ======================= */}
      <resistor
        name="R6"
        resistance="20"
        footprint="0603"
        schSectionName="ir_tx"
        schX={-9}
        schY={8.5}
        schRotation={-90}
        pcbX={4.699}
        pcbY={-7.747}
        connections={{ pin1: sel.net().V3_3, pin2: sel.D1.anode }}
      />
      <led
        name="D1"
        color="red"
        footprint="1206"
        schSectionName="ir_tx"
        schX={-9}
        schY={6.5}
        schRotation={-90}
        pcbX={4.445}
        pcbY={-9.906}
        connections={{ cathode: sel.Q1.collector }}
      />
      <transistor
        name="Q1"
        type="npn"
        footprint="sot23"
        schSectionName="ir_tx"
        schX={-9}
        schY={4}
        pcbX={4.699}
        pcbY={-4.78}
        pcbRotation={180}
        schRotation={-90}
        connections={{
          base: sel.R7.pin2,
          emitter: sel.net().GND,
        }}
      />
      <resistor
        name="R7"
        resistance="1k"
        footprint="0603"
        schSectionName="ir_tx"
        schX={-12}
        schY={4}
        pcbX={2.159}
        pcbY={-5.08}
        pcbRotation={90}
        connections={{ pin1: sel.net().IR_OUT }}
      />

      {/* ======================= Boot Mode / Buttons ======================= */}
      {/* Green status LED on IO5 */}
      <led
        name="D2"
        color="green"
        footprint="0603"
        schSectionName="boot_btn"
        schX={-1}
        schY={8}
        schRotation={-90}
        pcbX={0}
        pcbY={6.35}
        pcbRotation={270}
        connections={{ anode: sel.net().IO5, cathode: sel.R3.pin2 }}
      />
      <resistor
        name="R3"
        resistance="1k"
        footprint="0603"
        schSectionName="boot_btn"
        schX={-1}
        schY={6}
        schRotation={90}
        pcbX={1.524}
        pcbY={6.35}
        pcbRotation={270}
        connections={{ pin1: sel.net().GND }}
      />
      {/* GPIO0 boot button + pull-up */}
      <resistor
        name="R5"
        resistance="1k"
        footprint="0603"
        schSectionName="boot_btn"
        schX={2.5}
        schY={8}
        schRotation={90}
        pcbX={4.445}
        pcbY={-2.54}
        connections={{ pin1: sel.net().IO0, pin2: sel.net().V3_3 }}
      />
      <KMR221GLFS
        name="S1"
        schSectionName="boot_btn"
        schX={2.5}
        schY={4.5}
        pcbX={4.445}
        pcbY={-0.127}
        connections={{
          pin1: sel.net().GND,
          pin2: sel.net().IO0,
        }}
        schPinArrangement={{
          bottomSide: {
            direction: "top-to-bottom",
            pins: ["pin1"],
          },
          topSide: {
            direction: "top-to-bottom",
            pins: ["pin2"],
          },
        }}
      />
      {/* RESET button + pull-up */}
      <resistor
        name="R8"
        resistance="10k"
        footprint="0603"
        schSectionName="boot_btn"
        schX={6}
        schY={8}
        schRotation={90}
        pcbX={-1.524}
        pcbY={6.35}
        pcbRotation={90}
        connections={{ pin1: sel.net().RESET, pin2: sel.net().V3_3 }}
      />
      <KMR221GLFS
        name="S2"
        schSectionName="boot_btn"
        schX={6}
        schY={4.5}
        pcbX={-4.445}
        pcbY={-0.127}
        connections={{
          pin1: sel.net().GND,
          pin2: sel.net().RESET,
        }}
        schPinArrangement={{
          bottomSide: {
            direction: "top-to-bottom",
            pins: ["pin1"],
          },
          topSide: {
            direction: "top-to-bottom",
            pins: ["pin2"],
          },
        }}
      />

      {/* ======================= Boot Mode Default-Select ======================= */}
      {/* Auto-program diode: IO0 -> D3 -> DTR */}
      <diode
        name="D3"
        footprint="sod323"
        schSectionName="boot_sel"
        schX={13.5}
        schY={8}
        pcbX={0}
        pcbY={-1.27}
        pcbRotation={270}
        connections={{ anode: sel.net().IO0, cathode: sel.net().DTR }}
      />
      {/* IO2 pull-up */}
      <resistor
        name="R1"
        resistance="10k"
        footprint="0603"
        schSectionName="boot_sel"
        schX={13.5}
        schY={6.5}
        pcbX={-5.08}
        pcbY={-2.54}
        pcbRotation={180}
        connections={{ pin1: sel.net().IO2, pin2: sel.net().V3_3 }}
      />
      {/* IO15 pull-down */}
      <resistor
        name="R4"
        resistance="10k"
        footprint="0603"
        schSectionName="boot_sel"
        schX={13.5}
        schY={4.5}
        pcbX={3.175}
        pcbY={6.35}
        pcbRotation={90}
        connections={{ pin1: sel.net().IO15, pin2: sel.net().GND }}
      />
      {/* Auto-reset cap: RESET -> C2 -> DTR */}
      <capacitor
        name="C2"
        capacitance="1uF"
        footprint="0603"
        schSectionName="boot_sel"
        schX={13.25}
        schY={3}
        pcbX={-3.175}
        pcbY={6.35}
        pcbRotation={270}
        connections={{ pin1: sel.net().RESET, pin2: sel.net().DTR }}
      />

      {/* ======================= ESP-12S (on bottom layer) ======================= */}
      <ESP_12S
        name="U1"
        schSectionName="mcu"
        schX={-22}
        schY={-7}
        pcbX={0}
        pcbY={0.445}
        layer="bottom"
        connections={{
          RST: sel.net().RESET,
          ADC: sel.net().ADC,
          EN: sel.net().EN,
          IO16: sel.net().IO16,
          IO14: sel.net().IO14,
          IO12: sel.net().IO12,
          IO13: sel.net().IR_IN,
          VCC: sel.net().V3_3,
          GND: sel.net().GND,
          IO15: sel.net().IO15,
          IO2: sel.net().IO2,
          IO0: sel.net().IO0,
          IO4: sel.net().IR_OUT,
          IO5: sel.net().IO5,
          RXD0: sel.net().RX,
          TXD0: sel.net().TX,
          EP: sel.net().GND,
        }}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: ["pin8", "pin1", "pin3", "pin9"],
          },
          rightSide: {
            direction: "top-to-bottom",
            pins: [
              "pin16",
              "pin15",
              "pin2",
              "pin4",
              "pin10",
              "pin5",
              "pin7",
              "pin6",
              "pin14",
              "pin13",
              "pin11",
              "pin12",
            ],
          },
        }}
      />
      {/* EN pull-up */}
      <resistor
        name="R2"
        resistance="10k"
        footprint="0603"
        schSectionName="mcu"
        schX={-28}
        schY={-5}
        schRotation={90}
        pcbX={-4.826}
        pcbY={6.35}
        pcbRotation={90}
        connections={{ pin1: sel.net().V3_3, pin2: sel.net().EN }}
      />
      {/* Decoupling */}
      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="0603"
        schSectionName="mcu"
        schX={-16}
        schY={-7}
        schRotation={-90}
        pcbX={4.826}
        pcbY={6.35}
        pcbRotation={90}
        connections={{ pin1: sel.net().V3_3, pin2: sel.net().GND }}
      />

      {/* ======================= Deep Sleep Jumper ======================= */}
      <solderjumper
        name="JP1"
        pinCount={2}
        footprint="solderjumper2_p1.041_pw0.660_ph1.270"
        schSectionName="deepsleep"
        schX={-6}
        schY={-5}
        pcbX={10.541}
        pcbY={10.16}
        layer="bottom"
        connections={{ pin1: sel.net().IO16, pin2: sel.net().RESET }}
      />

      {/* ======================= Headers ======================= */}
      {/* J2: 8-pin GPIO breakout */}
      <pinheader
        name="J2"
        gender="female"
        pinCount={8}
        footprint="pinrow8_p2.54_id1.016_od1.8796_nosquareplating_doublesidedpinlabel"
        pinLabels={gpioHeaderLabels}
        schSectionName="headers"
        schX={6}
        schY={-6}
        schWidth={0.55}
        schPinArrangement={{
          leftSide: {
            direction: "top-to-bottom",
            pins: [
              "pin8",
              "pin7",
              "pin6",
              "pin5",
              "pin4",
              "pin3",
              "pin2",
              "pin1",
            ],
          },
        }}
        pcbX={11.43}
        pcbY={-1.27}
        pcbRotation={90}
        connections={{
          pin1: sel.net().GND,
          pin2: sel.net().VIN,
          pin3: sel.net().V3_3,
          pin4: sel.net().IO2,
          pin5: sel.net().IO12,
          pin6: sel.net().IO14,
          pin7: sel.net().ADC,
          pin8: sel.net().IO5,
        }}
      />
      {/* J1: 6-pin FTDI serial target */}
      <pinheader
        name="J1"
        gender="female"
        pinCount={6}
        footprint="pinrow6_p2.54_id1.016_od1.8796_nosquareplating_doublesidedpinlabel"
        pinLabels={serialHeaderLabels}
        schSectionName="headers"
        schX={12}
        schY={-6}
        schWidth={0.45}
        pcbX={-11.43}
        pcbY={-3.81}
        pcbRotation={270}
        connections={{
          pin1: sel.net().DTR,
          pin2: sel.net().TX,
          pin3: sel.net().RX,
          pin4: sel.net().V3_3,
          pin6: sel.net().GND,
        }}
      />

      {/* ======================= Mechanical + silkscreen ======================= */}
      <hole diameter={3.302} pcbX={10.16} pcbY={-13.97} />
      <hole diameter={3.302} pcbX={-10.16} pcbY={-13.97} />

      <silkscreentext text="SparkFun" fontSize={1.3} pcbX={0} pcbY={-11.3} />
      <silkscreentext
        text="WiFi IR Blaster"
        fontSize={0.95}
        pcbX={0}
        pcbY={-12.8}
      />
    </board>
  )
}
