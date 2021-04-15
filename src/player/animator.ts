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
  private _currentFrication = 0.0

  public get animatedValue(): number {
    return (
      (this.endValue - this.startValue) * this._currentFrication +
      this.startValue
    )
  }

  public onStart: () => unknown = noop

  public onUpdate: (currentValue: number) => unknown = noop
  public onEnd: () => unknown = noop

  public start(currentValue: number): void {
    this.doStart(currentValue)
  }

  public stop(): void {
    this._isRunning = false

    if (this.timeoutWorker !== null) {
      this.timeoutWorker.terminate()
      this.timeoutWorker = null
    }
  }

  private _isRunning = false
  private _mStartTime = 0

  public _currentTimeMillisecond: () => number = () => {
    if (typeof performance === 'undefined') {
      return new Date().getTime()
    }

    return performance.now()
  }
  private timeoutWorker: Worker | null = null

  private doStart(currentValue: number) {
    this._isRunning = true
    this._mStartTime = this._currentTimeMillisecond()

    currentValue &&
      (this._mStartTime -=
        (currentValue / (this.endValue - this.startValue)) * this.duration)

    this._currentFrication = 0.0

    if (this.noExecutionDelay && this.timeoutWorker === null) {
      this.timeoutWorker = new Worker(
        window.URL.createObjectURL(new Blob([WORKER]))
      )
    }

    this.onStart()
    this.doFrame()
  }

  private readonly doFrame = () => {
    const deltaTime = this._currentTimeMillisecond() - this._mStartTime
    if (deltaTime >= this.duration * this.loop) {
      this._currentFrication = this.fillRule === FILL_MODE.BACKWARDS ? 0.0 : 1.0
      this._isRunning = false
    } else {
      this._currentFrication = (deltaTime % this.duration) / this.duration
    }

    this.onUpdate(this.animatedValue)

    if (this._isRunning) {
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
