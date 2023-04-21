/// <reference types="vitest" />
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  // plugins: [react()],
  ssr: { target: 'node' },
  esbuild: { jsx: 'automatic' },

  build: {
    minify: false,
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
      exclude: [...configDefaults.exclude, 'src/main.tsx', 'vite-env.d.ts'],
    },
  },
});
