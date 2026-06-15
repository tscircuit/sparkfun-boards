import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SS"],
  pin2: ["MOSI", "SDA"],
  pin3: ["SCLK", "SCL"],
  pin4: ["VO_POS"],
  pin5: ["NC1"],
  pin6: ["VO_NEG"],
  pin7: ["MISO"],
  pin8: ["EOC"],
  pin9: ["RESET"],
  pin10: ["GND"],
  pin11: ["NC2"],
  pin12: ["VDD"],
} as const

export const MPRLS0025PA00001A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={2.15}
      schHeight={1.2}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "SS", "MOSI", "SCLK", "MISO", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VO_NEG", "VO_POS", "EOC", "RESET"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C3257154"],
      }}
      manufacturerPartNumber="MPRLS0025PA00001A"
      footprint={
        <footprint>
          <hole pcbX="-0.780034mm" pcbY="0.069977mm" diameter="1.1000232mm" />
          <smtpad
            portHints={["pin1"]}
            pcbX="1.27mm"
            pcbY="-2.099945mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="-2.099945mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.27mm"
            pcbY="-2.099945mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.100072mm"
            pcbY="-1.200023mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.100072mm"
            pcbY="0.069977mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.100072mm"
            pcbY="1.339977mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-1.27mm"
            pcbY="2.099945mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0mm"
            pcbY="2.099945mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.27mm"
            pcbY="2.099945mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.100072mm"
            pcbY="1.339977mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.100072mm"
            pcbY="0.069977mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.100072mm"
            pcbY="-1.200023mm"
            width="0.6500114mm"
            height="0.6500114mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: 1.9084543999998687 },
              { x: -2.4999950000001263, y: 2.499969599999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: 0.6384544000000005 },
              { x: -2.4999950000001263, y: 0.7714995999998564 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: -0.6315455999999813 },
              { x: -2.4999950000001263, y: -0.4985004000001254 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.8384774000001016, y: -2.500020400000153 },
              { x: -2.4999950000001263, y: -2.500020400000153 },
              { x: -2.4999950000001263, y: -1.7685003999999935 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.5684774000000061, y: -2.500020400000153 },
              { x: -0.7014972000000625, y: -2.500020400000153 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.7015225999999757, y: -2.500020400000153 },
              { x: 0.5685027999998056, y: -2.500020400000153 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.499994999999899, y: -1.7685003999999935 },
              { x: 2.499994999999899, y: -2.500020400000153 },
              { x: 1.8385028000000148, y: -2.500020400000153 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.499994999999899, y: -0.4985004000001254 },
              { x: 2.499994999999899, y: -0.6315455999999813 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.499994999999899, y: 0.7714995999998564 },
              { x: 2.499994999999899, y: 0.6384544000000005 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.838477399999988, y: 2.499969599999872 },
              { x: 2.499994999999899, y: 2.499969599999872 },
              { x: 2.499994999999899, y: 1.9084543999998687 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.5684774000000061, y: 2.499969599999872 },
              { x: 0.7015225999999757, y: 2.499969599999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7015226000000894, y: 2.499969599999872 },
              { x: -0.5684774000000061, y: 2.499969599999872 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.4999950000001263, y: 2.499969599999872 },
              { x: -1.8384774000001016, y: 2.499969599999872 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.0254mm"
            pcbY="3.508377mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -2.7391999999999825, y: 2.758376999999882 },
              { x: 2.7899999999999636, y: 2.758376999999882 },
              { x: 2.7899999999999636, y: -3.278823000000216 },
              { x: -2.7391999999999825, y: -3.278823000000216 },
              { x: -2.7391999999999825, y: 2.758376999999882 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3257154.obj?uuid=7364e275613048ceb87ae8926d81a54e",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C3257154.step?uuid=7364e275613048ceb87ae8926d81a54e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.2912914000001403, z: -0.311591 },
      }}
      {...props}
    />
  )
}
