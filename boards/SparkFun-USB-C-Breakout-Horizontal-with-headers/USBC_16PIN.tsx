import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SHELL4"],
  pin2: ["SHELL3"],
  pin3: ["SHELL2"],
  pin4: ["SHELL1"],
  pin5: ["GND1", "A1B12"],
  pin6: ["VBUS1", "A4B9"],
  pin7: ["GND2", "B1A12"],
  pin8: ["VBUS2", "B4A9"],
  pin9: ["CC2", "B5"],
  pin10: ["SBU1", "A8"],
  pin11: ["DP2", "B6"],
  pin12: ["DN1", "A7"],
  pin13: ["DP1", "A6"],
  pin14: ["DN2", "B7"],
  pin15: ["CC1", "A5"],
  pin16: ["SBU2", "B8"],
} as const

export const USBC_16PIN = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["VBUS1", "DP1", "DN1", "CC1", "CC2", "SHELL1", "GND1"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C393939"],
      }}
      manufacturerPartNumber="TYPE-C16PIN"
      footprint={
        <footprint>
          <hole pcbX="2.890012mm" pcbY="1.0255314mm" diameter="0.649986mm" />
          <hole pcbX="-2.890012mm" pcbY="1.0255314mm" diameter="0.649986mm" />
          <platedhole
            portHints={["pin4"]}
            pcbX="4.320032mm"
            pcbY="-2.6249566mm"
            holeWidth="0.5999988mm"
            holeHeight="1.3999972mm"
            outerWidth="0.999998mm"
            outerHeight="1.7999964mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-4.320032mm"
            pcbY="-2.6249566mm"
            holeWidth="0.5999988mm"
            holeHeight="1.3999972mm"
            outerWidth="0.999998mm"
            outerHeight="1.7999964mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="4.320032mm"
            pcbY="1.5248954mm"
            holeWidth="0.5999988mm"
            holeHeight="1.700022mm"
            outerWidth="0.999998mm"
            outerHeight="2.0999958mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="-4.320032mm"
            pcbY="1.5248954mm"
            holeWidth="0.5999988mm"
            holeHeight="1.700022mm"
            outerWidth="0.999998mm"
            outerHeight="2.0999958mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.200146mm"
            pcbY="2.0999514mm"
            width="0.5999988mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.400046mm"
            pcbY="2.0999514mm"
            width="0.5999988mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.199892mm"
            pcbY="2.0999514mm"
            width="0.5999988mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="2.400046mm"
            pcbY="2.0999514mm"
            width="0.5999988mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.75006mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.249934mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="0.750062mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.249936mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.249936mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.750062mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-1.249934mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-1.75006mm"
            pcbY="2.0999514mm"
            width="0.2999994mm"
            height="1.1500104mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 4.450003800000104, y: -1.5055024000000685 },
              { x: 4.450003800000104, y: 0.25542880000000423 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.449978399999964, y: -3.744410799999855 },
              { x: -4.449978399999964, y: -5.262467199999946 },
              { x: 4.450003800000104, y: -5.262467199999946 },
              { x: 4.450003800000104, y: -3.744410799999855 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.449978399999964, y: 0.25542880000000423 },
              { x: -4.449978399999964, y: -1.5055024000000685 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="0.002032mm"
            pcbY="3.6752614mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.070031000000085, y: 2.924956599999973 },
              { x: 5.070030999999972, y: 2.924956599999973 },
              { x: 5.070030999999972, y: -5.525472000000036 },
              { x: -5.070031000000085, y: -5.525472000000036 },
              { x: -5.070031000000085, y: 2.924956599999973 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C393939.obj?uuid=99e30ad731ee487a8d60b7518cb54538",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C393939.step?uuid=99e30ad731ee487a8d60b7518cb54538",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0,
          y: -2.6754799000000045,
          z: 0.14999799999999996,
        },
      }}
      {...props}
    />
  )
}
