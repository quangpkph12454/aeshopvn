import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../resource/Default';
import ImageHelper from '../resource/ImageHelper';
import { Actions } from "react-native-router-flux";

export default class ViewHelpCenter extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={()=>Actions.jump('helpScreen',{data:this.props.itemData})}
        style={{
          width: Default.constants.widthScreen - 40,
          height: 62,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          alignItems:"center",
          borderColor: '#E2E2E2',
          paddingHorizontal:20

        }}>
        <Text >{this.props.itemData.title}</Text>
        <Image style={{alignItems: 'center'}} source={ImageHelper.backarrow} />
      </TouchableOpacity>
    );
  }
}
