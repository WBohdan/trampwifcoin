import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, './src/components'),
      "@images": path.resolve(__dirname, './src/assets/images'),
      "@icons": path.resolve(__dirname, './src/assets/icons'),
      "@layouts": path.resolve(__dirname, './src/layouts'),
      "@ui": path.resolve(__dirname, './src/ui')
    }
  }
})
