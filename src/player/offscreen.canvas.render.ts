import { drawEllipse } from './path/ellipse-path'
import { drawRect } from './path/rect-path'
import { drawBezier } from './path/bezier-path'
import { DynamicElements, ImageSources, Sprite } from '../parser'
import { com } from '../proto/svga'
import svga = com.opensource.svga

function render(
  canvas: HTMLCanvasElement | OffscreenCanvas,
  bitmapCache: ImageSources,
  dynamicElements: DynamicElements,
  sprites: Array<Sprite>,
  currentFrame: number
): HTMLCanvasElement | OffscreenCanvas {
  const context = canvas.getContext('2d')

  if (context === null) {
    console.error('svga render fail, 2d context null')
    return canvas
  }

  sprites.forEach((sprite) => {
    const frameItem = sprite.frames[currentFrame]

    if (frameItem.alpha < 0.05) {
      return
    }

    context.save()
    context.globalAlpha = frameItem.alpha
    context.transform(
      frameItem.transform.a || 1,
      frameItem.transform.b || 0,
      frameItem.transform.c || 0,
      frameItem.transform.d || 1,
      frameItem.transform.tx || 0,
      frameItem.transform.ty || 0
    )

    const img = sprite.imageKey && bitmapCache[sprite.imageKey]
    if (img) {
      if (frameItem.clipPath) {
        drawBezier(context, {
          d: frameItem.clipPath,
        })
        context.clip()
      }
      if (img instanceof Image) {
        context.drawImage(img, 0, 0, img.width, img.height)
      } else {
        context.drawImage(img, 0, 0)
      }
    }

    const dynamicElement = sprite.imageKey && dynamicElements[sprite.imageKey]
    if (dynamicElement) {
      const { source, fit } =
        'fit' in dynamicElement
          ? dynamicElement
          : { source: dynamicElement, fit: 'none' }
      let sourceWidth: number, sourceHeight: number
      if (source instanceof HTMLImageElement) {
        sourceWidth = source.naturalWidth
        sourceHeight = source.naturalHeight
      } else if (source instanceof HTMLVideoElement) {
        sourceWidth = source.videoWidth
        sourceHeight = source.videoHeight
      } else if (source instanceof SVGImageElement) {
        sourceWidth = source.width.baseVal.value
        sourceHeight = source.height.baseVal.value
      } else {
        sourceWidth = source.width
        sourceHeight = source.height
      }

      switch (fit) {
        case 'contain': {
          const wRatio = frameItem.layout.width / sourceWidth
          const hRatio = frameItem.layout.height / sourceHeight
          const ratio = Math.min(wRatio, hRatio)
          const width = ratio * sourceWidth
          const height = ratio * sourceHeight
          context.drawImage(
            source,
            (frameItem.layout.width - width) / 2,
            (frameItem.layout.height - height) / 2,
            width,
            height
          )
          break
        }
        case 'cover': {
          const wRatio = frameItem.layout.width / sourceWidth
          const hRatio = frameItem.layout.height / sourceHeight
          const ratio = Math.max(wRatio, hRatio)
          const width = ratio * sourceWidth
          const height = ratio * sourceHeight
          context.drawImage(
            source,
            (frameItem.layout.width - width) / 2,
            (frameItem.layout.height - height) / 2,
            width,
            height
          )
          break
        }
        case 'fill':
          context.drawImage(
            source,
            0,
            0,
            frameItem.layout.width,
            frameItem.layout.height
          )
          break
        case 'none':
        default:
          context.drawImage(
            source,
            (frameItem.layout.width - sourceWidth) / 2,
            (frameItem.layout.height - sourceHeight) / 2
          )
          break
      }
    }

    frameItem.shapes &&
      frameItem.shapes.forEach((shape) => {
        if (
          shape.type === svga.ShapeEntity.ShapeType.SHAPE &&
          shape.shape &&
          shape.shape.d
        ) {
          drawBezier(context, {
            d: shape.shape.d,
            transform: shape.transform,
            styles: shape.styles,
          })
        } else if (
          shape.type === svga.ShapeEntity.ShapeType.ELLIPSE &&
          shape.ellipse
        ) {
          drawEllipse(context, {
            x: shape.ellipse.x || 0.0,
            y: shape.ellipse.y || 0.0,
            radiusX: shape.ellipse.radiusX || 0.0,
            radiusY: shape.ellipse.radiusY || 0.0,
            transform: shape.transform,
            styles: shape.styles,
          })
        } else if (
          shape.type === svga.ShapeEntity.ShapeType.RECT &&
          shape.rect
        ) {
          drawRect(context, {
            x: shape.rect.x || 0.0,
            y: shape.rect.y || 0.0,
            width: shape.rect.width || 0.0,
            height: shape.rect.height || 0.0,
            cornerRadius: shape.rect.cornerRadius || 0.0,
            transform: shape.transform,
            styles: shape.styles,
          })
        }
      })
    context.restore()
  })

  return canvas
}

export default render
