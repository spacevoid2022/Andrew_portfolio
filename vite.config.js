import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailindcss()],
  // Configure the development server to run on port 3000
  server: {
    port: 3000,
  },
})