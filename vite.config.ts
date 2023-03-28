/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@/sass/abstracts/mixins.scss"; @import "@/sass/abstracts/variables.scss";',
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    coverage: {
      reporter: ['text'],
    },
    environment: 'jsdom',
    globals: true,
  },
});
