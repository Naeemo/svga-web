import { com } from '../../proto/svga'
import { IParseStyles } from '../../parser'
import { applyTransform, resetShapeStyles } from './index'
import svga = com.opensource.svga

interface IRectPath {
  x: number
  y: number
  width: number
  height: number
  cornerRadius: number
  transform?: svga.Transform
  styles?: IParseStyles
}

export function drawRect(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  obj: IRectPath
): void {
  context.save()

  resetShapeStyles(context, obj.styles)

  applyTransform(context, obj.transform)

  const x = obj.x
  const y = obj.y
  const width = obj.width
  const height = obj.height
  let radius = obj.cornerRadius

  if (width < 2 * radius) {
    radius = width / 2
  }

  if (height < 2 * radius) {
    radius = height / 2
  }

  context.beginPath()
  context.moveTo(x + radius, y)
  context.arcTo(x + width, y, x + width, y + height, radius)
  context.arcTo(x + width, y + height, x, y + height, radius)
  context.arcTo(x, y + height, x, y, radius)
  context.arcTo(x, y, x + width, y, radius)

  context.closePath()

  if (obj.styles && obj.styles.fill) {
    context.fill()
  } else if (obj.styles && obj.styles.stroke) {
    context.stroke()
  }

  context.restore()
}
