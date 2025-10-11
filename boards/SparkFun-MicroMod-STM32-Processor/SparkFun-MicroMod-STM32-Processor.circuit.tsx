export default () => (
  <board width="22mm" height="16mm">
    {/* STM32F405RG MCU */}
    <chip
      name="U1"
      footprint="lqfp64"
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
    />

    {/* 12MHz HSE Crystal */}
    <chip
      name="Y1"
      footprint="crystal_3225"
      schX={-4}
      schY={2}
      pcbX={-6}
      pcbY={3}
    />

    {/* 32.768kHz LSE Crystal */}
    <chip
      name="Y2"
      footprint="crystal_3215"
      schX={-4}
      schY={-2}
      pcbX={-6}
      pcbY={-3}
    />

    {/* SPI Flash W25Q128 */}
    <chip
      name="U2"
      footprint="wson8"
      schX={4}
      schY={0}
      pcbX={6}
      pcbY={0}
    />

    {/* Power decoupling capacitors */}
    <capacitor
      name="C1"
      capacitance="0.1uF"
      footprint="0603"
      schX={-2}
      schY={4}
      pcbX={-3}
      pcbY={6}
    />

    <capacitor
      name="C2"
      capacitance="0.1uF"
      footprint="0603"
      schX={0}
      schY={4}
      pcbX={0}
      pcbY={6}
    />

    <capacitor
      name="C3"
      capacitance="2.2uF"
      footprint="0603"
      schX={2}
      schY={4}
      pcbX={3}
      pcbY={6}
    />

    {/* VCAP capacitors */}
    <capacitor
      name="C4"
      capacitance="2.2uF"
      footprint="0603"
      schX={-6}
      schY={0}
      pcbX={-9}
      pcbY={0}
    />

    <capacitor
      name="C5"
      capacitance="2.2uF"
      footprint="0603"
      schX={-6}
      schY={-1}
      pcbX={-9}
      pcbY={-2}
    />

    {/* Reset resistor */}
    <resistor
      name="R1"
      resistance="10k"
      footprint="0603"
      schX={6}
      schY={-2}
      pcbX={9}
      pcbY={-3}
    />

    {/* MicroMod Edge Connector */}
    <pinheader
      name="J1"
      pinCount={75}
      footprint="pinrow75"
      schX={0}
      schY={-6}
      pcbX={0}
      pcbY={-8}
    />

    {/* Board silkscreen */}
    <silkscreentext text="STM32" fontSize="1.5mm" pcbX={-8} pcbY={-6} />
    <silkscreentext text="F405" fontSize="1.2mm" pcbX={-8} pcbY={-7.5} />
  </board>
)