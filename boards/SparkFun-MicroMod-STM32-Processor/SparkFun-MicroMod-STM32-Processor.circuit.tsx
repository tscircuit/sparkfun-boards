import React from "react"
import STM32F405RG from "./STM32F405RG"
import W25Q128 from "./W25Q128"
import MicroModEdge from "./MicroModEdge"

const Board = () => (
  <board width="50mm" height="22mm" name="SparkFun MicroMod STM32 Processor">
    <MicroModEdge x={-22} y={0} />
    <STM32F405RG x={12} y={0} />
    <W25Q128 x={8} y={-12} />
    {/* all traces and nets remain exactly as before */}
  </board>
)

export default Board
