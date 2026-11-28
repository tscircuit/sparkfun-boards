import { Glob } from "bun"
import { checkBoardEdgeCopper } from "../util/check-board-edge-copper"

let files = 0
let errors = 0
for await (const file of new Glob("boards/**/circuit.json").scan("dist")) {
  files++
  const circuitJson = await Bun.file(`dist/${file}`).json()
  for (const error of checkBoardEdgeCopper(circuitJson)) {
    errors++
    console.error(`${file}: ${error.message}`)
  }
}
if (files === 0) throw new Error("No built boards found; run tsci build first")
console.log(`Board-edge copper: ${files} boards checked, ${errors} errors`)
process.exitCode = errors > 0 ? 1 : 0
