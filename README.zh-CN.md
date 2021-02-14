# svga-web

这是一个 [SVGA](http://svga.io/) Web 播放器


## 安装

### NPM

```sh
yarn add svga-web

# 或者

npm i svga-web
```

### CDN

```html

<script src="https://cdn.jsdelivr.net/npm/svga-web/svga-web.min.js"></script>
```

## 例子/文档

### Player.set({ 参数 })

| 属性名 | 说明 | 类型 | 默认值 | 备注 |
| ----- | --- | --- | ----- | ---- |
| loop | 循环次数 | `number` | `1` | 设置为 `0` 时，无限循环 |
| fillMode | 最后停留的目标模式 | `forwards` `backwards` | `forwards` | 类似于 [css animation-fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode) |
| playMode | 播放模式 | `forwards` `fallbacks` | `forwards` |
| startFrame | 开始播放帧 | `number` | `0` | |
| endFrame | 结束播放帧 | `number` | `0` | 设置为 `0` 时，默认为 SVGA 文件最后一帧 |
| cacheFrames | 是否缓存帧 | `boolean` | `false` | 开启后对已绘制的帧进行缓存，提升重复播放动画性能 |
| noExecutionDelay | 是否避免执行延迟 | `boolean` | `false` | 开启后使用 `WebWorker` 确保动画按时执行（ [一些情况下浏览器会延迟或停止执行一些任务](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API#Policies_in_place_to_aid_background_page_performance) ） |
| intersectionObserverRender | 是否开启动画容器视窗检测 | `boolean` | `false` | 开启后利用 [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 检测动画容器是否处于视窗内，若处于视窗外，停止描绘渲染帧避免造成资源消耗 |

### 简单使用

```html

<canvas id="canvas"></canvas>
```

```js
import {Downloader, Parser, Player} from 'svga-web'

const downloader = new Downloader()
const parser = new Parser()
// #canvas 是 HTMLCanvasElement
const player = new Player('#canvas')

;(async () => {
  const fileData = await downloader.get('./xxx.svga')
  const svgaData = await parser.do(fileData)

  player.set({loop: 1})

  await player.mount(svgaData)

  player
    // 开始动画事件回调
    .$on('start', () => console.log('event start'))
    // 暂停动画事件回调
    .$on('pause', () => console.log('event pause'))
    // 停止动画事件回调
    .$on('stop', () => console.log('event stop'))
    // 动画结束事件回调
    .$on('end', () => console.log('event end'))
    // 清空动画事件回调
    .$on('clear', () => console.log('event clear'))
    // 动画播放中事件回调
    .$on('process', () => console.log('event process', player.progress))

  // 开始播放动画
  player.start()

  // 暂停播放东湖
  // player.pause()

  // 停止播放动画
  // player.stop()

  // 清空动画
  // player.clear()
})()
```

### 替换元素

你能够通过改变 `svga data` 对应键值的元素

```js
import {Downloader, Parser, Player} from 'svga-web'

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

### 动态元素

你可以通过 `svga data` 插入一些[动态元素](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage)

```js
const text = 'hello gg'
const fontCanvas = document.getElementById('font')
const fontContext = fontCanvas.getContext('2d')
fontCanvas.height = 30
fontContext.font = '30px Arial'
fontContext.textAlign = 'center'
fontContext.textBaseline = 'middle'
fontContext.fillStyle = '#000'
fontContext.fillText(text, fontCanvas.clientWidth / 2, fontCanvas.clientHeight / 2)

const {Downloader, Parser, Player} = SVGA

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

为动态元素设置自适应参数 `fit`，参考[例子](examples/11.test-dynamicElement.html).

```js
const video = document.getElementById('video')
const {Downloader, Parser, Player} = SVGA

const downloader = new Downloader()
const parser = new Parser()
const player = new Player('#canvas')

const svgaFile = './svga/kingset.svga'

const fileData = await downloader.get(svgaFile)
const svgaData = await parser.do(fileData)

// fit: "fill", "cover", "contain", "none"
svgaData.dynamicElements['99'] = {source: video, fit: "fill"}

await player.mount(svgaData)

player.start()
```

### 可复用实例化 Downloader & Parser

```js
import {Downloader, Parser, Player} from 'svga-web'

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

### 销毁实例

```js
const downloader = new Downloader()
downloader.destroy()

const parser = new Parser()
parser.destroy()

const player = new Player('#canvas')
player.destroy()
```

### DB

已下载并解析的数据利用 IndexedDB 进行持久化缓存，下次可避免重复消耗资源对统一 SVGA 下载和解析

```js
import {Downloader, Parser, Player, DB} from 'svga-web'

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

  // 插入数据
  db && (await db.insert(svgaFile, data))
}

const player = new Player('#canvas')
await player.mount(data)

player.start()
```

### Downloader Cancel (v1.4.0+)

你可以取消下载中的 SVGA 文件请求

```js
downloader.get('test.svga').then((fileData) => {
  console.log('下载完成')
}).catch(error => {
  console.log('catch', error)
})

setTimeout(() => {
  downloader.cancel() // 或者 downloader.destroy()
}, 1000)
```

```sh
# 安装依赖
yarn install

# 开发
yarn start

# 构建
yarn build
```

## LICENSE

[MIT](./LICENSE)
