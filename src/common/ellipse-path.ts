import BezierPath from './bezier-path'
import { com } from '../proto/svga'
import svga = com.opensource.svga

export default class EllipsePath extends BezierPath {
  _x: number
  _y: number
  _transform?: svga.Transform
  _styles?: any
  _radiusX: number
  _radiusY: number

  constructor(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    transform?: svga.Transform,
    styles?: any
  ) {
    super(undefined, transform, styles)

    this._x = x
    this._y = y
    this._radiusX = radiusX
    this._radiusY = radiusY
    this._transform = transform
    this._styles = styles
  }
}
