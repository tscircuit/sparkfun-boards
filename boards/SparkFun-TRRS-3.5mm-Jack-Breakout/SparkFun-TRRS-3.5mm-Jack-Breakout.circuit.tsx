import { SchematicPath, sel } from "tscircuit"
import { PJ_320D_4A } from "./C95562"

const jumperPinLabels = {
  pin1: ["Sleeve"],
  pin2: ["Ring_2"],
  pin3: ["Ring_1"],
  pin4: ["Tip"],
}
export default () => {
  return (
    <board width={"12.70mm"} height={"17.78mm"}>
      <PJ_320D_4A name="U1" pcbY={4} pcbRotation={90} pcbX={0.8} schX={-2} schRotation={90} 
      symbol={
         <symbol>
        <schematicrect
          schX={0.1}
          schY={-0.14}
          width={0.1}
          height={0.8}
          isFilled={true}
        />
         <schematicpath strokeWidth={0.02} points={[ { x: 0.5, y: 0.1 },{ x: 0.6, y: 0 }, { x: 0.7, y: 0.1 }, {x: 1, y: 0.1}]} />
        <schematicpath strokeWidth={0.02} points={[ { x: 0.55, y: -0.1 },{ x: 0.65, y: 0 }, { x: 0.75, y: -0.1 }, {x: 1, y: -0.1}]} />
        <schematicpath strokeWidth={0.02} points={[{ x: 0.1, y: 0.1 }, { x: 0.1, y: 0.3 }, { x: 1, y: 0.3 } , { x: 1, y: 0.3 }]} />
        <schematicpath strokeWidth={0.02} points={[{ x: 0.35, y: -0.3 },{ x: 0.45, y: -0.19 }, { x: 0.55, y: -0.3 }, {x: 1, y: -0.3}]}
        />
      </symbol>
      }
      />
      <jumper
        name="J1"
        schDirection="left"
        footprint="pinrow4_pinlabeltextalignright_pinlabelorthogonal_doublesidedpinlabel"
        connections={{
          pin1: sel.U1.pin1,
          pin2: sel.U1.pin2,
          pin3: sel.U1.pin3,
          pin4: sel.U1.pin4,
        }}
        schX={2}
        pcbY={-7.5}
        pinLabels={jumperPinLabels}
      />
    </board>
  )
}
