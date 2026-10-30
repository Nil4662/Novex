import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In the Base44 preview sandbox, the dev server receives requests with an
// external Host header that Vite's host check would otherwise block (403).
// Allow the platform-provided host(s) only when the preview flag is enabled;
// localhost remains allowed by default for normal local development.
const previewHosts =
  process.env.BASE44_PREVIEW_MODE === '1' &&
  process.env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS
    ? process.env.__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS.split(',')
        .map((h) => h.trim())
        .filter(Boolean)
    : [];

// Vite configuration for the Fire & Saffron restaurant website.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: previewHosts,
  },
});
