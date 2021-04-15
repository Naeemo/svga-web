import { noop } from './noop'

const WORKER = `onmessage = function () {
  setTimeout(function() {postMessage(null)}, 1 / 60)
}`

export enum FILL_MODE {
  FORWARDS = 'forwards',
  BACKWARDS = 'backwards',
}

export default class Animator {
  public noExecutionDelay = false
  public startValue = 0
  public endValue = 0
  public duration = 0
  public loop = 1
  public fillRule: FILL_MODE = FILL_MODE.FORWARDS
  public onUpdate: (frame: number) => unknown = noop
  public onEnd: () => unknown = noop
  private isRunning = false
  private startTimestamp = 0
  private timeoutWorker: Worker | null = null

  /**
   * Get current time in milliseconds
   * @private
   */
  private static currentTimeMillisecond(): number {
    return performance ? performance.now() : new Date().getTime()
  }

  /**
   * Start animation
   * @param initialFrame
   */
  public start(initialFrame: number): void {
    this.isRunning = true
    this.startTimestamp = Animator.currentTimeMillisecond()

    initialFrame &&
      (this.startTimestamp -=
        (initialFrame / (this.endValue - this.startValue)) * this.duration)

    if (this.noExecutionDelay && this.timeoutWorker === null) {
      this.timeoutWorker = new Worker(
        window.URL.createObjectURL(new Blob([WORKER]))
      )
    }

    this.doFrame()
  }

  /**
   * Stop animation
   */
  public stop(): void {
    this.isRunning = false

    if (this.timeoutWorker !== null) {
      this.timeoutWorker.terminate()
      this.timeoutWorker = null
    }
  }

  /**
   * Process a frame, and process later frames repeatedly
   */
  private readonly doFrame = () => {
    const deltaTime = Animator.currentTimeMillisecond() - this.startTimestamp
    let fraction: number
    if (deltaTime >= this.duration * this.loop) {
      fraction = this.fillRule === FILL_MODE.BACKWARDS ? 0.0 : 1.0
      this.isRunning = false
    } else {
      fraction = (deltaTime % this.duration) / this.duration
    }
    const frame = (this.endValue - this.startValue) * fraction + this.startValue
    this.onUpdate(frame)

    if (this.isRunning) {
      if (this.timeoutWorker) {
        this.timeoutWorker.onmessage = this.doFrame
        this.timeoutWorker.postMessage(null)
      } else {
        window.requestAnimationFrame(this.doFrame)
      }
    } else {
      if (this.timeoutWorker !== null) {
        this.timeoutWorker.terminate()
        this.timeoutWorker = null
      }

      this.onEnd()
    }
  }
}
