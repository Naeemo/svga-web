import render from './offscreen.canvas.render'
import { com } from '../proto/svga'
import VideoEntity, { DynamicElements } from '../parser/video-entity'
import svga = com.opensource.svga

export type DynamicElement =
  | CanvasImageSource
  | {
      source: CanvasImageSource
      fit: 'contain' | 'cover' | 'fill' | 'none'
    }

interface AudioConfig extends svga.AudioEntity {
  audio: HTMLAudioElement
}

export default class Renderer {
  private audios: HTMLAudioElement[] = []
  private audioConfigs: { [frame: number]: AudioConfig[] | undefined } = {}
  private _dynamicElements: DynamicElements = {}
  private _frames: { [key: string]: HTMLImageElement | ImageBitmap } = {}
  private readonly _ofsCanvas: HTMLCanvasElement | OffscreenCanvas

  constructor(width: number, height: number) {
    this._ofsCanvas = window.OffscreenCanvas
      ? new window.OffscreenCanvas(width, height)
      : document.createElement('canvas')
  }

  public async prepare(videoItem: VideoEntity): Promise<void> {
    this.audios = []
    this.audioConfigs = {}

    if (Object.keys(videoItem.images).length == 0) {
      return
    }

    if (videoItem.dynamicElements) {
      this._dynamicElements = videoItem.dynamicElements
    }

    const loadAudios = Object.values(videoItem.audios).map(
      ({ source, startFrame, endFrame, audioKey, startTime, totalTime }) =>
        new Promise((resolve) => {
          const audio = new Audio(
            URL.createObjectURL(
              new Blob([new Uint8Array(source)], { type: 'audio/x-mpeg' })
            )
          )

          const ac: AudioConfig = {
            audioKey,
            audio,
            startFrame,
            endFrame,
            startTime,
            totalTime,
          }
          this.addAudioConfig(startFrame, ac)
          this.addAudioConfig(endFrame, ac)
          this.audios.push(audio)

          audio.onloadeddata = resolve
          audio.load()
        })
    )

    await Promise.all(loadAudios)
  }

  public processAudio(frame: number): void {
    const acs = this.audioConfigs[frame]
    if (!acs || acs.length === 0) {
      return
    }

    acs.forEach(function (ac) {
      if (ac.startFrame === frame) {
        ac.audio.currentTime = ac.startTime
        ac.audio.play()
        return
      }

      if (ac.endFrame === frame) {
        ac.audio.pause()
        ac.audio.currentTime = 0
        return
      }
    })
  }

  public clear(canvas: HTMLCanvasElement): void {
    const context2d = canvas.getContext('2d')
    context2d?.clearRect(0, 0, canvas.width, canvas.height)
  }

  public drawFrame(
    videoItem: VideoEntity,
    frame: number,
    cacheFrames: boolean,
    width: number,
    height: number,
    context2d: CanvasRenderingContext2D
  ): void {
    context2d.clearRect(0, 0, width, height)

    if (cacheFrames && this._frames[frame]) {
      const ofsFrame = this._frames[frame]
      // ImageData
      // context.putImageData(ofsFrame, 0, 0)
      context2d.drawImage(
        ofsFrame,
        0,
        0,
        ofsFrame.width,
        ofsFrame.height,
        0,
        0,
        ofsFrame.width,
        ofsFrame.height
      )
      return
    }

    const ofsCanvas = this._ofsCanvas

    ofsCanvas.width = width
    ofsCanvas.height = height

    render(ofsCanvas, videoItem.images, this._dynamicElements, videoItem, frame)

    context2d.drawImage(
      ofsCanvas,
      0,
      0,
      ofsCanvas.width,
      ofsCanvas.height,
      0,
      0,
      ofsCanvas.width,
      ofsCanvas.height
    )

    if (cacheFrames) {
      if ('toDataURL' in ofsCanvas) {
        const ofsImageBase64 = ofsCanvas.toDataURL()
        const ofsImage = new Image()
        ofsImage.src = ofsImageBase64
        this._frames[frame] = ofsImage
      } else {
        this._frames[frame] = ofsCanvas.transferToImageBitmap()
      }
    }
  }

  public stopAllAudio(): void {
    this.audios.forEach(function (audio) {
      audio.pause()
      audio.currentTime = 0
    })
  }

  private addAudioConfig(frame: number, ac: AudioConfig): void {
    const acs = this.audioConfigs[frame] || []
    acs.push(ac)
    this.audioConfigs[frame] = acs
  }
}
