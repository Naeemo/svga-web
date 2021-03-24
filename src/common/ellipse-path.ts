import BezierPath from './bezier-path'
import { com } from '../proto/svga'
import { IParseStyles } from '../parser'
import svga = com.opensource.svga

export default class EllipsePath extends BezierPath {
  _x: number
  _y: number
  _transform?: svga.Transform
  _styles?: IParseStyles
  _radiusX: number
  _radiusY: number

  constructor(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    transform?: svga.Transform,
    styles?: IParseStyles
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
