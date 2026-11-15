import { sel as typedSel } from "tscircuit"

const sel = typedSel as any

const SmtPad = (props: any) => <smtpad {...props} />
const PlatedHole = (props: any) => <platedhole {...props} />
const Capacitor = (props: any) => <capacitor {...props} />

const UsbC16PinFootprint = () => {
  const signalPads = [
    [-3.2, "pin1", 0.6],
    [-2.4, "pin2", 0.6],
    [3.2, "pin3", 0.6],
    [2.4, "pin4", 0.6],
    [1.75, "pin5", 0.3],
    [1.25, "pin6", 0.3],
    [0.75, "pin7", 0.3],
    [0.25, "pin8", 0.3],
    [-0.25, "pin9", 0.3],
    [-0.75, "pin10", 0.3],
    [-1.25, "pin11", 0.3],
    [-1.75, "pin12", 0.3],
  ] as const

  return (
    <footprint>
      {signalPads.map(([x, pin, width]) => (
        <SmtPad
          key={pin}
          shape="rect"
          width={`${width}mm`}
          height="1.15mm"
          pcbX={`${x}mm`}
          pcbY="2.525mm"
          portHints={[pin]}
        />
      ))}
      <smtpad
        shape="rect"
        width="0.8mm"
        height="1.2mm"
        pcbX="-4.32mm"
        pcbY="-1.4mm"
        portHints={["pin13"]}
      />
      <smtpad
        shape="rect"
        width="0.8mm"
        height="1.2mm"
        pcbX="4.32mm"
        pcbY="1.4mm"
        portHints={["pin14"]}
      />
      <smtpad
        shape="rect"
        width="0.8mm"
        height="1.2mm"
        pcbX="-4.32mm"
        pcbY="1.4mm"
        portHints={["pin15"]}
      />
      <smtpad
        shape="rect"
        width="0.8mm"
        height="1.2mm"
        pcbX="4.32mm"
        pcbY="-1.4mm"
        portHints={["pin16"]}
      />
    </footprint>
  )
}

const Jst2SmdFootprint = () => (
  <footprint>
    <smtpad
      shape="rect"
      width="1mm"
      height="1.8mm"
      pcbX="-1mm"
      portHints={["pin1"]}
    />
    <smtpad
      shape="rect"
      width="1mm"
      height="1.8mm"
      pcbX="1mm"
      portHints={["pin2"]}
    />
  </footprint>
)

const Sot23_5Footprint = () => (
  <footprint>
    {[-0.95, 0, 0.95].map((x, index) => (
      <SmtPad
        key={`pin${index + 1}`}
        shape="rect"
        width="0.55mm"
        height="0.75mm"
        pcbX={`${x}mm`}
        pcbY="-1.1375mm"
        portHints={[`pin${index + 1}`]}
      />
    ))}
    <smtpad
      shape="rect"
      width="0.55mm"
      height="0.75mm"
      pcbX="0.95mm"
      pcbY="1.1375mm"
      portHints={["pin4"]}
    />
    <smtpad
      shape="rect"
      width="0.55mm"
      height="0.75mm"
      pcbX="-0.95mm"
      pcbY="1.1375mm"
      portHints={["pin5"]}
    />
  </footprint>
)

const Sod323Footprint = () => (
  <footprint>
    <smtpad
      shape="rect"
      width="0.45mm"
      height="0.6mm"
      pcbX="-1.05mm"
      portHints={["pin1", "anode"]}
    />
    <smtpad
      shape="rect"
      width="0.45mm"
      height="0.6mm"
      pcbX="1.05mm"
      portHints={["pin2", "cathode"]}
    />
  </footprint>
)

const QwiicJst4Footprint = () => (
  <footprint>
    {[-1.5, -0.5, 0.5, 1.5].map((x, index) => (
      <SmtPad
        key={`pin${index + 1}`}
        shape="rect"
        width="0.6mm"
        height="1.35mm"
        pcbX={`${x}mm`}
        portHints={[`pin${index + 1}`]}
      />
    ))}
    <smtpad
      shape="rect"
      width="1.2mm"
      height="2mm"
      pcbX="-2.8mm"
      pcbY="-3.675mm"
      portHints={["pin5"]}
    />
    <smtpad
      shape="rect"
      width="1.2mm"
      height="2mm"
      pcbX="2.8mm"
      pcbY="-3.675mm"
      portHints={["pin6"]}
    />
  </footprint>
)

const TactileSwitchFootprint = () => (
  <footprint>
    <smtpad
      shape="rect"
      width="0.6mm"
      height="0.8mm"
      pcbX="-1mm"
      portHints={["pin1"]}
    />
    <smtpad
      shape="rect"
      width="0.6mm"
      height="0.8mm"
      pcbX="1mm"
      portHints={["pin2"]}
    />
  </footprint>
)

