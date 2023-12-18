import { IParseStyles } from '../../parser'
import { com } from '../../proto/svga'
import svga = com.opensource.svga

export function resetShapeStyles(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  styles?: IParseStyles,
): void {
  if (!styles) {
    return
  }

  context.strokeStyle = styles?.strokeStr || 'transparent'

  if (styles) {
    context.lineWidth = styles.strokeWidth
    context.lineCap = styles.lineCapStr
    context.lineJoin = styles.lineJoinStr
    context.miterLimit = styles.miterLimit
  }

  context.fillStyle = styles?.fillStr || 'transparent'

  if (styles.lineDashI || styles.lineDashII || styles.lineDashIII) {
    context.setLineDash([
      styles.lineDashI ? styles.lineDashI : 0,
      styles.lineDashII ? styles.lineDashII : 0,
      styles.lineDashIII ? styles.lineDashIII : 0,
    ])
  }
}

export function applyTransform(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  transform?: svga.Transform,
): void {
  if (!transform) {
    return
  }

  context.transform(
    transform.a || 1.0,
    transform.b || 0,
    transform.c || 0,
    transform.d || 1.0,
    transform.tx || 0,
    transform.ty || 0,
  )
}
