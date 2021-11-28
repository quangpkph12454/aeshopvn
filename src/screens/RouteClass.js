import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {View, StatusBar, AsyncStorage, AppState} from 'react-native';
import Crashes, {ErrorAttachmentLog} from 'appcenter-crashes';
import AppConstants from '../functions/AppConstants';
import GlobalInfo from '../Utils/Common/GlobalInfo';
import MainApp from './MainApp';
import FlashScreen from './FlashScreen';
import SearchScreen from './SearchScreen';
import LoginScreen from './auth/Login';
import RegisterScreen from './auth/RegisterScreen';
import NotificationDetail from './Product/NotificationDetail';
import AboutUsScreen from './ProfileScreen/AboutUsScreen';
import AccountScreen from './ProfileScreen/AccountScreen';
import ForgetPassword from './ForgotPasswordScreen';
import HelpCenterScreen from './ProfileScreen/HelpCenterScreen';
import HelpScreen from './ProfileScreen/HelpCenterScreen/HelpScreen';
import PaymentCardScreen from './ProfileScreen/PaymentCardsScreen';
import MyOrderScreen from './ProfileScreen/MyOrderScreen';
import ShippingAddressScreen from './ProfileScreen/ShippingAddressScreen';
import ProductDetail from './Product/ProductDetail';
import MyCartScreen from './Oder/MyCartScreen';
import OrderDetailScreen from './Oder/Detail';
import CheckoutSuccess from './Checkout/checkoutSuccess';
import CheckoutFailed from './Checkout/checkoutFailed';
import MyOrdersScreen from './Oder';

export default class RoutesClass extends Component {
  componentWillMount() {
    this.statusBarConfig();
    Crashes.setListener({
      onBeforeSending: function (report) {
        // called after Crashes.process and before sending the crash.
        console.log('onBeforeSending');
      },
      onSendingSucceeded: function (report) {
        // called when crash report sent successfully.
        console.log('onSendingSucceeded');
      },
      onSendingFailed: function (report) {
        console.log('onSendingFailed');
      },

      shouldProcess: function (report) {
        return true; // return true if the crash report should be processed, otherwise false.
      },
      shouldAwaitUserConfirmation: function (report) {
        return false;
      },
      getErrorAttachments(report) {
        return (async () => {
          let user = await GlobalInfo.getUserInfo(); // use your async function to read text file
          let crashData = await AsyncStorage.getItem(
            AppConstants.SharedPreferencesKey.FATAL_DATA,
            null,
          );
          const fakeUser = ErrorAttachmentLog.attachmentWithText(
            JSON.stringify(user),
            'Username.txt',
          );
          const reportContent = ErrorAttachmentLog.attachmentWithText(
            JSON.stringify(report),
            'Content.txt',
          );
          const crashContent = ErrorAttachmentLog.attachmentWithText(
            crashData,
            'CrashData.txt',
          );
          return [fakeUser, reportContent, crashContent];
        })();
      },
    });
  }

  componentDidMount() {
    console.disableYellowBox = true;
    if (!AppConstants.IS_IOS) {
      AppState.addEventListener('focus', () => {
        this.statusBarConfig();
      });
    }

    let originalHandler = global.ErrorUtils.getGlobalHandler();

    async function errorHandler(e, isFatal) {
      originalHandler(e, isFatal);
    }

    global.ErrorUtils.setGlobalHandler(errorHandler);
  }

  componentWillUnmount() {
    AppState.removeEventListener('focus');
  }

  statusBarConfig = () => {
    if (!AppConstants.IS_IOS) {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('dark-content');
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          hidden={false}
          backgroundColor={'red'}
          barStyle="light-content"
        />
        <Router>
          <Stack key="root">
            <Scene
              key={'flashScreen'}
              component={FlashScreen}
              hideNavBar={true}
              initial={true}
            />
            {/*<Scene key={'test'} component={Test} hideNavBar={true}  initial={true}/>*/}
            <Scene key="mainApp" component={MainApp} hideNavBar={true} />
            <Scene
              key="searchScreen"
              component={SearchScreen}
              hideNavBar={true}
            />
            <Scene
              key="loginScreen"
              component={LoginScreen}
              hideNavBar={true}
            />
            <Scene
              key="registerScreen"
              component={RegisterScreen}
              hideNavBar={true}
            />
            <Scene
              key="forgot_password"
              component={ForgetPassword}
              hideNavBar={true}
            />
            <Scene
              key="newsDetail"
              component={NotificationDetail}
              hideNavBar={true}
            />
            <Scene
              key="aboutUsScreen"
              component={AboutUsScreen}
              hideNavBar={true}
            />
            <Scene
              key="accountScreen"
              component={AccountScreen}
              hideNavBar={true}
            />
            <Scene
              key="helpCenterScreen"
              component={HelpCenterScreen}
              hideNavBar={true}
            />
            <Scene key="helpScreen" component={HelpScreen} hideNavBar={true} />
            <Scene
              key="myOrderScreen"
              component={MyOrderScreen}
              hideNavBar={true}
            />
            <Scene
              key="paymentCardScreen"
              component={PaymentCardScreen}
              hideNavBar={true}
            />
            <Scene
              key="shippingAddressScreen"
              component={ShippingAddressScreen}
              hideNavBar={true}
            />
            <Scene
              key="productDetail"
              component={ProductDetail}
              hideNavBar={true}
            />
            <Scene
              key="myCartScreen"
              component={MyCartScreen}
              hideNavBar={true}
            />
            <Scene
              key="oderDetailScreen"
              component={OrderDetailScreen}
              hideNavBar={true}
            />
            <Scene
              key="myOrderScreen"
              component={MyOrdersScreen}
              hideNavBar={true}
            />
            <Scene
              key="checkoutSuccess"
              component={CheckoutSuccess}
              hideNavBar={true}
            />
            <Scene
              key="checkoutFailed"
              component={CheckoutFailed}
              hideNavBar={true}
            />
          </Stack>
        </Router>
      </View>
    );
  }
}
