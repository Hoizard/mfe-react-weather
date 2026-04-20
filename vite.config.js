import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/mfe-react-weather",
  plugins: [
    react(),
    federation({
      name: "mfe-react-weather",
      filename: "remoteEntry.js",
      exposes: {
        "./WeatherWidget": "./src/WeatherWidget.jsx",
        "./Card": "./src/Components/Card/Card.tsx",
        "./Counter": "./src/Components/Counter/Counter.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
