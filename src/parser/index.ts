import ParserWorker from './worker.ts?worker&inline'
import VideoEntity from './video-entity'
import { getVersion, Version } from './version'

export * from './frame-entity'
export * from './video-entity'
export * from './version'

export default class Parser {
  public worker: Worker

  constructor() {
    this.worker = new ParserWorker()
  }

  do(data: ArrayBuffer): Promise<VideoEntity> {
    const dataHeader = new Uint8Array(data, 0, 4)

    if (getVersion(dataHeader) === Version.VERSION_1) {
      throw new Error('this parser does not support version@1.x of svga.')
    }

    if (!data) {
      throw new Error('Parser Data not found')
    }

    return new Promise((resolve) => {
      this.worker.postMessage(data)
      this.worker.onmessage = ({ data }: { data: VideoEntity }) => {
        resolve(data)
      }
    })
  }

  destroy(): void {
    this.worker.terminate()
  }
}
