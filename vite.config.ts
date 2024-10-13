import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  },
  build:{
    outDir:'server'
  },
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
});
