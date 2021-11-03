import {Dimensions, StatusBar} from 'react-native';
export default {
  avatarKey: 'AVATAR_KEY',
  isOffline: false,
  METHOD_POST: 'POST',
  METHOD_GET: 'GET',
  METHOD_GET_FILE: 'GET_WITHOUT_HANDLE',
  TIME_OUT: 10000,
  IMG_DEFAULT_CAMPAIGN: '',
  appCode: 'CRM',
  clientId: 'DIGITAL_BANK',
  apiEndpoint: {
    getProducts: '/products',
  },
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  statusBarHeight: StatusBar.currentHeight,
};
