import { com } from '../../proto/svga'
import { IParseStyles } from '../../parser'
import { applyTransform, resetShapeStyles } from './index'
import svga = com.opensource.svga

interface IEllipsePath {
  x: number
  y: number
  transform?: svga.Transform
  styles?: IParseStyles
  radiusX: number
  radiusY: number
}

export function drawEllipse(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  obj: IEllipsePath
): void {
  context.save()

  resetShapeStyles(context, obj.styles)

  applyTransform(context, obj.transform)

  const x = obj.x - obj.radiusX
  const y = obj.y - obj.radiusY
  const w = obj.radiusX * 2
  const h = obj.radiusY * 2

  const kappa = 0.5522848

  const ox = (w / 2) * kappa
  const oy = (h / 2) * kappa

  const xe = x + w
  const ye = y + h

  const xm = x + w / 2
  const ym = y + h / 2

  context.beginPath()
  context.moveTo(x, ym)
  context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y)
  context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym)
  context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye)
  context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym)

  if (obj.styles && obj.styles.fill) {
    context.fill()
  } else if (obj.styles && obj.styles.stroke) {
    context.stroke()
  }

  context.restore()
}
