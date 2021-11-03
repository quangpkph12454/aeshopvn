import React, {Component} from 'react';
import {
  AsyncStorage,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Default from '../../../resource/Default';
import ImageHelper from '../../../resource/ImageHelper';
import ColorStyle from '../../../resource/ColorStyle';
import {Actions} from 'react-native-router-flux';
import CheckBox from '@react-native-community/checkbox';
import { strings } from "../../../Utils/i18n/i18n";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      userName: '',
      password: '',
      password_re: '',
      err: '',
    };
  }
  render() {
    return (
      <View style={Default.container}>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{width: 20, height: 20, margin: 10}}>
            <Image
              style={{width: 12, height: 20}}
              source={ImageHelper.iconBack}
            />
          </TouchableOpacity>
          <Text style={[Default.fontTitle, {marginLeft: 16}]}>
            {strings('register')}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            alignItems: 'center',
            marginTop: Default.constants.X * 2,
          }}>
          <View>
            <TextInput
              style={Default.textInput}
              placeholder={strings('username')}
              placeholderTextColor={ColorStyle.gray}
              onChangeText={v => this.setState({userName: v})}
              value={this.state.userName}
            />
            <Text
              style={{
                marginLeft: Default.constants.X * 0.3,
                marginVertical: Default.constants.X * 0.1,
                color: 'red',
              }}>
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
              style={{
                marginLeft: Default.constants.X * 0.3,
                marginVertical: Default.constants.X * 0.1,
                color: 'red',
              }}>
              {this.state.err.password}
            </Text>
          </View>
          <View>
            <TextInput
              style={[Default.textInput]}
              placeholder={strings('password_re')}
              onChangeText={v => this.setState({password_re: v})}
              value={this.state.password_re}
              secureTextEntry={!this.state.isSelected}
              placeholderTextColor={ColorStyle.gray}
            />
            <Text
              style={{
                marginLeft: Default.constants.X * 0.3,
                marginVertical: Default.constants.X * 0.1,
                color: 'red',
              }}>
              {this.state.err.password_re}
            </Text>
          </View>
          <View
            style={{
              width: Default.constants.widthScreen - 20,
              flexDirection: 'row',
              marginTop: 10,
              marginHorizontal: 20,
              justifyContent: 'flex-start',
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
            onPress={() => this.validate()}
            style={Default.button.buttonW80}>
            <Text style={Default.text.textButton}>
              {strings('register').toUpperCase()}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: Default.constants.X * 0.8,
            }}>
            <Text style={Default.text.text16}>{strings('transfer_login')}</Text>
            <TouchableOpacity onPress={() => Actions.jump('loginScreen')}>
              <Text style={[Default.text.text16, {color: 'red'}]}>
                {strings('login')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  async validate() {
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
    } else if (this.state.password !== this.state.password_re) {
      error.password_re = strings('valid_password3');
    }
    // if (username !== this.state.userName) {
    //   error.username = strings('valid_user2');
    // }
    // if (password !== this.state.password) {
    //   error.password = strings('valid_password2');
    // }
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
      await AsyncStorage.setItem('user', JSON.stringify(save), null);
      setTimeout(() => {
        Actions.jump('mainApp');
      }, 200);
    }
  }
}
