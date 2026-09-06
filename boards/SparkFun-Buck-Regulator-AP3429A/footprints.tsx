export const BarrelJackFootprint = () => (
  <footprint>
    <platedhole
      name="GND"
      portHints={["2", "GND"]}
      shape="pill"
      pcbX={0}
      pcbY={0}
      outerWidth="2mm"
      outerHeight="4mm"
      holeWidth="1mm"
      holeHeight="2mm"
    />
    <platedhole
      name="GNDBREAK"
      portHints={["3", "GNDBREAK"]}
      shape="pill"
      pcbX={-3.048}
      pcbY={4.699}
      outerWidth="4mm"
      outerHeight="2mm"
      holeWidth="2mm"
      holeHeight="1mm"
    />
    <platedhole
      name="PWR"
      portHints={["1", "PWR"]}
      shape="pill"
      pcbX={-5.969}
      pcbY={0}
      outerWidth="2.3mm"
      outerHeight="4.6mm"
      holeWidth="1mm"
      holeHeight="2.6mm"
    />
    <platedhole
      name="GNDBREAK1"
      shape="pill"
      pcbX={-3.048}
      pcbY={-4.699}
      outerWidth="4mm"
      outerHeight="2mm"
      holeWidth="2mm"
      holeHeight="1mm"
    />
  </footprint>
)
