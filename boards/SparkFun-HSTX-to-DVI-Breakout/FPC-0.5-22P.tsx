import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["v3_3"],
  pin2: ["SDA"],
  pin3: ["SCL"],
  pin4: ["GND1"],
  pin5: ["IO1"],
  pin6: ["IO0"],
  pin7: ["GND2"],
  pin8: ["D3_P"],
  pin9: ["D3_N"],
  pin10: ["GND3"],
  pin11: ["D2_P"],
  pin12: ["D2_N"],
  pin13: ["GND4"],
  pin14: ["CK_P"],
  pin15: ["CK_N"],
  pin16: ["GND5"],
  pin17: ["D1_P"],
  pin18: ["D1_N"],
  pin19: ["GND6"],
  pin20: ["D0_P"],
  pin21: ["D0_N"],
  pin22: ["GND7"],
} as const

export const FPC_0_5_22P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      schWidth={0.7}
      schPinArrangement={{
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "GND7",
            "D0_N",
            "D0_P",
            "GND6",
            "D1_N",
            "D1_P",
            "GND5",
            "CK_N",
            "CK_P",
            "GND4",
            "D2_N",
            "D2_P",
            "GND3",
            "D3_N",
            "D3_P",
            "GND2",
            "IO0",
            "IO1",
            "GND1",
            "SCL",
            "SDA",
            "v3_3",
          ],
        },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C6364665"],
      }}
      manufacturerPartNumber="FPC_0_5_22P_HYH2_0"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin24"]}
            pcbX="-6.9000369999999975mm"
            pcbY="-1.3750544000000673mm"
            width="1.7999964mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="5.250053000000207mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="4.749927000000071mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="4.2500550000000885mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="3.7499290000000656mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="3.250057000000197mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="2.749931000000174mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.250059000000192mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="1.7499330000000555mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="1.2500610000000734mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0.7499350000000504mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.250063000000182mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.25006299999984094mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="-0.749934999999823mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="-1.2500609999999597mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-1.7499329999999418mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.250058999999851mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.7499310000000605mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-3.250056999999856mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-3.749928999999838mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-4.250054999999975mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-4.749926999999957mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-5.250052999999866mm"
            pcbY="1.7750535999999784mm"
            width="0.29999939999999997mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="6.900037000000111mm"
            pcbY="-1.3750544000000673mm"
            width="1.7999964mm"
            height="1.9999959999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -7.124826999999868, y: -3.3433003999999755 },
              { x: 7.033133000000134, y: -3.3433003999999755 },
              { x: 7.124573000000169, y: -3.3433003999999755 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 7.124979400000143, y: -0.1437894000000597 },
              { x: 7.124979400000143, y: 1.774977399999898 },
              { x: 6.278956200000039, y: 1.774977399999898 },
              { x: 6.278956200000039, y: 1.139977399999907 },
              { x: 5.628436800000031, y: 1.139977399999907 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 7.124979400000143, y: -3.3439608000001044 },
              { x: 7.124979400000143, y: -2.606090799999947 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.125004799999829, y: -0.14381479999997282 },
              { x: -7.125004799999829, y: 1.7750028000000384 },
              { x: -6.279006999999865, y: 1.7750028000000384 },
              { x: -6.279006999999865, y: 1.1400027999999338 },
              { x: -5.6284621999999445, y: 1.1400027999999338 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.125004799999829, y: -3.3439862000000176 },
              { x: -7.125004799999829, y: -2.606090799999947 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=3816b3e94e7044b6b69db89ce42e3942&pn=C6364665",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 2, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}
