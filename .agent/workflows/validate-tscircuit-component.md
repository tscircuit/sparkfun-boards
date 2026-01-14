---
description: Validate tscircuit component before PR submission
---

# Validate tscircuit Component Workflow

This workflow validates a tscircuit board component through discrete checkpoints before submitting a PR. Each checkpoint must pass before proceeding.

## Prerequisites
- `bun` installed and in PATH
- Component directory created in `boards/`
- Dependencies installed (`bun install`)

## Checkpoint 1: TypeScript Compilation
Validates that the component compiles without type errors.

```bash
npx tsc --noEmit
```

**Expected**: No errors
**If fails**: Fix TypeScript errors in component file

---

## Checkpoint 2: Footprint Validation
Validates that all footprints used actually exist in the generator.

```bash
# Test if footprint string is recognized
$env:PATH += ";C:\Users\allen\.bun\bin"
bunx tsci snapshot boards/YOUR_COMPONENT/YOUR_COMPONENT.circuit.tsx --3d
```

**Expected**: Snapshot generates (even with warnings)
**If fails with "No pin labels" or similar**: Footprint doesn't exist or has wrong format
**Common issues**:
- Odd pin counts (use even numbers)
- Invalid footprint names (check `node_modules/@tscircuit/footprinter/README.md`)
- Special characters in pin names (sanitize: `USB_D-` → `USB_DN`)

---

## Checkpoint 3: Snapshot Generation (Local)
Generates and validates snapshots locally.

```bash
$env:PATH += ";C:\Users\allen\.bun\bin"
bunx tsci snapshot boards/YOUR_COMPONENT/YOUR_COMPONENT.circuit.tsx --3d --update
```

**Expected**: 
- Creates `__snapshots__/` directory
- Generates `.circuit-3d.snap.png`
- Generates `.circuit-pcb.snap.svg`
- Generates `.circuit-schematic.snap.svg`
- Completes in < 30 seconds

**If hangs/times out**:
- Odd pin count causing generator loop
- Complex autorouting (too many nets)
- Invalid geometry (overlapping components)

---

## Checkpoint 4: Build Validation (Local)
Validates the full build process.

```bash
$env:PATH += ";C:\Users\allen\.bun\bin"
bunx tsci build
```

**Expected**: Build completes without errors
**If fails**: Check build output for specific errors

---

## Checkpoint 5: Format Check
Ensures code follows project formatting rules.

```bash
npx @biomejs/biome format --write .
```

**Expected**: No files changed (or auto-formatted)

---

## Checkpoint 6: Commit and Push
Only proceed if all checkpoints pass.

```bash
git add .
git commit -m "feat: add YOUR_COMPONENT"
git push origin YOUR_BRANCH
```

---

## Checkpoint 7: Create PR
```bash
gh pr create --base main --title "feat: Add YOUR_COMPONENT" --body "Implements issue #XXX"
```

---

## Checkpoint 8: Monitor CI
```bash
gh pr checksPR_NUMBER
```

**Expected**: All checks pass
**If CI fails but local passed**:
- Workflow permissions issue (fork PRs need approval)
- Environment difference (rare)
- Timeout (CI has stricter limits)

---

## Troubleshooting Matrix

| Error | Checkpoint | Fix |
|-------|-----------|-----|
| `Property 'X' does not exist on type` | 1 | Fix TypeScript props |
| `pin number or label is not a number: "X"` | 2 | Sanitize pin names (remove `-`, `+`) |
| Snapshot hangs/times out | 3 | Use even pin counts, simplify routing |
| `undefined is not an object` | 3 | Invalid footprint or geometry |
| Build fails | 4 | Check for missing dependencies |
| CI timeout (>1 hour) | 8 | Geometry/routing issue, test local first |

---

## Quick Diagnostic Commands

```bash
# Check if bun is available
bun --version

# List available footprint generators
ls node_modules/@tscircuit/footprinter

# Check component syntax
bunx tsci --help

# View snapshot diff
git diff boards/YOUR_COMPONENT/__snapshots__/
```
