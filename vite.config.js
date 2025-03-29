import { defineConfig } from 'vite'
import stylezero from 'stylezero'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    stylezero(),
    vue()],
})
