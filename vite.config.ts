import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// css
import postCssPresetEnv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postCssPresetEnv()],
    },
  },
});
