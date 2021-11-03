import AppConstants from '../Config/AppConstants';
import SharePreferenceHelper from './SharePreferenceHelper';
// import Constants from '../Config/Constants';
// import Styles from '../../Theme/Styles';
import _ from 'lodash';
import {View} from 'react-native';
import {IGNORED_TAGS} from 'react-native-render-html/src/HTMLUtils';
import React from 'react';
export default {
  tags: _.without(
    IGNORED_TAGS,
    'table',
    'caption',
    'col',
    'colgroup',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
  ),

  renderers: {
    table: (x, c) => <View style={Styles.tableColumnStyle}>{c}</View>,
    col: (x, c) => <View style={Styles.tableColumnStyle}>{c}</View>,
    colgroup: (x, c) => <View style={Styles.tableRowStyle}>{c}</View>,
    tbody: (x, c) => <View style={Styles.tableColumnStyle}>{c}</View>,
    tfoot: (x, c) => <View style={Styles.tableRowStyle}>{c}</View>,
    th: (x, c) => <View style={Styles.thStyle}>{c}</View>,
    thead: (x, c) => <View style={Styles.tableRowStyle}>{c}</View>,
    caption: (x, c) => <View style={Styles.tableColumnStyle}>{c}</View>,
    tr: (x, c) => <View style={Styles.tableRowStyle}>{c}</View>,
    td: (x, c) => <View style={Styles.tdStyle}>{c}</View>,
  },
  getViewHeight(event) {
    return event.nativeEvent.layout.height;
  },
  getRandomColor() {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    );
  },
  convertBase64ToImg(base64Value) {
    return 'data:image/png;base64,' + base64Value;
  },

  checkIsNull(inputData) {
    return !(inputData !== undefined && inputData !== null);
  },

  checkStringIsNull(inputData) {
    return inputData === undefined || inputData == null || inputData === '';
  },

  subString(input, length) {
    if (this.checkIsNull(length)) {length = 50;}
    input = input.substr(0, length) + '...';
    return input;
  },
  // dismissKeyboard(){
  //     Keyboard.dismiss()
  // },
  formatMoney(amount, decimalCount = 2, decimal = '.', thousands = ',') {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? '-' : '';

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : '')
      );
    } catch (e) {
      console.log(e);
    }
  },

  formatInt(amount, thousands = ',') {
    try {
      const negativeSign = amount < 0 ? '-' : '';

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(0)),
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
      );
    } catch (e) {
      console.log(e);
    }
  },
  getAvartarKey(callback) {
    SharePreferenceHelper.getInstance().retrieveDataWithCallback(
      AppConstants.USER_ENCRYPTION,
      '',
      value => {
        let key = `${Constants.avatarKey}-${value}`;
        callback(key);
      },
    );
  },

  getAvatar(key, callback) {
    SharePreferenceHelper.getInstance().retrieveDataWithCallback(
      key,
      null,
      avatar => {
        callback(avatar);
      },
    );
  },

  getPreviousMonth() {
    let date = new Date();
    date.setMonth(0, 1);
    return date;
  },

  shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }

    if (
      typeof objA !== 'object' ||
      objA === null ||
      typeof objB !== 'object' ||
      objB === null
    ) {
      return false;
    }

    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    let bHasOwnProperty = hasOwnProperty.bind(objB);
    for (let i = 0; i < keysA.length; i++) {
      if (
        !bHasOwnProperty(keysA[i]) ||
        JSON.stringify(objA[keysA[i]]) !== JSON.stringify(objB[keysA[i]])
      ) {
        console.log(keysA[i] + ' ' + objA[keysA[i]] + ' key ' + objB[keysA[i]]);
        return false;
      }
    }
    return true;
  },

  shallowCompareState(instance, nextState) {
    return !this.shallowEqual(instance.state, nextState);
  },

  shallowCompareProps(instance, nextProps) {
    return !this.shallowEqual(instance.props, nextProps);
  },

  shallowCompare(instance, nextState, nextProps) {
    return (
      !this.shallowEqual(instance.state, nextState) ||
      !this.shallowEqual(instance.props, nextProps)
    );
  },
  objToQueryString(obj) {
    const keyValuePairs = [];
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      keyValuePairs.push(
        `${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(
          Object.values(obj)[i],
        )}`,
      );
    }
    return keyValuePairs.join('&');
  },
};
