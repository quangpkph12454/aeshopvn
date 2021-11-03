import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Default from '../../resource/Default';
import ColorStyle from '../../resource/ColorStyle';

export default class ViewItemSize extends Component {
  render() {
    console.log(this.props.itemData.size_name);
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width:50,
          height:50,
          borderRadius: 100,
          borderColor: ColorStyle.tabInactive,
          borderWidth: 1,
        }}>
        <Text style={[Default.text.text16]}>
          {this.props.itemData.size_name}
        </Text>
      </TouchableOpacity>
    );
  }
}
