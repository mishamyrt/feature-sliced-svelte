import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      $features: resolve('src/routes/features'),
      $widgets: resolve('src/routes/widgets'),
      $entities: resolve('src/routes/entities'),
      $lib: resolve('src/lib'),
    },
  },
})
