import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'node:url'
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    target: 'es2015',
    outDir: 'dist',
    sourcemap: true,
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
