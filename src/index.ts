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
    window.createImageBitmap = async function(blob) {
        return new Promise((resolve,reject) => {
            let img = document.createElement('img');
            img.addEventListener('load', function() {
                resolve(this as any);
            });
            img.addEventListener('error', function(e) {
                // console.log('createImageBitmap error', e);
                reject(e);
            })
            img.src = URL.createObjectURL(blob as any);
        });
    }
}

export * from './parser'
export * from './player'
export * from './db'
export * from './downloader'

export { DB, Downloader, Parser, Player, VideoEntity }
