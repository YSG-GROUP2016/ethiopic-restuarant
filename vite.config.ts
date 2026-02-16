import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // GitHub Pages hosts at /ethiopic-restuarant/ (repo name).
  // Detect Vercel via env var so builds there use root `/` base.
  base: !!process.env.VERCEL ? '/' : (mode === 'production' ? '/ethiopic-restuarant/' : '/'),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
