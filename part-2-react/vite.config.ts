import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.PORT) || 5173;

  return {
    plugins: [react(), tailwindcss(), svgr()],
    server: { port },
    resolve: { alias: [{ find: /^~/, replacement: '/src' }] },
  };
});
