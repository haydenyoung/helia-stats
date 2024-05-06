import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'helia-connected-peers',
      fileName: (format) => format === 'umd' ? `helia-stats.embedded.js` : `helia-stats.${format}.js`
    }
  }
});