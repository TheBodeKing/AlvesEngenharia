import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), sentryVitePlugin({
    org: "lucas-pompeu-de-pontes",
    project: "alvesengenharia"
  }), sentryVitePlugin({
    org: "lucas-pompeu-de-pontes",
    project: "alvesengenharia"
  })],

  build: {
    sourcemap: true
  }
});