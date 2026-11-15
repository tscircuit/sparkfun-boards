import { sel } from "tscircuit"
import { AP2112K_3_3 } from "./imports/AP2112K_3_3"
import { ArtemisModule } from "./imports/ArtemisModule"
import { CH340C } from "./imports/CH340C"
import { CortexDebugHeader } from "./imports/CortexDebugHeader"
import { PowerJack } from "./imports/PowerJack"
import { SM04B_SRSS_TB_LF__SN_J1 } from "./imports/SM04B_SRSS_TB_LF__SN_J1"
import { TYPE_C_14PLC_H10_0 } from "./imports/TYPE_C_14PLC_H10_0"

// Netlist and BOM below were extracted directly from SparkFun's published
// Eagle source (RedBoard-Artemis.sch / .brd) for the RedBoard Artemis, so
// component values/part numbers and net connections match the real board.
// Reference designators (U1, U5, J5, R14, ...) match the original schematic.

const RedBoardArtemis = () => (
  <board width="68.58mm" height="53.34mm" autorouter="auto-cloud">
    {/* ================================================================ */}
    {/* U1 - Artemis (Apollo3 Blue) module                                */}
    {/* ================================================================ */}
    <ArtemisModule
      name="U1"
      pcbX={0}
      pcbY={5}
      schX={0}
      schY={0}
      connections={{
        GND1: sel.net().GND,
        GND2: sel.net().GND,
        GND3: sel.net().GND,
        GND4: sel.net().GND,
        GND5: sel.net().GND,
        GND6: sel.net().GND,
        VDD1: sel.net().VDD,
        VDD2: sel.net().VDD,
        RST: sel.net().RESET_N,
        BOOT: sel.net().BOOT,
        RXI_0: sel.net().RXI_0,
        TXO_0: sel.net().TXO_0,
        SWDIO: sel.net().SWDIO,
        SWDCK: sel.net().SWDCK,
        XI: sel.net().CRYSTAL_XI,
        XO: sel.net().CRYSTAL_XO,
        D4: sel.net().ARD_D3,
        D5: sel.net().SCK,
        D6: sel.net().MISO,
        D7: sel.net().MOSI,
        D22: sel.net().ARD_D4,
        D23: sel.net().ARD_D5,
        D24: sel.net().D1_ARD,
        D25: sel.net().D0_ARD,
        D27: sel.net().ARD_D6,
        D28: sel.net().ARD_D7,
        D36: sel.net().PDMDATA,
        D37: sel.net().PDMCLK,
        D39: sel.net().SCL,
        D40: sel.net().SDA,
        AD11: sel.net().A1,
        AD12: sel.net().A9,
        AD13: sel.net().A10,
        AD16: sel.net().A4,
        AD29: sel.net().A0,
        AD31: sel.net().A5,
        AD32: sel.net().A8,
        AD33: sel.net().A3_SWO,
        AD34: sel.net().A2,
        AD35: sel.net().ARD_D2,
      }}
    />

    {/* ================================================================ */}
    {/* Power: barrel jack -> LM1117 (VIN->5V); USB-C VBUS -> fuse ->    */}
    {/* P-MOSFET power mux -> 5V; AP2112-3.3 (5V->3.3V)                  */}
    {/* ================================================================ */}
    <PowerJack
      name="J3"
      pcbX={-29}
      pcbY={18}
      schX={-18}
      schY={9}
      connections={{
        PWR: sel.net().PWRIN,
        GND: sel.net().GND,
        GND2: sel.net().GND,
        GNDBREAK: sel.net().INSERT,
      }}
    />
    <diode
      name="D1"
      footprint="sma"
      schX={-14}
      schY={9}
      pcbX={-19}
      pcbY={18}
      connections={{ anode: sel.net().PWRIN, cathode: sel.net().VIN }}
    />
    <capacitor
      name="C5"
      capacitance="47uF"
      footprint="cap1210"
      polarized
      schX={-11}
      schY={7}
      pcbX={-14}
      pcbY={18}
      connections={{ pin1: sel.net().VIN, pin2: sel.net().GND }}
    />

    {/* IC3 - LM1117 adjustable regulator, R14/R15 divider sets ~5V out */}
    <chip
      name="IC3"
      pinLabels={{
        pin1: ["ADJ"],
        pin2: ["OUT"],
        pin3: ["IN"],
        pin4: ["OUT2"],
      }}
      manufacturerPartNumber="LM1117MPX-ADJ"
      footprint="sot223_4"
      schX={-7}
      schY={7}
      pcbX={-7}
      pcbY={18}
      connections={{
        IN: sel.net().VIN,
        OUT: sel.net().V5,
        OUT2: sel.net().V5,
        ADJ: sel.net().LM1117_ADJ,
      }}
    />
    <resistor
      name="R14"
      resistance="715"
      footprint="0603"
      schX={-4}
      schY={5}
      pcbX={1}
      pcbY={20}
      connections={{ pin1: sel.net().GND, pin2: sel.net().LM1117_ADJ }}
    />
    <resistor
      name="R15"
      resistance="240"
      footprint="0603"
      schX={-4}
      schY={8}
      pcbX={1}
      pcbY={18}
      connections={{ pin1: sel.net().LM1117_ADJ, pin2: sel.net().V5 }}
    />
    <capacitor
      name="C6"
      capacitance="10uF"
      footprint="cap0805"
      polarized
      schX={-2}
      schY={7}
      pcbX={6}
      pcbY={18}
      connections={{ pin1: sel.net().V5, pin2: sel.net().GND }}
    />
    <capacitor
      name="C3"
      capacitance="10uF"
      footprint="cap0805"
      polarized
      schX={2}
      schY={9}
      pcbX={11}
      pcbY={18}
      connections={{ pin1: sel.net().V5, pin2: sel.net().GND }}
    />
    <capacitor
      name="C4"
      capacitance="0.1uF"
      footprint="0603"
      schX={4}
      schY={9}
      pcbX={15}
      pcbY={18}
      connections={{ pin1: sel.net().V5, pin2: sel.net().GND }}
    />

    <TYPE_C_14PLC_H10_0
      name="J5"
      pcbX={-30}
      pcbY={0}
      pcbRotation={90}
      schX={-18}
      schY={0}
      connections={{
        pin1: sel.net().VUSB,
        pin2: sel.net().SHLD,
        pin3: sel.net().SHLD,
        pin4: sel.net().SHLD,
        pin5: sel.net().GND,
        pin6: sel.net().VUSB,
        pin7: sel.net().CC1,
        pin8: sel.net().USB_DP,
        pin9: sel.net().USB_DN,
        pin10: sel.net().VUSB,
        pin11: sel.net().GND,
        pin12: sel.net().GND,
        pin13: sel.net().CC2,
        pin14: sel.net().USB_DP,
        pin15: sel.net().USB_DN,
        pin16: sel.net().VUSB,
        pin17: sel.net().GND,
        pin18: sel.net().VUSB,
      }}
    />
    <resistor
      name="R7"
      resistance="5.1k"
      footprint="0603"
      schX={-15}
      schY={-2}
      pcbX={-26}
      pcbY={3}
      connections={{ pin1: sel.net().GND, pin2: sel.net().CC1 }}
    />
    <resistor
      name="R8"
      resistance="5.1k"
      footprint="0603"
      schX={-15}
      schY={-3}
      pcbX={-26}
      pcbY={5}
      connections={{ pin1: sel.net().GND, pin2: sel.net().CC2 }}
    />
    <fuse
      name="F2"
      currentRating="2"
      voltageRating="6"
      footprint="1210"
      schX={-12}
      schY={-1}
      pcbX={-22}
      pcbY={0}
      connections={{ pin1: sel.net().VUSB, pin2: sel.net().USBVCC }}
    />
    <jumper
      name="BYP"
      pinLabels={{ pin1: "VUSB", pin2: "USBVCC" }}
      footprint="pinrow2_id1.016_od1.88_nosquareplating"
      schX={-12}
      schY={-3}
      pcbX={-22}
      pcbY={4}
      connections={{ VUSB: sel.net().VUSB, USBVCC: sel.net().USBVCC }}
    />
    <capacitor
      name="C10"
      capacitance="0.1uF"
      footprint="0603"
      schX={-9}
      schY={-2}
      pcbX={-24}
      pcbY={-3}
      connections={{ pin1: sel.net().VUSB, pin2: sel.net().GND }}
    />
    <capacitor
      name="C15"
      capacitance="10uF"
      footprint="cap0805"
      polarized
      schX={-7}
      schY={-2}
      pcbX={-20}
      pcbY={-3}
      connections={{ pin1: sel.net().USBVCC, pin2: sel.net().GND }}
    />
    <capacitor
      name="C12"
      capacitance="0.1uF"
      footprint="0603"
      schX={-6}
      schY={-2}
      pcbX={-14}
      pcbY={-3}
      connections={{ pin1: sel.net().USBVCC, pin2: sel.net().GND }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0603"
      schX={-4}
      schY={-4}
      pcbX={-16}
      pcbY={2}
      connections={{ pin1: sel.net().INSERT, pin2: sel.net().V5 }}
    />
    <mosfet
      name="Q1"
      channelType="p"
      mosfetMode="enhancement"
      footprint="sot23"
      schX={-2}
      schY={-3}
      pcbX={-14}
      pcbY={0}
      connections={{
        drain: sel.net().USBVCC,
        source: sel.net().V5,
        gate: sel.net().INSERT,
      }}
    />

    <AP2112K_3_3
      name="U3"
      pcbX={13}
      pcbY={13}
      schX={2}
      schY={7}
      connections={{
        IN: sel.net().V5,
        EN: sel.net().V5,
        GND: sel.net().GND,
        NC: sel.net().V3_3_NC,
        OUT: sel.net().V3_3,
      }}
    />
    <capacitor
      name="C16"
      capacitance="1uF"
      footprint="0603"
      schX={5}
      schY={9}
      pcbX={13}
      pcbY={21}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().GND }}
    />

    {/* Cuttable trace jumper between the AP2112 3.3V output and the      */}
    {/* Artemis VDD rail, for inline current measurement (per silkscreen  */}
    {/* note "Cut jumper for current measurements" on the real board).    */}
    <jumper
      name="JP17"
      pinLabels={{ pin1: "V3_3", pin2: "VDD" }}
      footprint="pinrow2_id1.016_od1.88_nosquareplating"
      schX={4}
      schY={4}
      pcbX={20}
      pcbY={16}
      connections={{ V3_3: sel.net().V3_3, VDD: sel.net().VDD }}
    />

    {/* ================================================================ */}
    {/* Battery backup: CR2032 -> Schottky OR into 3.3V rail             */}
    {/* ================================================================ */}
    <battery
      name="BT1"
      standard="CR2032"
      voltage="3V"
      schX={10}
      schY={9}
      pcbX={26}
      pcbY={18}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="0mm"
            pcbY="0mm"
            radius="2mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="6mm"
            width="3mm"
            height="1.5mm"
            shape="rect"
          />
        </footprint>
      }
      connections={{ pin1: sel.net().V_BATT, pin2: sel.net().GND }}
    />
    <diode
      name="D4"
      footprint="sod323"
      schX={7}
      schY={9}
      pcbX={16}
      pcbY={16}
      connections={{ anode: sel.net().V_BATT, cathode: sel.net().V3_3 }}
    />

    {/* ================================================================ */}
    {/* U5 - CH340C USB-serial bridge + DTR auto-reset/bootload circuit  */}
    {/* ================================================================ */}
    <CH340C
      name="U5"
      pcbX={-18}
      pcbY={-14}
      schX={-8}
      schY={-10}
      connections={{
        GND: sel.net().GND,
        VCC: sel.net().V3_3,
        V3: sel.net().CH340_V3,
        DTR: sel.net().DTR_N,
        TXO: sel.net().RXI_0,
        RXI: sel.net().TXO_0,
        UD_P: sel.net().USB_DP,
        UD_N: sel.net().USB_DN,
      }}
    />
    <capacitor
      name="C17"
      capacitance="10nF"
      footprint="0603"
      schX={-11}
      schY={-9}
      pcbX={-22}
      pcbY={-14}
      connections={{ pin1: sel.net().CH340_V3, pin2: sel.net().GND }}
    />
    <capacitor
      name="C18"
      capacitance="0.1uF"
      footprint="0603"
      schX={-5}
      schY={-9}
      pcbX={-14}
      pcbY={-14}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().GND }}
    />

    {/* DTR -> RESET auto-reset cap + RESET pull-up */}
    <capacitor
      name="C8"
      capacitance="0.1uF"
      footprint="0603"
      schX={-2}
      schY={-8}
      pcbX={-10}
      pcbY={-10}
      connections={{ pin1: sel.net().DTR_N, pin2: sel.net().RESET_N }}
    />
    <resistor
      name="R3"
      resistance="100k"
      footprint="0603"
      schX={0}
      schY={-6}
      pcbX={-8}
      pcbY={-6}
      connections={{ pin1: sel.net().RESET_N, pin2: sel.net().VDD }}
    />
    <capacitor
      name="C28"
      capacitance="1nF"
      footprint="0603"
      schX={2}
      schY={-8}
      pcbX={-6}
      pcbY={-10}
      connections={{ pin1: sel.net().RESET_N, pin2: sel.net().GND }}
    />
    <resistor
      name="R5"
      resistance="0"
      footprint="0603"
      schX={-2}
      schY={-10}
      pcbX={-10}
      pcbY={-14}
      connections={{ pin1: sel.net().GND, pin2: sel.net().DTR_N }}
    />

    {/* DTR -> BOOT coupling cap + BOOT pull-down (Ambiq/SVL bootloader   */}
    {/* "double-tap" reset-into-bootloader circuit)                      */}
    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      schX={-2}
      schY={-12}
      pcbX={-6}
      pcbY={-14}
      connections={{ pin1: sel.net().DTR_N, pin2: sel.net().BOOT }}
    />
    <resistor
      name="R9"
      resistance="220k"
      footprint="0603"
      schX={0}
      schY={-14}
      pcbX={-3}
      pcbY={-10}
      connections={{ pin1: sel.net().GND, pin2: sel.net().BOOT }}
    />

    <switch
      name="S1"
      footprint="pinrow2_id1.016_od1.88_nosquareplating"
      schX={4}
      schY={-6}
      pcbX={0}
      pcbY={-14}
      connections={{ pin1: sel.net().GND, pin2: sel.net().RESET_N }}
    />

    {/* ================================================================ */}
    {/* Indicator LEDs                                                    */}
    {/* ================================================================ */}
    {/* LED1 (blue) - "L13" activity LED on SCK/D13 */}
    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0603"
      schX={6}
      schY={-2}
      pcbX={10}
      pcbY={-10}
      connections={{ pin1: sel.net().SCK, pin2: sel.net().L13_LED }}
    />
    <led
      name="LED1"
      footprint="1206"
      color="blue"
      schDisplayValue="Blue"
      schX={8}
      schY={-2}
      pcbX={13}
      pcbY={-10}
      connections={{ anode: sel.net().L13_LED, cathode: sel.net().GND }}
    />

    {/* LED2 (green) - always-on power LED */}
    <resistor
      name="R2"
      resistance="10k"
      footprint="0603"
      schX={6}
      schY={-4}
      pcbX={10}
      pcbY={-13}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().PWR_LED }}
    />
    <led
      name="LED2"
      footprint="1206"
      color="green"
      schDisplayValue="Green"
      schX={8}
      schY={-4}
      pcbX={13}
      pcbY={-13}
      connections={{ anode: sel.net().PWR_LED, cathode: sel.net().GND }}
    />

    {/* D2 (green) - TX activity LED, cathode on Artemis TX0 line */}
    <resistor
      name="R16"
      resistance="4.7k"
      footprint="0603"
      schX={6}
      schY={-6}
      pcbX={10}
      pcbY={-16}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().TXLED_A }}
    />
    <led
      name="D2"
      footprint="1206"
      color="green"
      schDisplayValue="TX"
      schX={8}
      schY={-6}
      pcbX={13}
      pcbY={-16}
      connections={{ anode: sel.net().TXLED_A, cathode: sel.net().TXO_0 }}
    />

    {/* D3 (yellow) - RX activity LED, cathode on Artemis RX0 line */}
    <resistor
      name="R12"
      resistance="4.7k"
      footprint="0603"
      schX={6}
      schY={-8}
      pcbX={10}
      pcbY={-19}
      connections={{ pin1: sel.net().V3_3, pin2: sel.net().RXLED_A }}
    />
    <led
      name="D3"
      footprint="1206"
      color="yellow"
      schDisplayValue="RX"
      schX={8}
      schY={-8}
      pcbX={13}
      pcbY={-19}
      connections={{ anode: sel.net().RXLED_A, cathode: sel.net().RXI_0 }}
    />

    {/* Direct UART0 breakout (RXI-0/TXO-0) */}
    <jumper
      name="J7"
      pinLabels={{ pin1: "RXI0", pin2: "TXO0" }}
      footprint="pinrow2_id1.016_od1.88_nosquareplating"
      schX={-4}
      schY={-16}
      pcbX={-4}
      pcbY={-20}
      connections={{ RXI0: sel.net().RXI_0, TXO0: sel.net().TXO_0 }}
    />

    {/* ================================================================ */}
    {/* MEMS PDM microphone                                               */}
    {/* ================================================================ */}
    <chip
      name="E1"
      pinLabels={{
        pin1: ["DATA"],
        pin2: ["SEL"],
        pin3: ["GND"],
        pin4: ["CLK"],
        pin5: ["VDD"],
      }}
      manufacturerPartNumber="SPH0641LM4H-1"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-1mm"
            pcbY="1mm"
            width="0.8mm"
            height="0.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="1mm"
            pcbY="1mm"
            width="0.8mm"
            height="0.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1mm"
            pcbY="-1mm"
            width="0.8mm"
            height="0.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0mm"
            pcbY="-1mm"
            width="0.8mm"
            height="0.8mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="1mm"
            pcbY="-1mm"
            width="0.8mm"
            height="0.8mm"
            shape="rect"
          />
        </footprint>
      }
      schX={16}
      schY={-2}
      pcbX={20}
      pcbY={0}
      connections={{
        DATA: sel.net().PDMDATA,
        CLK: sel.net().PDMCLK,
        SEL: sel.net().VDD,
        VDD: sel.net().VDD,
        GND: sel.net().GND,
      }}
    />

    {/* ================================================================ */}
    {/* 32.768kHz RTC crystal                                             */}
    {/* ================================================================ */}
    <crystal
      name="Y1"
      footprint="crystal"
      frequency="32.768kHz"
      loadCapacitance="15pF"
      schX={16}
      schY={2}
      pcbX={24}
      pcbY={12}
      connections={{ pin1: sel.net().CRYSTAL_XI, pin2: sel.net().CRYSTAL_XO }}
    />
    <capacitor
      name="C11"
      capacitance="15pF"
      footprint="0603"
      schX={14}
      schY={4}
      pcbX={17}
      pcbY={8}
      connections={{ pin1: sel.net().GND, pin2: sel.net().CRYSTAL_XO }}
    />
    <capacitor
      name="C13"
      capacitance="15pF"
      footprint="0603"
      schX={18}
      schY={4}
      pcbX={23}
      pcbY={8}
      connections={{ pin1: sel.net().GND, pin2: sel.net().CRYSTAL_XI }}
    />

    {/* ================================================================ */}
    {/* Qwiic connector                                                   */}
    {/* ================================================================ */}
    <SM04B_SRSS_TB_LF__SN_J1
      name="J4"
      pcbX={30}
      pcbY={-8}
      pcbRotation={0}
      schX={16}
      schY={6}
      connections={{
        GND: sel.net().GND,
        VCC: sel.net().VDD,
        SDA: sel.net().SDA,
        SCL: sel.net().SCL,
      }}
    />

    {/* ================================================================ */}
    {/* Cortex Debug (SWD) header                                         */}
    {/* ================================================================ */}
    <CortexDebugHeader
      name="J2"
      pcbX={16}
      pcbY={20}
      schX={16}
      schY={9}
      connections={{
        VCC: sel.net().VDD,
        SWDIO: sel.net().SWDIO,
        SWDCLK: sel.net().SWDCK,
        SWO: sel.net().A3_SWO,
        GND1: sel.net().GND,
        GND2: sel.net().GND,
        GND3: sel.net().GND,
        RESET: sel.net().RESET_N,
      }}
    />

    {/* Decoupling caps on Artemis VDD */}
    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0603"
      schX={-4}
      schY={2}
      pcbX={-10}
      pcbY={9}
      connections={{ pin1: sel.net().GND, pin2: sel.net().VDD }}
    />
    <capacitor
      name="C7"
      capacitance="10uF"
      footprint="cap0805"
      polarized
      schX={-2}
      schY={2}
      pcbX={9}
      pcbY={5}
      connections={{ pin1: sel.net().VDD, pin2: sel.net().GND }}
    />
    <capacitor
      name="C9"
      capacitance="1uF"
      footprint="0603"
      schX={0}
      schY={2}
      pcbX={9}
      pcbY={1}
      connections={{ pin1: sel.net().VDD, pin2: sel.net().GND }}
    />
    <capacitor
      name="C19"
      capacitance="0.1uF"
      footprint="0603"
      schX={12}
      schY={2}
      pcbX={16}
      pcbY={2}
      connections={{ pin1: sel.net().VDD, pin2: sel.net().GND }}
    />

    {/* ================================================================ */}
    {/* Arduino Uno R3 shield-compatible edge headers                    */}
    {/* ================================================================ */}
    <jumper
      name="JP_POWER"
      pinLabels={{
        pin1: "VIN",
        pin2: "GND1",
        pin3: "GND2",
        pin4: "V5",
        pin5: "VDD1",
        pin6: "RESET",
        pin7: "VDD2",
        pin8: "NC",
      }}
      footprint="pinrow8_female_p2.54mm"
      schDirection="left"
      schX={-20}
      schY={-16}
      pcbX={-20}
      pcbY={-24}
      connections={{
        VIN: sel.net().VIN,
        GND1: sel.net().GND,
        GND2: sel.net().GND,
        V5: sel.net().V5,
        VDD1: sel.net().VDD,
        RESET: sel.net().RESET_N,
        VDD2: sel.net().VDD,
      }}
    />
    <jumper
      name="JP_ANALOG"
      pinLabels={{
        pin1: "A0",
        pin2: "A1",
        pin3: "A2",
        pin4: "A3",
        pin5: "A4",
        pin6: "A5",
      }}
      footprint="pinrow6_female_p2.54mm"
      schDirection="left"
      schX={-10}
      schY={-16}
      pcbX={5}
      pcbY={-24}
      connections={{
        A0: sel.net().A0,
        A1: sel.net().A1,
        A2: sel.net().A2,
        A3: sel.net().A3_SWO,
        A4: sel.net().A4,
        A5: sel.net().A5,
      }}
    />
    <jumper
      name="JP_DIGITAL_LOW"
      pinLabels={{
        pin1: "D0",
        pin2: "D1",
        pin3: "D2",
        pin4: "D3",
        pin5: "D4",
        pin6: "D5",
        pin7: "D6",
        pin8: "D7",
      }}
      footprint="pinrow8_female_p2.54mm"
      schDirection="right"
      schX={10}
      schY={-16}
      pcbX={-20}
      pcbY={24}
      connections={{
        D0: sel.net().D0_ARD,
        D1: sel.net().D1_ARD,
        D2: sel.net().ARD_D2,
        D3: sel.net().ARD_D3,
        D4: sel.net().ARD_D4,
        D5: sel.net().ARD_D5,
        D6: sel.net().ARD_D6,
        D7: sel.net().ARD_D7,
      }}
    />
    <jumper
      name="JP_DIGITAL_HIGH"
      pinLabels={{
        pin1: "SCL",
        pin2: "SDA",
        pin3: "GND1",
        pin4: "GND2",
        pin5: "D13",
        pin6: "D12",
        pin7: "D11",
        pin8: "D10",
        pin9: "D9",
        pin10: "D8",
      }}
      footprint="pinrow10_female_p2.54mm"
      schDirection="right"
      schX={22}
      schY={-16}
      pcbX={8}
      pcbY={24}
      connections={{
        SCL: sel.net().SCL,
        SDA: sel.net().SDA,
        GND1: sel.net().GND,
        GND2: sel.net().GND,
        D13: sel.net().SCK,
        D12: sel.net().MISO,
        D11: sel.net().MOSI,
        D10: sel.net().A10,
        D9: sel.net().A9,
        D8: sel.net().A8,
      }}
    />

    <hole diameter="3.2mm" pcbX={-31} pcbY={-9} />
    <hole diameter="3.2mm" pcbX={-31} pcbY={9} />
    <hole diameter="3.2mm" pcbX={31} pcbY={-19} />
    <hole diameter="3.2mm" pcbX={31} pcbY={19} />
  </board>
)

export default RedBoardArtemis
