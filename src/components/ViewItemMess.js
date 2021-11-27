import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Default from '../resource/Default';
import ColorStyle from '../resource/ColorStyle';

export default class ViewItemMess extends Component {
  render() {
    console.log(this.props.textMess);
    return (
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
        <Image
          source={this.props.itemData.avatar}
          style={{
            width: Default.constants.X,
            height: Default.constants.X,
            borderRadius: Default.constants.X,
          }}
        />
        <View
          style={{
            backgroundColor: ColorStyle.tabWhite,
            borderRadius: 10,
            width: Default.constants.X * 6,
            marginLeft: Default.constants.X * 0.5,
            padding:10
          }}>
          <Text style={[Default.text.textDef,{lineHeight:20}]}>{this.props.itemData.textMess}</Text>
        </View>
      </View>
    );
  }
}
