import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * Sandbox / reverse-proxy friendly HMR.
 * Set VITE_HMR_CLIENT_PORT=443 when the dev server is served behind an
 * HTTPS proxy so the HMR socket reconnects on the right port.
 */
const hmrClientPort = process.env.VITE_HMR_CLIENT_PORT;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    // Allows preview hosts such as *.e2b.app / *.netlify.app to reach the dev server.
    allowedHosts: true,
    hmr: hmrClientPort ? { protocol: 'wss', clientPort: Number(hmrClientPort) } : undefined,
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
});
