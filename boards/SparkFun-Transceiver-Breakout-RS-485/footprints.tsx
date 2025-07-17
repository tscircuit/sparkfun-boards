export const RJ45_8PTH = (
  <footprint name="RJ45-8">
    <platedhole
      portHints={["pin1"]}
      pcbX="-4.445mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      shape="circular_hole_with_rect_pad"
      rectPadWidth="1.8796mm"
      rectPadHeight="1.8796mm"
    />
    <platedhole
      portHints={["pin2"]}
      pcbX="-3.175mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin3"]}
      pcbX="-1.905mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin4"]}
      pcbX="-0.635mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin5"]}
      pcbX="0.635mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin6"]}
      pcbX="1.905mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin7"]}
      pcbX="3.175mm"
      pcbY="6.35mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin8"]}
      pcbX="4.445mm"
      pcbY="8.89mm"
      holeDiameter="1mm"
      outerDiameter="1.8796mm"
      shape="circle"
    />
    <hole pcbX="-5.715mm" pcbY="0mm" diameter="3.2mm" />
    <hole pcbX="5.715mm" pcbY="0mm" diameter="3.2mm" />
    <silkscreenpath
      route={[
        { x: -7.62, y: 10 },
        { x: 7.62, y: 10 },
        { x: 7.62, y: -3 },
        { x: -7.62, y: -3 },
        { x: -7.62, y: 10 },
      ]}
      strokeWidth="0.2032mm"
    />
  </footprint>
)

export const SCREWTERMINAL_3_5MM_3 = (
  <footprint name="SCREWTERMINAL-3.5MM-3">
    <platedhole
      portHints={["pin1"]}
      pcbX="0mm"
      pcbY="0mm"
      holeDiameter="1.2mm"
      shape="circular_hole_with_rect_pad"
      rectPadWidth="2.032mm"
      rectPadHeight="2.032mm"
    />
    <platedhole
      portHints={["pin2"]}
      pcbX="3.5mm"
      pcbY="0mm"
      holeDiameter="1.2mm"
      outerDiameter="2.032mm"
      shape="circle"
    />
    <platedhole
      portHints={["pin3"]}
      pcbX="7mm"
      pcbY="0mm"
      holeDiameter="1.2mm"
      outerDiameter="2.032mm"
      shape="circle"
    />
    {/* Silkscreen outline */}
    <silkscreenpath
      route={[
        { x: -2.3, y: 3.4 },
        { x: 9.3, y: 3.4 },
        { x: 9.3, y: -2.8 },
        { x: 9.3, y: -3.6 },
        { x: -2.3, y: -3.6 },
        { x: -2.3, y: -2.8 },
        { x: -2.3, y: 3.4 },
      ]}
      strokeWidth="0.2032mm"
    />
    <silkscreenpath
      route={[
        { x: 9.3, y: -2.8 },
        { x: -2.3, y: -2.8 },
      ]}
      strokeWidth="0.2032mm"
    />
  </footprint>
)
