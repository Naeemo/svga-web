import {com} from "../proto/svga";
import svga = com.opensource.svga;
import {IParseStyles} from "../parser.worker/frame-entity";

export interface IBezierPath {
  _d: string
  _transform?: svga.Transform
  _styles?: IParseStyles
}

export default class BezierPath {
  _d?: string
  _transform?: svga.Transform
  _styles?: any

  constructor (d?: string, transform?: any, styles?: any) {
    this._d = d
    this._transform = transform
    this._styles = styles
  }
}
