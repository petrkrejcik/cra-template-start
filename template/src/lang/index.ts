import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enEN } from './en/enEN';
export { enEN };

const resources = {
  en: enEN,
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
