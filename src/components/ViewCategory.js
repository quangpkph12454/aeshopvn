import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default class ViewCategory extends Component {
  render() {
    return (
      <TouchableOpacity
        // onPress={()=>Actions.jump}
        style={{
          flex: 1,
          width: 100,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 5,
          paddingHorizontal: 19,
          marginBottom: 30,
        }}>
        <Image
          source={this.props.itemData.icon}
          style={{width: 30, height: 30, marginBottom: 10}}
        />
        <Text style={{fontSize: 13, textAlign: 'center'}}>
          {this.props.itemData.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
