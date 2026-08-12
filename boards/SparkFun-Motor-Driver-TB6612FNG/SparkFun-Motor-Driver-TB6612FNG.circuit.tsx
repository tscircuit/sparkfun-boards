import { sel } from "tscircuit"
import { TB6612FNG } from "./imports/TB6612FNG"

const at = (x: number, y: number) => ({
  x: Number((x - 10.16).toFixed(4)),
  y: Number((y - 10.16).toFixed(4)),
})

const route = (points: Array<[number, number]>) =>
  points.map(([x, y]) => at(x, y))

const pinHolderYPositions = Array.from(
  { length: 8 },
  (_, index) => -8.89 + index * 2.54,
)

const PinHolderSilkscreen = () => (
  <>
    {[-7.62, 7.62].flatMap((pcbX) =>
      pinHolderYPositions.map((pcbY) => (
        <silkscreenrect
          key={`${pcbX}-${pcbY}`}
          pcbX={pcbX}
          pcbY={pcbY}
          width="2.5mm"
          height="2.1mm"
          cornerRadius="1.05mm"
          filled={false}
          strokeWidth="0.15mm"
        />
      )),
    )}
  </>
)

type CapacitorHelperProps = Omit<
  React.ComponentProps<"capacitor">,
  "capacitance"
> & {
  capacitance?: string
}

const Cap0402 = ({ capacitance = "0.1uF", ...props }: CapacitorHelperProps) => (
  <capacitor
    capacitance={capacitance}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin1"]}
          pcbX="-0.58mm"
          pcbY="0mm"
          width="0.85mm"
          height="0.9mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin2"]}
          pcbX="0.58mm"
          pcbY="0mm"
          width="0.85mm"
          height="0.9mm"
          shape="rect"
        />
      </footprint>
    }
    {...props}
  />
)

const TantalumEIA3528 = ({
  capacitance = "10uF",
  ...props
}: CapacitorHelperProps) => (
  <capacitor
    capacitance={capacitance}
    footprint={
      <footprint>
        <smtpad
          portHints={["pin2"]}
          pcbX="-1.65mm"
          pcbY="0mm"
          width="2.5mm"
          height="1.2mm"
          shape="rect"
        />
        <smtpad
          portHints={["pin1"]}
          pcbX="1.65mm"
          pcbY="0mm"
          width="2.5mm"
          height="1.2mm"
          shape="rect"
        />
        <silkscreenpath
          route={[
            { x: -0.9, y: -1.6 },
            { x: -3.1, y: -1.6 },
            { x: -3.1, y: 1.55 },
            { x: -0.9, y: 1.55 },
          ]}
        />
        <silkscreenpath
          route={[
            { x: 1, y: -1.55 },
            { x: 2.2, y: -1.55 },
            { x: 3.1, y: -1.2 },
            { x: 3.1, y: 1.25 },
            { x: 2.2, y: 1.55 },
            { x: 1, y: 1.55 },
          ]}
        />
      </footprint>
    }
    {...props}
  />
)

export default () => (
  <board
    width="20.32mm"
    height="20.32mm"
    title="SparkFun Motor Driver - TB6612FNG"
  >
    <TB6612FNG
      name="U1"
      pcbX={0}
      pcbY={-1.27}
      pcbRotation={-90}
      schX={0}
      schY={0}
      connections={{
        pin1: "net.A01",
        pin2: "net.A01",
        pin3: "net.GND",
        pin4: "net.GND",
        pin5: "net.A02",
        pin6: "net.A02",
        pin7: "net.B02",
        pin8: "net.B02",
        pin9: "net.GND",
        pin10: "net.GND",
        pin11: "net.B01",
        pin12: "net.B01",
        pin13: "net.VM",
        pin14: "net.VM",
        pin15: "net.PWMB",
        pin16: "net.BIN2",
        pin17: "net.BIN1",
        pin18: "net.GND",
        pin19: "net.STBY",
        pin20: "net.VCC",
        pin21: "net.AIN1",
        pin22: "net.AIN2",
        pin23: "net.PWMA",
        pin24: "net.VM",
      }}
    />

    <Cap0402
      name="C1"
      pcbX={1.27}
      pcbY={3.81}
      schX={-3.4}
      schY={1.4}
      connections={{ pin1: "net.VM", pin2: "net.GND" }}
    />
    <Cap0402
      name="C2"
      pcbX={-1.27}
      pcbY={3.81}
      pcbRotation={180}
      schX={3.4}
      schY={1.4}
      connections={{ pin1: "net.VCC", pin2: "net.GND" }}
    />
    <TantalumEIA3528
      name="C3"
      pcbX={0}
      pcbY={6.35}
      pcbRotation={180}
      schX={-2.2}
      schY={2.4}
      connections={{ pin1: "net.VM", pin2: "net.GND" }}
    />

    <jumper
      name="JP1"
      footprint="pinrow8_id1.1176_od1.8796_nosquareplating"
      pcbX={-7.62}
      pcbY={0}
      pcbRotation={90}
      schX={-4.6}
      schY={-0.3}
      pinLabels={{
        pin1: ["GND"],
        pin2: ["B01"],
        pin3: ["B02"],
        pin4: ["A02"],
        pin5: ["A01"],
        pin6: ["GND"],
        pin7: ["VCC"],
        pin8: ["VM"],
      }}
      connections={{
        pin1: "net.GND",
        pin2: "net.B01",
        pin3: "net.B02",
        pin4: "net.A02",
        pin5: "net.A01",
        pin6: "net.GND",
        pin7: "net.VCC",
        pin8: "net.VM",
      }}
      schPinArrangement={{
        rightSide: [
          "pin8",
          "pin7",
          "pin6",
          "pin5",
          "pin4",
          "pin3",
          "pin2",
          "pin1",
        ],
      }}
    />
    <jumper
      name="JP2"
      footprint="pinrow8_id1.1176_od1.8796_nosquareplating"
      pcbX={7.62}
      pcbY={0}
      pcbRotation={-90}
      schX={4.6}
      schY={-0.3}
      pinLabels={{
        pin1: ["PWMA"],
        pin2: ["AIN2"],
        pin3: ["AIN1"],
        pin4: ["STBY"],
        pin5: ["BIN1"],
        pin6: ["BIN2"],
        pin7: ["PWMB"],
        pin8: ["GND"],
      }}
      connections={{
        pin1: "net.PWMA",
        pin2: "net.AIN2",
        pin3: "net.AIN1",
        pin4: "net.STBY",
        pin5: "net.BIN1",
        pin6: "net.BIN2",
        pin7: "net.PWMB",
        pin8: "net.GND",
      }}
      schPinArrangement={{
        leftSide: [
          "pin1",
          "pin2",
          "pin3",
          "pin4",
          "pin5",
          "pin6",
          "pin7",
          "pin8",
        ],
      }}
    />
    <PinHolderSilkscreen />
    <silkscreentext text="TB6612FNG" pcbX={0} pcbY={-6.9} fontSize={0.85} />
    <silkscreentext text="Motor Driver" pcbX={0} pcbY={-8.05} fontSize={0.75} />
  </board>
)
