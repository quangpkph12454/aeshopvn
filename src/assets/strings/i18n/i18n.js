import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import en from './locales/en';
import vi from './locales/vi';

I18n.fallbacks = true;

I18n.translations = {
  vi,
  en,
};
const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('en') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
