import { com } from '../proto/svga'
import FrameEntity from './frame-entity'
import svga = com.opensource.svga

export interface VideoSize {
  width: number
  height: number
}

export interface ImageSources {
  [key: string]: ImageBitmap
}

interface AudioSource extends svga.AudioEntity {
  source: ArrayBuffer
}

export interface AudioSources {
  [key: string]: AudioSource
}

interface SpriteEntity {
  imageKey: string | null
  frames: Array<FrameEntity>
}

export default class VideoEntity {
  public version: string
  public videoSize: VideoSize = { width: 0, height: 0 }
  public FPS: number
  public frames: number
  public images: ImageSources = {}
  public audios: AudioSources = {}
  public dynamicElements = {}
  public sprites: Array<SpriteEntity> = []

  constructor(
    spec: svga.MovieEntity,
    images: ImageSources,
    audios: AudioSources
  ) {
    this.version = spec.version
    this.videoSize.width = spec.params?.viewBoxWidth || 0.0
    this.videoSize.height = spec.params?.viewBoxHeight || 0.0
    this.FPS = spec.params?.fps || 20
    this.frames = spec.params?.frames || 0

    this.sprites = spec.sprites.map(({ imageKey = null, frames }) => {
      return {
        imageKey,
        frames: (frames || []).map((obj) => new FrameEntity(obj)),
      }
    })

    this.images = images
    this.audios = audios
  }
}
