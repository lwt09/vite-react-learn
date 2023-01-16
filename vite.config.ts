import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// css
import postCssPresetEnv from 'postcss-preset-env';

// eslint
import viteEslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint()],
  css: {
    postcss: {
      plugins: [postCssPresetEnv()],
    },
  },
  resolve: {
    // 别名配置
    alias: {
      '@': path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, 'src/assets'),
    },
  },
});
