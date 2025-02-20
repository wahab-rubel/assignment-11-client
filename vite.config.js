import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: true,
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
});
