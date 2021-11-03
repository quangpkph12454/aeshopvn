import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Default from '../../resource/Default';
import {Actions} from 'react-native-router-flux';

export default class ViewNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.ItemProduct,
    };
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Actions.jump('newsDetail', {node: this.state.data});
        }}
        style={[
          Default.borderRadius10,
          {
            flex: 1,
            flexDirection: 'row',
            marginBottom: 20,
            marginHorizontal: 20,
            backgroundColor: '#FFFFFF',
          },
        ]}>
        <Image
          style={{
            width: Default.constants.X * 2.5,
            height: Default.constants.X * 2.5,
            margin: 10,
          }}
          source={this.state.data.images}
        />
        <View style={{flex: 2, justifyContent: 'space-around'}}>
          <Text style={{fontSize: 15}}>{this.state.data.title}</Text>
          <Text style={{fontSize: 13, color: 'rgba(0, 0, 0, 0.5)'}}>
            {this.state.data.date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
