import { com } from '../proto/svga'
import svga = com.opensource.svga

export interface IParseStyles extends svga.ShapeEntity.ShapeStyle {
  fillStr: string
  strokeStr: string
  lineJoinStr: CanvasLineJoin
  lineCapStr: CanvasLineCap
}

interface ShapeEntity {
  /** ShapeEntity type. */
  type: svga.ShapeEntity.ShapeType
  /** ShapeEntity shape. */
  shape?: svga.ShapeEntity.ShapeArgs
  /** ShapeEntity rect. */
  rect?: svga.ShapeEntity.RectArgs
  /** ShapeEntity ellipse. */
  ellipse?: svga.ShapeEntity.EllipseArgs
  /** ShapeEntity styles. */
  styles?: IParseStyles
  /** ShapeEntity transform. */
  transform?: svga.Transform
  /** ShapeEntity args. */
  args?: 'shape' | 'rect' | 'ellipse'
}

export default class FrameEntity {
  static lastShapes: ShapeEntity[] = []

  public alpha: number
  public layout: svga.Layout
  public transform: svga.Transform
  public clipPath: string | null
  public shapes: ShapeEntity[] = []

  constructor(spec: svga.IFrameEntity) {
    this.alpha = spec.alpha || 0.0

    this.layout = {
      x: spec.layout?.x || 0.0,
      y: spec.layout?.y || 0.0,
      width: spec.layout?.width || 0.0,
      height: spec.layout?.height || 0.0,
    }

    this.transform = {
      a: spec.transform?.a || 1.0,
      b: spec.transform?.b || 0.0,
      c: spec.transform?.c || 0.0,
      d: spec.transform?.d || 1.0,
      tx: spec.transform?.tx || 0.0,
      ty: spec.transform?.ty || 0.0,
    }

    this.clipPath = spec.clipPath || null

    if (spec.shapes) {
      if (
        spec.shapes[0] &&
        spec.shapes[0].type === svga.ShapeEntity.ShapeType.KEEP
      ) {
        this.shapes = FrameEntity.lastShapes
      } else {
        const shapes = (spec.shapes as ShapeEntity[]).map((shape) => {
          if (!Object.prototype.hasOwnProperty.call(shape, 'type')) {
            Object.defineProperty(shape, 'type', {
              value: shape.type,
              enumerable: true,
            })
          }

          if (shape.styles) {
            if (shape.styles.fill) {
              const { r, g, b, a } = shape.styles
                .fill as svga.ShapeEntity.ShapeStyle.RGBAColor
              shape.styles.fillStr = `rgba(${parseInt(
                (r * 255).toString(),
              )}, ${parseInt((g * 255).toString())}, ${parseInt(
                (b * 255).toString(),
              )}, ${a})`
            }

            if (shape.styles.stroke) {
              const { r, g, b, a } = shape.styles
                .stroke as svga.ShapeEntity.ShapeStyle.RGBAColor
              shape.styles.strokeStr = `rgba(${parseInt(
                (r * 255).toString(),
              )}, ${parseInt((g * 255).toString())}, ${parseInt(
                (b * 255).toString(),
              )}, ${a})`
            }

            switch (shape.styles.lineJoin) {
              case svga.ShapeEntity.ShapeStyle.LineJoin.LineJoin_MITER:
                shape.styles.lineJoinStr = 'miter'
                break
              case svga.ShapeEntity.ShapeStyle.LineJoin.LineJoin_ROUND:
                shape.styles.lineJoinStr = 'round'
                break
              case svga.ShapeEntity.ShapeStyle.LineJoin.LineJoin_BEVEL:
                shape.styles.lineJoinStr = 'bevel'
                break
            }

            switch (shape.styles.lineCap) {
              case svga.ShapeEntity.ShapeStyle.LineCap.LineCap_BUTT:
                shape.styles.lineCapStr = 'butt'
                break
              case svga.ShapeEntity.ShapeStyle.LineCap.LineCap_ROUND:
                shape.styles.lineCapStr = 'round'
                break
              case svga.ShapeEntity.ShapeStyle.LineCap.LineCap_SQUARE:
                shape.styles.lineCapStr = 'square'
                break
            }
          }
          return shape
        })

        FrameEntity.lastShapes = shapes
        this.shapes = shapes
      }
    }
  }
}
