import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../assets/Images';
import Default from '../../functions/AppStyles';
import {strings} from '../../assets/strings/i18n/i18n';
export default class ToolbarAuth extends Component {
  render() {
    return (
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
          {this.props.title}
        </Text>
      </View>
    );
  }
}
