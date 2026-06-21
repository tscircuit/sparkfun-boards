import { sel } from "tscircuit"
import { OutlineBuilder } from "../../util/OutlineBuilder"
import { MLT_9025 } from "./imports/MLT_9025"
import { X6511FRS_03_C85D30 } from "./imports/X6511FRS_03_C85D30"

const outline = new OutlineBuilder(-6.35, -12.7)
  .lineTo(-6.35, 11.43)
  .arcTo(-5.08, 12.7, { radius: 1.27, sweep: false, segments: 8 })
  .lineTo(5.08, 12.7)
  .arcTo(6.35, 11.43, { radius: 1.27, sweep: false, segments: 8 })
  .lineTo(6.35, 3.81)
  .lineTo(2.54, 0)
  .lineTo(2.54, -12.7)
  .lineTo(-6.35, -12.7)
  .toArray()

export default () => (
  <board outline={outline}>
    <schematictext
      text="B1"
      schX={5.25}
      schY={0}
      schRotation={90}
      anchor="center"
      color="gray"
      fontSize={0.24}
    />
    <MLT_9025
      name="B1"
      displayName="Buzzer"
      manufacturerPartNumber=""
      pcbX={0}
      pcbY={6.35}
      pcbRotation={180}
      schX={4}
      schY={0}
      schWidth={0.7}
      schHeight={1.2}
      schPinArrangement={{
        leftSide: ["pin2", "pin1"],
      }}
      connections={{
        pin1: sel.JP1.pin1,
        pin2: sel.JP1.pin3,
      }}
    />
    <X6511FRS_03_C85D30
      name="JP1"
      displayName="JP1"
      manufacturerPartNumber='1x3 RA Female .1"'
      pcbX={-1.905}
      pcbY={-1.6926}
      schX={-4}
      schY={0}
      schWidth={0.95}
      schHeight={1.5}
      schPinArrangement={{
        rightSide: ["pin3", "pin2", "pin1"],
      }}
    />
  </board>
)
