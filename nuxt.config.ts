import { defineNuxtConfig } from 'nuxt/config'
import Aura from '@primeuix/themes/aura';
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
    autoImport: true,
    options: {
      theme: {
        preset: Aura
      },
      locale: {
        accept: 'Принять',
        reject: 'Отменить',
        fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Ноябрь", "Декабрь"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        passwordPrompt: 'Введите пароль',
        weak: 'Слабый',
        medium: 'Cредний',
        strong: 'Сложный'
      }
    },
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
  imports: {
    scan: false
  }
})