const Wson8_6x5Footprint = () => (
  <footprint>
    {[-1.905, -0.635, 0.635, 1.905].map((y, index) => (
      <SmtPad
        key={`pin${index + 1}`}
        shape="rect"
        width="0.8mm"
        height="0.6mm"
        pcbX="-2.65mm"
        pcbY={`${y}mm`}
        portHints={[`pin${index + 1}`]}
      />
    ))}
    {[-1.905, -0.635, 0.635, 1.905].map((y, index) => (
      <SmtPad
        key={`pin${8 - index}`}
        shape="rect"
        width="0.8mm"
        height="0.6mm"
        pcbX="2.65mm"
        pcbY={`${y}mm`}
        portHints={[`pin${8 - index}`]}
      />
    ))}
  </footprint>
)

const Crystal2PadFootprint = () => (
  <footprint>
    <smtpad
      shape="rect"
      width="1mm"
      height="1.2mm"
      pcbX="-1.1mm"
      portHints={["pin1"]}
    />
    <smtpad
      shape="rect"
      width="1mm"
      height="1.2mm"
      pcbX="1.1mm"
      portHints={["pin2"]}
    />
  </footprint>
)

const Crystal4PadFootprint = () => (
  <footprint>
    <smtpad
      shape="rect"
      width="1.2mm"
      height="1mm"
      pcbX="-1.7mm"
      pcbY="-1.1mm"
      portHints={["pin1"]}
    />
    <smtpad
      shape="rect"
      width="1.2mm"
      height="1mm"
      pcbX="1.7mm"
      pcbY="-1.1mm"
      portHints={["pin2"]}
    />
    <smtpad shape="rect" width="1.2mm" height="1mm" pcbX="1.7mm" pcbY="1.1mm" />
    <smtpad
      shape="rect"
      width="1.2mm"
      height="1mm"
      pcbX="-1.7mm"
      pcbY="1.1mm"
    />
  </footprint>
)

const CortexDebug10Footprint = () => (
  <footprint>
    {[
      [8, 1.27, 0.635],
      [6, 0, 0.635],
      [4, -1.27, 0.635],
      [2, -2.54, 0.635],
      [10, 2.54, 0.635],
      [7, 1.27, -0.635],
      [5, 0, -0.635],
      [3, -1.27, -0.635],
      [1, -2.54, -0.635],
      [9, 2.54, -0.635],
    ].map(([pin, x, y]) => (
      <PlatedHole
        key={`pin${pin}`}
        shape="circle"
        holeDiameter="0.508mm"
        outerDiameter="1mm"
        pcbX={`${x}mm`}
        pcbY={`${y}mm`}
        portHints={[`pin${pin}`]}
      />
    ))}
  </footprint>
)

const MicroSdFootprint = () => (
  <footprint>
    {[
      [1, -8.94, 10.7, 0.8, 1.5],
      [2, -7.84, 10.3, 0.8, 1.5],
      [3, -6.74, 10.7, 0.8, 1.5],
      [4, -5.64, 10.9, 0.8, 1.5],
      [5, -4.54, 10.7, 0.8, 1.5],
      [6, -3.44, 10.9, 0.8, 1.5],
      [7, -2.34, 10.7, 0.8, 1.5],
      [8, -1.24, 10.7, 0.8, 1.5],
      [9, -13.6, 14.55, 1.4, 1.9],
      [10, -0.45, 13.55, 1.4, 1.9],
      [11, -2.05, 0.4, 1.8, 1.4],
      [12, -7.75, 0.4, 1.8, 1.4],
    ].map(([pin, x, y, width, height]) => (
      <SmtPad
        key={`pin${pin}`}
        shape="rect"
        width={`${width}mm`}
        height={`${height}mm`}
        pcbX={`${x}mm`}
        pcbY={`${y}mm`}
        portHints={[`pin${pin}`]}
      />
    ))}
  </footprint>
)

