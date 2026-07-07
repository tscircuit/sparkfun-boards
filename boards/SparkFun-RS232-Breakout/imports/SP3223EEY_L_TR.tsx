import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EN"],
  pin2: ["C1_POS"],
  pin3: ["V_POS"],
  pin4: ["C1_NEG"],
  pin5: ["C2_POS"],
  pin6: ["C2_NEG"],
  pin7: ["V_NEG"],
  pin8: ["T2OUT"],
  pin9: ["R2IN"],
  pin10: ["R2OUT"],
  pin11: ["STATUS"],
  pin12: ["T2IN"],
  pin13: ["T1IN"],
  pin14: ["ONLINE"],
  pin15: ["R1OUT"],
  pin16: ["R1IN"],
  pin17: ["T1OUT"],
  pin18: ["GND"],
  pin19: ["VCC"],
  pin20: ["SHUTDOWN"],
} as const

export const SP3223EEY_L_TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C33330"],
      }}
      manufacturerPartNumber="SP3223EEY_L_TR"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.925064mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.275078mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.625092mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.975106mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.324866mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.32512mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.975106mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.625092mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="2.275078mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.925064mm"
            pcbY="-2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-2.925064mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-2.275078mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-1.625092mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-0.975106mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-0.324866mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="0.32512mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="0.975106mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="1.625092mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.275078mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.925064mm"
            pcbY="2.870962mm"
            width="0.3640074mm"
            height="1.7420082mm"
            radius="0.1820037mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: -3.326206200000115, y: -1.7713960000000952 },
              { x: -3.326206200000115, y: 1.7713959999999815 },
              { x: 3.3262061999998878, y: 1.7713959999999815 },
              { x: 3.3262061999998878, y: -1.7713960000000952 },
              { x: -3.326206200000115, y: -1.7713960000000952 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.7749500000001035, y: -1.019047999999998 },
              { x: -2.780065010512544, y: -1.057900362136479 },
              { x: -2.7950614625364096, y: -1.094105000000127 },
              { x: -2.8189173726490253, y: -1.1251946273511066 },
              { x: -2.850007000000005, y: -1.1490505374637223 },
              { x: -2.886211637863539, y: -1.1640469894875878 },
              { x: -2.9250640000000203, y: -1.1691619999999148 },
              { x: -2.963916362136615, y: -1.1640469894875878 },
              { x: -3.0001210000000356, y: -1.1490505374637223 },
              { x: -3.031210627351129, y: -1.1251946273511066 },
              { x: -3.0550665374637447, y: -1.094105000000127 },
              { x: -3.0700629894874965, y: -1.057900362136479 },
              { x: -3.075178000000051, y: -1.019047999999998 },
              { x: -3.0700629894874965, y: -0.9801956378634031 },
              { x: -3.0550665374637447, y: -0.943990999999869 },
              { x: -3.031210627351129, y: -0.912901372649003 },
              { x: -3.0001210000000356, y: -0.8890454625363873 },
              { x: -2.963916362136615, y: -0.8740490105124081 },
              { x: -2.9250640000000203, y: -0.8689340000000811 },
              { x: -2.886211637863539, y: -0.8740490105124081 },
              { x: -2.850007000000005, y: -0.8890454625363873 },
              { x: -2.8189173726490253, y: -0.912901372649003 },
              { x: -2.7950614625364096, y: -0.943990999999869 },
              { x: -2.780065010512544, y: -0.9801956378634031 },
              { x: -2.7749500000001035, y: -1.019047999999998 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.4091880000000856, y: -2.870961999999963 },
              { x: -3.4143030105125263, y: -2.9098143621364443 },
              { x: -3.4292994625363917, y: -2.9460189999999784 },
              { x: -3.4531553726490074, y: -2.977108627351072 },
              { x: -3.484244999999987, y: -3.0009645374636875 },
              { x: -3.5204496378635213, y: -3.0159609894874393 },
              { x: -3.559302000000116, y: -3.02107599999988 },
              { x: -3.5981543621365972, y: -3.0159609894874393 },
              { x: -3.6343590000000177, y: -3.0009645374636875 },
              { x: -3.6654486273509974, y: -2.977108627351072 },
              { x: -3.689304537463613, y: -2.9460189999999784 },
              { x: -3.7043009894874785, y: -2.9098143621364443 },
              { x: -3.709416000000033, y: -2.870961999999963 },
              { x: -3.7043009894874785, y: -2.8321096378633683 },
              { x: -3.689304537463613, y: -2.795904999999834 },
              { x: -3.6654486273509974, y: -2.7648153726488545 },
              { x: -3.6343590000000177, y: -2.740959462536239 },
              { x: -3.5981543621365972, y: -2.7259630105123733 },
              { x: -3.559302000000116, y: -2.7208479999999327 },
              { x: -3.5204496378635213, y: -2.7259630105123733 },
              { x: -3.484244999999987, y: -2.740959462536239 },
              { x: -3.4531553726490074, y: -2.7648153726488545 },
              { x: -3.4292994625363917, y: -2.795904999999834 },
              { x: -3.4143030105125263, y: -2.8321096378633683 },
              { x: -3.4091880000000856, y: -2.870961999999963 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.1905mm"
            pcbY="4.556mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -3.958400000000097, y: 3.80600000000004 },
              { x: 3.5773999999998978, y: 3.80600000000004 },
              { x: 3.5773999999998978, y: -4.009199999999964 },
              { x: -3.958400000000097, y: -4.009199999999964 },
              { x: -3.958400000000097, y: 3.80600000000004 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33330.obj?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C33330.step?uuid=f8ba5b4174b9490d8c445fbe2ed40b80",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0.000012700000070253736, z: -0.019205 },
      }}
      {...props}
    />
  )
}
