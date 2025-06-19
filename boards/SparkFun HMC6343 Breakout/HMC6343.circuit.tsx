import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["NC1"],
  pin2: ["NC2"],
  pin3: ["VDD1"],
  pin4: ["NC3"],
  pin5: ["NC4"],
  pin6: ["NC5"],
  pin7: ["NC6"],
  pin8: ["NC7"],
  pin9: ["NC8"],
  pin10: ["NC9"],
  pin11: ["VDD3"],
  pin12: ["NC10"],
  pin13: ["NC11"],
  pin14: ["NC12"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["NC13"],
  pin18: ["NC14"],
  pin19: ["pin19"],
  pin20: ["pin20"],
  pin21: ["VDD2"],
  pin22: ["CS"],
  pin23: ["NC15"],
  pin24: ["NC16"],
  pin25: ["GND2"],
  pin26: ["NC17"],
  pin27: ["NC18"],
  pin28: ["NC19"],
  pin29: ["GND1"],
  pin30: ["NC20"],
  pin31: ["NC21"],
  pin32: ["SCL"],
  pin33: ["NC22"],
  pin34: ["NC23"],
  pin35: ["CS_CTRL"],
  pin36: ["SDA"]
} as const

export const HMC6343 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C1519273"
  ]
}}
      manufacturerPartNumber="HMC6343"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-4.373372000000003mm" pcbY="3.1998919999999913mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-4.373372000000003mm" pcbY="2.4000460000000032mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-4.373372000000003mm" pcbY="1.5999459999999885mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-4.373372000000003mm" pcbY="0.8000999999999863mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-4.373372000000003mm" pcbY="-1.4210854715202004e-14mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-4.373372000000003mm" pcbY="-0.8001000000000147mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-4.373372000000003mm" pcbY="-1.5999460000000028mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-4.373372000000003mm" pcbY="-2.4000460000000174mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-4.373372000000003mm" pcbY="-3.1998920000000055mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-3.1998920000000055mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-2.4000460000000032mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.5999459999999885mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.8001000000000005mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.8001000000000005mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.5999460000000028mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.4000460000000032mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="3.1998920000000197mm" pcbY="-4.373372000000018mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="4.373372000000003mm" pcbY="-3.1998920000000055mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="4.373372000000003mm" pcbY="-2.4000460000000174mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="4.373372000000003mm" pcbY="-1.5999460000000028mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="4.373372000000003mm" pcbY="-0.8001000000000147mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="4.373372000000003mm" pcbY="-1.4210854715202004e-14mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="4.373372000000003mm" pcbY="0.8000999999999863mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="4.373372000000003mm" pcbY="1.5999459999999885mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="4.373372000000003mm" pcbY="2.4000460000000032mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="4.373372000000003mm" pcbY="3.1998919999999913mm" width="0.937006mm" height="0.44800520000000005mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="3.1998920000000197mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="2.4000460000000032mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="1.5999460000000028mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="0.8001000000000005mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="0mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-0.8001000000000005mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-1.5999459999999885mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="-2.4000460000000032mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="-3.1998920000000055mm" pcbY="4.373372000000003mm" width="0.44800520000000005mm" height="0.937006mm" shape="rect" />
<silkscreenpath route={[{"x":-4.576190999999994,"y":3.576396200000005},{"x":-4.576190999999994,"y":4.576190999999994},{"x":-3.576396200000005,"y":4.576190999999994}]} />
<silkscreenpath route={[{"x":4.576191000000009,"y":3.576396200000005},{"x":4.576191000000009,"y":4.576190999999994},{"x":3.576396200000005,"y":4.576190999999994}]} />
<silkscreenpath route={[{"x":4.576191000000009,"y":-3.576396200000019},{"x":4.576191000000009,"y":-4.576191000000009},{"x":3.576396200000005,"y":-4.576191000000009}]} />
<silkscreenpath route={[{"x":-4.576190999999994,"y":-3.576396200000019},{"x":-4.576190999999994,"y":-4.576191000000009},{"x":-3.576396200000005,"y":-4.576191000000009}]} />
      </footprint>}
      
      {...props}
    />
  )
}