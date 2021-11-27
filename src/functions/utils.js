import ReactNative, {Alert, UIManager} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

const addCommas = (num, style) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, style);
};
const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '');

export function phoneTest(phoneNumber) {
  return /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{5,14}$/.test(phoneNumber);
}

export function convertCountdownTime(seconds) {
  if (!seconds || seconds <= 0) return '00:00';

  const minute = Math.floor(seconds / 60);
  const second = Math.floor(seconds % 60);

  const _m = minute < 10 ? ['0', minute].join('') : minute.toString();
  const _s = second < 10 ? ['0', second].join('') : second.toString();

  return [_m, _s].join(':');
}

export function showAlert(msg, {close, needCheckDuplicate = true} = {}) {
  setTimeout(() => {
    Alert.alert('MyKid', msg, [
      {
        text: String.accept,
        onPress: () => {
          if (close) {
            close();
          }
        },
      }]);
  }, 100);
}

export function showConfirmation(msg, {acceptStr, cancelStr, response} = {}) {
  // Alert.alert(VersionControl.APP_NAME, msg, [
  //   {
  //     text: acceptStr || String.accept,
  //     onPress: () => {
  //       if (response) {
  //         response(true);
  //       }
  //     },
  //   }, {
  //     text: cancelStr || String.cancel,
  //     onPress: () => {
  //       if (response) {
  //         response(false);
  //       }
  //     },
  //   },
  // ]);
}

export function showLoading(ref, msg) {
  if (!ref || ref.current === undefined) {
    return;
  }
  if (ref.current) {
    ref.current.show(msg);
  } else {
    ref.show(msg);
  }
}

export function hideLoading(ref) {
  if (!ref) {
    return;
  }
  if (ref.current) {
    ref.current.hide();
  } else {
    ref.hide();
  }
}

export function formatMoney(value, style) {
  return addCommas(removeNonNumeric(value), style ? style : '.');
}

export function callNativeFunction(ref, viewId, func, args = []) {
  UIManager.dispatchViewManagerCommand(
    ReactNative.findNodeHandle(ref),
    UIManager.getViewManagerConfig(viewId).Commands[func],
    args,
  );
}

export function keepScreenAwake(awake = true) {
  if (awake) {
    KeepAwake.activate();
  } else {
    KeepAwake.deactivate();
  }
}

export function generateRandomId(length = 10) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function isEmptyObject(obj) {
  return !!obj && obj.constructor === Object && Object.keys(obj).length === 0;
}

export function sortByName(list) {
  list.sort(function(a, b) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  });
}
