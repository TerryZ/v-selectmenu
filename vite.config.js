import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
// import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import cssInJs from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
/// <reference types="vitest/config" />
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'VSelectMenu',
      formats: ['es', 'umd'],
      fileName: 'v-selectmenu'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  test: {
    environment: 'jsdom',
    reporters: 'verbose',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**']
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    cssInJs()
  ]
})
