import { sel } from "tscircuit"
import { SD } from "./SD-CARD-HOLDER"

const jumperPinLabels = {
  pin1: ["WP"],
  pin2: ["D1"],
  pin3: ["D0"],
  pin4: ["GND"],
  pin5: ["VCC"],
  pin6: ["CLK"],
  pin7: ["CD"],
  pin8: ["CMD"],
  pin9: ["D3"],
  pin10: ["D2"],
}
export default () => (
  <board width="39.37mm" height="35.56mm">
    <SD name="U1" pcbX={1.5} pcbRotation={90} />
    <jumper
      manufacturerPartNumber="M10"
      schX={-6}
      schWidth={0.6}
      pinLabels={jumperPinLabels}
      name="JP5"
      footprint="pinrow10_od1.88_id1.016_nosquareplating_pinlabeltextalignleft_pinlabelorthogonal"
      cadModel={null}
      pcbRotation={90}
      pcbX={-18.415}
    />
    <hole diameter={3.048} pcbY={15.15} pcbX={-17.145} />
    <hole diameter={3.048} pcbY={-15.15} pcbX={-17.145} />
    <silkscreentext text="SD/MMC" pcbRotation={90} pcbX={16.5} fontSize={2.5} />
    <silkscreentext text="sparkfun.com" fontSize={4} layer={"bottom"} />

    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-5}
      schY={1.5}
      connectsTo={sel.JP5.VCC}
    />
    <netlabel
      net="GND"
      anchorSide="top"
      schX={-5}
      schY={-1.3}
      connectsTo={sel.JP5.GND}
    />
    <netlabel
      net="CMD"
      anchorSide="left"
      schX={-4.7}
      schY={0.5}
      connectsTo={sel.JP5.pin8}
    />
    <netlabel
      net="CD"
      anchorSide="left"
      schX={-4.7}
      schY={0.3}
      connectsTo={sel.JP5.pin7}
    />
    <netlabel
      net="CLK"
      anchorSide="left"
      schX={-4.7}
      schY={0.1}
      connectsTo={sel.JP5.pin6}
    />
    <netlabel
      net="D0"
      anchorSide="left"
      schX={-4.7}
      schY={-0.5}
      connectsTo={sel.JP5.pin3}
    />
    <netlabel
      net="D1"
      anchorSide="left"
      schX={-4.7}
      schY={-0.7}
      connectsTo={sel.JP5.pin2}
    />
    <netlabel
      net="D2"
      anchorSide="left"
      schX={-4.7}
      schY={0.9}
      connectsTo={sel.JP5.pin10}
    />
    <netlabel
      net="D3"
      anchorSide="left"
      schX={-4.7}
      schY={0.7}
      connectsTo={sel.JP5.pin9}
    />
    <netlabel
      net="WP"
      anchorSide="left"
      schX={-4.8}
      schY={-0.9}
      connectsTo={sel.JP5.pin1}
    />

    <netlabel
      net="GND"
      anchorSide="top"
      schX={-1.6}
      schY={-1.3}
      connectsTo={[sel.U1.pin3, sel.U1.pin6, sel.U1.pin13, sel.U1.pin12]}
    />
    <netlabel
      net="VCC"
      anchorSide="bottom"
      schX={-1.3}
      schY={1.5}
      connectsTo={sel.U1.VDD}
    />
    <netlabel
      net="CMD"
      anchorSide="right"
      schX={-1.5}
      schY={0.2}
      connectsTo={sel.U1.pin2}
    />
    <netlabel
      net="CD"
      anchorSide="right"
      schX={-1.5}
      schY={-0.2}
      connectsTo={sel.U1.pin10}
    />
    <netlabel
      net="CLK"
      anchorSide="right"
      schX={-1.5}
      schY={0.4}
      connectsTo={sel.U1.pin5}
    />
    <netlabel
      net="D0"
      anchorSide="right"
      schX={-1.5}
      schY={1}
      connectsTo={sel.U1.pin7}
    />
    <netlabel
      net="D1"
      anchorSide="right"
      schX={-1.5}
      schY={0.8}
      connectsTo={sel.U1.pin8}
    />
    <netlabel
      net="D2"
      anchorSide="right"
      schX={-1.5}
      schY={0.6}
      connectsTo={sel.U1.pin9}
    />
    <netlabel
      net="D3"
      anchorSide="right"
      schX={-1.5}
      schY={0}
      connectsTo={sel.U1.pin1}
    />
    <netlabel
      net="WP"
      anchorSide="right"
      schX={-1.5}
      schY={-0.4}
      connectsTo={sel.U1.pin11}
    />
  </board>
)
