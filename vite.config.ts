import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
});
