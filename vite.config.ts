import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Sandbox / preview handling.
 *
 * BASE44_PREVIEW_MODE is supplied by the platform and is only equal to "1"
 * inside the sandbox. When it is unset (a normal `npm run dev` in VS Code)
 * every value below stays at the local default, so the project behaves exactly
 * as documented in the README.
 */
const previewMode = process.env.BASE44_PREVIEW_MODE === '1';

const allowedHosts: string[] = ['localhost', '127.0.0.1'];

if (previewMode) {
  // The sandbox proxy forwards `Host: <port>-<sandbox id>.<domain>` and the id
  // rotates, so only a wildcard on the sandbox domain is safe here.
  const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN;
  const publicSuffix = process.env.BASE44_PUBLIC_HOST_SUFFIX;

  if (sandboxDomain) allowedHosts.push(`.${sandboxDomain}`);

  // The browser sends this origin, so it must also be accepted.
  if (publicSuffix) allowedHosts.push(`3000-${publicSuffix}`);
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts,
    // Bind mounts often swallow native file events inside containers.
    watch: previewMode ? { usePolling: true, interval: 320 } : undefined,
  },
});
