import { sel } from "tscircuit"
import { OutlineBuilder } from "../../util/OutlineBuilder"
import { SM04B_SRSS_TB_LF__SN_ } from "./imports/SM04B_SRSS_TB_LF__SN_"
import { PiShimHeader } from "./imports/PiShimHeader"

const outline = new OutlineBuilder(3.81, -6.985)
  .lineTo(-3.81, -6.985)
  .arcTo(-5.08, -5.715, { radius: 1.27, sweep: false })
  .lineTo(-5.08, 5.715)
  .arcTo(-3.81, 6.985, {
    radius: 1.27,
    sweep: false,
  })
  .lineTo(1.27, 6.985)
  .arcTo(2.54, 5.715, {
    radius: 1.27,
    sweep: false,
  })
  .lineTo(2.54, 2.2098)
  .lineTo(4.445, 2.2098)
  .arcTo(5.08, 1.6002, {
    radius: 0.635,
    sweep: true,
  })
  .lineTo(5.08, -5.715)
  .arcTo(3.81, -6.985, { radius: 1.27, sweep: false })
  .toArray()

const ap2112PinLabels = {
  pin1: ["IN", "VIN"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["NC"],
  pin5: ["OUT", "VOUT"],
} as const

export default () => (
  <board outline={outline}>
    <schematicsection name="raspberry_pi" displayName="Raspberry Pi" />
    <schematicsection name="power" displayName="Power" />
    <schematicsection name="i2c" displayName="I2C Connections" />

    <PiShimHeader
      name="J9"
      pcbX={-1.27}
      pcbY={4.445}
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
      pcbX={-2.1116}
      pcbY={-1.397}
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
      pcbX={2.8956}
      pcbY={-1.9304}
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
      pcbX={2.413}
      pcbY={-4.7136}
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
      pcbX={2.8702}
      pcbY={0.889}
      schSectionName="power"
      schX={2.6}
      schY={0}
      schRotation={270}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <fiducial name="FD1" pcbX={0} pcbY={6.3754} padDiameter="0.635mm" />
    <fiducial name="FD2" pcbX={-4.4704} pcbY={-5.3086} padDiameter="0.635mm" />

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
