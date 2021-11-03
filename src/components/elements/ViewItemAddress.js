import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../../resource/Default';
import ColorStyle from '../../resource/ColorStyle';
import CheckBox from '@react-native-community/checkbox';
import ImageHelper from '../../resource/ImageHelper';
import {strings} from '../../Utils/i18n/i18n';

export default class ViewItemAddress extends Component {
  render() {
    let data = this.props.itemData;
    return (
      <View
        style={{
          width: Default.constants.widthScreen - 40,
          backgroundColor: ColorStyle.tabWhite,
          marginBottom: 20,
        }}>
        <View style={{marginHorizontal: 20, marginVertical: 18}}>
          <Text>{data.name}</Text>
          <Text
            style={{
              marginTop: 18,
              maxWidth: Default.constants.widthScreen - 100,
            }}>
            {data.address} {data.addDistrict} {data.addCity}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              value={data.status}
              // onValueChange={a => this.setState({isSelected: a})}
              style={{alignSelf: 'center'}}
            />
            <Text style={{textAlign: 'center'}}>
              {strings('show_password')}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: 'red',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ImageHelper.iconClose}
            style={{width: 15, height: 15}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: '#24FF00',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={ImageHelper.iconTool}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
