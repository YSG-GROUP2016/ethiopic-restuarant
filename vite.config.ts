import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // GitHub Pages hosts at /ethiopic-restuarant/ (repo name).
  // Use `/` during local development so the dev server is reachable at root
  // (useful when previewing through Codespaces / forwarded ports).
  base: mode === 'production' ? '/ethiopic-restuarant/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
