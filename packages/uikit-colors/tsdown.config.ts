import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['index.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
})
