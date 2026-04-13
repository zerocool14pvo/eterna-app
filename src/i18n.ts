import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslation from './locales/languages/en/translation.json'
import ruTranslation from './locales/languages/ru/translation.json'
import deTranslation from './locales/languages/de/translation.json'
import frTranslation from './locales/languages/fr/translation.json'
import esTranslation from './locales/languages/es/translation.json'
import itTranslation from './locales/languages/it/translation.json'
import ptTranslation from './locales/languages/pt/translation.json'
import plTranslation from './locales/languages/pl/translation.json'
import nlTranslation from './locales/languages/nl/translation.json'
import trTranslation from './locales/languages/tr/translation.json'

const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  de: { translation: deTranslation },
  fr: { translation: frTranslation },
  es: { translation: esTranslation },
  it: { translation: itTranslation },
  pt: { translation: ptTranslation },
  pl: { translation: plTranslation },
  nl: { translation: nlTranslation },
  tr: { translation: trTranslation }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
