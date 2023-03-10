import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// css
import postCssPresetEnv from 'postcss-preset-env';

// eslint
import viteEslint from 'vite-plugin-eslint';

// svg
import svgr from 'vite-plugin-svgr';

// 压缩图片
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // node 环境下环境变量
  console.log(mode);
  console.log(loadEnv(mode, process.cwd()));

  return defineConfig({
    plugins: [
      react(),
      viteEslint(),
      svgr(),
      viteImagemin({
        // 无损压缩配置，无损压缩下图片质量不会变差
        optipng: {
          optimizationLevel: 7,
        },
        // 有损压缩配置，有损压缩下图片质量可能会变差
        pngquant: {
          quality: [0.8, 0.9],
        },
        // svg 优化
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
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
    // 预构建相关的配置 决定哪些需要预构建等
    optimizeDeps: {
      // 为一个字符串数组
      entries: ['**/*.vue'],
    },
  });
};
