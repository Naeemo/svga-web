import {inflate} from 'pako'
import VideoEntity, {AudioSources, ImageSources} from './video-entity'
import {com} from "../proto/svga";
import svga = com.opensource.svga;
import AudioEntity = com.opensource.svga.AudioEntity;

/**
 * audio/x-mpeg
 * SUQz in base64
 * 0b01001001, 0b01000100, 0b00110011
 */
const audioPrefix = Uint8Array.of(0b01001001)

/**
 * image/png
 * iVBO in base64
 * 0b10001001, 0b01010000, 0b01001110
 */
// const pngPrefix = Uint8Array.of(0b10001001)

function isAudioData(data: Uint8Array): boolean {
  return data[0] === audioPrefix[0]
}

onmessage = function (event: MessageEvent<ArrayBuffer>) {
  const inflateData: Uint8Array = inflate(new Uint8Array(event.data))
  const movie = svga.MovieEntity.decode(inflateData)
  const images: ImageSources = {}
  const audios: AudioSources = {}
  const transferables: Transferable[] = []
  const promises: Promise<void>[] = []

  // parse audios
  movie.audios.forEach((audio) =>{
    const {audioKey, endFrame, startFrame, startTime, totalTime} = audio as svga.AudioEntity
    const uint8 = movie.images[audioKey]
    if (!uint8) {
      return
    }

    const sourceBuffer = uint8.buffer.slice(uint8.byteOffset, uint8.byteOffset + uint8.byteLength)
    transferables.push(sourceBuffer)
    audios[audioKey] = {
      audioKey,
      source: sourceBuffer,
      startFrame,
      endFrame,
      startTime,
      totalTime
    }
  })

  // parse images
  for (const key in movie.images) {
    const uint8 = movie.images[key]

    // skip audio data
    if (isAudioData(uint8)) {
      continue
    }

    const blob = new Blob([uint8], {type: 'image/png'})
    promises.push(
      createImageBitmap(blob).then((bitMap) => {
        images[key] = bitMap
        transferables.push(bitMap)
      })
    )
  }

  Promise.all(promises)
    .then(() => {
      const data = new VideoEntity(movie, images, audios)
      postMessage(data, transferables)
    })
}
