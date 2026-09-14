const TQFP64Footprint = () => {
  const pads = []

  for (let i = 0; i < 16; i++) {
    pads.push(
      <smtpad
        shape="rect"
        width="1.5mm"
        height="0.3mm"
        pcbX="-5.5mm"
        pcbY={`${3.75 - i * 0.5}mm`}
        portHints={[`pin${i + 1}`]}
      />,
    )
  }

  for (let i = 0; i < 16; i++) {
    pads.push(
      <smtpad
        shape="rect"
        width="0.3mm"
        height="1.5mm"
        pcbX={`${-3.75 + i * 0.5}mm`}
        pcbY="-5.5mm"
        portHints={[`pin${17 + i}`]}
      />,
    )
  }

  for (let i = 0; i < 16; i++) {
    pads.push(
      <smtpad
        shape="rect"
        width="1.5mm"
        height="0.3mm"
        pcbX="5.5mm"
        pcbY={`${-3.75 + i * 0.5}mm`}
        portHints={[`pin${33 + i}`]}
      />,
    )
  }

  for (let i = 0; i < 16; i++) {
    pads.push(
      <smtpad
        shape="rect"
        width="0.3mm"
        height="1.5mm"
        pcbX={`${3.75 - i * 0.5}mm`}
        pcbY="5.5mm"
        portHints={[`pin${49 + i}`]}
      />,
    )
  }

  return <footprint>{pads}</footprint>
}

const Header12SmdFootprint = () => (
  <footprint>
    {Array.from({ length: 12 }, (_, i) => (
      <smtpad
        shape="rect"
        width="1.27mm"
        height="2mm"
        pcbX={`${(i - 5.5) * 2.54}mm`}
        pcbY="0mm"
        portHints={[`pin${i + 1}`]}
      />
    ))}
  </footprint>
)

const Header16SmdFootprint = () => (
  <footprint>
    {Array.from({ length: 16 }, (_, i) => (
      <smtpad
        shape="rect"
        width="1.27mm"
        height="2mm"
        pcbX={`${(i - 7.5) * 2.54}mm`}
        pcbY="0mm"
        portHints={[`pin${i + 1}`]}
      />
    ))}
  </footprint>
)

export default function SparkFunThingPlusSTM32() {
  return (
    <board
      width="58.42mm"
      height="22.86mm"
      routingDisabled
    >
      {/* STM32F405RGT6 */}
      <chip
        name="U4"
        footprint={<TQFP64Footprint />}
        pcbX={12.7}
        pcbY={0}
        pcbRotation="270deg"
      />

      {/* 12-pin top SMD header */}
      <chip
        name="J4"
        footprint={<Header12SmdFootprint />}
        pcbX={8.89}
        pcbY={10.16}
      />

      {/* 16-pin bottom SMD header */}
      <chip
        name="J5"
        footprint={<Header16SmdFootprint />}
        pcbX={3.81}
        pcbY={-10.16}
      />

      {/* Mounting holes */}
      <hole
        name="H1"
        diameter="2.5mm"
        pcbX={-26.67}
        pcbY={-8.89}
      />

      <hole
        name="H2"
        diameter="2.5mm"
        pcbX={-26.67}
        pcbY={8.89}
      />

      <hole
        name="H3"
        diameter="2.5mm"
        pcbX={26.67}
        pcbY={8.89}
      />

      <hole
        name="H4"
        diameter="2.5mm"
        pcbX={26.67}
        pcbY={-8.89}
      />
    </board>
  )
}