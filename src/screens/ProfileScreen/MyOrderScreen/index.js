
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../../../resource/Default';
import ImageHelper from '../../../resource/ImageHelper';
import {Actions} from 'react-native-router-flux';
import {strings} from '../../../assets/strings/i18n/i18n';

export default class MyOrderScreen extends Component {
  render() {
    return (
      <View style={Default.container}>
        <View
          style={{
            marginLeft: 12,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => Actions.pop()} style={{padding: 5}}>
            <Image source={ImageHelper.iconBack} />
          </TouchableOpacity>
          <Text style={[Default.text.title, {flex: 1}]}>
            {strings('helpCenter')}
          </Text>
        </View>
      </View>
    );
  }
}
