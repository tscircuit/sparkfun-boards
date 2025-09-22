export interface Point {
  x: number
  y: number
}

type TurnDirection = "cw" | "ccw"

interface CornerOptions {
  radius: number
  turn: TurnDirection
}

interface ArcOptions {
  radius: number
  sweep?: boolean // true = ccw, false = cw
  segments?: number // number of interpolation points
}

export class OutlineBuilder {
  private points: Point[] = []
  private currentX: number
  private currentY: number
  private lastDirection: "right" | "left" | "up" | "down" | null = null

  constructor(startX: number, startY: number) {
    this.currentX = startX
    this.currentY = startY
    this.points.push({ x: startX, y: startY })
  }

  private updateDirection(x: number, y: number): void {
    if (x > this.currentX) this.lastDirection = "right"
    else if (x < this.currentX) this.lastDirection = "left"
    else if (y > this.currentY) this.lastDirection = "down"
    else if (y < this.currentY) this.lastDirection = "up"
  }

  lineTo(x: number, y: number): this {
    if (x !== this.currentX || y !== this.currentY) {
      this.updateDirection(x, y)
      this.currentX = x
      this.currentY = y
      this.points.push({ x, y })
    }
    return this
  }

  // helper: convert cardinal direction to unit vector
  private dirToUnit(dir: "right" | "left" | "up" | "down"): Point {
    switch (dir) {
      case "right":
        return { x: 1, y: 0 }
      case "left":
        return { x: -1, y: 0 }
      case "down":
        return { x: 0, y: 1 }
      case "up":
        return { x: 0, y: -1 }
    }
  }

  // helper: compute outgoing unit & direction given lastDirection and turn
  private outgoingFor(
    last: "right" | "left" | "up" | "down",
    turn: TurnDirection,
  ): { unit: Point; dir: "right" | "left" | "up" | "down" } {
    switch (last) {
      case "right":
        return turn === "cw"
          ? { unit: { x: 0, y: 1 }, dir: "down" }
          : { unit: { x: 0, y: -1 }, dir: "up" }
      case "left":
        return turn === "cw"
          ? { unit: { x: 0, y: -1 }, dir: "up" }
          : { unit: { x: 0, y: 1 }, dir: "down" }
      case "down":
        return turn === "cw"
          ? { unit: { x: -1, y: 0 }, dir: "left" }
          : { unit: { x: 1, y: 0 }, dir: "right" }
      case "up":
        return turn === "cw"
          ? { unit: { x: 1, y: 0 }, dir: "right" }
          : { unit: { x: -1, y: 0 }, dir: "left" }
    }
  }

  corner({ radius, turn }: CornerOptions): this {
    if (this.points.length < 2) {
      throw new Error("At least two points are required to create a corner")
    }

    if (!this.lastDirection) {
      throw new Error(
        "Cannot create a corner without a known incoming direction",
      )
    }

    const ix = this.currentX
    const iy = this.currentY

    const prevIndex = this.points.length - 2
    const prevPoint = this.points[prevIndex]
    if (!prevPoint) {
      throw new Error("At least two points are required to create a corner")
    }

    this.points.pop()

    const incomingUnit = this.dirToUnit(this.lastDirection)
    const { unit: outgoingUnit, dir: outgoingDir } = this.outgoingFor(
      this.lastDirection,
      turn,
    )

    const dxPrev = ix - prevPoint.x
    const dyPrev = iy - prevPoint.y
    const distPrev = Math.hypot(dxPrev, dyPrev)
    const r = Math.min(radius, distPrev)

    const startX = ix - incomingUnit.x * r
    const startY = iy - incomingUnit.y * r
    const endX = ix + outgoingUnit.x * r
    const endY = iy + outgoingUnit.y * r

    const inVec = { x: -incomingUnit.x, y: -incomingUnit.y }
    const outVec = { x: outgoingUnit.x, y: outgoingUnit.y }

    const bisector = { x: inVec.x + outVec.x, y: inVec.y + outVec.y }
    const bisLen = Math.hypot(bisector.x, bisector.y)

    let dot = inVec.x * outVec.x + inVec.y * outVec.y
    dot = Math.max(-1, Math.min(1, dot))
    const angle = Math.acos(dot)

    if (bisLen < 1e-9 || Math.abs(Math.sin(angle / 2)) < 1e-9) {
      this.points.push({ x: ix, y: iy })
      this.currentX = ix
      this.currentY = iy
      return this
    }

    const offset = r / Math.sin(angle / 2)
    const bisUnit = { x: bisector.x / bisLen, y: bisector.y / bisLen }

    const centerX = ix + bisUnit.x * offset
    const centerY = iy + bisUnit.y * offset

    const startAngle = Math.atan2(startY - centerY, startX - centerX)
    const endAngle = Math.atan2(endY - centerY, endX - centerX)

    let angleDelta = endAngle - startAngle
    while (angleDelta <= -Math.PI) angleDelta += 2 * Math.PI
    while (angleDelta > Math.PI) angleDelta -= 2 * Math.PI

    const lastAfterPop = this.points[this.points.length - 1]
    const almostEqual = (a: number, b: number) => Math.abs(a - b) < 1e-9
    if (
      !lastAfterPop ||
      !almostEqual(lastAfterPop.x, startX) ||
      !almostEqual(lastAfterPop.y, startY)
    ) {
      this.points.push({ x: startX, y: startY })
    }

    const segments = 8
    for (let i = 1; i <= segments; i++) {
      const t = i / segments
      const angle = startAngle + angleDelta * t
      const x = centerX + r * Math.cos(angle)
      const y = centerY + r * Math.sin(angle)
      this.points.push({ x, y })
    }

    const last = this.points[this.points.length - 1]
    if (!last) {
      throw new Error("At least two points are required to create a corner")
    }
    this.currentX = last.x
    this.currentY = last.y
    this.lastDirection = outgoingDir

    return this
  }

  arcTo(
    x: number,
    y: number,
    { radius, sweep = true, segments = 16 }: ArcOptions,
  ): this {
    const start = { x: this.currentX, y: this.currentY }
    const end = { x, y }

    const mx = (start.x + end.x) / 2
    const my = (start.y + end.y) / 2

    const dx = end.x - start.x
    const dy = end.y - start.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist === 0) return this

    const h = Math.sqrt(Math.max(0, radius * radius - (dist / 2) ** 2))

    const perpX = -dy / dist
    const perpY = dx / dist

    const cx = mx + (sweep ? 1 : -1) * perpX * h
    const cy = my + (sweep ? 1 : -1) * perpY * h

    const startAngle = Math.atan2(start.y - cy, start.x - cx)
    const endAngle = Math.atan2(end.y - cy, end.x - cx)

    let sweepAngle = endAngle - startAngle
    if (sweep && sweepAngle < 0) sweepAngle += 2 * Math.PI
    if (!sweep && sweepAngle > 0) sweepAngle -= 2 * Math.PI

    for (let i = 1; i <= segments; i++) {
      const t = i / segments
      const angle = startAngle + sweepAngle * t
      const px = cx + radius * Math.cos(angle)
      const py = cy + radius * Math.sin(angle)
      this.points.push({ x: px, y: py })
    }

    this.currentX = end.x
    this.currentY = end.y

    return this
  }

  toArray(): Point[] {
    return [...this.points]
  }
}

export const outlineBuilder = (x: number, y: number): OutlineBuilder => {
  return new OutlineBuilder(x, y)
}
