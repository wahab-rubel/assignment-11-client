import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';  // Correct import for named export

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),  // Add node polyfills to your Vite configuration
  ],
  resolve: {
    alias: {
      someAlias: path.resolve(__dirname, 'node_modules/some-package'), // Adjust the alias as needed
    },
  },
  optimizeDeps: {
    include: ['jwt-decode'],  // Ensure jwt-decode is pre-bundled
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Handle mixed ES modules
    },
  },
});
