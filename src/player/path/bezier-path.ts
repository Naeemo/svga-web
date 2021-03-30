import { com } from '../../proto/svga'
import { IParseStyles } from '../../parser'
import { applyTransform, resetShapeStyles } from './index'
import svga = com.opensource.svga

enum PathMethod {
  M = 'M',
  m = 'm',
  L = 'L',
  l = 'l',
  H = 'H',
  h = 'h',
  V = 'V',
  v = 'v',
  C = 'C',
  c = 'c',
  S = 'S',
  s = 's',
  Q = 'Q',
  q = 'q',
  A = 'A',
  a = 'a',
  Z = 'Z',
  z = 'z',
}

interface IPoint {
  x: number
  y: number
  x1: number
  y1: number
  x2: number
  y2: number
}

interface IBezierPath {
  d: string
  transform?: svga.Transform
  styles?: IParseStyles
}

export function drawBezier(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  obj: IBezierPath
): void {
  context.save()

  resetShapeStyles(context, obj.styles)

  applyTransform(context, obj.transform)

  const currentPoint = { x: 0, y: 0, x1: 0, y1: 0, x2: 0, y2: 0 }

  context.beginPath()

  const d = obj.d.replace(/([a-zA-Z])/g, '|||$1 ').replace(/,/g, ' ')

  d.split('|||').forEach((segment) => {
    if (segment.length == 0) return
    const firstLetter = segment.substr(0, 1) as PathMethod
    const args = segment.substr(1).trim().split(' ')
    drawBezierElement(context, currentPoint, firstLetter, args)
  })

  if (obj.styles && obj.styles.fill) {
    context.fill()
  } else if (obj.styles && obj.styles.stroke) {
    context.stroke()
  }

  context.restore()
}

function drawBezierElement(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  currentPoint: IPoint,
  method: PathMethod,
  args: string[]
): void {
  switch (method) {
    case PathMethod.M:
      currentPoint.x = Number(args[0])
      currentPoint.y = Number(args[1])
      context.moveTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.m:
      currentPoint.x += Number(args[0])
      currentPoint.y += Number(args[1])
      context.moveTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.L:
      currentPoint.x = Number(args[0])
      currentPoint.y = Number(args[1])
      context.lineTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.l:
      currentPoint.x += Number(args[0])
      currentPoint.y += Number(args[1])
      context.lineTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.H:
      currentPoint.x = Number(args[0])
      context.lineTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.h:
      currentPoint.x += Number(args[0])
      context.lineTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.V:
      currentPoint.y = Number(args[0])
      context.lineTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.v:
      currentPoint.y += Number(args[0])
      context.lineTo(currentPoint.x, currentPoint.y)
      break
    case PathMethod.C:
      currentPoint.x1 = Number(args[0])
      currentPoint.y1 = Number(args[1])
      currentPoint.x2 = Number(args[2])
      currentPoint.y2 = Number(args[3])
      currentPoint.x = Number(args[4])
      currentPoint.y = Number(args[5])
      context.bezierCurveTo(
        currentPoint.x1,
        currentPoint.y1,
        currentPoint.x2,
        currentPoint.y2,
        currentPoint.x,
        currentPoint.y
      )
      break
    case PathMethod.c:
      currentPoint.x1 = currentPoint.x + Number(args[0])
      currentPoint.y1 = currentPoint.y + Number(args[1])
      currentPoint.x2 = currentPoint.x + Number(args[2])
      currentPoint.y2 = currentPoint.y + Number(args[3])
      currentPoint.x += Number(args[4])
      currentPoint.y += Number(args[5])
      context.bezierCurveTo(
        currentPoint.x1,
        currentPoint.y1,
        currentPoint.x2,
        currentPoint.y2,
        currentPoint.x,
        currentPoint.y
      )
      break
    case PathMethod.S:
      if (
        currentPoint.x1 &&
        currentPoint.y1 &&
        currentPoint.x2 &&
        currentPoint.y2
      ) {
        currentPoint.x1 = currentPoint.x - currentPoint.x2 + currentPoint.x
        currentPoint.y1 = currentPoint.y - currentPoint.y2 + currentPoint.y
        currentPoint.x2 = Number(args[0])
        currentPoint.y2 = Number(args[1])
        currentPoint.x = Number(args[2])
        currentPoint.y = Number(args[3])
        context.bezierCurveTo(
          currentPoint.x1,
          currentPoint.y1,
          currentPoint.x2,
          currentPoint.y2,
          currentPoint.x,
          currentPoint.y
        )
      } else {
        currentPoint.x1 = Number(args[0])
        currentPoint.y1 = Number(args[1])
        currentPoint.x = Number(args[2])
        currentPoint.y = Number(args[3])
        context.quadraticCurveTo(
          currentPoint.x1,
          currentPoint.y1,
          currentPoint.x,
          currentPoint.y
        )
      }
      break
    case PathMethod.s:
      if (
        currentPoint.x1 &&
        currentPoint.y1 &&
        currentPoint.x2 &&
        currentPoint.y2
      ) {
        currentPoint.x1 = currentPoint.x - currentPoint.x2 + currentPoint.x
        currentPoint.y1 = currentPoint.y - currentPoint.y2 + currentPoint.y
        currentPoint.x2 = currentPoint.x + Number(args[0])
        currentPoint.y2 = currentPoint.y + Number(args[1])
        currentPoint.x += Number(args[2])
        currentPoint.y += Number(args[3])
        context.bezierCurveTo(
          currentPoint.x1,
          currentPoint.y1,
          currentPoint.x2,
          currentPoint.y2,
          currentPoint.x,
          currentPoint.y
        )
      } else {
        currentPoint.x1 = currentPoint.x + Number(args[0])
        currentPoint.y1 = currentPoint.y + Number(args[1])
        currentPoint.x += Number(args[2])
        currentPoint.y += Number(args[3])
        context.quadraticCurveTo(
          currentPoint.x1,
          currentPoint.y1,
          currentPoint.x,
          currentPoint.y
        )
      }
      break
    case PathMethod.Q:
      currentPoint.x1 = Number(args[0])
      currentPoint.y1 = Number(args[1])
      currentPoint.x = Number(args[2])
      currentPoint.y = Number(args[3])
      context.quadraticCurveTo(
        currentPoint.x1,
        currentPoint.y1,
        currentPoint.x,
        currentPoint.y
      )
      break
    case PathMethod.q:
      currentPoint.x1 = currentPoint.x + Number(args[0])
      currentPoint.y1 = currentPoint.y + Number(args[1])
      currentPoint.x += Number(args[2])
      currentPoint.y += Number(args[3])
      context.quadraticCurveTo(
        currentPoint.x1,
        currentPoint.y1,
        currentPoint.x,
        currentPoint.y
      )
      break
    case PathMethod.A:
      break
    case PathMethod.a:
      break
    case PathMethod.Z:
    case PathMethod.z:
      context.closePath()
      break
    default:
      break
  }
}
