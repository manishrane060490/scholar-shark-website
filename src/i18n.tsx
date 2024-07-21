// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to Scholarsharks",
        "description": "Please select your Language",
        "submit": "Submit"
      }
    },
    hi: {
      translation: {
        "welcome": "स्कॉलरशार्क्स में आपका स्वागत है",
        "description": "कृपया अपनी भाषा चुनें",
        "submit": "जमा करना"
      }
    },
    mr: {
      translation: {
        "welcome": "स्कॉलरशार्क्स मध्ये आपले स्वागत आहे",
        "description": "कृपया तुमची भाषा निवडा",
        "submit": "प्रस्तुत करणे"
      }
    }
  },
  lng: 'en', // Default language
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false // React already does escaping
  }
});

export default i18n;
