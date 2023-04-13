import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'node:url'
import uni from "@dcloudio/vite-plugin-uni";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    legacy({
      targets: ['cover 99.5%'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.array.filter',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.for-each',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    minify: 'terser',
    // target: 'es2015',
    outDir: 'dist',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    base: process.env.NODE_ENV === 'production' ? './' : '/',
    host: 'localhost',
    port: 80,
    open: true,
    // https: true,
    proxy: {
      '/apis': {
        target: '',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/apis/, '')
      }
    }
  }
});
