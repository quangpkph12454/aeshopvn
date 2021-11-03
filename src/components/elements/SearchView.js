import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageHelper from '../../resource/ImageHelper';
import Default from '../../resource/Default';
import { Actions } from "react-native-router-flux";

export default class SearchView extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => Actions.jump('searchScreen')}
        style={{
          width: Dimensions.get('window').width * 0.7,
          height: Default.constants.X * 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'flex-start',
          shadowColor: 'rgba(0, 0, 0, 0.05)',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 20,
        }}>

        <Image
          source={ImageHelper.search}
          style={{
            width: Default.constants.X * 0.3,
            height: Default.constants.X * 0.3,
            marginHorizontal: 13,
          }}
        />
        <Text
          style={{
            width: Default.constants.X * 4,
            height: Default.constants.X * 0.5,
            fontSize: 14,
            textAlign: 'left',
            alignItems: 'center',
          }}>
          Bạn muốn tìm ?
        </Text>
      </TouchableOpacity>
    );
  }
}
