import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ['src/component/'],
    }),
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    viteStaticCopy({
      targets: [
        {
          src: './src/tailwind.js',
          dest: './'
        }
      ]
    })
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.ts'),
      name: 'ThirdLib',
      formats: ['es', 'umd'],
      fileName: (format) => `thirdlib.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  }
}))
