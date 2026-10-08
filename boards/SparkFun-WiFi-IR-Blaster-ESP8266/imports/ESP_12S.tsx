import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["RST"],
  pin2: ["ADC"],
  pin3: ["EN"],
  pin4: ["IO16"],
  pin5: ["IO14"],
  pin6: ["IO12"],
  pin7: ["IO13"],
  pin8: ["VCC"],
  pin9: ["GND"],
  pin10: ["IO15"],
  pin11: ["IO2"],
  pin12: ["IO0"],
  pin13: ["IO4"],
  pin14: ["IO5"],
  pin15: ["RXD0"],
  pin16: ["TXD0"],
  pin17: ["EP"],
} as const

export const ESP_12S = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C82898"],
      }}
      manufacturerPartNumber="ESP-12S"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-8.002016mm" pcbY="6.999986mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-8.001254mm" pcbY="4.99999mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-8.000238mm" pcbY="2.999994mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-8.001254mm" pcbY="0.999998mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-8.001508mm" pcbY="-0.999998mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-8.001254mm" pcbY="-2.999994mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-8.002016mm" pcbY="-4.99999mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-8.001mm" pcbY="-6.999986mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="7.999984mm" pcbY="6.999986mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="8.000492mm" pcbY="4.99999mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="8.002016mm" pcbY="2.999994mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="8.001mm" pcbY="0.999998mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="8.000238mm" pcbY="-0.999998mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="8.001mm" pcbY="-2.999994mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="7.999984mm" pcbY="-4.99999mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="8.000492mm" pcbY="-6.999986mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0.200152mm" pcbY="2.300478mm" width="3.1999936mm" height="3.1999936mm" shape="rect" />
<silkscreenpath route={[{"x":-8.000009400000067,"y":8.002752600000008},{"x":-7.999984000000154,"y":15.503372600000034},{"x":8.002549399999907,"y":15.503372600000034},{"x":8.000034799999867,"y":8.002752600000008}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":-7.754061200000024},{"x":8.000034799999867,"y":-8.499627400000008}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":-5.754065200000014},{"x":8.000034799999867,"y":-6.245783799999913}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":-3.7540692000001172},{"x":8.000034799999867,"y":-4.24578780000013}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":-1.7540731999999934},{"x":8.000034799999867,"y":-2.2457918000000063}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":0.24592279999990296},{"x":8.000034799999867,"y":-0.24579579999999623}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":2.2459188000000267},{"x":8.000034799999867,"y":1.7542002000000139}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":4.246016399999917},{"x":8.000034799999867,"y":3.754196200000024}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":6.24593619999996},{"x":8.000034799999867,"y":5.754116000000067}]} />
<silkscreenpath route={[{"x":8.000034799999867,"y":8.002752600000008},{"x":8.000034799999867,"y":7.754213599999957}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":-7.754061200000024},{"x":-8.000009400000067,"y":-8.499627400000008}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":-5.7540906000000405},{"x":-8.000009400000067,"y":-6.245783799999913}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":-3.7540946000000304},{"x":-8.000009400000067,"y":-4.24581319999993}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":-1.7540731999999934},{"x":-8.000009400000067,"y":-2.245817200000147}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":0.24594819999992978},{"x":-8.000009400000067,"y":-0.24579579999999623}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":2.2459188000000267},{"x":-8.000009400000067,"y":1.754225599999927}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":4.245914800000037},{"x":-8.000009400000067,"y":3.754196200000024}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":6.245910799999933},{"x":-8.000009400000067,"y":5.75419219999992}]} />
<silkscreenpath route={[{"x":-8.000009400000067,"y":8.002752600000008},{"x":-8.000009400000067,"y":7.7541881999999305}]} />
<silkscreenpath route={[{"x":-7.999984000000154,"y":-8.499627400000008},{"x":8.000034799999867,"y":-8.499627400000008}]} />
<silkscreenpath route={[{"x":-4.940249200000039,"y":7.0608444000000645},{"x":5.059705399999871,"y":7.0608444000000645},{"x":5.059705399999871,"y":-7.940421000000015},{"x":-4.940249200000039,"y":-7.940421000000015},{"x":-4.940249200000039,"y":7.0608444000000645}]} />
<silkscreenpath route={[{"x":6.00354399999992,"y":10.502112600000032},{"x":6.00354399999992,"y":13.50187799999992},{"x":4.002049399999919,"y":13.50187799999992},{"x":4.002049399999919,"y":10.502112600000032},{"x":2.0030440000000453,"y":10.502112600000032},{"x":2.0030440000000453,"y":13.50187799999992},{"x":0.0040893999998843356,"y":13.50187799999992},{"x":0.0040893999998843356,"y":10.502112600000032},{"x":-1.9974560000000565,"y":10.502112600000032},{"x":-1.9974560000000565,"y":13.50187799999992},{"x":-5.997955999999931,"y":13.50187799999992},{"x":-5.997955999999931,"y":9.503917999999999}]} />
<silkscreenpath route={[{"x":-3.996410600000104,"y":9.503917999999999},{"x":-3.996410600000104,"y":13.50187799999992}]} />
<silkscreencircle pcbX="-8.636mm" pcbY="8.128mm" radius="0.254mm" />
<silkscreentext text="ESP-12S" pcbX="3.556mm" pcbY="6.060186mm" anchorAlignment="bottom_left" pcbRotation="270deg" fontSize="1.778mm" />
<silkscreentext text="{NAME}" pcbX="-0.00254mm" pcbY="16.591282mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-8.100009200000159,"y":8.002752600000008},{"x":-8.099983800000018,"y":15.503372600000034},{"x":-8.070694536697374,"y":15.574083136697254},{"x":-7.999984000000154,"y":15.603372399999898},{"x":8.002549399999907,"y":15.603372399999898},{"x":8.073268918468557,"y":15.57407415701141},{"x":8.102549199999885,"y":15.503347200000007},{"x":8.100034599999844,"y":8.002727199999981},{"x":7.900034999999889,"y":8.002778000000035},{"x":7.902524199999789,"y":15.403372799999943},{"x":-7.899984199999949,"y":15.403372799999943},{"x":-7.9000096000000894,"y":8.002752600000008},{"x":-8.100009200000159,"y":8.002752600000008}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-9.50201350000009,"y":15.751492999999982},{"x":9.502013499999975,"y":15.751492999999982},{"x":9.502013499999975,"y":-8.748459000000139},{"x":-9.50201350000009,"y":-8.748459000000139},{"x":-9.50201350000009,"y":15.751492999999982}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C82898.obj?uuid=e077890b885343a49f9aeb496bd7b64c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C82898.step?uuid=e077890b885343a49f9aeb496bd7b64c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012699999956566899, y: -3.5015170000000353, z: 0 },
      }}
      {...props}
    />
  )
}
