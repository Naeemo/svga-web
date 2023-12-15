import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    minify: true, // false for facilitate debug
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SVGA',
    },
  },
})
