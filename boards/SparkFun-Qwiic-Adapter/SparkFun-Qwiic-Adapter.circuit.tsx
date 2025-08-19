import { SM04B_SRSS_TB_LF__SN } from "./SM04B_SRSS_TB_LF__SN"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VDD"],
  pin3: ["SDA"],
  pin4: ["SCL"],
}

export default () => (
  <board width="22.86mm" height="7.62mm">
    <SM04B_SRSS_TB_LF__SN name="JP1" pcbRotation={-90} pcbX={-8.4} schX={-3} />
    <SM04B_SRSS_TB_LF__SN name="JP2" pcbRotation={90} pcbX={8.4} schX={-6} />
    <jumper
      pcbRotation={180}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SCL", "SDA", "VDD", "GND"],
        },
      }}
      pinLabels={pinLabels}
      schWidth={0.7}
      name="JP3"
      schDirection="left"
      footprint={
        "pinrow4_id1.016_od1.88_nosquareplating_doublesidedpinlabel_pinlabeltextalignright_pinlabelorthogonal"
      }
      pcbY={1.27}
      schY={0}
    />
    <netlabel
      net="SCL"
      schX={-4.2}
      schY={0.3}
      anchorSide="right"
      connectsTo={sel.JP1.SCL}
    />
    <netlabel
      net="SDA"
      schX={-4.2}
      schY={0.1}
      anchorSide="right"
      connectsTo={sel.JP1.SDA}
    />
    <netlabel
      net="SCL"
      schX={-7.2}
      schY={0.3}
      anchorSide="right"
      connectsTo={sel.JP2.SCL}
    />
    <netlabel
      net="SDA"
      schX={-7.2}
      schY={0.1}
      anchorSide="right"
      connectsTo={sel.JP2.SDA}
    />
    <netlabel
      net="SCL"
      schX={-1.2}
      schY={0.3}
      anchorSide="right"
      connectsTo={sel.JP3.SCL}
    />
    <netlabel
      net="SDA"
      schX={-1.2}
      schY={0.1}
      anchorSide="right"
      connectsTo={sel.JP3.SDA}
    />
    <netlabel
      net="V3_3"
      schX={-1}
      schY={0.8}
      anchorSide="bottom"
      connectsTo={sel.JP3.VDD}
    />
    <netlabel
      net="GND"
      schX={-1}
      schY={-0.6}
      anchorSide="top"
      connectsTo={sel.JP3.GND}
    />
    <netlabel
      net="V3_3"
      schX={-4}
      schY={0.8}
      anchorSide="bottom"
      connectsTo={sel.JP1.VDD}
    />
    <netlabel
      net="GND"
      schX={-4}
      schY={-0.6}
      anchorSide="top"
      connectsTo={sel.JP1.GND}
    />
    <netlabel
      net="V3_3"
      schX={-7}
      schY={0.8}
      anchorSide="bottom"
      connectsTo={sel.JP2.VDD}
    />
    <netlabel
      net="GND"
      schX={-7}
      schY={-0.6}
      anchorSide="top"
      connectsTo={sel.JP2.GND}
    />
    <silkscreentext
      text="QWIIC"
      layer="bottom"
      fontSize={1}
      pcbX={-9}
      pcbRotation={90}
    />
    <silkscreentext
      text="Adapter"
      layer="bottom"
      fontSize={1}
      pcbX={-10}
      pcbRotation={90}
    />
  </board>
)
