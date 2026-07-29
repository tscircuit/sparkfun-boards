# sparkfun-boards

Sparkfun modules recreated in tscircuit

## Repo Structure

1. `boards/<BOARD NAME>/index.tsx` - main exports that can be imported, e.g. any submodules you use etc.
2. `boards/<BOARD NAME>/<BOARD NAME>.circuit.tsx` - Make the default export your board
3. `tsci snapshot` is used to generate snapshots automatically (this way we can see changes to boards). It automatically finds all `*.circuit.tsx` files
4. To run a specific board in development mode, you do `tsci dev ./boards/<BOARD NAME>/<BOARD NAME>.circuit.tsx`

## Convert imported JLCPCB footprints

Use the converter to replace inline JLCPCB `<footprint>` JSX with a footprinter
string only when both the copper and plated-hole geometry match at least 99%.
It leaves lower-confidence matches unchanged and writes them to a JSON report.

```bash
# Inspect matches without changing source files.
bun run convert:jlcpcb-footprints

# Apply only verified matches.
bun run convert:jlcpcb-footprints:write
```

The report defaults to `reports/jlcpcb-footprint-conversion-report.json`. Pass
`--report <path>` to choose a different location.
