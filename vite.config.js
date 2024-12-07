// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser
    host: true, // Allow access from network
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Optimize dependencies
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // Optional alias for cleaner imports
    },
  },
  preview: {
    port: 4173, // Default preview server port
  },
});
