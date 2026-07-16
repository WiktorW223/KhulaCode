import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // In production the built assets are collected by Django's collectstatic
  // and served by WhiteNoise under /static/ (see STATICFILES_DIRS in
  // mysite/settings.py, which points at react_build/assets). Setting base
  // makes index.html reference /static/index-*.js instead of /assets/…,
  // which would otherwise fall through to the React catch-all route and
  // return index.html (blank page).
  base: process.env.NODE_ENV === "production" ? "/static/" : "/",
})


