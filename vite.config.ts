import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Try adjusting these options
    rollupOptions: {
      external: ["some-external-package"],
      // ...other rollup options
    },
    minify: "esbuild", // or 'esbuild', or false to disable minification
    sourcemap: false, // or false, if you don't want source maps for production
    // ...other options
  },
});
