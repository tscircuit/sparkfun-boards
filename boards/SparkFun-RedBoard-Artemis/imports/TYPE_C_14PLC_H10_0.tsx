import type { ChipProps } from "@tscircuit/props"
import { sel } from "tscircuit"

const pinLabels = {
  pin1: ["SHLD1"],
  pin2: ["SHLD2"],
  pin3: ["SHLD3"],
  pin4: ["SHLD4"],
  pin5: ["GND"],
  pin6: ["VBUS"],
  pin7: ["CC1"],
  pin8: ["D_P"],
  pin9: ["D_N"],
  pin10: ["VBUS"],
  pin11: ["GND"],
  pin12: ["GND"],
  pin13: ["CC2"],
  pin14: ["D_P"],
  pin15: ["D_N"],
  pin16: ["VBUS"],
  pin17: ["GND"],
  pin18: ["VBUS"],
} as const

export const TYPE_C_14PLC_H10_0 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: ["pin6", "pin14", "pin15", "pin7", "pin13", "pin2", "pin11"],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C3151746"],
      }}
      manufacturerPartNumber="TYPE_C_14PLC_H10_0"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-2.0001230000000305mm"
            pcbY="-1.9298919999999953mm"
            holeWidth="0.700024mm"
            holeHeight="1.700022mm"
            outerWidth="0.9999979999999999mm"
            outerHeight="1.9999959999999999mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="1.9998690000001034mm"
            pcbY="-1.9298919999999953mm"
            holeWidth="0.700024mm"
            holeHeight="1.700022mm"
            outerWidth="0.9999979999999999mm"
            outerHeight="1.9999959999999999mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-2.0001230000000305mm"
            pcbY="1.9298919999998816mm"
            holeWidth="0.700024mm"
            holeHeight="1.700022mm"
            outerWidth="0.9999979999999999mm"
            outerHeight="1.9999959999999999mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="1.9998690000001034mm"
            pcbY="1.9298919999998816mm"
            holeWidth="0.700024mm"
            holeHeight="1.700022mm"
            outerWidth="0.9999979999999999mm"
            outerHeight="1.9999959999999999mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="-3.2500569999999698mm"
            pcbY="0.7000239999998712mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="-2.300096999999937mm"
            pcbY="0.7000239999998712mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="-1.349882999999977mm"
            pcbY="0.7000239999998712mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="-0.44996100000003025mm"
            pcbY="0.7000239999998712mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin9"]}
            pcbX="0.44996100000003025mm"
            pcbY="0.7000239999998712mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin10"]}
            pcbX="2.300096999999937mm"
            pcbY="0.7000239999998712mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin11"]}
            pcbX="3.2500569999999698mm"
            pcbY="0.7000239999998712mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin12"]}
            pcbX="3.2500569999999698mm"
            pcbY="-0.7000239999999849mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin13"]}
            pcbX="1.350137000000018mm"
            pcbY="-0.7000239999999849mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin14"]}
            pcbX="0.44996100000003025mm"
            pcbY="-0.7000239999999849mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin15"]}
            pcbX="-0.44996100000003025mm"
            pcbY="-0.7000239999999849mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin16"]}
            pcbX="-2.300096999999937mm"
            pcbY="-0.7000239999999849mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin17"]}
            pcbX="-3.2500569999999698mm"
            pcbY="-0.7000239999999849mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin18"]}
            pcbX="2.300096999999937mm"
            pcbY="-0.7000239999999849mm"
            outerDiameter="0.6999986mm"
            holeDiameter="0.4499864mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: 4.749977800000124, y: 1.8999962000000323 },
              { x: 4.749977800000124, y: -1.8999962000000323 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.230372000000102, y: -1.899411999999984 },
              { x: 4.749977800000124, y: -1.899411999999984 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.769619999999918, y: -1.899411999999984 },
              { x: 0.7693659999999909, y: -1.899411999999984 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.750942999999893, y: -1.899411999999984 },
              { x: -3.2306259999999156, y: -1.899411999999984 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.230422800000156, y: 1.9004279999999198 },
              { x: 4.749977800000124, y: 1.9004279999999198 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7695691999999781, y: 1.9004279999999198 },
              { x: 0.7693152000000509, y: 1.9004279999999198 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.750942999999893, y: 1.9004279999999198 },
              { x: -3.230676800000083, y: 1.9004279999999198 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.750942999999893, y: -1.899411999999984 },
              { x: -4.750942999999893, y: 1.9004279999999198 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=519413015e21406fb0ed0619711b4e7e&pn=C3151746",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: {
          x: -1.1368683772161603e-13,
          y: -1.1368683772161603e-13,
          z: 0,
        },
      }}
      {...props}
    />
  )
}
