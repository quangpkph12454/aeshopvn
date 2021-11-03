import {AsyncStorage} from 'react-native';
import GlobalUtil from './GlobalUtil';

export default class SharePreferenceHelper {
  static sharePreferenceHelper = null;

  static getInstance() {
    if (SharePreferenceHelper.sharePreferenceHelper == null) {
      SharePreferenceHelper.sharePreferenceHelper = new SharePreferenceHelper();
    }
    return SharePreferenceHelper.sharePreferenceHelper;
  }

  async storeData(key, data) {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      console.log('SharePreferenceHelper - storeData: ' + error.toString());
    }
  }

  async retrieveDataWithCallback(key, defaultValue, callback) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (!GlobalUtil.checkIsNull(value)) {
        callback(value);
      } else {
        callback(defaultValue);
      }
    } catch (e) {
      console.log(
        'SharePreferenceHelper - retrieveDataWithCallback: ' + e.toString(),
      );
    }
  }
  async retrieveData(key, defaultValue) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (!GlobalUtil.checkIsNull(value)) {
        return value;
      } else {
        return defaultValue;
      }
    } catch (e) {
      console.log(
        'SharePreferenceHelper - retrieveDataWithCallback: ' + e.toString(),
      );
      return '';
    }
  }
}
