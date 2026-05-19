import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["SDA"],
  pin2: ["SCL"],
  pin3: ["GPIO6"],
  pin4: ["GPIO5"],
  pin5: ["GPIO4"],
  pin6: ["GPIO3"],
  pin7: ["GPIO2"],
  pin8: ["GPIO1"],
  pin9: ["GPIO0"],
  pin10: ["VUSB"],
  pin11: ["N_EN"],
  pin12: ["VBAT"],
  pin13: ["FREE"],
  pin14: ["TX"],
  pin15: ["RX"],
  pin16: ["MISO"],
  pin17: ["MOSI"],
  pin18: ["SCK"],
  pin19: ["A5"],
  pin20: ["A4"],
  pin21: ["A3"],
  pin22: ["A2"],
  pin23: ["A1"],
  pin24: ["A0"],
  pin25: ["GND"],
  pin26: ["NC"],
  pin27: ["3V3"],
  pin28: ["N_RESET"],
} as const

export const ThingPlus = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={2.5}
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "pin1",
            "pin2",
            "pin3",
            "pin4",
            "pin5",
            "pin6",
            "pin7",
            "pin8",
            "pin9",
            "pin10",
            "pin11",
            "pin12",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "pin13",
            "pin14",
            "pin15",
            "pin16",
            "pin17",
            "pin18",
            "pin19",
            "pin20",
            "pin21",
            "pin22",
            "pin23",
            "pin24",
            "pin25",
            "pin26",
            "pin27",
            "pin28",
          ],
        },
      }}
      manufacturerPartNumber="ThingPlus_Header"
      footprint={
        <footprint>
          {/* Left column - pins 1-12 */}
          {Array.from({ length: 12 }, (_, i) => (
            <platedhole
              portHints={[`pin${i + 1}`]}
              pcbX="-10.16mm"
              pcbY={`${-i * 2.54 + 15.24}mm`}
              holeDiameter="1.016mm"
              outerDiameter="1.778mm"
              shape="circle"
            />
          ))}
          {/* Right column - pins 13-28 */}
          {Array.from({ length: 16 }, (_, i) => (
            <platedhole
              portHints={[`pin${i + 13}`]}
              pcbX="10.16mm"
              pcbY={`${-i * 2.54 + 15.24}mm`}
              holeDiameter="1.016mm"
              outerDiameter="1.778mm"
              shape="circle"
            />
          ))}
        </footprint>
      }
      {...props}
    />
  )
}
