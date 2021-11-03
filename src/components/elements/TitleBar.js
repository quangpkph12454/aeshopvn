import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImageHelper from '../../resource/ImageHelper';
import Default from '../../resource/Default';
import ColorStyle from '../../resource/ColorStyle';

export default class TitleBar extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            marginHorizontal: 12,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{width: 20, height: 20}}>
            <Image
              style={{width: 10, height: 16}}
              source={ImageHelper.iconBack}
            />
          </TouchableOpacity>
          <Text style={[Default.text.title, {flex: 1}]}>
            {this.props.title}
          </Text>
          <TouchableOpacity
            onPress={() => Actions.jump('searchScreen')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 20, height: 17}}
              source={ImageHelper.search}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
