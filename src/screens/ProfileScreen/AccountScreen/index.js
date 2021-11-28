
import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Default from '../../../functions/AppStyles';
import TitleBar from '../../../components/TitleBar';
import ColorStyle from '../../../assets/colors/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Actions} from 'react-native-router-flux';
import { strings } from "../../../assets/strings/i18n/i18n";

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dateOfBirth: '',
      phone: '',
      password: '',
      password_re: '',
    };
  }

  render() {
    return (
      <View style={Default.container}>
        <TitleBar title={strings('myAccount')} iconSearch={true} />
        <View
          style={{
            marginTop: 60,
            marginHorizontal: 20,
            width: Default.constants.widthScreen - 40,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={Default.text.text16}>
                {strings('infomationUser')}
              </Text>
              <Text
                onPress={() => this.RBSheet.open()}
                style={[Default.text.text16, {color: 'red'}]}>
                {strings('changeForPassword')}
              </Text>
            </View>
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('name')}
              onChangeText={v => this.setState({name: v})}
              value={this.state.name}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('dateOfBirth')}
              onChangeText={v => this.setState({dateOfBirth: v})}
              value={this.state.dateOfBirth}
              placeholderTextColor={ColorStyle.gray}
            />
            <TextInput
              style={[Default.textInput, {marginTop: 20}]}
              placeholder={strings('phone')}
              onChangeText={v => this.setState({phone: v})}
              value={this.state.phone}
              placeholderTextColor={ColorStyle.gray}
            />
          </View>
        </View>
        {this.renderChangePassword()}
      </View>
    );
  }
  renderChangePassword() {
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={500}
        openDuration={250}
        customStyles={{
          container: {},
        }}>
        <View
          style={{
            width: Default.constants.widthScreen - 40,
            justifyContent: 'space-between',
            backgroundColor: '#F9F9F9',
            marginHorizontal: 20,
          }}>
          <Text
            onPress={() => Actions.jump('forgot_password')}
            style={[
              Default.text.textAbout,
              {marginVertical: 15, textAlign: 'center'},
            ]}>
            {strings('changeForPassword')}
          </Text>
          <TextInput
            style={[Default.textInput, {marginTop: 20}]}
            placeholder={strings('phone')}
            onChangeText={v => this.setState({phone: v})}
            value={this.state.phone}
            placeholderTextColor={ColorStyle.gray}
          />
          <Text
            style={{
              color: ColorStyle.gray,
              width: Default.constants.widthScreen - 40,
              marginTop: 20,
              textAlign: 'right',
            }}>
            {strings('forgot_password')}
          </Text>
          <TextInput
            style={[Default.textInput, {marginTop: 20}]}
            placeholder={strings('phone')}
            onChangeText={v => this.setState({phone: v})}
            value={this.state.phone}
            placeholderTextColor={ColorStyle.gray}
          />
          <TextInput
            style={[Default.textInput, {marginTop: 20}]}
            placeholder={strings('phone')}
            onChangeText={v => this.setState({phone: v})}
            value={this.state.phone}
            placeholderTextColor={ColorStyle.gray}
          />
          <TouchableOpacity style={[Default.button.buttonW80, {marginTop: 40}]}>
            <Text style={Default.text.textButton}>
              {strings('changeForPassword')}
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    );
  }
}
