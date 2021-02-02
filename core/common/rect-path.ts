import BezierPath from './bezier-path'
import {com} from "../proto/svga";
import svga = com.opensource.svga;

export default class RectPath extends BezierPath {
  _x?: Number
  _y?: Number
  _width?: Number
  _height?: Number
  _cornerRadius?: Number
  _transform?: svga.Transform

  constructor (x?: Number, y?: Number, width?: Number, height?: Number, cornerRadius?: Number, transform?: svga.Transform, styles?: any) {
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
