import { noop } from './noop'

const WORKER = `onmessage = function () {
  setTimeout(function() {postMessage(null)}, 1 / 60)
}`

export default class Animator {
  public noExecutionDelay = false
  public startValue = 0
  public endValue = 0
  public duration = 0
  public loop = 1
  public fillRule = 0
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
    this._doStop()
  }

  private _isRunning = false
  private _mStartTime = 0

  public _currentTimeMillisecond: () => number = () => {
    if (typeof performance === 'undefined') {
      return new Date().getTime()
    }

    return performance.now()
  }
  private _worker: Worker | null = null

  private doStart(currentValue: number) {
    this._isRunning = true
    this._mStartTime = this._currentTimeMillisecond()

    currentValue &&
      (this._mStartTime -=
        (currentValue / (this.endValue - this.startValue)) * this.duration)

    this._currentFrication = 0.0

    if (this.noExecutionDelay && this._worker === null) {
      this._worker = new Worker(window.URL.createObjectURL(new Blob([WORKER])))
    }

    this.onStart()
    this._doFrame()
  }

  private _doStop() {
    this._isRunning = false

    if (this._worker !== null) {
      this._worker.terminate()
      this._worker = null
    }
  }

  private _doFrame() {
    if (this._isRunning) {
      this._doDeltaTime(this._currentTimeMillisecond() - this._mStartTime)

      if (this._isRunning) {
        if (this._worker) {
          this._worker.onmessage = this._doFrame.bind(this)
          this._worker.postMessage(null)
        } else {
          window.requestAnimationFrame(this._doFrame.bind(this))
        }
      }
    }
  }

  private _doDeltaTime(deltaTime: number) {
    if (deltaTime >= this.duration * this.loop) {
      this._currentFrication = this.fillRule === 1 ? 0.0 : 1.0
      this._isRunning = false
    } else {
      this._currentFrication = (deltaTime % this.duration) / this.duration
    }

    this.onUpdate(this.animatedValue)

    if (!this._isRunning) {
      if (this._worker !== null) {
        this._worker.terminate()
        this._worker = null
      }

      this.onEnd()
    }
  }
}
