import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    proxy: {
      "/api/github": {
        target: "http://localhost:5000", // Porta onde sua API backend está rodando
        changeOrigin: true,
        secure: false,
      },
    },
  }
});
