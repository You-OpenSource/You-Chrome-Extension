import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        content: path.resolve(__dirname, 'src/chromeServices/DOMEvaluator.ts'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Content script should go to static/js/content.js
          if (chunkInfo.name === 'content') {
            return 'static/js/content.js';
          }
          // Main entry goes to static/js/main.js
          return 'static/js/[name].js';
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    // Disable code splitting for Chrome extension compatibility
    chunkSizeWarningLimit: 1000,
  },
  publicDir: 'public',
});

