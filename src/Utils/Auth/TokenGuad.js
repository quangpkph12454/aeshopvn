import {AsyncStorage} from 'react-native';

/**
 * @Created by DucND/STeam
 * Management token authorize for client
 */
export default class TokenGuad {
  static ACCESS_TOKEN = 'Token';
  static CURRENT_USER = 'CurrentUser';
  static EMPLOYEE_INFO = 'EmployeeInfo';
  static authorizeService = null;

  static getInstance() {
    if (TokenGuad.authorizeService == null) {
      TokenGuad.authorizeService = new TokenGuad();
    }
    return this.authorizeService;
  }

  /**
   * Set value token in AsyncStorage
   * @param token
   */
  async setAccessToken(token) {
    try {
      await AsyncStorage.setItem(TokenGuad.ACCESS_TOKEN, token.toString());
    } catch (error) {
      console.log('SetToken:' + error);
    }
  }

  async getAccessToken() {
    try {
      let value = await AsyncStorage.getItem(TokenGuad.ACCESS_TOKEN);
      if (value !== null) {
        return value;
      }
    } catch (error) {}
  }

  async setCurrentUser(userData) {
    try {
      await AsyncStorage.setItem(
        TokenGuad.CURRENT_USER,
        JSON.stringify(userData),
      );
    } catch (error) {
      console.log('SetCurrentUser:' + error);
    }
  }

  async getCurrentUser() {
    try {
      let value = await AsyncStorage.getItem(TokenGuad.CURRENT_USER);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log('getCurrentUser:' + error);
    }
  }

  async setEmployeeInfo(employeeInfo) {
    try {
      await AsyncStorage.setItem(
        TokenGuad.EMPLOYEE_INFO,
        JSON.stringify(employeeInfo),
      );
    } catch (error) {
      console.log('setEmployeeInfo:' + error);
    }
  }

  async getEmployeeInfo() {
    try {
      let value = await AsyncStorage.getItem(TokenGuad.EMPLOYEE_INFO);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log('getEmployeeInfo:' + error);
    }
  }

  async logout() {
    try {
      // await AsyncStorage.clear();
    } catch (error) {
      console.log('Logout:' + error);
    }
  }
}
