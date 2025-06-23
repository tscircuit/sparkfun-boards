import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["TXD"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["VCCIO"],
  pin5: ["RXD"],
  pin6: ["pin6"],
  pin7: ["GND1"],
  pin8: ["NC1"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["CBUS4"],
  pin13: ["CBUS2"],
  pin14: ["CBUS3"],
  pin15: ["USBDP"],
  pin16: ["USBDM"],
  pin17: ["V3_3OUT"],
  pin18: ["GND3"],
  pin19: ["pin19"],
  pin20: ["VCC"],
  pin21: ["GND2"],
  pin22: ["CBUS1"],
  pin23: ["CBUS0"],
  pin24: ["NC2"],
  pin25: ["AGND"],
  pin26: ["TEST"],
  pin27: ["OSCI"],
  pin28: ["OSCO"],
} as const

export const FT232RL = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C490691"],
      }}
      manufacturerPartNumber="FT232RL"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.225035999999932mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.575050000000033mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.925064000000134mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.2750780000000077mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-1.6250920000001088mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.9751059999999825mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-0.32486600000004273mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.32512000000008356mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.9751059999999825mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.625091999999995mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.2750780000000077mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.9250640000000203mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.5750499999999192mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="4.225035999999818mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-4.225035999999932mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-3.575050000000033mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-2.925064000000134mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-2.2750780000000077mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-1.6250920000001088mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-0.9751059999999825mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-0.32486600000004273mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="0.32512000000008356mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="0.9751059999999825mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="1.625091999999995mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="2.2750780000000077mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="2.9250640000000203mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.5750499999999192mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="4.225035999999818mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 5.079999999999927, y: 2.199868600000059 },
              { x: 5.079999999999927, y: -2.158999999999878 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: -0.6439915999999357 },
              { x: -5.080000000000041, y: -2.1999955999999656 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: 0.6349999999999909 },
              { x: -5.080000000000041, y: 2.199868600000059 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: 2.199868600000059 },
              { x: 5.079999999999927, y: 2.199868600000059 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: -2.1999955999999656 },
              { x: 5.079999999999927, y: -2.1999955999999656 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: -0.6439915999999357 },
              { x: -5.080000000000041, y: 0.6349999999999909 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f6684975c608438e85ae4e120e588908&pn=C490691",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
