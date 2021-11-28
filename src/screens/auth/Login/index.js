import React, {Component} from 'react';
import {
  AsyncStorage,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ColorStyle from '../../../assets/colors/Colors';
import {Actions} from 'react-native-router-flux';
import CheckBox from '@react-native-community/checkbox';
import Default from '../../../functions/AppStyles';
import ImageHelper from '../../../assets/Images';
import {strings} from '../../../assets/strings/i18n/i18n';
import ToolbarAuth from '../../../components/toolbar/ToolbarAuth';
import styles from './styles';
const username = 'hieunvmob@gmail.com';
const password = '1234567';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      userName: '',
      password: '',
      err: '',
    };
  }

  render() {
    return (
      <View style={Default.container}>
        <ToolbarAuth title={strings('login')} />
        <View style={styles.body}>
          <View>
            <TextInput
              style={Default.textInput}
              placeholder={strings('username')}
              onChangeText={v => this.setState({userName: v})}
              value={this.state.userName}
              keyboardType={'email-address'}
              placeholderTextColor={ColorStyle.gray}
            />
            <Text
              style={styles.textErr}>
              {this.state.err.username}
            </Text>
          </View>
          <View>
            <TextInput
              style={[Default.textInput]}
              placeholder={strings('password')}
              onChangeText={v => this.setState({password: v})}
              value={this.state.password}
              secureTextEntry={!this.state.isSelected}
              placeholderTextColor={ColorStyle.gray}
            />
            <Text
              style={styles.textErr}>
              {this.state.err.password}
            </Text>
          </View>
          <View
            style={styles.viewCheckBox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={a => this.setState({isSelected: a})}
                style={{alignSelf: 'center'}}
              />
              <Text style={{textAlign: 'center'}}>
                {strings('show_password')}
              </Text>
            </View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => Actions.jump('forgot_password')}>
              <Text style={[Default.text.textDef, {textAlign: 'right'}]}>
                {strings('forgot_password')}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            // onPress={() => Actions.jump('mainApp')}
            onPress={() => this.validateEmail()}
            style={Default.button.buttonW80}>
            <Text style={Default.text.textButton}>
              {strings('login').toUpperCase()}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: Default.constants.X * 0.8,
            }}>
            <Text style={Default.text.text16}>
              {strings('transfer_register')}
            </Text>
            <TouchableOpacity onPress={() => Actions.jump('registerScreen')}>
              <Text style={[Default.text.text16, {color: 'red'}]}>
                {strings('register')}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.viewFBGG
            }>
            <TouchableOpacity style={Default.button.buttonFBGG}>
              <Image source={ImageHelper.gg} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[Default.button.buttonFBGG, {backgroundColor: '#3D5A96'}]}>
              <Image source={ImageHelper.fb} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  async validateEmail() {
    let error = {};
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const reg_phone = /^[0]?[789]\d{9}$/;
    if (this.state.userName.length === 0) {
      error.username = strings('valid_user');
    } else if (this.state.userName.length < 6) {
      error.username = strings('valid_user1');
    } else if (reg.test(this.state.userName) === false) {
      error.username = strings('valid_email');

      if (reg_phone.test(this.state.userName) === false) {
        error.username = strings('valid_phone');
      }
    }
    if (this.state.password.length === 0) {
      error.password = strings('valid_password');
    } else if (this.state.password.length < 6) {
      error.password = strings('valid_password1');
    }
    if (username !== this.state.userName) {
      error.username = strings('valid_user2');
    }
    if (password !== this.state.password) {
      error.password = strings('valid_password2');
    }
    this.setState({err: error});
    for (let prop in error) {
      if (error.hasOwnProperty(prop)) {
        return false;
      }
    }

    if (JSON.stringify(error) === JSON.stringify({})) {
      let save = {};
      save.username = this.state.username;
      save.password = this.state.password;
      await AsyncStorage.setItem('user', 'hieu', null);
      setTimeout(() => {
        Actions.jump('mainApp');
      }, 200);
    }
  }
}
