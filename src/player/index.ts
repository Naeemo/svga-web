import Renderer from './renderer'
import Animator from './animator'
import VideoEntity, { VideoSize } from '../parser/video-entity'
import { noop } from './noop'

export * from './animator'
export * from './offscreen.canvas.render'
export * from './renderer'

export enum EVENT_TYPES {
  START = 'start',
  PROCESS = 'process',
  PAUSE = 'pause',
  STOP = 'stop',
  END = 'end',
  CLEAR = 'clear',
}

interface SVGAPlayerOptions {
  loop?: boolean
  playCount?: number
  fillMode?: FILL_MODE
  playMode?: PLAY_MODE
  startFrame?: number
  endFrame?: number
  cacheFrames?: boolean
  intersectionObserverRender?: boolean
  noExecutionDelay?: boolean
}

export enum FILL_MODE {
  FORWARDS = 'forwards',
  BACKWARDS = 'backwards',
}

export enum PLAY_MODE {
  FORWARDS = 'forwards',
  FALLBACKS = 'fallbacks',
}

export default class Player {
  public currentFrame = 0
  private container: HTMLCanvasElement
  private videoItem: VideoEntity | null = null
  private fillMode: FILL_MODE = FILL_MODE.FORWARDS
  private playMode: PLAY_MODE = PLAY_MODE.FORWARDS
  private totalFramesCount = 0
  private startFrame = 0
  private endFrame = 0
  private cacheFrames = false
  private intersectionObserverRender = false
  private intersectionObserverRenderShow = true
  private intersectionObserver: IntersectionObserver | null = null
  private renderer: Renderer
  private animator: Animator
  private $onEvent: {
    [EVENT_TYPES.START]: () => unknown
    [EVENT_TYPES.PROCESS]: () => unknown
    [EVENT_TYPES.PAUSE]: () => unknown
    [EVENT_TYPES.STOP]: () => unknown
    [EVENT_TYPES.END]: () => unknown
    [EVENT_TYPES.CLEAR]: () => unknown
  } = {
    start: noop,
    process: noop,
    pause: noop,
    stop: noop,
    end: noop,
    clear: noop,
  }

  constructor(
    element: string | HTMLCanvasElement,
    videoItem?: VideoEntity,
    options?: SVGAPlayerOptions
  ) {
    this.container =
      typeof element === 'string'
        ? <HTMLCanvasElement>document.body.querySelector(element)
        : element

    if (!this.container) {
      throw new Error('container undefined.')
    }

    if (!this.container.getContext) {
      throw new Error('container should be HTMLCanvasElement.')
    }

    this.renderer = new Renderer(this.container.width, this.container.height)
    this.animator = new Animator()
    videoItem && this.mount(videoItem)

    if (options) {
      this.set(options)
    }
  }

  public get progress(): number {
    if (!this.videoItem) {
      return 0
    }

    return ((this.currentFrame + 1) / this.videoItem.frames) * 100
  }

