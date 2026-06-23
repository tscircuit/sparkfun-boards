import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["UVcc"],
  pin3: ["D_NEG"],
  pin4: ["D_POS"],
  pin5: ["UGnd"],
  pin6: ["UCap"],
  pin7: ["VBus"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["RESET"],
  pin14: ["VCC1"],
  pin15: ["GND1"],
  pin16: ["XTAL2"],
  pin17: ["XTAL1"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["pin21"],
  pin22: ["pin22"],
  pin23: ["GND2"],
  pin24: ["AVCC1"],
  pin25: ["pin25"],
  pin26: ["pin26"],
  pin27: ["pin27"],
  pin28: ["pin28"],
  pin29: ["pin29"],
  pin30: ["pin30"],
  pin31: ["pin31"],
  pin32: ["pin32"],
  pin33: ["pin33"],
  pin34: ["VCC2"],
  pin35: ["GND3"],
  pin36: ["pin36"],
  pin37: ["pin37"],
  pin38: ["pin38"],
  pin39: ["pin39"],
  pin40: ["pin40"],
  pin41: ["pin41"],
  pin42: ["AREF"],
  pin43: ["GND4"],
  pin44: ["AVCC2"],
  pin45: ["EP"],
} as const

export const ATMEGA32U4_MU = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C112161"],
      }}
      manufacturerPartNumber="ATMEGA32U4_MU"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.499995mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.000123mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.499997mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.000125mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.499999mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.000127mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.499999mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="0.999871mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.499997mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.999869mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.499995mm"
            pcbY="-3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="3.499993mm"
            pcbY="-2.499995mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="3.499993mm"
            pcbY="-2.000123mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="3.499993mm"
            pcbY="-1.499997mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="3.499993mm"
            pcbY="-1.000125mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="3.499993mm"
            pcbY="-0.499999mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="3.499993mm"
            pcbY="-0.000127mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.499993mm"
            pcbY="0.499999mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.499993mm"
            pcbY="0.999871mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="3.499993mm"
            pcbY="1.499997mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="3.499993mm"
            pcbY="1.999869mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="3.499993mm"
            pcbY="2.499995mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="2.499995mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="1.999869mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="1.499997mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="0.999871mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="0.499999mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-0.000127mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-0.499999mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-1.000125mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-1.499997mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-2.000123mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-2.499995mm"
            pcbY="3.499993mm"
            width="0.2999994mm"
            height="1.2999974mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-3.499993mm"
            pcbY="2.499995mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-3.499993mm"
            pcbY="1.999869mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-3.499993mm"
            pcbY="1.499997mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-3.499993mm"
            pcbY="0.999871mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-3.499993mm"
            pcbY="0.499999mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-3.499993mm"
            pcbY="-0.000127mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-3.499993mm"
            pcbY="-0.499999mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-3.499993mm"
            pcbY="-1.000125mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-3.499993mm"
            pcbY="-1.499997mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-3.499993mm"
            pcbY="-2.000123mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-3.499993mm"
            pcbY="-2.499995mm"
            width="1.2999974mm"
            height="0.2999994mm"
            radius="0.1499997mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-0.000127mm"
            pcbY="-0.000127mm"
            width="5.1999896mm"
            height="5.1999896mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 4.499863999999889, y: -4.5001179999999295 },
              { x: 4.499863999999889, y: 4.49991480000017 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.500168800000097, y: -4.5001179999999295 },
              { x: 4.499863999999889, y: -4.5001179999999295 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.499863999999889, y: 4.49991480000017 },
              { x: -4.500168800000097, y: 4.49991480000017 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.500168800000097, y: 4.49991480000017 },
              { x: -4.500168800000097, y: -4.5001179999999295 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.5001454000001786, y: -4.250080399999888 },
              { x: -4.250131200000169, y: -3.5000945999998976 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.8751510000000735, y: -4.875148999999965 },
              { x: -3.8794091813404066, y: -4.907493098428176 },
              { x: -3.8918935373400245, y: -4.937633000000005 },
              { x: -3.9117532797688455, y: -4.96351472023116 },
              { x: -3.937635000000114, y: -4.983374462660095 },
              { x: -3.9677749015716017, y: -4.995858818659599 },
              { x: -4.000119000000154, y: -5.000117000000046 },
              { x: -4.0324630984284795, y: -4.995858818659599 },
              { x: -4.062603000000195, y: -4.983374462660095 },
              { x: -4.088484720231463, y: -4.96351472023116 },
              { x: -4.108344462660284, y: -4.937633000000005 },
              { x: -4.120828818659902, y: -4.907493098428176 },
              { x: -4.125087000000235, y: -4.875148999999965 },
              { x: -4.120828818659902, y: -4.842804901571412 },
              { x: -4.108344462660284, y: -4.8126649999999245 },
              { x: -4.088484720231463, y: -4.786783279768656 },
              { x: -4.062603000000195, y: -4.766923537339835 },
              { x: -4.0324630984284795, y: -4.7544391813401035 },
              { x: -4.000119000000154, y: -4.750180999999884 },
              { x: -3.9677749015716017, y: -4.7544391813401035 },
              { x: -3.937635000000114, y: -4.766923537339835 },
              { x: -3.9117532797688455, y: -4.786783279768656 },
              { x: -3.8918935373400245, y: -4.8126649999999245 },
              { x: -3.8794091813404066, y: -4.842804901571412 },
              { x: -3.8751510000000735, y: -4.875148999999965 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.004191mm"
            pcbY="5.499737mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.749991000000023, y: 4.749737000000096 },
              { x: 4.741608999999926, y: 4.749737000000096 },
              { x: 4.741608999999926, y: -5.249863000000005 },
              { x: -4.749991000000023, y: -5.249863000000005 },
              { x: -4.749991000000023, y: 4.749737000000096 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C112161.obj?uuid=f4f28d69e1114069a23b840a459c7d15",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C112161.step?uuid=f4f28d69e1114069a23b840a459c7d15",
        pcbRotationOffset: 90,
        modelOriginPosition: {
          x: -0.000025400000026820635,
          y: -0.000012700000070253736,
          z: -0.02,
        },
      }}
      {...props}
    />
  )
}
