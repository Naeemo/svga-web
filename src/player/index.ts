import Renderer from './renderer'
import Animator, { FILL_MODE } from './animator'
import VideoEntity from '../parser/video-entity'
import { noop } from './noop'

export * from './animator'
export * from './offscreen.canvas.render'
export * from './renderer'

export enum EVENT_TYPES {
  START = 'start',
  PROCESS = 'process',
  PAUSE = 'pause',
  RESUME = 'resume',
  STOP = 'stop',
  END = 'end',
  CLEAR = 'clear',
}

interface options {
  loop?: number | boolean
  fillMode?: FILL_MODE
  playMode?: PLAY_MODE
  startFrame?: number
  endFrame?: number
  cacheFrames?: boolean
  intersectionObserverRender?: boolean
  noExecutionDelay?: boolean
}

export enum PLAY_MODE {
  FORWARDS = 'forwards',
  FALLBACKS = 'fallbacks',
}

export default class Player {
  public currentFrame = 0
  public readonly container: HTMLCanvasElement
  private videoItem: VideoEntity | null = null
  private playMode: PLAY_MODE = PLAY_MODE.FORWARDS
  private startFrame = 0
  private endFrame = 0
  private intersectionObserverRender = false
  private intersectionObserverRenderShow = true
  private intersectionObserver: IntersectionObserver | null = null
  private renderer: Renderer
  private animator: Animator
  private $onEvent: {
    [EVENT_TYPES.START]: () => unknown
    [EVENT_TYPES.PROCESS]: () => unknown
    [EVENT_TYPES.PAUSE]: () => unknown
    [EVENT_TYPES.RESUME]: () => unknown
    [EVENT_TYPES.STOP]: () => unknown
    [EVENT_TYPES.END]: () => unknown
    [EVENT_TYPES.CLEAR]: () => unknown
  } = {
    start: noop,
    process: noop,
    pause: noop,
    resume: noop,
    stop: noop,
    end: noop,
    clear: noop,
  }

  constructor(
    element: string | HTMLCanvasElement,
    videoItem?: VideoEntity,
    options?: options
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

    this.renderer = new Renderer(this.container)
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

  public set(options: options): void {
    this.setAnimatorLoop(options.loop)
    options.fillMode && (this.animator.fillRule = options.fillMode)
    options.playMode && (this.playMode = options.playMode)
    options.cacheFrames !== undefined &&
      (this.renderer.isCacheFrame = options.cacheFrames)
    this.startFrame = options.startFrame ? options.startFrame : this.startFrame
    this.endFrame = options.endFrame ? options.endFrame : this.endFrame

    // 监听容器是否处于浏览器视窗内
    options.intersectionObserverRender !== undefined &&
      (this.intersectionObserverRender = options.intersectionObserverRender)
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

    if (options.noExecutionDelay !== undefined) {
      this.animator.noExecutionDelay = options.noExecutionDelay
    }
  }

  public mount(videoItem: VideoEntity): Promise<void> {
    this.currentFrame = 0
    this.videoItem = videoItem

    const prepare = this.renderer.prepare(videoItem)
    this.renderer.clear()
    return prepare
  }

  public start(): void {
    if (!this.videoItem) {
      throw new Error('video item undefined.')
    }
    this.startAnimation(this.videoItem)
    this.$onEvent.start()
  }

  public resume(): void {
    this.animator.start(this.currentFrame)
    this.$onEvent.resume()
  }

  public pause(): void {
    this.animator.stop()
    this.$onEvent.pause()
  }

  public stop(): void {
    this.animator.stop()
    this.renderer.clear()

    this.currentFrame = 0

    this.renderer.stopAllAudio()
    this.$onEvent.stop()
  }

  public clear(): void {
    this.animator.stop()
    this.renderer.clear()
    this.$onEvent.clear()
  }

  public destroy(): void {
    this.animator.stop()
    this.renderer.clear()
    this.videoItem = null
  }

  public $on(eventName: EVENT_TYPES, execFunction: () => unknown): this {
    this.$onEvent[eventName] = execFunction

    if (eventName === 'end') {
      this.animator.onEnd = () => this.$onEvent.end()
    }

    return this
  }

  private setAnimatorLoop(loop?: number | boolean): void {
    switch (typeof loop) {
      case 'undefined':
        this.animator.loop = true
        break
      case 'boolean':
        this.animator.loop = loop
        break
      case 'number':
        if (loop <= 0) {
          console.warn(
            '[svga-web] set loop to 0 is deprecated, use "loop: true" instead'
          )
          this.animator.loop = true
        } else {
          this.animator.loop = false
          this.animator.repeatNumber = loop
        }
    }
  }

  /**
   * Start animation
   * @param images
   * @param sprites
   * @param frames
   * @param FPS
   * @param dynamicElements
   * @private
   */
  private startAnimation({
    images,
    sprites,
    frames,
    FPS,
    dynamicElements,
  }: VideoEntity): void {
    const { playMode, startFrame, endFrame } = this
    const totalFramesCount = frames - 1

    // 如果开始动画的当前帧是最后一帧，重置为第 0 帧
    if (this.currentFrame === totalFramesCount) {
      this.currentFrame = startFrame || 0
    }

    this.animator.startValue =
      playMode === PLAY_MODE.FALLBACKS
        ? endFrame || totalFramesCount
        : startFrame || 0
    this.animator.endValue =
      playMode === PLAY_MODE.FALLBACKS
        ? startFrame || 0
        : endFrame || totalFramesCount

    if (endFrame > 0 && endFrame > startFrame) {
      frames = endFrame - startFrame
    } else if (endFrame <= 0 && startFrame > 0) {
      frames = frames - startFrame
    }

    this.animator.duration = frames * (1.0 / FPS) * 1000

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
        this.renderer.drawFrame(
          images,
          sprites,
          dynamicElements,
          this.currentFrame
        )
      }

      this.$onEvent.process()
    }

    if (this.playMode === PLAY_MODE.FORWARDS) {
      this.renderer.processAudio(0)
    }
    this.animator.start(this.currentFrame)
  }
}