  public set({
    playCount,
    loop,
    endFrame,
    startFrame,
    cacheFrames,
    playMode,
    fillMode,
    noExecutionDelay,
    intersectionObserverRender,
  }: SVGAPlayerOptions): void {
    fillMode && (this.fillMode = fillMode)
    playMode && (this.playMode = playMode)
    cacheFrames !== undefined && (this.cacheFrames = cacheFrames)
    this.startFrame = startFrame ? startFrame : this.startFrame
    this.endFrame = endFrame ? endFrame : this.endFrame

    this.animator.loop = !!loop
    playCount !== undefined && (this.animator.repeat = playCount)
    this.animator.fillRule = this.fillMode === 'backwards' ? 1 : 0

    // 监听容器是否处于浏览器视窗内
    intersectionObserverRender !== undefined &&
      (this.intersectionObserverRender = intersectionObserverRender)
    if (IntersectionObserver && this.intersectionObserverRender) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].intersectionRatio <= 0) {
            this.intersectionObserverRenderShow &&
              (this.intersectionObserverRenderShow = false)
          } else {
            !this.intersectionObserverRenderShow &&
              (this.intersectionObserverRenderShow = true)
          }
        },
        {
          rootMargin: '0px',
          threshold: [0, 0.5, 1],
        }
      )
      this.intersectionObserver.observe(this.container)
    } else {
      if (this.intersectionObserver) {
        this.intersectionObserver.disconnect()
      }
      this.intersectionObserverRender = false
      this.intersectionObserverRenderShow = true
    }

    if (noExecutionDelay !== undefined) {
      this.animator.noExecutionDelay = noExecutionDelay
    }
  }

  public mount(videoItem: VideoEntity): Promise<void> {
    this.currentFrame = 0
    this.totalFramesCount = videoItem.frames - 1
    this.videoItem = videoItem

    const prepare = this.renderer.prepare(videoItem)
    this.renderer.clear(this.container)
    this.setSize()

    let frames = videoItem.frames

    if (this.endFrame > 0 && this.endFrame > this.startFrame) {
      frames = this.endFrame - this.startFrame
    } else if (this.endFrame <= 0 && this.startFrame > 0) {
      frames = videoItem.frames - this.startFrame
    }

    this.animator.duration = frames * (1.0 / videoItem.FPS) * 1000
    return prepare
  }

  public start(): void {
    if (!this.videoItem) {
      throw new Error('video item undefined.')
    }
    this.renderer.clear(this.container)
    this.startAnimation(this.videoItem)
    this.$onEvent.start()
  }

  public pause(): void {
    this.animator && this.animator.stop()
    this.$onEvent.pause()
  }

  public stop(): void {
    this.animator && this.animator.stop()
    this.renderer.clear(this.container)

    this.currentFrame = 0

    this.renderer.stopAllAudio()
    this.$onEvent.stop()
  }

  public clear(): void {
    this.animator && this.animator.stop()
    this.renderer.clear(this.container)
    this.$onEvent.clear()
  }

  public destroy(): void {
    this.animator && this.animator.stop()
    this.renderer.clear(this.container)
    this.videoItem = null
  }

  public $on(eventName: EVENT_TYPES, execFunction: () => unknown): this {
    this.$onEvent[eventName] = execFunction

    if (eventName === 'end') {
      this.animator.onEnd = () => this.$onEvent.end()
    }

    return this
  }

  private startAnimation(videoItem: VideoEntity): void {
    const { playMode, totalFramesCount, startFrame, endFrame } = this

    // 如果开始动画的当前帧是最后一帧，重置为第 0 帧
    if (this.currentFrame === totalFramesCount) {
      this.currentFrame = startFrame || 0
    }

    this.animator.startValue =
      playMode === 'fallbacks' ? endFrame || totalFramesCount : startFrame || 0
    this.animator.endValue =
      playMode === 'fallbacks' ? startFrame || 0 : endFrame || totalFramesCount

    this.animator.onUpdate = (value: number) => {
      value = Math.floor(value)

      if (this.currentFrame === value) {
        return void 0
      }

      if (this.playMode === PLAY_MODE.FORWARDS) {
        this.renderer.processAudio(value)
      }

      this.currentFrame = value

      if (
        !this.intersectionObserverRender ||
        this.intersectionObserverRenderShow
      ) {
        const context2d = this.container.getContext('2d')
        if (context2d !== null) {
          this.renderer.drawFrame(
            videoItem,
            this.currentFrame,
            this.cacheFrames,
            this.container.width,
            this.container.height,
            context2d
          )
        }
      }

      this.$onEvent.process()
    }

    if (this.playMode === PLAY_MODE.FORWARDS) {
      this.renderer.processAudio(0)
    }
    this.animator.start(this.currentFrame)
  }

  private setSize(): void {
    if (this.videoItem === null) {
      return
    }

    const videoSize: VideoSize = this.videoItem.videoSize

    this.container.width = videoSize.width
    this.container.height = videoSize.height
  }
}
