import { sel } from "tscircuit"
import { OutlineBuilder } from "../../util/OutlineBuilder"
import { SM04B_SRSS_TB_LF__SN_ } from "./imports/SM04B_SRSS_TB_LF__SN_"
import { PiShimHeader } from "./imports/PiShimHeader"

const boardCenter = { x: 5.08, y: 6.985 }

const p = (x: number, y: number) => ({
  x: x - boardCenter.x,
  y: y - boardCenter.y,
})

const outline = new OutlineBuilder(p(8.89, 0).x, p(8.89, 0).y)
  .lineTo(p(1.27, 0).x, p(1.27, 0).y)
  .arcTo(p(0, 1.27).x, p(0, 1.27).y, { radius: 1.27, sweep: false })
  .lineTo(p(0, 12.7).x, p(0, 12.7).y)
  .arcTo(p(1.27, 13.97).x, p(1.27, 13.97).y, {
    radius: 1.27,
    sweep: false,
  })
  .lineTo(p(6.35, 13.97).x, p(6.35, 13.97).y)
  .arcTo(p(7.62, 12.7).x, p(7.62, 12.7).y, {
    radius: 1.27,
    sweep: false,
  })
  .lineTo(p(7.62, 9.1948).x, p(7.62, 9.1948).y)
  .lineTo(p(9.525, 9.1948).x, p(9.525, 9.1948).y)
  .arcTo(p(10.16, 8.5852).x, p(10.16, 8.5852).y, {
    radius: 0.635,
    sweep: true,
  })
  .lineTo(p(10.16, 1.27).x, p(10.16, 1.27).y)
  .arcTo(p(8.89, 0).x, p(8.89, 0).y, { radius: 1.27, sweep: false })
  .toArray()

const ap2112PinLabels = {
  pin1: ["IN", "VIN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["OUT", "VOUT"],
} as const

export default () => (
  <board outline={outline} routingDisabled>
    <schematicsection name="raspberry_pi" displayName="Raspberry Pi" />
    <schematicsection name="power" displayName="Power" />
    <schematicsection name="i2c" displayName="I2C Connections" />

    <PiShimHeader
      name="J9"
      pcbX={p(3.81, 11.43).x}
      pcbY={p(3.81, 11.43).y}
      schSectionName="raspberry_pi"
      schX={-8}
      schY={0}
      connections={{
        "5V_A": sel.net.V5,
        "5V_B": sel.net.V5,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
        GND: sel.net.GND,
      }}
    />
    <SM04B_SRSS_TB_LF__SN_
      name="J1"
      pcbX={p(4.9784, 5.588).x - 2.01}
      pcbY={p(4.9784, 5.588).y}
      pcbRotation={270}
      schSectionName="i2c"
      schX={8}
      schY={0}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GND", "VCC", "SDA", "SCL"],
        },
      }}
      connections={{
        GND: sel.net.GND,
        VCC: sel.net.V3_3,
        SDA: sel.net.SDA,
        SCL: sel.net.SCL,
      }}
    />
    <chip
      name="U2"
      pinLabels={ap2112PinLabels}
      manufacturerPartNumber="AP2112K-3.3TRG1"
      footprint="SOT23-5"
      pcbX={p(7.9756, 5.0546).x}
      pcbY={p(7.9756, 5.0546).y}
      pcbRotation={90}
      schSectionName="power"
      schX={0}
      schY={0}
      schWidth={1.4}
      schHeight={0.6}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["IN", "EN", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["OUT", "NC"],
        },
      }}
      connections={{
        VIN: sel.net.V5,
        EN: sel.net.V5,
        GND: sel.net.GND,
        VOUT: sel.net.V3_3,
      }}
    />
    <capacitor
      name="C1"
      capacitance="1.0uF"
      footprint="0603"
      pcbX={p(7.493, 2.3114).x}
      pcbY={p(7.493, 2.3114).y - 0.04}
      schSectionName="power"
      schX={-2.3}
      schY={0}
      schRotation={270}
      connections={{
        pin1: sel.net.V5,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C3"
      capacitance="1.0uF"
      footprint="0603"
      pcbX={p(7.9502, 7.874).x}
      pcbY={p(7.9502, 7.874).y}
      schSectionName="power"
      schX={2.6}
      schY={0}
      schRotation={270}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <fiducial
      name="FD1"
      pcbX={p(5.08, 13.3604).x}
      pcbY={p(5.08, 13.3604).y}
      padDiameter="0.635mm"
    />
    <fiducial
      name="FD2"
      pcbX={p(0.6096, 1.6764).x}
      pcbY={p(0.6096, 1.6764).y}
      padDiameter="0.635mm"
    />

    <schematictext text="3.3V/600mA" schX={0} schY={-1.2} fontSize={0.24} />

    <silkscreentext text="qwiic" fontSize={0.9} pcbX={-1.7} pcbY={-5.7} />
    <silkscreentext
      text="Pi SHIM"
      fontSize={0.8}
      pcbX={-1.1}
      pcbY={5.6}
      layer="bottom"
    />
  </board>
)
