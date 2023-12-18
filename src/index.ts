import './Global.d.ts'
import Downloader from './downloader'
import Parser from './parser'
import Player from './player'
import DB from './db'
import VideoEntity from './parser/video-entity'

/* Safari and Edge polyfill for createImageBitmap
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap
 */
if (!('createImageBitmap' in window)) {
  Object.assign(window, {
    createImageBitmap: async function (blob: Blob) {
      return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.addEventListener('load', function () {
          resolve(this)
        })
        img.addEventListener('error', function (e) {
          // console.log('createImageBitmap error', e);
          reject(e)
        })
        img.src = URL.createObjectURL(blob)
      })
    },
  })
}

export * from './parser'
export * from './player'
export * from './db'
export * from './downloader'

export { DB, Downloader, Parser, Player, VideoEntity }
