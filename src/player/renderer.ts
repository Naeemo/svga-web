import render from './offscreen.canvas.render'
import { com } from '../proto/svga'
import VideoEntity, {
  DynamicElements,
  ImageSources,
  Sprite,
} from '../parser/video-entity'
import svga = com.opensource.svga

interface AudioConfig extends svga.AudioEntity {
  audio: HTMLAudioElement
}

export default class Renderer {
  private readonly target: HTMLCanvasElement
  private audios: HTMLAudioElement[] = []
  private audioConfigs: { [frame: number]: AudioConfig[] | undefined } = {}
  isCacheFrame = false
  private readonly frameCache: { [frame: number]: ImageBitmap } = {}
  private readonly offscreenCanvas: HTMLCanvasElement | OffscreenCanvas

  constructor(target: HTMLCanvasElement) {
    this.target = target
    this.offscreenCanvas = window.OffscreenCanvas
      ? new window.OffscreenCanvas(target.width, target.height)
      : document.createElement('canvas')
  }

  public async prepare(videoItem: VideoEntity): Promise<void> {
    this.audios = []
    this.audioConfigs = {}
    // 重新设置 canvas 的尺寸，哪怕设置的值与原值没有区别，都会导致 canvas 重绘，在移动端上会清屏 https://blog.csdn.net/harmsworth2016/article/details/118426390
    if (this.target.width !== videoItem.videoSize.width) {
      this.target.width = videoItem.videoSize.width;
    }
    if (this.target.height !== videoItem.videoSize.height) {
      this.target.height = videoItem.videoSize.height;
    }

    const addAudioConfig = (frame: number, ac: AudioConfig) => {
      const acs = this.audioConfigs[frame] || []
      acs.push(ac)
      this.audioConfigs[frame] = acs
    }

    const loadImages = Object.entries(videoItem.images).map(async ([key, item]) => {
      if (item instanceof ArrayBuffer) {
        const blob = new Blob([item], { type: 'image/png' })
        const bitmap = await createImageBitmap(blob);
        videoItem.images[key] = bitmap;
      }
      return item;
    });

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
          addAudioConfig(startFrame, ac)
          addAudioConfig(endFrame, ac)
          this.audios.push(audio)

          audio.onloadeddata = resolve
          audio.load()
        })
    )

    await Promise.all([...loadAudios, ...loadImages])
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

  public clear(): void {
    const context2d = this.target.getContext('2d')
    context2d?.clearRect(0, 0, this.target.width, this.target.height)
  }

  public drawFrame(
    images: ImageSources,
    sprites: Array<Sprite>,
    dynamicElements: DynamicElements,
    frame: number
  ): void {
    const context2d = this.target.getContext('2d')
    if (!context2d) {
      return
    }

    context2d.clearRect(0, 0, this.target.width, this.target.height)

    if (this.isCacheFrame && this.frameCache[frame]) {
      const ofsFrame = this.frameCache[frame]
      context2d.drawImage(ofsFrame, 0, 0)
      return
    }

    const ofsCanvas = this.offscreenCanvas

    ofsCanvas.width = this.target.width
    ofsCanvas.height = this.target.height

    render(ofsCanvas, images, dynamicElements, sprites, frame)

    context2d.drawImage(ofsCanvas, 0, 0)

    if (this.isCacheFrame) {
      createImageBitmap(ofsCanvas).then((bitMap) => {
        this.frameCache[frame] = bitMap
      })
    }
  }

  public stopAllAudio(): void {
    this.audios.forEach(function (audio) {
      audio.pause()
      audio.currentTime = 0
    })
  }
}
