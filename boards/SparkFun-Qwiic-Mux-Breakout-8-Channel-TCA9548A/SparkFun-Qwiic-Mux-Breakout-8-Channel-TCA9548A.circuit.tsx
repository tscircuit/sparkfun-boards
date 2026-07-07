import { PCA9548APW_118 } from "./PCA9548APW_118"
import { SM04B_SRSS_TB_LF__SN_ } from "./SM04B_SRSS_TB_LF__SN_"

const qwiicPorts = [
  {
    name: "J1",
    sda: "SDA0",
    scl: "SCL0",
    x: -12.7,
    y: 13.334,
    r: -90,
    sx: -13.4,
    sy: 2.4,
  },
  {
    name: "J8",
    sda: "SDA1",
    scl: "SCL1",
    x: -12.7,
    y: 3.174,
    r: -90,
    sx: -13.4,
    sy: 0,
  },
  {
    name: "J9",
    sda: "SDA2",
    scl: "SCL2",
    x: -12.7,
    y: -6.986,
    r: -90,
    sx: -13.4,
    sy: -2.4,
  },
  {
    name: "J10",
    sda: "SDA3",
    scl: "SCL3",
    x: -12.7,
    y: -17.146,
    r: -90,
    sx: -13.4,
    sy: -4.8,
  },
  {
    name: "J23",
    sda: "SDA4",
    scl: "SCL4",
    x: 12.699,
    y: -17.145,
    r: 90,
    sx: -6.4,
    sy: -4.8,
  },
  {
    name: "J24",
    sda: "SDA5",
    scl: "SCL5",
    x: 12.699,
    y: -6.985,
    r: 90,
    sx: -6.4,
    sy: -2.4,
  },
  {
    name: "J25",
    sda: "SDA6",
    scl: "SCL6",
    x: 12.699,
    y: 3.175,
    r: 90,
    sx: -6.4,
    sy: 0,
  },
  {
    name: "J26",
    sda: "SDA7",
    scl: "SCL7",
    x: 12.699,
    y: 13.335,
    r: 90,
    sx: -6.4,
    sy: 2.4,
  },
]

const pullups = [
  ["R6", "SDA0", -8, 14.858, 180, -11.2, 3.2],
  ["R7", "SCL0", -8, 13.334, 180, -10.1, 3.2],
  ["R1", "SDA1", -8, 4.698, 180, -11.2, 0.8],
  ["R8", "SCL1", -8, 3.174, 180, -10.1, 0.8],
  ["R9", "SDA2", -8, -5.462, 180, -11.2, -1.6],
  ["R10", "SCL2", -8, -6.986, 180, -10.1, -1.6],
  ["R11", "SDA3", -8, -15.622, 180, -11.2, -4],
  ["R12", "SCL3", -8, -17.146, 180, -10.1, -4],
  ["R2", "SDA4", 8, -17.144, 0, -9, -4],
  ["R3", "SCL4", 8, -15.62, 0, -7.9, -4],
  ["R13", "SDA5", 8, -6.984, 0, -9, -1.6],
  ["R14", "SCL5", 8, -5.46, 0, -7.9, -1.6],
  ["R15", "SDA6", 8, 3.176, 0, -9, 0.8],
  ["R16", "SCL6", 8, 4.7, 0, -7.9, 0.8],
  ["R17", "SDA7", 8, 13.336, 0, -9, 3.2],
  ["R18", "SCL7", 8, 14.86, 0, -7.9, 3.2],
] as const

const caps = [
  ["C2", -8, 11.81, 180, -16.1, 2.4],
  ["C3", -8, 1.65, 180, -16.1, 0],
  ["C4", -8, -8.51, 180, -16.1, -2.4],
  ["C5", -8, -18.67, 180, -16.1, -4.8],
  ["C6", 8, -18.669, 0, -3.7, -4.8],
  ["C7", 8, -8.509, 0, -3.7, -2.4],
  ["C8", 8, 1.651, 0, -3.7, 0],
  ["C9", 8, 11.811, 0, -3.7, 2.4],
] as const

