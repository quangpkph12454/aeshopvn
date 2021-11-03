import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

import ImageHelper from '../../../resource/ImageHelper';
import {Actions} from 'react-native-router-flux';
import Default from '../../../resource/Default';
import { strings } from "../../../Utils/i18n/i18n";

export default class FlashScreen extends Component {
  constructor(props) {
    super(props);
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('searchScreen');
      }, 2000),
    );
  };
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      Actions.jump('mainApp');
    }
  }

  render() {
    return (
      <View
        style={{
          width: Default.constants.widthScreen,
          height: '100%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={ImageHelper.logo}
          style={{
            width: Default.constants.X * 6,
            height: Default.constants.X * 6,
          }}
        />
        <Text
          style={[
            Default.text.textSlogan,
            {maxWidth: Default.constants.X * 7, textAlign: 'center'},
          ]}>
          {strings('slogan')}
        </Text>
      </View>
    );
  }
}
