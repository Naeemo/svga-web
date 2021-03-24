import { com } from '../proto/svga'
import { IParseStyles } from '../parser'
import svga = com.opensource.svga

export interface IBezierPath {
  _d: string
  _transform?: svga.Transform
  _styles?: IParseStyles
}

export default class BezierPath {
  _d?: string
  _transform?: svga.Transform
  _styles?: IParseStyles

  constructor(d?: string, transform?: svga.Transform, styles?: IParseStyles) {
    this._d = d
    this._transform = transform
    this._styles = styles
  }
}
