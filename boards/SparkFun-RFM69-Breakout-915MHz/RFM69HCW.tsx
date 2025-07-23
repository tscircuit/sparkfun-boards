import { type ChipProps } from "@tscircuit/props"

export const pinLabels = {
  pin1: "GND",
  pin2: "MISO",
  pin3: "MOSI",
  pin4: "SCK",
  pin5: "NSS",
  pin6: "RESET",
  pin7: "DIO5",
  pin8: "GND",
  pin9: "ANT",
  pin10: "GND",
  pin11: "DIO3",
  pin12: "DIO4",
  pin13: "V3_3",
  pin14: "DIO0",
  pin15: "DIO1",
  pin16: "DIO2",
}

export const RFM69HCW = (props: ChipProps<typeof pinLabels>) => (
  <chip
    manufacturerPartNumber="RFM69HCW"
    {...props}
    pinLabels={pinLabels}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "MISO", "MOSI", "SCK", "NSS", "RESET"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "DIO0",
          "DIO1",
          "DIO2",
          "DIO3",
          "DIO4",
          "DIO5",
          "pin8",
          "ANT",
          "pin1",
        ],
      },
    }}
    schPinStyle={{
      RESET: { marginTop: "0.4" },
      MISO: { marginTop: "0.4" },
      pin8: { marginTop: "0.3" },
    }}
  />
)
