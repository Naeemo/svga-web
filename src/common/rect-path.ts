import BezierPath from './bezier-path'
import { com } from '../proto/svga'
import svga = com.opensource.svga

export default class RectPath extends BezierPath {
  _x?: number
  _y?: number
  _width?: number
  _height?: number
  _cornerRadius?: number
  _transform?: svga.Transform

  constructor(
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    cornerRadius?: number,
    transform?: svga.Transform,
    styles?: any
  ) {
    super()

    this._x = x
    this._y = y
    this._width = width
    this._height = height
    this._cornerRadius = cornerRadius
    this._transform = transform
    this._styles = styles
  }
}
