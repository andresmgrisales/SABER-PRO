import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isGitHubPages = true;
    const base = isGitHubPages ? '/SABER-PRO/' : '/';
    return {
      plugins: [react()],
      base,
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        assetsInlineLimit: 0,
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              if (assetInfo.name.endsWith('.png') || 
                  assetInfo.name.endsWith('.jpg') || 
                  assetInfo.name.endsWith('.jpeg') || 
                  assetInfo.name.endsWith('.gif')) {
                return 'images/[name][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            },
            chunkFileNames: 'js/[name]-[hash].js',
            entryFileNames: 'js/[name]-[hash].js',
          }
        }
      },
      publicDir: 'public',
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
