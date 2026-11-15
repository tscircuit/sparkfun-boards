import type { ChipProps } from "@tscircuit/props"

// Pin/pad names and coordinates extracted directly from SparkFun's
// RedBoard-Artemis.sch / ARTEMIS_FP package (Eagle) - 59-pad castellated module edge.
const pinLabels = {
  pin1: ["GND1"],
  pin2: ["SWDCK"],
  pin3: ["RXI_0"],
  pin4: ["D39"],
  pin5: ["D40"],
  pin6: ["D9"],
  pin7: ["BOOT"],
  pin8: ["D10"],
  pin9: ["TXO_0"],
  pin10: ["SWDIO"],
  pin11: ["D8"],
  pin12: ["D5"],
  pin13: ["D7"],
  pin14: ["AD35"],
  pin15: ["D4"],
  pin16: ["D24"],
  pin17: ["D22"],
  pin18: ["D23"],
  pin19: ["D27"],
  pin20: ["D14"],
  pin21: ["D28"],
  pin22: ["GND2"],
  pin23: ["D6"],
  pin24: ["AD32"],
  pin25: ["D25"],
  pin26: ["AD12"],
  pin27: ["D26"],
  pin28: ["AD13"],
  pin29: ["D15"],
  pin30: ["AD33"],
  pin31: ["AD34"],
  pin32: ["AD11"],
  pin33: ["AD29"],
  pin34: ["XO"],
  pin35: ["XI"],
  pin36: ["VDD1"],
  pin37: ["VDD2"],
  pin38: ["GND3"],
  pin39: ["GND4"],
  pin40: ["D19"],
  pin41: ["D18"],
  pin42: ["AD16"],
  pin43: ["D17"],
  pin44: ["AD31"],
  pin45: ["D41"],
  pin46: ["D45"],
  pin47: ["GND5"],
  pin48: ["D2"],
  pin49: ["D1"],
  pin50: ["RST"],
  pin51: ["D0"],
  pin52: ["D43"],
  pin53: ["D42"],
  pin54: ["D3"],
  pin55: ["D36"],
  pin56: ["D38"],
  pin57: ["D37"],
  pin58: ["D44"],
  pin59: ["GND6"],
} as const

export const ArtemisModule = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="ARTEMIS-DEV-15443"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="4.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="4.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="3.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="3.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="2.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="2.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="1.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="1.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="0.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="0.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="-0.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="-1.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-1.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-2.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-2.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-3.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin17"]}
            pcbX="-3.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin18"]}
            pcbX="-4.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin19"]}
            pcbX="-4.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin20"]}
            pcbX="-5.0mm"
            pcbY="3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin21"]}
            pcbX="-5.5mm"
            pcbY="4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin22"]}
            pcbX="-6.5mm"
            pcbY="4.5mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin23"]}
            pcbX="-6.5mm"
            pcbY="3.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin24"]}
            pcbX="-5.7mm"
            pcbY="3.0mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin25"]}
            pcbX="-6.5mm"
            pcbY="2.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin26"]}
            pcbX="-5.7mm"
            pcbY="2.0mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin27"]}
            pcbX="-6.5mm"
            pcbY="1.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin28"]}
            pcbX="-5.7mm"
            pcbY="1.0mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin29"]}
            pcbX="-6.5mm"
            pcbY="0.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin30"]}
            pcbX="-5.7mm"
            pcbY="0.0mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin31"]}
            pcbX="-6.5mm"
            pcbY="-0.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin32"]}
            pcbX="-5.7mm"
            pcbY="-1.0mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin33"]}
            pcbX="-6.5mm"
            pcbY="-1.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin34"]}
            pcbX="-5.7mm"
            pcbY="-2.0mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin35"]}
            pcbX="-6.5mm"
            pcbY="-2.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin36"]}
            pcbX="-5.7mm"
            pcbY="-3.0mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin37"]}
            pcbX="-6.5mm"
            pcbY="-3.5mm"
            width="0.6mm"
            height="0.4mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin38"]}
            pcbX="-6.5mm"
            pcbY="-4.5mm"
            width="0.6mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin39"]}
            pcbX="-5.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin40"]}
            pcbX="-5.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin41"]}
            pcbX="-4.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin42"]}
            pcbX="-4.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin43"]}
            pcbX="-3.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin44"]}
            pcbX="-3.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin45"]}
            pcbX="-2.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin46"]}
            pcbX="-2.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin47"]}
            pcbX="-1.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin48"]}
            pcbX="-1.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin49"]}
            pcbX="-0.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin50"]}
            pcbX="0.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin51"]}
            pcbX="0.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin52"]}
            pcbX="1.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin53"]}
            pcbX="1.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin54"]}
            pcbX="2.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin55"]}
            pcbX="2.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin56"]}
            pcbX="3.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin57"]}
            pcbX="3.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin58"]}
            pcbX="4.0mm"
            pcbY="-3.7mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin59"]}
            pcbX="4.5mm"
            pcbY="-4.5mm"
            width="0.4mm"
            height="0.6mm"
            shape="rect"
          />
        </footprint>
      }
      {...props}
    />
  )
}
