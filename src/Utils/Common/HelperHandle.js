import ExecuteHttp from '../Http/ExecuteHttp';
import ResultCode from '../Http/ResultCode';
import {Actions} from 'react-native-router-flux';
import TokenGuad from '../Auth/TokenGuad';
import GlobalInfo from './GlobalInfo';
import {strings} from '../../i18n/i18n';
import GlobalUtil from './GlobalUtil';
import LogUtils from '../LogUtils';

/**
 * @Created by DucND/Steam
 * The helper class for execute Http request
 */
export default class HelperHandle {
  static helperHandle = null;

  static getInstance() {
    if (HelperHandle.helperHandle == null) {
      HelperHandle.helperHandle = new HelperHandle();
    }
    return this.helperHandle;
  }

  async tokenExpire() {
    //Clear token
    //Clear user data
    //Navigator login screen
    //alert(strings('session_expire'));
    GlobalInfo.clearData();
    await TokenGuad.getInstance().logout();

    Actions.popTo('login');
  }

  /**
   * Maybe replace name of resultCode
   * @param responseData
   * @returns {*}
   */
  getResultCodeValue(responseData) {
    if (responseData !== undefined) {
      return responseData.errorCode;
    }
    return undefined;
  }

  /**
   * Maybe replace name of resultCode and message
   * @param resultCode
   * @param message
   * @returns {{resultCode: *, message: *}}
   */
  setResultResponse(outputObj, resultCode, message) {
    if (!GlobalUtil.checkIsNull(outputObj)) {
      outputObj.errorCode = resultCode;
      outputObj.errorMsg = message;
      return outputObj;
    } else {
      return {
        errorCode: resultCode,
        errorMsg: message,
      };
    }
  }

  /*async executeAPIWithoutHandle(method, urlEndpoint, requestData, callbackFunction) {
        let responseData = {}
        switch (method) {
            case "GET_WITHOUT_HANDLE":
                responseData = await this.executeGetOriginalResponse(urlEndpoint);
                break;
            case "GET":
                responseData = await this.executeGetOriginalResponse(urlEndpoint);
                break;
            case "POST":
                responseData = await this.executePost(urlEndpoint, requestData);
                break;
        }
        if (!GlobalUtil.checkIsNull(responseData)) {
            return callbackFunction(true, responseData, '')
        } else {
            //DucND: Don't something when error. Maybe to kill someone =))
            callbackFunction(false, {}, strings('notification_get_data_error'))
        }
    }*/

  async executeAPI(method, urlEndpoint, requestData, callbackFunction) {
    let responseData = {};
    switch (method) {
      case 'GET_WITHOUT_HANDLE':
        responseData = await this.executeGetOriginalResponse(urlEndpoint);
        break;
      case 'GET':
        responseData = await this.executeGet(urlEndpoint);
        break;
      case 'POST':
        responseData = await this.executePost(urlEndpoint, requestData);
        break;
    }

    if (!GlobalUtil.checkIsNull(responseData)) {
      switch (this.getResultCodeValue(responseData)) {
        case ResultCode.SUCCESS:
          return callbackFunction(true, responseData, '');
        default:
          return callbackFunction(false, responseData, responseData.errorMsg);
      }
    } else {
      //DucND: Don't something when error. Maybe to kill someone =))
      callbackFunction(false, {}, strings('notification_get_data_error'));
    }
  }

  async executePostAuth(urlEndpoint, requestData) {
    return await ExecuteHttp.getInstance()
      .authService(GlobalInfo.initApiEndpoint(urlEndpoint), requestData)
      .then(responseJson => {
        if (!GlobalUtil.checkIsNull(responseJson)) {
          let cookies = responseJson.cookies;
          TokenGuad.getInstance().setAccessToken(cookies);
          return responseJson;
        } else {
          return this.setResultResponse(
            responseJson,
            ResultCode.INTERNAL_SERVER_ERROR,
            ResultCode.getMessage(ResultCode.INTERNAL_SERVER_ERROR),
          );
        }
      });
  }

  async executePost(urlEndpoint, requestData) {
    return await ExecuteHttp.getInstance()
      .post(GlobalInfo.initApiEndpoint(urlEndpoint), requestData)
      .then(responseJson => {
        if (!GlobalUtil.checkIsNull(responseJson)) {
          switch (this.getResultCodeValue(responseJson)) {
            case ResultCode.BAD_REQUEST:
              return this.tokenExpire();
            default:
              return responseJson;
          }
        } else {
          return this.setResultResponse(
            responseJson,
            ResultCode.INTERNAL_SERVER_ERROR,
            ResultCode.getMessage(ResultCode.INTERNAL_SERVER_ERROR),
          );
        }
      });
  }

  async executeGet(urlEndpoint) {
    return await ExecuteHttp.getInstance()
      .get(GlobalInfo.initApiEndpoint(urlEndpoint))
      .then(responseJson => {
        if (!GlobalUtil.checkIsNull(responseJson)) {
          if (
            this.getResultCodeValue(responseJson) === ResultCode.BAD_REQUEST
          ) {
            return this.tokenExpire();
          } else {
            return responseJson;
          }
        } else {
          return this.setResultResponse(
            responseJson,
            ResultCode.INTERNAL_SERVER_ERROR,
            ResultCode.getMessage(ResultCode.INTERNAL_SERVER_ERROR),
          );
        }
      });
  }

  async executeGetOriginalResponse(urlEndpoint) {
    return await ExecuteHttp.getInstance()
      .getOriginalResponse(GlobalInfo.initApiEndpoint(urlEndpoint))
      .then(responseJson => {
        if (!GlobalUtil.checkIsNull(responseJson)) {
          console.log(responseJson);
          responseJson = this.setResultResponse(
            responseJson,
            ResultCode.SUCCESS,
            ResultCode.getMessage(ResultCode.SUCCESS),
          );
          return responseJson;
        } else {
          return this.setResultResponse(
            responseJson,
            ResultCode.INTERNAL_SERVER_ERROR,
            ResultCode.getMessage(ResultCode.INTERNAL_SERVER_ERROR),
          );
        }
      });
  }
}
