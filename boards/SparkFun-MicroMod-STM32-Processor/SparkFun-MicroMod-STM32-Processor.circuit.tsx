import React from "react"
import STM32F405RG from "./STM32F405RG"
import W25Q128 from "./W25Q128"
import { MicroModBoard } from "@tscircuit/common"
import { sel } from "@tscircuit/core"

const pitch = 0.45
const padW = 0.2
const padH = 1.45
const startX = 0
const startY = 0
// Define pin arrays (inverted sides)
const topPinsRight = Array.from({ length: 12 }, (_, i) => 12 - i) // 12→1
const topPinsLeft = Array.from({ length: 24 }, (_, i) => 36 - i) // 36→13
const bottomPinsRight = Array.from({ length: 11 }, (_, i) => 11 - i).reverse() // 12→1
const bottomPinsLeft = Array.from({ length: 24 }, (_, i) => 36 - i).reverse() // 36→13

const Board = () => (
  <MicroModBoard
    width="22mm"
    height="22mm"
    name="SparkFun MicroMod STM32 Processor"
    schX={22}
  >
    <STM32F405RG name="U1" schX={0} schY={0} pcbX={0.33} pcbY={0.58} />
    <W25Q128
      name="U2"
      schX={5}
      schY={-15}
      pcbX={1.25}
      pcbY={1.5}
      pcbRotation={0}
      connections={{
        V3_3: "net.V3_3",
        GND: "net.GND",
        CS_N: "net.FLASH_CS_N",
        CLK: "net.FLASH_SCK",
        DO_DI: "net.FLASH_SDI",
        D1_DO: "net.FLASH_SDO",
      }}
      layer="bottom"
    />
    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="18pF"
      schX={-4}
      schY={-6}
      pcbX={-8.73}
      pcbY={-0.5}
      pcbRotation={270.0}
      footprint={
        <footprint>
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="-1.1mm"
            pcbY="0.5mm"
            portHints={["pin1"]}
          />
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="1.1mm"
            pcbY="0.5mm"
            portHints={["pin2"]}
          />
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="-1.1mm"
            pcbY="-1.0mm"
            portHints={["pin3"]}
          />
          <smtpad
            shape="rect"
            width="1.4mm"
            height="0.75mm"
            pcbX="1.1mm"
            pcbY="-1.0mm"
            portHints={["pin4"]}
          />
        </footprint>
      }
      connections={{ pin1: "net.U1_PH0_HSE", pin2: "net.U1_PH1_HSE" }}
    />
    <capacitor
      name="C1"
      footprint="0402"
      capacitance="22pF"
      schX={-3}
      schY={-5}
      pcbX={-8.75}
      pcbY={3.15}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      footprint="0402"
      capacitance="22pF"
      schX={-5}
      schY={-5}
      pcbX={-9.75}
      pcbY={-3.85}
      pcbRotation={90}
      connections={{ pin2: "net.GND" }}
    />
    <crystal
      name="Y2"
      frequency="32.768kHz"
      loadCapacitance="12.5pF"
      schX={5}
      schY={-6}
      pcbX={-8.6}
      pcbY={6.57}
      pcbRotation={0.0}
      footprint={
        <footprint>
          <smtpad
            shape="rect"
            width="1.0mm"
            height="1.1mm"
            pcbX="-0.95mm"
            pcbY="0mm"
            portHints={["pin1"]}
          />
          <smtpad
            shape="rect"
            width="1.0mm"
            height="1.1mm"
            pcbX="0.95mm"
            pcbY="0mm"
            portHints={["pin2"]}
          />
        </footprint>
      }
      connections={{ pin1: "U1.pin4", pin2: "U1.pin3" }}
    />
    <capacitor
      name="C3"
      footprint="0402"
      capacitance="15pF"
      schX={6}
      schY={-5}
      pcbX={-8.76}
      pcbY={4.73}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      footprint="0402"
      capacitance="15pF"
      schX={4}
      schY={-5}
      pcbX={-8.76}
      pcbY={8.455}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      footprint="0402"
      capacitance="2.2uF"
      schX={-5}
      schY={2}
      pcbX={6.1}
      pcbY={-6.73}
      connections={{ pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      footprint="0402"
      capacitance="2.2uF"
      schX={-7}
      schY={2}
      pcbX={9.25}
      pcbY={3.25}
      connections={{ pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      footprint="0402"
      resistance="22"
      schX={-7}
      schY={-0.9}
      pcbX={9.25}
      pcbY={0.075}
      connections={{ pin1: "U1.pin44" }}
    />
    <resistor
      name="R3"
      footprint="0402"
      resistance="22"
      schX={-7}
      schY={0}
      pcbX={9.25}
      pcbY={1.65}
      connections={{ pin1: "U1.pin45" }}
    />
    <resistor
      name="R5"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={0}
      pcbX={7.65}
      pcbY={6.5}
      connections={{ pin1: "net.V3_3", pin2: "net.BOOT_N" }}
      layer="bottom"
    />
    <mosfet
      name="Q1"
      channelType="n"
      mosfetMode="depletion"
      footprint="sot23"
      schX={15}
      schY={2}
      pcbX={7.65}
      pcbY={3.03}
      pcbRotation={270}
      layer="bottom"
    />
    <resistor
      name="R1"
      resistance="100k"
      footprint="0402"
      schX={15}
      schY={5}
      pcbX={7.65}
      pcbY={8.22}
      pcbRotation={0.0}
      connections={{ pin1: "net.BOOT0", pin2: "net.GND" }}
      layer="bottom"
    />
    <resistor
      name="R4"
      footprint="0402"
      resistance="5.1k"
      schX={15}
      schY={-3}
      pcbX={-6.55}
      pcbY={-3.85}
      pcbRotation={90}
      connections={{ pin1: "U1.pin7", pin2: "net.V3_3" }}
    />
    <capacitor
      name="C15"
      footprint="0402"
      capacitance="100nF"
      schX={15}
      schY={-7}
      pcbX={-8.15}
      pcbY={-3.85}
      pcbRotation={90}
      connections={{ pin1: "U1.pin7", pin2: "net.GND" }}
    />
    <led
      name="D5"
      color="blue"
      footprint="0402"
      schX={-10}
      schY={-15}
      pcbX={8.93}
      pcbY={9.31}
      pcbRotation={0.0}
    />
    <resistor
      name="R12"
      resistance="1k"
      footprint="0402"
      schX={-15}
      schY={-15}
      pcbX={8.93}
      pcbY={6.75}
      connections={{ pin1: "net.STAT", pin2: sel.D5.pin1 }}
    />
    <netlabel net="GND" connectsTo={[sel.D5.pin2]} />
    <capacitor
      name="C20"
      footprint="0402"
      capacitance="0.1uF"
      schX={0}
      schY={-14}
      pcbX={6.156}
      pcbY={0.433}
      pcbRotation={90}
      connections={{ pin1: "U2.pin4", pin2: "U2.pin8" }}
      layer="bottom"
    />
    <resistor
      name="R11"
      resistance="100k"
      footprint="0402"
      schX={3}
      schY={-13}
      pcbX={-0.93}
      pcbY={-2.9}
      connections={{ pin1: "U2.pin1", pin2: "net.V3_3" }}
      layer="bottom"
    />
    {/* --- Decoupling Network 1 (C8–C10) --- */}
    <capacitor
      name="C8"
      capacitance="0.1uF"
      footprint="0402"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-9.75}
      pcbY={-5.5}
      pcbRotation={90}
      schX={-15}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C9"
      footprint="0402"
      capacitance="1.0uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-8.15}
      pcbY={-5.5}
      pcbRotation={90}
      schX={-14}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C10"
      footprint="0402"
      capacitance="4.7uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-6.55}
      pcbY={-5.5}
      pcbRotation={90}
      schX={-13}
      schY={-10}
      schRotation={90}
    />
    {/* --- Decoupling Network 2 (C11–C14) --- */}
    <capacitor
      name="C11"
      footprint="0402"
      capacitance="0.1uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-2.75}
      pcbY={7.85}
      schX={-8}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C12"
      footprint="0402"
      capacitance="0.1uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={6.1}
      pcbY={-5.15}
      schX={-7}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C13"
      footprint="0402"
      capacitance="0.1uF"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={9.25}
      pcbY={4.83}
      schX={-6}
      schY={-10}
      schRotation={90}
    />
    <capacitor
      name="C14"
      capacitance="0.1uF"
      footprint="0402"
      connections={{ pin1: "net.GND", pin2: "net.V3_3" }}
      pcbX={-2.75}
      pcbY={9.5}
      schX={-5}
      schY={-10}
      schRotation={90}
    />
    <trace from="Q1.pin1" to="Processor_chip.pin11" />
    <trace from="Q1.pin2" to="net.V3_3" />
    <trace from="Q1.pin3" to="U1.pin60" />
    <trace from="C1.pin1" to="U1.pin6" />
    <trace from="C2.pin1" to="U1.pin5" />
    <trace from="C3.pin1" to="U1.pin4" />
    <trace from="C4.pin1" to="U1.pin3" />
    <trace from="C5.pin1" to="U1.pin31" />
    <trace from="C6.pin1" to="U1.pin13" />
    <trace from="U1.pin42" to="U1.pin43" />
    <trace from="U1.pin42" to="U1.pin13" />
    <trace from="U1.pin13" to="U1.pin64" />
    <trace from="U1.pin64" to="U1.pin48" />
    <trace from="U1.pin48" to="U1.pin32" />
    <trace from="U1.pin32" to="U1.pin19" />
    <trace from="U1.pin11" to="U2.pin1" />
    <trace from="U1.pin51" to="U2.pin6" />
    <trace from="U1.pin52" to="U2.pin2" />
    <trace from="U1.pin53" to="U2.pin5" />
    <trace from="U2.pin7" to="U2.pin3" />
    <trace from="Processor_chip.pin57" to="U1.pin21" />
    <trace from="Processor_chip.pin59" to="U1.pin23" />
    <trace from="Processor_chip.pin61" to="U1.pin22" />
    <trace from="Processor_chip.pin55" to="U1.pin20" />
    <trace from="Processor_chip.pin14" to="U1.pin29" />
    <trace from="Processor_chip.pin12" to="U1.pin30" />
    <trace from="Processor_chip.pin16" to="U1.pin27" />
    <trace from="Processor_chip.pin17" to="U1.pin16" />
    <trace from="Processor_chip.pin19" to="U1.pin17" />
    <trace from="Processor_chip.pin23" to="U1.pin46" />
    <trace from="Processor_chip.pin21" to="U1.pin49" />
    <trace from="Processor_chip.pin2" to="U1.pin64" />
    <trace from="Processor_chip.pin1" to="U1.pin18" />
    <trace from="Processor_chip.pin6" to="U1.pin7" />
    <trace from="Processor_chip.pin44" to="U1.pin14" />
    <trace from="Processor_chip.pin49" to="U1.pin15" />
    <trace from="Processor_chip.pin23" to="U1.pin46" />
    <trace from="Processor_chip.pin17" to="U1.pin16" />
    <trace from="Processor_chip.pin19" to="U1.pin17" />
    <trace from="Processor_chip.pin52" to="U1.pin20" />
    <trace from="Processor_chip.pin57" to="U1.pin21" />
    <trace from="Processor_chip.pin42" to="U1.pin41" />
    <trace from="Processor_chip.pin38" to="U1.pin26" />
    <trace from="Processor_chip.pin14" to="U1.pin29" />
    <trace from="Processor_chip.pin12" to="U1.pin30" />
    <trace from="Processor_chip.pin9" to="U1.pin34" />
    <trace from="Processor_chip.pin37" to="U1.pin35" />
    <trace from="Processor_chip.pin35" to="U1.pin36" />
    <trace from="Processor_chip.pin50" to="U1.pin55" />
    <trace from="Processor_chip.pin56" to="U1.pin56" />
    <trace from="Processor_chip.pin54" to="U1.pin57" />
    <trace from="Processor_chip.pin53" to="U1.pin58" />
    <trace from="Processor_chip.pin51" to="U1.pin59" />
    <trace from="Processor_chip.pin41" to="U1.pin61" />
    <trace from="Processor_chip.pin43" to="U1.pin62" />
    <trace from="Processor_chip.pin10" to="U1.pin8" />
    <trace from="Processor_chip.pin18" to="U1.pin9" />
    <trace from="Processor_chip.pin60" to="U1.pin51" />
    <trace from="Processor_chip.pin62" to="U1.pin52" />
    <trace from="Processor_chip.pin64" to="U1.pin53" />
    <trace from="Processor_chip.pin73" to="U1.pin2" />
    <trace from="Processor_chip.pin71" to="U1.pin10" />
    <trace from="Processor_chip.pin70" to="U1.pin11" />
    <trace from="Processor_chip.pin55" to="U1.pin24" />
    <trace from="Processor_chip.pin34" to="U1.pin25" />
    <trace from="Processor_chip.pin47" to="U1.pin38" />
    <trace from="Processor_chip.pin46" to="U1.pin39" />
    <trace from="Processor_chip.pin48" to="U1.pin40" />
    <trace from="Processor_chip.pin40" to="U1.pin54" />
    <trace from="U2.pin8" to="Processor_chip.pin2" />
    <trace from="U2.pin4" to="Processor_chip.pin1" />
    <trace from="U2.pin6" to="U1.pin53" />
    <trace from="U2.pin5" to="U1.pin52" />
    <trace from="U2.pin2" to="U1.pin51" />
    <trace from="U2.pin1" to="U1.pin3" />
    <trace from="R2.pin2" to="Processor_chip.pin3" />
    <trace from="R3.pin2" to="Processor_chip.pin5" />
    <via
      pcbX={-6.13}
      pcbY={-7.75}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-7.03}
      pcbY={-7.72}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-0.67}
      pcbY={-7.69}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={7.86}
      pcbY={-7.69}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.0}
      pcbY={-7.66}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-2.3}
      pcbY={-7.58}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-5.54}
      pcbY={-7.33}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.68}
      pcbY={-7.1}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={1.92}
      pcbY={-7.07}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.23}
      pcbY={-7.04}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-0.44}
      pcbY={-7.02}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={3.72}
      pcbY={-7.02}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={9.52}
      pcbY={-6.99}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.9}
      pcbY={-6.85}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-2.3}
      pcbY={-6.82}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-8.9}
      pcbY={-6.95}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-9.5}
      pcbY={-6.75}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-5.82}
      pcbY={-6.59}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.37}
      pcbY={-6.37}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.79}
      pcbY={-6.28}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.09}
      pcbY={-6.26}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={2.14}
      pcbY={-6.23}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={10.08}
      pcbY={-6.17}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={2.71}
      pcbY={-5.75}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={1.1}
      pcbY={-5.64}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={9.32}
      pcbY={-5.58}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.73}
      pcbY={-5.5}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={8.92}
      pcbY={-5.02}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={9.8}
      pcbY={-4.99}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={8.92}
      pcbY={-4.32}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={7.04}
      pcbY={-4.26}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={6.48}
      pcbY={-3.72}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.99}
      pcbY={-3.67}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-0.58}
      pcbY={-3.67}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-2.72}
      pcbY={-3.58}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={0.37}
      pcbY={-3.58}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.26}
      pcbY={-3.56}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={1.67}
      pcbY={-3.44}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-4.05}
      pcbY={-3.41}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={1.27}
      pcbY={-2.85}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={7.52}
      pcbY={-2.68}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.9}
      pcbY={-2.37}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.93}
      pcbY={-2.18}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.18}
      pcbY={-2.12}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-0.11}
      pcbY={-2.06}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={8.36}
      pcbY={-1.95}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={7.6}
      pcbY={-1.9}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-2.86}
      pcbY={-1.84}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={2.34}
      pcbY={-1.78}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.48}
      pcbY={-1.67}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={3.78}
      pcbY={-1.64}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.71}
      pcbY={-1.53}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={8.25}
      pcbY={-1.11}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.15}
      pcbY={-1.08}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.79}
      pcbY={-1.0}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={9.54}
      pcbY={-0.55}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={7.01}
      pcbY={-0.52}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.96}
      pcbY={-0.21}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.85}
      pcbY={-0.01}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.59}
      pcbY={0.47}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.65}
      pcbY={1.4}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.48}
      pcbY={1.25}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={3.55}
      pcbY={1.5}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={10.27}
      pcbY={2.01}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.85}
      pcbY={2.75}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={3.78}
      pcbY={2.86}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={10.3}
      pcbY={2.89}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={5.04}
      pcbY={3.28}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-10}
      pcbY={4.1}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={7.55}
      pcbY={4.24}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-2.92}
      pcbY={4.29}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={0.37}
      pcbY={4.38}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={1.3}
      pcbY={4.38}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={2.37}
      pcbY={4.38}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-0.67}
      pcbY={4.41}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-5.85}
      pcbY={5.75}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-0.13}
      pcbY={5.08}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.99}
      pcbY={5.14}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.23}
      pcbY={5.14}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={0.85}
      pcbY={5.14}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.79}
      pcbY={5.17}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={8.84}
      pcbY={5.53}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-1.03}
      pcbY={7.59}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={4.28}
      pcbY={7.87}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={2.31}
      pcbY={9.1}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={6.28}
      pcbY={9.1}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-7}
      pcbY={10}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
    <via
      pcbX={-3.15}
      pcbY={10.5}
      fromLayer="top"
      toLayer="bottom"
      outerDiameter="0.6mm"
      holeDiameter="0.2mm"
    />
  </MicroModBoard>
)
export default Board
