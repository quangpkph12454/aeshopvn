import {Dimensions, Platform} from 'react-native';
const ANIMATION_DELAY =
  require('react-native').Platform.OS === 'android' ? 300 : 600;
export default {
  LOG_TAG: 'AeShop:',
  IS_IOS: Platform.OS === 'ios',
  RESULT_CUSTOMER_SALE: 159,
  DATE_FORMAT: 'DD-MM-YYYY',
  ENCRYPTION_K: 'RmDigitalBanking',
  ACCESS_ENCRYPTION: 'ACCESS_ENCRYPTION',
  USER_ENCRYPTION: 'USER_ENCRYPTION',
  ALLOW_FINGERPRINT: 'ALLOW_FINGERPRINT',
  CAMPAIGN_COUNT: 'CAMPAIGN_COUNT',
  NOTIFICATION_COUNT: 'NOTIFICATION_COUNT',
  FIREBASE_TOKEN: 'FIREBASE_TOKEN',
  INDEX_TABLE: 1,
  SALE_TABLE: 2,
  PLATFORM: require('react-native').Platform.OS,
  ANIMATION_DELAY: ANIMATION_DELAY,
  INITIAL_VECTOR: '0104201931042019',
  BORDER_ITEM_RADIUS: 5,
  VERTICAL_TYPE: 1,
  HORIZONTAL_TYPE: 2,
  FLOAT_BUTTON_SIZE: 46,
  TEXT_SIZE: 15,
  LABEL_SIZE: 13,
  AVATAR_SIZE: 160,
  widthStyle: {
    maxWidth: 350,
    paddingHorizontal: '5%',
    width: '100%',
  },
  EventName: {
    LOGIN: 'LOGIN_EVENT',
    GO_TO_TAB: 'GO_TO_TAB',
  },
  SharedPreferencesKey: {
    token_type: 'token_type',
    access_token: 'access_token',
  },
  homeItemType: {
    BANNER: 1,
    CATEGORY: 2,
    PRODUCT_NEW: 3,
    SELLING_PRODUCT: 4,
    END: 5,
  },
  notificationItemType: {
    BANNER: 1,
    TITLE: 2,
    NEWS: 3,
  },
};
