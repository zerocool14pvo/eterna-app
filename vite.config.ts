import path from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  server: { host: true },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, './src/styles')],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#components': path.resolve(__dirname, './src/components'),
      '#styles': path.resolve(__dirname, './src/styles'),
      '#assets': path.resolve(__dirname, './src/assets'),
      '#screens': path.resolve(__dirname, './src/screens'),
    },
  },
})
