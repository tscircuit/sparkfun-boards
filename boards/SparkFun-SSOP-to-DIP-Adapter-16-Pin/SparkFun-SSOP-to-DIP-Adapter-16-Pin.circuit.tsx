/**
 * SparkFun SSOP to DIP Adapter - 16-Pin (BOB-13994)
 * Passive adapter board: maps 16-pin SSOP pads to DIP-16 through-hole footprint
 * Board size: ~22mm x 16mm
 *
 * https://www.sparkfun.com/products/13994
 * Schematic: https://cdn.sparkfun.com/datasheets/BreakoutBoards/SSOP_to_DIP_16.pdf
 */
export default () => (
  <board width="22mm" height="16mm" routingDisabled>
    {/* SSOP-16 SMD pads */}
    <chip
      name="U1"
      footprint="ssop16_w5.3mm_p0.65mm"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      pinLabels={{
        pin1: ["A1"],
        pin2: ["A2"],
        pin3: ["A3"],
        pin4: ["A4"],
        pin5: ["A5"],
        pin6: ["A6"],
        pin7: ["A7"],
        pin8: ["A8"],
        pin9: ["B8"],
        pin10: ["B7"],
        pin11: ["B6"],
        pin12: ["B5"],
        pin13: ["B4"],
        pin14: ["B3"],
        pin15: ["B2"],
        pin16: ["B1"],
      }}
      connections={{
        pin1: "net.P1",
        pin2: "net.P2",
        pin3: "net.P3",
        pin4: "net.P4",
        pin5: "net.P5",
        pin6: "net.P6",
        pin7: "net.P7",
        pin8: "net.P8",
        pin9: "net.P9",
        pin10: "net.P10",
        pin11: "net.P11",
        pin12: "net.P12",
        pin13: "net.P13",
        pin14: "net.P14",
        pin15: "net.P15",
        pin16: "net.P16",
      }}
    />

    {/* DIP-16 through-hole header pins */}
    <chip
      name="J1"
      footprint="dip16_w7.62mm_p2.54mm"
      pcbX={0}
      pcbY={0}
      schX={6}
      schY={0}
      pinLabels={{
        pin1: ["P1"],
        pin2: ["P2"],
        pin3: ["P3"],
        pin4: ["P4"],
        pin5: ["P5"],
        pin6: ["P6"],
        pin7: ["P7"],
        pin8: ["P8"],
        pin9: ["P9"],
        pin10: ["P10"],
        pin11: ["P11"],
        pin12: ["P12"],
        pin13: ["P13"],
        pin14: ["P14"],
        pin15: ["P15"],
        pin16: ["P16"],
      }}
      connections={{
        pin1: "net.P1",
        pin2: "net.P2",
        pin3: "net.P3",
        pin4: "net.P4",
        pin5: "net.P5",
        pin6: "net.P6",
        pin7: "net.P7",
        pin8: "net.P8",
        pin9: "net.P9",
        pin10: "net.P10",
        pin11: "net.P11",
        pin12: "net.P12",
        pin13: "net.P13",
        pin14: "net.P14",
        pin15: "net.P15",
        pin16: "net.P16",
      }}
    />
  </board>
)
