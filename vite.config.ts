import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  resolve: {
    alias: {
      $features: resolve('src/features'),
      $widgets: resolve('src/widgets'),
      $entities: resolve('src/entities'),
      $lib: resolve('src/lib'),
    },
  },
})
