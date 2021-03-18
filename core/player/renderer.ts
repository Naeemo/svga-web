import Player, {PLAY_MODE} from '../player/index'
import render from './offscreen.canvas.render'
import {com} from "../proto/svga";
import svga = com.opensource.svga;

export type DynamicElement = CanvasImageSource | {
  source: CanvasImageSource,
  fit: 'contain' | 'cover' | 'fill' | 'none'
}

interface AudioConfig extends svga.AudioEntity {
  audio: HTMLAudioElement
}

export default class Renderer {
  private _player: Player
  private audios: HTMLAudioElement[] = []
  private audioConfigs: { [frame: number]: AudioConfig[] | undefined } = {}
  private _dynamicElements: { [key: string]: DynamicElement } = {}
  private _frames: { [key: string]: HTMLImageElement | ImageBitmap } = {}
  private _ofsCanvas: HTMLCanvasElement | OffscreenCanvas

  constructor(player: Player) {
    this._player = player
    const container = this._player.container
    this._ofsCanvas = window.OffscreenCanvas ? new window.OffscreenCanvas(container.width, container.height) : document.createElement('canvas')
  }

  public async prepare(): Promise<void> {
    this.audios = []
    this.audioConfigs = {}

    if (Object.keys(this._player.videoItem.images).length == 0) {
      return
    }

    if (this._player.videoItem.dynamicElements) {
      this._dynamicElements = this._player.videoItem.dynamicElements
    }

    const loadAudios = Object.values(this._player.videoItem.audios).map(({
      source,
      startFrame,
      endFrame,
      audioKey,
      startTime,
      totalTime
    }) =>
      new Promise((resolve) => {
        const audio = new Audio(
          URL.createObjectURL(new Blob([new Uint8Array(source)], {type: 'audio/x-mpeg'}))
        )

        const ac: AudioConfig = {
          audioKey,
          audio,
          startFrame,
          endFrame,
          startTime,
          totalTime
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
    if (this._player.playMode !== PLAY_MODE.FORWARDS) {
      return
    }

    const acs = this.audioConfigs[frame]
    if (!acs || acs.length === 0) {
      return;
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

  public clear(): void {
    // eslint-disable-next-line no-self-assign
    this._player.container.width = this._player.container.width
  }

  public drawFrame(frame: number): void {
    const player = this._player
    if (player.intersectionObserverRender && !player.intersectionObserverRenderShow) {
      return
    }

    this.clear()

    const context2d = player.container.getContext('2d')!

    if (this._player.cacheFrames && this._frames[frame]) {
      const ofsFrame = this._frames[frame]
      // ImageData
      // context.putImageData(ofsFrame, 0, 0)
      context2d.drawImage(ofsFrame, 0, 0, ofsFrame.width, ofsFrame.height, 0, 0, ofsFrame.width, ofsFrame.height)
      return
    }

    const ofsCanvas = this._ofsCanvas

    ofsCanvas.width = this._player.container.width
    ofsCanvas.height = this._player.container.height

    render(
      ofsCanvas,
      this._player.videoItem.images,
      this._dynamicElements,
      this._player.videoItem,
      this._player.currentFrame
    )

    context2d.drawImage(
      ofsCanvas,
      0, 0, ofsCanvas.width, ofsCanvas.height,
      0, 0, ofsCanvas.width, ofsCanvas.height
    )

    if (this._player.cacheFrames) {
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
