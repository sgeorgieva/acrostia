import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  root: 'src',
  outDir: './dist',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        services: resolve(__dirname, './src/services.html'),
        work: resolve(__dirname, './src/work.html'),
        about: resolve(__dirname, './src/about.html'),
        contacts: resolve(__dirname, './src/contacts.html')
      }
    },
  }
})