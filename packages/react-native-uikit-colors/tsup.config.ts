import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  target: 'es2020',
  entry: ['src/index.ts', 'src/web.ts'],
  external: ['react-native', 'react', 'nativewind'],
  dts: true,
  format: ['cjs', 'esm'],
})
