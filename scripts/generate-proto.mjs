/**
 * generate js and ts types from .proto file
 * https://github.com/protobufjs/protobuf.js#pbts-for-typescript
 */

import pbjs from 'protobufjs-cli/pbjs.js'
import pbts from 'protobufjs-cli/pbts.js'

// generate js from proto file
const generateJS = () => new Promise((resolve, reject) =>
  pbjs.main(
    [
      '--target', 'static-module',
      '-w', 'es6',
      '-o', './src/proto/svga.js',
      '--no-create',
      '--no-encode',
      '--no-verify',
      '--no-convert',
      '--no-beautify',
      '--no-delimited',
      './src/proto/svga.proto'
    ],
    (err) => (err ? reject(err) : resolve())
  )
)

// generate types from generated js
const generateTypes = () => new Promise((resolve, reject) =>
  pbts.main(['-o', './src/proto/svga.d.ts', './src/proto/svga.js'], (err) =>
    err ? reject(err) : resolve()
  )
)


/**
 * cli equivalent:
 * pbjs -t static-module --es6 -o ../src/proto/svga.js --no-delimited ../src/proto/svga.proto
 * pbts -o ../src/proto/svga.d.ts ../src/proto/svga.js
 */
await generateJS()
await generateTypes()
