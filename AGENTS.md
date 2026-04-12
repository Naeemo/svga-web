# Agent Instructions

## Project Overview

`svga-web` is a browser-focused TypeScript library for playing SVGA animations on `HTMLCanvasElement`.
It builds as a Vite library and exposes the main public API from `src/index.ts`: `Downloader`, `Parser`,
`Player`, `DB`, and `VideoEntity`.

## Tooling

- Use pnpm. The repo declares `packageManager: pnpm@10.33.0`.
- Use Node v24, matching `.nvmrc`.
- Source is TypeScript ESM with strict compiler settings.
- Formatting uses Prettier with 2 spaces, single quotes, and no semicolons.
- Linting uses ESLint flat config in `eslint.config.ts`.

Useful commands:

```sh
pnpm install
pnpm exec prettier --check ./src
pnpm exec tsc -p ./
pnpm exec eslint ./src
pnpm build
pnpm start
pnpm proto
```

`pnpm build` runs the prebuild checks before `vite build`. `pnpm start` runs checks before launching the
Vite example server.

## Repository Layout

- `src/index.ts` is the public entry point and re-export surface.
- `src/downloader.ts` downloads `.svga` assets as `ArrayBuffer` with `XMLHttpRequest`.
- `src/parser/` inflates and decodes SVGA data. `src/parser/index.ts` owns the parser API and shared inline
  worker lifecycle; `src/parser/worker.ts` does pako/protobuf decoding off the main thread.
- `src/player/` owns canvas rendering, animation timing, playback events, audio handling, and path drawing.
- `src/db.ts` provides IndexedDB caching for parsed `VideoEntity` data.
- `src/proto/svga.proto` is the protobuf source. `src/proto/svga.js` and `src/proto/svga.d.ts` are generated.
- `examples/` contains browser smoke tests and manual demos that run through Vite.
- `dist/` is build output and should not be hand-edited.

## Development Guidance

- Keep browser compatibility in mind. The TypeScript target is `es5`, and runtime code uses DOM, Web Worker,
  Canvas, Audio, IntersectionObserver, IndexedDB, and OffscreenCanvas types.
- Do not manually edit generated protobuf outputs. Change `src/proto/svga.proto`, then run `pnpm proto`.
- Preserve the public exports in `src/index.ts` unless intentionally changing the package API.
- Be careful with transferable `ArrayBuffer` ownership in parser and worker code; posted buffers may no
  longer be usable by the sender after transfer.
- Player changes should be checked against the relevant HTML example in `examples/` when they affect rendering,
  animation control, dynamic elements, audio, caching, or visibility-based rendering.
- There is no dedicated test runner configured. Use `pnpm exec prettier --check ./src`, `pnpm exec tsc -p ./`,
  `pnpm exec eslint ./src`, and targeted Vite examples as the normal verification path.
