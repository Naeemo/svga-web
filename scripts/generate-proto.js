/**
 * generate js and ts types from .proto file
 * https://github.com/protobufjs/protobuf.js#pbts-for-typescript
 */

const pbjs = require("protobufjs/cli/pbjs");
const pbts = require("protobufjs/cli/pbts");

// generate js from proto file
const generateJS = new Promise((resolve, reject) => pbjs.main(
  [
    "--target", "static-module",
    "-w", "es6",
    "-o", "./core/proto/svga.js",
    "--no-create",
    "--no-encode",
    "--no-verify",
    "--no-convert",
    "--no-beautify",
    "--no-delimited",
    "./core/proto/svga.proto"
  ],
  err => err ? reject(err) : resolve()
));


// generate types from generated js
const generateTypes = new Promise((resolve, reject) => pbts.main(
  [
    "-o", "./core/proto/svga.d.ts",
    "./core/proto/svga.js"
  ],
  err => err ? reject(err) : resolve()
));


/**
 * cli equivalent:
 * pbjs -t static-module --es6 -o ../core/proto/svga.js --no-delimited ../core/proto/svga.proto
 * pbts -o ../core/proto/svga.d.ts ../core/proto/svga.js
 */
(async () => {
  await generateJS
  await generateTypes
})()
