import { defineNuxtConfig } from 'nuxt/config'
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  dir: {
    pages: resolve(__dirname, './src/app/routes'),
  },
  alias: {
    "~": resolve(__dirname, './src'),
    "@": resolve(__dirname, './src'),
    "~~": resolve(__dirname, './'),
    "@@": resolve(__dirname, './'), 
    "assets": resolve(__dirname, './src/assets'),
  },
})