const TQFP64Footprint = () => {
  const pads = []

  for (let i = 0; i < 16; i++) {
    pads.push(
      <SmtPad
        key={`pin${i + 1}`}
        shape="rect"
        width="1.5mm"
        height="0.3mm"
        pcbX="-5.5mm"
        pcbY={`${3.75 - i * 0.5}mm`}
        portHints={[`pin${i + 1}`]}
      />,
    )
  }

  for (let i = 0; i < 16; i++) {
    pads.push(
      <SmtPad
        key={`pin${17 + i}`}
        shape="rect"
        width="0.3mm"
        height="1.5mm"
        pcbX={`${-3.75 + i * 0.5}mm`}
        pcbY="-5.5mm"
        portHints={[`pin${17 + i}`]}
      />,
    )
  }

  for (let i = 0; i < 16; i++) {
    pads.push(
      <SmtPad
        key={`pin${33 + i}`}
        shape="rect"
        width="1.5mm"
        height="0.3mm"
        pcbX="5.5mm"
        pcbY={`${-3.75 + i * 0.5}mm`}
        portHints={[`pin${33 + i}`]}
      />,
    )
  }

  for (let i = 0; i < 16; i++) {
    pads.push(
      <SmtPad
        key={`pin${49 + i}`}
        shape="rect"
        width="0.3mm"
        height="1.5mm"
        pcbX={`${3.75 - i * 0.5}mm`}
        pcbY="5.5mm"
        portHints={[`pin${49 + i}`]}
      />,
    )
  }

  return <footprint>{pads}</footprint>
}

const Header12SmdFootprint = () => (
  <footprint>
    {Array.from({ length: 12 }, (_, i) => (
      <SmtPad
        key={`pin${i + 1}`}
        shape="rect"
        width="1.27mm"
        height="2mm"
        pcbX={`${(i - 5.5) * 2.54}mm`}
        pcbY="0mm"
        portHints={[`pin${i + 1}`]}
      />
    ))}
  </footprint>
)

const Header16SmdFootprint = () => (
  <footprint>
    {Array.from({ length: 16 }, (_, i) => (
      <SmtPad
        key={`pin${i + 1}`}
        shape="rect"
        width="1.27mm"
        height="2mm"
        pcbX={`${(i - 7.5) * 2.54}mm`}
        pcbY="0mm"
        portHints={[`pin${i + 1}`]}
      />
    ))}
  </footprint>
)

