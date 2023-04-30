/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="cypress" />
import { defineConfig, configDefaults } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    istanbul({
      cypress: true,
      include: 'src/*',
      requireEnv: false,
    }),
  ],
  ssr: { target: 'node' },
  esbuild: { jsx: 'automatic' },

  build: {
    sourcemap: true,
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
      exclude: [...configDefaults.exclude, 'vite-env.d.ts'],
    },
  },
});
