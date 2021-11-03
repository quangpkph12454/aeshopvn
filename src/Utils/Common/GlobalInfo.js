import TokenGuad from '../Auth/TokenGuad';
import {Platform} from 'react-native';
import React from 'react';

export default class GlobalInfo {
  static globalInfo = null;
  static userInfo = {};
  static employeeInfo = {};
  static sessionId = '';
  static sessionLogId = '';
  static language = 'vi';
  static notificationCount = 0;

  static getInstance() {
    if (GlobalInfo.globalInfo == null) {
      GlobalInfo.globalInfo = new GlobalInfo();
    }
    return this.globalInfo;
  }

  async getUserLogin() {
    if (GlobalInfo.userInfo == null) {
      GlobalInfo.userInfo = await TokenGuad.getInstance().getCurrentUser();
    }
    return GlobalInfo.userInfo;
  }

  async getEmployeeInfo() {
    if (GlobalInfo.employeeInfo == null) {
      GlobalInfo.employeeInfo = await TokenGuad.getInstance().getEmployeeInfo();
    }
    return GlobalInfo.employeeInfo;
  }

  async logout() {
    GlobalInfo.userInfo = {};
    GlobalInfo.sessionId = '';
    return await TokenGuad.getInstance().logout();
  }

  static initApiEndpoint(urlEndpoint) {
    return Constants.host + urlEndpoint;
  }

  static clearData() {
    GlobalInfo.userInfo = {};
    GlobalInfo.employeeInfo = {};
  }

  static getDevicePlatform() {
    return Platform.OS;
  }
}
