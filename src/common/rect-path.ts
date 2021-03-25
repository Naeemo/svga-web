import BezierPath from './bezier-path'
import { com } from '../proto/svga'
import { IParseStyles } from '../parser'
import svga = com.opensource.svga

export default class RectPath extends BezierPath {
  public readonly x: number
  public readonly y: number
  public readonly width: number
  public readonly height: number
  public readonly cornerRadius: number

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    cornerRadius: number,
    transform?: svga.Transform,
    styles?: IParseStyles
  ) {
    super(undefined, transform, styles)

    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.cornerRadius = cornerRadius
  }
}
