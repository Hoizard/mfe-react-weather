import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_react_weather',
      filename: 'remoteEntry.js',
      exposes: {
        './WeatherWidget': './src/WeatherWidget.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  // Change 'erickcguz' to your actual GitHub username
  base: 'https://erickcguz.github.io/mfe-react-weather/dist/',
})
