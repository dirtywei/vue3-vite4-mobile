import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy({ targets: ['Chrome 64'], modernPolyfills: true }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      eslintrc: {
        enabled: true
      },
      dts: './auto-import.d.ts'
    }),
    Components({
      resolvers: [VantResolver()], //vant 函数需要手动引入
      deep: true,
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      }
    },
    chunkSizeWarningLimit: 1024 // chunk 大小警告的限制（以 kbs 为单位）
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    open: true
  }
})
