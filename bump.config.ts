import { defineConfig } from 'nbump'
export default defineConfig({
  packages: ['packages/*'],
  mode: 'monorepo',
  publish: true,
})
