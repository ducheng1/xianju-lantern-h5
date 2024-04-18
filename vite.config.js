import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoimport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), autoimport({
    imports: ['vue', 'pinia']
  })],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  resolve: {
    // 配置别名
    alias: [
      // @表示src目录下
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
