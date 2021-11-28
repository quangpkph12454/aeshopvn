import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import ColorStyle from '../../assets/colors/Colors';
import OtpInputs from 'react-native-otp-inputs';
import {Actions} from 'react-native-router-flux';
import Default from '../../functions/AppStyles';
import ImageHelper from '../../assets/Images';
import {strings} from '../../assets/strings/i18n/i18n';
import ToolbarAuth from '../../components/toolbar/ToolbarAuth';
import styles from "./styles";

let checkEmailId = -1;
let checkPasswordId = -1;
let checkConfirmId = -1;
let TimeResenOTP = 120;

const sty = {
  borderColor: ColorStyle.tabActive,
  backgroundColor: ColorStyle.tabActive,
};
export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      validEmail: false,
      validPass: false,
      validConfirmPass: false,
      eyeSatatus: false,
      setStep: 1,
      minute: 2,
      second: 0,
      checkPhoneAndGmail: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      TimeResenOTP = TimeResenOTP - 1;
      if (TimeResenOTP >= 0) {
        this.setState({
          minute: Math.floor(TimeResenOTP / 60 === 60 ? 0 : TimeResenOTP / 60),
        });
        this.setState({second: TimeResenOTP % 60});
      }
    }, 1000);
  }

  render() {
    return (
      <View style={Default.container}>
        <ToolbarAuth title={strings('forgot_password')} />
        {this.state.setStep === 1
          ? this.renderStep(1)
          : this.state.setStep === 2
          ? this.renderStep(2)
          : this.renderStep(3)}
      </View>
    );
  }

  renderStep(step) {
    return (
      <View>
        <View style={styles.contenLineCount}>
          <Text
            style={[
              styles.viewNumCount,
              this.state.setStep === 1 ? sty : {color: '#333333'},
            ]}>
            1
          </Text>
          <View style={styles.line} />
          <Text
            style={[
              styles.viewNumCount,
              this.state.setStep === 2 ? sty : {color: '#333333'},
            ]}>
            2
          </Text>
          <View style={styles.line} />
          <Text
            style={[
              styles.viewNumCount,
              this.state.setStep === 3 ? sty : {color: '#333333'},
            ]}>
            3
          </Text>
        </View>
        <View
          style={{
            width: Default.constants.widthScreen,
          }}>
          {this.state.setStep === 1 ? (
            <View>
              <Text
                style={{
                  width: Default.constants.widthScreen - 40,
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}>
                {strings('txtForgot')}
              </Text>
              <TextInput
                style={[Default.textInput, {marginHorizontal: 20}]}
                placeholder={strings('username')}
                placeholderTextColor={ColorStyle.gray}
              />
            </View>
          ) : this.state.setStep === 2 ? (
            <View
              style={{
                width: Default.constants.widthScreen,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, color: 'black'}}>
                {strings('txtMaOTP')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={
                    this.state.checkPhoneAndGmail
                      ? ImageHelper.email
                      : ImageHelper.phone_moible
                  }
                  style={{width: 30, height: 30}}
                />
                <Text style={{fontSize: 36, color: 'black'}}>0123456789</Text>
              </View>
              {this.renderOTPVerify()}
              {this.renderResendOTP()}
              <View />
            </View>
          ) : (
            this.state.setStep === 3 && (
              <View>
                <TextInput
                  style={[Default.textInput, {marginHorizontal: 20}]}
                  placeholder={strings('password')}
                  placeholderTextColor={ColorStyle.gray}
                />
                <TextInput
                  style={[
                    Default.textInput,
                    {marginHorizontal: 20, marginTop: 10},
                  ]}
                  placeholder={strings('password_re')}
                  placeholderTextColor={ColorStyle.gray}
                />
              </View>
            )
          )}
        </View>

        <TouchableOpacity
          style={[Default.button.buttonW80, {marginHorizontal: 20}]}
          onPress={() => {
            this.state.setStep === 1
              ? this.setState({setStep: 2})
              : this.state.setStep === 2
              ? this.setState({setStep: 3})
              : this.state.setStep === 3 && Actions.jump('loginScreen');
          }}>
          <Text style={Default.text.textButton}>
            {strings(this.state.setStep === 3 ? 'changeForPassword' : 'next')}
          </Text>
        </TouchableOpacity>
        {/*{this.state.setStep === 2 && this.renderResendOTP()}*/}
      </View>
    );
  }

  renderResendOTP() {
    return (
      <View style={styles.reSend}>
        <TouchableOpacity
          onPress={() => {
            TimeResenOTP = 10;
            Alert.alert('Resend code', 'please check');
          }}>
          <Text style={{textDecorationLine: 'underline', textAlign: 'center'}}>
            {strings('reSenOTPtext')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderOTPVerify() {
    let minute = '0' + this.state.minute;
    let second =
      this.state.second / 10 >= 1 ? this.state.second : '0' + this.state.second;
    let time = minute + ':' + second;
    return (
      <View style={styles.OTPVerify}>
        <OtpInputs
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
          }}
          inputStyles={styles.otpInputs
          }
          handleChange={code => console.log(code)}
          numberOfInputs={6}
        />
        <Text style={{textAlign: 'center', marginTop: 16}}>{time}</Text>
      </View>
    );
  }

  // renderChangePassword() {
  //   return (
  //     <View style={{width: AppConstants.width}}>
  //       {this.renderInput(
  //         this.state.password,
  //         'password',
  //         strings('password'),
  //         true,
  //         this.state.validPass,
  //         () => {
  //           clearTimeout(checkPasswordId);
  //           checkPasswordId = setTimeout(() => {
  //             this.checkPassword();
  //           }, 200);
  //         },
  //       )}
  //       {this.renderInput(
  //         this.state.confirmPassword,
  //         'confirmPassword',
  //         strings('confirmPass'),
  //         true,
  //         this.state.validConfirmPass,
  //         () => {
  //           clearTimeout(checkConfirmId);
  //           checkConfirmId = setTimeout(() => {
  //             this.checkConfirmPass();
  //           }, 200);
  //         },
  //       )}
  //     </View>
  //   );
  // }

  //   checkEmail() {
  //     let param = {
  //       email: this.state.email,
  //     };
  //     AccountHandle.getInstance().checkExistedEmail(param, (isSuccess, data) => {
  //       let valid = false;
  //       if (isSuccess && data != null) {
  //         valid = data.data;
  //       }
  //       this.setState({validEmail: valid});
  //     });
  //   }
  //   checkPassword() {
  //     let password = this.state.password;
  //     let result = false;
  //     if (password.length >= 6) {
  //       result = true;
  //     }
  //     this.setState({validPass: result});
  //   }
  //   checkConfirmPass() {
  //     let password = this.state.password;
  //     let confirmPass = this.state.confirmPassword;
  //     let result = false;
  //     if (this.state.validPass && password === confirmPass) {
  //       result = true;
  //     }
  //     this.setState({validConfirmPass: result});
  //   }
}
