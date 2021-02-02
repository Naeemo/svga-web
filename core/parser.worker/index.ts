import {inflate} from 'pako'
import VideoEntity, {ImageSources} from './video-entity'
import {com} from "../proto/svga";
import svga = com.opensource.svga;

onmessage = function (event: MessageEvent<ArrayBuffer>) {
    const inflateData: Uint8Array = inflate(new Uint8Array(event.data))
    const movie = svga.MovieEntity.decode(inflateData)
    const images: ImageSources = {}
    const transferables: Transferable[] = []
    // const webpdata = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
    // const webpdata = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnElEQVR42u3RAQ0AAAgDoL9/aK3hHFSgyUw4o0KEIEQIQoQgRAhChAgRghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIQYgQhAhBiBCECEEIQoQgRAhChCBECEIQIgQhQhAiBCFCEIIQIQgRghAhCBGCECFChCBECEKEIOS7BU5Hx50BmcQaAAAAAElFTkSuQmCC';

    // fetch(webpdata).then(response => response.blob()).then((blob) => {
    //     console.log(blob)
    // })
    //
    // fetch(webpdata).then(response => response.arrayBuffer()).then((ab) => {
    //     console.log(ab)
    // })

    console.log('origin data', movie)
    const promises = Object.entries(movie.images)
        .map(async ([key, uint8]) => {
            const blob = new Blob([uint8], {type: 'image/png'})
            // const blob = await fetch(webpdata).then(response => response.blob())

            return createImageBitmap(blob)
                .then((bitMap) => {
                    images[key] = bitMap
                    transferables.push(bitMap)
                })
        })

    Promise.all(promises)
        .then(() => {
            console.log(movie, images)
            const data = new VideoEntity(movie, images)
            postMessage(data, transferables)
        })
}