const jumper2Footprint = (
  <footprint name="smt-jumper-2-no-silk">
    <smtpad
      portHints={["1", "pin1"]}
      pcbX="-0.4064mm"
      pcbY="0mm"
      width="0.635mm"
      height="1.27mm"
      shape="rect"
    />
    <smtpad
      portHints={["2", "pin2"]}
      pcbX="0.4064mm"
      pcbY="0mm"
      width="0.635mm"
      height="1.27mm"
      shape="rect"
    />
  </footprint>
)

export default () => (
  <board
    width="35.56mm"
    height="54.61mm"
    layers={2}
    pcbStyle={{ silkscreenTextVisibility: "hidden" }}
  >
    <schematicsection name="Main" displayName="Main" />
    <schematicsection name="Mux" displayName="I2C Multiplex" />
    <schematictext
      text="Main"
      schX={-11}
      schY={8}
      fontSize={0.27}
      color="gray"
      anchor="center"
    />
    <schematictext
      text="Qwiic Connectors"
      schX={-11}
      schY={5}
      fontSize={0.27}
      color="gray"
      anchor="center"
    />
    <schematictext
      text="I2C Multiplex"
      schX={6}
      schY={7}
      fontSize={0.27}
      color="gray"
      anchor="center"
    />

    <PCA9548APW_118
      name="U2"
      pcbX={0}
      pcbY={-1.906}
      pcbRotation={-90}
      schX={6.5}
      schY={2}
      schSectionName="Mux"
      connections={{
        VDD: "net.V3_3",
        VSS: "net.GND",
        pin3: "net.RESET_N",
        A0: "net.ADR0",
        A1: "net.ADR1",
        A2: "net.ADR2",
        SDA: "net.MAIN_SDA",
        SCL: "net.MAIN_SCL",
        SD0: "net.SDA0",
        SC0: "net.SCL0",
        SD1: "net.SDA1",
        SC1: "net.SCL1",
        SD2: "net.SDA2",
        SC2: "net.SCL2",
        SD3: "net.SDA3",
        SC3: "net.SCL3",
        SD4: "net.SDA4",
        SC4: "net.SCL4",
        SD5: "net.SDA5",
        SC5: "net.SCL5",
        SD6: "net.SDA6",
        SC6: "net.SCL6",
        SD7: "net.SDA7",
        SC7: "net.SCL7",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "A0",
            "A1",
            "pin3",
            "SD0",
            "SC0",
            "SD1",
            "SC1",
            "SD2",
            "SC2",
            "SD3",
            "SC3",
            "VSS",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "VDD",
            "SDA",
            "SCL",
            "A2",
            "SC7",
            "SD7",
            "SC6",
            "SD6",
            "SC5",
            "SD5",
            "SC4",
            "SD4",
          ],
        },
      }}
    />

    <SM04B_SRSS_TB_LF__SN_
      name="J2"
      pcbX={0}
      pcbY={22.225}
      pcbRotation={180}
      schX={-12.5}
      schY={6.5}
      schSectionName="Main"
      connections={{
        pin1: "net.GND",
        pin2: "net.V3_3",
        pin3: "net.MAIN_SDA",
        pin4: "net.MAIN_SCL",
        pin5: "net.GND",
        pin6: "net.GND",
      }}
    />
    <SM04B_SRSS_TB_LF__SN_
      name="J3"
      pcbX={0}
      pcbY={-22.225}
      schX={-9}
      schY={6.5}
      schSectionName="Main"
      connections={{
        pin1: "net.GND",
        pin2: "net.V3_3",
        pin3: "net.MAIN_SDA",
        pin4: "net.MAIN_SCL",
        pin5: "net.GND",
        pin6: "net.GND",
      }}
    />

    {qwiicPorts.map((j, i) => (
      <SM04B_SRSS_TB_LF__SN_
        key={j.name}
        name={j.name}
        pcbX={j.x}
        pcbY={j.y}
        pcbRotation={j.r}
        schX={j.sx}
        schY={j.sy}
        schSectionName="Ports"
        connections={{
          pin1: "net.GND",
          pin2: "net.V3_3",
          pin3: `net.${j.sda}`,
          pin4: `net.${j.scl}`,
          pin5: "net.GND",
          pin6: "net.GND",
        }}
      />
    ))}

    <resistor
      name="R4"
      resistance="4.7k"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={0}
      pcbY={4.444}
      pcbRotation={-90}
      schX={10.2}
      schY={4.4}
      schRotation={-90}
      schSectionName="Mux"
      connections={{ pin1: "net.MAIN_SDA_PULLUP", pin2: "net.MAIN_SDA" }}
    />
    <resistor
      name="R5"
      resistance="4.7k"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={3}
      pcbY={4.444}
      pcbRotation={-90}
      schX={11.5}
      schY={4.4}
      schRotation={-90}
      schSectionName="Mux"
      connections={{ pin1: "net.MAIN_SCL_PULLUP", pin2: "net.MAIN_SCL" }}
    />
    <solderjumper
      name="JP4"
      pinCount={3}
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      footprint={
        <footprint name="smt-jumper-3-nc-trace">
          <smtpad
            portHints={["1", "pin1"]}
            pcbX="-1.0414mm"
            pcbY="0mm"
            width="0.6604mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["2", "pin2"]}
            pcbX="0mm"
            pcbY="0mm"
            width="0.6604mm"
            height="1.27mm"
            shape="rect"
          />
          <smtpad
            portHints={["3", "pin3"]}
            pcbX="1.0414mm"
            pcbY="0mm"
            width="0.6604mm"
            height="1.27mm"
            shape="rect"
          />
        </footprint>
      }
      bridgedPins={[
        ["1", "2"],
        ["2", "3"],
      ]}
      pcbX={1.27}
      pcbY={6.985}
      pcbRotation={180}
      schX={10.8}
      schY={5.7}
      schSectionName="Mux"
      connections={{
        pin1: "net.MAIN_SCL_PULLUP",
        pin2: "net.V3_3",
        pin3: "net.MAIN_SDA_PULLUP",
      }}
    />

    {pullups.map(([name, net, x, y, r, sx, sy]) => (
      <resistor
        key={name}
        name={name}
        resistance="4.7k"
        footprint="0603"
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        pcbX={x}
        pcbY={y}
        pcbRotation={r}
        schX={sx}
        schY={sy}
        schRotation={-90}
        schSectionName="Ports"
        connections={{ pin1: "net.V3_3", pin2: `net.${net}` }}
      />
    ))}

    <resistor
      name="R19"
      resistance="10k"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={-7}
      pcbY={17.325}
      pcbRotation={90}
      schX={6.1}
      schY={-2.8}
      schRotation={90}
      schSectionName="Mux"
      connections={{ pin1: "net.GND", pin2: "net.ADR0" }}
    />
    <resistor
      name="R20"
      resistance="10k"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={0}
      pcbY={15.874}
      pcbRotation={-90}
      schX={7.7}
      schY={-2.8}
      schRotation={90}
      schSectionName="Mux"
      connections={{ pin1: "net.GND", pin2: "net.ADR1" }}
    />
    <resistor
      name="R21"
      resistance="10k"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={3}
      pcbY={15.874}
      pcbRotation={-90}
      schX={9.3}
      schY={-2.8}
      schRotation={90}
      schSectionName="Mux"
      connections={{ pin1: "net.GND", pin2: "net.ADR2" }}
    />

    <solderjumper
      name="JP3"
      pinCount={2}
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      footprint={jumper2Footprint}
      pcbX={-2.54}
      pcbY={12.699}
      pcbRotation={-90}
      schX={6.1}
      schY={-0.8}
      schSectionName="Mux"
      connections={{ pin1: "net.ADR0", pin2: "net.V3_3" }}
    />
    <solderjumper
      name="JP2"
      pinCount={2}
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      footprint={jumper2Footprint}
      pcbX={0}
      pcbY={12.699}
      pcbRotation={-90}
      schX={7.7}
      schY={-0.8}
      schSectionName="Mux"
      connections={{ pin1: "net.ADR1", pin2: "net.V3_3" }}
    />
    <solderjumper
      name="JP1"
      pinCount={2}
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      footprint={jumper2Footprint}
      pcbX={2.54}
      pcbY={12.699}
      pcbRotation={-90}
      schX={9.3}
      schY={-0.8}
      schSectionName="Mux"
      connections={{ pin1: "net.ADR2", pin2: "net.V3_3" }}
    />

    <resistor
      name="R22"
      resistance="10k"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={-6.223}
      pcbY={9.524}
      pcbRotation={-90}
      schX={3.3}
      schY={4.5}
      schRotation={90}
      schSectionName="Mux"
      connections={{ pin1: "net.RESET_N", pin2: "net.V3_3" }}
    />
    <testpoint
      name="J21"
      footprintVariant="pad"
      padShape="circle"
      padDiameter="1.2mm"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={-6.35}
      pcbY={19.684}
      schX={2.2}
      schY={5.6}
      schSectionName="Mux"
      connections={{ pin1: "net.RESET_N" }}
    />

    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={-3}
      pcbY={4.444}
      pcbRotation={90}
      schX={3.3}
      schY={1.1}
      schRotation={-90}
      schSectionName="Mux"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    {caps.map(([name, x, y, r, sx, sy]) => (
      <capacitor
        key={name}
        name={name}
        capacitance="1uF"
        footprint="0603"
        pcbStyle={{ silkscreenTextVisibility: "hidden" }}
        pcbX={x}
        pcbY={y}
        pcbRotation={r}
        schX={sx}
        schY={sy}
        schRotation={-90}
        schSectionName="Ports"
        connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
      />
    ))}

    <led
      name="D2"
      color="red"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={10}
      pcbY={23.495}
      schX={3.4}
      schY={-1.8}
      schRotation={-90}
      schSectionName="Mux"
      connections={{ anode: "net.V3_3", cathode: "net.PWR_LED_K" }}
    />
    <resistor
      name="R24"
      resistance="1k"
      footprint="0603"
      pcbStyle={{ silkscreenTextVisibility: "hidden" }}
      pcbX={10.16}
      pcbY={21.6}
      schX={3.4}
      schY={-3.4}
      schRotation={90}
      schSectionName="Mux"
      connections={{ pin1: "net.GND", pin2: "net.PWR_LED_K" }}
    />

    <hole name="H1" diameter="3.302mm" pcbX={-15.24} pcbY={-24.765} />
    <hole name="H2" diameter="3.302mm" pcbX={-15.24} pcbY={24.765} />
    <hole name="H3" diameter="3.302mm" pcbX={15.24} pcbY={24.765} />
    <hole name="H4" diameter="3.302mm" pcbX={15.24} pcbY={-24.765} />

    <silkscreentext
      text="Qwiic Mux"
      pcbX={0}
      pcbY={-11.5}
      fontSize={1.2}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="MAIN"
      pcbX={0}
      pcbY={19}
      fontSize={0.8}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="MAIN"
      pcbX={0}
      pcbY={-19}
      fontSize={0.8}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="0"
      pcbX={-8.9}
      pcbY={13.3}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="1"
      pcbX={-8.9}
      pcbY={3.2}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="2"
      pcbX={-8.9}
      pcbY={-7}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="3"
      pcbX={-8.9}
      pcbY={-17.1}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="4"
      pcbX={8.9}
      pcbY={-17.1}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="5"
      pcbX={8.9}
      pcbY={-7}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="6"
      pcbX={8.9}
      pcbY={3.2}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
    <silkscreentext
      text="7"
      pcbX={8.9}
      pcbY={13.3}
      fontSize={0.9}
      pcbStyle={{ silkscreenTextVisibility: "visible" }}
    />
  </board>
)
