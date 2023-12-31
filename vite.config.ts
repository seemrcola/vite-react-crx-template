import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import {cwd} from 'node:process';
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  
  build: {
    outDir: 'dist/crx',
    rollupOptions: {
      input: {
        main: 'index.html',
        background: 'src/background/index.ts',
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name as string
          // chrome插件不允许__开头的文件名
          if(name.startsWith('__')) return `${name.slice(2)}`
          return `${name}`
        },
        chunkFileNames: 'chunk/[name].js',
      },
    },
  },
  
  resolve: {
    alias: {
      '~': path.resolve(cwd(), 'src'),
    }
  }
})
