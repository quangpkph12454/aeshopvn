import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

import ImageHelper from '../../assets/Images';
import {Actions} from 'react-native-router-flux';
import Default from '../../functions/AppStyles';
import {strings} from '../../assets/strings/i18n/i18n';
import styles from './styles';

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
      Actions.replace('mainApp');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={ImageHelper.logo} style={styles.logo} />
        <Text style={styles.text}>{strings('slogan')}</Text>
      </View>
    );
  }
}
