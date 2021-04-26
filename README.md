# svga-web

A [SVGA](http://svga.io/en/) player for modern Web.

[中文](./README.zh-CN.md)

## Notice

This lib is not an official one by [svga.io](http://svga.io/en/).
It is maintained by myself currently, original source came from the official [svga.lite](https://github.com/svga/SVGAPlayer-Web-Lite).
Contributions and discussions are welcome.

## Usage

### NPM

```sh
yarn add svga-web

# or

npm i svga-web
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/svga-web/svga-web.min.js"></script>
```

## Example/Doc

### Player options

| option name                | type                   | default    | detail                                                                                                                                                                                                                                             |
| -------------------------- | ---------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loop                       | `number`               | `1`        | how many times to repeat, `0` means loop forever                                                                                                                                                                                                   |
| fillMode                   | `forwards` `backwards` | `forwards` | just like [css animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)                                                                                                                                          |
| playMode                   | `forwards` `fallbacks` | `forwards` |
| startFrame                 | `number`               | `0`        |
| endFrame                   | `number`               | `0`        | `0` means the last frame                                                                                                                                                                                                                           |
| cacheFrames                | `boolean`              | `false`    | Cache rendered frames, performance friendly if played repeatedly                                                                                                                                                                                   |
| noExecutionDelay           | `boolean`              | `false`    | Use timer inside `WebWorker` to ensure no execution delay, because [sometimes the browser may delay/stop some tasks](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API#Policies_in_place_to_aid_background_page_performance) ） |
| intersectionObserverRender | `boolean`              | `false`    | Skip actual frame rendering if not visible, [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)                                                                                                |

### Simple Use

```html
<canvas id="canvas"></canvas>
```

```js
import { Downloader, Parser, Player } from 'svga-web'

const downloader = new Downloader()
const parser = new Parser()
const player = new Player('#canvas') // #canvas is HTMLCanvasElement

;(async () => {
  const fileData = await downloader.get('./xxx.svga')
  const svgaData = await parser.do(fileData)

  player.set({
    loop: 1,
    fillMode: 'forwards',
  })

  await player.mount(svgaData)

  player
    .$on('start', () => console.log('event start'))
    .$on('pause', () => console.log('event pause'))
    .$on('stop', () => console.log('event stop'))
    .$on('end', () => console.log('event end'))
    .$on('clear', () => console.log('event clear'))
    .$on('process', () => console.log('event process', player.progress))

  player.start()
  // player.pause()
  // player.stop()
  // player.clear()
})()
```

### Replace Element

You can change the elements of the `svga data` corresponding to the key values.

```js
import { Downloader, Parser, Player } from 'svga-web'

const downloader = new Downloader()
const parser = new Parser()
const player = new Player('#canvas')

;(async () => {
  const fileData = await downloader.get('./xxx.svga')
  const svgaData = await parser.do(fileData)

  const image = new Image()
  image.src = 'https://xxx.com/xxx.png'
  svgaData.images['key'] = image

  await player.mount(svgaData)

  player.start()
})()
```

### Dynamic Element

You can insert some [dynamic elements](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage) with `svga data`.

```js
const text = 'hello gg'
const fontCanvas = document.getElementById('font')
const fontContext = fontCanvas.getContext('2d')
fontCanvas.height = 30
fontContext.font = '30px Arial'
fontContext.textAlign = 'center'
fontContext.textBaseline = 'middle'
fontContext.fillStyle = '#000'
fontContext.fillText(
  text,
  fontCanvas.clientWidth / 2,
  fontCanvas.clientHeight / 2
)

const { Downloader, Parser, Player } = SVGA

const downloader = new Downloader()
const parser = new Parser()
const player = new Player('#canvas')

const svgaFile = './svga/kingset.svga'

const fileData = await downloader.get(svgaFile)
const svgaData = await parser.do(fileData)

svgaData.dynamicElements['banner'] = fontCanvas

await player.mount(svgaData)

player.start()
```

Set `fit` strategy of the dynamic element, check out [example](examples/11.test-dynamicElement.html).

```js
const video = document.getElementById('video')
const { Downloader, Parser, Player } = SVGA

const downloader = new Downloader()
const parser = new Parser()
const player = new Player('#canvas')

const svgaFile = './svga/kingset.svga'

const fileData = await downloader.get(svgaFile)
const svgaData = await parser.do(fileData)

// fit: "fill", "cover", "contain", "none"
svgaData.dynamicElements['99'] = { source: video, fit: 'fill' }

await player.mount(svgaData)

player.start()
```

### Reusable instantiated Downloader & Parser

```js
import { Downloader, Parser, Player } from 'svga-web'

const downloader = new Downloader()
const parser = new Parser()

const player1 = new Player('#canvas1')
const player2 = new Player('#canvas2')

const fileData1 = await downloader.get('./1.svga')
const fileData2 = await downloader.get('./2.svga')

const svgaData1 = await parser.do(fileData1)
const svgaData2 = await parser.do(fileData2)

await player1.mount(svgaData1)
await player2.mount(svgaData2)

player1.start()
player2.start()
```

### Destroy Instance

```js
const downloader = new Downloader()
downloader.destroy()

const parser = new Parser()
parser.destroy()

const player = new Player('#canvas')
player.destroy()
```

### DB

The downloaded and parsed data is persisted and cached using IndexedDB, and the next time you can avoid reusing resources for unified SVGA download and parsing

```js
import { Downloader, Parser, Player, DB } from 'svga-web'

const svgaFile = 'test.svga'
let data = void 0
let db = void 0

try {
  db = new DB()
} catch (error) {
  console.error(error)
}

if (db) {
  data = await db.find(svgaFile)
}

if (!data) {
  const downloader = new Downloader()
  const fileData = await downloader.get(svgaFile)
  const parser = new Parser()

  data = await parser.do(fileData)

  // insert data to db
  db && (await db.insert(svgaFile, data))
}

const player = new Player('#canvas')
await player.mount(data)

player.start()
```

### Downloader Cancel

You can cancel the SVGA file request in the download

```js
downloader
  .get('test.svga')
  .then((fileData) => {
    console.log('download complete')
  })
  .catch((error) => {
    console.log('catch', error)
  })

setTimeout(() => {
  downloader.cancel() // or downloader.destroy()
}, 1000)
```

```sh
# Installation dependencies
yarn install

# Development
yarn start

# Build
yarn build
```

## LICENSE

[MIT](./LICENSE)

---

Supported by [JetBrains open source program](https://www.jetbrains.com/community/opensource/#support?from=svga-web).