export default function SparkFunThingPlusSTM32() {
  return (
    <board width="58.42mm" height="22.86mm" routingDisabled>
      {/* USB-C power input */}
      <connector
        name="J1"
        standard="usb_c"
        manufacturerPartNumber="USB-C-16P-2LAYER-PADS"
        footprint={<UsbC16PinFootprint />}
        pinLabels={{
          pin1: ["VBUS"],
          pin2: ["GND"],
          pin3: ["VBUS2"],
          pin4: ["GND2"],
          pin5: ["CC2"],
          pin6: ["SBU1"],
          pin7: ["D_P"],
          pin8: ["D_P2"],
          pin9: ["D_N2"],
          pin10: ["D_N"],
          pin11: ["CC1"],
          pin12: ["SBU2"],
          pin13: ["SHIELD"],
          pin14: ["SHIELD2"],
          pin15: ["SHIELD3"],
          pin16: ["SHIELD4"],
        }}
        noConnect={["SBU1", "SBU2"]}
        pcbX={-22.86}
        pcbY={0}
        pcbRotation={270}
        connections={{
          VBUS: sel.net.V_USB,
          VBUS2: sel.net.V_USB,
          GND: sel.net.GND,
          GND2: sel.net.GND,
          SHIELD: sel.net.GND,
          SHIELD2: sel.net.GND,
          SHIELD3: sel.net.GND,
          SHIELD4: sel.net.GND,
          CC1: sel.net.USB_CC1,
          CC2: sel.net.USB_CC2,
          D_P: sel.net.USB_DP_RAW,
          D_P2: sel.net.USB_DP_RAW,
          D_N: sel.net.USB_DN_RAW,
          D_N2: sel.net.USB_DN_RAW,
        }}
      />

      <resistor
        name="R1"
        resistance="5.1k"
        footprint="0603"
        pcbX={-21.082}
        pcbY={-8.128}
        pcbRotation={90}
        connections={{ pin1: sel.net.GND, pin2: sel.net.USB_CC2 }}
      />
      <resistor
        name="R2"
        resistance="5.1k"
        footprint="0603"
        pcbX={-22.606}
        pcbY={-8.128}
        pcbRotation={90}
        connections={{ pin1: sel.net.GND, pin2: sel.net.USB_CC1 }}
      />

      {/* LiPo connector and MCP73831 charger */}
      <connector
        name="J2"
        manufacturerPartNumber="JST-2-SMD"
        footprint={<Jst2SmdFootprint />}
        pinLabels={{ pin1: ["PLUS"], pin2: ["MINUS"] }}
        pcbX={-11.43}
        pcbY={7.9502}
        connections={{ PLUS: sel.net.V_BATT, MINUS: sel.net.GND }}
      />
      <chip
        name="U1"
        manufacturerPartNumber="MCP73831"
        footprint={<Sot23_5Footprint />}
        pinLabels={{
          pin1: ["STAT"],
          pin2: ["VSS"],
          pin3: ["VBAT"],
          pin4: ["VIN"],
          pin5: ["PROG"],
        }}
        pcbX={-4.953}
        pcbY={3.048}
        pcbRotation={90}
        connections={{
          STAT: sel.net.CHG_STAT,
          VSS: sel.net.GND,
          VBAT: sel.net.V_BATT,
          VIN: sel.net.V_USB,
          PROG: sel.net.CHG_PROG,
        }}
      />
      <resistor
        name="R6"
        resistance="2k"
        footprint="0603"
        pcbX={-4.953}
        pcbY={0.381}
        pcbRotation={180}
        connections={{ pin1: sel.net.GND, pin2: sel.net.CHG_PROG }}
      />
      <led
        name="D4"
        color="yellow"
        footprint="0603"
        pcbX={-2.921}
        pcbY={-3.2512}
        connections={{ anode: sel.net.V_USB, cathode: sel.net.CHG_LED }}
      />
      <resistor
        name="R5"
        resistance="1k"
        footprint="0402"
        pcbX={-0.127}
        pcbY={-3.2258}
        pcbRotation={180}
        connections={{ pin1: sel.net.CHG_STAT, pin2: sel.net.CHG_LED }}
      />
      <capacitor
        name="C3"
        capacitance="4.7uF"
        footprint="0402"
        pcbX={-5.969}
        pcbY={5.3848}
        connections={{ pin1: sel.net.V_USB, pin2: sel.net.GND }}
      />
      <capacitor
        name="C4"
        capacitance="4.7uF"
        footprint="0402"
        pcbX={-3.81}
        pcbY={5.3848}
        pcbRotation={180}
        connections={{ pin1: sel.net.V_BATT, pin2: sel.net.GND }}
      />

      {/* USB/battery power selection and 3.3 V regulation */}
      <diode
        name="D1"
        manufacturerPartNumber="BAT60A"
        footprint={<Sod323Footprint />}
        pcbX={-10.6045}
        pcbY={-1.016}
        pcbRotation={90}
        connections={{ anode: sel.net.V_BATT, cathode: sel.net.VIN }}
      />
      <diode
        name="D2"
        manufacturerPartNumber="BAT60A"
        footprint={<Sod323Footprint />}
        pcbX={-12.192}
        pcbY={-1.016}
        pcbRotation={90}
        connections={{ anode: sel.net.V_USB, cathode: sel.net.VIN }}
      />
      <chip
        name="U2"
        manufacturerPartNumber="AP2112K-3.3TRG1"
        footprint={<Sot23_5Footprint />}
        pinLabels={{
          pin1: ["IN", "VIN"],
          pin2: ["GND"],
          pin3: ["EN"],
          pin4: ["NC"],
          pin5: ["OUT", "VOUT"],
        }}
        noConnect={["NC"]}
        pcbX={-9.779}
        pcbY={-4.699}
        pcbRotation={270}
        connections={{
          IN: sel.net.VIN,
          GND: sel.net.GND,
          EN: sel.net.EN,
          OUT: sel.net.V3_3,
        }}
      />
      <resistor
        name="R3"
        resistance="10k"
        footprint="0603"
        pcbX={-14.097}
        pcbY={-4.699}
        pcbRotation={90}
        connections={{ pin1: sel.net.EN, pin2: sel.net.VIN }}
      />
      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="0402"
        pcbX={-12.573}
        pcbY={-4.191}
        pcbRotation={270}
        connections={{ pin1: sel.net.VIN, pin2: sel.net.GND }}
      />
      <capacitor
        name="C2"
        capacitance="1uF"
        footprint="0402"
        pcbX={-8.382}
        pcbY={-2.286}
        pcbRotation={90}
        connections={{ pin1: sel.net.V3_3, pin2: sel.net.GND }}
      />
      <led
        name="D3"
        color="red"
        footprint="0603"
        pcbX={-2.921}
        pcbY={-4.826}
        pcbRotation={180}
        connections={{ anode: sel.net.PWR_LED, cathode: sel.net.GND }}
      />
      <resistor
        name="R4"
        resistance="1k"
        footprint="0402"
        pcbX={-0.127}
        pcbY={-4.826}
        connections={{
          pin1: sel.net.PWR_LED,
          pin2: sel.net.PWR_LED_ENABLE,
        }}
      />
      <solderjumper
        name="PWR"
        footprint="solderjumper2_bridged12_pw0.66_pl1.270_p1"
        layer="bottom"
        bridgedPins={[["1", "2"]]}
        pcbX={-1.27}
        pcbY={-5.588}
        pcbRotation={270}
        connections={{ pin1: sel.net.PWR_LED_ENABLE, pin2: sel.net.V3_3 }}
      />

      {/* Qwiic I2C connector */}
      <connector
        name="J3"
        standard="jst_sh"
        manufacturerPartNumber="JST04_1MM_RA"
        footprint={<QwiicJst4Footprint />}
        pinLabels={{
          pin1: ["GND"],
          pin2: ["VCC"],
          pin3: ["SDA"],
          pin4: ["SCL"],
          pin5: ["MOUNT1"],
          pin6: ["MOUNT2"],
        }}
        noConnect={["MOUNT1", "MOUNT2"]}
        pcbX={-19.812}
        pcbY={6.35}
        pcbRotation={180}
        connections={{
          GND: sel.net.GND,
          VCC: sel.net.V3_3,
          SDA: sel.net.SDA,
          SCL: sel.net.SCL,
        }}
      />

      {/* BOOT0 and reset controls */}
      <pushbutton
        name="S1"
        footprint={<TactileSwitchFootprint />}
        pcbX={-18.288}
        pcbY={2.032}
        connections={{ pin1: sel.net.BOOT0, pin2: sel.net.V3_3 }}
      />
      <resistor
        name="R7"
        resistance="100k"
        footprint="0402"
        pcbX={-13.843}
        pcbY={-1.27}
        pcbRotation={90}
        connections={{ pin1: sel.net.GND, pin2: sel.net.BOOT0 }}
      />
      <pushbutton
        name="S2"
        footprint={<TactileSwitchFootprint />}
        pcbX={-18.288}
        pcbY={-4.572}
        connections={{ pin1: sel.net.RESET, pin2: sel.net.GND }}
      />
      <resistor
        name="R8"
        resistance="4.7k"
        footprint="0603"
        pcbX={-18.669}
        pcbY={-7.239}
        connections={{ pin1: sel.net.RESET, pin2: sel.net.V3_3 }}
      />
      <capacitor
        name="C15"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={-19.558}
        pcbY={-9.017}
        pcbRotation={270}
        connections={{ pin1: sel.net.RESET, pin2: sel.net.GND }}
      />

      {/* D13 user LED */}
      <led
        name="D5"
        color="blue"
        footprint="0603"
        pcbX={-0.381}
        pcbY={6.096}
        connections={{ anode: sel.net.D13_LED, cathode: sel.net.GND }}
      />
      <resistor
        name="R12"
        resistance="1k"
        footprint="0402"
        pcbX={-0.381}
        pcbY={7.366}
        connections={{ pin1: sel.net.D13_LED, pin2: sel.net.D13 }}
      />

      {/* External 128 Mbit SPI flash */}
      <chip
        name="U3"
        manufacturerPartNumber="W25Q128"
        footprint={<Wson8_6x5Footprint />}
        pinLabels={{
          pin1: ["CS"],
          pin2: ["DO"],
          pin3: ["WP"],
          pin4: ["GND"],
          pin5: ["DI"],
          pin6: ["CLK"],
          pin7: ["HOLD"],
          pin8: ["VDD"],
        }}
        pcbX={26.035}
        pcbY={0}
        pcbRotation={90}
        connections={{
          CS: sel.net.FLASH_CS,
          DO: sel.net.FLASH_SDO,
          WP: sel.net.V3_3,
          GND: sel.net.GND,
          DI: sel.net.FLASH_SDI,
          CLK: sel.net.FLASH_SCK,
          HOLD: sel.net.V3_3,
          VDD: sel.net.V3_3,
        }}
      />
      <resistor
        name="R11"
        resistance="100k"
        footprint="0402"
        pcbX={22.225}
        pcbY={-4.191}
        pcbRotation={270}
        connections={{ pin1: sel.net.FLASH_CS, pin2: sel.net.V3_3 }}
      />
      <capacitor
        name="C20"
        capacitance="0.1uF"
        footprint="0402"
        pcbX={22.098}
        pcbY={3.556}
        pcbRotation={270}
        connections={{ pin1: sel.net.V3_3, pin2: sel.net.GND }}
      />

      {/* 32.768 kHz low-speed crystal */}
      <crystal
        name="Y1"
        frequency="32.768kHz"
        loadCapacitance="12.5pF"
        footprint={<Crystal2PadFootprint />}
        pcbX={4.572}
        pcbY={4.064}
        pcbRotation={270}
        connections={{ pin1: sel.net.KHZ32_IN, pin2: sel.net.KHZ32_OUT }}
      />
      <capacitor
        name="C16"
        capacitance="15pF"
        footprint="0402"
        pcbX={2.278}
        pcbY={4.445}
        pcbRotation={180}
        connections={{ pin1: sel.net.KHZ32_IN, pin2: sel.net.GND }}
      />
      <capacitor
        name="C17"
        capacitance="15pF"
        footprint="0402"
        pcbX={2.278}
        pcbY={3.429}
        pcbRotation={180}
        connections={{ pin1: sel.net.KHZ32_OUT, pin2: sel.net.GND }}
      />

      {/* 12 MHz high-speed crystal */}
      <crystal
        name="Y2"
        frequency="12MHz"
        loadCapacitance="18pF"
        footprint={<Crystal4PadFootprint />}
        pcbX={3.81}
        pcbY={-1.143}
        pcbRotation={270}
        connections={{ pin1: sel.net.OSC_IN, pin2: sel.net.OSC_OUT }}
      />
      <capacitor
        name="C18"
        capacitance="22pF"
        footprint="0402"
        pcbX={2.278}
        pcbY={2.413}
        pcbRotation={180}
        connections={{ pin1: sel.net.OSC_IN, pin2: sel.net.GND }}
      />
      <capacitor
        name="C19"
        capacitance="22pF"
        footprint="0402"
        pcbX={2.286}
        pcbY={-5.469}
        pcbRotation={270}
        connections={{ pin1: sel.net.OSC_OUT, pin2: sel.net.GND }}
      />

      {/* 10-pin Cortex SWD debug header */}
      <connector
        name="J6"
        manufacturerPartNumber="CORTEX_DEBUG_2X5_1.27MM"
        footprint={<CortexDebug10Footprint />}
        pinLabels={{
          pin1: ["VCC"],
          pin2: ["SWDIO"],
          pin3: ["GND"],
          pin4: ["SWCLK"],
          pin5: ["GND2"],
          pin6: ["SWO"],
          pin7: ["KEY"],
          pin8: ["NC"],
          pin9: ["GND3"],
          pin10: ["RESET"],
        }}
        noConnect={["SWO", "KEY", "NC"]}
        pcbX={-0.889}
        pcbY={1.651}
        pcbRotation={270}
        connections={{
          VCC: sel.net.V3_3,
          SWDIO: sel.net.SWDIO,
          GND: sel.net.GND,
          SWCLK: sel.net.SWCLK,
          GND2: sel.net.GND,
          GND3: sel.net.GND,
          RESET: sel.net.RESET,
        }}
      />

      {/* Bottom-side microSD socket */}
      <connector
        name="J7"
        manufacturerPartNumber="MICRO-SD-SOCKET"
        footprint={<MicroSdFootprint />}
        layer="bottom"
        pcbX={9.144}
        pcbY={5.461}
        pcbRotation={270}
        pinLabels={{
          pin1: ["DAT2"],
          pin2: ["DAT3"],
          pin3: ["CMD"],
          pin4: ["VCC"],
          pin5: ["CLK"],
          pin6: ["GND"],
          pin7: ["DAT0"],
          pin8: ["DAT1"],
          pin9: ["SHIELD"],
          pin10: ["SHIELD2"],
          pin11: ["CARD_DETECT1"],
          pin12: ["CARD_DETECT2"],
        }}
        noConnect={["CARD_DETECT1", "CARD_DETECT2"]}
        connections={{
          DAT2: sel.net.SDIO_D2,
          DAT3: sel.net.SDIO_D3,
          CMD: sel.net.SDIO_CMD,
          VCC: sel.net.V3_3,
          CLK: sel.net.SDIO_CLK,
          GND: sel.net.GND,
          DAT0: sel.net.SDIO_D0,
          DAT1: sel.net.SDIO_D1,
          SHIELD: sel.net.GND,
          SHIELD2: sel.net.GND,
        }}
      />

      {/* USB data termination */}
      <resistor
        name="R9"
        resistance="22"
        footprint="0402"
        pcbX={-18.796}
        pcbY={-2.032}
        connections={{ pin1: sel.net.USB_DP_RAW, pin2: sel.net.D_P }}
      />
      <resistor
        name="R10"
        resistance="22"
        footprint="0402"
        pcbX={-18.796}
        pcbY={-0.508}
        connections={{ pin1: sel.net.USB_DN_RAW, pin2: sel.net.D_N }}
      />

      {/* MCU core and supply decoupling */}
      <capacitor
        name="C5"
        capacitance="2.2uF"
        footprint="0402"
        pcbX={19.431}
        pcbY={-6.604}
        connections={{ pin1: sel.net.VCAP1, pin2: sel.net.GND }}
      />
      <capacitor
        name="C6"
        capacitance="2.2uF"
        footprint="0402"
        pcbX={20.0914}
        pcbY={3.556}
        pcbRotation={270}
        connections={{ pin1: sel.net.VCAP2, pin2: sel.net.GND }}
      />
      {[
        ["C8", 4.572, -5.461, 270, "0.1uF"],
        ["C9", 3.429, -5.461, 270, "1uF"],
        ["C10", 6.858, -5.461, 270, "4.7uF"],
        ["C11", 5.715, -5.461, 270, "0.1uF"],
        ["C12", 19.431, -5.588, 0, "0.1uF"],
        ["C13", 21.1074, 3.556, 270, "0.1uF"],
        ["C14", 8.89, 7.493, 90, "0.1uF"],
      ].map(([name, pcbX, pcbY, pcbRotation, capacitance]) => (
        <Capacitor
          key={name}
          name={name as string}
          capacitance={capacitance as string}
          footprint="0402"
          pcbX={pcbX as number}
          pcbY={pcbY as number}
          pcbRotation={pcbRotation as number}
          connections={{ pin1: sel.net.V3_3, pin2: sel.net.GND }}
        />
      ))}

      {/* Bottom-side SWD and backup-domain test points */}
      <testpoint
        name="TP1"
        footprintVariant="pad"
        padShape="rect"
        width="0.762mm"
        height="0.762mm"
        layer="bottom"
        pcbX={2.54}
        pcbY={3.81}
        connections={{ pin1: sel.net.SWDIO }}
      />
      <testpoint
        name="TP2"
        footprintVariant="pad"
        padShape="rect"
        width="0.762mm"
        height="0.762mm"
        layer="bottom"
        pcbX={2.54}
        pcbY={1.27}
        connections={{ pin1: sel.net.SWCLK }}
      />
      <testpoint
        name="TP_VB"
        footprintVariant="pad"
        padShape="rect"
        width="0.762mm"
        height="0.762mm"
        layer="bottom"
        pcbX={5.334}
        pcbY={3.81}
        connections={{ pin1: sel.net.VB }}
      />

      {/* STM32F405RGT6 */}
      <chip
        name="U4"
        footprint={<TQFP64Footprint />}
        pinLabels={{
          pin1: ["VBAT"],
          pin2: ["PC13"],
          pin3: ["PC14"],
          pin4: ["PC15"],
          pin5: ["PH0"],
          pin6: ["PH1"],
          pin7: ["NRST"],
          pin8: ["PC0"],
          pin9: ["PC1"],
          pin10: ["PC2"],
          pin11: ["PC3"],
          pin12: ["VSSA"],
          pin13: ["VDDA"],
          pin14: ["PA0"],
          pin15: ["PA1"],
          pin16: ["PA2"],
          pin17: ["PA3"],
          pin18: ["VSS1"],
          pin19: ["VDD1"],
          pin20: ["PA4"],
          pin21: ["PA5"],
          pin22: ["PA6"],
          pin23: ["PA7"],
          pin24: ["PC4"],
          pin25: ["PC5"],
          pin26: ["PB0"],
          pin27: ["PB1"],
          pin28: ["PB2_BOOT1"],
          pin29: ["PB10"],
          pin30: ["PB11"],
          pin31: ["VCAP1"],
          pin32: ["VDD2"],
          pin33: ["PB12"],
          pin34: ["PB13"],
          pin35: ["PB14"],
          pin36: ["PB15"],
          pin37: ["PC6"],
          pin38: ["PC7"],
          pin39: ["PC8"],
          pin40: ["PC9"],
          pin41: ["PA8"],
          pin42: ["PA9"],
          pin43: ["PA10"],
          pin44: ["PA11"],
          pin45: ["PA12"],
          pin46: ["PA13"],
          pin47: ["VCAP2"],
          pin48: ["VDD3"],
          pin49: ["PA14"],
          pin50: ["PA15"],
          pin51: ["PC10"],
          pin52: ["PC11"],
          pin53: ["PC12"],
          pin54: ["PD2"],
          pin55: ["PB3"],
          pin56: ["PB4"],
          pin57: ["PB5"],
          pin58: ["PB6"],
          pin59: ["PB7"],
          pin60: ["BOOT0"],
          pin61: ["PB8"],
          pin62: ["PB9"],
          pin63: ["VSS2"],
          pin64: ["VDD4"],
        }}
        noConnect={[
          "PC13",
          "PC0",
          "PA0",
          "PA1",
          "PA2",
          "PA3",
          "PB0",
          "PB1",
          "PB12",
          "PA8",
        ]}
        pcbX={12.7}
        pcbY={0}
        pcbRotation="270deg"
        connections={{
          VBAT: sel.net.VB,
          PC14: sel.net.KHZ32_IN,
          PC15: sel.net.KHZ32_OUT,
          PH0: sel.net.OSC_IN,
          PH1: sel.net.OSC_OUT,
          NRST: sel.net.RESET,
          PC1: sel.net.D13,
          PC2: sel.net.D12,
          PC3: sel.net.D11,
          VSSA: sel.net.GND,
          VDDA: sel.net.V3_3,
          VSS1: sel.net.GND,
          VDD1: sel.net.V3_3,
          PA4: sel.net.A0,
          PA5: sel.net.A1,
          PA6: sel.net.A2,
          PA7: sel.net.A3,
          PC4: sel.net.A4,
          PC5: sel.net.A5,
          PB2_BOOT1: sel.net.GND,
          PB10: sel.net.D1_TX,
          PB11: sel.net.D0_RX,
          VCAP1: sel.net.VCAP1,
          VDD2: sel.net.V3_3,
          PB13: sel.net.SCK,
          PB14: sel.net.CIPO,
          PB15: sel.net.COPI,
          PC6: sel.net.D6,
          PC7: sel.net.D5,
          PC8: sel.net.SDIO_D0,
          PC9: sel.net.SDIO_D1,
          PA9: sel.net.V3_3,
          PA10: sel.net.V3_3,
          PA11: sel.net.D_N,
          PA12: sel.net.D_P,
          PA13: sel.net.SWDIO,
          VCAP2: sel.net.VCAP2,
          VDD3: sel.net.V3_3,
          PA14: sel.net.SWCLK,
          PA15: sel.net.FLASH_CS,
          PC10: sel.net.SDIO_D2,
          PC11: sel.net.SDIO_D3,
          PC12: sel.net.SDIO_CLK,
          PD2: sel.net.SDIO_CMD,
          PB3: sel.net.FLASH_SCK,
          PB4: sel.net.FLASH_SDO,
          PB5: sel.net.FLASH_SDI,
          PB6: sel.net.SCL,
          PB7: sel.net.SDA,
          BOOT0: sel.net.BOOT0,
          PB8: sel.net.D9,
          PB9: sel.net.D10,
          VSS2: sel.net.GND,
          VDD4: sel.net.V3_3,
        }}
      />

      {/* 12-pin top SMD header */}
      <chip
        name="J4"
        footprint={<Header12SmdFootprint />}
        pinLabels={{
          pin1: ["SDA"],
          pin2: ["SCL"],
          pin3: ["D5"],
          pin4: ["D6"],
          pin5: ["D9"],
          pin6: ["D10"],
          pin7: ["D11"],
          pin8: ["D12"],
          pin9: ["D13"],
          pin10: ["V_USB"],
          pin11: ["EN"],
          pin12: ["V_BATT"],
        }}
        pcbX={8.89}
        pcbY={10.16}
        connections={{
          SDA: sel.net.SDA,
          SCL: sel.net.SCL,
          D5: sel.net.D5,
          D6: sel.net.D6,
          D9: sel.net.D9,
          D10: sel.net.D10,
          D11: sel.net.D11,
          D12: sel.net.D12,
          D13: sel.net.D13,
          V_USB: sel.net.V_USB,
          EN: sel.net.EN,
          V_BATT: sel.net.V_BATT,
        }}
      />

      {/* 16-pin bottom SMD header */}
      <chip
        name="J5"
        footprint={<Header16SmdFootprint />}
        pinLabels={{
          pin1: ["BOOT0"],
          pin2: ["D1_TX"],
          pin3: ["D0_RX"],
          pin4: ["CIPO"],
          pin5: ["COPI"],
          pin6: ["SCK"],
          pin7: ["A5"],
          pin8: ["A4"],
          pin9: ["A3"],
          pin10: ["A2"],
          pin11: ["A1"],
          pin12: ["A0"],
          pin13: ["GND"],
          pin14: ["NC"],
          pin15: ["V3_3"],
          pin16: ["RESET"],
        }}
        noConnect={["NC"]}
        pcbX={3.81}
        pcbY={-10.16}
        connections={{
          BOOT0: sel.net.BOOT0,
          D1_TX: sel.net.D1_TX,
          D0_RX: sel.net.D0_RX,
          CIPO: sel.net.CIPO,
          COPI: sel.net.COPI,
          SCK: sel.net.SCK,
          A5: sel.net.A5,
          A4: sel.net.A4,
          A3: sel.net.A3,
          A2: sel.net.A2,
          A1: sel.net.A1,
          A0: sel.net.A0,
          GND: sel.net.GND,
          V3_3: sel.net.V3_3,
          RESET: sel.net.RESET,
        }}
      />

      {/* Mounting holes */}
      <hole name="H1" diameter="2.5mm" pcbX={-26.67} pcbY={-8.89} />

      <hole name="H2" diameter="2.5mm" pcbX={-26.67} pcbY={8.89} />

      <hole name="H3" diameter="2.5mm" pcbX={26.67} pcbY={8.89} />

      <hole name="H4" diameter="2.5mm" pcbX={26.67} pcbY={-8.89} />
    </board>
  )
}
