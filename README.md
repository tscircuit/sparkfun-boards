# sparkfun-boards

Sparkfun modules recreated in tscircuit

## Repo Structure

1. `boards/<BOARD NAME>/index.tsx` - main exports that can be imported, e.g. any submodules you use etc.
2. `boards/<BOARD NAME>/<BOARD NAME>.circuit.tsx` - Make the default export your board
3. `tsci snapshot` is used to generate snapshots automatically (this way we can see changes to boards). It automatically finds all `*.circuit.tsx` files
4. To run a specific board in development mode, you do `tsci dev ./boards/<BOARD NAME>/<BOARD NAME>.circuit.tsx`
