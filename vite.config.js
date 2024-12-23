import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure the correct base path is used
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
      build: {
        assetsInclude: ["**/*.jpg", "**/*.png", "**/*.gif"],
      },
    },
  },
});
