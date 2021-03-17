import Player, {PLAY_MODE} from '../player/index'
import render from './offscreen.canvas.render'

export type DynamicElement = CanvasImageSource | {
  source: CanvasImageSource,
  fit: 'contain' | 'cover' | 'fill' | 'none'
}

export default class Renderer {
  private _player: Player
  private _audioCache: HTMLAudioElement[] = []
  private _dynamicElements: { [key: string]: DynamicElement } = {}
  private _frames: { [key: string]: HTMLImageElement | ImageBitmap } = {}
  private _ofsCanvas: HTMLCanvasElement | OffscreenCanvas

  constructor(player: Player) {
    this._player = player
    const container = this._player.container
    this._ofsCanvas = window.OffscreenCanvas ? new window.OffscreenCanvas(container.width, container.height) : document.createElement('canvas')
  }

  public async prepare(): Promise<void> {
    this._audioCache = []

    if (Object.keys(this._player.videoItem.images).length == 0) {
      return
    }

    if (this._player.videoItem.dynamicElements) {
      this._dynamicElements = this._player.videoItem.dynamicElements
    }

    const loadAudios = this._player.videoItem.audios.map((audioBuffer) =>
      new Promise((resolve) => {
        const audio = new Audio(
          // navigator.vendor === 'Google Inc.' ? URL.createObjectURL(new Blob([audioBuffer], {type: 'audio/x-mpeg'})) : 'data:audio/x-mpeg;base64,'
          URL.createObjectURL(new Blob([new Uint8Array(audioBuffer)], {type: 'audio/x-mpeg'}))
        )
        audio.onloadeddata = resolve
        audio.load()
        this._audioCache.push(audio)
      })
    )

    await Promise.all(loadAudios)
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

  public playAudio(): void {
    if (this._player.playMode !== PLAY_MODE.FORWARDS) {
      return
    }

    for (const audio of this._audioCache) {
      audio.currentTime = 0
      audio.play()
    }
  }

  public stopAudio(): void {
    for (const audio of this._audioCache) {
      audio.pause()
      audio.currentTime = 0
    }
  }

  private static dataURLtoBlob(mimeType, base64Str) {
    const bstr = atob(base64Str)
    let n = bstr.length
    const u8arr = new Uint8Array(n)

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }

    return new Blob([u8arr], {type: mimeType})
  }
}
